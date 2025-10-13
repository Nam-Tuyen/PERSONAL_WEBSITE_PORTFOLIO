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
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900/95 to-gray-800/95 backdrop-blur-xl border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-white/10 rounded-xl p-1 shadow-lg">
            <div className="flex gap-1">
              {/* Professional Page Button */}
              <button
                onClick={() => handlePageSwitch('professional')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isProfessionalPage
                    ? 'bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black shadow-md'
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
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isPersonalPage
                    ? 'bg-gradient-to-r from-[#7c3aed] to-[#00ff88] text-white shadow-md'
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
      </div>
    </div>
  )
}
