"use client"

import React from "react"
import { Linkedin, Github } from "lucide-react"

interface HeroSectionProps {
  greeting: string
  name: string
  title: string
}

export default function HeroSection({ greeting, name, title }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center pt-14 sm:pt-16 md:pt-20 lg:pt-24 relative overflow-hidden">
      {/* Floating Decorative Elements - Mobile Optimized */}
      <div className="absolute top-16 left-4 sm:left-10 text-3xl sm:text-4xl md:text-6xl opacity-3 sm:opacity-5 animate-float">
        &lt;/&gt;
      </div>
      <div className="absolute bottom-16 right-4 sm:right-10 text-3xl sm:text-4xl md:text-6xl opacity-3 sm:opacity-5 animate-float" style={{animationDelay: '2s'}}>
        { }
      </div>

      <div className="max-w-6xl sm:max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
          
          {/* Left Column - Profile Image */}
          <div className="flex justify-center lg:justify-start animate-scale-in order-1 lg:order-1">
            <div className="relative group">
              {/* Decorative Circles */}
              <div className="absolute -top-16 -left-16 w-96 h-96 border border-[#00ff88]/10 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
              <div className="absolute -bottom-16 -right-16 w-80 h-80 border border-[#00d4ff]/10 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
              
              {/* Space Avatar Frame Container - Mobile Optimized */}
              <div className="relative w-72 h-[450px] sm:w-80 sm:h-[500px] md:w-96 md:h-[550px] lg:w-[500px] lg:h-[600px]">
                
                {/* Nebula Effects */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -top-12 -left-12 w-96 h-96 bg-gradient-radial from-[#7B68EE]/20 to-transparent rounded-full blur-3xl animate-nebula-move opacity-30"></div>
                  <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-gradient-radial from-[#4A90E2]/20 to-transparent rounded-full blur-3xl animate-nebula-move opacity-30" style={{animationDelay: '5s'}}></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-radial from-[#00CED1]/15 to-transparent rounded-full blur-2xl animate-nebula-move opacity-25" style={{animationDelay: '10s'}}></div>
                </div>

                {/* Orbital Rings */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-[7.5%] left-[7.5%] w-[85%] h-[85%] border border-[#4A90E2]/30 rounded-full animate-orbit-rotate" style={{animationDuration: '40s'}}></div>
                  <div className="absolute top-[2.5%] left-[2.5%] w-[95%] h-[95%] border border-[#7B68EE]/25 rounded-full animate-orbit-rotate" style={{animationDuration: '60s', animationDirection: 'reverse'}}></div>
                  <div className="absolute top-[12.5%] left-[12.5%] w-[75%] h-[75%] border border-[#00CED1]/20 rounded-full animate-orbit-rotate" style={{animationDuration: '50s'}}></div>
                </div>

                {/* Floating Planets */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-[8%] left-[12%] w-20 h-20 bg-gradient-radial from-[#7B68EE] to-[#483D8B] rounded-full shadow-lg shadow-[#7B68EE]/50 animate-planet-float"></div>
                  <div className="absolute bottom-[15%] right-[10%] w-16 h-16 bg-gradient-radial from-[#4A90E2] to-[#1E3A8A] rounded-full shadow-lg shadow-[#4A90E2]/50 animate-planet-float" style={{animationDelay: '2s'}}></div>
                  <div className="absolute top-[45%] right-[8%] w-12 h-12 bg-gradient-radial from-[#00CED1] to-[#008B8B] rounded-full shadow-lg shadow-[#00CED1]/50 animate-planet-float" style={{animationDelay: '1s'}}></div>
                </div>

                {/* Constellation Lines */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-[12%] left-[18%] w-px h-32 bg-gradient-to-b from-[#8AB5FF]/60 to-transparent transform rotate-45 animate-constellation-glow"></div>
                  <div className="absolute bottom-[20%] right-[15%] w-px h-28 bg-gradient-to-b from-[#8AB5FF]/60 to-transparent transform -rotate-30 animate-constellation-glow" style={{animationDelay: '1s'}}></div>
                  <div className="absolute top-[50%] left-[10%] w-px h-30 bg-gradient-to-b from-[#8AB5FF]/60 to-transparent transform rotate-60 animate-constellation-glow" style={{animationDelay: '2s'}}></div>
                </div>

                {/* Cosmic Dots */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-[15%] left-[15%] w-2 h-2 bg-[#8AB5FF] rounded-full shadow-lg shadow-[#8AB5FF]/80 animate-cosmic-pulse"></div>
                  <div className="absolute top-[48%] left-[8%] w-2 h-2 bg-[#8AB5FF] rounded-full shadow-lg shadow-[#8AB5FF]/80 animate-cosmic-pulse" style={{animationDelay: '1s'}}></div>
                  <div className="absolute bottom-[18%] right-[12%] w-2 h-2 bg-[#8AB5FF] rounded-full shadow-lg shadow-[#8AB5FF]/80 animate-cosmic-pulse" style={{animationDelay: '2s'}}></div>
                  <div className="absolute top-[52%] right-[6%] w-2 h-2 bg-[#8AB5FF] rounded-full shadow-lg shadow-[#8AB5FF]/80 animate-cosmic-pulse" style={{animationDelay: '1.5s'}}></div>
                </div>

                {/* Avatar Frame */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[55%] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 transition-all duration-600 hover:scale-105 group">
                  {/* Cosmic Glow Border */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#4A90E2] via-[#7B68EE] to-[#00CED1] rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-600 animate-cosmic-glow"></div>
                  
                  {/* Inner Frame */}
                  <div className="relative w-full h-full rounded-xl overflow-hidden bg-black border border-[#8AB5FF]/20 group-hover:border-[#8AB5FF]/40 transition-colors duration-600">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Avatar-653d9ylzzMfaEqsMFNdohWuJz9BSAB.jpg"
                      alt="LE NAM TUYEN"
                      className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content - Mobile Optimized */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in text-center lg:text-left order-2 lg:order-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight uppercase tracking-tight text-center lg:text-left">
              <span className="block text-white">{greeting}</span>
              <span className="block bg-gradient-to-r from-[#00ff88] to-[#00d4ff] bg-clip-text text-transparent">
                {name}
              </span>
            </h1>
              
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white uppercase tracking-wider text-center lg:text-left relative group">
              <span className="relative inline-block">
                <span className="text-white">
                  {title}
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] opacity-30"></span>
              </span>
            </h2>
            
            <div className="flex items-center gap-4 sm:gap-6 justify-center lg:justify-start">
              <a
                href="https://www.linkedin.com/in/tuyen-le-nam-7614a1269/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-gray-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:border-[#00ff88] hover:text-[#00ff88] hover:scale-110 hover:shadow-lg hover:shadow-[#00ff88]/20"
                aria-label="LinkedIn"
              >
                <span className="text-xs sm:text-sm font-semibold">in</span>
              </a>
              <a 
                href="https://github.com/Nam-Tuyen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-gray-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:border-[#00d4ff] hover:text-[#00d4ff] hover:scale-110 hover:shadow-lg hover:shadow-[#00d4ff]/20"
                aria-label="GitHub"
              >
                <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
