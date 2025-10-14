"use client"

import React, { useState } from "react"
import { Mail, Phone, MapPin, User, Briefcase, Menu, X, Globe, Code, Database, BarChart3, Award, FolderOpen, ChevronRight, Home, UserCircle, GraduationCap, Wrench, Trophy, Building, Folder, Heart, Star, Settings, ChevronDown, Users } from "lucide-react"

interface SidebarProps {
  translations: any
  activeSection: string
  onSectionChange: (section: string) => void
  language: string
  onLanguageChange: (language: string) => void
  isCollapsed: boolean
  onToggleCollapse: (collapsed: boolean) => void
  isPersonalPage?: boolean
}

export default function Sidebar({ translations, activeSection, onSectionChange, language, onLanguageChange, isCollapsed, onToggleCollapse, isPersonalPage = false }: SidebarProps) {
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

  // Professional page navigation
  const professionalNavItems = [
    { 
      key: "about", 
      label: translations?.sections?.about || "About Me",
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
      label: translations?.sections?.certifications || "Certifications & Awards",
      icon: Trophy,
      color: "text-[#00ff88]",
      bgColor: "bg-[#00ff88]/10"
    },
    { 
      key: "experience", 
      label: translations?.sections?.experience || "Working Experience",
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

  // Personal page navigation
  const personalNavItems = [
    { 
      key: "hobbies", 
      label: translations?.personal?.hobbies?.title || "Hobbies",
      icon: Star,
      color: "text-[#00ff88]",
      bgColor: "bg-[#00ff88]/10"
    },
    { 
      key: "extracurriculars", 
      label: translations?.personal?.extracurriculars?.title || "Extracurriculars",
      icon: Heart,
      color: "text-[#00d4ff]",
      bgColor: "bg-[#00d4ff]/10"
    },
    { 
      key: "social-activities", 
      label: translations?.personal?.socialActivities?.title || "Social Activities",
      icon: Users,
      color: "text-[#7c3aed]",
      bgColor: "bg-[#7c3aed]/10"
    },
    { 
      key: "research-achievement", 
      label: translations?.personal?.researchAchievement?.title || "Research Achievement",
      icon: Award,
      color: "text-[#00ff88]",
      bgColor: "bg-[#00ff88]/10"
    }
  ]

  const navItems = isPersonalPage ? personalNavItems : professionalNavItems

  return (
    <>
      {/* Mobile Overlay - Only show on mobile when sidebar is open */}
      {!isCollapsed && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => onToggleCollapse(true)}
        />
      )}

      {/* Synchronized Tech Toggle Button - Perfect Sync */}
      <button
        onClick={() => onToggleCollapse(!isCollapsed)}
        className={`fixed top-1/2 z-[60] transform -translate-y-1/2 transition-all duration-300 ease-out ${
          isCollapsed ? 'left-0' : 'left-80 sm:left-72 md:left-64 lg:left-72 xl:left-64'
        }`}
        style={{
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          willChange: 'left'
        }}
      >
        <div className="relative group">
          {/* Main Button - Enhanced Responsive */}
          <div className="w-8 h-12 sm:w-10 sm:h-16 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] backdrop-blur-sm border border-[#00ff88]/40 rounded-r-xl sm:rounded-r-2xl flex items-center justify-center shadow-2xl hover:shadow-[#00ff88]/25 transition-all duration-300 group-hover:scale-105 active:scale-95">
            {/* Enhanced Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-r-xl sm:rounded-r-2xl blur opacity-30 group-hover:opacity-50 group-active:opacity-70 transition-opacity duration-300"></div>
            
            {/* Synchronized Content - Perfect Timing */}
            <div className="relative z-10 flex flex-col items-center space-y-0.5 sm:space-y-1">
              <div className={`w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full transition-all duration-300 ease-out ${
                isCollapsed ? 'opacity-100 scale-100' : 'opacity-70 scale-90'
              }`} style={{ transitionDelay: '0ms' }}></div>
              <div className={`w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full transition-all duration-300 ease-out ${
                isCollapsed ? 'opacity-100 scale-100' : 'opacity-70 scale-90'
              }`} style={{ transitionDelay: '50ms' }}></div>
              <div className={`w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full transition-all duration-300 ease-out ${
                isCollapsed ? 'opacity-100 scale-100' : 'opacity-70 scale-90'
              }`} style={{ transitionDelay: '100ms' }}></div>
        </div>
            
            {/* Synchronized Arrow Indicator */}
            <div className={`absolute right-1 sm:right-2 w-0 h-0 border-l-2 border-l-white border-t-2 border-t-transparent border-b-2 border-b-transparent transition-all duration-300 ease-out ${
              isCollapsed ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'
            }`} style={{ transitionDelay: '150ms' }}></div>
          </div>
          
          {/* Synchronized Tech Scan Line */}
          <div className={`absolute -top-0.5 sm:-top-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00ff88] to-transparent transition-all duration-300 ease-out ${
            isCollapsed ? 'opacity-60 animate-pulse' : 'opacity-40'
          }`} style={{ transitionDelay: '100ms' }}></div>
          
          {/* Synchronized Corner Brackets */}
          <div className={`absolute -top-0.5 sm:-top-1 -left-0.5 sm:-left-1 w-2 h-2 sm:w-3 sm:h-3 border-l-2 border-t-2 border-[#00ff88] transition-all duration-300 ease-out ${
            isCollapsed ? 'opacity-40' : 'opacity-20'
          }`} style={{ transitionDelay: '200ms' }}></div>
          <div className={`absolute -bottom-0.5 sm:-bottom-1 -left-0.5 sm:-left-1 w-2 h-2 sm:w-3 sm:h-3 border-l-2 border-b-2 border-[#00d4ff] transition-all duration-300 ease-out ${
            isCollapsed ? 'opacity-40' : 'opacity-20'
          }`} style={{ transitionDelay: '250ms' }}></div>
          
          {/* Mobile Touch Enhancement */}
          <div className="absolute inset-0 -m-2 sm:-m-3 rounded-r-xl sm:rounded-r-2xl bg-transparent hover:bg-white/5 active:bg-white/10 transition-colors duration-200"></div>
        </div>
      </button>

      {/* Tech-Style Sidebar - Responsive */}
      <aside className={`fixed left-0 top-0 h-full bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border-r border-[#00ff88]/20 shadow-2xl z-50 overflow-y-auto transition-all duration-300 ease-out ${
        isCollapsed ? 'w-0 opacity-0 -translate-x-full' : 'w-80 sm:w-72 md:w-64 lg:w-72 xl:w-64 opacity-100 translate-x-0'
      }`}>
        
        <div className="relative z-10 p-3 sm:p-4 md:p-6">
          {/* Modern Header Section */}
          <div className="mb-4 sm:mb-6 md:mb-8">
            {/* Centered Logo - Responsive */}
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="relative group">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              </div>
            </div>
            
            {/* Modern Language Toggle - Responsive */}
            <div className="relative">
              {/* Background Container */}
              <div className="bg-gradient-to-r from-gray-800/30 to-gray-700/30 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-0.5 sm:p-1 shadow-lg">
                {/* Active Background Slider */}
                <div className={`absolute top-0.5 sm:top-1 bottom-0.5 sm:bottom-1 w-1/2 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-md sm:rounded-lg shadow-lg transition-all duration-300 ease-out ${
                  language === 'en' ? 'left-0.5 sm:left-1' : 'left-1/2'
                }`}></div>
                
                {/* Language Buttons */}
                <div className="relative flex">
              <button
                    onClick={() => onLanguageChange('en')}
                    className={`flex-1 px-2 sm:px-4 py-1.5 sm:py-2.5 rounded-md sm:rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 relative z-10 ${
                      language === 'en' 
                        ? 'text-white shadow-sm' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                      <span className="uppercase tracking-wider">EN</span>
                    </div>
              </button>

            <button 
                    onClick={() => onLanguageChange('vi')}
                    className={`flex-1 px-2 sm:px-4 py-1.5 sm:py-2.5 rounded-md sm:rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 relative z-10 ${
                      language === 'vi' 
                        ? 'text-white shadow-sm' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                      <span className="uppercase tracking-wider">VI</span>
              </div>
            </button>
          </div>
              </div>
              
              {/* Tech Accent Line - Responsive */}
              <div className="absolute -bottom-0.5 sm:-bottom-1 left-1/2 transform -translate-x-1/2 w-6 sm:w-8 h-0.5 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-full opacity-60"></div>
            </div>
          </div>

          {/* Navigation - Responsive macOS style */}
          <nav className="space-y-0.5 sm:space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.key}
                  onClick={() => handleSectionChange(item.key)}
                  className={`w-full flex items-center space-x-2 sm:space-x-3 px-2 sm:px-3 py-2 sm:py-2.5 rounded-md sm:rounded-lg transition-all duration-200 group ${
                    activeSection === item.key
                      ? `${item.bgColor} ${item.color} shadow-sm border border-[#00ff88]/20`
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="font-medium text-xs sm:text-sm truncate">{item.label}</span>
                </button>
              )
            })}
          </nav>

          {/* Modern Contact Section - Responsive */}
          <div className="mt-6 sm:mt-8">
            <button
              onClick={() => setShowContacts(!showContacts)}
              className="w-full flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-[#00ff88]/20 to-[#00d4ff]/20 rounded-md sm:rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-[#00ff88]" />
                </div>
                <span className="font-medium text-xs sm:text-sm">{translations?.contact?.title || "Contact"}</span>
              </div>
              <ChevronRight className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 flex-shrink-0 ${
                showContacts ? 'rotate-90' : ''
              }`} />
            </button>
            
            {showContacts && (
              <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3 animate-fadeIn">
                {/* Email */}
                <div className="flex items-start space-x-2 sm:space-x-3 p-2.5 sm:p-3 bg-white/5 rounded-md sm:rounded-lg hover:bg-white/10 transition-all duration-300 group">
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00ff88] group-hover:scale-110 transition-transform duration-300 mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-300 break-all leading-relaxed">bingo.namtuyen@gmail.com</span>
                </div>
                
                {/* Phone */}
                <div className="flex items-center space-x-2 sm:space-x-3 p-2.5 sm:p-3 bg-white/5 rounded-md sm:rounded-lg hover:bg-white/10 transition-all duration-300 group">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00d4ff] group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-300">0921270404</span>
                </div>
                
                {/* Location */}
                <div className="flex items-start space-x-2 sm:space-x-3 p-2.5 sm:p-3 bg-white/5 rounded-md sm:rounded-lg hover:bg-white/10 transition-all duration-300 group">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7c3aed] group-hover:scale-110 transition-transform duration-300 mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-300 break-words leading-relaxed">Ho Chi Minh City, Vietnam</span>
                </div>
                
                {/* Social Links */}
                <div className="pt-2 border-t border-white/10">
                  <div className="flex items-center justify-between gap-1 sm:gap-2">
                    {/* LinkedIn */}
                    <a 
                      href="https://www.linkedin.com/in/tuyen-le-nam-7614a1269/?skipRedirect=true" 
                target="_blank" 
                rel="noopener noreferrer"
                      className="flex items-center space-x-1 sm:space-x-2 p-1.5 sm:p-2 bg-white/5 rounded-md sm:rounded-lg hover:bg-white/10 transition-all duration-300 group flex-1"
              >
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0077b5] group-hover:scale-110 transition-transform duration-300 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                      <span className="text-xs text-gray-400 group-hover:text-white transition-colors duration-300 truncate">LinkedIn</span>
              </a>
                    
                    {/* GitHub */}
              <a 
                      href="https://github.com/Nam-Tuyen" 
                target="_blank" 
                rel="noopener noreferrer"
                      className="flex items-center space-x-1 sm:space-x-2 p-1.5 sm:p-2 bg-white/5 rounded-md sm:rounded-lg hover:bg-white/10 transition-all duration-300 group flex-1"
              >
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                      <span className="text-xs text-gray-400 group-hover:text-white transition-colors duration-300 truncate">GitHub</span>
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
