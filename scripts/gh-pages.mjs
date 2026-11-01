import { existsSync, writeFileSync } from "node:fs"
import { join } from "node:path"

const outDir = join(process.cwd(), "out")

if (!existsSync(outDir)) {
  console.error("out/ is missing. next build did not write the export.")
  process.exit(1)
}

writeFileSync(join(outDir, ".nojekyll"), "")
console.log("gh-pages: .nojekyll written. This build stays in out/.")
