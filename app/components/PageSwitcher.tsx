"use client"

import React, { useState, useEffect, useRef } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Briefcase, Heart, GripVertical } from "lucide-react"

interface PageSwitcherProps {
  translations: any
  language: string
}

export default function PageSwitcher({ translations, language }: PageSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const switcherRef = useRef<HTMLDivElement>(null)
  
  const isPersonalPage = pathname === '/personal'
  const isProfessionalPage = pathname === '/' || pathname === '/professional'

  // Initialize position on the right side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPosition({ 
        x: window.innerWidth - 80, // 80px from right edge
        y: window.innerHeight / 2 - 100 // Center vertically
      })
    }
  }, [])

  const handlePageSwitch = (page: 'professional' | 'personal') => {
    if (page === 'professional') {
      router.push('/')
    } else {
      router.push('/personal')
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (switcherRef.current) {
      const rect = switcherRef.current.getBoundingClientRect()
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
      setIsDragging(true)
    }
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      const newX = e.clientX - dragOffset.x
      const newY = e.clientY - dragOffset.y
      
      // Keep within viewport bounds
      const maxX = window.innerWidth - 60 // 60px width of switcher
      const maxY = window.innerHeight - 120 // 120px height of switcher
      
      setPosition({
        x: Math.max(0, Math.min(newX, maxX)),
        y: Math.max(0, Math.min(newY, maxY))
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.body.style.userSelect = 'none'
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
        document.body.style.userSelect = ''
      }
    }
  }, [isDragging, dragOffset])

  return (
    <div
      ref={switcherRef}
      className={`fixed z-50 transition-all duration-200 ${
        isDragging ? 'scale-105 shadow-2xl' : 'shadow-xl'
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: isDragging ? 'grabbing' : 'grab'
      }}
    >
      <div className="bg-gradient-to-b from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-white/20 rounded-2xl p-2 shadow-2xl">
        {/* Drag Handle */}
        <div
          className="flex justify-center mb-2 cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
        >
          <GripVertical className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
        </div>
        
        {/* Vertical Button Layout */}
        <div className="flex flex-col gap-2">
          {/* Professional Page Button */}
          <button
            onClick={() => handlePageSwitch('professional')}
            className={`flex flex-col items-center space-y-1 px-3 py-3 rounded-xl transition-all duration-300 min-w-[60px] ${
              isProfessionalPage
                ? 'bg-gradient-to-b from-[#00ff88] to-[#00d4ff] text-black shadow-lg'
                : 'text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            <Briefcase className="w-5 h-5" />
            <span className="font-semibold text-xs text-center leading-tight">
              {translations?.header?.nav?.professional || "PRO"}
            </span>
          </button>

          {/* Personal Page Button */}
          <button
            onClick={() => handlePageSwitch('personal')}
            className={`flex flex-col items-center space-y-1 px-3 py-3 rounded-xl transition-all duration-300 min-w-[60px] ${
              isPersonalPage
                ? 'bg-gradient-to-b from-[#7c3aed] to-[#00ff88] text-white shadow-lg'
                : 'text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            <Heart className="w-5 h-5" />
            <span className="font-semibold text-xs text-center leading-tight">
              {translations?.header?.nav?.personal || "PERSONAL"}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
