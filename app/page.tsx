"use client"

import { useState, useEffect } from "react"
import { translations } from "./data/translations"
import UniverseBackground from "./components/UniverseBackground"
import Sidebar from "./components/Sidebar"

export default function Portfolio() {
  const [language, setLanguage] = useState("en")
  const [activeSection, setActiveSection] = useState("professional")
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
          isSidebarCollapsed ? 'ml-0' : 'ml-0 lg:ml-64'
        }`}>
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-20">
            
            {/* Hero Section - Modern Design */}
            <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-[#00ff88]/10 to-[#00d4ff]/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#7c3aed]/10 to-[#00ff88]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#00d4ff]/5 to-[#7c3aed]/5 rounded-full blur-2xl animate-pulse delay-500"></div>
              </div>

              <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  
                  {/* Left Column - Content */}
                  <div className="text-center lg:text-left space-y-6 sm:space-y-8">
                    {/* Greeting Badge */}
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#00ff88]/20 to-[#00d4ff]/20 border border-[#00ff88]/30 rounded-full backdrop-blur-sm">
                      <div className="w-2 h-2 bg-[#00ff88] rounded-full mr-3 animate-pulse"></div>
                      <span className="text-sm font-medium text-[#00ff88]">
                        {language === 'vi' ? 'Sẵn sàng cho cơ hội mới' : 'Available for opportunities'}
                      </span>
                    </div>

                    {/* Main Heading */}
                    <div className="space-y-4 sm:space-y-6">
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight">
                        <span className="block text-gray-300 text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-4">
                          {t?.hero?.greeting || "HI, I AM"}
                        </span>
                        <span className="block bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent">
                          {t?.hero?.name || "LE NAM TUYEN"}
                        </span>
                      </h1>
                      
                      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                        {t?.hero?.title || "ASPIRING PRODUCT MANAGER & DATA ANALYST IN FINTECH"}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                      {language === 'vi' 
                        ? 'Chuyên gia phân tích dữ liệu và quản lý sản phẩm với kinh nghiệm trong lĩnh vực FinTech, tập trung vào việc chuyển đổi dữ liệu thành insights có giá trị.'
                        : 'Data analysis and product management specialist with FinTech experience, focused on transforming data into valuable insights.'
                      }
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start pt-4">
                      <button className="group relative px-8 py-4 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-[#00ff88]/25 overflow-hidden">
                        <span className="relative z-10 flex items-center justify-center">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          {t?.buttons?.downloadResume || "Download Resume"}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                      
                      <button 
                        onClick={scrollToProjects}
                        className="group px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
                      >
                        <span className="flex items-center justify-center">
                          <svg className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                          {t?.buttons?.viewProjects || "View Projects"}
                        </span>
                      </button>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center lg:justify-start space-x-6 pt-4">
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-[#00ff88]/50 transition-all duration-300">
                        <svg className="w-6 h-6 text-gray-400 group-hover:text-[#00ff88] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-[#00ff88]/50 transition-all duration-300">
                        <svg className="w-6 h-6 text-gray-400 group-hover:text-[#00ff88] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      <a href="mailto:contact@example.com" className="group p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-[#00ff88]/50 transition-all duration-300">
                        <svg className="w-6 h-6 text-gray-400 group-hover:text-[#00ff88] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Right Column - Professional Image */}
                  <div className="relative">
                    <div className="relative group">
                      {/* Floating Elements */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-full animate-bounce"></div>
                      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-[#7c3aed] to-[#00d4ff] rounded-full animate-bounce delay-1000"></div>
                      
                      {/* Main Image Container */}
                      <div className="relative">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/20 to-[#00d4ff]/20 rounded-3xl blur-2xl scale-110"></div>
                        
                        {/* Image Frame */}
                        <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-white/20 rounded-3xl p-2 shadow-2xl">
                          <div className="relative w-full aspect-[4/5] max-w-md mx-auto overflow-hidden rounded-2xl">
                            <img 
                              src="/Profilepicture.jpg" 
                              alt="LE NAM TUYEN" 
                              className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Tech Grid Overlay */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                              <div className="w-full h-full" style={{
                                backgroundImage: `
                                  linear-gradient(rgba(0,255,136,0.1) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(0,255,136,0.1) 1px, transparent 1px)
                                `,
                                backgroundSize: '20px 20px'
                              }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Modern Scroll Indicator */}
            <div className="flex justify-center mb-8 sm:mb-12 lg:mb-16">
              <div className="group cursor-pointer" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                <div className="flex flex-col items-center space-y-3">
                  <span className="text-gray-400 text-sm font-medium group-hover:text-[#00ff88] transition-colors duration-300">
                    {t?.scrollIndicator?.text || "Scroll to explore"}
                  </span>
                  
                  {/* Modern Mouse Icon */}
                  <div className="relative">
                    <div className="w-8 h-12 border-2 border-gray-400 group-hover:border-[#00ff88] rounded-full flex justify-center transition-colors duration-300">
                      <div className="w-1 h-2 bg-gray-400 group-hover:bg-[#00ff88] rounded-full mt-3 animate-bounce transition-colors duration-300"></div>
                    </div>
                    
                    {/* Animated Scroll Arrow */}
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-[#00ff88] animate-bounce transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Pulse Effect */}
                  <div className="absolute w-16 h-16 border border-[#00ff88]/20 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>

            {/* 1. ABOUT ME Section */}
            <section id="about" className="mb-16 sm:mb-24 lg:mb-32 relative">
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
                        {language === 'vi' ? (
                          <>
                            <div className="block">"Biến tầm nhìn thành hiện thực</div>
                            <div className="block">Từ ý định đến thành quả"</div>
                          </>
                        ) : (
                      <>
                            <div className="block">"Transforming vision into reality</div>
                            <div className="block">turning intent into results"</div>
                      </>
                    )}
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
            <section id="education" className="mb-16 sm:mb-24 lg:mb-32 relative">
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
                            <div className="block">{t?.labels?.bachelorOf || "Bachelor of"}</div>
                            <div className="block">{t?.labels?.financialTechnology || "Financial Technology"}</div>
                          </h4>
                          <p className="text-[#00d4ff] font-bold text-sm sm:text-base lg:text-lg mb-1">
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
            <section id="skills" className="mb-16 sm:mb-24 lg:mb-32 relative">
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
            <section id="certifications" className="mb-16 sm:mb-24 lg:mb-32 relative">
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
            <section id="experience" className="mb-32 relative">
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
                    <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-[#00ff88]/40 transition-all duration-500 shadow-2xl group">
                      {/* Header with Logo */}
                      <div className="mb-8">
                      <div className="flex items-center space-x-4 mb-4">
                          <div className="w-16 h-16 bg-white rounded-xl p-2 shadow-lg">
                            <img 
                              src="/agribank logo.jpg" 
                              alt="AGRIBANK Logo" 
                              className="w-full h-full object-contain"
                            />
                          </div>
                        <div>
                            <h4 className="text-3xl font-bold text-white mb-2">{t?.experience?.agribank?.position || "Credit Analyst Intern"}</h4>
                            <p className="text-[#00ff88] font-semibold text-xl">{t?.experience?.agribank?.company || "AGRIBANK"}</p>
                          </div>
                        </div>
                        
                        {/* Modern Info Cards */}
                        <div className="flex flex-wrap gap-3 mb-6">
                          <div className="bg-gradient-to-r from-[#00ff88]/20 to-[#00d4ff]/20 border border-[#00ff88]/30 px-4 py-2 rounded-xl">
                            <div className="flex items-center space-x-2">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <span className="text-white font-medium text-sm">{t?.experience?.agribank?.period || "Mar 2025 – Jun 2025"}</span>
                            </div>
                          </div>
                          
                          <div className="bg-gradient-to-r from-[#00d4ff]/20 to-[#7c3aed]/20 border border-[#00d4ff]/30 px-4 py-2 rounded-xl">
                            <div className="flex items-center space-x-2">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span className="text-white font-medium text-sm">{t?.experience?.agribank?.department || "Binh Trieu Branch (On-site)"}</span>
                            </div>
                          </div>
                        </div>

                         {/* Learn More Button */}
                         <div className="flex justify-start">
                           <a
                             href="https://www.agribank.com.vn/"
                             target="_blank"
                             rel="noopener noreferrer"
                             className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#00ff88]/20 to-[#00d4ff]/20 border border-[#00ff88]/30 text-[#00ff88] font-semibold rounded-xl hover:from-[#00ff88]/30 hover:to-[#00d4ff]/30 hover:border-[#00ff88]/50 transition-all duration-300 group"
                           >
                             <span>{t?.buttons?.moreInformation || "More information"}</span>
                             <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-[#00d4ff]/40 transition-all duration-500 shadow-2xl group">
                      {/* Header with Logo */}
                      <div className="mb-8">
                      <div className="flex items-center space-x-4 mb-4">
                          <div className="w-16 h-16 bg-white rounded-xl p-2 shadow-lg">
                            <img 
                              src="/Maybank logo.png" 
                              alt="Maybank Logo" 
                              className="w-full h-full object-contain"
                            />
                          </div>
                        <div>
                            <h4 className="text-3xl font-bold text-white mb-2">{t?.experience?.maybank?.position || "Broker Intern"}</h4>
                            <p className="text-[#00d4ff] font-semibold text-xl">{t?.experience?.maybank?.company || "Maybank Investment Bank Vietnam"}</p>
                          </div>
                        </div>
                        
                        {/* Modern Info Cards */}
                        <div className="flex flex-wrap gap-3 mb-6">
                          <div className="bg-gradient-to-r from-[#00d4ff]/20 to-[#7c3aed]/20 border border-[#00d4ff]/30 px-4 py-2 rounded-xl">
                            <div className="flex items-center space-x-2">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <span className="text-white font-medium text-sm">{t?.experience?.maybank?.period || "Jun 2024 – Dec 2024"}</span>
                            </div>
                          </div>
                          
                          <div className="bg-gradient-to-r from-[#7c3aed]/20 to-[#00ff88]/20 border border-[#7c3aed]/30 px-4 py-2 rounded-xl">
                            <div className="flex items-center space-x-2">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span className="text-white font-medium text-sm">{t?.experience?.maybank?.department || "Phu Nhuan Branch (On-site)"}</span>
                            </div>
                          </div>
                        </div>

                         {/* Learn More Button */}
                         <div className="flex justify-start">
                           <a
                             href="https://www.linkedin.com/company/mibv/"
                             target="_blank"
                             rel="noopener noreferrer"
                             className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#00d4ff]/20 to-[#7c3aed]/20 border border-[#00d4ff]/30 text-[#00d4ff] font-semibold rounded-xl hover:from-[#00d4ff]/30 hover:to-[#7c3aed]/30 hover:border-[#00d4ff]/50 transition-all duration-300 group"
                           >
                             <span>{t?.buttons?.moreInformation || "More information"}</span>
                             <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <section id="projects" className="mb-32 relative">
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
    </div>
  )
}