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
    <section className="min-h-screen flex items-center pt-16 sm:pt-20 md:pt-24 relative overflow-hidden">
      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-5 animate-float">
        &lt;/&gt;
      </div>
      <div className="absolute bottom-20 right-10 text-6xl opacity-5 animate-float" style={{animationDelay: '2s'}}>
        { }
      </div>

      <div className="max-w-6xl sm:max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Column - Profile Image */}
          <div className="flex justify-center lg:justify-start animate-scale-in order-1 lg:order-1">
            <div className="relative group">
              {/* Decorative Circles */}
              <div className="absolute -top-12 -left-12 w-80 h-80 border border-[#00ff88]/10 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 border border-[#00d4ff]/10 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
              
              {/* Ultra Modern Futuristic Tech Avatar Container */}
              <div className="relative w-80 h-96 sm:w-96 sm:h-[500px] lg:w-[450px] lg:h-[550px]">
                
                {/* Enhanced Animated Grid Background */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="w-full h-full" style={{
                    backgroundImage: `
                      linear-gradient(rgba(0, 255, 170, 0.05) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0, 255, 170, 0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                    animation: 'gridMove 15s linear infinite'
                  }}></div>
                </div>
                
                {/* Additional Grid Layer */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                  <div className="w-full h-full" style={{
                    backgroundImage: `
                      linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)
                    `,
                    backgroundSize: '80px 80px',
                    animation: 'gridMove 25s linear infinite reverse'
                  }}></div>
                </div>

                {/* Enhanced Glowing Orbs */}
                <div className="absolute -top-24 -left-24 w-56 h-56 bg-gradient-radial from-[#00ffaa] to-transparent rounded-full blur-3xl opacity-50 animate-float"></div>
                <div className="absolute -bottom-24 -right-24 w-52 h-52 bg-gradient-radial from-[#00d4ff] to-transparent rounded-full blur-3xl opacity-50 animate-float" style={{animationDelay: '2s'}}></div>
                <div className="absolute top-1/2 -right-20 w-44 h-44 bg-gradient-radial from-[#aa00ff] to-transparent rounded-full blur-3xl opacity-50 animate-float" style={{animationDelay: '4s'}}></div>
                <div className="absolute top-1/4 -left-16 w-32 h-32 bg-gradient-radial from-[#ff00aa] to-transparent rounded-full blur-3xl opacity-40 animate-float" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-1/4 -right-12 w-28 h-28 bg-gradient-radial from-[#00ff88] to-transparent rounded-full blur-3xl opacity-40 animate-float" style={{animationDelay: '3s'}}></div>
                
                {/* Enhanced Hexagon Decorations */}
                <div className="absolute top-[15%] left-[10%] w-24 h-14 bg-gradient-to-br from-[#00ffaa]/25 to-[#00d4ff]/25 border border-[#00ffaa]/40 animate-hex-float" style={{
                  clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
                }}></div>
                <div className="absolute bottom-[20%] right-[12%] w-24 h-14 bg-gradient-to-br from-[#00d4ff]/25 to-[#aa00ff]/25 border border-[#00d4ff]/40 animate-hex-float" style={{
                  clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                  animationDelay: '1.5s'
                }}></div>
                <div className="absolute top-[8%] right-[15%] w-16 h-10 bg-gradient-to-br from-[#aa00ff]/20 to-[#ff00aa]/20 border border-[#aa00ff]/30 animate-hex-float" style={{
                  clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                  animationDelay: '2.5s'
                }}></div>
                <div className="absolute bottom-[35%] left-[8%] w-20 h-12 bg-gradient-to-br from-[#ff00aa]/20 to-[#00ff88]/20 border border-[#ff00aa]/30 animate-hex-float" style={{
                  clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                  animationDelay: '3.5s'
                }}></div>
                
                {/* Enhanced Tech Circles */}
                <div className="absolute top-[25%] left-[5%] w-16 h-16 border-2 border-[#00ffaa]/30 rounded-full animate-pulse"></div>
                <div className="absolute bottom-[30%] right-[8%] w-20 h-20 border-2 border-[#00d4ff]/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-[60%] left-[3%] w-12 h-12 border-2 border-[#aa00ff]/30 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
                <div className="absolute bottom-[15%] left-[15%] w-14 h-14 border-2 border-[#ff00aa]/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-[40%] right-[5%] w-18 h-18 border-2 border-[#00ff88]/30 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                
                {/* Enhanced Corner Brackets */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#00ffaa]/60"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#00d4ff]/60"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#aa00ff]/60"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#ff00aa]/60"></div>
                
                {/* Additional Corner Brackets */}
                <div className="absolute top-8 left-8 w-6 h-6 border-l border-t border-[#00ff88]/40"></div>
                <div className="absolute top-8 right-8 w-6 h-6 border-r border-t border-[#00d4ff]/40"></div>
                <div className="absolute bottom-8 left-8 w-6 h-6 border-l border-b border-[#7c3aed]/40"></div>
                <div className="absolute bottom-8 right-8 w-6 h-6 border-r border-b border-[#00ff88]/40"></div>
                
                {/* Enhanced Data Points */}
                <div className="absolute top-[20%] left-[20%] w-2 h-2 bg-[#00ffaa] rounded-full animate-pulse"></div>
                <div className="absolute top-[35%] right-[25%] w-2 h-2 bg-[#00d4ff] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-[25%] left-[30%] w-2 h-2 bg-[#aa00ff] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-[40%] right-[20%] w-2 h-2 bg-[#ff00aa] rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                <div className="absolute top-[50%] left-[15%] w-1.5 h-1.5 bg-[#00ff88] rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
                <div className="absolute top-[70%] right-[15%] w-1.5 h-1.5 bg-[#7c3aed] rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>
                
                {/* Enhanced Connection Lines */}
                <div className="absolute top-1/2 left-0 w-12 h-px bg-gradient-to-r from-[#00ffaa]/60 to-transparent"></div>
                <div className="absolute top-1/2 right-0 w-12 h-px bg-gradient-to-l from-[#00d4ff]/60 to-transparent"></div>
                <div className="absolute left-1/2 top-0 w-px h-12 bg-gradient-to-b from-[#aa00ff]/60 to-transparent"></div>
                <div className="absolute left-1/2 bottom-0 w-px h-12 bg-gradient-to-t from-[#ff00aa]/60 to-transparent"></div>
                
                {/* Additional Connection Lines */}
                <div className="absolute top-1/3 left-0 w-8 h-px bg-gradient-to-r from-[#00ff88]/40 to-transparent"></div>
                <div className="absolute top-2/3 right-0 w-8 h-px bg-gradient-to-l from-[#7c3aed]/40 to-transparent"></div>
                <div className="absolute left-1/3 top-0 w-px h-8 bg-gradient-to-b from-[#00d4ff]/40 to-transparent"></div>
                <div className="absolute right-1/3 bottom-0 w-px h-8 bg-gradient-to-t from-[#aa00ff]/40 to-transparent"></div>
                
                {/* Enhanced Tech Text Elements */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-[#00ffaa]/40 text-xs font-mono animate-pulse">DEV_MODE</div>
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-[#00d4ff]/40 text-xs font-mono animate-pulse" style={{animationDelay: '1s'}}>SYS_ID: 2025</div>
                <div className="absolute top-1/2 left-2 text-[#aa00ff]/30 text-xs font-mono animate-pulse" style={{writingMode: 'vertical-rl'}}>ACTIVE</div>
                <div className="absolute top-1/2 right-2 text-[#ff00aa]/30 text-xs font-mono animate-pulse" style={{writingMode: 'vertical-rl', animationDelay: '0.5s'}}>ONLINE</div>
                
                {/* Enhanced HUD Elements */}
                <div className="absolute top-1/2 left-6 w-3 h-3 border border-[#00ffaa]/50 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 right-6 w-3 h-3 border border-[#00d4ff]/50 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-2 h-2 border border-[#aa00ff]/50 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 w-2 h-2 border border-[#ff00aa]/50 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                
                {/* Profile Image Container */}
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-black">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Avatar-653d9ylzzMfaEqsMFNdohWuJz9BSAB.jpg"
                    alt="LE NAM TUYEN"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8 animate-fade-in text-center lg:text-left order-2 lg:order-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight uppercase tracking-tight text-center lg:text-left">
              <span className="block">{greeting}</span>
              <span className="block bg-gradient-to-r from-[#00ff88] to-[#00d4ff] bg-clip-text text-transparent">
                {name}
              </span>
            </h1>
              
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white uppercase tracking-wider text-center lg:text-left relative group">
              <span className="relative inline-block">
                <span className="text-white">
                  {title}
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] opacity-30"></span>
              </span>
            </h2>
            
            <div className="flex items-center gap-6 justify-center lg:justify-start">
              <a
                href="https://www.linkedin.com/in/tuyen-le-nam-7614a1269/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-gray-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:border-[#00ff88] hover:text-[#00ff88] hover:scale-110 hover:shadow-lg hover:shadow-[#00ff88]/20"
                aria-label="LinkedIn"
              >
                <span className="text-sm font-semibold">in</span>
              </a>
              <a 
                href="https://github.com/Nam-Tuyen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-gray-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:border-[#00d4ff] hover:text-[#00d4ff] hover:scale-110 hover:shadow-lg hover:shadow-[#00d4ff]/20"
                aria-label="GitHub"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
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
