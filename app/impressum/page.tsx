import { ImprintView } from "@/components/views"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata("de", "imprint")

export default function Page() {
  return <ImprintView lang="de" />
}
