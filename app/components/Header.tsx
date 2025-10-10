"use client"

import React from "react"
import { Cpu } from "lucide-react"

interface HeaderProps {
  logo: string
}

export default function Header({ logo }: HeaderProps) {

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-2xl border-b border-[#00ff88]/30 shadow-2xl shadow-[#00ff88]/10 lg:ml-80">
      {/* Tech Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
            animation: 'grid-move 15s linear infinite'
          }}></div>
        </div>
        
        {/* Scanning Line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent opacity-60 animate-scan"></div>
        
        {/* Corner Brackets */}
        <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-[#00ff88] opacity-40"></div>
        <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-[#00d4ff] opacity-40"></div>
        
        {/* Floating Data Points */}
        <div className="absolute top-4 right-20 w-1 h-1 bg-[#00ff88] rounded-full animate-pulse"></div>
        <div className="absolute top-4 right-32 w-1 h-1 bg-[#00d4ff] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-4 right-44 w-1 h-1 bg-[#7c3aed] rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-center h-20">
          {/* CPU Icon Only */}
          <div className="flex-shrink-0 relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative flex items-center justify-center w-12 h-12 bg-black/60 backdrop-blur-xl rounded-xl border border-[#00ff88]/40 shadow-lg shadow-[#00ff88]/20">
              {/* Animated CPU Icon */}
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-lg flex items-center justify-center shadow-lg shadow-[#00ff88]/30">
                  <Cpu className="w-5 h-5 text-white animate-pulse" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-lg opacity-30 blur-sm animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}