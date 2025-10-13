"use client"

import React from "react"
import { useRouter, usePathname } from "next/navigation"
import { Briefcase, Heart } from "lucide-react"

interface PageSwitcherProps {
  translations: any
  language: string
}

export default function PageSwitcher({ translations, language }: PageSwitcherProps) {
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
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-white/20 rounded-2xl p-1 shadow-2xl">
        <div className="flex">
          {/* Professional Page Button */}
          <button
            onClick={() => handlePageSwitch('professional')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
              isProfessionalPage
                ? 'bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black shadow-lg'
                : 'text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span className="font-semibold text-sm">
              {translations?.header?.nav?.professional || "PROFESSIONAL"}
            </span>
          </button>

          {/* Personal Page Button */}
          <button
            onClick={() => handlePageSwitch('personal')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
              isPersonalPage
                ? 'bg-gradient-to-r from-[#7c3aed] to-[#00ff88] text-white shadow-lg'
                : 'text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            <Heart className="w-4 h-4" />
            <span className="font-semibold text-sm">
              {translations?.header?.nav?.personal || "PERSONAL"}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
