import type { MetadataRoute } from "next";

const baseUrl = "https://lightpathcoaching.co.nz";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/tutoring", "/tutors", "/about", "/booking"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/booking" ? 0.9 : 0.8,
  }));
}
