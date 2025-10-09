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
        {/* About Me Label */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent animate-gradient-shift">
            {label}
          </h2>
        </div>

        {/* Main Content Container */}
        <div className="relative">
          {/* Glass Morphism Container */}
          <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/20 shadow-2xl overflow-hidden">
            {/* Inner Space Effects */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Constellation Lines */}
              <div className="absolute top-1/4 left-1/4 w-px h-16 bg-gradient-to-b from-[#8AB5FF]/60 to-transparent transform rotate-45 animate-constellation-glow"></div>
              <div className="absolute bottom-1/4 right-1/4 w-px h-12 bg-gradient-to-b from-[#8AB5FF]/60 to-transparent transform -rotate-30 animate-constellation-glow" style={{animationDelay: '1s'}}></div>
              
              {/* Cosmic Dots */}
              <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-[#8AB5FF] rounded-full shadow-lg shadow-[#8AB5FF]/80 animate-cosmic-pulse"></div>
              <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-[#8AB5FF] rounded-full shadow-lg shadow-[#8AB5FF]/80 animate-cosmic-pulse" style={{animationDelay: '1s'}}></div>
            </div>
            
            {/* Quote */}
            <div className="text-center mb-10">
              <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-great-vibes text-[#00ff88] italic leading-relaxed drop-shadow-lg">
                "{quote}"
              </blockquote>
            </div>

            {/* Description */}
            <div className="text-center">
              <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed text-justify max-w-5xl mx-auto drop-shadow-md">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
