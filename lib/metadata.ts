import type { Metadata } from "next"
import { dictionary } from "./i18n"
import type { Locale, PageKey } from "./routes"
import { localize } from "./routes"
import { legalName, person, siteName, siteOrigin, siteUrl, withBase } from "./site"

const home = dictionary.de.meta.home

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: { absolute: home.title },
  description: home.description,
  keywords: [
    "Andreas",
    "Freiberufler",
    "freelance software",
    "Java",
    "C++",
    "C#",
    "Visual Basic",
    "VB.NET",
    "Mainz",
    "Rheinland-Pfalz",
    "Hessen",
    "Germany",
  ],
  authors: [{ name: legalName(), url: siteUrl }],
  creator: legalName(),
  publisher: legalName(),
  applicationName: siteName,
  category: "technology",
  openGraph: {
    title: home.title,
    description: home.description,
    url: withBase("/"),
    siteName,
    locale: "de_DE",
    alternateLocale: ["en_US"],
    type: "website",
    images: [{ url: withBase("/og.jpg"), width: 1200, height: 630, alt: dictionary.de.ogAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: home.title,
    description: home.description,
    images: [withBase("/og.jpg")],
  },
  icons: {
    icon: [
      { url: withBase("/favicon.ico"), sizes: "32x32" },
      { url: withBase("/icon.svg"), type: "image/svg+xml" },
      { url: withBase("/icon-192x192.png"), sizes: "192x192", type: "image/png" },
      { url: withBase("/icon-512x512.png"), sizes: "512x512", type: "image/png" },
    ],
    apple: withBase("/apple-touch-icon.png"),
  },
  alternates: {
    canonical: withBase("/"),
    languages: {
      de: withBase("/"),
      en: withBase("/en/"),
      "x-default": withBase("/"),
    },
  },
  robots: {
    index: false,
    follow: false,
  },
}

export function pageMetadata(lang: Locale, key: PageKey): Metadata {
  const copy = dictionary[lang]
  const meta = copy.meta[key]
  const path = localize(lang, key)
  const canonical = withBase(path)
  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: {
      canonical,
      languages: {
        de: withBase(localize("de", key)),
        en: withBase(localize("en", key)),
        "x-default": withBase(localize("de", key)),
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      siteName,
      locale: lang === "de" ? "de_DE" : "en_US",
      alternateLocale: lang === "de" ? ["en_US"] : ["de_DE"],
      type: "website",
      images: [{ url: withBase("/og.jpg"), width: 1200, height: 630, alt: copy.ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [withBase("/og.jpg")],
    },
  }
}

export function jsonLdGraph() {
  const address = {
    "@type": "PostalAddress",
    addressLocality: person.city,
    addressRegion: person.region,
    addressCountry: person.countryCode,
    ...(person.street ? { streetAddress: person.street } : {}),
    ...(person.postalCode ? { postalCode: person.postalCode } : {}),
  }
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: siteName,
        url: `${siteUrl}/`,
        inLanguage: ["de", "en"],
        publisher: { "@id": `${siteUrl}/#andreas` },
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#andreas`,
        name: legalName(),
        jobTitle: "Freelance software developer",
        url: `${siteUrl}/`,
        image: `${siteUrl}/andreas.jpg`,
        address,
        knowsLanguage: ["de", "en"],
        knowsAbout: ["Java", "C++", "C#", "Visual Basic", ".NET"],
        ...(person.email ? { email: person.email } : {}),
        ...(person.phone ? { telephone: person.phone } : {}),
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#service`,
        name: "Andreas — freelance software",
        url: `${siteUrl}/`,
        image: `${siteUrl}/og.jpg`,
        founder: { "@id": `${siteUrl}/#andreas` },
        address,
        areaServed: ["Rheinland-Pfalz", "Hessen", "Germany", "Worldwide"],
        availableLanguage: ["German", "English"],
        serviceType: ["Java development", "C++ development", "C# development", "Visual Basic development"],
      },
    ],
  }
}
