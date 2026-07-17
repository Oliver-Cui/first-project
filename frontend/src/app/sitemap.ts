import type { MetadataRoute } from "next";

const baseUrl = "https://lightpathcoaching.co.nz";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/tutoring", "/tutors", "/about", "/booking"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
  }));
}
