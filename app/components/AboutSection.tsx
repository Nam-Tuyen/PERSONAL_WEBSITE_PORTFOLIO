"use client"

import React from "react"
import { Code, Database, TrendingUp, Users } from "lucide-react"

interface AboutSectionProps {
  label: string
  quote: string
  description: string
}

export default function AboutSection({ label, quote, description }: AboutSectionProps) {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Tech Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'grid-move 25s linear infinite'
          }}></div>
        </div>

        {/* Floating Tech Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#00ff88] rounded-full animate-pulse opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-[#00d4ff] rounded-full animate-pulse opacity-30" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-[#7c3aed] rounded-full animate-pulse opacity-30" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent animate-gradient-shift">
            {label}
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Quote */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-[#00ff88] rounded-tl-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-[#00d4ff] rounded-br-lg"></div>
              
              <blockquote className="text-2xl sm:text-3xl md:text-4xl font-great-vibes text-[#00ff88] italic leading-relaxed pl-8 pr-4 py-4">
                "{quote}"
              </blockquote>
            </div>

            {/* Tech Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
                <Code className="w-8 h-8 text-[#00ff88] mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">3+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
                <Database className="w-8 h-8 text-[#00d4ff] mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Right Column - Description */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl rounded-2xl p-8 border border-white/20 shadow-2xl">
              <p className="text-lg text-gray-200 leading-relaxed text-justify">
                {description}
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 transition-colors duration-300">
                <TrendingUp className="w-6 h-6 text-[#00ff88] mx-auto mb-2" />
                <div className="text-sm font-medium text-white">Data Analytics</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 transition-colors duration-300">
                <Users className="w-6 h-6 text-[#00d4ff] mx-auto mb-2" />
                <div className="text-sm font-medium text-white">Product Management</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 transition-colors duration-300">
                <Code className="w-6 h-6 text-[#7c3aed] mx-auto mb-2" />
                <div className="text-sm font-medium text-white">Python & SQL</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 transition-colors duration-300">
                <Database className="w-6 h-6 text-[#00ff88] mx-auto mb-2" />
                <div className="text-sm font-medium text-white">FinTech</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}