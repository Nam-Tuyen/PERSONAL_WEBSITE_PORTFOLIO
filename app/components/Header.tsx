"use client"

import React, { useState } from "react"
import { Menu, X, Code, User } from "lucide-react"

interface HeaderProps {
  logo: string
  navItems: {
    professional: string
    personal: string
  }
  activeSection: string
  onSectionChange: (section: string) => void
  language: string
  onLanguageChange: (lang: string) => void
}

export default function Header({ 
  logo, 
  navItems, 
  activeSection, 
  onSectionChange, 
  language, 
  onLanguageChange 
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-[#00ff88]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo - Tech Style */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-lg flex items-center justify-center shadow-lg shadow-[#00ff88]/25">
                <Code className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-lg opacity-20 blur-sm"></div>
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-bold text-lg lg:text-xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {logo}
              </span>
            </div>
          </div>

          {/* Desktop Navigation - Tech Style */}
          <nav className="hidden lg:flex items-center space-x-1">
            <button
              onClick={() => onSectionChange('professional')}
              className={`relative px-6 py-3 rounded-lg font-semibold transition-all duration-300 group ${
                activeSection === 'professional'
                  ? 'bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black shadow-lg shadow-[#00ff88]/25'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Code className="w-4 h-4" />
                <span>{navItems.professional}</span>
              </span>
              {activeSection === 'professional' && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-lg opacity-20 blur-sm"></div>
              )}
            </button>
            <button
              onClick={() => onSectionChange('personal')}
              className={`relative px-6 py-3 rounded-lg font-semibold transition-all duration-300 group ${
                activeSection === 'personal'
                  ? 'bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black shadow-lg shadow-[#00ff88]/25'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{navItems.personal}</span>
              </span>
              {activeSection === 'personal' && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-lg opacity-20 blur-sm"></div>
              )}
            </button>
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle - Tech Style */}
            <div className="flex items-center bg-white/5 rounded-lg p-1 border border-white/10">
              <button
                onClick={() => onLanguageChange('vi')}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 ${
                  language === 'vi'
                    ? 'bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                VI
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 ${
                  language === 'en'
                    ? 'bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            {/* Mobile Menu Button - Tech Style */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white hover:bg-white/10 transition-colors border border-white/10"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Tech Style */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10 bg-black/50 backdrop-blur-sm">
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => {
                  onSectionChange('professional')
                  setIsMenuOpen(false)
                }}
                className={`px-4 py-3 rounded-lg font-semibold transition-all duration-300 text-left flex items-center space-x-3 ${
                  activeSection === 'professional'
                    ? 'bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Code className="w-4 h-4" />
                <span>{navItems.professional}</span>
              </button>
              <button
                onClick={() => {
                  onSectionChange('personal')
                  setIsMenuOpen(false)
                }}
                className={`px-4 py-3 rounded-lg font-semibold transition-all duration-300 text-left flex items-center space-x-3 ${
                  activeSection === 'personal'
                    ? 'bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <User className="w-4 h-4" />
                <span>{navItems.personal}</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}