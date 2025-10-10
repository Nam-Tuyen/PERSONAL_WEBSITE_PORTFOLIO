"use client"

import React, { useState } from "react"
import { translations } from "./data/translations"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Body from "./components/Body"
import Footer from "./components/Footer"
import UniverseBackground from "./components/UniverseBackground"

export default function Portfolio() {
  const [language, setLanguage] = useState("en")
  const [activeSection, setActiveSection] = useState("professional")
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  const t = translations[language as keyof typeof translations]

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Universe Background */}
      <UniverseBackground />

              {/* Sidebar */}
              <Sidebar
                translations={t}
                activeSection={activeSection}
                onSectionChange={setActiveSection}
                language={language}
                onLanguageChange={setLanguage}
                isCollapsed={isSidebarCollapsed}
                onToggleCollapse={setIsSidebarCollapsed}
              />

      {/* Main Content Area */}
      <div className="relative z-10 transition-all duration-500">
        {/* Body - Main Content */}
        <Body
          activeSection={activeSection}
          translations={t}
          isSidebarCollapsed={isSidebarCollapsed}
        />

        {/* Footer */}
        <Footer
          contact={t.footer.contact}
          copyright={t.footer.copyright}
        />
      </div>
    </div>
  )
}