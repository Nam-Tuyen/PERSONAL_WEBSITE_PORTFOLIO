"use client"

import React from "react"

interface WorkExperience {
  company: string
  department: string
  position: string
  period: string
  achievements: string[]
  icon: string
}

interface WorkExperienceSectionProps {
  title: string
  experiences: WorkExperience[]
}

export default function WorkExperienceSection({ title, experiences }: WorkExperienceSectionProps) {
  return (
    <section className="py-20 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Galaxy Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Nebula Effects */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-radial from-purple-500/20 to-transparent rounded-full blur-3xl animate-nebula-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-3xl animate-nebula-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
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
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-wider bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent mb-8">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-stretch">
          {experiences.map((experience, index) => (
            <div key={index} className="group relative flex flex-col">
              {/* Animated Background Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-[#00ff88]/30 transition-all duration-500 hover:scale-[1.02] flex flex-col flex-1">
                {/* Company Header - Sleek Design */}
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-2xl flex items-center justify-center shadow-lg shadow-[#00ff88]/25">
                      <span className="text-white font-bold text-xl">{experience.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1 leading-tight">
                        {experience.company}
                      </h3>
                      <p className="text-[#00ff88] font-medium text-sm">
                        {experience.department}
                      </p>
                    </div>
                  </div>
                  
                  {/* Position & Period - Modern Tags */}
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#00ff88]/20 to-[#00d4ff]/20 border border-[#00ff88]/30 rounded-full text-[#00ff88] font-semibold text-sm">
                      {experience.position}
                    </span>
                    <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#00d4ff]/20 to-[#7c3aed]/20 border border-[#00d4ff]/30 rounded-full text-[#00d4ff] font-medium text-sm">
                      {experience.period}
                    </span>
                  </div>
                </div>

                {/* Achievements - Modern List */}
                <div className="space-y-4 flex-1">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="relative group/achievement">
                      <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-white/5 to-white/10 border border-white/10 hover:border-[#00ff88]/30 transition-all duration-300">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-lg flex items-center justify-center shadow-md">
                          <span className="text-white font-bold text-sm">{achievementIndex + 1}</span>
                        </div>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed group-hover/achievement:text-gray-100 transition-colors">
                          {achievement}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-[#00ff88] rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-[#00d4ff] rounded-full opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
