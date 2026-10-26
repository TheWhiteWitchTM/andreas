import { ImprintView } from "@/components/views"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata("en", "imprint")

export default function Page() {
  return <ImprintView lang="en" />
}
