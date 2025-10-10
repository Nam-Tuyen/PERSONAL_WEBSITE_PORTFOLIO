"use client"

import React, { useState } from "react"
import { Mail, Phone, MapPin, Calendar, ExternalLink, ChevronDown, ChevronUp, Menu, X, Globe } from "lucide-react"

interface SidebarProps {
  translations: any
  activeSection: string
  onSectionChange: (section: string) => void
  language: string
  onLanguageChange: (language: string) => void
}

export default function Sidebar({ translations, activeSection, onSectionChange, language, onLanguageChange }: SidebarProps) {
  const [showContacts, setShowContacts] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)

  const navItems = [
    { key: "professional", label: translations?.header?.nav?.professional || "PROFESSIONAL" },
    { key: "personal", label: translations?.header?.nav?.personal || "PERSONAL" }
  ]

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="fixed top-4 left-4 z-50 w-12 h-12 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 lg:hidden"
      >
        {isCollapsed ? <Menu className="w-6 h-6 text-white" /> : <X className="w-6 h-6 text-white" />}
      </button>

      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-full bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] border-r border-[#00ff88]/20 shadow-2xl shadow-[#00ff88]/10 z-40 overflow-y-auto transition-all duration-300 ${
        isCollapsed ? 'w-0 opacity-0' : 'w-80 opacity-100'
      } lg:w-80 lg:opacity-100`}>
        {/* Tech Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              animation: 'grid-move 20s linear infinite'
            }}></div>
          </div>
        </div>

        <div className="relative z-10 p-8">
          {/* Profile Section */}
          <div className="text-center mb-8">
            <div className="relative w-32 h-32 mx-auto mb-6 group">
              {/* Profile Image Frame */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] opacity-20 blur-sm"></div>
                <div className="absolute inset-1 rounded-full bg-black"></div>
              </div>
              
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#00ff88]/30">
                <img 
                  src="/avatar.jpg" 
                  alt="LE NAM TUYEN" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Avatar-653d9ylzzMfaEqsMFNdohWuJz9BSAB.jpg";
                  }}
                />
              </div>
            </div>

            <h1 className="text-2xl font-bold text-white mb-2">
              {translations?.hero?.name || "LE NAM TUYEN"}
            </h1>

            {/* Language Toggle */}
            <div className="mb-4">
              <button
                onClick={() => onLanguageChange(language === 'en' ? 'vi' : 'en')}
                className="flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#00ff88]/10 to-[#00d4ff]/10 border border-[#00ff88]/30 rounded-lg text-[#00ff88] text-sm font-medium hover:bg-gradient-to-r hover:from-[#00ff88]/20 hover:to-[#00d4ff]/20 transition-all duration-300 mx-auto"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'en' ? 'VI' : 'EN'}</span>
              </button>
            </div>

            {/* Show Contacts Button */}
            <button 
              onClick={() => setShowContacts(!showContacts)}
              className="flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#00ff88]/10 to-[#00d4ff]/10 border border-[#00ff88]/30 rounded-lg text-[#00ff88] text-sm font-medium hover:bg-gradient-to-r hover:from-[#00ff88]/20 hover:to-[#00d4ff]/20 transition-all duration-300 mx-auto"
            >
              <span>Show Contacts</span>
              {showContacts ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* Contact Information */}
          {showContacts && (
            <div className="mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent mb-6"></div>
              
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Email</p>
                    <a href={`mailto:${translations?.footer?.contact?.email}`} className="text-white text-sm hover:text-[#00ff88] transition-colors">
                      {translations?.footer?.contact?.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Phone</p>
                    <a href={`tel:${translations?.footer?.contact?.phone}`} className="text-white text-sm hover:text-[#00d4ff] transition-colors">
                      {translations?.footer?.contact?.phone}
                    </a>
                  </div>
                </li>

                <li className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#7c3aed] to-[#00ff88] rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Location</p>
                    <p className="text-white text-sm">{translations?.footer?.contact?.location}</p>
                  </div>
                </li>
              </ul>
            </div>
          )}

          {/* Navigation */}
          <nav className="mb-8">
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={item.key}>
                  <button
                    onClick={() => onSectionChange(item.key)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center space-x-3 ${
                      activeSection === item.key
                        ? 'bg-gradient-to-r from-[#00ff88]/20 to-[#00d4ff]/20 border border-[#00ff88]/30 text-[#00ff88]'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <div className={`w-2 h-2 rounded-full ${
                      activeSection === item.key ? 'bg-[#00ff88]' : 'bg-gray-500'
                    }`}></div>
                    <span className="font-medium">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="border-t border-white/10 pt-6">
            <p className="text-gray-400 text-xs mb-4">Social Media</p>
            <div className="flex space-x-3">
              <a 
                href={translations?.footer?.contact?.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href={translations?.footer?.contact?.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
