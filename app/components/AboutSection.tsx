"use client"

import React from "react"

interface AboutSectionProps {
  label: string
  quote: string
  description: string
}

export default function AboutSection({ label, quote, description }: AboutSectionProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Space Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Nebula Clouds */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-[#7B68EE]/20 to-transparent rounded-full blur-3xl animate-nebula-float"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-radial from-[#4A90E2]/20 to-transparent rounded-full blur-3xl animate-nebula-float" style={{animationDelay: '5s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-[#00CED1]/15 to-transparent rounded-full blur-2xl animate-nebula-float" style={{animationDelay: '10s'}}></div>
        
        {/* Floating Stars */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#8AB5FF] rounded-full shadow-lg shadow-[#8AB5FF]/80 animate-cosmic-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-[#8AB5FF] rounded-full shadow-lg shadow-[#8AB5FF]/80 animate-cosmic-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-[#00ff88] rounded-full shadow-lg shadow-[#00ff88]/80 animate-cosmic-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-[#00d4ff] rounded-full shadow-lg shadow-[#00d4ff]/80 animate-cosmic-pulse" style={{animationDelay: '1.5s'}}></div>
        
        {/* Constellation Lines */}
        <div className="absolute top-1/4 left-1/4 w-px h-16 bg-gradient-to-b from-[#8AB5FF]/60 to-transparent transform rotate-45 animate-constellation-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-px h-12 bg-gradient-to-b from-[#8AB5FF]/60 to-transparent transform -rotate-30 animate-constellation-glow" style={{animationDelay: '1s'}}></div>
        
        {/* Cosmic Dots */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-[#8AB5FF] rounded-full shadow-lg shadow-[#8AB5FF]/80 animate-cosmic-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-[#8AB5FF] rounded-full shadow-lg shadow-[#8AB5FF]/80 animate-cosmic-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent animate-gradient-shift">
            {label}
          </h2>
        </div>

        {/* Main Content Container */}
        <div className="relative">
          {/* Glass Morphism Container */}
          <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 border border-white/20 shadow-2xl overflow-hidden">
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
            <div className="text-center mb-8 sm:mb-10">
              <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-great-vibes text-[#00ff88] italic leading-relaxed drop-shadow-lg">
                "{quote}"
              </blockquote>
            </div>

            {/* Description */}
            <div className="text-center">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed text-justify max-w-5xl mx-auto drop-shadow-md">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}