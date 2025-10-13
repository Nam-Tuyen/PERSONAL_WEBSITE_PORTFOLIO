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
          <div className="max-w-6xl mx-auto px-6 py-12">
            
            {/* Hero Section - Ultra Modern */}
            <section id="home" className="min-h-screen flex items-center justify-center relative">
              <div className="text-center space-y-8 max-w-4xl mx-auto">
                {/* Binary Code Header */}
                <div className="font-mono text-xs text-gray-500 tracking-widest mb-8">
                  01001000 01100101 01101100 01101100 01101111
                </div>
                
                {/* Main Title */}
                <div className="space-y-4">
                  <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] leading-none">
                    LÊ NAM TUYẾN
                  </h1>
                  <div className="h-1 w-32 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] mx-auto"></div>
                  <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
                    {t?.hero?.title || "Ứng viên Product Manager & Data Analyst trong lĩnh vực FinTech"}
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black font-bold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-[#00ff88]/25">
                    <span className="relative z-10">{t?.buttons?.downloadResume || "Tải CV"}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  <button 
                    onClick={() => {
                      const projectsSection = document.getElementById('projects')
                      if (projectsSection) {
                        projectsSection.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 hover:border-white/40 transition-all duration-300"
                  >
                    {t?.buttons?.viewProjects || "Xem Dự án"}
                  </button>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                  <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </section>

            {/* About Section - Minimalist */}
            <section id="about" className="py-20 relative">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-4">GIỚI THIỆU</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] mx-auto"></div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
                  <blockquote className="text-2xl md:text-3xl text-[#00ff88] font-bold italic text-center mb-8 leading-relaxed">
                    "{t?.about?.quote || "Biến tầm nhìn thành hiện thực, biến ý định thành kết quả"}"
                  </blockquote>
                  <p className="text-gray-300 text-lg leading-relaxed text-center max-w-3xl mx-auto">
                    {t?.about?.description || "Sinh viên năm cuối ngành Công nghệ Tài chính tại Đại học Kinh tế – Luật (VNU-HCM), tập trung vào phát triển sản phẩm, phân tích dữ liệu và ra quyết định dựa trên bằng chứng..."}
                  </p>
                </div>
              </div>
            </section>

            {/* Education Section - Clean */}
            <section id="education" className="py-20">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-4">HỌC VẤN</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] mx-auto"></div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {t?.labels?.bachelorOf || "Cử nhân"} {t?.labels?.financialTechnology || "Công nghệ Tài chính"}
                  </h3>
                  <p className="text-[#00d4ff] text-xl font-semibold mb-2">
                    {t?.education?.university || "Đại học Kinh tế – Luật (VNU-HCM)"}
                  </p>
                  <p className="text-gray-400 mb-8">2022 – 2026</p>
                  
                  <div className="grid grid-cols-2 gap-8 max-w-md mx-auto">
                    <div className="text-center">
                      <div className="text-3xl font-black text-[#00d4ff] mb-2">{t?.education?.gpa || "3.0"}</div>
                      <div className="text-sm text-gray-400 uppercase tracking-wider">{t?.labels?.gpa || "Điểm trung bình"}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-[#7c3aed] mb-2">{t?.education?.ielts || "6.0"}</div>
                      <div className="text-sm text-gray-400 uppercase tracking-wider">{t?.labels?.ielts || "IELTS"}</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Skills Section - Tag-based */}
            <section id="skills" className="py-20">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-4">KỸ NĂNG</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#7c3aed] to-[#00ff88] mx-auto"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {t?.skills?.categories?.map((category: any, index: number) => (
                    <div key={index} className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                      <h3 className="text-xl font-bold text-white mb-6 text-center">{category.name}</h3>
                      <div className="flex flex-wrap gap-3 justify-center">
                        {category.items.map((skill: string, skillIndex: number) => (
                          <span 
                            key={skillIndex}
                            className="px-4 py-2 bg-gradient-to-r from-[#00ff88]/20 to-[#00d4ff]/20 border border-[#00ff88]/30 text-white rounded-full text-sm font-medium hover:from-[#00ff88]/30 hover:to-[#00d4ff]/30 transition-all duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Certifications Section - Grid */}
            <section id="certifications" className="py-20">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-4">CHỨNG CHỈ & GIẢI THƯỞNG</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] mx-auto"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Google Certificate */}
                  <div 
                    onClick={() => setSelectedCertificate('google')}
                    className="group cursor-pointer bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-[#00ff88]/40 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-3 h-3 bg-[#00ff88] rounded-full animate-pulse"></div>
                      <h3 className="text-lg font-bold text-white">Google Certificate</h3>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">Ask Questions to Make Data-Driven Decisions</p>
                    <div className="text-xs text-[#00ff88] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Bấm để xem chứng chỉ
                    </div>
                  </div>

                  {/* NVIDIA Certificate */}
                  <div 
                    onClick={() => setSelectedCertificate('nvidia')}
                    className="group cursor-pointer bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-[#00d4ff]/40 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-3 h-3 bg-[#00d4ff] rounded-full animate-pulse"></div>
                      <h3 className="text-lg font-bold text-white">NVIDIA Certificate</h3>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">Accelerating End-to-End Data Science Workflows</p>
                    <div className="text-xs text-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Bấm để xem chứng chỉ
                    </div>
                  </div>

                  {/* Journal Article */}
                  <a 
                    href="https://ojs.omniscient.sg/index.php/gep/article/view/62858"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group cursor-pointer bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-[#7c3aed]/40 transition-all duration-300 block"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-3 h-3 bg-[#7c3aed] rounded-full animate-pulse"></div>
                      <h3 className="text-lg font-bold text-white">Bài báo khoa học</h3>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">Public Debt and Economic Stability, the Moderating Effect of Governance: Evidence from SEA Countries</p>
                    <div className="text-xs text-[#7c3aed] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Bấm để xem bài báo
                    </div>
                  </a>
                </div>
              </div>
            </section>

            {/* Experience Section - Timeline */}
            <section id="experience" className="py-20">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-4">KINH NGHIỆM LÀM VIỆC</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] mx-auto"></div>
                </div>
                
                <div className="space-y-12">
                  {/* AGRIBANK */}
                  <div className="relative">
                    <div className="absolute left-8 top-0 w-4 h-4 bg-[#00ff88] rounded-full border-4 border-gray-900"></div>
                    <div className="ml-16 bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <img src="/agribank logo.jpg" alt="AGRIBANK" className="w-12 h-12 rounded-lg object-contain bg-white p-1" />
                        <div>
                          <h3 className="text-xl font-bold text-white">Thực tập sinh Phân tích Tín dụng</h3>
                          <p className="text-[#00ff88] font-semibold">AGRIBANK</p>
                          <p className="text-gray-400 text-sm">03/2025 – 06/2025 | Chi nhánh Bình Triệu</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {t?.experience?.agribank?.achievements?.map((achievement: string, index: number) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 bg-[#00ff88] rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Maybank */}
                  <div className="relative">
                    <div className="absolute left-8 top-0 w-4 h-4 bg-[#00d4ff] rounded-full border-4 border-gray-900"></div>
                    <div className="ml-16 bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <img src="/Maybank logo.png" alt="Maybank" className="w-12 h-12 rounded-lg object-contain bg-white p-1" />
                        <div>
                          <h3 className="text-xl font-bold text-white">Thực tập sinh Môi giới</h3>
                          <p className="text-[#00d4ff] font-semibold">Maybank Investment Bank Vietnam</p>
                          <p className="text-gray-400 text-sm">06/2024 – 12/2024 | Chi nhánh Phú Nhuận</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {t?.experience?.maybank?.achievements?.map((achievement: string, index: number) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Projects Section - Cards */}
            <section id="projects" className="py-20">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-4">DỰ ÁN</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#7c3aed] to-[#00ff88] mx-auto"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {t?.projects?.items?.map((project: any, index: number) => (
                    <div key={index} className="group bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-[#00ff88]/40 transition-all duration-300">
                      <div className="aspect-video bg-gradient-to-br from-[#7c3aed]/20 to-[#00ff88]/20 flex items-center justify-center relative overflow-hidden">
                        {project.image?.endsWith('.mp4') ? (
                          <video 
                            className="w-full h-full object-cover"
                            controls
                            preload="metadata"
                          >
                            <source src={project.image} type="video/mp4" />
                          </video>
                        ) : project.image?.endsWith('.PNG') || project.image?.endsWith('.png') || project.image?.endsWith('.jpg') || project.image?.endsWith('.jpeg') ? (
                          <img 
                            src={project.image} 
                            alt={project.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="text-6xl opacity-30">📊</div>
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                        {project.period && (
                          <p className="text-gray-400 text-sm mb-4">{project.period}</p>
                        )}
                        <div className="space-y-2 mb-6">
                          {Array.isArray(project.description) ? (
                            project.description.slice(0, 2).map((item: string, descIndex: number) => (
                              <p key={descIndex} className="text-gray-300 text-sm leading-relaxed">
                                {item.length > 100 ? item.substring(0, 100) + '...' : item}
                              </p>
                            ))
                          ) : (
                            <p className="text-gray-300 text-sm leading-relaxed">
                              {project.description.length > 150 ? project.description.substring(0, 150) + '...' : project.description}
                            </p>
                          )}
                        </div>
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block w-full py-3 bg-gradient-to-r from-[#7c3aed] to-[#00ff88] text-black font-bold rounded-lg text-center hover:scale-105 transition-all duration-300"
                        >
                          {t?.buttons?.viewProject || "Xem Dự án"}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-white/10">
              <div className="text-center">
                <div className="font-mono text-xs text-gray-500 tracking-widest mb-4">
                  01000110 01101001 01101110 01101001 01110011
                </div>
                <p className="text-gray-400">© 2024 LÊ NAM TUYẾN. Tất cả quyền được bảo lưu.</p>
              </div>
            </footer>

          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute -top-2 -right-2 z-10 w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
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