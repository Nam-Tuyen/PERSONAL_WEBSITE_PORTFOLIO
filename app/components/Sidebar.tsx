"use client"

import React, { useState } from "react"
import { Mail, Phone, MapPin, User, Briefcase, Menu, X, Globe, Code, Database, BarChart3, Award, FolderOpen, ChevronRight } from "lucide-react"

interface SidebarProps {
  translations: any
  activeSection: string
  onSectionChange: (section: string) => void
  language: string
  onLanguageChange: (language: string) => void
  isCollapsed: boolean
  onToggleCollapse: (collapsed: boolean) => void
}

export default function Sidebar({ translations, activeSection, onSectionChange, language, onLanguageChange, isCollapsed, onToggleCollapse }: SidebarProps) {
  const [showContacts, setShowContacts] = useState(false)

  const navItems = [
    { 
      key: "professional", 
      label: translations?.header?.nav?.professional || "PROFESSIONAL",
      icon: Briefcase,
      sections: [
        { key: "about", label: "About Me", icon: User },
        { key: "education", label: "Education", icon: Award },
        { key: "skills", label: "Skills", icon: Code },
        { key: "certifications", label: "Certifications", icon: Award },
        { key: "experience", label: "Experience", icon: Briefcase },
        { key: "projects", label: "Projects", icon: FolderOpen }
      ]
    },
    { 
      key: "personal", 
      label: translations?.header?.nav?.personal || "PERSONAL",
      icon: User,
      sections: [
        { key: "hobbies", label: "Hobbies", icon: User },
        { key: "interests", label: "Interests", icon: BarChart3 }
      ]
    }
  ]

  return (
    <>
      {/* Always Visible Toggle Button - Outside Sidebar */}
      <div className="fixed top-1/2 left-0 z-50 transform -translate-y-1/2">
      <button
        onClick={() => onToggleCollapse(!isCollapsed)}
          className="w-8 h-16 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-r-xl flex items-center justify-center shadow-2xl hover:scale-105 transition-all duration-300 group backdrop-blur-sm border border-white/10 hover:shadow-[#00ff88]/25"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-r-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
          <div className="relative z-10 flex flex-col items-center space-y-1">
            <div className={`w-1 h-1 bg-white rounded-full transition-all duration-500 ${
              isCollapsed ? 'opacity-100 scale-100' : 'opacity-60 scale-90'
            }`}></div>
            <div className={`w-1 h-1 bg-white rounded-full transition-all duration-500 delay-75 ${
              isCollapsed ? 'opacity-100 scale-100' : 'opacity-60 scale-90'
            }`}></div>
            <div className={`w-1 h-1 bg-white rounded-full transition-all duration-500 delay-150 ${
              isCollapsed ? 'opacity-100 scale-100' : 'opacity-60 scale-90'
            }`}></div>
        </div>
          {/* Arrow indicator */}
          <div className={`absolute right-1 w-0 h-0 border-l-2 border-l-white border-t-2 border-t-transparent border-b-2 border-b-transparent transition-all duration-500 ${
            isCollapsed ? 'opacity-100' : 'opacity-0 rotate-180'
          }`}></div>
      </button>
      </div>

      {/* Modern Tech Sidebar */}
      <aside className={`fixed left-0 top-0 h-full bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border-r border-white/10 shadow-2xl z-40 overflow-y-auto transition-all duration-700 ease-in-out ${
        isCollapsed ? 'w-0 opacity-0 -translate-x-full' : 'w-72 opacity-100 translate-x-0'
      }`}>
        
        {/* Minimal Tech Background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-3">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 136, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 136, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}></div>
          </div>
          
          {/* Floating Tech Elements */}
          <div className="absolute top-20 left-6 w-1 h-1 bg-[#00ff88] rounded-full animate-pulse opacity-40"></div>
          <div className="absolute top-40 right-8 w-1 h-1 bg-[#00d4ff] rounded-full animate-ping opacity-30"></div>
          <div className="absolute bottom-40 left-8 w-1 h-1 bg-[#7c3aed] rounded-full animate-pulse opacity-30"></div>
        </div>

        <div className="relative z-10 p-6">
          {/* Modern Profile Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse"></div>
              <h1 className="text-2xl font-bold text-white tracking-tight">
                {translations?.hero?.name || "LE NAM TUYEN"}
              </h1>
              <div className="w-2 h-2 bg-[#00d4ff] rounded-full animate-pulse"></div>
            </div>
            
            <div className="h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent mb-6"></div>

            {/* Language Toggle */}
              <button
                onClick={() => onLanguageChange(language === 'en' ? 'vi' : 'en')}
              className="flex items-center justify-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm font-medium hover:bg-white/10 transition-all duration-300 mx-auto group"
              >
              <Globe className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                <span className="uppercase tracking-wider">{language === 'en' ? 'VI' : 'EN'}</span>
              </button>
            </div>

          {/* Modern Navigation */}
          <nav className="mb-8">
            <div className="space-y-2">
              {navItems.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div key={item.key}>
                    <button
                      onClick={() => onSectionChange(item.key)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center space-x-3 group relative ${
                        activeSection === item.key
                          ? 'bg-gradient-to-r from-[#00ff88]/20 to-[#00d4ff]/20 border border-[#00ff88]/30 text-[#00ff88] shadow-lg'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white border border-transparent hover:border-white/10'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                      <span className="font-semibold text-sm">{item.label}</span>
                      {activeSection === item.key && (
                        <div className="absolute right-3 w-2 h-2 bg-[#00ff88] rounded-full animate-ping"></div>
                      )}
                    </button>
                    
                    {/* Sub-sections for Professional */}
                    {activeSection === item.key && item.sections && (
                      <div className="ml-8 mt-2 space-y-1">
                        {item.sections.map((section, sectionIndex) => {
                          const SectionIcon = section.icon
                          return (
                            <button
                              key={section.key}
                              className="w-full text-left px-3 py-2 rounded-md transition-all duration-300 flex items-center space-x-2 text-gray-400 hover:text-white hover:bg-white/5 group"
                            >
                              <SectionIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                              <span className="text-xs font-medium">{section.label}</span>
                              <ChevronRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </button>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </nav>

          {/* Contact Toggle */}
          <div className="mb-8">
            <button 
              onClick={() => setShowContacts(!showContacts)}
              className="w-full flex items-center justify-between px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm font-medium hover:bg-white/10 transition-all duration-300 group"
            >
              <span>Contact Info</span>
              <div className={`transition-transform duration-300 ${showContacts ? 'rotate-180' : ''}`}>
                <ChevronRight className="w-4 h-4" />
              </div>
            </button>

          {showContacts && (
              <div className="mt-4 space-y-3 animate-fadeIn">
                <a href={`mailto:${translations?.footer?.contact?.email}`} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group">
                  <Mail className="w-4 h-4 text-[#00ff88] group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm text-gray-300">{translations?.footer?.contact?.email}</span>
                </a>
                <a href={`tel:${translations?.footer?.contact?.phone}`} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group">
                  <Phone className="w-4 h-4 text-[#00d4ff] group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm text-gray-300">{translations?.footer?.contact?.phone}</span>
                </a>
                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                  <MapPin className="w-4 h-4 text-[#7c3aed]" />
                  <span className="text-sm text-gray-300">{translations?.footer?.contact?.location}</span>
                  </div>
            </div>
          )}
          </div>

          {/* Social Links */}
          <div className="border-t border-white/10 pt-6">
            <div className="flex space-x-3">
              <a 
                href={translations?.footer?.contact?.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg group"
              >
                <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href={translations?.footer?.contact?.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg group"
              >
                <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
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
