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
      {/* Galaxy Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Nebula Effects */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-radial from-purple-500/20 to-transparent rounded-full blur-3xl animate-nebula-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-3xl animate-nebula-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-cyan-500/15 to-transparent rounded-full blur-3xl animate-nebula-float" style={{animationDelay: '4s'}}></div>
        </div>
        
        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Shooting Stars */}
        <div className="absolute top-1/4 left-0 w-2 h-2 bg-white rounded-full animate-shooting-star"></div>
        <div className="absolute top-3/4 right-0 w-1 h-1 bg-cyan-400 rounded-full animate-shooting-star" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-shooting-star" style={{animationDelay: '6s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          {/* About Me Label - Enhanced */}
          <div className="inline-block relative group mb-8 sm:mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent relative z-10">
              {label}
            </h2>
            
            {/* Enhanced Glow Effects */}
            <div className="absolute -inset-4 sm:-inset-6 md:-inset-8 bg-gradient-to-r from-[#00ff88]/30 via-[#00d4ff]/30 to-[#7c3aed]/30 blur-2xl sm:blur-3xl rounded-2xl sm:rounded-3xl opacity-70"></div>
            <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-[#00ff88]/20 via-[#00d4ff]/20 to-[#7c3aed]/20 blur-xl sm:blur-2xl rounded-xl sm:rounded-2xl opacity-50"></div>
            
            {/* Cosmic Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-3 h-3 bg-[#00ff88] rounded-full animate-pulse"></div>
            <div className="absolute -top-2 -right-6 w-2 h-2 bg-[#00d4ff] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute -bottom-3 -left-8 w-2.5 h-2.5 bg-[#7c3aed] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute -bottom-1 -right-4 w-1.5 h-1.5 bg-[#00ff88] rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
          </div>

          {/* Quote - Enhanced */}
          <div className="relative mb-12 sm:mb-16">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-white leading-tight font-great-vibes italic relative z-10 px-4 sm:px-6 md:px-8">
              <span className="relative inline-block">
                {/* Primary Text with Strong Gradient */}
                <span className="bg-gradient-to-r from-[#00ff88] to-[#00d4ff] bg-clip-text text-transparent font-bold drop-shadow-2xl">
                  "{quote}"
                </span>
                
                {/* Text Shadow for Depth */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] bg-clip-text text-transparent blur-sm opacity-30 -z-10">
                  "{quote}"
                </span>
              </span>
            </p>
            
            {/* Enhanced Glow Effects - Multiple Layers */}
            <div className="absolute -inset-4 sm:-inset-6 md:-inset-8 bg-gradient-to-r from-[#00ff88]/30 via-[#00d4ff]/30 to-[#7c3aed]/30 blur-2xl sm:blur-3xl rounded-2xl sm:rounded-3xl opacity-70"></div>
            <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-[#00ff88]/20 via-[#00d4ff]/20 to-[#7c3aed]/20 blur-xl sm:blur-2xl rounded-xl sm:rounded-2xl opacity-50"></div>
          </div>

          {/* Description - Enhanced */}
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              {/* Glass Morphism Container */}
              <div className="relative bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 shadow-2xl">
                {/* Cosmic Background Pattern */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/5 via-transparent to-[#00d4ff]/5"></div>
                  <div className="absolute top-0 left-0 w-full h-full opacity-20">
                    <div className="w-full h-full" style={{
                      backgroundImage: `
                        radial-gradient(circle at 20% 20%, rgba(0, 255, 136, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 40% 60%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)
                      `
                    }}></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <p className="text-gray-200 text-lg sm:text-xl md:text-2xl leading-relaxed sm:leading-loose text-justify font-medium">
                    {description}
                  </p>
                </div>
                
                {/* Decorative Corner Elements */}
                <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-[#00ff88]/60 rounded-tl-lg"></div>
                <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-[#00d4ff]/60 rounded-tr-lg"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-[#7c3aed]/60 rounded-bl-lg"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-[#00ff88]/60 rounded-br-lg"></div>
                
                {/* Floating Particles */}
                <div className="absolute top-8 right-8 w-2 h-2 bg-[#00ff88] rounded-full animate-pulse"></div>
                <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-[#00d4ff] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 right-12 w-1 h-1 bg-[#7c3aed] rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
              </div>
              
              {/* Outer Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#00ff88]/20 via-[#00d4ff]/20 to-[#7c3aed]/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
