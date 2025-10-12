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
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-lg flex items-center justify-center shadow-sm">
                <Briefcase className="w-4 h-4 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">Portfolio</h2>
                <p className="text-xs text-[#00ff88]">Navigation</p>
              </div>
            </div>
            
            {/* Language Toggle - Tech style */}
            <div className="flex items-center bg-white/5 border border-[#00ff88]/20 rounded-lg p-1">
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                  language === 'en' 
                    ? 'bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-white shadow-sm' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange('vi')}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                  language === 'vi' 
                    ? 'bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-white shadow-sm' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                VI
              </button>
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
                    onClick={() => onSectionChange(item.key)}
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
                            onClick={() => onSectionChange(section.key)}
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
                  <span>lenamtuyen@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 text-sm px-3 py-1.5 hover:text-white transition-colors duration-200">
                  <Phone className="w-3.5 h-3.5 text-[#00d4ff]" />
                  <span>+84 123 456 789</span>
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
