import type { MetadataRoute } from "next";
import { blogPosts, caseStudies, services } from "@/lib/site-data";
import { siteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["/", "/services", "/case-studies", "/about", "/careers", "/blog", "/contact", "/dashboard"];
  return [
    ...staticPages.map((path) => ({
      url: siteUrl(path),
      lastModified: new Date(),
    })),
    ...services.map((item) => ({
      url: siteUrl(`/services/${item.slug}`),
      lastModified: new Date(),
    })),
    ...caseStudies.map((item) => ({
      url: siteUrl(`/case-studies/${item.slug}`),
      lastModified: new Date(),
    })),
    ...blogPosts.map((item) => ({
      url: siteUrl(`/blog/${item.slug}`),
      lastModified: new Date(item.date),
    })),
  ];
}
