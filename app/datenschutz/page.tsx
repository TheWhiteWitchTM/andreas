import { PrivacyView } from "@/components/views"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata("de", "privacy")

export default function Page() {
  return <PrivacyView lang="de" />
}
