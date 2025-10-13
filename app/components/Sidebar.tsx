"use client"

import React, { useState } from "react"
import { Mail, Phone, MapPin, User, Briefcase, Menu, X, Globe, Code, Database, BarChart3, Award, FolderOpen, ChevronRight, Home, UserCircle, GraduationCap, Wrench, Trophy, Building, Folder, Heart, Star, Settings, ChevronDown } from "lucide-react"

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

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })
    }
  }

  // Handle section change with scroll
  const handleSectionChange = (section: string) => {
    onSectionChange(section)
    scrollToSection(section)
  }

  const navItems = [
    { 
      key: "home", 
      label: "Home",
      icon: Home,
      color: "text-[#00d4ff]",
      bgColor: "bg-[#00d4ff]/10"
    },
    { 
      key: "about", 
      label: translations?.sections?.about || "About",
      icon: UserCircle,
      color: "text-[#00ff88]",
      bgColor: "bg-[#00ff88]/10"
    },
    { 
      key: "education", 
      label: translations?.sections?.education || "Education",
      icon: GraduationCap,
      color: "text-[#00d4ff]",
      bgColor: "bg-[#00d4ff]/10"
    },
    { 
      key: "skills", 
      label: translations?.sections?.skills || "Skills",
      icon: Wrench,
      color: "text-[#7c3aed]",
      bgColor: "bg-[#7c3aed]/10"
    },
    { 
      key: "certifications", 
      label: translations?.sections?.certifications || "Certifications",
      icon: Trophy,
      color: "text-[#00ff88]",
      bgColor: "bg-[#00ff88]/10"
    },
    { 
      key: "experience", 
      label: translations?.sections?.experience || "Experience",
      icon: Building,
      color: "text-[#00d4ff]",
      bgColor: "bg-[#00d4ff]/10"
    },
    { 
      key: "projects", 
      label: translations?.sections?.projects || "Projects",
      icon: Folder,
      color: "text-[#7c3aed]",
      bgColor: "bg-[#7c3aed]/10"
    }
  ]

  return (
    <>
      {/* Minimal Toggle Button */}
      <button
        onClick={() => onToggleCollapse(!isCollapsed)}
        className={`fixed top-1/2 z-50 transform -translate-y-1/2 transition-all duration-300 ease-out ${
          isCollapsed ? 'left-4' : 'left-80 sm:left-72 md:left-64 lg:left-72 xl:left-64'
        }`}
      >
        <div className="w-10 h-16 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-r-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="flex flex-col space-y-1">
            <div className={`w-1 h-1 bg-white rounded-full transition-all duration-300 ${
              isCollapsed ? 'opacity-100' : 'opacity-70'
            }`}></div>
            <div className={`w-1 h-1 bg-white rounded-full transition-all duration-300 ${
              isCollapsed ? 'opacity-100' : 'opacity-70'
            }`}></div>
            <div className={`w-1 h-1 bg-white rounded-full transition-all duration-300 ${
              isCollapsed ? 'opacity-100' : 'opacity-70'
            }`}></div>
          </div>
        </div>
      </button>

      {/* Minimal Sidebar */}
      <aside className={`fixed left-0 top-0 h-full bg-gray-900/95 backdrop-blur-xl border-r border-white/10 shadow-2xl z-40 overflow-y-auto transition-all duration-300 ease-out ${
        isCollapsed ? 'w-0 opacity-0 -translate-x-full' : 'w-80 sm:w-72 md:w-64 lg:w-72 xl:w-64 opacity-100 translate-x-0'
      }`}>
        
        <div className="p-6">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-xl flex items-center justify-center shadow-lg">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
            </div>
            
            {/* Language Toggle */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-1">
              <div className={`absolute top-1 bottom-1 w-1/2 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-lg shadow-lg transition-all duration-300 ease-out ${
                language === 'en' ? 'left-1' : 'left-1/2'
              }`}></div>
              
              <div className="relative flex">
                <button
                  onClick={() => onLanguageChange('en')}
                  className={`flex-1 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 relative z-10 ${
                    language === 'en' 
                      ? 'text-white shadow-sm' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  EN
                </button>
                <button 
                  onClick={() => onLanguageChange('vi')}
                  className={`flex-1 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 relative z-10 ${
                    language === 'vi' 
                      ? 'text-white shadow-sm' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  VI
                </button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.key}
                  onClick={() => handleSectionChange(item.key)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                    activeSection === item.key
                      ? `${item.bgColor} ${item.color} shadow-sm border border-white/20`
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium text-sm truncate">{item.label}</span>
                </button>
              )
            })}
          </nav>

          {/* Contact Section */}
          <div className="mt-8">
            <button
              onClick={() => setShowContacts(!showContacts)}
              className="w-full flex items-center justify-between px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[#00ff88]/20 to-[#00d4ff]/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-[#00ff88]" />
                </div>
                <span className="font-medium text-sm">Contact</span>
              </div>
              <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                showContacts ? 'rotate-90' : ''
              }`} />
            </button>
            
            {showContacts && (
              <div className="mt-4 space-y-3 animate-fadeIn">
                {/* Email */}
                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group">
                  <Mail className="w-4 h-4 text-[#00ff88] group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                  <span className="text-sm text-gray-300 break-all">bingo.namtuyen@gmail.com</span>
                </div>
                
                {/* Phone */}
                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group">
                  <Phone className="w-4 h-4 text-[#00d4ff] group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                  <span className="text-sm text-gray-300">0921270404</span>
                </div>
                
                {/* Location */}
                <div className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group">
                  <MapPin className="w-4 h-4 text-[#7c3aed] group-hover:scale-110 transition-transform duration-300 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-300 break-words">Ho Chi Minh City, Vietnam</span>
                </div>
                
                {/* Social Links */}
                <div className="pt-3 border-t border-white/10">
                  <div className="flex gap-2">
                    {/* LinkedIn */}
                    <a 
                      href="https://www.linkedin.com/in/tuyen-le-nam-7614a1269/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group flex-1"
                    >
                      <svg className="w-4 h-4 text-[#0077b5] group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <span className="text-xs text-gray-400 group-hover:text-white transition-colors duration-300">LinkedIn</span>
                    </a>
                    
                    {/* GitHub */}
                    <a 
                      href="https://github.com/Nam-Tuyen" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group flex-1"
                    >
                      <svg className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span className="text-xs text-gray-400 group-hover:text-white transition-colors duration-300">GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  )
}