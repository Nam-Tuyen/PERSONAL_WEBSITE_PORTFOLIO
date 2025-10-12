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
          isCollapsed ? 'left-0' : 'left-64'
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
        isCollapsed ? 'w-0 opacity-0 -translate-x-full' : 'w-64 opacity-100 translate-x-0'
      }`}>
        
        <div className="relative z-10 p-6">
          {/* Header */}
          <div className="mb-8">
            {/* Modern Minimalist Header */}
            <div className="flex items-center justify-center mb-8">
              <div className="relative group">
                {/* Main Icon Container */}
                <div className="w-12 h-12 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <Briefcase className="w-6 h-6 text-white" />
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
                
                {/* Tech Accent Elements */}
                <div className="absolute -top-1 -right-1 w-3 h-3 border-l-2 border-t-2 border-[#00ff88] opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-r-2 border-b-2 border-[#00d4ff] opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                
                {/* Status Indicator */}
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#00ff88] rounded-full animate-pulse opacity-60"></div>
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

          {/* Contact Section - macOS style */}
          <div className="mt-8">
            <button
              onClick={() => setShowContacts(!showContacts)}
              className="w-full flex items-center justify-between px-3 py-2.5 bg-white/5 border border-[#00ff88]/20 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              <span className="font-medium text-sm">Contact Info</span>
              <ChevronRight className={`w-3 h-3 transition-transform duration-200 ${
                showContacts ? 'rotate-90' : ''
              }`} />
            </button>
            
            {showContacts && (
              <div className="mt-3 space-y-2 animate-fadeIn">
                <div className="flex items-center space-x-3 text-gray-400 text-sm px-3 py-1.5 hover:text-white transition-colors duration-200">
                  <Mail className="w-3.5 h-3.5 text-[#00ff88]" />
                  <span>bingo.namtuyen@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 text-sm px-3 py-1.5 hover:text-white transition-colors duration-200">
                  <Phone className="w-3.5 h-3.5 text-[#00d4ff]" />
                  <span>0921270404</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 text-sm px-3 py-1.5 hover:text-white transition-colors duration-200">
                  <MapPin className="w-3.5 h-3.5 text-[#7c3aed]" />
                  <span>Ho Chi Minh City, Vietnam</span>
                </div>
            </div>
            )}
          </div>
        </div>
      </aside>
    </>
  )
}
