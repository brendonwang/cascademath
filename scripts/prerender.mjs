import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { loadEnv } from "vite";

const scriptsDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptsDirectory, "..");
const distDirectory = path.join(projectRoot, "dist");
const serverBuildDirectory = path.join(projectRoot, ".server-build");
const serverEntry = path.join(serverBuildDirectory, "entry-server.js");
const templatePath = path.join(distDirectory, "index.html");
const env = loadEnv("production", projectRoot, "");
const server = await import(pathToFileURL(serverEntry).href);
const siteUrl = server.normalizeSiteUrl(process.env.VITE_SITE_URL || env.VITE_SITE_URL);
const pages = [...server.seoPages, server.notFoundSeo];
const template = await readFile(templatePath, "utf8");

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function renderHead(page) {
  const imageUrl = siteUrl
    ? server.absoluteUrl(siteUrl, server.siteSeo.imagePath)
    : server.siteSeo.imagePath;
  const pageUrl = siteUrl ? server.absoluteUrl(siteUrl, page.path) : "";
  const robots = page.noIndex
    ? "noindex, nofollow"
    : "index, follow, max-image-preview:large";
  const lines = [
    "    <!-- seo:managed:start -->",
    `    <title>${escapeHtml(page.title)}</title>`,
    `    <meta name="description" content="${escapeHtml(page.description)}" />`,
    `    <meta name="robots" content="${robots}" />`,
    `    <meta name="author" content="${escapeHtml(server.siteSeo.legalName)}" />`,
    '    <meta property="og:type" content="website" />',
    `    <meta property="og:site_name" content="${escapeHtml(server.siteSeo.name)}" />`,
    `    <meta property="og:locale" content="${server.siteSeo.locale}" />`,
    `    <meta property="og:title" content="${escapeHtml(page.title)}" />`,
    `    <meta property="og:description" content="${escapeHtml(page.description)}" />`,
    `    <meta property="og:image" content="${escapeHtml(imageUrl)}" />`,
    `    <meta property="og:image:width" content="${server.siteSeo.imageWidth}" />`,
    `    <meta property="og:image:height" content="${server.siteSeo.imageHeight}" />`,
    `    <meta property="og:image:alt" content="${escapeHtml(server.siteSeo.imageAlt)}" />`,
    '    <meta name="twitter:card" content="summary_large_image" />',
    `    <meta name="twitter:title" content="${escapeHtml(page.title)}" />`,
    `    <meta name="twitter:description" content="${escapeHtml(page.description)}" />`,
    `    <meta name="twitter:image" content="${escapeHtml(imageUrl)}" />`,
    `    <meta name="twitter:image:alt" content="${escapeHtml(server.siteSeo.imageAlt)}" />`,
  ];

  if (pageUrl && !page.noIndex) {
    lines.push(`    <link rel="canonical" href="${escapeHtml(pageUrl)}" />`);
    lines.push(`    <meta property="og:url" content="${escapeHtml(pageUrl)}" />`);
    const structuredData = JSON.stringify(server.createStructuredData(page, siteUrl)).replaceAll(
      "<",
      "\\u003c",
    );
    lines.push(
      `    <script id="site-structured-data" type="application/ld+json">${structuredData}</script>`,
    );
  }

  lines.push("    <!-- seo:managed:end -->");
  return lines.join("\n");
}

function renderPage(page) {
  const appHtml = server.render(page.path);
  const withApp = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  const headPattern = /\s*<!-- seo:managed:start -->[\s\S]*?<!-- seo:managed:end -->/;

  if (!headPattern.test(withApp)) {
    throw new Error("Could not find the managed SEO block in dist/index.html.");
  }

  return withApp.replace(headPattern, `\n${renderHead(page)}`);
}

for (const page of pages) {
  const outputPath = path.join(distDirectory, page.outputFile);
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, renderPage(page), "utf8");
}

const robots = ["User-agent: *", "Allow: /"];

if (siteUrl) {
  robots.push("", `Sitemap: ${server.absoluteUrl(siteUrl, "/sitemap.xml")}`);
  const sitemapEntries = server.seoPages
    .map(
      (page) =>
        `  <url><loc>${escapeXml(server.absoluteUrl(siteUrl, page.path))}</loc></url>`,
    )
    .join("\n");
  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    sitemapEntries,
    "</urlset>",
    "",
  ].join("\n");
  await writeFile(path.join(distDirectory, "sitemap.xml"), sitemap, "utf8");
} else {
  console.warn("VITE_SITE_URL is not set; canonical URLs and sitemap.xml were skipped.");
}

await writeFile(path.join(distDirectory, "robots.txt"), `${robots.join("\n")}\n`, "utf8");
await rm(serverBuildDirectory, { recursive: true, force: true });

console.log(`Prerendered ${pages.length} HTML files.`);
