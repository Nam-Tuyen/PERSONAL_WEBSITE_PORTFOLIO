"use client"

import React, { useState } from "react"
import { Menu, X } from "lucide-react"

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/20">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo - Mobile Optimized */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-[#00ff88]/25">
              <span className="text-white font-bold text-sm sm:text-lg md:text-xl">{logo}</span>
            </div>
            <span className="text-white font-bold text-sm sm:text-lg md:text-xl hidden sm:block">LE NAM TUYEN</span>
          </div>

          {/* Desktop Navigation - Mobile Optimized */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <button
              onClick={() => onSectionChange('professional')}
              className={`px-4 py-2 lg:px-6 lg:py-3 rounded-lg lg:rounded-xl font-semibold transition-all duration-300 text-sm lg:text-base ${
                activeSection === 'professional'
                  ? 'bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-white shadow-lg shadow-[#00ff88]/25'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {navItems.professional}
            </button>
            <button
              onClick={() => onSectionChange('personal')}
              className={`px-4 py-2 lg:px-6 lg:py-3 rounded-lg lg:rounded-xl font-semibold transition-all duration-300 text-sm lg:text-base ${
                activeSection === 'personal'
                  ? 'bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-white shadow-lg shadow-[#00ff88]/25'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {navItems.personal}
            </button>
          </nav>

          {/* Language Toggle - Mobile Optimized */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="flex items-center bg-white/10 rounded-lg sm:rounded-xl p-0.5 sm:p-1">
              <button
                onClick={() => onLanguageChange('vi')}
                className={`px-2 py-1 sm:px-3 sm:py-1.5 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                  language === 'vi'
                    ? 'bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-white shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                VI
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-1 sm:px-3 sm:py-1.5 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                  language === 'en'
                    ? 'bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-white shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            {/* Mobile Menu Button - Enhanced */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-lg sm:rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              {isMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Enhanced */}
        {isMenuOpen && (
          <div className="md:hidden py-3 border-t border-white/20 bg-black/40 backdrop-blur-sm">
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => {
                  onSectionChange('professional')
                  setIsMenuOpen(false)
                }}
                className={`px-4 py-3 rounded-lg font-semibold transition-all duration-300 text-left text-sm ${
                  activeSection === 'professional'
                    ? 'bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-white shadow-lg shadow-[#00ff88]/25'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {navItems.professional}
              </button>
              <button
                onClick={() => {
                  onSectionChange('personal')
                  setIsMenuOpen(false)
                }}
                className={`px-4 py-3 rounded-lg font-semibold transition-all duration-300 text-left text-sm ${
                  activeSection === 'personal'
                    ? 'bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-white shadow-lg shadow-[#00ff88]/25'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {navItems.personal}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
