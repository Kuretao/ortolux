import type { MetadataRoute } from "next";

import { blogArticles, products } from "@/src/data/shop";

const baseUrl = "https://www.ortolux-matras.ru";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/catalog",
    "/delivery",
    "/payment",
    "/guarantee",
    "/partners",
    "/blog",
    "/privacy",
    "/terms",
    "/offer",
    "/personal-data",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/product/${product.slug}`,
    lastModified: new Date(product.createdAt),
  }));

  const blogRoutes = blogArticles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.publishedAt),
  }));

  return [...staticRoutes, ...productRoutes, ...blogRoutes];
}
