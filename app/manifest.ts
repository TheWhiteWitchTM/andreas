import type { MetadataRoute } from "next"
import { withBase } from "@/lib/site"

export const dynamic = "force-static"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Andreas — Freiberufliche Software",
    short_name: "Andreas",
    description: "Freelance software from Mainz. Java, C++, C#, and Visual Basic.",
    id: withBase("/"),
    start_url: withBase("/"),
    scope: withBase("/"),
    lang: "de",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    categories: ["business"],
    icons: [
      { src: withBase("/icon-192x192.png"), sizes: "192x192", type: "image/png" },
      { src: withBase("/icon-512x512.png"), sizes: "512x512", type: "image/png" },
    ],
  }
}
