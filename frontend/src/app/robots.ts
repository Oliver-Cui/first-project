import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://lightpathcoaching.co.nz/sitemap.xml",
    host: "https://lightpathcoaching.co.nz",
  };
}
