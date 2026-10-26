import { AboutView } from "@/components/views"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata("de", "about")

export default function Page() {
  return <AboutView lang="de" />
}
