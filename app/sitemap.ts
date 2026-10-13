import type { MetadataRoute } from "next";

const BASE = "https://ascendantops.com";

// Priority reflects commercial intent, not vanity.
// 1.0 = the pages a buyer should land on
// 0.3 = supporting pages
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: Array<{ path: string; priority: number; freq: "weekly" | "monthly" }> = [
    { path: "/",                       priority: 1.0, freq: "weekly" },
    { path: "/services/geo",           priority: 0.9, freq: "weekly" },
    { path: "/pricing",                priority: 0.9, freq: "weekly" },
    { path: "/benchmarks",             priority: 0.8, freq: "weekly" },
    { path: "/contact",                priority: 0.8, freq: "monthly" },
    { path: "/about",                  priority: 0.7, freq: "monthly" },
    { path: "/services/assessment",    priority: 0.7, freq: "monthly" },
    { path: "/services/recurring",     priority: 0.7, freq: "monthly" },
    { path: "/capital-audit",          priority: 0.6, freq: "monthly" },
  ];

  return routes.map((r) => ({
    url: BASE + r.path,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
