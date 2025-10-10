"use client"

import React, { useState } from "react"
import { User, GraduationCap, Briefcase, Code, Award, ExternalLink, X, Building2, Calendar, MapPin } from "lucide-react"

interface BodyProps {
  activeSection: string
  translations: any
}

export default function Body({ activeSection, translations }: BodyProps) {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)

  return (
    <main className="relative z-10">
      {/* Professional Section */}
      {activeSection === "professional" && (
        <>
          {/* Hero Section */}
          <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Tech Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full" style={{
                  backgroundImage: `
                    linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '30px 30px',
                  animation: 'grid-move 15s linear infinite'
                }}></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#00ff88] rounded-full animate-pulse opacity-60"></div>
              <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#00d4ff] rounded-full animate-pulse opacity-60" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-[#7c3aed] rounded-full animate-pulse opacity-60" style={{animationDelay: '2s'}}></div>
            </div>

            <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10">
              {/* Hero Content */}
              <div className="mb-12">
                <div className="text-lg sm:text-xl md:text-2xl text-[#00ff88] font-medium mb-3 sm:mb-4 tracking-wider">
                  {translations.hero.greeting}
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent mb-6 sm:mb-8 animate-gradient-shift">
                    {translations.hero.name}
                  </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-[#00d4ff] font-medium tracking-wider mb-8 sm:mb-12">
                    {translations.hero.title}
                </p>
                  
                  {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
                  <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-[#00ff88]/25 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                      Download CV
                    </button>
                  </div>
                  
                  {/* Social Links */}
                <div className="flex items-center justify-center space-x-6">
                  <a href={translations.footer.contact.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#00ff88]/25">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  <a href={translations.footer.contact.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#00d4ff]/25">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
            {/* Tech Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
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
              {/* Section Title with Tech Design */}
              <div className="text-center mb-16 sm:mb-20 relative">
                {/* Background Tech Effects */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Circuit Pattern */}
                  <div className="absolute top-1/2 left-1/4 w-16 h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent opacity-40"></div>
                  <div className="absolute top-1/2 right-1/4 w-16 h-px bg-gradient-to-l from-transparent via-[#00d4ff] to-transparent opacity-40"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-b from-[#7c3aed] to-transparent opacity-40"></div>
                  
                  {/* Floating Tech Elements */}
                  <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-[#00ff88] rounded-full animate-pulse opacity-60"></div>
                  <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-[#00d4ff] rounded-full animate-pulse opacity-60" style={{animationDelay: '1s'}}></div>
                </div>
                
                {/* Main Title */}
                <div className="relative">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent animate-gradient-shift tracking-wider">
                    {translations.about.label}
                  </h2>
                  
                  {/* Tech Frame */}
                  <div className="absolute -inset-4 pointer-events-none">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#00ff88] to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#7c3aed] to-transparent opacity-60"></div>
                    <div className="absolute top-1/2 left-0 w-1 h-8 bg-gradient-to-b from-transparent via-[#00d4ff] to-transparent opacity-60"></div>
                    <div className="absolute top-1/2 right-0 w-1 h-8 bg-gradient-to-b from-transparent via-[#00d4ff] to-transparent opacity-60"></div>
                  </div>
                  
                  {/* Section Number */}
                  <div className="absolute -top-8 -right-8 w-12 h-12 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-full flex items-center justify-center shadow-lg shadow-[#00ff88]/25">
                    <span className="text-white font-bold text-lg">01</span>
                  </div>
                </div>
                
              </div>

              {/* About Content */}
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 border border-white/20 shadow-2xl">
                  {/* Quote */}
                  <div className="text-center mb-8 sm:mb-10 md:mb-12">
                    <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-great-vibes italic text-white leading-relaxed px-2 sm:px-4">
                      "{translations.about.quote}"
                    </blockquote>
                  </div>
                  
                  {/* Description */}
                  <div className="text-center">
                    <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed sm:leading-relaxed md:leading-relaxed text-justify px-2 sm:px-4 space-y-3 sm:space-y-4">
                      {translations.about.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
            {/* Tech Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
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
              {/* Section Title with Tech Design */}
              <div className="text-center mb-16 sm:mb-20 relative">
                {/* Background Tech Effects */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Hexagon Pattern */}
                  <div className="absolute top-1/2 left-1/4 w-8 h-8 border border-[#00d4ff] opacity-30 transform rotate-45"></div>
                  <div className="absolute top-1/2 right-1/4 w-8 h-8 border border-[#7c3aed] opacity-30 transform rotate-45"></div>
                  
                  {/* Data Flow Lines */}
                  <div className="absolute top-1/2 left-1/3 w-12 h-px bg-gradient-to-r from-[#00d4ff] to-transparent opacity-50"></div>
                  <div className="absolute top-1/2 right-1/3 w-12 h-px bg-gradient-to-l from-[#7c3aed] to-transparent opacity-50"></div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-1/2 left-1/5 w-1 h-1 bg-[#00d4ff] rounded-full animate-pulse opacity-70"></div>
                  <div className="absolute top-1/2 right-1/5 w-1 h-1 bg-[#7c3aed] rounded-full animate-pulse opacity-70" style={{animationDelay: '1.5s'}}></div>
                </div>
                
                {/* Main Title */}
                <div className="relative">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-[#00d4ff] via-[#7c3aed] to-[#00ff88] bg-clip-text text-transparent animate-gradient-shift tracking-wider">
                    {translations.education.title}
                  </h2>
                  
                  {/* Tech Frame */}
                  <div className="absolute -inset-4 pointer-events-none">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#7c3aed] to-transparent opacity-60"></div>
                    <div className="absolute top-1/2 left-0 w-1 h-10 bg-gradient-to-b from-transparent via-[#00d4ff] to-transparent opacity-60"></div>
                    <div className="absolute top-1/2 right-0 w-1 h-10 bg-gradient-to-b from-transparent via-[#7c3aed] to-transparent opacity-60"></div>
                  </div>
                  
                  {/* Section Number */}
                  <div className="absolute -top-8 -right-8 w-12 h-12 bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] rounded-full flex items-center justify-center shadow-lg shadow-[#00d4ff]/25">
                    <span className="text-white font-bold text-lg">02</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* University Info */}
                <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl rounded-2xl p-8 border border-white/20 shadow-2xl">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-lg flex items-center justify-center shadow-lg shadow-[#00ff88]/25">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{translations.education.university}</h3>
                      <p className="text-[#00d4ff] font-semibold">{translations.education.degree}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#00ff88] rounded-full"></div>
                      <span className="text-gray-300">GPA: {translations.education.gpa}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#00d4ff] rounded-full"></div>
                      <span className="text-gray-300">IELTS: {translations.education.ielts}</span>
                    </div>
                  </div>
                  
                  <a href={translations.education.learnMoreUrl} target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00ff88]/25 transition-all duration-300 transform hover:scale-105">
                    <span>Nhấp vào để xem thêm thông tin</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Coursework */}
                <div>
                  <h4 className="text-2xl font-bold text-white mb-8">Relevant Coursework</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {translations.education.coursework && translations.education.coursework.length > 0 ? translations.education.coursework.map((course: string, index: number) => (
                    <div key={index} className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl rounded-xl p-4 border border-white/20 shadow-xl text-center">
                      <Code className="w-6 h-6 text-[#00ff88] mx-auto mb-2" />
                      <p className="text-sm text-gray-300">{course}</p>
                    </div>
                  )) : (
                    <div className="col-span-full text-center py-8">
                      <p className="text-gray-400">No coursework data available.</p>
                    </div>
                  )}
                </div>
              </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
            {/* Tech Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
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
              {/* Section Title with Tech Design */}
              <div className="text-center mb-16 sm:mb-20 relative">
                {/* Background Tech Effects */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Circuit Pattern */}
                  <div className="absolute top-1/2 left-1/4 w-16 h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent opacity-40"></div>
                  <div className="absolute top-1/2 right-1/4 w-16 h-px bg-gradient-to-l from-transparent via-[#00d4ff] to-transparent opacity-40"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-b from-[#7c3aed] to-transparent opacity-40"></div>
                  
                  {/* Floating Tech Elements */}
                  <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-[#00ff88] rounded-full animate-pulse opacity-60"></div>
                  <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-[#00d4ff] rounded-full animate-pulse opacity-60" style={{animationDelay: '1s'}}></div>
                </div>
                
                {/* Main Title */}
                <div className="relative">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent animate-gradient-shift tracking-wider">
                    {translations.skills?.title || "SKILLS"}
                  </h2>
                  
                  {/* Tech Frame */}
                  <div className="absolute -inset-4 pointer-events-none">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#00ff88] to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#7c3aed] to-transparent opacity-60"></div>
                    <div className="absolute top-1/2 left-0 w-1 h-8 bg-gradient-to-b from-transparent via-[#00d4ff] to-transparent opacity-60"></div>
                    <div className="absolute top-1/2 right-0 w-1 h-8 bg-gradient-to-b from-transparent via-[#00d4ff] to-transparent opacity-60"></div>
            </div>

                  {/* Section Number */}
                  <div className="absolute -top-8 -right-8 w-12 h-12 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-full flex items-center justify-center shadow-lg shadow-[#00ff88]/25">
                    <span className="text-white font-bold text-lg">03</span>
                  </div>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {translations.skills?.categories && translations.skills.categories.map((category: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl rounded-2xl p-8 border border-white/20 shadow-2xl hover:shadow-xl hover:shadow-[#00ff88]/10 transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-3">
                      <div className={`w-8 h-8 bg-gradient-to-br ${index % 2 === 0 ? 'from-[#00ff88] to-[#00d4ff]' : 'from-[#00d4ff] to-[#7c3aed]'} rounded-lg flex items-center justify-center`}>
                        <Code className="w-4 h-4 text-white" />
                      </div>
                      <span>{category.name}</span>
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {category.items.map((skill: string, skillIndex: number) => (
                        <span key={skillIndex} className={`px-4 py-2 bg-gradient-to-r ${index % 2 === 0 ? 'from-[#00ff88]/10 to-[#00d4ff]/10 border-[#00ff88]/30' : 'from-[#00d4ff]/10 to-[#7c3aed]/10 border-[#00d4ff]/30'} border rounded-full text-sm font-medium ${index % 2 === 0 ? 'text-[#00ff88]' : 'text-[#00d4ff]'} hover:scale-105 transition-transform duration-300`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
            {/* Tech Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
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
              {/* Section Title with Tech Design */}
              <div className="text-center mb-16 sm:mb-20 relative">
                {/* Background Tech Effects */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Circuit Pattern */}
                  <div className="absolute top-1/2 left-1/4 w-16 h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent opacity-40"></div>
                  <div className="absolute top-1/2 right-1/4 w-16 h-px bg-gradient-to-l from-transparent via-[#00d4ff] to-transparent opacity-40"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-b from-[#7c3aed] to-transparent opacity-40"></div>
                  
                  {/* Floating Tech Elements */}
                  <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-[#00ff88] rounded-full animate-pulse opacity-60"></div>
                  <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-[#00d4ff] rounded-full animate-pulse opacity-60" style={{animationDelay: '1s'}}></div>
                </div>
                
                {/* Main Title */}
                <div className="relative">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent animate-gradient-shift tracking-wider">
                    {translations.certifications?.title || "CERTIFICATIONS & AWARDS"}
                  </h2>
                  
                  {/* Tech Frame */}
                  <div className="absolute -inset-4 pointer-events-none">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#00ff88] to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#7c3aed] to-transparent opacity-60"></div>
                    <div className="absolute top-1/2 left-0 w-1 h-8 bg-gradient-to-b from-transparent via-[#00d4ff] to-transparent opacity-60"></div>
                    <div className="absolute top-1/2 right-0 w-1 h-8 bg-gradient-to-b from-transparent via-[#00d4ff] to-transparent opacity-60"></div>
                  </div>
                  
                  {/* Section Number */}
                  <div className="absolute -top-8 -right-8 w-12 h-12 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-full flex items-center justify-center shadow-lg shadow-[#00ff88]/25">
                    <span className="text-white font-bold text-lg">04</span>
                  </div>
                </div>
              </div>

              {/* Horizontal Scrolling Certificates */}
              <div className="relative">
                {/* Scroll Container */}
                <div className="overflow-x-auto scrollbar-hide">
                  <div className="flex space-x-6 pb-4" style={{width: 'max-content'}}>
                    {translations.certifications?.items && translations.certifications.items.length > 0 ? translations.certifications.items.map((cert: any, index: number) => (
                      <div key={index} className="flex-shrink-0 w-80 sm:w-96">
                        <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl rounded-2xl p-6 border border-white/20 shadow-2xl hover:shadow-xl hover:shadow-[#00ff88]/10 transition-all duration-300 cursor-pointer group"
                             onClick={() => setSelectedCertificate(cert.title)}>
                          {/* Certificate Image */}
                          <div className="relative mb-4 rounded-xl overflow-hidden">
                            <img 
                              src={cert.image} 
                              alt={cert.title}
                              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <ExternalLink className="w-4 h-4 text-white" />
                            </div>
                          </div>
                          
                          {/* Certificate Info */}
                          <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                              <div className={`w-12 h-12 bg-gradient-to-br ${index === 0 ? 'from-[#00ff88] to-[#00d4ff]' : 'from-[#00d4ff] to-[#7c3aed]'} rounded-lg flex items-center justify-center shadow-lg ${index === 0 ? 'shadow-[#00ff88]/25' : 'shadow-[#00d4ff]/25'}`}>
                                <Award className="w-6 h-6 text-white" />
                              </div>
                              <div className="flex-1">
                                <h5 className={`text-lg font-bold text-white group-hover:${index === 0 ? 'text-[#00ff88]' : 'text-[#00d4ff]'} transition-colors duration-300`}>
                                  {cert.title}
                                </h5>
                                <p className="text-sm text-gray-400">{cert.description}</p>
                              </div>
                            </div>
                            
                            {/* Issuer Badge */}
                            <div className="flex items-center justify-between">
                              <span className="px-3 py-1 bg-gradient-to-r from-[#00ff88]/10 to-[#00d4ff]/10 border border-[#00ff88]/30 rounded-full text-[#00ff88] text-sm font-medium">
                                {cert.issuer}
                              </span>
                              <div className={`${index === 0 ? 'text-[#00ff88]' : 'text-[#00d4ff]'} group-hover:translate-x-1 transition-transform duration-300`}>
                                <ExternalLink className="w-5 h-5" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )) : (
                      <div className="text-center py-12 w-full">
                        <p className="text-gray-400 text-lg">No certifications available.</p>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Scroll Indicators */}
                <div className="flex justify-center mt-6 space-x-2">
                  {translations.certifications?.items && translations.certifications.items.length > 1 && (
                    <>
                      <div className="w-2 h-2 bg-[#00ff88] rounded-full"></div>
                      <div className="w-2 h-2 bg-[#00d4ff] rounded-full"></div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Work Experience Section */}
          <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
            {/* Tech Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
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
              <div className="text-center mb-16 sm:mb-20 relative">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent animate-gradient-shift">
                  {translations.workExperience.title}
                </h2>
                
                {/* Section Number */}
                <div className="absolute -top-8 -right-8 w-12 h-12 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-full flex items-center justify-center shadow-lg shadow-[#00ff88]/25">
                  <span className="text-white font-bold text-lg">05</span>
                </div>
              </div>

              {/* Experience Timeline */}
              <div className="space-y-8">
                {translations.workExperience && [translations.workExperience.agribank, translations.workExperience.maybank].filter(Boolean).map((experience: any, index: number) => (
                  <div key={index} className="relative">
                    {/* Timeline Line */}
                    {index < [translations.workExperience.agribank, translations.workExperience.maybank].filter(Boolean).length - 1 && (
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
                              <span className="text-sm">{experience.period}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-400">
                              <MapPin className="w-4 h-4" />
                              <span className="text-sm">{experience.department}</span>
                            </div>
                          </div>
                        </div>

                        {/* Achievements */}
                        <div className="space-y-3">
                          {experience.achievements && experience.achievements.map((item: string, itemIndex: number) => (
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
                                Financial Analysis
                              </span>
                              <span className="px-3 py-1 bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-full text-[#00d4ff] text-sm font-medium">
                                Risk Assessment
                              </span>
                              <span className="px-3 py-1 bg-[#7c3aed]/10 border border-[#7c3aed]/30 rounded-full text-[#7c3aed] text-sm font-medium">
                                Excel Modeling
                              </span>
                            </>
                          ) : (
                            <>
                              <span className="px-3 py-1 bg-[#00ff88]/10 border border-[#00ff88]/30 rounded-full text-[#00ff88] text-sm font-medium">
                                Market Research
                              </span>
                              <span className="px-3 py-1 bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-full text-[#00d4ff] text-sm font-medium">
                                Power BI
                              </span>
                              <span className="px-3 py-1 bg-[#7c3aed]/10 border border-[#7c3aed]/30 rounded-full text-[#7c3aed] text-sm font-medium">
                                Investment Analysis
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
            {/* Tech Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
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
              {/* Section Title with Tech Design */}
              <div className="text-center mb-16 sm:mb-20 relative">
                {/* Background Tech Effects */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Circuit Pattern */}
                  <div className="absolute top-1/2 left-1/4 w-16 h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent opacity-40"></div>
                  <div className="absolute top-1/2 right-1/4 w-16 h-px bg-gradient-to-l from-transparent via-[#00d4ff] to-transparent opacity-40"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-b from-[#7c3aed] to-transparent opacity-40"></div>
                  
                  {/* Floating Tech Elements */}
                  <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-[#00ff88] rounded-full animate-pulse opacity-60"></div>
                  <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-[#00d4ff] rounded-full animate-pulse opacity-60" style={{animationDelay: '1s'}}></div>
                </div>
                
                {/* Main Title */}
                <div className="relative">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent animate-gradient-shift tracking-wider">
                    {translations.projects?.title || "PROJECTS"}
                  </h2>
                  
                  {/* Tech Frame */}
                  <div className="absolute -inset-4 pointer-events-none">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#00ff88] to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#7c3aed] to-transparent opacity-60"></div>
                    <div className="absolute top-1/2 left-0 w-1 h-8 bg-gradient-to-b from-transparent via-[#00d4ff] to-transparent opacity-60"></div>
                    <div className="absolute top-1/2 right-0 w-1 h-8 bg-gradient-to-b from-transparent via-[#00d4ff] to-transparent opacity-60"></div>
              </div>

                  {/* Section Number */}
                  <div className="absolute -top-8 -right-8 w-12 h-12 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-full flex items-center justify-center shadow-lg shadow-[#00ff88]/25">
                    <span className="text-white font-bold text-lg">06</span>
                  </div>
                </div>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {translations.projects?.items && translations.projects.items.map((project: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl rounded-2xl p-6 border border-white/20 shadow-2xl hover:shadow-xl hover:shadow-[#00ff88]/10 transition-all duration-300 group">
                    {/* Project Image */}
                    <div className="relative mb-6 rounded-xl overflow-hidden">
                      <div className="w-full h-48 bg-gradient-to-br from-[#00ff88]/20 to-[#00d4ff]/20 flex items-center justify-center">
                        <Code className="w-16 h-16 text-[#00ff88] opacity-50" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ExternalLink className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    
                    {/* Project Info */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-[#00ff88] transition-colors duration-300">
                        {project.name}
                      </h3>
                      
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech: string, techIndex: number) => (
                          <span key={techIndex} className="px-3 py-1 bg-gradient-to-r from-[#00ff88]/10 to-[#00d4ff]/10 border border-[#00ff88]/30 rounded-full text-[#00ff88] text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* View Project Button */}
                      <a href={project.link} className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00ff88]/25 transition-all duration-300 transform hover:scale-105">
                        <span>View Project</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Certificate Modal */}
          {selectedCertificate && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                 onClick={() => setSelectedCertificate(null)}>
              <div className="bg-gray-900 rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-auto"
                   onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">
                    {selectedCertificate}
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
                    src={translations.certifications?.items?.find((cert: any) => cert.title === selectedCertificate)?.image || ''}
                    alt={selectedCertificate}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Personal Section */}
      {activeSection === "personal" && (
        <>
          {/* Personal Hero Section */}
          <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Tech Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full" style={{
                  backgroundImage: `
                    linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '30px 30px',
                  animation: 'grid-move 15s linear infinite'
                }}></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#00d4ff] rounded-full animate-pulse opacity-60"></div>
              <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#7c3aed] rounded-full animate-pulse opacity-60" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-[#00ff88] rounded-full animate-pulse opacity-60" style={{animationDelay: '2s'}}></div>
            </div>

            <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10">
            {/* Personal Content Header */}
            <div className="mb-12">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-wider bg-gradient-to-r from-[#00d4ff] via-[#7c3aed] to-[#00ff88] bg-clip-text text-transparent mb-8">
                  {translations.personal?.title || "PERSONAL"}
              </h1>
                <p className="text-lg sm:text-xl text-[#00d4ff] font-medium tracking-wider">
                  {translations.personal?.subtitle || "Discover my personal side"}
                </p>
              </div>
            </div>
          </section>

          {/* My Hobby Section */}
          <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
            {/* Tech Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full" style={{
                  backgroundImage: `
                    linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '60px 60px',
                  animation: 'grid-move 25s linear infinite'
                }}></div>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              {/* Section Title */}
              <div className="text-center mb-16 sm:mb-20 relative">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-[#00d4ff] via-[#7c3aed] to-[#00ff88] bg-clip-text text-transparent animate-gradient-shift tracking-wider">
                  {translations.personal?.myHobby?.title || "MY HOBBY"}
                </h2>
                <p className="text-lg text-[#00d4ff] font-medium mt-4">
                  {translations.personal?.myHobby?.subtitle || "Things I love to do in my free time"}
                </p>
                    </div>

              {/* Hobbies Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {translations.personal?.myHobby?.hobbies && translations.personal.myHobby.hobbies.map((hobby: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl rounded-2xl p-6 border border-white/20 shadow-2xl hover:shadow-xl hover:shadow-[#00d4ff]/10 transition-all duration-300 group text-center">
                    <div className="text-4xl mb-4">{hobby.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00d4ff] transition-colors duration-300">
                      {hobby.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {hobby.description}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {hobby.details}
                    </p>
                  </div>
                ))}
                  </div>
                </div>
          </section>

          {/* Extracurriculars Section */}
          <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
            {/* Tech Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full" style={{
                  backgroundImage: `
                    linear-gradient(rgba(124, 58, 237, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(124, 58, 237, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '60px 60px',
                  animation: 'grid-move 25s linear infinite'
                }}></div>
              </div>
                    </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              {/* Section Title */}
              <div className="text-center mb-16 sm:mb-20 relative">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-[#7c3aed] via-[#00ff88] to-[#00d4ff] bg-clip-text text-transparent animate-gradient-shift tracking-wider">
                  {translations.personal?.extracurriculars?.title || "EXTRACURRICULARS"}
                </h2>
                <p className="text-lg text-[#7c3aed] font-medium mt-4">
                  {translations.personal?.extracurriculars?.subtitle || "Activities beyond academics and work"}
                </p>
              </div>

              {/* Activities Timeline */}
              <div className="space-y-8">
                {translations.personal?.extracurriculars?.activities && translations.personal.extracurriculars.activities.map((activity: any, index: number) => (
                  <div key={index} className="relative">
                    {/* Timeline Line */}
                    {index < translations.personal.extracurriculars.activities.length - 1 && (
                      <div className="absolute left-8 top-16 w-0.5 h-full bg-gradient-to-b from-[#7c3aed] to-[#00d4ff] opacity-30"></div>
                    )}
                    
                    {/* Activity Card */}
                    <div className="relative flex items-start space-x-6 group">
                      {/* Timeline Dot */}
                      <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#7c3aed] to-[#00d4ff] rounded-full flex items-center justify-center shadow-lg shadow-[#7c3aed]/25">
                        <User className="w-8 h-8 text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl rounded-2xl p-8 border border-white/20 shadow-2xl group-hover:shadow-xl group-hover:shadow-[#7c3aed]/10 transition-all duration-300">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{activity.name}</h3>
                            <p className="text-xl text-[#7c3aed] font-semibold">{activity.position}</p>
                          </div>
                          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                            <div className="flex items-center space-x-2 text-gray-400">
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm">{activity.period}</span>
                  </div>
                </div>
              </div>

                        <p className="text-gray-300 mb-4">{activity.description}</p>

                        {/* Achievements */}
                        <div className="space-y-2">
                          {activity.achievements && activity.achievements.map((achievement: string, achievementIndex: number) => (
                            <div key={achievementIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-[#7c3aed] rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-gray-300 text-sm leading-relaxed">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                  </div>
                </div>
          </section>

          {/* Achievements Section */}
          <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
            {/* Tech Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
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
              <div className="text-center mb-16 sm:mb-20 relative">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent animate-gradient-shift tracking-wider">
                  {translations.personal?.achievements?.title || "ACHIEVEMENTS"}
                </h2>
                <p className="text-lg text-[#00ff88] font-medium mt-4">
                  {translations.personal?.achievements?.subtitle || "Personal milestones and recognitions"}
                </p>
              </div>

              {/* Achievements Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {translations.personal?.achievements?.personalAchievements && translations.personal.achievements.personalAchievements.map((achievement: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl rounded-2xl p-6 border border-white/20 shadow-2xl hover:shadow-xl hover:shadow-[#00ff88]/10 transition-all duration-300 group">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#00ff88]/25">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00ff88] transition-colors duration-300">
                        {achievement.name}
                      </h3>
                      <p className="text-sm text-[#00d4ff] font-medium mb-2">{achievement.period}</p>
                      <p className="text-gray-300 text-sm mb-3">{achievement.description}</p>
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#00ff88]/10 to-[#00d4ff]/10 border border-[#00ff88]/30 rounded-full text-[#00ff88] text-xs font-medium">
                        {achievement.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </main>
  )
}
