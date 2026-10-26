import type { Metadata, Viewport } from "next"
import { Shell } from "@/components/Shell"
import { baseMetadata, jsonLdGraph } from "@/lib/metadata"
import "./globals.css"

export const metadata: Metadata = baseMetadata

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className="bg-ink text-paper antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: 'document.documentElement.lang=/\\/en(\\/|$)/.test(location.pathname)?"en":"de"',
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph()) }} />
        <Shell>{children}</Shell>
      </body>
    </html>
  )
}
