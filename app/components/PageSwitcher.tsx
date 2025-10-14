"use client"

import React, { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Briefcase, Heart, Sparkles, Zap } from "lucide-react"

interface PageSwitcherProps {
  translations: any
  language: string
  isSidebarCollapsed?: boolean
}

export default function PageSwitcher({ translations, language, isSidebarCollapsed = true }: PageSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)
  
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
      {/* Modern Glass Header with Enhanced Effects */}
      <div className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isSidebarCollapsed ? 'lg:ml-0' : 'lg:ml-64'
      }`}>
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/5 via-[#00d4ff]/5 to-[#7c3aed]/5 animate-pulse"></div>
        
        {/* Glass Morphism Background */}
        <div className="relative bg-black/20 backdrop-blur-3xl border-b border-white/10">
          <div className="w-full h-20"></div>
        </div>
        
        {/* Floating Particles Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 rounded-full animate-pulse ${
                i % 3 === 0 ? 'bg-[#00ff88]' : i % 3 === 1 ? 'bg-[#00d4ff]' : 'bg-[#7c3aed]'
              }`}
              style={{
                left: `${10 + (i * 15)}%`,
                top: `${20 + (i * 10)}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + (i % 3)}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Ultra-Modern Center Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center h-20">
        <div className="relative group">
          {/* Outer Glow Ring */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] rounded-3xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
          
          {/* Main Container with Enhanced Glass Effect */}
          <div className="relative bg-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-2 shadow-2xl">
            {/* Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/10 via-[#00d4ff]/10 to-[#7c3aed]/10 rounded-3xl opacity-50"></div>
            
            {/* Button Container */}
            <div className="relative flex gap-2 justify-center items-center">
              {/* Professional Page Button */}
              <button
                onClick={() => handlePageSwitch('professional')}
                onMouseEnter={() => setHoveredButton('professional')}
                onMouseLeave={() => setHoveredButton(null)}
                className={`relative flex items-center space-x-3 px-8 py-4 rounded-2xl transition-all duration-500 group/btn overflow-hidden ${
                  isProfessionalPage
                    ? 'bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black shadow-2xl shadow-[#00ff88]/30'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {/* Animated Background for Active State */}
                {isProfessionalPage && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] opacity-90 animate-pulse"></div>
                )}
                
                {/* Hover Glow Effect */}
                {hoveredButton === 'professional' && !isProfessionalPage && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/20 to-[#00d4ff]/20 rounded-2xl animate-pulse"></div>
                )}
                
                {/* Icon with Enhanced Animation */}
                <div className="relative z-10 flex items-center space-x-3">
                  <div className={`transition-all duration-300 ${
                    isProfessionalPage ? 'scale-110 rotate-3' : 'group-hover/btn:scale-110 group-hover/btn:rotate-3'
                  }`}>
                    <Briefcase className="w-5 h-5" />
                  </div>
                  
                  {/* Sparkle Effect for Active State */}
                  {isProfessionalPage && (
                    <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '3s' }} />
                  )}
                  
                  <span className="font-bold text-sm tracking-wide">
                    {translations?.header?.nav?.professional || "PROFESSIONAL"}
                  </span>
                </div>
                
                {/* Ripple Effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 scale-0 group-hover/btn:scale-100 transition-transform duration-500 rounded-full"></div>
                </div>
              </button>

              {/* Divider with Glow */}
              <div className="w-px h-8 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>

              {/* Personal Page Button */}
              <button
                onClick={() => handlePageSwitch('personal')}
                onMouseEnter={() => setHoveredButton('personal')}
                onMouseLeave={() => setHoveredButton(null)}
                className={`relative flex items-center space-x-3 px-8 py-4 rounded-2xl transition-all duration-500 group/btn overflow-hidden ${
                  isPersonalPage
                    ? 'bg-gradient-to-r from-[#7c3aed] to-[#00ff88] text-white shadow-2xl shadow-[#7c3aed]/30'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {/* Animated Background for Active State */}
                {isPersonalPage && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#7c3aed] to-[#00ff88] opacity-90 animate-pulse"></div>
                )}
                
                {/* Hover Glow Effect */}
                {hoveredButton === 'personal' && !isPersonalPage && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#7c3aed]/20 to-[#00ff88]/20 rounded-2xl animate-pulse"></div>
                )}
                
                {/* Icon with Enhanced Animation */}
                <div className="relative z-10 flex items-center space-x-3">
                  <div className={`transition-all duration-300 ${
                    isPersonalPage ? 'scale-110 rotate-3' : 'group-hover/btn:scale-110 group-hover/btn:rotate-3'
                  }`}>
                    <Heart className="w-5 h-5" />
                  </div>
                  
                  {/* Zap Effect for Active State */}
                  {isPersonalPage && (
                    <Zap className="w-4 h-4 animate-bounce" style={{ animationDuration: '1s' }} />
                  )}
                  
                  <span className="font-bold text-sm tracking-wide">
                    {translations?.header?.nav?.personal || "PERSONAL"}
                  </span>
                </div>
                
                {/* Ripple Effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 scale-0 group-hover/btn:scale-100 transition-transform duration-500 rounded-full"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
