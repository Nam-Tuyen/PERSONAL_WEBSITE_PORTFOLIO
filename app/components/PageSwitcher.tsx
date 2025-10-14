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
      
      {/* Modern Tech Navigation - Minimalist & Futuristic */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center h-16 px-4 sm:px-6">
        <div className="relative bg-black/10 backdrop-blur-2xl border border-white/5 rounded-xl p-0.5 shadow-xl max-w-fit">
          {/* Tech Grid Background */}
          <div className="absolute inset-0 rounded-xl overflow-hidden opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px',
              animation: 'grid-move 20s linear infinite'
            }}></div>
          </div>
          
          {/* Active State Glow */}
          <div className={`absolute inset-0 rounded-xl transition-all duration-500 ${
            isProfessionalPage 
              ? 'bg-gradient-to-r from-[#00ff88]/10 to-[#00d4ff]/10' 
              : 'bg-gradient-to-r from-[#7c3aed]/10 to-[#00ff88]/10'
          }`}></div>
          
          <div className="relative flex gap-0 justify-center items-center">
            {/* Professional Page Button */}
            <button
              onClick={() => handlePageSwitch('professional')}
              className={`relative flex items-center space-x-2 px-4 sm:px-6 py-3 sm:py-3.5 rounded-lg transition-all duration-300 text-sm font-medium touch-target group ${
                isProfessionalPage
                  ? 'bg-white/5 text-white border-l border-[#00ff88]/50'
                  : 'text-gray-500 hover:text-gray-300 hover:bg-white/2 border-l border-transparent'
              }`}
              aria-label={`Switch to ${translations?.header?.nav?.professional || "PROFESSIONAL"} page`}
            >
              {/* Tech Indicator */}
              {isProfessionalPage && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-gradient-to-b from-[#00ff88] to-[#00d4ff] rounded-r-full"></div>
              )}
              <Briefcase className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <span className="hidden sm:inline font-medium tracking-wide">
                {translations?.header?.nav?.professional || "PROFESSIONAL"}
              </span>
            </button>

            {/* Divider */}
            <div className="w-px h-6 bg-white/10"></div>

            {/* Personal Page Button */}
            <button
              onClick={() => handlePageSwitch('personal')}
              className={`relative flex items-center space-x-2 px-4 sm:px-6 py-3 sm:py-3.5 rounded-lg transition-all duration-300 text-sm font-medium touch-target group ${
                isPersonalPage
                  ? 'bg-white/5 text-white border-r border-[#7c3aed]/50'
                  : 'text-gray-500 hover:text-gray-300 hover:bg-white/2 border-r border-transparent'
              }`}
              aria-label={`Switch to ${translations?.header?.nav?.personal || "PERSONAL"} page`}
            >
              <Heart className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <span className="hidden sm:inline font-medium tracking-wide">
                {translations?.header?.nav?.personal || "PERSONAL"}
              </span>
              {/* Tech Indicator */}
              {isPersonalPage && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-gradient-to-b from-[#7c3aed] to-[#00ff88] rounded-l-full"></div>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
