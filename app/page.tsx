"use client"

import React, { useState } from "react"
import { translations } from "./data/translations"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import UniverseBackground from "./components/UniverseBackground"

export default function Portfolio() {
  const [language, setLanguage] = useState("en")
  const [activeSection, setActiveSection] = useState("professional")

  const t = translations[language as keyof typeof translations]

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Universe Background */}
      <UniverseBackground />

      {/* Header */}
      <Header
        logo={t.header.logo}
        navItems={t.header.nav}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        language={language}
        onLanguageChange={setLanguage}
      />

      {/* Body - Main Content */}
      <Body
        activeSection={activeSection}
        translations={t}
      />

      {/* Footer */}
      <Footer
        contact={t.footer.contact}
        copyright={t.footer.copyright}
      />
    </div>
  )
}