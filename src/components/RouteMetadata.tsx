import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  absoluteUrl,
  createStructuredData,
  getSeoPage,
  normalizeSiteUrl,
  siteSeo,
} from "@/content/seo";

function setMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.append(element);
  }

  element.content = content;
}

function removeMeta(attribute: "name" | "property", key: string) {
  document.head.querySelector(`meta[${attribute}="${key}"]`)?.remove();
}

function setCanonical(href: string | null) {
  const existing = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!href) {
    existing?.remove();
    return;
  }

  const element = existing ?? document.createElement("link");
  element.rel = "canonical";
  element.href = href;

  if (!existing) {
    document.head.append(element);
  }
}

function setStructuredData(value: Record<string, unknown> | null) {
  const existing = document.getElementById("site-structured-data");

  if (!value) {
    existing?.remove();
    return;
  }

  const element = existing ?? document.createElement("script");
  element.id = "site-structured-data";
  element.setAttribute("type", "application/ld+json");
  element.textContent = JSON.stringify(value);

  if (!existing) {
    document.head.append(element);
  }
}

export function RouteMetadata() {
  const location = useLocation();

  useEffect(() => {
    const page = getSeoPage(location.pathname);
    const configuredSiteUrl = normalizeSiteUrl(import.meta.env.VITE_SITE_URL);
    const siteUrl = configuredSiteUrl || window.location.origin;
    const pageUrl = absoluteUrl(siteUrl, page.path);
    const imageUrl = absoluteUrl(siteUrl, siteSeo.imagePath);

    document.title = page.title;
    setMeta("name", "description", page.description);
    setMeta(
      "name",
      "robots",
      page.noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large",
    );
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", siteSeo.name);
    setMeta("property", "og:locale", siteSeo.locale);
    setMeta("property", "og:title", page.title);
    setMeta("property", "og:description", page.description);
    setMeta("property", "og:image", imageUrl);
    setMeta("property", "og:image:width", String(siteSeo.imageWidth));
    setMeta("property", "og:image:height", String(siteSeo.imageHeight));
    setMeta("property", "og:image:alt", siteSeo.imageAlt);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", page.title);
    setMeta("name", "twitter:description", page.description);
    setMeta("name", "twitter:image", imageUrl);
    setMeta("name", "twitter:image:alt", siteSeo.imageAlt);
    setCanonical(page.noIndex ? null : pageUrl);

    if (page.noIndex) {
      removeMeta("property", "og:url");
    } else {
      setMeta("property", "og:url", pageUrl);
    }

    setStructuredData(page.noIndex ? null : createStructuredData(page, siteUrl));
  }, [location.pathname]);

  return null;
}
