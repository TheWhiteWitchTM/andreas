import type { Locale } from "./routes"

const de = {
  skip: "Zum Inhalt",
  notice: "Freiberuflich · Java · C++ · C# · Visual Basic",
  noticeTail: "· Entwurf",
  navLabel: "Seite",
  openMenu: "Menü öffnen",
  closeMenu: "Menü schließen",
  langLabel: "Sprache",
  nav: {
    home: "Start",
    services: "Leistungen",
    about: "Über",
    contact: "Kontakt",
  },
  footer: {
    label: "Fußbereich",
    imprint: "Impressum",
    privacy: "Datenschutz",
  },
  sideMiraKicker: "Mira",
  sideMiraText: "AI, C++ und TypeScript.",
  sideRole: "Freiberufliche Software",
  sidePlace: "Mainz · Rheinland-Pfalz",
  portraitAlt: "Andreas, kurzes braunes Haar, Brille, schwarzes Jackett, vor schwarzem Hintergrund.",
  ogAlt: "Andreas. Java, C++, C# und Visual Basic. Mainz, Rheinland-Pfalz, Hessen.",
  meta: {
    home: {
      title: "Andreas — Freiberufliche Software aus Mainz",
      description:
        "Andreas, freiberufliche Software aus Mainz. Java, C++, C# und Visual Basic. Remote in Deutschland und überall. Vor Ort in Rheinland-Pfalz und Hessen.",
    },
    services: {
      title: "Leistungen — Java, C++, C# und Visual Basic",
      description:
        "Freiberufliche Entwicklung, Wartung und Beratung in Java, C++, C# und Visual Basic. Remote, vor Ort in Rheinland-Pfalz und Hessen, und auf Reise.",
    },
    about: {
      title: "Über Andreas",
      description:
        "Freiberuflicher Softwareentwickler in Mainz. Java, C++, C# und Visual Basic. Deutsch und Englisch. Remote und vor Ort.",
    },
    contact: {
      title: "Kontakt — Andreas in Mainz",
      description:
        "Andreas ist in Mainz ansässig. Remote in Deutschland und überall. Vor Ort in Rheinland-Pfalz und Hessen. Reisen nach Absprache.",
    },
    imprint: {
      title: "Impressum",
      description: "Anbieterkennzeichnung für die Website von Andreas, freiberufliche Software aus Mainz.",
    },
    privacy: {
      title: "Datenschutz",
      description: "Datenschutzhinweise. Statische Website, keine Cookies, kein Tracking. Hosting über GitHub Pages.",
    },
  },
  home: {
    kicker: "Andreas · Mainz",
    title: "Freiberufliche Software.",
    lead: "Andreas entwickelt in Java, C++, C# und Visual Basic. Der Sitz ist Mainz. Remote arbeitet er in Deutschland und von überall. Vor Ort sind es Rheinland-Pfalz und Hessen. Wenn die Arbeit die Reise braucht, reist er.",
    servicesLink: "Leistungen",
    contactLink: "Kontakt",
    hireKicker: "Leistungen",
    hireTitle: "Was er übernimmt",
    services: [
      { title: "Java", text: "Anwendungen, Schnittstellen und die Pflege von Systemen, die schon laufen." },
      { title: "C++", text: "Native Programme, performante Kernlogik und Werkzeuge, die auf der Maschine bleiben." },
      { title: "C#", text: "Anwendungen und Dienste auf .NET, und die ruhige Weiterentwicklung bestehender Software." },
      { title: "Visual Basic", text: "Bestehende Programme in Visual Basic und VB.NET warten, erweitern und anbinden." },
    ],
    reachKicker: "Erreichbar",
    reachTitle: "Wo die Arbeit stattfindet",
    reach: [
      { title: "Remote", text: "Deutschland und überall sonst. Die meiste Arbeit läuft remote." },
      { title: "Vor Ort", text: "Rheinland-Pfalz und Hessen. Dort ist er regelmäßig beim Kunden." },
      { title: "Reise", text: "Darüber hinaus reist er, wenn das Projekt es braucht." },
    ],
    miraKicker: "Nebenan",
    miraTitle: "Mira's World",
    miraText: "Andreas arbeitet mit Mira. Auf ihrer Seite liegt die Arbeit in AI, C++ und TypeScript.",
    miraLink: "Mira's World öffnen",
  },
  services: {
    kicker: "Leistungen",
    title: "Java, C++, C# und Visual Basic.",
    lead: "Freiberufliche Entwicklung, Wartung und Beratung. Vier Sprachen, eine Arbeitsweise: Software, die schon im Einsatz ist, sauber weiterführen, und neue Programme bauen, wenn sie einen klaren Job haben.",
    items: [
      {
        title: "Java",
        text: "Server, Werkzeuge und die Schicht zwischen Systemen. Andreas übernimmt neue Java-Programme und die Pflege von Code, der schon in Betrieb ist.",
      },
      {
        title: "C++",
        text: "Native Software, wenn die Laufzeit und die Nähe zur Maschine zählen. Kleine Programme mit einem klaren Job, und größere Codebasen, die jemand lesen muss, bevor er sie ändert.",
      },
      {
        title: "C#",
        text: "Anwendungen und Dienste auf der .NET-Plattform. Neubau und die Weiterentwicklung von C#-Systemen, die ein Team schon benutzt.",
      },
      {
        title: "Visual Basic",
        text: "Viele Betriebe haben Visual Basic noch im Alltag, klassisch oder als VB.NET. Andreas hält diese Programme lauffähig, erweitert sie und bindet sie an neuere Systeme an.",
      },
    ],
    noteTitle: "Arbeitsweise",
    note: "Remote ist der Normalfall, in Deutschland und darüber hinaus. Vor Ort liegt der Schwerpunkt auf Rheinland-Pfalz und Hessen. Andere Orte sind eine Reise, kein Sonderfall.",
  },
  about: {
    kicker: "Über",
    title: "Andreas",
    paragraphs: [
      "Andreas ist freiberuflicher Softwareentwickler in Mainz, Rheinland-Pfalz. Die Arbeit liegt auf Java, C++, C# und Visual Basic.",
      "Der Sitz ist Mainz. Remote gilt das für Deutschland und für Aufträge von überall. Vor Ort deckt er vor allem Rheinland-Pfalz und Hessen ab. Reisen gehört dazu, wenn ein Projekt jemanden im Raum braucht.",
      "Gearbeitet wird auf Deutsch und auf Englisch.",
    ],
  },
  contact: {
    kicker: "Kontakt",
    title: "Mainz, und von dort aus weiter.",
    lead: "Andreas nimmt freiberufliche Aufträge in Java, C++, C# und Visual Basic an.",
    facts: [
      { title: "Sitz", text: "Mainz, Rheinland-Pfalz, Deutschland" },
      { title: "Remote", text: "Deutschland und überall" },
      { title: "Vor Ort", text: "Rheinland-Pfalz und Hessen" },
      { title: "Reise", text: "Nach Absprache" },
    ],
    mail: "E-Mail",
    pending:
      "E-Mail und Telefon stehen hier, sobald die Seite auf der eigenen Domain liegt. Bis dahin ist das eine Vorschau aus Mainz: Remote in Deutschland und überall, vor Ort in Rheinland-Pfalz und Hessen.",
  },
  imprint: {
    kicker: "Impressum",
    title: "Impressum",
    intro: "Angaben nach § 5 DDG.",
    name: "Name",
    role: "Tätigkeit",
    roleValue: "Freiberufliche Softwareentwicklung",
    place: "Ort",
    placeValue: "Mainz, Rheinland-Pfalz, Deutschland",
    address: "Anschrift",
    email: "E-Mail",
    phone: "Telefon",
    responsible: "Verantwortlich für den Inhalt",
    missingLead: "Für ein vollständiges Impressum fehlen noch:",
    missingName: "der vollständige Name",
    missingAddress: "eine ladungsfähige Anschrift mit Straße und Postleitzahl",
    missingContact: "eine schnelle elektronische Kontaktmöglichkeit, E-Mail oder Telefon",
    missingTail:
      "Das ist eine Vorschau. Vollständiger Name, Anschrift und direkte Kontaktadresse kommen auf die eigene Domain. Eine Umsatzsteuer-ID steht dann hier, falls eine vorhanden ist.",
  },
  privacy: {
    kicker: "Datenschutz",
    title: "Datenschutz",
    paragraphs: [
      "Diese Website ist statisch. Es gibt kein Konto, kein Kontaktformular, keine Reichweitenmessung und keine Cookies. Die Sprache steckt in der Adresse, nicht in einem gespeicherten Wert auf dem Gerät.",
      "Beim Aufruf verarbeitet der Hoster, GitHub Pages, die üblichen Verbindungsdaten. Dazu gehören IP-Adresse, Zeitpunkt und die aufgerufene Adresse. Es gilt die Datenschutzerklärung von GitHub.",
      "Es werden keine Schriftarten von einem fremden Server geladen. Die Seite nutzt die Schriften des Geräts.",
    ],
    github: "Datenschutzerklärung von GitHub",
    imprintLead: "Verantwortlich für die Inhalte ist Andreas, Mainz. Name, Anschrift und Kontakt stehen im",
    imprintLink: "Impressum",
  },
}

const en: typeof de = {
  skip: "Skip to content",
  notice: "Freelance · Java · C++ · C# · Visual Basic",
  noticeTail: "· Draft",
  navLabel: "Site",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  langLabel: "Language",
  nav: {
    home: "Home",
    services: "Services",
    about: "About",
    contact: "Contact",
  },
  footer: {
    label: "Footer",
    imprint: "Legal notice",
    privacy: "Privacy",
  },
  sideMiraKicker: "Mira",
  sideMiraText: "AI, C++, and TypeScript.",
  sideRole: "Freelance software",
  sidePlace: "Mainz · Rheinland-Pfalz",
  portraitAlt: "Andreas, short brown hair, glasses, black jacket, against a black background.",
  ogAlt: "Andreas. Java, C++, C#, and Visual Basic. Mainz, Rhineland-Palatinate, Hessen.",
  meta: {
    home: {
      title: "Andreas — freelance software from Mainz",
      description:
        "Andreas, freelance software from Mainz. Java, C++, C#, and Visual Basic. Remote across Germany and anywhere. On site in Rhineland-Palatinate and Hessen.",
    },
    services: {
      title: "Services — Java, C++, C#, and Visual Basic",
      description:
        "Freelance development, maintenance, and consulting in Java, C++, C#, and Visual Basic. Remote, on site in Rhineland-Palatinate and Hessen, and travel.",
    },
    about: {
      title: "About Andreas",
      description:
        "Freelance software developer in Mainz. Java, C++, C#, and Visual Basic. German and English. Remote and on site.",
    },
    contact: {
      title: "Contact — Andreas in Mainz",
      description:
        "Andreas is based in Mainz. Remote across Germany and anywhere. On site in Rhineland-Palatinate and Hessen. Travel by arrangement.",
    },
    imprint: {
      title: "Legal notice",
      description: "Provider identification for the website of Andreas, freelance software from Mainz.",
    },
    privacy: {
      title: "Privacy",
      description: "Privacy notes. Static website, no cookies, no analytics. Hosted on GitHub Pages.",
    },
  },
  home: {
    kicker: "Andreas · Mainz",
    title: "Freelance software.",
    lead: "Andreas builds software in Java, C++, C#, and Visual Basic. He is based in Mainz. Remote work covers Germany and anywhere else. On site, the work is in Rhineland-Palatinate and Hessen. He travels when a project needs him there.",
    servicesLink: "Services",
    contactLink: "Contact",
    hireKicker: "Services",
    hireTitle: "What he takes",
    services: [
      { title: "Java", text: "Applications, interfaces, and the upkeep of systems that are already running." },
      { title: "C++", text: "Native programs, performance-minded core code, and tools that stay on the machine." },
      { title: "C#", text: "Applications and services on .NET, and the steady development of software a team already uses." },
      { title: "Visual Basic", text: "Existing Visual Basic and VB.NET programs, kept running, extended, and connected to newer systems." },
    ],
    reachKicker: "Reach",
    reachTitle: "Where the work happens",
    reach: [
      { title: "Remote", text: "Germany and anywhere else. Most of the work is remote." },
      { title: "On site", text: "Rhineland-Palatinate and Hessen. That is the regular on-site area." },
      { title: "Travel", text: "He travels beyond that when the project calls for it." },
    ],
    miraKicker: "Next door",
    miraTitle: "Mira's World",
    miraText: "Andreas works with Mira. Her site covers AI, C++, and TypeScript.",
    miraLink: "Open Mira's World",
  },
  services: {
    kicker: "Services",
    title: "Java, C++, C#, and Visual Basic.",
    lead: "Freelance development, maintenance, and consulting. Four languages, one way of working: carry forward the software that is already in use, and build new programs when they have a clear job.",
    items: [
      {
        title: "Java",
        text: "Servers, tools, and the layer between systems. Andreas takes on new Java programs and the care of code that is already in production.",
      },
      {
        title: "C++",
        text: "Native software, when runtime and closeness to the machine matter. Small programs with one clear job, and larger codebases that need to be read before they are changed.",
      },
      {
        title: "C#",
        text: "Applications and services on the .NET platform. New builds, and the continued development of C# systems a team already uses.",
      },
      {
        title: "Visual Basic",
        text: "Many companies still run Visual Basic day to day, classic or VB.NET. Andreas keeps those programs running, extends them, and connects them to newer systems.",
      },
    ],
    noteTitle: "How the work runs",
    note: "Remote is the normal case, in Germany and beyond. On site, the focus is Rhineland-Palatinate and Hessen. Other places are a trip, not an exception.",
  },
  about: {
    kicker: "About",
    title: "Andreas",
    paragraphs: [
      "Andreas is a freelance software developer in Mainz, Rhineland-Palatinate. The work is Java, C++, C#, and Visual Basic.",
      "The base is Mainz. Remote covers Germany and clients anywhere. On site, the regular area is Rhineland-Palatinate and Hessen. Travel is part of the offer when a project needs someone in the room.",
      "The work is done in German and in English.",
    ],
  },
  contact: {
    kicker: "Contact",
    title: "Mainz, and onward from there.",
    lead: "Andreas takes freelance work in Java, C++, C#, and Visual Basic.",
    facts: [
      { title: "Base", text: "Mainz, Rhineland-Palatinate, Germany" },
      { title: "Remote", text: "Germany and anywhere" },
      { title: "On site", text: "Rhineland-Palatinate and Hessen" },
      { title: "Travel", text: "By arrangement" },
    ],
    mail: "Email",
    pending:
      "Email and phone go on this page when the site moves to his own domain. Until then it is a preview from Mainz: remote across Germany and anywhere, on site in Rhineland-Palatinate and Hessen.",
  },
  imprint: {
    kicker: "Legal notice",
    title: "Legal notice",
    intro: "Information under section 5 of the German Digital Services Act (DDG).",
    name: "Name",
    role: "Work",
    roleValue: "Freelance software development",
    place: "Place",
    placeValue: "Mainz, Rhineland-Palatinate, Germany",
    address: "Address",
    email: "Email",
    phone: "Phone",
    responsible: "Responsible for the content",
    missingLead: "A complete legal notice still needs:",
    missingName: "the full name",
    missingAddress: "a service address with street and postal code",
    missingContact: "a fast electronic contact, email or phone",
    missingTail:
      "This is a preview. The full name, street address, and direct contact go on his own domain. A VAT ID will be listed then, if there is one.",
  },
  privacy: {
    kicker: "Privacy",
    title: "Privacy",
    paragraphs: [
      "This website is static. There is no account, no contact form, no analytics, and no cookies. The language lives in the address, not in a value stored on the device.",
      "When the site is opened, the host, GitHub Pages, processes the usual connection data. That includes IP address, time, and the address that was requested. GitHub’s privacy statement applies.",
      "No fonts are loaded from another server. The page uses the fonts on the device.",
    ],
    github: "GitHub privacy statement",
    imprintLead: "Andreas, Mainz, is responsible for the content. Name, address, and contact are in the",
    imprintLink: "legal notice",
  },
}

export const dictionary: Record<Locale, typeof de> = { de, en }
export type Copy = typeof de
