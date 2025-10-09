"use client"

import React, { useState } from "react"
import { X, ExternalLink } from "lucide-react"

interface EducationData {
  university: string
  degree: string
  gpa: string
  ielts: string
  coursework: string[]
  learnMoreUrl: string
  certifications: {
    title: string
    issuer: string
    image: string
  }[]
}

interface EducationSectionProps {
  title: string
  data: EducationData
}

export default function EducationSection({ title, data }: EducationSectionProps) {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null)

  return (
    <section className="py-20 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Space Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Nebula Clouds */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-[#7B68EE]/20 to-transparent rounded-full blur-3xl animate-nebula-float"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-radial from-[#4A90E2]/20 to-transparent rounded-full blur-3xl animate-nebula-float" style={{animationDelay: '5s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-[#00CED1]/15 to-transparent rounded-full blur-2xl animate-nebula-float" style={{animationDelay: '10s'}}></div>
        
        {/* Floating Stars */}
        {Array.from({ length: 25 }).map((_, i) => (
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
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-wider bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent mb-8">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* University Information */}
          <div className="space-y-8">
            {/* University Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-[#00ff88]/30 transition-all duration-500 hover:scale-[1.02]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-2xl flex items-center justify-center shadow-lg shadow-[#00ff88]/25">
                    <span className="text-white font-bold text-2xl">🎓</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{data.university}</h3>
                    <p className="text-[#00ff88] font-medium">{data.degree}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-white/5 to-white/10 rounded-xl">
                    <span className="text-gray-300 font-medium">GPA</span>
                    <span className="text-[#00d4ff] font-bold text-lg">{data.gpa}</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-white/5 to-white/10 rounded-xl">
                    <span className="text-gray-300 font-medium">IELTS</span>
                    <span className="text-[#7c3aed] font-bold text-lg">{data.ielts}</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <a
                    href={data.learnMoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#00ff88]/25"
                  >
                    Learn More
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Coursework */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-[#00d4ff]/30 transition-all duration-500 hover:scale-[1.02]">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] rounded-lg flex items-center justify-center">
                    📚
                  </span>
                  Relevant Coursework
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {data.coursework.map((course, index) => (
                    <div key={index} className="p-3 bg-gradient-to-r from-white/5 to-white/10 rounded-lg border border-white/10 hover:border-[#00d4ff]/30 transition-colors">
                      <span className="text-gray-300 text-sm">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-8 bg-gradient-to-br from-[#7c3aed] to-[#00ff88] rounded-lg flex items-center justify-center">
                🏆
              </span>
              Professional Certifications
            </h3>
            
            {data.certifications.map((cert, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#7c3aed] to-[#00ff88] rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div 
                  className="relative bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-[#7c3aed]/30 transition-all duration-500 hover:scale-[1.02] cursor-pointer"
                  onClick={() => setSelectedPdf(cert.title)}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#7c3aed] to-[#00ff88] rounded-xl flex items-center justify-center shadow-lg shadow-[#7c3aed]/25">
                      <span className="text-white font-bold text-lg">📜</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-1">{cert.title}</h4>
                      <p className="text-[#7c3aed] font-medium text-sm">{cert.issuer}</p>
                    </div>
                    <div className="text-[#7c3aed] group-hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PDF Viewer Modal */}
      {selectedPdf && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative bg-gray-900 rounded-2xl w-full max-w-4xl h-[80vh] border border-white/20">
            <button
              onClick={() => setSelectedPdf(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="h-full p-4">
              {selectedPdf === 'Ask Questions to Make Data-Driven Decisions' ? (
                <div className="flex items-center justify-center h-full">
                  <img
                    src="/ask-question-to-make-data-driven.PNG"
                    alt="Coursera Certificate"
                    className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <img
                    src="/Certificate%20NVIDIA.PNG"
                    alt="NVIDIA Certificate"
                    className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
