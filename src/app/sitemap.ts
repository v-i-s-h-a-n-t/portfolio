import type { MetadataRoute } from "next";
import { getPublishedProjectContent } from "@/lib/mdx-content";
import { getSiteUrl } from "@/lib/site-url";

const staticPaths = [
  "/",
  "/about",
  "/projects",
  "/achievements",
  "/contact",
  "/resume",
  "/changelog",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  if (!siteUrl) return [];

  const projectPaths = getPublishedProjectContent().map(
    ({ metadata }) => `/projects/${metadata.slug}`,
  );

  return [...staticPaths, ...projectPaths].map((path) => ({
    url: new URL(path, siteUrl).toString(),
  }));
}
