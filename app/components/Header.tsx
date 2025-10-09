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
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-xl flex items-center justify-center shadow-lg shadow-[#00ff88]/25">
              <span className="text-white font-bold text-lg sm:text-xl">{logo}</span>
            </div>
            <span className="text-white font-bold text-lg sm:text-xl hidden sm:block">LE NAM TUYEN</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onSectionChange('professional')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeSection === 'professional'
                  ? 'bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-white shadow-lg shadow-[#00ff88]/25'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {navItems.professional}
            </button>
            <button
              onClick={() => onSectionChange('personal')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeSection === 'personal'
                  ? 'bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-white shadow-lg shadow-[#00ff88]/25'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {navItems.personal}
            </button>
          </nav>

          {/* Language Toggle */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-white/10 rounded-xl p-1">
              <button
                onClick={() => onLanguageChange('vi')}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  language === 'vi'
                    ? 'bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-white shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                VI
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  language === 'en'
                    ? 'bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-white shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  onSectionChange('professional')
                  setIsMenuOpen(false)
                }}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-left ${
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
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-left ${
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
