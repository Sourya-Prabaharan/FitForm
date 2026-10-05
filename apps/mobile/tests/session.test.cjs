const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const ts = require("typescript");

// Execute the actual TypeScript module with in-memory native storage adapters.
function setup(initial = {}) {
  const stored = new Map(Object.entries(initial));
  const secure = {
    getItemAsync: async (key) => stored.get(key) ?? null,
    setItemAsync: async (key, value) => { stored.set(key, value); },
    deleteItemAsync: async (key) => { stored.delete(key); },
    WHEN_UNLOCKED_THIS_DEVICE_ONLY: "device-only"
  };
  const legacy = {
    getItem: async (key) => stored.get(key) ?? null,
    multiRemove: async (keys) => { keys.forEach((key) => stored.delete(key)); }
  };
  const source = fs.readFileSync(path.join(__dirname, "../src/services/session.ts"), "utf8");
  const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true }
  }).outputText;
  const exports = {};
  vm.runInNewContext(compiled, {
    exports,
    require: (name) => {
      if (name === "expo-secure-store") return secure;
      if (name === "@react-native-async-storage/async-storage") return legacy;
      throw new Error(`Unexpected import ${name}`);
    }
  });
  return { api: exports, stored, secure };
}

const first = { accessToken: "access-a", refreshToken: "refresh-a" };
const next = { accessToken: "access-b", refreshToken: "refresh-b" };

test("refresh cannot restore a logged-out session", async () => {
  const { api } = setup();
  await api.writeSession(first);
  await api.clearSession();
  assert.equal(await api.replaceSession(first.refreshToken, next), false);
  assert.equal(await api.readSession(), null);
});

test("stale refresh cannot overwrite another login", async () => {
  const { api } = setup();
  await api.writeSession(first);
  await api.writeSession(next);
  assert.equal(await api.replaceSession(first.refreshToken, first), false);
  assert.equal((await api.readSession()).accessToken, next.accessToken);
});

test("concurrent refresh then logout ends without tokens", async () => {
  const { api } = setup();
  await api.writeSession(first);
  await Promise.all([api.replaceSession(first.refreshToken, next), api.clearSession()]);
  assert.equal(await api.readSession(), null);
});

test("legacy credentials migrate once and are removed on logout", async () => {
  const { api, stored } = setup({ "fitform.accessToken": "a", "fitform.refreshToken": "r" });
  assert.equal((await api.readSession()).accessToken, "a");
  assert.equal(stored.has("fitform.accessToken"), false);
  await api.clearSession();
  assert.equal(await api.readSession(), null);
});

test("corrupt persisted data is discarded", async () => {
  for (const saved of ["invalid-json", "null", '{"accessToken":1}', '{}']) {
    const { api } = setup({ "fitform.session": saved });
    assert.equal(await api.readSession(), null);
  }
});

test("storage errors do not poison the operation queue", async () => {
  const { api, secure } = setup();
  const original = secure.setItemAsync;
  secure.setItemAsync = async () => { throw new Error("Keychain unavailable"); };
  await assert.rejects(api.writeSession(first), /Keychain unavailable/);
  secure.setItemAsync = original;
  await api.writeSession(next);
  assert.equal((await api.readSession()).accessToken, next.accessToken);
});
