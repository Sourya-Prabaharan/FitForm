import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";
import { AuthTokens } from "@/types";

const sessionKey = "fitform.session";
const legacyKeys = ["fitform.accessToken", "fitform.refreshToken"];
let pending: Promise<unknown> = Promise.resolve();

// Serialize storage operations so refresh, migration and logout cannot overwrite each other.
function serialize<T>(operation: () => Promise<T>): Promise<T> {
  const result = pending.then(operation);
  pending = result.catch(() => undefined);
  return result;
}

function parseTokens(saved: string): AuthTokens | null {
  try {
    const value = JSON.parse(saved);
    return typeof value?.accessToken === "string" && value.accessToken.length > 0
      && typeof value?.refreshToken === "string" && value.refreshToken.length > 0 ? value : null;
  } catch {
    return null;
  }
}

async function readStoredSession(): Promise<AuthTokens | null> {
  const saved = await SecureStore.getItemAsync(sessionKey);
  if (saved) {
    const tokens = parseTokens(saved);
    if (tokens) return tokens;
    await removeStoredSession();
    return null;
  }
  const accessToken = await AsyncStorage.getItem("fitform.accessToken");
  const refreshToken = await AsyncStorage.getItem("fitform.refreshToken");
  if (!accessToken || !refreshToken) return null;
  const tokens = { accessToken, refreshToken };
  await writeStoredSession(tokens);
  return tokens;
}

async function writeStoredSession(tokens: AuthTokens): Promise<void> {
  await SecureStore.setItemAsync(sessionKey, JSON.stringify(tokens), {
    keychainAccessible: SecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY
  });
  await AsyncStorage.multiRemove(legacyKeys);
}

async function removeStoredSession(): Promise<void> {
  // Remove migration keys first: a partial failure must not resurrect legacy credentials.
  await AsyncStorage.multiRemove(legacyKeys);
  await SecureStore.deleteItemAsync(sessionKey);
}

export const readSession = () => serialize(readStoredSession);
export const writeSession = (tokens: AuthTokens) => serialize(() => writeStoredSession(tokens));
export const clearSession = () => serialize(removeStoredSession);

export function replaceSession(expectedRefreshToken: string, tokens: AuthTokens): Promise<boolean> {
  return serialize(async () => {
    const current = await readStoredSession();
    if (current?.refreshToken !== expectedRefreshToken) return false;
    await writeStoredSession(tokens);
    return true;
  });
}
