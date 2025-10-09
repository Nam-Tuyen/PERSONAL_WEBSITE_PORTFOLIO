"use client"

import React from "react"

export default function UniverseBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Advanced High-Tech Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        
        {/* Multi-layer Grid System */}
        <div className="absolute inset-0 opacity-15">
          {/* Primary Grid */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 136, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 136, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            animation: 'grid-move 15s linear infinite'
          }}></div>
          
          {/* Secondary Grid */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            animation: 'grid-move 25s linear infinite reverse'
          }}></div>
          
          {/* Tertiary Grid */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(124, 58, 237, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(124, 58, 237, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '160px 160px',
            animation: 'grid-move 35s linear infinite'
          }}></div>
        </div>

        {/* Advanced Circuit Patterns */}
        <div className="absolute inset-0 opacity-25">
          {/* Main Circuit Board */}
          <div className="absolute top-1/4 left-1/4 w-64 h-32 border border-[#00ff88] opacity-30 rounded-lg">
            <div className="absolute top-2 left-2 w-2 h-2 bg-[#00ff88] rounded-full animate-pulse"></div>
            <div className="absolute top-2 right-2 w-2 h-2 bg-[#00ff88] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-2 left-2 w-2 h-2 bg-[#00ff88] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-2 right-2 w-2 h-2 bg-[#00ff88] rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
            
            {/* Internal Circuit Lines */}
            <div className="absolute top-1/2 left-2 w-60 h-px bg-gradient-to-r from-[#00ff88] to-transparent opacity-50"></div>
            <div className="absolute top-2 left-1/2 w-px h-28 bg-gradient-to-b from-[#00ff88] to-transparent opacity-50"></div>
          </div>
          
          {/* Secondary Circuit */}
          <div className="absolute bottom-1/4 right-1/4 w-48 h-24 border border-[#00d4ff] opacity-30 rounded-lg">
            <div className="absolute top-1 left-1 w-1 h-1 bg-[#00d4ff] rounded-full animate-pulse"></div>
            <div className="absolute top-1 right-1 w-1 h-1 bg-[#00d4ff] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-1 left-1 w-1 h-1 bg-[#00d4ff] rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-1 right-1 w-1 h-1 bg-[#00d4ff] rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
            
            <div className="absolute top-1/2 left-1 w-46 h-px bg-gradient-to-r from-[#00d4ff] to-transparent opacity-50"></div>
            <div className="absolute top-1 left-1/2 w-px h-22 bg-gradient-to-b from-[#00d4ff] to-transparent opacity-50"></div>
          </div>
          
          {/* Tertiary Circuit */}
          <div className="absolute top-1/2 left-1/6 w-32 h-16 border border-[#7c3aed] opacity-30 rounded-lg">
            <div className="absolute top-1 left-1 w-1 h-1 bg-[#7c3aed] rounded-full animate-pulse"></div>
            <div className="absolute top-1 right-1 w-1 h-1 bg-[#7c3aed] rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute bottom-1 left-1 w-1 h-1 bg-[#7c3aed] rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
            <div className="absolute bottom-1 right-1 w-1 h-1 bg-[#7c3aed] rounded-full animate-pulse" style={{animationDelay: '4.5s'}}></div>
            
            <div className="absolute top-1/2 left-1 w-30 h-px bg-gradient-to-r from-[#7c3aed] to-transparent opacity-50"></div>
            <div className="absolute top-1 left-1/2 w-px h-14 bg-gradient-to-b from-[#7c3aed] to-transparent opacity-50"></div>
          </div>
        </div>

        {/* Hexagonal Tech Elements */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(12)].map((_, i) => (
            <div
              key={`hex-${i}`}
              className="absolute w-8 h-8 border border-[#00ff88] opacity-30 transform rotate-45 animate-pulse"
              style={{
                left: `${10 + (i * 7)}%`,
                top: `${15 + (i * 6)}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + (i % 3)}s`
              }}
            ></div>
          ))}
        </div>

        {/* Advanced Data Flow Lines */}
        <div className="absolute inset-0 opacity-30">
          {/* Horizontal Flow Lines */}
          <div className="absolute top-1/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent animate-scan" style={{animationDuration: '6s'}}></div>
          <div className="absolute top-2/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent animate-scan" style={{animationDuration: '8s', animationDelay: '1s'}}></div>
          <div className="absolute top-3/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#7c3aed] to-transparent animate-scan" style={{animationDuration: '10s', animationDelay: '2s'}}></div>
          <div className="absolute top-4/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent animate-scan" style={{animationDuration: '12s', animationDelay: '3s'}}></div>
          
          {/* Vertical Flow Lines */}
          <div className="absolute left-1/5 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#00d4ff] to-transparent animate-scan" style={{animationDuration: '7s', animationDelay: '0.5s'}}></div>
          <div className="absolute left-2/5 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#7c3aed] to-transparent animate-scan" style={{animationDuration: '9s', animationDelay: '1.5s'}}></div>
          <div className="absolute left-3/5 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#00ff88] to-transparent animate-scan" style={{animationDuration: '11s', animationDelay: '2.5s'}}></div>
          <div className="absolute left-4/5 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#00d4ff] to-transparent animate-scan" style={{animationDuration: '13s', animationDelay: '3.5s'}}></div>
        </div>

        {/* Enhanced Floating Data Points */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={`data-point-${i}`}
              className={`absolute w-1 h-1 rounded-full animate-pulse ${
                i % 3 === 0 ? 'bg-[#00ff88]' : 
                i % 3 === 1 ? 'bg-[#00d4ff]' : 'bg-[#7c3aed]'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                opacity: 0.2 + Math.random() * 0.6,
                boxShadow: `0 0 ${2 + Math.random() * 4}px currentColor`
              }}
            ></div>
          ))}
        </div>

        {/* Matrix Rain Effect */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(8)].map((_, i) => (
            <div
              key={`matrix-${i}`}
              className="absolute top-0 w-px h-full bg-gradient-to-b from-transparent via-[#00ff88] to-transparent animate-pulse"
              style={{
                left: `${10 + (i * 12)}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        {/* Holographic Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/20 via-transparent to-[#7c3aed]/20 animate-pulse" style={{animationDuration: '4s'}}></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-[#00d4ff]/20 via-transparent to-[#00ff88]/20 animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}}></div>
        </div>

        {/* Scanning Radar Effect */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 opacity-20">
          <div className="absolute inset-0 border border-[#00ff88] rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
          <div className="absolute inset-4 border border-[#00d4ff] rounded-full animate-ping" style={{animationDuration: '3s', animationDelay: '1s'}}></div>
          <div className="absolute inset-8 border border-[#7c3aed] rounded-full animate-ping" style={{animationDuration: '3s', animationDelay: '2s'}}></div>
        </div>

        {/* Binary Code Rain */}
        <div className="absolute inset-0 opacity-15 font-mono text-[#00ff88] text-xs overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={`binary-${i}`}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}