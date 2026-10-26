import { ServicesView } from "@/components/views"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata("de", "services")

export default function Page() {
  return <ServicesView lang="de" />
}
