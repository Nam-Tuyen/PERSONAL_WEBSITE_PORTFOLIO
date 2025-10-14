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
      {/* Modern Glass Header Background */}
      <div className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isSidebarCollapsed ? 'lg:ml-0' : 'lg:ml-64'
      }`}>
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/5 via-transparent to-[#00d4ff]/5"></div>
        
        {/* Glass Effect */}
        <div className="relative bg-black/20 backdrop-blur-3xl border-b border-white/10">
          <div className="w-full h-20"></div>
        </div>
        
        {/* Animated Tech Grid Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full tech-grid-animated"></div>
        </div>
      </div>
      
      {/* Modern Floating Navigation */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="relative group">
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00ff88]/20 via-[#00d4ff]/20 to-[#7c3aed]/20 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Main Container */}
          <div className="relative bg-gray-900/80 backdrop-blur-2xl border border-white/20 rounded-3xl p-1 shadow-2xl">
            {/* Active Background Slider */}
            <div className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-gradient-to-r rounded-2xl transition-all duration-500 ease-out ${
              isProfessionalPage 
                ? 'left-1 from-[#00ff88] to-[#00d4ff]' 
                : 'left-[calc(50%-2px)] from-[#7c3aed] to-[#00ff88]'
            }`}></div>
            
            {/* Navigation Buttons */}
            <div className="relative flex">
              {/* Professional Button */}
              <button
                onClick={() => handlePageSwitch('professional')}
                className={`relative flex items-center space-x-2 px-6 py-3 rounded-2xl transition-all duration-300 min-w-[120px] justify-center ${
                  isProfessionalPage
                    ? 'text-black font-bold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <div className={`transition-all duration-300 ${
                  isProfessionalPage ? 'scale-110 animate-icon-float' : 'scale-100'
                }`}>
                  <Briefcase className="w-4 h-4" />
                </div>
                <span className="font-semibold text-sm tracking-wide">
                  {translations?.header?.nav?.professional || "PROFESSIONAL"}
                </span>
              </button>

              {/* Personal Button */}
              <button
                onClick={() => handlePageSwitch('personal')}
                className={`relative flex items-center space-x-2 px-6 py-3 rounded-2xl transition-all duration-300 min-w-[120px] justify-center ${
                  isPersonalPage
                    ? 'text-white font-bold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <div className={`transition-all duration-300 ${
                  isPersonalPage ? 'scale-110 animate-icon-float' : 'scale-100'
                }`}>
                  <Heart className="w-4 h-4" />
                </div>
                <span className="font-semibold text-sm tracking-wide">
                  {translations?.header?.nav?.personal || "PERSONAL"}
                </span>
              </button>
            </div>
          </div>
          
          {/* Tech Accent Lines */}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-[#00ff88] to-transparent opacity-60"></div>
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent opacity-60"></div>
          
          {/* Tech Scan Line */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00ff88] to-transparent animate-tech-scan opacity-60"></div>
          </div>
        </div>
      </div>
    </>
  )
}
