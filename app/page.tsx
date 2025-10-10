"use client"

import React, { useState } from "react"
import { translations } from "./data/translations"
import UniverseBackground from "./components/UniverseBackground"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"

export default function Portfolio() {
  const [language, setLanguage] = useState("en")
  const [activeSection, setActiveSection] = useState("professional")
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  const t = translations[language as keyof typeof translations]

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <UniverseBackground />
      
      <Sidebar
        translations={t}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        language={language}
        onLanguageChange={setLanguage}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={setIsSidebarCollapsed}
      />

      <div className="relative z-10 transition-all duration-500">
        <div className={`min-h-screen transition-all duration-500 ${
          isSidebarCollapsed ? 'ml-0' : 'ml-80'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            {/* Hero Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              {/* Left Column - Image */}
              <div className="order-2 lg:order-1">
                <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
                  <img 
                    src="/Profilepicture.jpg" 
                    alt="LE NAM TUYEN" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="order-1 lg:order-2">
                <div className="space-y-8">
                  <div>
                    <h1 className="text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight">
                      {t?.hero?.greeting || "HI, I AM"}
                    </h1>
                    <h2 className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] mb-6 tracking-tight">
                      {t?.hero?.name || "LE NAM TUYEN"}
                    </h2>
                    <p className="text-xl lg:text-2xl text-gray-300 font-medium leading-relaxed">
                      {t?.hero?.title || "ASPIRING PRODUCT MANAGER & DATA ANALYST IN FINTECH"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}