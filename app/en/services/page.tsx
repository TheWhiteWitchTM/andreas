import { ServicesView } from "@/components/views"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata("en", "services")

export default function Page() {
  return <ServicesView lang="en" />
}
