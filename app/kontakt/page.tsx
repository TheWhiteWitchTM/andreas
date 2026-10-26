import { ContactView } from "@/components/views"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata("de", "contact")

export default function Page() {
  return <ContactView lang="de" />
}
