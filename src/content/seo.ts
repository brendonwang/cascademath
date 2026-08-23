export type SeoPage = {
  path: string;
  outputFile: string;
  title: string;
  description: string;
  schemaType: "WebPage" | "AboutPage" | "CollectionPage";
  noIndex?: boolean;
};

export const siteSeo = {
  name: "Cascade Math",
  legalName: "Cascade Math Foundation",
  language: "en-US",
  locale: "en_US",
  email: "cascademathcm@gmail.com",
  imagePath: "/assets/seattle-skyline-real.jpg",
  imageAlt: "The Seattle skyline with the Space Needle",
  imageWidth: 1800,
  imageHeight: 1349,
  logoPath: "/assets/cascade-math-mark.png",
  logoWidth: 1280,
  logoHeight: 1280,
} as const;

export const seoPages: SeoPage[] = [
  {
    path: "/",
    outputFile: "index.html",
    title: "Cascade Math | Student-run math events in Seattle",
    description:
      "Cascade Math is a student-run Seattle nonprofit organizing math contests, puzzles, and workshops for students at every skill level.",
    schemaType: "WebPage",
  },
  {
    path: "/about",
    outputFile: "about.html",
    title: "About Cascade Math | Student-run nonprofit in Seattle",
    description:
      "Learn about Cascade Math's mission, values, and student team organizing math events across the Seattle area.",
    schemaType: "AboutPage",
  },
  {
    path: "/cmf",
    outputFile: "cmf.html",
    title: "2026 Cascade Math Fest | Seattle math event",
    description:
      "Join the 2026 Cascade Math Fest in Seattle on September 19 for contests, team problem solving, puzzles, workshops, prizes, and trophies.",
    schemaType: "WebPage",
  },
  {
    path: "/sponsors",
    outputFile: "sponsors.html",
    title: "Sponsors | 2026 Cascade Math Fest",
    description:
      "Meet the organizations supporting the 2026 Cascade Math Fest and learn how sponsorship helps fund the venue, materials, awards, and access.",
    schemaType: "CollectionPage",
  },
];

export const notFoundSeo: SeoPage = {
  path: "/404",
  outputFile: "404.html",
  title: "Page not found | Cascade Math",
  description: "The requested page could not be found.",
  schemaType: "WebPage",
  noIndex: true,
};

export function normalizePathname(pathname: string) {
  const normalized = pathname.replace(/\/+$/, "");
  return normalized || "/";
}

export function getSeoPage(pathname: string) {
  const normalized = normalizePathname(pathname);
  return seoPages.find((page) => page.path === normalized) ?? notFoundSeo;
}

export function normalizeSiteUrl(value: string | undefined) {
  if (!value) {
    return "";
  }

  try {
    const url = new URL(value);
    return `${url.origin}${url.pathname}`.replace(/\/+$/, "");
  } catch {
    return "";
  }
}

export function absoluteUrl(siteUrl: string, pathname: string) {
  return new URL(pathname, `${siteUrl}/`).toString();
}

export function createStructuredData(page: SeoPage, siteUrl: string) {
  const homeUrl = absoluteUrl(siteUrl, "/");
  const pageUrl = absoluteUrl(siteUrl, page.path);
  const imageUrl = absoluteUrl(siteUrl, siteSeo.imagePath);
  const organizationId = `${homeUrl}#organization`;
  const websiteId = `${homeUrl}#website`;
  const webPageId = `${pageUrl}#webpage`;
  const graph: Record<string, unknown>[] = [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: siteSeo.legalName,
      alternateName: siteSeo.name,
      url: homeUrl,
      email: siteSeo.email,
      description: seoPages[0].description,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteUrl, siteSeo.logoPath),
        width: siteSeo.logoWidth,
        height: siteSeo.logoHeight,
      },
      areaServed: {
        "@type": "City",
        name: "Seattle",
        containedInPlace: {
          "@type": "State",
          name: "Washington",
        },
      },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: homeUrl,
      name: siteSeo.name,
      publisher: { "@id": organizationId },
      inLanguage: siteSeo.language,
    },
    {
      "@type": page.schemaType,
      "@id": webPageId,
      url: pageUrl,
      name: page.title,
      description: page.description,
      isPartOf: { "@id": websiteId },
      about: { "@id": organizationId },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: imageUrl,
        width: siteSeo.imageWidth,
        height: siteSeo.imageHeight,
      },
      inLanguage: siteSeo.language,
    },
  ];

  if (page.path !== "/") {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: homeUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: page.title.split(" |")[0],
          item: pageUrl,
        },
      ],
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
