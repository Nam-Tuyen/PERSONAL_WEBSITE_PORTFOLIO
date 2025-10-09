"use client"

import React, { useState } from "react"
import { GraduationCap, ExternalLink, Award, Calendar, X, Code } from "lucide-react"

interface EducationSectionProps {
  title: string
  data: {
    university: string
    degree: string
    gpa: string
    ielts: string
    coursework: string[]
    certificates: {
      coursera: {
        title: string
        image: string
      }
      nvidia: {
        title: string
        image: string
      }
    }
  }
}

export default function EducationSection({ title, data }: EducationSectionProps) {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)

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

        {/* Education Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - University Info */}
          <div className="space-y-8">
            {/* University Card */}
            <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-lg flex items-center justify-center shadow-lg shadow-[#00ff88]/25">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{data.university}</h3>
                  <p className="text-lg text-[#00d4ff] font-semibold">{data.degree}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-[#00ff88]">{data.gpa}</div>
                  <div className="text-sm text-gray-400">GPA</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-[#00d4ff]">{data.ielts}</div>
                  <div className="text-sm text-gray-400">IELTS</div>
                </div>
              </div>

              {/* Learn More Button */}
              <a
                href="https://www.uel.edu.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00ff88]/25 transition-all duration-300"
              >
                <span>Learn More</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Coursework */}
            <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl rounded-2xl p-8 border border-white/20 shadow-2xl">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                <Code className="w-5 h-5 text-[#00ff88]" />
                <span>Relevant Coursework</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {data.coursework.map((course, index) => (
                  <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-3 text-center hover:bg-white/10 transition-colors duration-300">
                    <span className="text-sm text-gray-300">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Certificates */}
          <div className="space-y-8">
            <h4 className="text-2xl font-bold text-white mb-8 flex items-center space-x-2">
              <Award className="w-6 h-6 text-[#00d4ff]" />
              <span>Professional Certifications</span>
            </h4>

            {/* Coursera Certificate */}
            <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl rounded-2xl p-6 border border-white/20 shadow-2xl hover:shadow-xl hover:shadow-[#00ff88]/10 transition-all duration-300 cursor-pointer group"
                 onClick={() => setSelectedCertificate('coursera')}>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-lg flex items-center justify-center shadow-lg shadow-[#00ff88]/25">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h5 className="text-lg font-bold text-white mb-2 group-hover:text-[#00ff88] transition-colors duration-300">
                    {data.certificates.coursera.title}
                  </h5>
                  <p className="text-sm text-gray-400">Coursera Professional Certificate</p>
                </div>
                <div className="text-[#00ff88] group-hover:translate-x-1 transition-transform duration-300">
                  <ExternalLink className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* NVIDIA Certificate */}
            <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl rounded-2xl p-6 border border-white/20 shadow-2xl hover:shadow-xl hover:shadow-[#00d4ff]/10 transition-all duration-300 cursor-pointer group"
                 onClick={() => setSelectedCertificate('nvidia')}>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] rounded-lg flex items-center justify-center shadow-lg shadow-[#00d4ff]/25">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h5 className="text-lg font-bold text-white mb-2 group-hover:text-[#00d4ff] transition-colors duration-300">
                    {data.certificates.nvidia.title}
                  </h5>
                  <p className="text-sm text-gray-400">NVIDIA Deep Learning Institute</p>
                </div>
                <div className="text-[#00d4ff] group-hover:translate-x-1 transition-transform duration-300">
                  <ExternalLink className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certificate Modal */}
        {selectedCertificate && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
               onClick={() => setSelectedCertificate(null)}>
            <div className="bg-gray-900 rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-auto"
                 onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">
                  {selectedCertificate === 'coursera' ? data.certificates.coursera.title : data.certificates.nvidia.title}
                </h3>
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="text-center">
                <img
                  src={selectedCertificate === 'coursera' ? data.certificates.coursera.image : data.certificates.nvidia.image}
                  alt={selectedCertificate === 'coursera' ? data.certificates.coursera.title : data.certificates.nvidia.title}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}