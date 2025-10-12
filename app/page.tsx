"use client"

import React, { useState } from "react"
import { translations } from "./data/translations"
import UniverseBackground from "./components/UniverseBackground"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"

export default function Portfolio() {
  const [language, setLanguage] = useState("en")
  const [activeSection, setActiveSection] = useState("professional")
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  const t = translations[language as keyof typeof translations]

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <UniverseBackground />

              <Sidebar
                translations={t}
                activeSection={activeSection}
                onSectionChange={setActiveSection}
                language={language}
                onLanguageChange={setLanguage}
                isCollapsed={isSidebarCollapsed}
                onToggleCollapse={setIsSidebarCollapsed}
              />

      <div className="relative z-10 transition-all duration-500">
        <div className={`min-h-screen transition-all duration-500 ${
          isSidebarCollapsed ? 'ml-0' : 'ml-80'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            
            {/* Hero Section - Tech Minimal Style */}
            <section id="home" className="mb-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Column - Professional Image */}
                <div className="order-2 lg:order-1">
                  <div className="relative group">
                    {/* Tech Grid Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/5 to-[#00d4ff]/5 rounded-3xl blur-3xl"></div>
                    <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-2">
                      {/* Fixed Aspect Ratio Container */}
                      <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl">
                        <img 
                          src="/Profilepicture.jpg" 
                          alt="LE NAM TUYEN" 
                          className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
                        />
                        {/* Tech Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Professional Content */}
                <div className="order-1 lg:order-2">
                  <div className="space-y-8">
                    {/* Greeting */}
                    <div className="space-y-4">
                      
                      <h1 className="text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
                        {t?.hero?.greeting || "HI, I AM"}
                      </h1>
                      <h2 className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] mb-6 tracking-tight">
                        {t?.hero?.name || "LE NAM TUYEN"}
                      </h2>
                      <p className="text-xl lg:text-2xl text-gray-300 font-medium leading-relaxed mb-8">
                        {t?.hero?.title || "ASPIRING PRODUCT MANAGER & DATA ANALYST IN FINTECH"}
                      </p>
                    </div>


                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="px-8 py-4 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-[#00ff88]/25">
                        Download Resume
                      </button>
                      <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition-all duration-300">
                        View Projects
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 1. ABOUT ME Section */}
            <section id="about" className="mb-32 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/5 to-[#00d4ff]/5 rounded-3xl blur-3xl"></div>
              <div className="relative">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center space-x-3 mb-6">
                    <div className="w-3 h-3 bg-[#00ff88] rounded-full animate-pulse"></div>
                    <h3 className="text-4xl lg:text-5xl font-black text-white tracking-tight">ABOUT ME</h3>
                    <div className="w-3 h-3 bg-[#00d4ff] rounded-full animate-pulse"></div>
                  </div>
                  <div className="w-32 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] mx-auto"></div>
                </div>
                
                <div className="max-w-5xl mx-auto">
                  <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      <div>
                        <blockquote className="text-3xl lg:text-4xl text-[#00ff88] font-bold italic mb-8 leading-tight">
                          "{t?.about?.quote || "Transforming vision into reality turning intent into results"}"
                        </blockquote>
                      </div>
                      <div>
                        <p className="text-lg text-gray-300 leading-relaxed">
                          {t?.about?.description || "Final-year Financial Technology student at the University of Economics and Law with a focus on product development, analytics, and evidence-based decision making. I design and deliver practical workshops on product discovery, user research, SQL, Python, dashboards, experiment evaluation, and product analytics. In cross-functional settings, I convert insights into clear product requirements, define success metrics, and run lean experiments that elevate user experience and business outcomes. Proficient in Python, SQL, and modern BI platforms, I build scalable templates and reporting systems that improve execution quality and velocity. I'm seeking a Data Analyst or Associate PM role in FinTech where I can translate data and customer insight into measurable product impact."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. EDUCATION Section */}
            <section id="education" className="mb-32 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/5 to-[#7c3aed]/5 rounded-3xl blur-3xl"></div>
              <div className="relative">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center space-x-3 mb-6">
                    <div className="w-3 h-3 bg-[#00d4ff] rounded-full animate-pulse"></div>
                    <h3 className="text-4xl lg:text-5xl font-black text-white tracking-tight">EDUCATION</h3>
                    <div className="w-3 h-3 bg-[#7c3aed] rounded-full animate-pulse"></div>
                  </div>
                  <div className="w-32 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] mx-auto"></div>
                </div>

                <div className="max-w-6xl mx-auto">
                  <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <h4 className="text-3xl font-bold text-white mb-4">{t?.education?.degree || "Bachelor of Financial Technology"}</h4>
                        <p className="text-[#00d4ff] font-semibold text-xl mb-6">{t?.education?.university || "University of Economics and Law (VNU-HCM)"}</p>
                        <div className="grid grid-cols-2 gap-6 mb-8">
                          <div className="bg-gradient-to-br from-[#00d4ff]/10 to-[#7c3aed]/10 rounded-2xl p-6 border border-[#00d4ff]/20">
                            <div className="text-2xl font-bold text-[#00d4ff] mb-2">{t?.education?.gpa || "3.0/4.0"}</div>
                            <div className="text-sm text-gray-400 uppercase tracking-wider">GPA</div>
                          </div>
                          <div className="bg-gradient-to-br from-[#00d4ff]/10 to-[#7c3aed]/10 rounded-2xl p-6 border border-[#00d4ff]/20">
                            <div className="text-2xl font-bold text-[#00d4ff] mb-2">{t?.education?.ielts || "6.0"}</div>
                            <div className="text-sm text-gray-400 uppercase tracking-wider">IELTS</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h5 className="text-xl font-bold text-white mb-6">Key Coursework</h5>
                        <div className="space-y-3">
                          {t?.education?.coursework?.slice(0, 8).map((course: string, index: number) => (
                            <div key={index} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-[#00d4ff] rounded-full"></div>
                              <span className="text-gray-300 text-sm">{course}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. SKILL Section */}
            <section id="skills" className="mb-32 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#7c3aed]/5 to-[#00ff88]/5 rounded-3xl blur-3xl"></div>
              <div className="relative">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center space-x-3 mb-6">
                    <div className="w-3 h-3 bg-[#7c3aed] rounded-full animate-pulse"></div>
                    <h3 className="text-4xl lg:text-5xl font-black text-white tracking-tight">SKILL</h3>
                    <div className="w-3 h-3 bg-[#00ff88] rounded-full animate-pulse"></div>
                  </div>
                  <div className="w-32 h-1 bg-gradient-to-r from-[#7c3aed] to-[#00ff88] mx-auto"></div>
                </div>

                <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {t?.skills?.categories?.map((category: any, index: number) => (
                      <div key={index} className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-[#7c3aed]/40 transition-all duration-500 shadow-2xl group">
                        <div className="flex items-center space-x-4 mb-8">
                          <div className="w-4 h-4 bg-[#7c3aed] rounded-full animate-pulse"></div>
                          <h4 className="text-2xl font-bold text-white">{category.name}</h4>
                        </div>
                        <div className="space-y-4">
                          {category.items?.map((skill: string, skillIndex: number) => (
                            <div key={skillIndex} className="flex items-center space-x-4 group-hover:translate-x-2 transition-transform duration-300">
                              <div className="w-2 h-2 bg-[#7c3aed] rounded-full"></div>
                              <span className="text-gray-300 font-medium">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 4. CERTIFICATIONS & AWARDS Section */}
            <section id="certifications" className="mb-32 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/5 to-[#00d4ff]/5 rounded-3xl blur-3xl"></div>
              <div className="relative">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center space-x-3 mb-6">
                    <div className="w-3 h-3 bg-[#00ff88] rounded-full animate-pulse"></div>
                    <h3 className="text-4xl lg:text-5xl font-black text-white tracking-tight">CERTIFICATIONS & AWARDS</h3>
                    <div className="w-3 h-3 bg-[#00d4ff] rounded-full animate-pulse"></div>
                  </div>
                  <div className="w-32 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] mx-auto"></div>
                </div>

                <div className="max-w-6xl mx-auto">
                  <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <h4 className="text-2xl font-bold text-white mb-6">Professional Certifications</h4>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-[#00ff88]/10 to-[#00d4ff]/10 rounded-2xl border border-[#00ff88]/20">
                            <div className="w-3 h-3 bg-[#00ff88] rounded-full"></div>
                            <span className="text-gray-300 font-medium">NVIDIA Deep Learning Institute Certificate</span>
                          </div>
                          <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-[#00d4ff]/10 to-[#7c3aed]/10 rounded-2xl border border-[#00d4ff]/20">
                            <div className="w-3 h-3 bg-[#00d4ff] rounded-full"></div>
                            <span className="text-gray-300 font-medium">Google Analytics Certified</span>
                          </div>
                          <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-[#7c3aed]/10 to-[#00ff88]/10 rounded-2xl border border-[#7c3aed]/20">
                            <div className="w-3 h-3 bg-[#7c3aed] rounded-full"></div>
                            <span className="text-gray-300 font-medium">AWS Cloud Practitioner</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <h4 className="text-2xl font-bold text-white mb-6">Awards & Recognition</h4>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-[#00ff88]/10 to-[#00d4ff]/10 rounded-2xl border border-[#00ff88]/20">
                            <div className="w-3 h-3 bg-[#00ff88] rounded-full"></div>
                            <span className="text-gray-300 font-medium">Best Data Analysis Project 2023</span>
                          </div>
                          <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-[#00d4ff]/10 to-[#7c3aed]/10 rounded-2xl border border-[#00d4ff]/20">
                            <div className="w-3 h-3 bg-[#00d4ff] rounded-full"></div>
                            <span className="text-gray-300 font-medium">Outstanding Student Award</span>
                          </div>
                          <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-[#7c3aed]/10 to-[#00ff88]/10 rounded-2xl border border-[#7c3aed]/20">
                            <div className="w-3 h-3 bg-[#7c3aed] rounded-full"></div>
                            <span className="text-gray-300 font-medium">Innovation in FinTech</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. WORKING EXPERIENCE Section */}
            <section id="experience" className="mb-32 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/5 to-[#7c3aed]/5 rounded-3xl blur-3xl"></div>
              <div className="relative">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center space-x-3 mb-6">
                    <div className="w-3 h-3 bg-[#00d4ff] rounded-full animate-pulse"></div>
                    <h3 className="text-4xl lg:text-5xl font-black text-white tracking-tight">WORKING EXPERIENCE</h3>
                    <div className="w-3 h-3 bg-[#7c3aed] rounded-full animate-pulse"></div>
                  </div>
                  <div className="w-32 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] mx-auto"></div>
                </div>

                <div className="max-w-6xl mx-auto">
                  <div className="space-y-8">
                    {t?.experience?.maybank && (
                      <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-[#00d4ff]/40 transition-all duration-500 shadow-2xl group">
                        <div className="flex items-start justify-between mb-8">
                          <div>
                            <h4 className="text-3xl font-bold text-white mb-3">{t.experience.maybank.position}</h4>
                            <p className="text-[#00d4ff] font-semibold text-xl">{t.experience.maybank.company}</p>
                          </div>
                          <span className="text-gray-400 text-sm bg-gray-800/50 px-6 py-3 rounded-full border border-white/10">{t.experience.maybank.period}</span>
                        </div>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">{t.experience.maybank.department}</p>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div>
                            <h5 className="text-lg font-bold text-white mb-4">Key Achievements</h5>
                            <ul className="space-y-3">
                              {t.experience.maybank.achievements?.slice(0, 3).map((achievement: string, achievementIndex: number) => (
                                <li key={achievementIndex} className="flex items-start space-x-3">
                                  <div className="w-2 h-2 bg-[#00d4ff] rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-gray-300">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-lg font-bold text-white mb-4">Technologies Used</h5>
                            <div className="flex flex-wrap gap-2">
                              {['Python', 'SQL', 'Tableau', 'Power BI', 'Excel'].map((tech, techIndex) => (
                                <span key={techIndex} className="px-3 py-1 bg-[#00d4ff]/20 text-[#00d4ff] text-sm rounded-full border border-[#00d4ff]/30">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* 6. PROJECT Section */}
            <section id="projects" className="mb-32 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#7c3aed]/5 to-[#00ff88]/5 rounded-3xl blur-3xl"></div>
              <div className="relative">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center space-x-3 mb-6">
                    <div className="w-3 h-3 bg-[#7c3aed] rounded-full animate-pulse"></div>
                    <h3 className="text-4xl lg:text-5xl font-black text-white tracking-tight">PROJECT</h3>
                    <div className="w-3 h-3 bg-[#00ff88] rounded-full animate-pulse"></div>
                  </div>
                  <div className="w-32 h-1 bg-gradient-to-r from-[#7c3aed] to-[#00ff88] mx-auto"></div>
                </div>

                <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {t?.projects?.items?.map((project: any, index: number) => (
                      <div key={index} className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden hover:border-[#7c3aed]/40 transition-all duration-500 shadow-2xl group">
                        <div className="aspect-video bg-gradient-to-br from-[#7c3aed]/20 to-[#00ff88]/20 flex items-center justify-center relative overflow-hidden">
                          <div className="text-6xl opacity-30 group-hover:scale-110 transition-transform duration-500">📊</div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="p-8">
                          <h4 className="text-2xl font-bold text-white mb-3">{project.title}</h4>
                          <p className="text-gray-400 text-sm mb-4 uppercase tracking-wider">{project.category}</p>
                          <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies?.map((tech: string, techIndex: number) => (
                              <span key={techIndex} className="px-3 py-1 bg-[#7c3aed]/20 text-[#7c3aed] text-xs rounded-full border border-[#7c3aed]/30">
                                {tech}
                              </span>
                            ))}
                          </div>
                          <button className="w-full py-3 bg-gradient-to-r from-[#7c3aed] to-[#00ff88] text-black font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg">
                            View Project
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  )
}