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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-20">
          {/* Page Navigation */}
          <div className="flex items-center space-x-6">
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-1.5 shadow-2xl shadow-black/20">
              {/* Active Background Slider */}
              <div className={`absolute top-1.5 bottom-1.5 w-1/2 bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] rounded-xl shadow-lg transition-all duration-700 ease-out ${
                !isPersonalPage ? 'left-1.5' : 'left-1/2'
              }`}></div>
              
              {/* Navigation Buttons */}
              <div className="relative flex">
                <Link 
                  href="/"
                  className={`px-6 py-3 text-center text-sm font-bold uppercase tracking-widest rounded-xl transition-all duration-500 relative z-10 ${
                    !isPersonalPage 
                      ? 'text-white drop-shadow-lg' 
                      : 'text-gray-300 hover:text-white hover:drop-shadow-md'
                  }`}
                >
                  {t?.header?.nav?.professional || "PROFESSIONAL"}
                </Link>
                <Link 
                  href="/personal"
                  className={`px-6 py-3 text-center text-sm font-bold uppercase tracking-widest rounded-xl transition-all duration-500 relative z-10 ${
                    isPersonalPage 
                      ? 'text-white drop-shadow-lg' 
                      : 'text-gray-300 hover:text-white hover:drop-shadow-md'
                  }`}
                >
                  {t?.header?.nav?.personal || "PERSONAL"}
                </Link>
              </div>
            </div>
          </div>

          {/* Language Toggle */}
          <div className="flex items-center">
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-1.5 shadow-2xl shadow-black/20">
              <div className={`absolute top-1.5 bottom-1.5 w-1/2 bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] rounded-xl shadow-lg transition-all duration-500 ease-out ${
                language === 'en' ? 'left-1.5' : 'left-1/2'
              }`}></div>
              
              <div className="relative flex">
                <button
                  onClick={() => language !== 'en' && onLanguageToggle()}
                  className={`px-4 py-2.5 text-sm font-bold uppercase tracking-widest rounded-xl transition-all duration-500 relative z-10 ${
                    language === 'en' 
                      ? 'text-white drop-shadow-lg' 
                      : 'text-gray-300 hover:text-white hover:drop-shadow-md'
                  }`}
                >
                  EN
                </button>
                <button 
                  onClick={() => language !== 'vi' && onLanguageToggle()}
                  className={`px-4 py-2.5 text-sm font-bold uppercase tracking-widest rounded-xl transition-all duration-500 relative z-10 ${
                    language === 'vi' 
                      ? 'text-white drop-shadow-lg' 
                      : 'text-gray-300 hover:text-white hover:drop-shadow-md'
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
