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
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)

  const t = translations[language as keyof typeof translations]

  // Function to scroll to projects section
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

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
                      <button 
                        onClick={scrollToProjects}
                        className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition-all duration-300"
                      >
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
                <div className="text-center mb-6">
                  <h3 className="text-4xl lg:text-5xl font-black text-white tracking-tight">ABOUT ME</h3>
                </div>
                  <div className="w-32 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] mx-auto"></div>
                </div>
                
                <div className="max-w-6xl mx-auto">
                  <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl">
                    <div className="text-center">
                      <blockquote className="text-3xl lg:text-4xl text-[#00ff88] font-bold italic mb-12 leading-tight max-w-4xl mx-auto">
                        <div className="block">"Transforming vision into reality</div>
                        <div className="block">turning intent into results"</div>
                      </blockquote>
                      <div className="max-w-5xl mx-auto">
                        <p className="text-lg text-gray-300 leading-relaxed text-justify">
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
                  <div className="text-center mb-6">
                    <h3 className="text-4xl lg:text-5xl font-black text-white tracking-tight">EDUCATION</h3>
                  </div>
                  <div className="w-32 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] mx-auto"></div>
                </div>

                <div className="max-w-5xl mx-auto">
                  <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-white/20 rounded-3xl p-8 lg:p-12 shadow-2xl">
                    {/* Modern Education Card Layout */}
                    <div className="flex flex-col lg:flex-row gap-8 items-center">
                      {/* Left Side - Degree Info */}
                      <div className="flex-1 space-y-6">
                        <div className="text-center lg:text-left">
                          <h4 className="text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">
                            <div className="block">Bachelor of</div>
                            <div className="block">Financial Technology</div>
                          </h4>
                          <p className="text-[#00d4ff] font-bold text-lg lg:text-xl mb-2">
                            {t?.education?.university || "University of Economics and Law (VNU-HCM)"}
                          </p>
                          <p className="text-gray-400 text-base">2021 - 2026</p>
                        </div>
                      </div>

                      {/* Right Side - Stats & Link */}
                      <div className="flex flex-col lg:flex-row gap-6 lg:items-center">
                        {/* Academic Stats */}
                        <div className="flex gap-6">
                          <div className="text-center">
                            <div className="text-2xl lg:text-3xl font-black text-[#00d4ff] mb-1">{t?.education?.gpa || "3.0"}</div>
                            <div className="text-xs lg:text-sm text-gray-400 uppercase tracking-wider font-semibold">GPA</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl lg:text-3xl font-black text-[#7c3aed] mb-1">{t?.education?.ielts || "6.0"}</div>
                            <div className="text-xs lg:text-sm text-gray-400 uppercase tracking-wider font-semibold">IELTS</div>
                          </div>
                        </div>

                        {/* Learn More Link */}
                        <div className="flex justify-center lg:justify-end">
                          <a 
                            href="https://www.uel.edu.vn/ArticleId/098e3942-d9c0-4d71-9e45-1436ad2a6538/lich-su-hinh-thanh-va-phat-trien"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 px-4 py-2 lg:px-6 lg:py-3 bg-gradient-to-r from-[#00d4ff]/20 to-[#7c3aed]/20 border border-[#00d4ff]/30 text-[#00d4ff] font-semibold rounded-xl hover:from-[#00d4ff]/30 hover:to-[#7c3aed]/30 hover:border-[#00d4ff]/50 transition-all duration-300 group text-sm lg:text-base"
                          >
                            <span>Xem thêm thông tin</span>
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
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
                  <div className="text-center mb-6">
                    <h3 className="text-4xl lg:text-5xl font-black text-white tracking-tight">SKILLS</h3>
                  </div>
                  <div className="w-32 h-1 bg-gradient-to-r from-[#7c3aed] to-[#00ff88] mx-auto"></div>
                </div>

                <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Programming Languages */}
                    <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-white/20 rounded-3xl p-6 hover:border-[#7c3aed]/40 transition-all duration-500 shadow-2xl group">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-4 h-4 bg-[#7c3aed] rounded-full animate-pulse"></div>
                        <h4 className="text-xl font-bold text-white">Programming Languages</h4>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform duration-300">
                          <div className="w-2 h-2 bg-[#7c3aed] rounded-full"></div>
                          <span className="text-gray-300 font-medium">Python</span>
                        </div>
                        <div className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform duration-300">
                          <div className="w-2 h-2 bg-[#7c3aed] rounded-full"></div>
                          <span className="text-gray-300 font-medium">SQL</span>
                        </div>
                        <div className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform duration-300">
                          <div className="w-2 h-2 bg-[#7c3aed] rounded-full"></div>
                          <span className="text-gray-300 font-medium">R</span>
                        </div>
                      </div>
                    </div>

                    {/* Data Tools */}
                    <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-white/20 rounded-3xl p-6 hover:border-[#7c3aed]/40 transition-all duration-500 shadow-2xl group">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-4 h-4 bg-[#7c3aed] rounded-full animate-pulse"></div>
                        <h4 className="text-xl font-bold text-white">Data Tools</h4>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform duration-300">
                          <div className="w-2 h-2 bg-[#7c3aed] rounded-full"></div>
                          <span className="text-gray-300 font-medium">Power BI</span>
                        </div>
                        <div className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform duration-300">
                          <div className="w-2 h-2 bg-[#7c3aed] rounded-full"></div>
                          <span className="text-gray-300 font-medium">Tableau</span>
                        </div>
                        <div className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform duration-300">
                          <div className="w-2 h-2 bg-[#7c3aed] rounded-full"></div>
                          <span className="text-gray-300 font-medium">Excel</span>
                        </div>
                      </div>
                    </div>

                    {/* Product Management */}
                    <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-white/20 rounded-3xl p-6 hover:border-[#7c3aed]/40 transition-all duration-500 shadow-2xl group">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-4 h-4 bg-[#7c3aed] rounded-full animate-pulse"></div>
                        <h4 className="text-xl font-bold text-white">Product Management</h4>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform duration-300">
                          <div className="w-2 h-2 bg-[#7c3aed] rounded-full"></div>
                          <span className="text-gray-300 font-medium">User Research</span>
                        </div>
                        <div className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform duration-300">
                          <div className="w-2 h-2 bg-[#7c3aed] rounded-full"></div>
                          <span className="text-gray-300 font-medium">Product Discovery</span>
                        </div>
                        <div className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform duration-300">
                          <div className="w-2 h-2 bg-[#7c3aed] rounded-full"></div>
                          <span className="text-gray-300 font-medium">Analytics</span>
                        </div>
                      </div>
                    </div>

                    {/* Database & Cloud */}
                    <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-white/20 rounded-3xl p-6 hover:border-[#7c3aed]/40 transition-all duration-500 shadow-2xl group">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-4 h-4 bg-[#7c3aed] rounded-full animate-pulse"></div>
                        <h4 className="text-xl font-bold text-white">Database & Cloud</h4>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform duration-300">
                          <div className="w-2 h-2 bg-[#7c3aed] rounded-full"></div>
                          <span className="text-gray-300 font-medium">MySQL</span>
                        </div>
                        <div className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform duration-300">
                          <div className="w-2 h-2 bg-[#7c3aed] rounded-full"></div>
                          <span className="text-gray-300 font-medium">PostgreSQL</span>
                        </div>
                        <div className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform duration-300">
                          <div className="w-2 h-2 bg-[#7c3aed] rounded-full"></div>
                          <span className="text-gray-300 font-medium">MongoDB</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. CERTIFICATIONS & AWARDS Section */}
            <section id="certifications" className="mb-32 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/5 to-[#00d4ff]/5 rounded-3xl blur-3xl"></div>
              <div className="relative">
                <div className="text-center mb-16">
                  <div className="text-center mb-6">
                    <h3 className="text-4xl lg:text-5xl font-black text-white tracking-tight">CERTIFICATIONS & AWARDS</h3>
                  </div>
                  <div className="w-32 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] mx-auto"></div>
                </div>

                <div className="max-w-5xl mx-auto">
                  <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Google Certificate */}
                      <div 
                        onClick={() => setSelectedCertificate('google')}
                        className="cursor-pointer p-6 bg-gradient-to-r from-[#00ff88]/10 to-[#00d4ff]/10 rounded-2xl border border-[#00ff88]/20 hover:border-[#00ff88]/40 hover:from-[#00ff88]/20 hover:to-[#00d4ff]/20 transition-all duration-300 group"
                      >
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-4 h-4 bg-[#00ff88] rounded-full animate-pulse"></div>
                          <h4 className="text-lg font-bold text-white">Google Certificate</h4>
                        </div>
                        <p className="text-gray-300 font-medium text-sm leading-relaxed">
                          Ask Questions to Make Data-Driven Decisions
                        </p>
                        <div className="mt-3 text-xs text-[#00ff88] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Click to view certificate
                        </div>
                      </div>

                      {/* NVIDIA Certificate */}
                      <div 
                        onClick={() => setSelectedCertificate('nvidia')}
                        className="cursor-pointer p-6 bg-gradient-to-r from-[#00d4ff]/10 to-[#7c3aed]/10 rounded-2xl border border-[#00d4ff]/20 hover:border-[#00d4ff]/40 hover:from-[#00d4ff]/20 hover:to-[#7c3aed]/20 transition-all duration-300 group"
                      >
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-4 h-4 bg-[#00d4ff] rounded-full animate-pulse"></div>
                          <h4 className="text-lg font-bold text-white">NVIDIA Certificate</h4>
                        </div>
                        <p className="text-gray-300 font-medium text-sm leading-relaxed">
                          Accelerating End-to-End Data Science Workflows
                        </p>
                        <div className="mt-3 text-xs text-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Click to view certificate
                        </div>
                      </div>

                      {/* Journal Article */}
                      <a 
                        href="https://ojs.omniscient.sg/index.php/gep/article/view/62858"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer p-6 bg-gradient-to-r from-[#7c3aed]/10 to-[#00ff88]/10 rounded-2xl border border-[#7c3aed]/20 hover:border-[#7c3aed]/40 hover:from-[#7c3aed]/20 hover:to-[#00ff88]/20 transition-all duration-300 group block"
                      >
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-4 h-4 bg-[#7c3aed] rounded-full animate-pulse"></div>
                          <h4 className="text-lg font-bold text-white">Journal Article</h4>
                        </div>
                        <p className="text-gray-300 font-medium text-sm leading-relaxed">
                          Public Debt and Economic Stability, the Moderating Effect of Governance: Evidence from SEA Countries
                        </p>
                        <div className="mt-3 text-xs text-[#7c3aed] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Click to view article
                        </div>
                      </a>
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
                  <div className="text-center mb-6">
                    <h3 className="text-4xl lg:text-5xl font-black text-white tracking-tight">WORKING EXPERIENCE</h3>
                  </div>
                  <div className="w-32 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] mx-auto"></div>
                </div>

                <div className="max-w-5xl mx-auto">
                  <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-[#00d4ff]/40 transition-all duration-500 shadow-2xl group">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-8">
                      <div>
                        <h4 className="text-3xl font-bold text-white mb-3">Broker Intern</h4>
                        <p className="text-[#00d4ff] font-semibold text-xl">Maybank Investment Bank Vietnam</p>
                      </div>
                      <div className="text-right">
                        <div className="text-gray-400 text-sm bg-gray-800/50 px-4 py-2 rounded-full border border-white/10 mb-2">
                          Jun 2024 – Dec 2024
                        </div>
                        <div className="text-gray-300 text-sm">
                          Phu Nhuan Branch (On-site)
                        </div>
                      </div>
                    </div>

                    {/* Job Description */}
                    <div className="mb-8">
                      <h5 className="text-xl font-bold text-white mb-6">Job Description</h5>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-[#00d4ff] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 leading-relaxed">
                            Applied data-driven market analysis to clean, visualize, and interpret trading data for listed tickers.
                          </span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-[#00d4ff] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 leading-relaxed">
                            Performed financial analysis and equity valuation; prepared concise investment briefs to support trade ideas.
                          </span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-[#00d4ff] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 leading-relaxed">
                            Authored daily/weekly market reports for the Senior Broker to inform client outreach and portfolio actions.
                          </span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-[#00d4ff] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 leading-relaxed">
                            Supported client development by screening prospects, assembling pitch materials, and monitoring portfolios.
                          </span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-[#00d4ff] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 leading-relaxed">
                            Built an automated stock-advisory chatbot that aggregated daily news and surfaced ticker-level insights, improving team efficiency and responsiveness.
                          </span>
                        </div>
                      </div>
                    </div>
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

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            {/* Close Button */}
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute -top-4 -right-4 z-10 w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Certificate Image */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={selectedCertificate === 'google' ? '/ask-question-to-make-data-driven.PNG' : '/Certificate NVIDIA.PNG'}
                alt={selectedCertificate === 'google' ? 'Google Certificate' : 'NVIDIA Certificate'}
                className="w-full h-auto max-h-[85vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}