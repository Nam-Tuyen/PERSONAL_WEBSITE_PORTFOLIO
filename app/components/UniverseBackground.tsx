"use client"

import React from "react"

export default function UniverseBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Modern Tech Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}></div>
        </div>

        {/* Floating Tech Elements */}
        <div className="absolute inset-0 opacity-30">
          {/* Circuit Lines */}
          <div className="absolute top-1/4 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent animate-pulse"></div>
          <div className="absolute top-1/4 left-1/4 w-px h-16 bg-gradient-to-b from-transparent via-[#00ff88] to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
          
          <div className="absolute bottom-1/4 right-1/4 w-24 h-px bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-px h-12 bg-gradient-to-b from-transparent via-[#00d4ff] to-transparent animate-pulse" style={{animationDelay: '3s'}}></div>
          
          <div className="absolute top-1/2 left-1/6 w-20 h-px bg-gradient-to-r from-transparent via-[#7c3aed] to-transparent animate-pulse" style={{animationDelay: '4s'}}></div>
          <div className="absolute top-1/2 left-1/6 w-px h-10 bg-gradient-to-b from-transparent via-[#7c3aed] to-transparent animate-pulse" style={{animationDelay: '5s'}}></div>
        </div>

        {/* Floating Data Points */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={`data-point-${i}`}
              className="absolute w-1 h-1 bg-[#00ff88] rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                opacity: 0.3 + Math.random() * 0.4
              }}
            ></div>
          ))}
        </div>

        {/* Scanning Lines */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent animate-scan" style={{animationDuration: '8s'}}></div>
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent animate-scan" style={{animationDuration: '10s', animationDelay: '2s'}}></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#7c3aed] to-transparent animate-scan" style={{animationDuration: '12s', animationDelay: '4s'}}></div>
        </div>
      </div>
    </div>
  )
}