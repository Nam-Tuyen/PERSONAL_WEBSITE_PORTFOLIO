"use client"

import React, { useState } from "react"
import { Menu, X, Code, Terminal, Zap, Globe, Cpu, Activity } from "lucide-react"

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-2xl border-b border-[#00ff88]/30 shadow-2xl shadow-[#00ff88]/10">
      {/* Tech Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
            animation: 'grid-move 15s linear infinite'
          }}></div>
        </div>
        
        {/* Scanning Line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent opacity-60 animate-scan"></div>
        
        {/* Corner Brackets */}
        <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-[#00ff88] opacity-40"></div>
        <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-[#00d4ff] opacity-40"></div>
        
        {/* Floating Data Points */}
        <div className="absolute top-4 right-20 w-1 h-1 bg-[#00ff88] rounded-full animate-pulse"></div>
        <div className="absolute top-4 right-32 w-1 h-1 bg-[#00d4ff] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-4 right-44 w-1 h-1 bg-[#7c3aed] rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20">
          {/* CPU Icon Only */}
          <div className="flex-shrink-0 relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative flex items-center justify-center w-12 h-12 bg-black/60 backdrop-blur-xl rounded-xl border border-[#00ff88]/40 shadow-lg shadow-[#00ff88]/20">
              {/* Animated CPU Icon */}
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-lg flex items-center justify-center shadow-lg shadow-[#00ff88]/30">
                  <Cpu className="w-5 h-5 text-white animate-pulse" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-lg opacity-30 blur-sm animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation with High-Tech Style */}
          <nav className="hidden lg:flex items-center space-x-2">
            <button
              onClick={() => onSectionChange('professional')}
              className={`relative px-6 py-3 rounded-xl font-bold transition-all duration-300 group overflow-hidden ${
                activeSection === 'professional'
                  ? 'bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black shadow-lg shadow-[#00ff88]/30'
                  : 'text-gray-300 hover:text-white hover:bg-white/10 border border-transparent hover:border-[#00ff88]/40'
              }`}
            >
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              
              <div className="relative z-10 flex items-center space-x-2">
                <Terminal className="w-4 h-4" />
                <span className="font-mono tracking-wider">{navItems.professional}</span>
              </div>
              
              {/* Active Indicator */}
              {activeSection === 'professional' && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black rounded-full animate-pulse"></div>
              )}
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
            
            <button
              onClick={() => onSectionChange('personal')}
              className={`relative px-6 py-3 rounded-xl font-bold transition-all duration-300 group overflow-hidden ${
                activeSection === 'personal'
                  ? 'bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white shadow-lg shadow-[#00d4ff]/30'
                  : 'text-gray-300 hover:text-white hover:bg-white/10 border border-transparent hover:border-[#00d4ff]/40'
              }`}
            >
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              
              <div className="relative z-10 flex items-center space-x-2">
                <Zap className="w-4 h-4" />
                <span className="font-mono tracking-wider">{navItems.personal}</span>
              </div>
              
              {/* Active Indicator */}
              {activeSection === 'personal' && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
              )}
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </nav>

          {/* Language Toggle with Enhanced Tech Style */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center bg-black/40 backdrop-blur-xl rounded-xl p-1 border border-[#00ff88]/30 shadow-lg shadow-[#00ff88]/10">
              <button
                onClick={() => onLanguageChange('vi')}
                className={`px-4 py-2 rounded-lg text-sm font-bold font-mono transition-all duration-300 relative ${
                  language === 'vi'
                    ? 'bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="relative z-10">VI</span>
                {language === 'vi' && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-black rounded-full animate-pulse"></div>
                )}
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-4 py-2 rounded-lg text-sm font-bold font-mono transition-all duration-300 relative ${
                  language === 'en'
                    ? 'bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="relative z-10">EN</span>
                {language === 'en' && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-black rounded-full animate-pulse"></div>
                )}
              </button>
            </div>

            {/* Mobile Menu Button with Tech Style */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative w-12 h-12 bg-black/40 backdrop-blur-xl rounded-xl flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300 border border-[#00ff88]/30 shadow-lg shadow-[#00ff88]/10 group"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#00ff88] rounded-full animate-pulse"></div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation with Enhanced Tech Style */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#00ff88]/20 bg-black/80 backdrop-blur-2xl">
            {/* Tech Header */}
            <div className="px-4 py-2 mb-4 border-b border-[#00ff88]/20">
              <div className="flex items-center space-x-2 text-[#00ff88] text-sm font-mono">
                <Activity className="w-4 h-4 animate-pulse" />
                <span>NAVIGATION_MENU</span>
                <div className="ml-auto flex space-x-1">
                  <div className="w-1 h-1 bg-[#00ff88] rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-[#00d4ff] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-1 h-1 bg-[#7c3aed] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
            </div>
            
            <nav className="flex flex-col space-y-2 px-2">
              <button
                onClick={() => {
                  onSectionChange('professional')
                  setIsMenuOpen(false)
                }}
                className={`px-4 py-3 rounded-xl font-bold transition-all duration-300 text-left flex items-center space-x-3 group relative overflow-hidden ${
                  activeSection === 'professional'
                    ? 'bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black shadow-lg shadow-[#00ff88]/30'
                    : 'text-gray-300 hover:text-white hover:bg-white/10 border border-transparent hover:border-[#00ff88]/40'
                }`}
              >
                <Terminal className="w-4 h-4" />
                <span className="font-mono tracking-wider">{navItems.professional}</span>
                {activeSection === 'professional' && (
                  <div className="ml-auto w-2 h-2 bg-black rounded-full animate-pulse"></div>
                )}
              </button>
              
              <button
                onClick={() => {
                  onSectionChange('personal')
                  setIsMenuOpen(false)
                }}
                className={`px-4 py-3 rounded-xl font-bold transition-all duration-300 text-left flex items-center space-x-3 group relative overflow-hidden ${
                  activeSection === 'personal'
                    ? 'bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white shadow-lg shadow-[#00d4ff]/30'
                    : 'text-gray-300 hover:text-white hover:bg-white/10 border border-transparent hover:border-[#00d4ff]/40'
                }`}
              >
                <Zap className="w-4 h-4" />
                <span className="font-mono tracking-wider">{navItems.personal}</span>
                {activeSection === 'personal' && (
                  <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                )}
              </button>
              
              {/* Mobile Language Toggle */}
              <div className="pt-4 border-t border-[#00ff88]/20">
                <div className="flex items-center bg-black/40 backdrop-blur-xl rounded-xl p-1 border border-[#00ff88]/30">
                  <button
                    onClick={() => {
                      onLanguageChange('vi')
                      setIsMenuOpen(false)
                    }}
                    className={`px-4 py-2 rounded-lg text-sm font-bold font-mono transition-all duration-300 flex-1 ${
                      language === 'vi'
                        ? 'bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black shadow-lg'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    VI
                  </button>
                  <button
                    onClick={() => {
                      onLanguageChange('en')
                      setIsMenuOpen(false)
                    }}
                    className={`px-4 py-2 rounded-lg text-sm font-bold font-mono transition-all duration-300 flex-1 ${
                      language === 'en'
                        ? 'bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black shadow-lg'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}