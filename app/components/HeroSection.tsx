"use client"

import React from "react"
import { Linkedin, Github, Download, ArrowRight } from "lucide-react"

interface HeroSectionProps {
  greeting: string
  name: string
  title: string
}

export default function HeroSection({ greeting, name, title }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center pt-16 sm:pt-20 md:pt-24 relative overflow-hidden">
      {/* Tech Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            animation: 'grid-move 15s linear infinite'
          }}></div>
        </div>

        {/* Floating Tech Elements */}
        <div className="absolute top-20 left-10 text-4xl opacity-5 animate-float">
          &lt;/&gt;
        </div>
        <div className="absolute bottom-20 right-10 text-4xl opacity-5 animate-float" style={{animationDelay: '2s'}}>
          { }
        </div>
        <div className="absolute top-1/2 left-1/4 text-2xl opacity-5 animate-float" style={{animationDelay: '4s'}}>
          {'{ }'}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in text-center lg:text-left order-2 lg:order-1">
            {/* Greeting */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="block text-white">{greeting}</span>
                <span className="block bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent">
                  {name}
                </span>
              </h1>
            </div>
              
            {/* Title */}
            <div className="relative">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300 uppercase tracking-wider">
                {title}
              </h2>
              <div className="absolute -bottom-2 left-0 w-24 h-0.5 bg-gradient-to-r from-[#00ff88] to-[#00d4ff]"></div>
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <span className="px-4 py-2 bg-[#00ff88]/10 border border-[#00ff88]/30 rounded-full text-[#00ff88] text-sm font-medium">
                Data Analytics
              </span>
              <span className="px-4 py-2 bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-full text-[#00d4ff] text-sm font-medium">
                Product Management
              </span>
              <span className="px-4 py-2 bg-[#7c3aed]/10 border border-[#7c3aed]/30 rounded-full text-[#7c3aed] text-sm font-medium">
                FinTech
              </span>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black font-semibold rounded-lg shadow-lg shadow-[#00ff88]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#00ff88]/40 hover:scale-105">
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Download CV</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-lg opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300"></div>
              </button>
              
              <button className="group px-8 py-4 border-2 border-[#00ff88] text-[#00ff88] font-semibold rounded-lg transition-all duration-300 hover:bg-[#00ff88] hover:text-black hover:scale-105">
                <span className="flex items-center justify-center space-x-2">
                  <span>View Portfolio</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 justify-center lg:justify-start">
              <a
                href="https://www.linkedin.com/in/tuyen-le-nam-7614a1269/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 border-2 border-gray-600 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-300 hover:border-[#00ff88] hover:text-[#00ff88] hover:scale-110 hover:shadow-lg hover:shadow-[#00ff88]/20"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/Nam-Tuyen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group w-12 h-12 border-2 border-gray-600 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-300 hover:border-[#00d4ff] hover:text-[#00d4ff] hover:scale-110 hover:shadow-lg hover:shadow-[#00d4ff]/20"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column - Tech Visual */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              {/* Tech Frame */}
              <div className="relative w-80 h-96 sm:w-96 sm:h-[500px] lg:w-[450px] lg:h-[550px] bg-gradient-to-br from-gray-900 to-black rounded-2xl border-2 border-[#00ff88]/20 shadow-2xl overflow-hidden">
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] opacity-20 animate-pulse"></div>
                
                {/* Content Area */}
                <div className="relative w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 flex flex-col justify-center items-center">
                  {/* Code Lines */}
                  <div className="space-y-4 w-full">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    
                    <div className="space-y-2 text-sm font-mono">
                      <div className="text-[#00ff88]">
                        <span className="text-gray-500">const</span> developer = {'{'}
                      </div>
                      <div className="text-white ml-4">
                        name: <span className="text-[#00d4ff]">"{name}"</span>,
                      </div>
                      <div className="text-white ml-4">
                        role: <span className="text-[#00d4ff]">"Data Analyst"</span>,
                      </div>
                      <div className="text-white ml-4">
                        skills: <span className="text-[#7c3aed]">["Python", "SQL", "Analytics"]</span>
                      </div>
                      <div className="text-[#00ff88]">{'}'}</div>
                    </div>
                  </div>
                  
                  {/* Profile Image */}
                  <div className="mt-8 w-32 h-32 rounded-full overflow-hidden border-2 border-[#00ff88]/30 shadow-lg">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Avatar-653d9ylzzMfaEqsMFNdohWuJz9BSAB.jpg"
                      alt="LE NAM TUYEN"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#00ff88] rounded-full animate-pulse opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#00d4ff] rounded-full animate-pulse opacity-60" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 -left-6 w-4 h-4 bg-[#7c3aed] rounded-full animate-pulse opacity-60" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}