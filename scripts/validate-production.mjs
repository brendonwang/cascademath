import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadEnv } from "vite";

const scriptsDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptsDirectory, "..");
const env = loadEnv("production", projectRoot, "");
const value = process.env.VITE_SITE_URL || env.VITE_SITE_URL;

if (!value) {
  throw new Error(
    "VITE_SITE_URL is required for a production build. Set it to the final HTTPS origin, such as https://www.your-domain.org.",
  );
}

const url = new URL(value);
const isExample =
  url.hostname === "example.com" ||
  url.hostname === "www.example.org" ||
  url.hostname.endsWith(".example");
const isLocal =
  url.hostname === "localhost" ||
  url.hostname.endsWith(".localhost") ||
  url.hostname === "127.0.0.1" ||
  url.hostname === "::1";

if (url.protocol !== "https:") {
  throw new Error("VITE_SITE_URL must use HTTPS.");
}

if (isExample || isLocal) {
  throw new Error("VITE_SITE_URL must use the real public hostname, not an example or local URL.");
}

if (url.pathname !== "/" || url.search || url.hash) {
  throw new Error("VITE_SITE_URL must be an origin only, with no path, query, hash, or trailing content.");
}

console.log(`Production URL: ${url.origin}`);
