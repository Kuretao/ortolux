import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/account",
        "/cart",
        "/checkout",
        "/compare",
        "/favorites",
        "/login",
        "/register",
        "/api",
      ],
    },
    sitemap: "https://www.ortolux-matras.ru/sitemap.xml",
  };
}
