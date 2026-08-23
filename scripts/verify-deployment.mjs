import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadEnv } from "vite";

const scriptsDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptsDirectory, "..");
const distDirectory = path.join(projectRoot, "dist");
const env = loadEnv("production", projectRoot, "");
const siteUrl = (process.env.VITE_SITE_URL || env.VITE_SITE_URL).replace(/\/+$/, "");
const routes = [
  { path: "/", file: "index.html" },
  { path: "/about", file: "about.html" },
  { path: "/cmf", file: "cmf.html" },
  { path: "/sponsors", file: "sponsors.html" },
];
const titles = new Set();

for (const route of routes) {
  const html = await readFile(path.join(distDirectory, route.file), "utf8");
  const canonical = route.path === "/" ? `${siteUrl}/` : `${siteUrl}${route.path}`;
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];

  if (!title || titles.has(title)) {
    throw new Error(`Missing or duplicate title in ${route.file}.`);
  }

  titles.add(title);

  if (!html.includes(`<link rel="canonical" href="${canonical}" />`)) {
    throw new Error(`Incorrect canonical URL in ${route.file}.`);
  }

  if (!html.includes('id="site-structured-data"')) {
    throw new Error(`Missing structured data in ${route.file}.`);
  }

  if (!html.includes('<div id="root">') || !html.includes('<main id="content">')) {
    throw new Error(`Missing prerendered app content in ${route.file}.`);
  }
}

const notFound = await readFile(path.join(distDirectory, "404.html"), "utf8");

if (!notFound.includes('name="robots" content="noindex, nofollow"')) {
  throw new Error("404.html must be marked noindex.");
}

if (!notFound.includes("Page not found")) {
  throw new Error("404.html is missing its rendered page content.");
}

const sitemap = await readFile(path.join(distDirectory, "sitemap.xml"), "utf8");
const robots = await readFile(path.join(distDirectory, "robots.txt"), "utf8");

for (const route of routes) {
  const canonical = route.path === "/" ? `${siteUrl}/` : `${siteUrl}${route.path}`;
  if (!sitemap.includes(`<loc>${canonical}</loc>`)) {
    throw new Error(`sitemap.xml is missing ${canonical}.`);
  }
}

if (!robots.includes(`Sitemap: ${siteUrl}/sitemap.xml`)) {
  throw new Error("robots.txt does not reference the production sitemap.");
}

await access(path.join(distDirectory, "_headers"));

const wrangler = JSON.parse(await readFile(path.join(projectRoot, "wrangler.jsonc"), "utf8"));

if (
  wrangler.assets?.directory !== "./dist" ||
  wrangler.assets?.html_handling !== "drop-trailing-slash" ||
  wrangler.assets?.not_found_handling !== "404-page"
) {
  throw new Error("wrangler.jsonc does not match the prerendered deployment output.");
}

console.log(`Verified ${routes.length} indexed routes, the 404 page, sitemap, robots, and Cloudflare config.`);
