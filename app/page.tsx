import { HomeView } from "@/components/views"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata("de", "home")

export default function Page() {
  return <HomeView lang="de" />
}
