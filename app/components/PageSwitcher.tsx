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
    <div className="fixed top-0 left-0 right-0 z-40 bg-black/10 backdrop-blur-2xl border-b border-white/5">
      <div className={`w-full px-4 py-4 transition-all duration-500 ${
        isSidebarCollapsed ? 'lg:ml-0' : 'lg:ml-64'
      }`}>
        <div className="flex justify-center items-center">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-1.5 shadow-2xl">
            <div className="flex gap-1 justify-center items-center">
              {/* Professional Page Button */}
              <button
                onClick={() => handlePageSwitch('professional')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                  isProfessionalPage
                    ? 'bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black shadow-lg shadow-[#00ff88]/25'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
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
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                  isPersonalPage
                    ? 'bg-gradient-to-r from-[#7c3aed] to-[#00ff88] text-white shadow-lg shadow-[#7c3aed]/25'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
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
