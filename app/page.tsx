"use client"

import React, { useState } from "react"
import { translations } from "./data/translations"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"

export default function Portfolio() {
  const [language, setLanguage] = useState("en")
  const [activeSection, setActiveSection] = useState("professional")

  const t = translations[language as keyof typeof translations]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Galaxy Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Nebula Effects */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-radial from-purple-500/30 to-transparent rounded-full blur-3xl animate-nebula-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-radial from-blue-500/30 to-transparent rounded-full blur-3xl animate-nebula-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-cyan-500/20 to-transparent rounded-full blur-3xl animate-nebula-float" style={{animationDelay: '4s'}}></div>
        </div>
        
        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Shooting Stars */}
        <div className="absolute top-1/4 left-0 w-2 h-2 bg-white rounded-full animate-shooting-star"></div>
        <div className="absolute top-3/4 right-0 w-1 h-1 bg-cyan-400 rounded-full animate-shooting-star" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-shooting-star" style={{animationDelay: '6s'}}></div>
        
        {/* Cosmic Dust */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gray-400 rounded-full animate-dust-float opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
      </div>

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