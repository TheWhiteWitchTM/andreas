import type { MetadataRoute } from "next"
import { localize, pageKeys } from "@/lib/routes"
import { siteUrl } from "@/lib/site"

export const dynamic = "force-static"

function loc(path: string): string {
  const joined = `${siteUrl}${path}`
  return joined.endsWith("/") ? joined : `${joined}/`
}

export default function sitemap(): MetadataRoute.Sitemap {
  return pageKeys.map((key) => ({
    url: loc(localize("de", key)),
    changeFrequency: key === "home" ? "monthly" : "yearly",
    priority: key === "home" ? 1 : 0.7,
    alternates: {
      languages: {
        de: loc(localize("de", key)),
        en: loc(localize("en", key)),
      },
    },
  }))
}
