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
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    { 
      key: "professional", 
      label: "Professional",
      icon: Briefcase,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
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
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
      sections: [
        { key: "hobbies", label: "Hobbies", icon: Star },
        { key: "interests", label: "Interests", icon: BarChart3 }
      ]
    }
  ]

  return (
    <>
      {/* macOS-style Toggle Button - Always Visible */}
      <button
        onClick={() => onToggleCollapse(!isCollapsed)}
        className={`fixed top-1/2 z-50 transform -translate-y-1/2 transition-all duration-300 ease-out ${
          isCollapsed ? 'left-4' : 'left-72'
        }`}
      >
        <div className="w-8 h-12 bg-white/95 backdrop-blur-sm border border-gray-200/60 rounded-r-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 group">
          <div className="flex flex-col items-center space-y-1">
            <div className={`w-1 h-1 bg-gray-400 rounded-full transition-all duration-200 ${
              isCollapsed ? 'opacity-100' : 'opacity-60'
            }`}></div>
            <div className={`w-1 h-1 bg-gray-400 rounded-full transition-all duration-200 delay-50 ${
              isCollapsed ? 'opacity-100' : 'opacity-60'
            }`}></div>
            <div className={`w-1 h-1 bg-gray-400 rounded-full transition-all duration-200 delay-100 ${
              isCollapsed ? 'opacity-100' : 'opacity-60'
            }`}></div>
          </div>
        </div>
      </button>

      {/* macOS-style Sidebar */}
      <aside className={`fixed left-0 top-0 h-full bg-white/90 backdrop-blur-xl border-r border-gray-200/60 shadow-xl z-40 overflow-y-auto transition-all duration-300 ease-out ${
        isCollapsed ? 'w-0 opacity-0 -translate-x-full' : 'w-64 opacity-100 translate-x-0'
      }`}>
        
        <div className="relative z-10 p-6">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-sm">
                <Briefcase className="w-4 h-4 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Portfolio</h2>
                <p className="text-xs text-gray-500">Navigation</p>
              </div>
            </div>
            
            {/* Language Toggle - macOS style */}
            <div className="flex items-center bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                  language === 'en' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange('vi')}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                  language === 'vi' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-500 hover:text-gray-700'
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
                        ? `${item.bgColor} ${item.color} shadow-sm`
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'
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
                                ? 'bg-blue-50 text-blue-600 border-l-2 border-blue-500'
                                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
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
              className="w-full flex items-center justify-between px-3 py-2.5 bg-gray-50 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
            >
              <span className="font-medium text-sm">Contact Info</span>
              <ChevronRight className={`w-3 h-3 transition-transform duration-200 ${
                showContacts ? 'rotate-90' : ''
              }`} />
            </button>
            
            {showContacts && (
              <div className="mt-3 space-y-2 animate-fadeIn">
                <div className="flex items-center space-x-3 text-gray-500 text-sm px-3 py-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  <span>lenamtuyen@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-500 text-sm px-3 py-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  <span>+84 123 456 789</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-500 text-sm px-3 py-1.5">
                  <MapPin className="w-3.5 h-3.5" />
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
