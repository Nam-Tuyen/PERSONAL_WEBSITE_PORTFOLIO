"use client"

import { useState, useEffect } from "react"
import { translations } from "../data/translations"
import UniverseBackground from "../components/UniverseBackground"
import Sidebar from "../components/Sidebar"
import PageSwitcher from "../components/PageSwitcher"

export default function PersonalPage() {
  const [language, setLanguage] = useState("en")
  const [activeSection, setActiveSection] = useState("hobbies")
  const [mounted, setMounted] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true)
  const [selectedAchievement, setSelectedAchievement] = useState<string | null>(null)

  const t = translations[language as keyof typeof translations]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen text-white relative overflow-hidden" suppressHydrationWarning>
      <UniverseBackground />

      <PageSwitcher translations={t} language={language} />

      <Sidebar
        translations={t}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        language={language}
        onLanguageChange={setLanguage}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={setIsSidebarCollapsed}
        isPersonalPage={true}
      />

      <div className="relative z-10 transition-all duration-500">
        <div className={`min-h-screen transition-all duration-500 ${
          isSidebarCollapsed ? 'ml-0' : 'ml-0 lg:ml-64'
        }`}>
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-20">
            
            {/* Hero Section - Personal */}
            <section id="personal-hero" className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32">
              <div className="text-center">
                <div className="space-y-4 sm:space-y-6 md:space-y-8">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight vietnamese-text">
                    {t?.personal?.hero?.title || "PERSONAL"}
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-medium leading-relaxed max-w-4xl mx-auto vietnamese-text">
                    {t?.personal?.hero?.subtitle || "Discover my passions, interests, and personal journey"}
                  </p>
                </div>
              </div>
            </section>

            {/* Hobbies Section */}
            <section id="hobbies" className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32">
              <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 vietnamese-text">
                  {t?.personal?.hobbies?.title || "HOBBIES"}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {t?.personal?.hobbies?.items?.map((hobby: any, index: number) => (
                  <div key={index} className="group relative">
                    <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-[#00ff88]/40 transition-all duration-500 shadow-2xl h-full">
                      <div className="text-center">
                        <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">{hobby.icon}</div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 vietnamese-text">
                          {hobby.name}
                        </h3>
                        <p className="text-gray-300 leading-relaxed vietnamese-text">
                          {hobby.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Extracurriculars Section */}
            <section id="extracurriculars" className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32">
              <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 vietnamese-text">
                  {t?.personal?.extracurriculars?.title || "EXTRACURRICULARS"}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] mx-auto rounded-full"></div>
              </div>

              <div className="space-y-6 sm:space-y-8">
                {t?.personal?.extracurriculars?.items?.map((activity: any, index: number) => (
                  <div key={index} className="group relative">
                    <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-[#00d4ff]/40 transition-all duration-500 shadow-2xl">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-4 sm:gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#00d4ff]/20 to-[#7c3aed]/20 rounded-xl sm:rounded-2xl flex items-center justify-center">
                            <span className="text-2xl sm:text-3xl">{activity.icon}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 vietnamese-text">
                            {activity.name}
                          </h3>
                          <p className="text-[#00d4ff] font-semibold text-sm sm:text-base mb-2 sm:mb-3">
                            {activity.organization} • {activity.period}
                          </p>
                          <p className="text-gray-300 leading-relaxed vietnamese-text">
                            {activity.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Social Activities Section */}
            <section id="social-activities" className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32">
              <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 vietnamese-text">
                  {t?.personal?.socialActivities?.title || "SOCIAL ACTIVITIES"}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#7c3aed] to-[#00ff88] mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {t?.personal?.socialActivities?.items?.map((activity: any, index: number) => (
                  <div key={index} className="group relative">
                    <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-[#7c3aed]/40 transition-all duration-500 shadow-2xl h-full">
                      <div className="flex items-start gap-4 sm:gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#7c3aed]/20 to-[#00ff88]/20 rounded-lg sm:rounded-xl flex items-center justify-center">
                            <span className="text-lg sm:text-xl">{activity.icon}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 vietnamese-text">
                            {activity.name}
                          </h3>
                          <p className="text-[#7c3aed] font-semibold text-sm mb-2">
                            {activity.role} • {activity.period}
                          </p>
                          <p className="text-gray-300 text-sm leading-relaxed vietnamese-text">
                            {activity.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Research Achievement Section */}
            <section id="research-achievement" className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32">
              <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 vietnamese-text">
                  {t?.personal?.researchAchievement?.title || "RESEARCH ACHIEVEMENT"}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] mx-auto rounded-full"></div>
              </div>

              <div className="space-y-6 sm:space-y-8">
                {t?.personal?.researchAchievement?.items?.map((achievement: any, index: number) => (
                  <div key={index} className="group relative">
                    <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-[#00ff88]/40 transition-all duration-500 shadow-2xl">
                      <div className="flex flex-col lg:flex-row lg:items-start gap-4 sm:gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#00ff88]/20 to-[#00d4ff]/20 rounded-xl sm:rounded-2xl flex items-center justify-center">
                            <span className="text-2xl sm:text-3xl">🏆</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 vietnamese-text">
                            {achievement.title}
                          </h3>
                          <p className="text-[#00ff88] font-semibold text-sm sm:text-base mb-2 sm:mb-3">
                            {achievement.publication} • {achievement.date}
                          </p>
                          <p className="text-gray-300 leading-relaxed mb-4 vietnamese-text">
                            {achievement.description}
                          </p>
                          {achievement.link && (
                            <a 
                              href={achievement.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black font-semibold rounded-lg hover:scale-105 transition-all duration-300"
                            >
                              <span className="mr-2">View Publication</span>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32">
              <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 vietnamese-text">
                  {t?.contact?.title || "CONTACT"}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] mx-auto rounded-full"></div>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div className="space-y-4 sm:space-y-6">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#00ff88]/20 to-[#00d4ff]/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm font-medium">Email</p>
                          <a href="mailto:bingo.namtuyen@gmail.com" className="text-white hover:text-[#00ff88] transition-colors duration-300">
                            bingo.namtuyen@gmail.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#00d4ff]/20 to-[#7c3aed]/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#00d4ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm font-medium">Phone</p>
                          <a href="tel:0921270404" className="text-white hover:text-[#00d4ff] transition-colors duration-300">
                            0921270404
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#7c3aed]/20 to-[#00ff88]/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#7c3aed]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm font-medium">Location</p>
                          <p className="text-white">Ho Chi Minh City, Vietnam</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 sm:space-y-6">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#00ff88]/20 to-[#00d4ff]/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#00ff88]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm font-medium">LinkedIn</p>
                          <a href="https://www.linkedin.com/in/tuyen-le-nam-7614a1269/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00ff88] transition-colors duration-300">
                            linkedin.com/in/tuyen-le-nam-7614a1269/
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#00d4ff]/20 to-[#7c3aed]/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#00d4ff]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm font-medium">GitHub</p>
                          <a href="https://github.com/Nam-Tuyen" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00d4ff] transition-colors duration-300">
                            github.com/Nam-Tuyen
                          </a>
                        </div>
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
