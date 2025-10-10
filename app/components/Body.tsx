"use client"

import React, { useState } from "react"
import { User, GraduationCap, Briefcase, Code, Award, ExternalLink, X, Building2, Calendar, MapPin, Download, Mail, Phone, Linkedin, Github, ChevronRight, Star, TrendingUp, Target, Zap } from "lucide-react"

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
          {/* Modern Hero Section */}
          <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Advanced Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Animated Grid */}
              <div className="absolute inset-0 opacity-[0.03]">
                <div className="w-full h-full" style={{
                  backgroundImage: `
                    linear-gradient(rgba(0, 255, 136, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 255, 136, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px',
                  animation: 'grid-move 20s linear infinite'
                }}></div>
              </div>
              
              {/* Floating Orbs */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-[#00ff88]/10 to-[#00d4ff]/10 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-[#7c3aed]/10 to-[#00ff88]/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-r from-[#00d4ff]/10 to-[#7c3aed]/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
              
              {/* Geometric Shapes */}
              <div className="absolute top-20 left-20 w-2 h-2 bg-[#00ff88] rounded-full animate-ping"></div>
              <div className="absolute top-32 right-32 w-1 h-1 bg-[#00d4ff] rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-[#7c3aed] rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Content */}
                <div className="space-y-8">
                  {/* Greeting */}
                  <div className="space-y-4">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#00ff88]/10 to-[#00d4ff]/10 border border-[#00ff88]/30 rounded-full text-[#00ff88] text-sm font-medium">
                      <span className="w-2 h-2 bg-[#00ff88] rounded-full mr-2 animate-pulse"></span>
                      {translations.hero.greeting}
                    </div>
                    
                    <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                      <span className="bg-gradient-to-r from-white via-[#00ff88] to-white bg-clip-text text-transparent">
                        {translations.hero.name}
                      </span>
                    </h1>
                    
                    <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                      {translations.hero.title}
                    </p>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="group relative px-8 py-4 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black font-semibold rounded-xl hover:shadow-2xl hover:shadow-[#00ff88]/25 transition-all duration-300 transform hover:scale-105 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative flex items-center space-x-2">
                        <Download className="w-5 h-5" />
                        <span>Download CV</span>
                      </div>
                    </button>
                    
                    <button className="group px-8 py-4 border-2 border-[#00d4ff] text-[#00d4ff] font-semibold rounded-xl hover:bg-[#00d4ff] hover:text-black transition-all duration-300 transform hover:scale-105">
                      <div className="flex items-center space-x-2">
                        <Mail className="w-5 h-5" />
                        <span>Get In Touch</span>
                      </div>
                    </button>
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex items-center space-x-6 pt-4">
                    <a href={translations.footer.contact.linkedin} target="_blank" rel="noopener noreferrer" 
                       className="group w-12 h-12 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg shadow-[#00ff88]/25">
                      <Linkedin className="w-6 h-6 text-black group-hover:scale-110 transition-transform duration-300" />
                    </a>
                    <a href={translations.footer.contact.github} target="_blank" rel="noopener noreferrer"
                       className="group w-12 h-12 bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg shadow-[#00d4ff]/25">
                      <Github className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </a>
                    <a href={`mailto:${translations.footer.contact.email}`} 
                       className="group w-12 h-12 bg-gradient-to-br from-[#7c3aed] to-[#00ff88] rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg shadow-[#7c3aed]/25">
                      <Mail className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  </div>
                </div>

                 {/* Right Column - Beautiful Profile Image Frame */}
                 <div className="relative flex items-center justify-center">
                   <div className="relative w-80 h-96 lg:w-96 lg:h-[480px] group">
                     {/* Beautiful Frame Design */}
                     <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-2xl rounded-3xl border-2 border-white/20 shadow-2xl p-6">
                       {/* Inner Frame */}
                       <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] shadow-inner">
                         {/* Profile Image */}
                         <img 
                           src="/Ảnh gửi CV.jpg" 
                           alt="LE NAM TUYEN"
                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                           onError={(e) => {
                             e.currentTarget.src = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Avatar-653d9ylzzMfaEqsMFNdohWuJz9BSAB.jpg";
                           }}
                         />
                         
                         {/* Subtle Overlay on Hover */}
                         <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                       </div>
                     </div>
                     
                     {/* Decorative Corner Elements */}
                     <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-full shadow-lg animate-pulse"></div>
                     <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] rounded-full shadow-lg animate-pulse"></div>
                     <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-[#7c3aed] to-[#00ff88] rounded-full shadow-lg animate-pulse"></div>
                     <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-full shadow-lg animate-pulse"></div>
                     
                     {/* Floating Accent Elements */}
                     <div className="absolute top-1/4 -left-4 w-3 h-3 bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] rounded-full animate-bounce opacity-70"></div>
                     <div className="absolute bottom-1/4 -right-4 w-2 h-2 bg-gradient-to-br from-[#7c3aed] to-[#00ff88] rounded-full animate-ping opacity-60"></div>
                     <div className="absolute top-1/2 -right-6 w-4 h-4 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-full animate-pulse opacity-50"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section - Modern Design */}
          <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Column - Content */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#00ff88]/10 to-[#00d4ff]/10 border border-[#00ff88]/30 rounded-full text-[#00ff88] text-sm font-medium">
                      <User className="w-4 h-4 mr-2" />
                      {translations.about.label}
            </div>

                    <h2 className="text-4xl lg:text-5xl font-black leading-tight">
                      <span className="bg-gradient-to-r from-white via-[#00ff88] to-white bg-clip-text text-transparent">
                        Professional
                      </span>
                      <br />
                      <span className="text-white">Profile</span>
                  </h2>
                  
                    <blockquote className="text-xl text-[#00d4ff] font-medium italic border-l-4 border-[#00ff88] pl-6">
                      "{translations.about.quote}"
                    </blockquote>
                  </div>
                  </div>
                  
                {/* Right Column - Description */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl p-8 lg:p-12">
                    <div className="space-y-6">
                      <p className="text-gray-300 leading-relaxed text-lg">
                      {translations.about.description}
                    </p>
                      
                      {/* Key Highlights */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#00ff88] rounded-full"></div>
                          <span className="text-gray-300 text-sm">Product Development</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#00d4ff] rounded-full"></div>
                          <span className="text-gray-300 text-sm">Data Analytics</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#7c3aed] rounded-full"></div>
                          <span className="text-gray-300 text-sm">Cross-functional Leadership</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#00ff88] rounded-full"></div>
                          <span className="text-gray-300 text-sm">FinTech Expertise</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Education Section - Modern Cards */}
          <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#00d4ff]/10 to-[#7c3aed]/10 border border-[#00d4ff]/30 rounded-full text-[#00d4ff] text-sm font-medium mb-6">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  {translations.education.title}
                </div>
                <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-6">
                  <span className="bg-gradient-to-r from-white via-[#00d4ff] to-white bg-clip-text text-transparent">
                    Academic
                  </span>
                  <br />
                  <span className="text-white">Excellence</span>
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* University Card */}
                <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl p-8 lg:p-12">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-2xl flex items-center justify-center shadow-lg shadow-[#00ff88]/25">
                        <GraduationCap className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">{translations.education.university}</h3>
                        <p className="text-[#00d4ff] font-semibold text-lg">{translations.education.degree}</p>
              </div>
            </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 rounded-xl p-4">
                        <div className="text-sm text-gray-400 mb-1">GPA</div>
                        <div className="text-2xl font-bold text-[#00ff88]">{translations.education.gpa}</div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4">
                        <div className="text-sm text-gray-400 mb-1">IELTS</div>
                        <div className="text-2xl font-bold text-[#00d4ff]">{translations.education.ielts}</div>
                </div>
                  </div>
                  
                    <a href={translations.education.learnMoreUrl} target="_blank" rel="noopener noreferrer"
                       className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-[#00ff88]/25 transition-all duration-300 transform hover:scale-105">
                      <span>Learn More</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                
                {/* Coursework */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">Relevant Coursework</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {translations.education.coursework && translations.education.coursework.map((course: string, index: number) => (
                      <div key={index} className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl rounded-xl p-4 border border-white/20 shadow-xl hover:shadow-2xl hover:shadow-[#00d4ff]/10 transition-all duration-300 group">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] rounded-lg flex items-center justify-center">
                            <Code className="w-4 h-4 text-white" />
              </div>
                          <p className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300">{course}</p>
                    </div>
                    </div>
                    ))}
                  </div>
                    </div>
                    </div>
                  </div>
          </section>

          {/* Skills Section - Modern Grid */}
          <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#00ff88]/10 to-[#00d4ff]/10 border border-[#00ff88]/30 rounded-full text-[#00ff88] text-sm font-medium mb-6">
                  <Code className="w-4 h-4 mr-2" />
                  {translations.skills?.title || "SKILLS"}
                </div>
                <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-6">
                  <span className="bg-gradient-to-r from-white via-[#00ff88] to-white bg-clip-text text-transparent">
                    Technical
                  </span>
                  <br />
                  <span className="text-white">Expertise</span>
                </h2>
                </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {translations.skills?.categories && translations.skills.categories.map((category: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl p-8 hover:shadow-2xl hover:shadow-[#00ff88]/10 transition-all duration-300 group">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${index % 2 === 0 ? 'from-[#00ff88] to-[#00d4ff]' : 'from-[#00d4ff] to-[#7c3aed]'} rounded-2xl flex items-center justify-center shadow-lg`}>
                          <Code className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-[#00ff88] transition-colors duration-300">
                          {category.name}
                        </h3>
                        </div>
                      
                      <div className="flex flex-wrap gap-3">
                        {category.items.map((skill: string, skillIndex: number) => (
                          <span key={skillIndex} className={`px-4 py-2 bg-gradient-to-r ${index % 2 === 0 ? 'from-[#00ff88]/10 to-[#00d4ff]/10 border-[#00ff88]/30' : 'from-[#00d4ff]/10 to-[#7c3aed]/10 border-[#00d4ff]/30'} border rounded-xl text-sm font-medium ${index % 2 === 0 ? 'text-[#00ff88]' : 'text-[#00d4ff]'} hover:scale-105 transition-transform duration-300`}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    </div>
                ))}
              </div>
                    </div>
          </section>

          {/* Certifications Section - Modern Cards */}
          <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#00ff88]/10 to-[#00d4ff]/10 border border-[#00ff88]/30 rounded-full text-[#00ff88] text-sm font-medium mb-6">
                  <Award className="w-4 h-4 mr-2" />
                  {translations.certifications?.title || "CERTIFICATIONS & AWARDS"}
                </div>
                <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-6">
                  <span className="bg-gradient-to-r from-white via-[#00ff88] to-white bg-clip-text text-transparent">
                    Professional
                  </span>
                  <br />
                  <span className="text-white">Credentials</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {translations.certifications?.items && translations.certifications.items.map((cert: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl hover:shadow-2xl hover:shadow-[#00ff88]/10 transition-all duration-300 group cursor-pointer"
                       onClick={() => setSelectedCertificate(cert.title)}>
                    <div className="p-8">
                      <div className="space-y-6">
                        <div className="relative">
                          <div className="w-full h-48 bg-gradient-to-br from-[#00ff88]/20 to-[#00d4ff]/20 rounded-2xl flex items-center justify-center overflow-hidden">
                            <img 
                              src={cert.image} 
                              alt={cert.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ExternalLink className="w-4 h-4 text-white" />
              </div>
            </div>

                        <div className="space-y-4">
                          <div className="flex items-start space-x-4">
                            <div className={`w-12 h-12 bg-gradient-to-br ${index === 0 ? 'from-[#00ff88] to-[#00d4ff]' : 'from-[#00d4ff] to-[#7c3aed]'} rounded-2xl flex items-center justify-center shadow-lg`}>
                              <Award className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className={`text-lg font-bold text-white group-hover:${index === 0 ? 'text-[#00ff88]' : 'text-[#00d4ff]'} transition-colors duration-300`}>
                                {cert.title}
                    </h3>
                              <p className="text-sm text-gray-400 mt-1">{cert.description}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <span className="px-3 py-1 bg-gradient-to-r from-[#00ff88]/10 to-[#00d4ff]/10 border border-[#00ff88]/30 rounded-full text-[#00ff88] text-sm font-medium">
                              {cert.issuer}
                            </span>
                            <ChevronRight className={`w-5 h-5 ${index === 0 ? 'text-[#00ff88]' : 'text-[#00d4ff]'} group-hover:translate-x-1 transition-transform duration-300`} />
                          </div>
                  </div>
                  </div>
                </div>
              </div>
                ))}
              </div>
            </div>
          </section>

          {/* Work Experience Section - Modern Timeline */}
          <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#00ff88]/10 to-[#00d4ff]/10 border border-[#00ff88]/30 rounded-full text-[#00ff88] text-sm font-medium mb-6">
                  <Briefcase className="w-4 h-4 mr-2" />
                  {translations.workExperience.title}
                </div>
                <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-6">
                  <span className="bg-gradient-to-r from-white via-[#00ff88] to-white bg-clip-text text-transparent">
                    Professional
                  </span>
                  <br />
                  <span className="text-white">Journey</span>
                </h2>
              </div>

              <div className="space-y-12">
                {translations.workExperience && [translations.workExperience.agribank, translations.workExperience.maybank].filter(Boolean).map((experience: any, index: number) => (
                  <div key={index} className="relative">
                    {/* Timeline Line */}
                    {index < [translations.workExperience.agribank, translations.workExperience.maybank].filter(Boolean).length - 1 && (
                      <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-[#00ff88] to-[#00d4ff] opacity-30"></div>
                    )}
                    
                    {/* Experience Card */}
                    <div className="relative flex items-start space-x-8 group">
                      {/* Timeline Dot */}
                      <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-2xl flex items-center justify-center shadow-lg shadow-[#00ff88]/25">
                        <Building2 className="w-8 h-8 text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl group-hover:shadow-2xl group-hover:shadow-[#00ff88]/10 transition-all duration-300 p-8">
                        <div className="space-y-6">
                        {/* Header */}
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{experience.position}</h3>
                            <p className="text-xl text-[#00d4ff] font-semibold">{experience.company}</p>
                          </div>
                            <div className="flex items-center space-x-6 mt-4 lg:mt-0">
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
                          <div className="flex flex-wrap gap-3">
                          {index === 0 ? (
                            <>
                                <span className="px-4 py-2 bg-gradient-to-r from-[#00ff88]/10 to-[#00d4ff]/10 border border-[#00ff88]/30 rounded-xl text-[#00ff88] text-sm font-medium">
                                Financial Analysis
                              </span>
                                <span className="px-4 py-2 bg-gradient-to-r from-[#00d4ff]/10 to-[#7c3aed]/10 border border-[#00d4ff]/30 rounded-xl text-[#00d4ff] text-sm font-medium">
                                Risk Assessment
                              </span>
                                <span className="px-4 py-2 bg-gradient-to-r from-[#7c3aed]/10 to-[#00ff88]/10 border border-[#7c3aed]/30 rounded-xl text-[#7c3aed] text-sm font-medium">
                                Excel Modeling
                              </span>
                            </>
                          ) : (
                            <>
                                <span className="px-4 py-2 bg-gradient-to-r from-[#00ff88]/10 to-[#00d4ff]/10 border border-[#00ff88]/30 rounded-xl text-[#00ff88] text-sm font-medium">
                                Market Research
                              </span>
                                <span className="px-4 py-2 bg-gradient-to-r from-[#00d4ff]/10 to-[#7c3aed]/10 border border-[#00d4ff]/30 rounded-xl text-[#00d4ff] text-sm font-medium">
                                Power BI
                              </span>
                                <span className="px-4 py-2 bg-gradient-to-r from-[#7c3aed]/10 to-[#00ff88]/10 border border-[#7c3aed]/30 rounded-xl text-[#7c3aed] text-sm font-medium">
                                Investment Analysis
                              </span>
                            </>
                          )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section - Modern Grid */}
          <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#00ff88]/10 to-[#00d4ff]/10 border border-[#00ff88]/30 rounded-full text-[#00ff88] text-sm font-medium mb-6">
                  <Code className="w-4 h-4 mr-2" />
                  {translations.projects?.title || "PROJECTS"}
                </div>
                <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-6">
                  <span className="bg-gradient-to-r from-white via-[#00ff88] to-white bg-clip-text text-transparent">
                    Featured
                  </span>
                  <br />
                  <span className="text-white">Projects</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {translations.projects?.items && translations.projects.items.map((project: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl hover:shadow-2xl hover:shadow-[#00ff88]/10 transition-all duration-300 group">
                    <div className="p-8">
                      <div className="space-y-6">
                        {/* Project Image */}
                        <div className="relative">
                          <div className="w-full h-48 bg-gradient-to-br from-[#00ff88]/20 to-[#00d4ff]/20 rounded-2xl flex items-center justify-center overflow-hidden">
                            <Code className="w-16 h-16 text-[#00ff88] opacity-50" />
                          </div>
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
                              <span key={techIndex} className="px-3 py-1 bg-gradient-to-r from-[#00ff88]/10 to-[#00d4ff]/10 border border-[#00ff88]/30 rounded-lg text-[#00ff88] text-xs font-medium">
                                {tech}
                              </span>
                            ))}
                          </div>
                          
                          {/* View Project Button */}
                          <a href={project.link} className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-[#00ff88]/25 transition-all duration-300 transform hover:scale-105">
                            <span>View Project</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
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
              <div className="bg-gray-900 rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-auto"
                   onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">
                    {selectedCertificate}
                  </h3>
                  <button
                    onClick={() => setSelectedCertificate(null)}
                    className="text-gray-400 hover:text-white transition-colors duration-300 p-2 hover:bg-white/10 rounded-lg"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="text-center">
                  <img
                    src={translations.certifications?.items?.find((cert: any) => cert.title === selectedCertificate)?.image || ''}
                    alt={selectedCertificate}
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Personal Section - Keep existing design */}
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