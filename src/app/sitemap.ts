import type { MetadataRoute } from "next";
import { person } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/work/berry", "/work/tube-route-finder"].map((path) => ({
    url: `${person.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
