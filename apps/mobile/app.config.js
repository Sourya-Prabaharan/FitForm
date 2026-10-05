module.exports = ({ config }) => {
  const release = ["production", "preview"].includes(process.env.EAS_BUILD_PROFILE);
  if (release) {
    for (const name of ["EXPO_PUBLIC_API_URL", "EXPO_PUBLIC_PRIVACY_URL", "EXPO_PUBLIC_TERMS_URL"]) {
      const value = process.env[name];
      let url;
      try { url = new URL(value); } catch { throw new Error(`${name} must be set in the EAS environment`); }
      if (url.protocol !== "https:" || /localhost|127\.0\.0\.1|example\.(com|org)|replace-with/.test(url.hostname)) {
        throw new Error(`${name} must use your deployed HTTPS host`);
      }
    }
  }
  return config;
};
