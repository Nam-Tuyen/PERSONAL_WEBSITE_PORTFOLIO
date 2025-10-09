"use client"

import React from "react"
import { Building2, Calendar, MapPin, Users, TrendingUp, Database } from "lucide-react"

interface WorkExperienceSectionProps {
  title: string
  experiences: Array<{
    company: string
    position: string
    duration: string
    location: string
    description: string[]
  }>
}

export default function WorkExperienceSection({ title, experiences }: WorkExperienceSectionProps) {
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
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent animate-gradient-shift">
            {title}
          </h2>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div key={index} className="relative">
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-full bg-gradient-to-b from-[#00ff88] to-[#00d4ff] opacity-30"></div>
              )}
              
              {/* Experience Card */}
              <div className="relative flex items-start space-x-6 group">
                {/* Timeline Dot */}
                <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-full flex items-center justify-center shadow-lg shadow-[#00ff88]/25">
                  <Building2 className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl rounded-2xl p-8 border border-white/20 shadow-2xl group-hover:shadow-xl group-hover:shadow-[#00ff88]/10 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{experience.position}</h3>
                      <p className="text-xl text-[#00d4ff] font-semibold">{experience.company}</p>
                    </div>
                    <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{experience.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{experience.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-3">
                    {experience.description.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#00ff88] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {index === 0 ? (
                      <>
                        <span className="px-3 py-1 bg-[#00ff88]/10 border border-[#00ff88]/30 rounded-full text-[#00ff88] text-sm font-medium">
                          Data Analysis
                        </span>
                        <span className="px-3 py-1 bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-full text-[#00d4ff] text-sm font-medium">
                          Financial Services
                        </span>
                        <span className="px-3 py-1 bg-[#7c3aed]/10 border border-[#7c3aed]/30 rounded-full text-[#7c3aed] text-sm font-medium">
                          Risk Management
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="px-3 py-1 bg-[#00ff88]/10 border border-[#00ff88]/30 rounded-full text-[#00ff88] text-sm font-medium">
                          Investment Banking
                        </span>
                        <span className="px-3 py-1 bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-full text-[#00d4ff] text-sm font-medium">
                          Market Analysis
                        </span>
                        <span className="px-3 py-1 bg-[#7c3aed]/10 border border-[#7c3aed]/30 rounded-full text-[#7c3aed] text-sm font-medium">
                          Client Relations
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl rounded-2xl p-8 border border-white/20 shadow-2xl text-center">
            <TrendingUp className="w-12 h-12 text-[#00ff88] mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">2+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl rounded-2xl p-8 border border-white/20 shadow-2xl text-center">
            <Database className="w-12 h-12 text-[#00d4ff] mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">100+</div>
            <div className="text-gray-400">Projects Analyzed</div>
          </div>
          <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl rounded-2xl p-8 border border-white/20 shadow-2xl text-center">
            <Users className="w-12 h-12 text-[#7c3aed] mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-400">Clients Served</div>
          </div>
        </div>
      </div>
    </section>
  )
}