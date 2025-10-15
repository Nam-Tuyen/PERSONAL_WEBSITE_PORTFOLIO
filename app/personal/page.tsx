"use client"

import { useState, useEffect } from "react"
import { translations } from "../data/translations"
import UniverseBackground from "../components/UniverseBackground"
import Sidebar from "../components/Sidebar"
import PageSwitcher from "../components/PageSwitcher"
import ScrollToTopButton from "../components/ScrollToTopButton"

export default function PersonalPage() {
  const [language, setLanguage] = useState("en")
  const [activeSection, setActiveSection] = useState("hobbies")
  const [mounted, setMounted] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true)
  const [selectedAchievement, setSelectedAchievement] = useState<string | null>(null)
  const [currentHobbyIndex, setCurrentHobbyIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

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

  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      setCurrentHobbyIndex((prev) => 
        prev === (t?.personal?.hobbies?.items?.length || 1) - 1 ? 0 : prev + 1
      )
    }
    if (isRightSwipe) {
      setCurrentHobbyIndex((prev) => 
        prev === 0 ? (t?.personal?.hobbies?.items?.length || 1) - 1 : prev - 1
      )
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
        isPersonalPage={true}
      />

      <div className="relative z-10 transition-all duration-500">
        <div className={`min-h-screen transition-all duration-500 ${
          isSidebarCollapsed ? 'ml-0' : 'ml-0 lg:ml-64'
        }`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8 lg:py-12">
            
            {/* Hero Section - Personal */}
            <section id="personal-hero" className="relative h-[60vh] sm:h-[65vh] md:h-[70vh] flex items-center justify-center mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32 mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20">
              <div className="text-center relative z-10">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 -z-10">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-[#00ff88]/10 to-[#00d4ff]/10 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-[#7c3aed]/10 to-[#00ff88]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-[#00d4ff]/10 to-[#7c3aed]/10 rounded-full blur-2xl animate-pulse delay-500"></div>
                </div>

                <div className="space-y-4 sm:space-y-6 md:space-y-8">
                  {/* Main Title with Gradient Text */}
                  <div className="relative">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight vietnamese-text">
                      <span className="bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent animate-gradient-x">
                        {t?.personal?.hero?.title || "PERSONAL"}
                      </span>
                    </h1>
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/20 via-[#00d4ff]/20 to-[#7c3aed]/20 blur-3xl -z-10"></div>
                  </div>

                  {/* Subtitle with Typewriter Effect */}
                  <div className="relative">
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-medium leading-relaxed max-w-4xl mx-auto vietnamese-text">
                      <span className="inline-block opacity-0 animate-fade-in-up delay-500">
                        {t?.personal?.hero?.subtitle || "Discover my passions, interests, and personal journey"}
                      </span>
                    </p>
                  </div>

                  {/* Decorative Line */}
                  <div className="flex justify-center items-center space-x-4 mt-8">
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#00ff88]"></div>
                    <div className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse"></div>
                    <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-[#00ff88]"></div>
                  </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                  <div className="flex flex-col items-center space-y-2 text-white">
                    <span className="text-sm font-medium opacity-70">Scroll to explore</span>
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                      <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Particles */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#00ff88]/30 rounded-full animate-float delay-0"></div>
                <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#00d4ff]/40 rounded-full animate-float delay-1000"></div>
                <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-[#7c3aed]/30 rounded-full animate-float delay-2000"></div>
                <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-[#00ff88]/40 rounded-full animate-float delay-3000"></div>
                <div className="absolute bottom-1/4 right-1/2 w-2 h-2 bg-[#00d4ff]/30 rounded-full animate-float delay-4000"></div>
              </div>
            </section>


            {/* Hobbies Section */}
            <section id="hobbies" className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
              <div className="text-center mb-4 sm:mb-6 md:mb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-2 sm:mb-3 md:mb-4 vietnamese-text">
                  {t?.personal?.hobbies?.title || "HOBBIES"}
                </h2>
                <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] mx-auto rounded-full"></div>
              </div>

              <div 
                className="max-w-5xl mx-auto"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                {/* Desktop Compact Grid */}
                <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  {t?.personal?.hobbies?.items?.map((hobby: any, index: number) => (
                    <div
                      key={index}
                      className="group cursor-pointer"
                      onClick={() => setCurrentHobbyIndex(index)}
                    >
                      <div className="relative bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-[#00ff88]/30 transition-all duration-300 hover:scale-[1.02]">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#00ff88]/20 to-[#00d4ff]/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <span className="text-3xl">{hobby.icon}</span>
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-bold text-white mb-1 vietnamese-text">
                              {hobby.name}
                            </h3>
                            <p className="text-gray-300 text-sm vietnamese-text leading-relaxed">
                              {hobby.description}
                            </p>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mobile Compact List */}
                <div className="md:hidden space-y-3 sm:space-y-4">
                  {t?.personal?.hobbies?.items?.map((hobby: any, index: number) => (
                    <div
                      key={index}
                      className="group cursor-pointer"
                      onClick={() => setCurrentHobbyIndex(index)}
                    >
                    <div className="relative bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-xl border border-white/10 rounded-xl p-3 sm:p-4 hover:border-[#00ff88]/30 transition-all duration-300">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#00ff88]/20 to-[#00d4ff]/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <span className="text-xl sm:text-2xl">{hobby.icon}</span>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm sm:text-base font-bold text-white mb-1 vietnamese-text">
                            {hobby.name}
                          </h3>
                          <p className="text-gray-300 text-xs sm:text-sm vietnamese-text leading-relaxed">
                            {hobby.description}
                          </p>
                        </div>
                      </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-xl"></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Minimalist Dots Indicator */}
                <div className="flex justify-center mt-6 gap-2">
                  {t?.personal?.hobbies?.items?.map((_: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => setCurrentHobbyIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentHobbyIndex
                          ? 'bg-[#00ff88] scale-125'
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                      aria-label={`Go to hobby ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Extracurriculars Section */}
            <section id="extracurriculars" className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
              <div className="text-center mb-4 sm:mb-6 md:mb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-2 sm:mb-3 md:mb-4 vietnamese-text">
                  {t?.personal?.extracurriculars?.title || "EXTRACURRICULARS"}
                </h2>
                <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] mx-auto rounded-full"></div>
              </div>

              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                {t?.personal?.extracurriculars?.items?.map((activity: any, index: number) => (
                  <div key={index} className="group">
                    {/* Header */}
                    <div className="flex items-start gap-3 sm:gap-4 md:gap-6 mb-3 sm:mb-4 md:mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#00d4ff]/20 to-[#7c3aed]/20 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                        <span className="text-lg sm:text-xl md:text-2xl">{activity.icon}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2 vietnamese-text">
                          {activity.name}
                        </h3>
                        <p className="text-[#00d4ff] font-medium mb-2 sm:mb-3 md:mb-4 text-sm sm:text-base">
                          {activity.name === "Basketball Team Captain" || activity.name === "Đội trưởng đội bóng rổ" 
                            ? activity.organization 
                            : `${activity.organization} • ${activity.period}`}
                        </p>
                        
                        {/* Links */}
                        {(activity.website || activity.linkedin) && (
                          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6">
                            {activity.website && (
                              <a 
                                href={activity.website} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-lg sm:rounded-xl text-[#00d4ff] hover:bg-[#00d4ff]/20 transition-all duration-300 text-sm sm:text-base"
                              >
                                <span>🌐</span>
                                Website
                              </a>
                            )}
                            {activity.linkedin && (
                              <a 
                                href={activity.linkedin} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 bg-[#0077b5]/10 border border-[#0077b5]/30 rounded-lg sm:rounded-xl text-[#0077b5] hover:bg-[#0077b5]/20 transition-all duration-300 text-sm sm:text-base"
                              >
                                <span>💼</span>
                                LinkedIn
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:border-[#00d4ff]/30 transition-all duration-500">
                      {/* Roles */}
                      {activity.roles && activity.roles.length > 0 ? (
                        <div className="space-y-4 sm:space-y-6 md:space-y-8">
                          {activity.roles.map((role: any, roleIndex: number) => (
                            <div key={roleIndex} className="border-l-4 border-[#00d4ff]/40 pl-3 sm:pl-4 md:pl-6">
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-3 md:mb-4">
                                <h4 className="text-lg sm:text-xl font-bold text-white vietnamese-text">
                                  {role.title}
                                </h4>
                                <span className="text-[#00d4ff] font-medium text-xs sm:text-sm">
                                  {role.period}
                                </span>
                              </div>
                              
                              {/* Role Description */}
                              {role.description && role.description.length > 0 && (
                                <div className="mb-3 sm:mb-4 md:mb-6">
                                  <ul className="space-y-2 sm:space-y-3">
                                    {role.description.map((desc: string, descIndex: number) => (
                                      <li key={descIndex} className="text-gray-300 leading-relaxed vietnamese-text flex items-start gap-2 sm:gap-3 group text-sm sm:text-base">
                                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] rounded-full mt-1.5 sm:mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                                        <span className="group-hover:text-white transition-colors duration-300">{desc}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              
                              {/* Achievements */}
                              {role.achievements && role.achievements.length > 0 && (
                                <div>
                                  <h5 className="text-[#00ff88] font-semibold mb-2 sm:mb-3 vietnamese-text text-sm sm:text-base">
                                    {language === 'vi' ? 'Thành tựu nổi bật:' : 'Key Achievements:'}
                                  </h5>
                                  <ul className="space-y-2 sm:space-y-3">
                                    {role.achievements.map((achievement: string, achIndex: number) => (
                                      <li key={achIndex} className="text-gray-300 leading-relaxed vietnamese-text flex items-start gap-2 sm:gap-3 group text-sm sm:text-base">
                                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-full mt-1.5 sm:mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                                        <span className="group-hover:text-white transition-colors duration-300">{achievement}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-300 leading-relaxed vietnamese-text text-sm sm:text-base md:text-lg">
                          {activity.description}
                        </p>
                      )}
                      
                      {/* Images Gallery */}
                      {activity.images && activity.images.length > 0 && (
                        <div className="mt-4 sm:mt-6 md:mt-8 pt-4 sm:pt-6 border-t border-white/10">
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                            {activity.images.map((image: string, imgIndex: number) => (
                              <div key={imgIndex} className="relative group">
                                <img 
                                  src={image} 
                                  alt={`${activity.name} - Image ${imgIndex + 1}`}
                                  className="w-full h-64 object-cover rounded-2xl border border-white/10 hover:border-[#00d4ff]/40 transition-all duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
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

              <div className="space-y-8">
                {t?.personal?.socialActivities?.items?.map((activity: any, index: number) => (
                  <div key={index} className="group">
                    <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-[#7c3aed]/30 transition-all duration-500">
                      <div className="flex items-start gap-6">
                        <div className="w-14 h-14 bg-gradient-to-br from-[#7c3aed]/20 to-[#00ff88]/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <span className="text-xl">{activity.icon}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl font-bold text-white mb-2 vietnamese-text">
                            {activity.name}
                          </h3>
                          <p className="text-[#7c3aed] font-medium mb-4">
                            {activity.role}{activity.period ? ` • ${activity.period}` : ''}
                          </p>
                          <p className="text-gray-300 leading-relaxed vietnamese-text">
                            {activity.description}
                          </p>
                          
                          {/* Images Gallery */}
                          {activity.images && activity.images.length > 0 && (
                            <div className="mt-8 pt-6 border-t border-white/10">
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {activity.images.map((image: string, imgIndex: number) => (
                                  <div key={imgIndex} className="relative group">
                                    <img 
                                      src={image} 
                                      alt={`${activity.name} - Image ${imgIndex + 1}`}
                                      className="w-full h-64 object-cover rounded-2xl border border-white/10 hover:border-[#7c3aed]/40 transition-all duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* External Links */}
                          {activity.links && activity.links.length > 0 && (
                            <div className="mt-6 pt-6 border-t border-white/10">
                              <h4 className="text-lg font-semibold text-white mb-4 vietnamese-text">
                                {t?.labels?.newsAndMedia || "News & Media"}
                              </h4>
                              <div className="space-y-3">
                                {activity.links.map((link: any, linkIndex: number) => (
                                  <a 
                                    key={linkIndex}
                                    href={link.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-xl border border-white/10 hover:border-[#7c3aed]/40 hover:bg-gray-800/50 transition-all duration-300 group"
                                  >
                                    <div className="w-2 h-2 bg-[#7c3aed] rounded-full flex-shrink-0"></div>
                                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300 vietnamese-text text-sm">
                                      {link.title}
                                    </span>
                                    <svg className="w-4 h-4 text-gray-400 group-hover:text-[#7c3aed] transition-colors duration-300 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
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

              <div className="space-y-8">
                {t?.personal?.researchAchievement?.items?.map((achievement: any, index: number) => (
                  <div key={index} className="group">
                    <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-[#00ff88]/30 transition-all duration-500">
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#00ff88]/20 to-[#00d4ff]/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <span className="text-2xl">🏆</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-2xl font-bold text-white mb-2 vietnamese-text">
                            {achievement.title}
                          </h3>
                          <p className="text-[#00ff88] font-medium mb-4">
                            {achievement.publication} • {achievement.date}
                          </p>
                          <p className="text-gray-300 leading-relaxed mb-6 vietnamese-text text-lg">
                            {achievement.description}
                          </p>
                          {achievement.link && (
                            <a 
                              href={achievement.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black font-semibold rounded-xl hover:scale-105 transition-all duration-300"
                            >
                              <span>View Publication</span>
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

           </div>
         </div>
       </div>

       <ScrollToTopButton />
     </div>
   )
 }
