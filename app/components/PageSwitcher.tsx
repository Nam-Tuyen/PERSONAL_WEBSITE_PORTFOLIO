"use client"

import React from "react"
import { useRouter, usePathname } from "next/navigation"
import { Briefcase, Heart } from "lucide-react"

interface PageSwitcherProps {
  translations: any
  language: string
  isSidebarCollapsed?: boolean
}

export default function PageSwitcher({ translations, language, isSidebarCollapsed = true }: PageSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()
  
  const isPersonalPage = pathname === '/personal'
  const isProfessionalPage = pathname === '/' || pathname === '/professional'

  const handlePageSwitch = (page: 'professional' | 'personal') => {
    if (page === 'professional') {
      router.push('/')
    } else {
      router.push('/personal')
    }
  }

  return (
    <>
      {/* Minimal Background Header - Very subtle */}
      <div className={`fixed top-0 left-0 right-0 z-40 bg-black/3 backdrop-blur-sm transition-all duration-500 ${
        isSidebarCollapsed ? 'lg:ml-0' : 'lg:ml-64'
      }`}>
        <div className="w-full h-16"></div>
      </div>
      
      {/* Enhanced Responsive LED Navigation - Premium UX */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center h-16 px-4 sm:px-6">
        <div className="relative bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-1 shadow-2xl max-w-fit">
          {/* Animated LED Border */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div 
              className={`absolute inset-0 rounded-2xl transition-all duration-1000 ${
                isProfessionalPage 
                  ? 'bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] opacity-30' 
                  : 'bg-gradient-to-r from-[#7c3aed] via-[#00ff88] to-[#00d4ff] opacity-30'
              }`} 
              style={{
                background: isProfessionalPage 
                  ? 'linear-gradient(90deg, #00ff88, #00d4ff, #7c3aed, #00ff88)'
                  : 'linear-gradient(90deg, #7c3aed, #00ff88, #00d4ff, #7c3aed)',
                backgroundSize: '200% 100%',
                animation: 'led-flow 4s linear infinite'
              }}
            ></div>
          </div>
          
          {/* Inner Glow Effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-50"></div>
          
          <div className="relative flex gap-0.5 sm:gap-1 justify-center items-center p-0.5 sm:p-1">
            {/* Professional Page Button */}
            <button
              onClick={() => handlePageSwitch('professional')}
              className={`relative flex items-center space-x-1 sm:space-x-2 px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl transition-all duration-300 text-xs sm:text-sm font-semibold touch-target group ${
                isProfessionalPage
                  ? 'bg-gradient-to-r from-[#00ff88]/20 to-[#00d4ff]/20 text-white border border-[#00ff88]/30 shadow-lg shadow-[#00ff88]/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent active:scale-95'
              }`}
              aria-label={`Switch to ${translations?.header?.nav?.professional || "PROFESSIONAL"} page`}
            >
              {/* LED Indicator for Professional */}
              {isProfessionalPage && (
                <div className="absolute -top-0.5 sm:-top-1 -right-0.5 sm:-right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-full animate-pulse shadow-lg shadow-[#00ff88]/60">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-full animate-ping opacity-75"></div>
                </div>
              )}
              <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform duration-200" />
              <span className="hidden sm:inline font-medium whitespace-nowrap">
                {translations?.header?.nav?.professional || "PROFESSIONAL"}
              </span>
              {/* Mobile Tooltip */}
              <span className="sm:hidden absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                {translations?.header?.nav?.professional || "PROFESSIONAL"}
              </span>
            </button>

            {/* Personal Page Button */}
            <button
              onClick={() => handlePageSwitch('personal')}
              className={`relative flex items-center space-x-1 sm:space-x-2 px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl transition-all duration-300 text-xs sm:text-sm font-semibold touch-target group ${
                isPersonalPage
                  ? 'bg-gradient-to-r from-[#7c3aed]/20 to-[#00ff88]/20 text-white border border-[#7c3aed]/30 shadow-lg shadow-[#7c3aed]/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent active:scale-95'
              }`}
              aria-label={`Switch to ${translations?.header?.nav?.personal || "PERSONAL"} page`}
            >
              {/* LED Indicator for Personal */}
              {isPersonalPage && (
                <div className="absolute -top-0.5 sm:-top-1 -right-0.5 sm:-right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-r from-[#7c3aed] to-[#00ff88] rounded-full animate-pulse shadow-lg shadow-[#7c3aed]/60">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#7c3aed] to-[#00ff88] rounded-full animate-ping opacity-75"></div>
                </div>
              )}
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform duration-200" />
              <span className="hidden sm:inline font-medium whitespace-nowrap">
                {translations?.header?.nav?.personal || "PERSONAL"}
              </span>
              {/* Mobile Tooltip */}
              <span className="sm:hidden absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                {translations?.header?.nav?.personal || "PERSONAL"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
