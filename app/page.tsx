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
            <section className="mb-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Column - Professional Image */}
                <div className="order-2 lg:order-1">
                  <div className="relative group">
                    {/* Tech Grid Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/5 to-[#00d4ff]/5 rounded-3xl blur-3xl"></div>
                    <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-2">
                      <div className="relative overflow-hidden rounded-2xl">
                        <img 
                          src="/Profilepicture.jpg" 
                          alt="LE NAM TUYEN" 
                          className="w-full h-[500px] object-cover transition-all duration-700 group-hover:scale-105"
                        />
                        {/* Tech Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        {/* Status Indicator */}
                        <div className="absolute top-4 right-4 w-3 h-3 bg-[#00ff88] rounded-full animate-pulse shadow-lg shadow-[#00ff88]/50"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Professional Content */}
                <div className="order-1 lg:order-2">
                  <div className="space-y-8">
                    {/* Greeting */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse"></div>
                        <span className="text-[#00ff88] text-sm font-mono tracking-wider uppercase">Available for opportunities</span>
                      </div>
                      
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

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                        <div className="text-2xl font-bold text-[#00ff88] mb-2">3+</div>
                        <div className="text-sm text-gray-400 uppercase tracking-wider">Years Experience</div>
                      </div>
                      <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                        <div className="text-2xl font-bold text-[#00d4ff] mb-2">15+</div>
                        <div className="text-sm text-gray-400 uppercase tracking-wider">Projects Completed</div>
                      </div>
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

            {/* About Section */}
            <section className="mb-32">
              <div className="text-center mb-16">
                <h3 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
                  {t?.about?.label || "PROFESSIONAL PROFILE"}
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] mx-auto mb-8"></div>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
                  <blockquote className="text-2xl lg:text-3xl text-[#00ff88] font-bold italic mb-8 text-center">
                    "{t?.about?.quote || "Transforming vision into reality turning intent into results"}"
                  </blockquote>
                  <p className="text-lg text-gray-300 leading-relaxed text-center">
                    {t?.about?.description || "Final-year Financial Technology student at the University of Economics and Law with a focus on product development, analytics, and evidence-based decision making. I design and deliver practical workshops on product discovery, user research, SQL, Python, dashboards, experiment evaluation, and product analytics. In cross-functional settings, I convert insights into clear product requirements, define success metrics, and run lean experiments that elevate user experience and business outcomes. Proficient in Python, SQL, and modern BI platforms, I build scalable templates and reporting systems that improve execution quality and velocity. I'm seeking a Data Analyst or Associate PM role in FinTech where I can translate data and customer insight into measurable product impact."}
                  </p>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section className="mb-32">
              <div className="text-center mb-16">
                <h3 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
                  {t?.skills?.title || "TECHNICAL EXPERTISE"}
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {t?.skills?.categories?.map((category: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#00d4ff]/40 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-3 h-3 bg-[#00d4ff] rounded-full"></div>
                      <h4 className="text-xl font-bold text-white">{category.name}</h4>
                    </div>
                    <div className="space-y-3">
                      {category.items?.map((skill: string, skillIndex: number) => (
                        <div key={skillIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#00d4ff] rounded-full"></div>
                          <span className="text-gray-300">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Experience Section */}
            <section className="mb-32">
              <div className="text-center mb-16">
                <h3 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
                  {t?.experience?.title || "PROFESSIONAL EXPERIENCE"}
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-[#7c3aed] to-[#00ff88] mx-auto"></div>
              </div>

              <div className="space-y-8">
                {t?.experience?.items?.map((item: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#7c3aed]/40 transition-all duration-300">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-2">{item.title}</h4>
                        <p className="text-[#7c3aed] font-semibold text-lg">{item.company}</p>
                      </div>
                      <span className="text-gray-400 text-sm bg-gray-800/50 px-4 py-2 rounded-full">{item.period}</span>
                    </div>
                    <p className="text-gray-300 mb-6">{item.description}</p>
                    <ul className="space-y-3">
                      {item.achievements?.map((achievement: string, achievementIndex: number) => (
                        <li key={achievementIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-[#7c3aed] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects Section */}
            <section className="mb-32">
              <div className="text-center mb-16">
                <h3 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
                  {t?.projects?.title || "FEATURED PROJECTS"}
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-[#00ff88] to-[#7c3aed] mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {t?.projects?.items?.map((project: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-[#00ff88]/40 transition-all duration-300 group">
                    <div className="aspect-video bg-gradient-to-br from-[#00ff88]/10 to-[#7c3aed]/10 flex items-center justify-center">
                      <div className="text-4xl opacity-50">📊</div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                      <p className="text-gray-400 text-sm mb-4">{project.category}</p>
                      <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies?.map((tech: string, techIndex: number) => (
                          <span key={techIndex} className="px-3 py-1 bg-[#00ff88]/20 text-[#00ff88] text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section className="mb-32">
              <div className="text-center mb-16">
                <h3 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
                  {t?.education?.title || "ACADEMIC EXCELLENCE"}
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] mx-auto"></div>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-4">{t?.education?.degree || "Bachelor of Financial Technology"}</h4>
                      <p className="text-[#00d4ff] font-semibold text-lg mb-2">{t?.education?.university || "University of Economics and Law (VNU-HCM)"}</p>
                      <div className="space-y-2">
                        <p className="text-gray-300">GPA: <span className="text-[#00ff88] font-semibold">{t?.education?.gpa || "3.0/4.0"}</span></p>
                        <p className="text-gray-300">IELTS: <span className="text-[#00ff88] font-semibold">{t?.education?.ielts || "6.0"}</span></p>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-white mb-4">Key Coursework</h5>
                      <div className="grid grid-cols-2 gap-2">
                        {t?.education?.coursework?.slice(0, 6).map((course: string, index: number) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full"></div>
                            <span className="text-gray-300 text-sm">{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>
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