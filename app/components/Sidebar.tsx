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
      key: "professional", 
      label: "Professional",
      icon: Briefcase,
      color: "text-[#00ff88]",
      bgColor: "bg-[#00ff88]/10",
      sections: [
        { key: "about", label: "About Me", icon: UserCircle },
        { key: "education", label: "Education", icon: GraduationCap },
        { key: "skills", label: "Skills", icon: Wrench },
        { key: "certifications", label: "Certifications", icon: Trophy },
        { key: "experience", label: "Experience", icon: Building },
        { key: "projects", label: "Projects", icon: Folder }
      ]
    },
    { 
      key: "personal", 
      label: "Personal",
      icon: Heart,
      color: "text-[#7c3aed]",
      bgColor: "bg-[#7c3aed]/10",
      sections: [
        { key: "hobbies", label: "Hobbies", icon: Star },
        { key: "interests", label: "Interests", icon: BarChart3 }
      ]
    }
  ]

  return (
    <>
      {/* Modern Tech Toggle Button - Synchronized Movement */}
      <button
        onClick={() => onToggleCollapse(!isCollapsed)}
        className={`fixed top-1/2 z-50 transform -translate-y-1/2 transition-all duration-300 ease-out ${
          isCollapsed ? 'left-0' : 'left-64 lg:left-64'
        }`}
      >
        <div className="relative group">
          {/* Main Button */}
          <div className="w-10 h-16 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] backdrop-blur-sm border border-[#00ff88]/40 rounded-r-2xl flex items-center justify-center shadow-2xl hover:shadow-[#00ff88]/25 transition-all duration-300 group-hover:scale-105">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-r-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center space-y-1">
              <div className={`w-1.5 h-1.5 bg-white rounded-full transition-all duration-300 ${
                isCollapsed ? 'opacity-100 scale-100' : 'opacity-70 scale-90'
              }`}></div>
              <div className={`w-1.5 h-1.5 bg-white rounded-full transition-all duration-300 delay-100 ${
                isCollapsed ? 'opacity-100 scale-100' : 'opacity-70 scale-90'
              }`}></div>
              <div className={`w-1.5 h-1.5 bg-white rounded-full transition-all duration-300 delay-200 ${
                isCollapsed ? 'opacity-100 scale-100' : 'opacity-70 scale-90'
              }`}></div>
        </div>
            
            {/* Arrow Indicator - Synchronized with sidebar */}
            <div className={`absolute right-2 w-0 h-0 border-l-2 border-l-white border-t-2 border-t-transparent border-b-2 border-b-transparent transition-all duration-300 ${
              isCollapsed ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'
            }`}></div>
          </div>
          
          {/* Tech Scan Line - Synchronized animation */}
          <div className={`absolute -top-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00ff88] to-transparent transition-all duration-300 ${
            isCollapsed ? 'opacity-60 animate-pulse' : 'opacity-40'
          }`}></div>
          
          {/* Corner Brackets - Synchronized visibility */}
          <div className={`absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-[#00ff88] transition-all duration-300 ${
            isCollapsed ? 'opacity-40' : 'opacity-20'
          }`}></div>
          <div className={`absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 border-[#00d4ff] transition-all duration-300 ${
            isCollapsed ? 'opacity-40' : 'opacity-20'
          }`}></div>
        </div>
      </button>

      {/* Tech-Style Sidebar */}
      <aside className={`fixed left-0 top-0 h-full bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border-r border-[#00ff88]/20 shadow-2xl z-40 overflow-y-auto transition-all duration-300 ease-out ${
        isCollapsed ? 'w-0 opacity-0 -translate-x-full' : 'w-72 sm:w-64 opacity-100 translate-x-0'
      }`}>
        
        <div className="relative z-10 p-4 sm:p-6">
          {/* Modern Header Section */}
          <div className="mb-6 sm:mb-8">
            {/* Centered Logo */}
            <div className="flex items-center justify-center mb-6">
              <div className="relative group">
                <div className="w-10 h-10 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <Briefcase className="w-5 h-5 text-white" />
              </div>
              </div>
            </div>
            
            {/* Modern Language Toggle */}
            <div className="relative">
              {/* Background Container */}
              <div className="bg-gradient-to-r from-gray-800/30 to-gray-700/30 backdrop-blur-sm border border-white/10 rounded-xl p-1 shadow-lg">
                {/* Active Background Slider */}
                <div className={`absolute top-1 bottom-1 w-1/2 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-lg shadow-lg transition-all duration-300 ease-out ${
                  language === 'en' ? 'left-1' : 'left-1/2'
                }`}></div>
                
                {/* Language Buttons */}
                <div className="relative flex">
              <button
                    onClick={() => onLanguageChange('en')}
                    className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 relative z-10 ${
                      language === 'en' 
                        ? 'text-white shadow-sm' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <span className="uppercase tracking-wider">EN</span>
                    </div>
              </button>

            <button 
                    onClick={() => onLanguageChange('vi')}
                    className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 relative z-10 ${
                      language === 'vi' 
                        ? 'text-white shadow-sm' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <span className="uppercase tracking-wider">VI</span>
              </div>
            </button>
          </div>
              </div>
              
              {/* Tech Accent Line */}
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-full opacity-60"></div>
            </div>
          </div>

          {/* Navigation - macOS style */}
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.key} className="space-y-1">
                  {/* Main Category */}
                  <button
                    onClick={() => handleSectionChange(item.key)}
                    className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                      activeSection === item.key
                        ? `${item.bgColor} ${item.color} shadow-sm border border-[#00ff88]/20`
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium text-sm">{item.label}</span>
                    {item.sections && (
                      <ChevronRight className={`w-3 h-3 ml-auto transition-transform duration-200 ${
                        activeSection === item.key ? 'rotate-90' : ''
                      }`} />
                    )}
                  </button>
                  
                  {/* Sub-sections */}
                  {activeSection === item.key && item.sections && (
                    <div className="ml-4 space-y-0.5 animate-fadeIn">
                      {item.sections.map((section) => {
                        const SectionIcon = section.icon
                        return (
                          <button
                            key={section.key}
                            onClick={() => handleSectionChange(section.key)}
                            className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md transition-all duration-200 text-sm ${
                              activeSection === section.key
                                ? 'bg-[#00ff88]/10 text-[#00ff88] border-l-2 border-[#00ff88]'
                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                            }`}
                          >
                            <SectionIcon className="w-3.5 h-3.5" />
                            <span>{section.label}</span>
                          </button>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          {/* Modern Contact Section */}
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
                <div className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group">
                  <Mail className="w-4 h-4 text-[#00ff88] group-hover:scale-110 transition-transform duration-300 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-300 break-all leading-relaxed">bingo.namtuyen@gmail.com</span>
                </div>
                
                {/* Phone */}
                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group">
                  <Phone className="w-4 h-4 text-[#00d4ff] group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm text-gray-300">0921270404</span>
                </div>
                
                {/* Location */}
                <div className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group">
                  <MapPin className="w-4 h-4 text-[#7c3aed] group-hover:scale-110 transition-transform duration-300 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-300 break-words leading-relaxed">Ho Chi Minh City, Vietnam</span>
                </div>
                
                {/* Social Links */}
                <div className="pt-2 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    {/* LinkedIn */}
                    <a 
                      href="https://www.linkedin.com/in/tuyen-le-nam-7614a1269/?skipRedirect=true" 
                target="_blank" 
                rel="noopener noreferrer"
                      className="flex items-center space-x-2 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group flex-1 mr-2"
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
                      className="flex items-center space-x-2 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group flex-1 ml-2"
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
