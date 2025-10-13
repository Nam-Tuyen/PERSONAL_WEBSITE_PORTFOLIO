"use client"

import React from "react"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { translations } from '../data/translations'

interface TopNavigationProps {
  language: 'en' | 'vi'
  onLanguageToggle: () => void
}

export default function TopNavigation({ language, onLanguageToggle }: TopNavigationProps) {
  const pathname = usePathname()
  const t = translations[language]
  
  const isPersonalPage = pathname === '/personal'

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          {/* Page Navigation */}
          <div className="flex items-center space-x-4">
            <div className="bg-gray-800/30 backdrop-blur-sm border border-white/10 rounded-xl p-1 shadow-lg">
              {/* Active Background Slider */}
              <div className={`absolute top-1 bottom-1 w-1/2 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-lg shadow-lg transition-all duration-500 ease-out ${
                !isPersonalPage ? 'left-1' : 'left-1/2'
              }`}></div>
              
              {/* Navigation Buttons */}
              <div className="relative flex">
                <Link 
                  href="/"
                  className={`px-4 py-2 text-center text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 relative z-10 ${
                    !isPersonalPage 
                      ? 'text-white shadow-sm' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {t?.header?.nav?.professional || "PROFESSIONAL"}
                </Link>
                <Link 
                  href="/personal"
                  className={`px-4 py-2 text-center text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 relative z-10 ${
                    isPersonalPage 
                      ? 'text-white shadow-sm' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {t?.header?.nav?.personal || "PERSONAL"}
                </Link>
              </div>
            </div>
          </div>

          {/* Language Toggle */}
          <div className="flex items-center">
            <div className="bg-gray-800/30 backdrop-blur-sm border border-white/10 rounded-xl p-1 shadow-lg">
              <div className={`absolute top-1 bottom-1 w-1/2 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-lg shadow-lg transition-all duration-300 ease-out ${
                language === 'en' ? 'left-1' : 'left-1/2'
              }`}></div>
              
              <div className="relative flex">
                <button
                  onClick={() => language !== 'en' && onLanguageToggle()}
                  className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 relative z-10 ${
                    language === 'en' 
                      ? 'text-white shadow-sm' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  EN
                </button>
                <button 
                  onClick={() => language !== 'vi' && onLanguageToggle()}
                  className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 relative z-10 ${
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
        </div>
      </div>
    </nav>
  )
}
