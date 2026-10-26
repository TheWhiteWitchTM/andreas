import type { NextConfig } from "next"

// GitHub Pages serves this repo at /andreas/. Local `next dev` has no prefix.
const basePath = process.env.GITHUB_PAGES === "true" ? "/andreas" : ""

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
