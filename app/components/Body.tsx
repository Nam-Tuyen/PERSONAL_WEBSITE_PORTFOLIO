"use client"

import React, { useState } from "react"
import { User, GraduationCap, Briefcase, Code, Award, ExternalLink, X, Building2, Calendar, MapPin, Users, TrendingUp, Database } from "lucide-react"

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
              
              {/* Scanning Lines */}
              <div className="absolute inset-0">
                <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent opacity-30 animate-scan"></div>
                <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent opacity-30 animate-scan" style={{animationDelay: '2s'}}></div>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Profile Image */}
                <div className="relative order-2 lg:order-1">
                  <div className="relative w-80 h-96 sm:w-96 sm:h-[500px] lg:w-[450px] lg:h-[550px]">
                    {/* Tech Frame Effects */}
                    <div className="absolute inset-0 pointer-events-none">
                      {/* Corner Brackets */}
                      <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[#00ff88] opacity-60"></div>
                      <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-[#00d4ff] opacity-60"></div>
                      <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-[#7c3aed] opacity-60"></div>
                      <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[#00ff88] opacity-60"></div>
                      
                      {/* Floating Data Points */}
                      <div className="absolute top-8 right-8 w-3 h-3 bg-[#00ff88] rounded-full animate-pulse"></div>
                      <div className="absolute bottom-12 left-8 w-2 h-2 bg-[#00d4ff] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                      <div className="absolute top-1/2 right-4 w-2 h-2 bg-[#7c3aed] rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
                    </div>
                    
                    {/* Profile Image */}
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                      <img 
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Avatar-653d9ylzzMfaEqsMFNdohWuJz9BSAB.jpg" 
                        alt="LE NAM TUYEN" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Column - Content */}
                <div className="order-1 lg:order-2 text-center lg:text-left">
                  {/* Greeting */}
                  <div className="text-lg sm:text-xl text-[#00ff88] font-medium mb-4 tracking-wider">
                    {translations.hero.greeting}
                  </div>
                  
                  {/* Name */}
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">
                    {translations.hero.name}
                  </h1>
                  
                  {/* Title */}
                  <h2 className="text-xl sm:text-2xl md:text-3xl text-white mb-8 font-medium">
                    {translations.hero.title}
                  </h2>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                    <button className="px-8 py-4 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#00ff88]/25 transition-all duration-300 transform hover:scale-105">
                      Download CV
                    </button>
                    <button className="px-8 py-4 border-2 border-[#00d4ff] text-[#00d4ff] font-semibold rounded-xl hover:bg-[#00d4ff] hover:text-white transition-all duration-300 transform hover:scale-105">
                      View Portfolio
                    </button>
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex justify-center lg:justify-start space-x-6">
                    <a href={translations.footer.contact.linkedin} target="_blank" rel="noopener noreferrer" 
                       className="w-12 h-12 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-xl flex items-center justify-center hover:shadow-lg hover:shadow-[#00ff88]/25 transition-all duration-300 transform hover:scale-110">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href={translations.footer.contact.github} target="_blank" rel="noopener noreferrer"
                       className="w-12 h-12 bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] rounded-xl flex items-center justify-center hover:shadow-lg hover:shadow-[#00d4ff]/25 transition-all duration-300 transform hover:scale-110">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
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
              {/* Section Title */}
              <div className="text-center mb-16 sm:mb-20">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent animate-gradient-shift">
                  {translations.about.label}
                </h2>
              </div>

              {/* About Content */}
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/20 shadow-2xl">
                  {/* Quote */}
                  <div className="text-center mb-12">
                    <blockquote className="text-2xl sm:text-3xl md:text-4xl font-great-vibes italic text-white leading-relaxed">
                      "{translations.about.quote}"
                    </blockquote>
                  </div>
                  
                  {/* Description */}
                  <div className="text-center">
                    <p className="text-lg text-gray-300 leading-relaxed text-justify">
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
              {/* Section Title */}
              <div className="text-center mb-16 sm:mb-20">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent animate-gradient-shift">
                  {translations.education.title}
                </h2>
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
                     className="inline-flex items-center space-x-2 text-[#00ff88] hover:text-[#00d4ff] transition-colors duration-300">
                    <span>Learn More</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Certifications */}
                <div>
                  <h4 className="text-2xl font-bold text-white mb-8 flex items-center space-x-2">
                    <Award className="w-6 h-6 text-[#00d4ff]" />
                    <span>Professional Certifications</span>
                  </h4>

                  {/* Certificates */}
                  {translations.education.certifications && translations.education.certifications.length > 0 ? translations.education.certifications.map((cert: any, index: number) => (
                    <div key={index} className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl rounded-2xl p-6 border border-white/20 shadow-2xl hover:shadow-xl hover:shadow-[#00ff88]/10 transition-all duration-300 cursor-pointer group mb-4"
                         onClick={() => setSelectedCertificate(cert.title)}>
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${index === 0 ? 'from-[#00ff88] to-[#00d4ff]' : 'from-[#00d4ff] to-[#7c3aed]'} rounded-lg flex items-center justify-center shadow-lg ${index === 0 ? 'shadow-[#00ff88]/25' : 'shadow-[#00d4ff]/25'}`}>
                          <Award className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h5 className={`text-lg font-bold text-white mb-2 group-hover:${index === 0 ? 'text-[#00ff88]' : 'text-[#00d4ff]'} transition-colors duration-300`}>
                            {cert.title}
                          </h5>
                          <p className="text-sm text-gray-400">{cert.issuer} Professional Certificate</p>
                        </div>
                        <div className={`${index === 0 ? 'text-[#00ff88]' : 'text-[#00d4ff]'} group-hover:translate-x-1 transition-transform duration-300`}>
                          <ExternalLink className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  )) : (
                    <div className="text-center py-12">
                      <p className="text-gray-400 text-lg">No certifications available.</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Coursework */}
              <div className="mt-16">
                <h4 className="text-2xl font-bold text-white mb-8 text-center">Relevant Coursework</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                      src={translations.education.certifications?.find((cert: any) => cert.title === selectedCertificate)?.image || ''}
                      alt={selectedCertificate}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            )}
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
              <div className="text-center mb-16 sm:mb-20">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent animate-gradient-shift">
                  {translations.workExperience.title}
                </h2>
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
        </>
      )}

      {/* Personal Section */}
      {activeSection === "personal" && (
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
            {/* Personal Content Header */}
            <div className="mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-wider bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent mb-8">
                Personal Life
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover more about my personal interests, hobbies, and life outside of work.
              </p>
            </div>

            {/* Personal Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Hobbies Card */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-[#00ff88]/30 transition-all duration-500 hover:scale-105">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#00ff88]/25">
                      <span className="text-white font-bold text-2xl">🎯</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Hobbies</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Photography, reading tech blogs, exploring new technologies, and playing basketball.
                    </p>
                  </div>
                </div>
              </div>

              {/* Interests Card */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-[#00d4ff]/30 transition-all duration-500 hover:scale-105">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#00d4ff]/25">
                      <span className="text-white font-bold text-2xl">🚀</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Interests</h3>
                    <p className="text-gray-300 leading-relaxed">
                      FinTech innovation, data science, product management, and emerging technologies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Goals Card */}
              <div className="group relative md:col-span-2 lg:col-span-1">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#7c3aed] to-[#00ff88] rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-[#7c3aed]/30 transition-all duration-500 hover:scale-105">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#7c3aed] to-[#00ff88] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#7c3aed]/25">
                      <span className="text-white font-bold text-2xl">🎯</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Goals</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Become a leading Product Manager in FinTech, contribute to innovative solutions, and mentor others.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Quote */}
            <div className="mt-16 relative">
              <div className="max-w-4xl mx-auto">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#00ff88]/20 via-[#00d4ff]/20 to-[#7c3aed]/20 rounded-2xl blur opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 sm:p-12">
                    <blockquote className="text-2xl sm:text-3xl md:text-4xl text-center font-great-vibes italic text-white leading-relaxed">
                      "Life is about continuous learning, growing, and making a positive impact through technology."
                    </blockquote>
                    <cite className="block text-center mt-6 text-[#00ff88] font-semibold text-lg">
                      - LE NAM TUYEN
                    </cite>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
