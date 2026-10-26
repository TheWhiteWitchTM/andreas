import { PrivacyView } from "@/components/views"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata("en", "privacy")

export default function Page() {
  return <PrivacyView lang="en" />
}
