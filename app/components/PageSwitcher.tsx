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
      
      {/* Minimal Center Navigation - Clean and subtle */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center h-16">
        <div className="bg-white/2 backdrop-blur-md border border-white/5 rounded-xl p-0.5 shadow-sm">
          <div className="flex gap-0.5 justify-center items-center">
            {/* Professional Page Button */}
            <button
              onClick={() => handlePageSwitch('professional')}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg transition-all duration-300 text-sm font-medium ${
                isProfessionalPage
                  ? 'bg-white/8 text-white border border-white/10'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-white/3'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">
                {translations?.header?.nav?.professional || "PROFESSIONAL"}
              </span>
            </button>

            {/* Personal Page Button */}
            <button
              onClick={() => handlePageSwitch('personal')}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg transition-all duration-300 text-sm font-medium ${
                isPersonalPage
                  ? 'bg-white/8 text-white border border-white/10'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-white/3'
              }`}
            >
              <Heart className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">
                {translations?.header?.nav?.personal || "PERSONAL"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
