"use client"

import React from "react"

interface AboutSectionProps {
  label: string
  quote: string
  description: string
}

export default function AboutSection({ label, quote, description }: AboutSectionProps) {
  return (
    <section className="py-20 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Space Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Nebula Clouds */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-[#7B68EE]/20 to-transparent rounded-full blur-3xl animate-nebula-float"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-radial from-[#4A90E2]/20 to-transparent rounded-full blur-3xl animate-nebula-float" style={{animationDelay: '5s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-[#00CED1]/15 to-transparent rounded-full blur-2xl animate-nebula-float" style={{animationDelay: '10s'}}></div>
        
        {/* Floating Stars */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              opacity: 0.3 + Math.random() * 0.7
            }}
          />
        ))}
        
        {/* Orbital Rings */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-[#4A90E2]/20 rounded-full animate-orbit-rotate" style={{animationDuration: '60s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 border border-[#7B68EE]/15 rounded-full animate-orbit-rotate" style={{animationDuration: '40s', animationDirection: 'reverse'}}></div>
        
        {/* Floating Planets */}
        <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-gradient-radial from-[#7B68EE] to-[#483D8B] rounded-full shadow-lg shadow-[#7B68EE]/50 animate-planet-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-5 h-5 bg-gradient-radial from-[#4A90E2] to-[#1E3A8A] rounded-full shadow-lg shadow-[#4A90E2]/50 animate-planet-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/6 w-4 h-4 bg-gradient-radial from-[#00CED1] to-[#008B8B] rounded-full shadow-lg shadow-[#00CED1]/50 animate-planet-float" style={{animationDelay: '1s'}}></div>
        
        {/* Constellation Lines */}
        <div className="absolute top-1/3 left-1/3 w-px h-16 bg-gradient-to-b from-[#8AB5FF]/60 to-transparent transform rotate-45 animate-constellation-glow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-px h-12 bg-gradient-to-b from-[#8AB5FF]/60 to-transparent transform -rotate-30 animate-constellation-glow" style={{animationDelay: '1s'}}></div>
        
        {/* Cosmic Dots */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-[#8AB5FF] rounded-full shadow-lg shadow-[#8AB5FF]/80 animate-cosmic-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-[#8AB5FF] rounded-full shadow-lg shadow-[#8AB5FF]/80 animate-cosmic-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10">
        {/* About Me Label - Enhanced Space Style */}
        <div className="text-center mb-16">
          <div className="relative inline-block group">
            {/* Main Title */}
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black uppercase tracking-wider bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent relative z-10 drop-shadow-2xl">
              {label}
            </h2>
            
            {/* Space Glow Effects */}
            <div className="absolute -inset-6 sm:-inset-8 lg:-inset-10 bg-gradient-to-r from-[#00ff88]/30 via-[#00d4ff]/30 to-[#7c3aed]/30 blur-3xl sm:blur-4xl rounded-3xl opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
            <div className="absolute -inset-3 sm:-inset-4 lg:-inset-5 bg-gradient-to-r from-[#00ff88]/20 via-[#00d4ff]/20 to-[#7c3aed]/20 blur-2xl sm:blur-3xl rounded-2xl opacity-50"></div>
            
            {/* Space Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-4 h-4 bg-[#00ff88] rounded-full animate-pulse shadow-lg shadow-[#00ff88]/50"></div>
            <div className="absolute -top-4 -right-8 w-3 h-3 bg-[#00d4ff] rounded-full animate-pulse shadow-lg shadow-[#00d4ff]/50" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute -bottom-5 -left-10 w-3.5 h-3.5 bg-[#7c3aed] rounded-full animate-pulse shadow-lg shadow-[#7c3aed]/50" style={{animationDelay: '1s'}}></div>
            <div className="absolute -bottom-3 -right-6 w-2.5 h-2.5 bg-[#00ff88] rounded-full animate-pulse shadow-lg shadow-[#00ff88]/50" style={{animationDelay: '1.5s'}}></div>
            
            {/* Constellation Lines */}
            <div className="absolute -top-2 -left-12 w-px h-8 bg-gradient-to-b from-[#8AB5FF]/60 to-transparent transform rotate-45 animate-constellation-glow"></div>
            <div className="absolute -top-1 -right-10 w-px h-6 bg-gradient-to-b from-[#8AB5FF]/60 to-transparent transform -rotate-30 animate-constellation-glow" style={{animationDelay: '1s'}}></div>
            <div className="absolute -bottom-2 -left-8 w-px h-7 bg-gradient-to-b from-[#8AB5FF]/60 to-transparent transform rotate-60 animate-constellation-glow" style={{animationDelay: '2s'}}></div>
            <div className="absolute -bottom-1 -right-12 w-px h-5 bg-gradient-to-b from-[#8AB5FF]/60 to-transparent transform -rotate-45 animate-constellation-glow" style={{animationDelay: '1.5s'}}></div>
            
            {/* Orbital Ring */}
            <div className="absolute -inset-8 sm:-inset-10 lg:-inset-12 border border-[#4A90E2]/20 rounded-full animate-orbit-rotate" style={{animationDuration: '20s'}}></div>
            <div className="absolute -inset-12 sm:-inset-16 lg:-inset-20 border border-[#7B68EE]/15 rounded-full animate-orbit-rotate" style={{animationDuration: '30s', animationDirection: 'reverse'}}></div>
            
            {/* Energy Waves */}
            <div className="absolute -inset-4 sm:-inset-6 lg:-inset-8 border border-[#00ff88]/25 rounded-full animate-pulse" style={{animationDuration: '3s'}}></div>
            <div className="absolute -inset-6 sm:-inset-8 lg:-inset-10 border border-[#00d4ff]/20 rounded-full animate-pulse" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
            <div className="absolute -inset-8 sm:-inset-10 lg:-inset-12 border border-[#7c3aed]/15 rounded-full animate-pulse" style={{animationDuration: '5s', animationDelay: '2s'}}></div>
          </div>
        </div>

        {/* Main Content Container - Enhanced Space Design */}
        <div className="relative">
          {/* Enhanced Space Container */}
          <div className="relative bg-gradient-to-br from-black/40 via-gray-900/30 to-black/40 backdrop-blur-3xl rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#4A90E2]/30 shadow-2xl overflow-hidden group">
            {/* Enhanced Space Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Constellation Network */}
              <div className="absolute top-1/4 left-1/4 w-px h-20 bg-gradient-to-b from-[#8AB5FF]/80 to-transparent transform rotate-45 animate-constellation-glow"></div>
              <div className="absolute bottom-1/4 right-1/4 w-px h-16 bg-gradient-to-b from-[#8AB5FF]/80 to-transparent transform -rotate-30 animate-constellation-glow" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 left-1/6 w-px h-14 bg-gradient-to-b from-[#00ff88]/60 to-transparent transform rotate-60 animate-constellation-glow" style={{animationDelay: '2s'}}></div>
              <div className="absolute bottom-1/3 left-1/2 w-px h-12 bg-gradient-to-b from-[#00d4ff]/60 to-transparent transform -rotate-45 animate-constellation-glow" style={{animationDelay: '1.5s'}}></div>
              <div className="absolute top-1/3 right-1/6 w-px h-18 bg-gradient-to-b from-[#7c3aed]/60 to-transparent transform rotate-30 animate-constellation-glow" style={{animationDelay: '0.5s'}}></div>
              
              {/* Floating Stars */}
              <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-[#8AB5FF] rounded-full shadow-lg shadow-[#8AB5FF]/80 animate-cosmic-pulse"></div>
              <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-[#00ff88] rounded-full shadow-lg shadow-[#00ff88]/80 animate-cosmic-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 right-1/4 w-2.5 h-2.5 bg-[#00d4ff] rounded-full shadow-lg shadow-[#00d4ff]/80 animate-cosmic-pulse" style={{animationDelay: '2s'}}></div>
              <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-[#7c3aed] rounded-full shadow-lg shadow-[#7c3aed]/80 animate-cosmic-pulse" style={{animationDelay: '1.5s'}}></div>
              <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-[#8AB5FF] rounded-full shadow-lg shadow-[#8AB5FF]/80 animate-cosmic-pulse" style={{animationDelay: '0.5s'}}></div>
              
              {/* Energy Grid */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#4A90E2]/40 to-transparent animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#7B68EE]/40 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#00ff88]/30 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#00d4ff]/30 to-transparent animate-pulse" style={{animationDelay: '1.5s'}}></div>
              
              {/* Orbital Rings */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-[#4A90E2]/20 rounded-full animate-orbit-rotate" style={{animationDuration: '25s'}}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-[#7B68EE]/15 rounded-full animate-orbit-rotate" style={{animationDuration: '35s', animationDirection: 'reverse'}}></div>
            </div>

            {/* Quote Section - Enhanced */}
            <div className="text-center mb-12 relative z-10">
              <div className="relative inline-block group/quote">
                <blockquote className="text-4xl sm:text-5xl lg:text-6xl font-great-vibes text-[#00ff88] italic leading-relaxed drop-shadow-2xl relative z-10">
                  "{quote}"
                </blockquote>
                {/* Quote Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#00ff88]/20 via-[#00d4ff]/20 to-[#7c3aed]/20 blur-2xl rounded-2xl opacity-60 group-hover/quote:opacity-80 transition-opacity duration-500"></div>
                {/* Quote Decorative Elements */}
                <div className="absolute -top-2 -left-2 w-2 h-2 bg-[#00ff88] rounded-full animate-pulse shadow-lg shadow-[#00ff88]/50"></div>
                <div className="absolute -top-1 -right-3 w-1.5 h-1.5 bg-[#00d4ff] rounded-full animate-pulse shadow-lg shadow-[#00d4ff]/50" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute -bottom-2 -left-4 w-1.5 h-1.5 bg-[#7c3aed] rounded-full animate-pulse shadow-lg shadow-[#7c3aed]/50" style={{animationDelay: '1s'}}></div>
                <div className="absolute -bottom-1 -right-2 w-2 h-2 bg-[#00ff88] rounded-full animate-pulse shadow-lg shadow-[#00ff88]/50" style={{animationDelay: '1.5s'}}></div>
              </div>
            </div>

            {/* Description Section - Enhanced */}
            <div className="text-center relative z-10">
              <div className="relative max-w-6xl mx-auto">
                <p className="text-xl sm:text-2xl lg:text-3xl text-gray-100 leading-relaxed text-justify drop-shadow-lg font-light">
                  {description}
                </p>
                {/* Description Border Effect */}
                <div className="absolute -inset-2 border border-[#4A90E2]/20 rounded-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="absolute -inset-4 border border-[#7B68EE]/10 rounded-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Corner Decorative Elements */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#4A90E2]/40 rounded-tl-lg"></div>
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#7B68EE]/40 rounded-tr-lg"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#00ff88]/40 rounded-bl-lg"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#00d4ff]/40 rounded-br-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
