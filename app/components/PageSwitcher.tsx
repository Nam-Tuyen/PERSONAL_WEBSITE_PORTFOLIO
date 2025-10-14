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
      
      {/* Modern Minimalist Navigation - Dark Glass Effect */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center h-16 px-4 sm:px-6">
        <div className="relative bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-1 shadow-2xl max-w-fit">
          {/* Subtle Glass Effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent opacity-50"></div>
          
          {/* Active State Indicator */}
          <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
            isProfessionalPage 
              ? 'bg-gradient-to-r from-[#00ff88]/5 to-[#00d4ff]/5' 
              : 'bg-gradient-to-r from-[#7c3aed]/5 to-[#00ff88]/5'
          }`}></div>
          
          <div className="relative flex gap-1 justify-center items-center">
            {/* Professional Page Button */}
            <button
              onClick={() => handlePageSwitch('professional')}
              className={`relative flex items-center space-x-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl transition-all duration-300 text-sm font-medium touch-target group ${
                isProfessionalPage
                  ? 'bg-white/10 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
              aria-label={`Switch to ${translations?.header?.nav?.professional || "PROFESSIONAL"} page`}
            >
              <Briefcase className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <span className="hidden sm:inline font-medium">
                {translations?.header?.nav?.professional || "PROFESSIONAL"}
              </span>
            </button>

            {/* Personal Page Button */}
            <button
              onClick={() => handlePageSwitch('personal')}
              className={`relative flex items-center space-x-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl transition-all duration-300 text-sm font-medium touch-target group ${
                isPersonalPage
                  ? 'bg-white/10 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
              aria-label={`Switch to ${translations?.header?.nav?.personal || "PERSONAL"} page`}
            >
              <Heart className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <span className="hidden sm:inline font-medium">
                {translations?.header?.nav?.personal || "PERSONAL"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
