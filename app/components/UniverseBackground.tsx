"use client"

import React from "react"

export default function UniverseBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Simple Black Background */}
      <div className="absolute inset-0 bg-black">
        {/* Minimal Moving Constellations */}
        <div className="absolute inset-0 opacity-30">
          {/* Constellation 1 */}
          <div className="absolute top-1/4 left-1/4 w-px h-20 bg-gradient-to-b from-[#8AB5FF]/60 to-transparent transform rotate-45 animate-constellation-glow" style={{animationDuration: '8s'}}></div>
          <div className="absolute top-1/4 left-1/4 w-20 h-px bg-gradient-to-r from-[#8AB5FF]/60 to-transparent transform rotate-45 animate-constellation-glow" style={{animationDuration: '8s', animationDelay: '1s'}}></div>
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#8AB5FF] rounded-full animate-cosmic-pulse" style={{animationDuration: '3s'}}></div>
          
          {/* Constellation 2 */}
          <div className="absolute bottom-1/4 right-1/4 w-px h-16 bg-gradient-to-b from-[#00ff88]/60 to-transparent transform -rotate-30 animate-constellation-glow" style={{animationDuration: '10s', animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-16 h-px bg-gradient-to-r from-[#00ff88]/60 to-transparent transform -rotate-30 animate-constellation-glow" style={{animationDuration: '10s', animationDelay: '3s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-[#00ff88] rounded-full animate-cosmic-pulse" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
          
          {/* Constellation 3 */}
          <div className="absolute top-1/2 left-1/6 w-px h-14 bg-gradient-to-b from-[#00d4ff]/60 to-transparent transform rotate-60 animate-constellation-glow" style={{animationDuration: '12s', animationDelay: '4s'}}></div>
          <div className="absolute top-1/2 left-1/6 w-14 h-px bg-gradient-to-r from-[#00d4ff]/60 to-transparent transform rotate-60 animate-constellation-glow" style={{animationDuration: '12s', animationDelay: '5s'}}></div>
          <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-[#00d4ff] rounded-full animate-cosmic-pulse" style={{animationDuration: '5s', animationDelay: '2s'}}></div>
          
          {/* Constellation 4 */}
          <div className="absolute bottom-1/3 left-1/2 w-px h-12 bg-gradient-to-b from-[#7c3aed]/60 to-transparent transform -rotate-45 animate-constellation-glow" style={{animationDuration: '9s', animationDelay: '6s'}}></div>
          <div className="absolute bottom-1/3 left-1/2 w-12 h-px bg-gradient-to-r from-[#7c3aed]/60 to-transparent transform -rotate-45 animate-constellation-glow" style={{animationDuration: '9s', animationDelay: '7s'}}></div>
          <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-[#7c3aed] rounded-full animate-cosmic-pulse" style={{animationDuration: '6s', animationDelay: '3s'}}></div>
          
          {/* Constellation 5 */}
          <div className="absolute top-1/3 right-1/6 w-px h-18 bg-gradient-to-b from-[#4A90E2]/60 to-transparent transform rotate-30 animate-constellation-glow" style={{animationDuration: '11s', animationDelay: '8s'}}></div>
          <div className="absolute top-1/3 right-1/6 w-18 h-px bg-gradient-to-r from-[#4A90E2]/60 to-transparent transform rotate-30 animate-constellation-glow" style={{animationDuration: '11s', animationDelay: '9s'}}></div>
          <div className="absolute top-1/3 right-1/6 w-1 h-1 bg-[#4A90E2] rounded-full animate-cosmic-pulse" style={{animationDuration: '7s', animationDelay: '4s'}}></div>
        </div>
      </div>
    </div>
  )
}