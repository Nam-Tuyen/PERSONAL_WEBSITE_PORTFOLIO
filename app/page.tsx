"use client"

import React, { useState, useEffect } from "react"
import { translations } from "./data/translations"
import UniverseBackground from "./components/UniverseBackground"
import Sidebar from "./components/Sidebar"

export default function Portfolio() {
  const [language, setLanguage] = useState("vi")
  const [activeSection, setActiveSection] = useState("home")
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
            
            {/* Contact Section - At the top */}
            <section id="contact" className="mb-8 sm:mb-12 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/5 to-[#00d4ff]/5 rounded-2xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">{t?.sections?.contact || "Liên hệ"}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <div className="text-gray-300 mb-2">
                      <strong>Email:</strong> <a href="mailto:bingo.namtuyen@gmail.com" className="text-[#00ff88] hover:underline">bingo.namtuyen@gmail.com</a>
                    </div>
                    <div className="text-gray-300 mb-2">
                      <strong>Điện thoại:</strong> <a href="tel:+84921270404" className="text-[#00ff88] hover:underline">0921270404</a>
                    </div>
                    <div className="text-gray-300">
                      <strong>Địa điểm:</strong> <span>TP. Hồ Chí Minh, Việt Nam</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-300 mb-2">
                      <a href="https://www.linkedin.com/in/tuyen-le-nam-7614a1269/" target="_blank" rel="noopener noreferrer" className="text-[#00d4ff] hover:underline">LinkedIn</a>
                    </div>
                    <div className="text-gray-300">
                      <a href="https://github.com/Nam-Tuyen" target="_blank" rel="noopener noreferrer" className="text-[#00d4ff] hover:underline">GitHub</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Hero Section */}
            <section id="home" className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
                {/* Left Column - Professional Image */}
                <div className="order-2 lg:order-1">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/5 to-[#00d4ff]/5 rounded-2xl sm:rounded-3xl blur-3xl"></div>
                    <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-1 sm:p-2">
                      <div className="relative w-full aspect-[4/5] max-w-sm mx-auto sm:max-w-none overflow-hidden rounded-xl sm:rounded-2xl">
                        <img 
                          src="/Profilepicture.jpg" 
                          alt="LE NAM TUYEN" 
                          className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Professional Content */}
                <div className="order-1 lg:order-2 text-center lg:text-left">
                  <div className="space-y-4 sm:space-y-6 md:space-y-8">
                    <div className="space-y-2 sm:space-y-3 md:space-y-4">
                      <div className="text-gray-400 text-sm sm:text-base md:text-lg">{t?.hero?.greeting || "Xin chào, tôi là"}</div>
                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-1 sm:mb-2 md:mb-4 tracking-tight leading-tight">
                        {t?.hero?.name || "LÊ NAM TUYẾN"}
                      </h1>
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 font-medium leading-relaxed mb-4 sm:mb-6 md:mb-8">
                        {t?.hero?.title || "Ứng viên Product Manager & Data Analyst trong lĩnh vực FinTech"}
                      </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start">
                      <button className="btn-gradient-primary text-xs sm:text-sm md:text-base">
                        {t?.buttons?.downloadResume || "Tải CV"}
                      </button>
                      <button 
                        onClick={scrollToProjects}
                        className="btn-outline-gradient text-white text-xs sm:text-sm md:text-base"
                      >
                        {t?.buttons?.viewProjects || "Xem Dự án"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section id="about" className="mb-16 sm:mb-24 lg:mb-32 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/5 to-[#00d4ff]/5 rounded-2xl sm:rounded-3xl blur-3xl"></div>
              <div className="relative">
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">{t?.sections?.about || "Giới thiệu"}</h3>
                  <div className="w-16 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] mx-auto mt-4"></div>
                </div>
                
                <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                  <div className="card-tech">
                    <div className="text-center">
                      <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#00ff88] font-bold italic mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-tight max-w-4xl mx-auto">
                        <div className="block">"{t?.about?.quote || "Biến tầm nhìn thành hiện thực, biến ý định thành kết quả"}"</div>
                      </blockquote>
                      <div className="max-w-4xl mx-auto px-2 sm:px-4">
                        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-300 leading-relaxed sm:leading-loose text-left sm:text-justify tracking-wide sm:tracking-wider">
                          {t?.about?.description || "Sinh viên năm cuối ngành Công nghệ Tài chính tại Đại học Kinh tế – Luật (VNU-HCM), tập trung vào phát triển sản phẩm, phân tích dữ liệu và ra quyết định dựa trên bằng chứng..."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Education Section */}
            <section id="education" className="mb-16 sm:mb-24 lg:mb-32 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/5 to-[#7c3aed]/5 rounded-2xl sm:rounded-3xl blur-3xl"></div>
              <div className="relative">
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">{t?.sections?.education || "Học vấn"}</h3>
                  <div className="w-16 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] mx-auto mt-4"></div>
                </div>

                <div className="max-w-4xl mx-auto">
                  <div className="card-tech">
                    <div className="space-y-4 sm:space-y-6">
                      <div className="text-center space-y-3 sm:space-y-4">
                        <div>
                          <h4 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-2 sm:mb-3 leading-tight">
                            <div className="block">{t?.labels?.bachelorOf || "Cử nhân"}</div>
                            <div className="block">{t?.labels?.financialTechnology || "Công nghệ Tài chính"}</div>
                          </h4>
                          <p className="text-[#00d4ff] font-bold text-sm sm:text-base lg:text-lg mb-1">
                            {t?.education?.university || "Đại học Kinh tế – Luật (VNU-HCM)"}
                          </p>
                          <p className="text-gray-400 text-xs sm:text-sm">2022 – 2026</p>
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                          <div className="text-center">
                            <div className="text-xl sm:text-2xl lg:text-3xl font-black text-[#00d4ff] mb-1">{t?.education?.gpa || "3.0"}</div>
                            <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider font-semibold">{t?.labels?.gpa || "Điểm trung bình"}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xl sm:text-2xl lg:text-3xl font-black text-[#7c3aed] mb-1">{t?.education?.ielts || "6.0"}</div>
                            <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider font-semibold">{t?.labels?.ielts || "IELTS"}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="mb-16 sm:mb-24 lg:mb-32 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#7c3aed]/5 to-[#00ff88]/5 rounded-2xl sm:rounded-3xl blur-3xl"></div>
              <div className="relative">
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">{t?.sections?.skills || "Kỹ năng"}</h3>
                  <div className="w-16 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-[#7c3aed] to-[#00ff88] mx-auto mt-4"></div>
                </div>

                <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
                    {/* Programming Languages */}
                    <div className="card-tech">
                      <div className="mb-4 sm:mb-6">
                        <h4 className="text-lg sm:text-xl font-bold text-white">{t?.skills?.categories?.[0]?.name || "Ngôn ngữ lập trình"}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {(t?.skills?.categories?.[0]?.items || ["Python", "SQL", "R"]).map((skill: string, index: number) => (
                          <span key={index} className="skill-tag dark">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Data Tools */}
                    <div className="card-tech">
                      <div className="mb-4 sm:mb-6">
                        <h4 className="text-lg sm:text-xl font-bold text-white">{t?.skills?.categories?.[1]?.name || "Công cụ dữ liệu"}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {(t?.skills?.categories?.[1]?.items || ["Power BI", "Tableau", "Excel"]).map((skill: string, index: number) => (
                          <span key={index} className="skill-tag dark">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Product Management */}
                    <div className="card-tech">
                      <div className="mb-4 sm:mb-6">
                        <h4 className="text-lg sm:text-xl font-bold text-white">{t?.skills?.categories?.[2]?.name || "Quản trị sản phẩm"}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {(t?.skills?.categories?.[2]?.items || ["Nghiên cứu người dùng", "Product Discovery", "Product Analytics"]).map((skill: string, index: number) => (
                          <span key={index} className="skill-tag dark">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Database & Cloud */}
                    <div className="card-tech">
                      <div className="mb-4 sm:mb-6">
                        <h4 className="text-lg sm:text-xl font-bold text-white">{t?.skills?.categories?.[3]?.name || "Cơ sở dữ liệu & Cloud"}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {(t?.skills?.categories?.[3]?.items || ["MySQL", "PostgreSQL", "MongoDB"]).map((skill: string, index: number) => (
                          <span key={index} className="skill-tag dark">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Certifications Section */}
            <section id="certifications" className="mb-16 sm:mb-24 lg:mb-32 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/5 to-[#00d4ff]/5 rounded-2xl sm:rounded-3xl blur-3xl"></div>
              <div className="relative">
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">{t?.sections?.certifications || "Chứng chỉ & Giải thưởng"}</h3>
                  <div className="w-16 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] mx-auto mt-4"></div>
                </div>

                <div className="max-w-5xl mx-auto">
                  <div className="card-tech">
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
                          Bấm để xem chứng chỉ
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
                          Bấm để xem chứng chỉ
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
                          <h4 className="text-base sm:text-lg font-bold text-white">Bài báo khoa học</h4>
                        </div>
                        <p className="text-gray-300 font-medium text-xs sm:text-sm leading-relaxed text-left">
                          Public Debt and Economic Stability, the Moderating Effect of Governance: Evidence from SEA Countries
                        </p>
                        <div className="mt-2 sm:mt-3 text-xs text-[#7c3aed] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-left">
                          Bấm để xem bài báo
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Work Experience Section */}
            <section id="experience" className="mb-32 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/5 to-[#7c3aed]/5 rounded-3xl blur-3xl"></div>
              <div className="relative">
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">{t?.sections?.experience || "Kinh nghiệm làm việc"}</h3>
                  <div className="w-16 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] mx-auto mt-4"></div>
                </div>

                <div className="max-w-6xl mx-auto">
                  <div className="space-y-8">
                    {/* AGRIBANK Experience */}
                    <div className="card-tech">
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
                            <h4 className="text-3xl font-bold text-white mb-2">Thực tập sinh Phân tích Tín dụng</h4>
                            <p className="text-[#00ff88] font-semibold text-xl">AGRIBANK</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-3 mb-6">
                          <div className="bg-gradient-to-r from-[#00ff88]/20 to-[#00d4ff]/20 border border-[#00ff88]/30 px-4 py-2 rounded-xl">
                            <div className="flex items-center space-x-2">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <span className="text-white font-medium text-sm">03/2025 – 06/2025</span>
                            </div>
                          </div>
                          
                          <div className="bg-gradient-to-r from-[#00d4ff]/20 to-[#7c3aed]/20 border border-[#00d4ff]/30 px-4 py-2 rounded-xl">
                            <div className="flex items-center space-x-2">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span className="text-white font-medium text-sm">Chi nhánh Bình Triệu (On-site)</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mb-6 sm:mb-8">
                        <h5 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">{t?.buttons?.jobDescription || "Mô tả công việc"}</h5>
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
                    <div className="card-tech">
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
                            <h4 className="text-3xl font-bold text-white mb-2">Thực tập sinh Môi giới</h4>
                            <p className="text-[#00d4ff] font-semibold text-xl">Maybank Investment Bank Vietnam</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-3 mb-6">
                          <div className="bg-gradient-to-r from-[#00d4ff]/20 to-[#7c3aed]/20 border border-[#00d4ff]/30 px-4 py-2 rounded-xl">
                            <div className="flex items-center space-x-2">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <span className="text-white font-medium text-sm">06/2024 – 12/2024</span>
                            </div>
                          </div>
                          
                          <div className="bg-gradient-to-r from-[#7c3aed]/20 to-[#00ff88]/20 border border-[#7c3aed]/30 px-4 py-2 rounded-xl">
                            <div className="flex items-center space-x-2">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span className="text-white font-medium text-sm">Chi nhánh Phú Nhuận (On-site)</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mb-6 sm:mb-8">
                        <h5 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">{t?.buttons?.jobDescription || "Mô tả công việc"}</h5>
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

            {/* Projects Section */}
            <section id="projects" className="mb-32 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#7c3aed]/5 to-[#00ff88]/5 rounded-3xl blur-3xl"></div>
              <div className="relative">
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">{t?.sections?.projects || "Dự án"}</h3>
                  <div className="w-16 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-[#7c3aed] to-[#00ff88] mx-auto mt-4"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {t?.projects?.items?.map((project: any, index: number) => (
                      <div key={index} className="card-tech flex flex-col">
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
                            {t?.buttons?.viewProject || "Xem Dự án"}
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
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg"
            >
              <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

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