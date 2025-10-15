"use client"

import React, { useState, useEffect } from "react"
import { translations } from "./data/translations"
import UniverseBackground from "./components/UniverseBackground"
import Sidebar from "./components/Sidebar"
import PageSwitcher from "./components/PageSwitcher"
import ScrollToTopButton from "./components/ScrollToTopButton"

export default function Portfolio() {
  const [language, setLanguage] = useState("en")
  const [activeSection, setActiveSection] = useState("about")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true)
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)

  const t = translations[language as keyof typeof translations]

  if (!mounted) {
    return null
  }

  // Function to scroll to projects section
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen text-white relative overflow-hidden" suppressHydrationWarning>
      <UniverseBackground />

      <PageSwitcher translations={t} language={language} isSidebarCollapsed={isSidebarCollapsed} />

      <Sidebar
        translations={t}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        language={language}
        onLanguageChange={setLanguage}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={setIsSidebarCollapsed}
        isPersonalPage={false}
      />

      <div className="relative z-10 transition-all duration-500">
        <div className={`min-h-screen transition-all duration-500 ${
          isSidebarCollapsed ? 'ml-0' : 'ml-0 lg:ml-64'
        }`}>
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-20">
            
            {/* Hero Section - Tech Minimal Style */}
            <section id="home" className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32 mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
                {/* Left Column - Professional Image */}
                <div className="order-2 lg:order-1">
                    <div className="relative group">
                    {/* Tech Grid Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/5 to-[#00d4ff]/5 rounded-2xl sm:rounded-3xl blur-3xl"></div>
                    <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-1 sm:p-2">
                      {/* Fixed Aspect Ratio Container */}
                      <div className="relative w-full aspect-[4/5] max-w-xs sm:max-w-sm mx-auto lg:max-w-none overflow-hidden rounded-xl sm:rounded-2xl">
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
                  <div className="order-1 lg:order-2 text-center lg:text-left">
                   <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12">
                     {/* Greeting */}
                     <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-7">
                       
                       <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 tracking-tight leading-tight vietnamese-text">
                         {t?.hero?.greeting || "HI, I AM"}
                        </h1>
                       <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-transparent bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-7 tracking-tight leading-tight vietnamese-text gradient-text">
                         {t?.hero?.name || "LE NAM TUYEN"}
                       </h2>
                       <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-300 font-medium leading-relaxed mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8">
                         {t?.hero?.title || "ASPIRING PRODUCT MANAGER & DATA ANALYST IN FINTECH"}
                        </p>
                      </div>


                      {/* Enhanced CTA Buttons */}
                     <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-5 justify-center lg:justify-start mt-4 sm:mt-6 md:mt-8 lg:mt-10">
                       <button className="px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black font-bold rounded-lg sm:rounded-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-[#00ff88]/25 text-xs sm:text-sm md:text-base touch-target group relative overflow-hidden active:scale-95">
                         <span className="relative z-10">{t?.buttons?.downloadResume || "Download Resume"}</span>
                         <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff] to-[#00ff88] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                        <button 
                         onClick={scrollToProjects}
                         className="px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 border border-white/20 text-white font-semibold rounded-lg sm:rounded-xl hover:bg-white/5 transition-all duration-300 text-xs sm:text-sm md:text-base touch-target group relative overflow-hidden active:scale-95"
                       >
                         <span className="relative z-10">{t?.buttons?.viewProjects || "View Projects"}</span>
                         <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                      </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Scroll Indicator */}
            <div className="flex justify-center mb-8 sm:mb-12 lg:mb-16">
              <div className="flex flex-col items-center space-y-2 animate-bounce">
                <span className="text-gray-400 text-xs sm:text-sm font-medium">{t?.scrollIndicator?.text || "Scroll to explore"}</span>
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
                </div>
                <svg className="w-4 h-4 text-gray-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>

            {/* 1. ABOUT ME Section */}
            <section id="about" className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/5 to-[#00d4ff]/5 rounded-2xl sm:rounded-3xl blur-3xl"></div>
              <div className="relative">
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">{t?.sections?.about || "ABOUT ME"}</h3>
                </div>
                <div className="w-16 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] mx-auto"></div>
                </div>
                
                <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                  <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl">
                    <div className="text-left">
                      <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#00ff88] font-bold italic mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-tight max-w-4xl text-center mx-auto">
                        {t?.about?.quote?.split('\n').map((line, index) => (
                          <div key={index} className="block">{line}</div>
                        ))}
                      </blockquote>
                        <div className="max-w-4xl mx-auto px-2 sm:px-4">
                          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-300 leading-relaxed sm:leading-loose text-left sm:text-justify tracking-wide sm:tracking-wider break-words hyphens-auto">
                            {t?.about?.description || "Final-year Financial Technology student at the University of Economics and Law with a focus on product development, analytics, and evidence-based decision making. I design and deliver practical workshops on product discovery, user research, SQL, Python, dashboards, experiment evaluation, and product analytics. In cross-functional settings, I convert insights into clear product requirements, define success metrics, and run lean experiments that elevate user experience and business outcomes. Proficient in Python, SQL, and modern BI platforms, I build scalable templates and reporting systems that improve execution quality and velocity. I'm seeking a Data Analyst or Associate PM role in FinTech where I can translate data and customer insight into measurable product impact."}
                  </p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. EDUCATION Section */}
            <section id="education" className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/5 to-[#7c3aed]/5 rounded-2xl sm:rounded-3xl blur-3xl"></div>
              <div className="relative">
                 <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                   <div className="mb-4 sm:mb-6">
                     <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">{t?.sections?.education || "EDUCATION"}</h3>
                   </div>
                   <div className="w-16 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] mx-auto"></div>
                </div>
                
                <div className="max-w-4xl mx-auto">
                  <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl">
                    {/* Responsive Education Card Layout */}
                    <div className="space-y-4 sm:space-y-6">
                      {/* Degree Information - Centered */}
                      <div className="text-center space-y-3 sm:space-y-4">
                        <div>
                          <h4 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-2 sm:mb-3 leading-tight">
                            <div className="block text-sm sm:text-base lg:text-lg text-gray-400 font-medium mb-2 sm:mb-3">{t?.labels?.bachelorOf || "Bachelor of"}</div>
                            <div className="block bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent font-black text-xl sm:text-2xl lg:text-3xl">{t?.labels?.financialTechnology || "Financial Technology"}</div>
                          </h4>
                          <p className="text-white/80 font-medium text-sm sm:text-base lg:text-lg mb-1">
                            {t?.education?.university || "University of Economics and Law (VNU-HCM)"}
                          </p>
                          <p className="text-gray-400 text-xs sm:text-sm">2022 - 2026</p>
                        </div>
                      </div>

                      {/* Academic Stats - Centered Grid */}
                      <div className="flex justify-center">
                        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                    <div className="text-center">
                            <div className="text-xl sm:text-2xl lg:text-3xl font-black text-[#00d4ff] mb-1">{t?.education?.gpa || "3.0"}</div>
                            <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider font-semibold">{t?.labels?.gpa || "GPA"}</div>
                    </div>
                    <div className="text-center">
                            <div className="text-xl sm:text-2xl lg:text-3xl font-black text-[#7c3aed] mb-1">{t?.education?.ielts || "6.0"}</div>
                            <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider font-semibold">{t?.labels?.ielts || "IELTS"}</div>
                          </div>
                        </div>
                      </div>

                      {/* Learn More Link - Centered */}
                      <div className="flex justify-center">
                        <a 
                          href="https://www.uel.edu.vn/ArticleId/098e3942-d9c0-4d71-9e45-1436ad2a6538/lich-su-hinh-thanh-va-phat-trien"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#00d4ff]/20 to-[#7c3aed]/20 border border-[#00d4ff]/30 text-[#00d4ff] font-semibold rounded-xl hover:from-[#00d4ff]/30 hover:to-[#7c3aed]/30 hover:border-[#00d4ff]/50 transition-all duration-300 group text-xs sm:text-sm"
                        >
                          <span>{t?.buttons?.moreInformation || "More information"}</span>
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. SKILL Section */}
            <section id="skills" className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#7c3aed]/5 to-[#00ff88]/5 rounded-2xl sm:rounded-3xl blur-3xl"></div>
              <div className="relative">
                 <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                   <div className="mb-4 sm:mb-6">
                     <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">{t?.sections?.skills || "SKILLS"}</h3>
                   </div>
                   <div className="w-16 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-[#7c3aed] to-[#00ff88] mx-auto"></div>
                 </div>

                <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
                    {t?.skills?.categories?.map((category: any, index: number) => (
                      <div key={index} className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 hover:border-[#7c3aed]/40 transition-all duration-500 shadow-2xl group">
                        <div className="mb-4 sm:mb-6">
                          <h4 className="text-lg sm:text-xl font-bold text-white">{category.name}</h4>
                        </div>
                        <div className="space-y-2 sm:space-y-3">
                          {category.items?.map((item: string, itemIndex: number) => (
                            <div key={itemIndex} className="flex items-center space-x-2 sm:space-x-3 group-hover:translate-x-2 transition-transform duration-300">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#7c3aed] rounded-full"></div>
                              <span className="text-gray-300 font-medium text-sm sm:text-base">{item}</span>
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
            <section id="certifications" className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/5 to-[#00d4ff]/5 rounded-2xl sm:rounded-3xl blur-3xl"></div>
              <div className="relative">
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">{t?.sections?.certifications || "CERTIFICATIONS & AWARDS"}</h3>
                  </div>
                  <div className="w-16 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] mx-auto"></div>
                </div>
                
                <div className="max-w-5xl mx-auto">
                  <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {/* Google Certificate */}
                  <div 
                    onClick={() => setSelectedCertificate('google')}
                        className="cursor-pointer p-4 sm:p-6 bg-gradient-to-r from-[#00ff88]/10 to-[#00d4ff]/10 rounded-xl sm:rounded-2xl border border-[#00ff88]/20 hover:border-[#00ff88]/40 hover:from-[#00ff88]/20 hover:to-[#00d4ff]/20 transition-all duration-300 group"
                      >
                        <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#00ff88] rounded-full animate-pulse"></div>
                          <h4 className="text-base sm:text-lg font-bold text-white">Google Certificate</h4>
                    </div>
                         <p className="text-gray-300 font-medium text-xs sm:text-sm leading-relaxed text-left">
                           Ask Questions to Make Data-Driven Decisions
                         </p>
                         <div className="mt-2 sm:mt-3 text-xs text-[#00ff88] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-left">
                           Click to view certificate
                    </div>
                  </div>

                  {/* NVIDIA Certificate */}
                  <div 
                    onClick={() => setSelectedCertificate('nvidia')}
                        className="cursor-pointer p-4 sm:p-6 bg-gradient-to-r from-[#00d4ff]/10 to-[#7c3aed]/10 rounded-xl sm:rounded-2xl border border-[#00d4ff]/20 hover:border-[#00d4ff]/40 hover:from-[#00d4ff]/20 hover:to-[#7c3aed]/20 transition-all duration-300 group"
                      >
                        <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#00d4ff] rounded-full animate-pulse"></div>
                          <h4 className="text-base sm:text-lg font-bold text-white">NVIDIA Certificate</h4>
                    </div>
                         <p className="text-gray-300 font-medium text-xs sm:text-sm leading-relaxed text-left">
                           Accelerating End-to-End Data Science Workflows
                         </p>
                         <div className="mt-2 sm:mt-3 text-xs text-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-left">
                           Click to view certificate
                    </div>
                  </div>

                  {/* Journal Article */}
                  <a 
                    href="https://ojs.omniscient.sg/index.php/gep/article/view/62858"
                    target="_blank"
                    rel="noopener noreferrer"
                        className="cursor-pointer p-4 sm:p-6 bg-gradient-to-r from-[#7c3aed]/10 to-[#00ff88]/10 rounded-xl sm:rounded-2xl border border-[#7c3aed]/20 hover:border-[#7c3aed]/40 hover:from-[#7c3aed]/20 hover:to-[#00ff88]/20 transition-all duration-300 group block"
                      >
                        <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#7c3aed] rounded-full animate-pulse"></div>
                          <h4 className="text-base sm:text-lg font-bold text-white">Journal Article</h4>
                        </div>
                         <p className="text-gray-300 font-medium text-xs sm:text-sm leading-relaxed text-left">
                           Public Debt and Economic Stability, the Moderating Effect of Governance: Evidence from SEA Countries
                         </p>
                         <div className="mt-2 sm:mt-3 text-xs text-[#7c3aed] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-left">
                           Click to view article
                         </div>
                      </a>
                    </div>
                    </div>
                </div>
              </div>
            </section>

            {/* 5. WORKING EXPERIENCE Section */}
            <section id="experience" className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/5 to-[#7c3aed]/5 rounded-3xl blur-3xl"></div>
              <div className="relative">
                 <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                   <div className="mb-4 sm:mb-6">
                     <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">{t?.sections?.experience || "WORKING EXPERIENCE"}</h3>
                   </div>
                   <div className="w-16 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] mx-auto"></div>
                </div>
                
                <div className="max-w-6xl mx-auto">
                  <div className="space-y-8">
                    {/* AGRIBANK Experience */}
                    <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover:border-[#00ff88]/40 transition-all duration-500 shadow-2xl group">
                      {/* Header with Logo */}
                      <div className="mb-6 sm:mb-8">
                      <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-lg sm:rounded-xl p-1.5 sm:p-2 shadow-lg flex-shrink-0">
                            <img 
                              src="/agribank logo.jpg" 
                              alt="AGRIBANK Logo" 
                              className="w-full h-full object-contain"
                            />
                          </div>
                        <div className="min-w-0 flex-1">
                            <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2 leading-tight">{t?.experience?.agribank?.position || "Credit Analyst Intern"}</h4>
                            <p className="text-[#00ff88] font-semibold text-sm sm:text-base md:text-lg lg:text-xl">{t?.experience?.agribank?.company || "AGRIBANK"}</p>
                          </div>
                        </div>
                        
                        {/* Modern Info Cards */}
                        <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                          <div className="bg-gradient-to-r from-[#00ff88]/20 to-[#00d4ff]/20 border border-[#00ff88]/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl">
                            <div className="flex items-center space-x-1.5 sm:space-x-2">
                              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <span className="text-white font-medium text-xs sm:text-sm">{t?.experience?.agribank?.period || "Mar 2025 – Jun 2025"}</span>
                            </div>
                          </div>
                          
                          <div className="bg-gradient-to-r from-[#00d4ff]/20 to-[#7c3aed]/20 border border-[#00d4ff]/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl">
                            <div className="flex items-center space-x-1.5 sm:space-x-2">
                              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span className="text-white font-medium text-xs sm:text-sm">{t?.experience?.agribank?.department || "Binh Trieu Branch (On-site)"}</span>
                            </div>
                          </div>
                        </div>

                         {/* Learn More Button */}
                         <div className="flex justify-start">
                           <a
                             href="https://www.agribank.com.vn/"
                             target="_blank"
                             rel="noopener noreferrer"
                             className="inline-flex items-center space-x-1.5 sm:space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#00ff88]/20 to-[#00d4ff]/20 border border-[#00ff88]/30 text-[#00ff88] font-semibold rounded-lg sm:rounded-xl hover:from-[#00ff88]/30 hover:to-[#00d4ff]/30 hover:border-[#00ff88]/50 transition-all duration-300 group text-xs sm:text-sm"
                           >
                             <span>{t?.buttons?.moreInformation || "More information"}</span>
                             <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                             </svg>
                           </a>
                        </div>
                      </div>

                      {/* Job Description - Responsive */}
                      <div className="mb-6 sm:mb-8">
                        <h5 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">{t?.buttons?.jobDescription || "Job Description"}</h5>
                        <div className="space-y-3 sm:space-y-4">
                        {t?.experience?.agribank?.achievements?.map((achievement: string, index: number) => (
                            <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#00ff88] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                              <span className="text-gray-300 leading-relaxed text-left text-xs sm:text-sm lg:text-base">
                                {achievement}
                              </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                    {/* Maybank Experience */}
                    <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover:border-[#00d4ff]/40 transition-all duration-500 shadow-2xl group">
                      {/* Header with Logo */}
                      <div className="mb-6 sm:mb-8">
                      <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-lg sm:rounded-xl p-1.5 sm:p-2 shadow-lg flex-shrink-0">
                            <img 
                              src="/Maybank logo.png" 
                              alt="Maybank Logo" 
                              className="w-full h-full object-contain"
                            />
                          </div>
                        <div className="min-w-0 flex-1">
                            <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2 leading-tight">{t?.experience?.maybank?.position || "Broker Intern"}</h4>
                            <p className="text-[#00d4ff] font-semibold text-sm sm:text-base md:text-lg lg:text-xl">{t?.experience?.maybank?.company || "Maybank Investment Bank Vietnam"}</p>
                          </div>
                        </div>
                        
                        {/* Modern Info Cards */}
                        <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                          <div className="bg-gradient-to-r from-[#00d4ff]/20 to-[#7c3aed]/20 border border-[#00d4ff]/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl">
                            <div className="flex items-center space-x-1.5 sm:space-x-2">
                              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <span className="text-white font-medium text-xs sm:text-sm">{t?.experience?.maybank?.period || "Jun 2024 – Dec 2024"}</span>
                            </div>
                          </div>
                          
                          <div className="bg-gradient-to-r from-[#7c3aed]/20 to-[#00ff88]/20 border border-[#7c3aed]/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl">
                            <div className="flex items-center space-x-1.5 sm:space-x-2">
                              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span className="text-white font-medium text-xs sm:text-sm">{t?.experience?.maybank?.department || "Phu Nhuan Branch (On-site)"}</span>
                            </div>
                          </div>
                        </div>

                         {/* Learn More Button */}
                         <div className="flex justify-start">
                           <a
                             href="https://www.linkedin.com/company/mibv/"
                             target="_blank"
                             rel="noopener noreferrer"
                             className="inline-flex items-center space-x-1.5 sm:space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#00d4ff]/20 to-[#7c3aed]/20 border border-[#00d4ff]/30 text-[#00d4ff] font-semibold rounded-lg sm:rounded-xl hover:from-[#00d4ff]/30 hover:to-[#7c3aed]/30 hover:border-[#00d4ff]/50 transition-all duration-300 group text-xs sm:text-sm"
                           >
                             <span>{t?.buttons?.moreInformation || "More information"}</span>
                             <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                             </svg>
                           </a>
                        </div>
                      </div>

                      {/* Job Description - Responsive */}
                      <div className="mb-6 sm:mb-8">
                        <h5 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">{t?.buttons?.jobDescription || "Job Description"}</h5>
                        <div className="space-y-3 sm:space-y-4">
                        {t?.experience?.maybank?.achievements?.map((achievement: string, index: number) => (
                            <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#00d4ff] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                              <span className="text-gray-300 leading-relaxed text-left text-xs sm:text-sm lg:text-base">
                                {achievement}
                              </span>
                            </div>
                        ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. PROJECT Section */}
            <section id="projects" className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#7c3aed]/5 to-[#00ff88]/5 rounded-3xl blur-3xl"></div>
              <div className="relative">
                 <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                   <div className="mb-4 sm:mb-6">
                     <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">{t?.sections?.projects || "PROJECT"}</h3>
                   </div>
                   <div className="w-16 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-[#7c3aed] to-[#00ff88] mx-auto"></div>
                </div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                  {t?.projects?.items?.map((project: any, index: number) => (
                      <div key={index} className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden hover:border-[#7c3aed]/40 transition-all duration-500 shadow-2xl group flex flex-col">
                      <div className="aspect-video bg-gradient-to-br from-[#7c3aed]/20 to-[#00ff88]/20 flex items-center justify-center relative overflow-hidden">
                        {project.image?.endsWith('.mp4') ? (
                          <video 
                            className="w-full h-full object-cover"
                            controls
                            preload="metadata"
                          >
                            <source src={project.image} type="video/mp4" />
                              Your browser does not support the video tag.
                          </video>
                        ) : project.image?.endsWith('.PNG') || project.image?.endsWith('.png') || project.image?.endsWith('.jpg') || project.image?.endsWith('.jpeg') ? (
                          <img 
                            src={project.image} 
                            alt={project.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                            <>
                              <div className="text-6xl opacity-30 group-hover:scale-110 transition-transform duration-500">📊</div>
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </>
                        )}
                      </div>
                         <div className="p-4 sm:p-6 lg:p-8 flex flex-col flex-grow">
                           <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 text-left leading-tight">{project.name}</h4>
                        {project.period && (
                             <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 uppercase tracking-wider text-left">{project.period}</p>
                        )}
                           <div className="flex-grow">
                          {Array.isArray(project.description) ? (
                               <ul className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-left tracking-wide space-y-1 sm:space-y-2">
                                 {project.description.map((item: string, descIndex: number) => (
                                   <li key={descIndex} className="flex items-start">
                                     <span className="text-[#00d4ff] mr-2 sm:mr-3 lg:mr-4 mt-1 text-sm sm:text-base lg:text-lg font-bold animate-pulse drop-shadow-lg flex-shrink-0">●</span>
                                     <span className="text-xs sm:text-sm lg:text-base leading-relaxed">{item}</span>
                                   </li>
                                 ))}
                               </ul>
                             ) : (
                               <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-left tracking-wide text-xs sm:text-sm lg:text-base">{project.description}</p>
                          )}
                        </div>
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                             className="w-full py-2 sm:py-3 bg-gradient-to-r from-[#7c3aed] to-[#00ff88] text-black font-bold rounded-lg sm:rounded-xl hover:scale-105 transition-all duration-300 shadow-lg block text-center mt-auto text-sm sm:text-base"
                        >
                             {t?.buttons?.viewProject || "View Project"}
                        </a>
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

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            {/* Close Button */}
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg"
            >
              <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Certificate Image */}
            <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={selectedCertificate === 'google' ? '/ask-question-to-make-data-driven.PNG' : '/Certificate NVIDIA.PNG'}
                alt={selectedCertificate === 'google' ? 'Google Certificate' : 'NVIDIA Certificate'}
                className="w-full h-auto max-h-[85vh] object-contain"
              />
            </div>
          </div>
        </div>
        )}

        <ScrollToTopButton />
      </div>
    )
  }