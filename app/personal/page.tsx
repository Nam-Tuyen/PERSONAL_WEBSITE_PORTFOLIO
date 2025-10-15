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
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-20">
            
            {/* Hero Section - Personal */}
            <section id="personal-hero" className="relative min-h-screen flex items-center justify-center mt-20 sm:mt-24 md:mt-28 lg:mt-32 xl:mt-36 mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32">
              <div className="text-center relative z-10">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 -z-10">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-[#00ff88]/10 to-[#00d4ff]/10 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-[#7c3aed]/10 to-[#00ff88]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-[#00d4ff]/10 to-[#7c3aed]/10 rounded-full blur-2xl animate-pulse delay-500"></div>
                </div>

                <div className="space-y-6 sm:space-y-8 md:space-y-12">
                  {/* Main Title with Gradient Text */}
                  <div className="relative">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight vietnamese-text">
                      <span className="bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent animate-gradient-x">
                        {t?.personal?.hero?.title || "PERSONAL"}
                      </span>
                    </h1>
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/20 via-[#00d4ff]/20 to-[#7c3aed]/20 blur-3xl -z-10"></div>
                  </div>

                  {/* Subtitle with Typewriter Effect */}
                  <div className="relative">
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 font-medium leading-relaxed max-w-5xl mx-auto vietnamese-text">
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
                  <div className="flex flex-col items-center space-y-2 text-[#00ff88]">
                    <span className="text-sm font-medium opacity-70">Scroll to explore</span>
                    <div className="w-6 h-10 border-2 border-[#00ff88]/50 rounded-full flex justify-center">
                      <div className="w-1 h-3 bg-[#00ff88] rounded-full mt-2 animate-pulse"></div>
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

            {/* Scroll Indicator */}
            <div className="flex justify-center mb-8 sm:mb-12 lg:mb-16">
              <div className="flex flex-col items-center space-y-2 animate-bounce">
                <span className="text-gray-400 text-xs sm:text-sm font-medium">Scroll to explore</span>
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
                </div>
                <svg className="w-4 h-4 text-gray-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>

            {/* Hobbies Section */}
            <section id="hobbies" className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32">
              <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 vietnamese-text">
                  {t?.personal?.hobbies?.title || "HOBBIES"}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] mx-auto rounded-full"></div>
              </div>

              <div className="relative w-full max-w-7xl mx-auto">
                {/* Desktop 3D Carousel */}
                <div className="hidden lg:block relative h-[600px] perspective-2000">
                  <div className="relative w-full h-full transform-style-preserve-3d">
                    {t?.personal?.hobbies?.items?.map((hobby: any, index: number) => {
                      const isActive = index === currentHobbyIndex;
                      const isLeft = index < currentHobbyIndex;
                      const isRight = index > currentHobbyIndex;
                      
                      let transform = "";
                      let opacity = 0;
                      let zIndex = 0;
                      
                      if (isActive) {
                        transform = "translate(-50%, -50%) translateX(0px) translateZ(0px) rotateY(0deg) scale(1)";
                        opacity = 1;
                        zIndex = 3;
                      } else if (isLeft) {
                        const distance = currentHobbyIndex - index;
                        const translateX = -350 * distance;
                        const translateZ = -100 * distance;
                        const rotateY = 15 * distance;
                        const scale = 1 - (0.08 * distance);
                        transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
                        opacity = 0.8 - (0.2 * distance);
                        zIndex = 3 - distance;
                      } else if (isRight) {
                        const distance = index - currentHobbyIndex;
                        const translateX = 350 * distance;
                        const translateZ = -100 * distance;
                        const rotateY = -15 * distance;
                        const scale = 1 - (0.08 * distance);
                        transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
                        opacity = 0.8 - (0.2 * distance);
                        zIndex = 3 - distance;
                      }
                      
                      return (
                        <div
                          key={index}
                          className="absolute w-[450px] h-[500px] left-1/2 top-1/2 transform-style-preserve-3d transition-all duration-700 ease-out cursor-pointer group"
                          style={{
                            transform,
                            opacity,
                            zIndex
                          }}
                          onClick={() => setCurrentHobbyIndex(index)}
                        >
                          <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border-2 border-[#00ff88]/30 shadow-2xl group-hover:shadow-[#00ff88]/20 transition-all duration-500">
                            {/* Icon Section */}
                            <div className="relative w-full h-[70%] flex items-center justify-center overflow-hidden">
                              <div className="text-8xl mb-4 group-hover:scale-110 transition-transform duration-700">
                                {hobby.icon}
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            </div>
                            
                            {/* Content Section */}
                            <div className="relative h-[30%] flex flex-col items-center justify-center bg-gray-900/5 backdrop-blur-sm overflow-hidden p-4">
                              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00ff88] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-2000"></div>
                              <h3 className="text-xl font-bold text-white uppercase tracking-wider text-center relative leading-tight vietnamese-text">
                                {hobby.name}
                                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-[#00ff88] to-transparent"></div>
                              </h3>
                              <p className="text-gray-300 text-sm text-center mt-2 vietnamese-text leading-relaxed">
                                {hobby.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Mobile Horizontal Scroll */}
                <div className="lg:hidden relative">
                  <div className="overflow-x-auto scrollbar-hide pb-4">
                    <div className="flex gap-4 px-4" style={{scrollSnapType: 'x mandatory'}}>
                      {t?.personal?.hobbies?.items?.map((hobby: any, index: number) => (
                        <div
                          key={index}
                          className="flex-shrink-0 w-80 sm:w-96 group cursor-pointer"
                          style={{scrollSnapAlign: 'start'}}
                          onClick={() => setCurrentHobbyIndex(index)}
                        >
                          <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border-2 border-[#00ff88]/30 shadow-xl group-hover:shadow-[#00ff88]/20 transition-all duration-500">
                            {/* Icon Section */}
                            <div className="relative w-full h-[70%] flex items-center justify-center overflow-hidden">
                              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-700">
                                {hobby.icon}
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            </div>
                            
                            {/* Content Section */}
                            <div className="relative h-[30%] flex flex-col items-center justify-center bg-gray-900/5 backdrop-blur-sm overflow-hidden p-4">
                              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00ff88] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-2000"></div>
                              <h3 className="text-lg font-bold text-white uppercase tracking-wider text-center relative leading-tight vietnamese-text">
                                {hobby.name}
                                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-[#00ff88] to-transparent"></div>
                              </h3>
                              <p className="text-gray-300 text-xs text-center mt-2 vietnamese-text leading-relaxed">
                                {hobby.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={() => setCurrentHobbyIndex((prev) => 
                    prev === 0 ? (t?.personal?.hobbies?.items?.length || 1) - 1 : prev - 1
                  )}
                  className="hidden lg:flex absolute left-5 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-[#00ff88]/15 backdrop-blur-lg border-2 border-[#00ff88]/30 rounded-full items-center justify-center hover:bg-[#00ff88]/25 transition-all duration-300 hover:scale-110 group z-50"
                  aria-label="Previous hobby"
                >
                  <svg className="h-8 w-8 text-[#00ff88] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15 18-6-6 6-6" />
                  </svg>
                </button>

                <button
                  onClick={() => setCurrentHobbyIndex((prev) => 
                    prev === (t?.personal?.hobbies?.items?.length || 1) - 1 ? 0 : prev + 1
                  )}
                  className="hidden lg:flex absolute right-5 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-[#00ff88]/15 backdrop-blur-lg border-2 border-[#00ff88]/30 rounded-full items-center justify-center hover:bg-[#00ff88]/25 transition-all duration-300 hover:scale-110 group z-50"
                  aria-label="Next hobby"
                >
                  <svg className="h-8 w-8 text-[#00ff88] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 18 6-6-6-6" />
                  </svg>
                </button>

                {/* Mobile Navigation Buttons */}
                <div className="lg:hidden flex justify-center gap-4 mt-6">
                  <button
                    onClick={() => setCurrentHobbyIndex((prev) => 
                      prev === 0 ? (t?.personal?.hobbies?.items?.length || 1) - 1 : prev - 1
                    )}
                    className="w-12 h-12 bg-[#00ff88]/15 backdrop-blur-lg border-2 border-[#00ff88]/30 rounded-full flex items-center justify-center hover:bg-[#00ff88]/25 transition-all duration-300 hover:scale-110 group"
                    aria-label="Previous hobby"
                  >
                    <svg className="h-6 w-6 text-[#00ff88] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15 18-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setCurrentHobbyIndex((prev) => 
                      prev === (t?.personal?.hobbies?.items?.length || 1) - 1 ? 0 : prev + 1
                    )}
                    className="w-12 h-12 bg-[#00ff88]/15 backdrop-blur-lg border-2 border-[#00ff88]/30 rounded-full flex items-center justify-center hover:bg-[#00ff88]/25 transition-all duration-300 hover:scale-110 group"
                    aria-label="Next hobby"
                  >
                    <svg className="h-6 w-6 text-[#00ff88] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-6 lg:mt-8 gap-3 z-50">
                  {t?.personal?.hobbies?.items?.map((_: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => setCurrentHobbyIndex(index)}
                      className={`transition-all duration-300 border-2 border-[#00ff88]/50 rounded-full hover:scale-110 ${
                        index === currentHobbyIndex
                          ? 'w-8 h-3 sm:w-10 sm:h-3 bg-[#00ff88] shadow-lg shadow-[#00ff88]/60'
                          : 'w-3 h-3 bg-[#00ff88]/30 hover:bg-[#00ff88]/50'
                      }`}
                      aria-label={`Go to hobby ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Counter */}
                <div className="flex justify-center mt-4">
                  <div className="bg-gray-900/20 backdrop-blur-sm px-4 py-2 rounded-full border border-[#00ff88]/20">
                    <span className="text-sm text-white/80 font-medium">
                      {currentHobbyIndex + 1} / {t?.personal?.hobbies?.items?.length || 1}
                    </span>
                  </div>
                </div>
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

              <div className="space-y-8">
                {t?.personal?.extracurriculars?.items?.map((activity: any, index: number) => (
                  <div key={index} className="group">
                    {/* Header */}
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#00d4ff]/20 to-[#7c3aed]/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">{activity.icon}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-2xl font-bold text-white mb-2 vietnamese-text">
                          {activity.name}
                        </h3>
                        <p className="text-[#00d4ff] font-medium mb-4">
                          {activity.name === "Basketball Team Captain" || activity.name === "Đội trưởng đội bóng rổ" 
                            ? activity.organization 
                            : `${activity.organization} • ${activity.period}`}
                        </p>
                        
                        {/* Links */}
                        {(activity.website || activity.linkedin) && (
                          <div className="flex gap-3 mb-6">
                            {activity.website && (
                              <a 
                                href={activity.website} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-xl text-[#00d4ff] hover:bg-[#00d4ff]/20 transition-all duration-300"
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
                                className="inline-flex items-center gap-2 px-4 py-2 bg-[#0077b5]/10 border border-[#0077b5]/30 rounded-xl text-[#0077b5] hover:bg-[#0077b5]/20 transition-all duration-300"
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
                    <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-[#00d4ff]/30 transition-all duration-500">
                      {/* Roles */}
                      {activity.roles && activity.roles.length > 0 ? (
                        <div className="space-y-8">
                          {activity.roles.map((role: any, roleIndex: number) => (
                            <div key={roleIndex} className="border-l-4 border-[#00d4ff]/40 pl-6">
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                <h4 className="text-xl font-bold text-white vietnamese-text">
                                  {role.title}
                                </h4>
                                <span className="text-[#00d4ff] font-medium text-sm">
                                  {role.period}
                                </span>
                              </div>
                              
                              {/* Role Description */}
                              {role.description && role.description.length > 0 && (
                                <div className="mb-6">
                                  <ul className="space-y-3">
                                    {role.description.map((desc: string, descIndex: number) => (
                                      <li key={descIndex} className="text-gray-300 leading-relaxed vietnamese-text flex items-start gap-3 group">
                                        <div className="w-2 h-2 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                                        <span className="group-hover:text-white transition-colors duration-300">{desc}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              
                              {/* Achievements */}
                              {role.achievements && role.achievements.length > 0 && (
                                <div>
                                  <h5 className="text-[#00ff88] font-semibold mb-3 vietnamese-text">
                                    {language === 'vi' ? 'Thành tựu nổi bật:' : 'Key Achievements:'}
                                  </h5>
                                  <ul className="space-y-3">
                                    {role.achievements.map((achievement: string, achIndex: number) => (
                                      <li key={achIndex} className="text-gray-300 leading-relaxed vietnamese-text flex items-start gap-3 group">
                                        <div className="w-2 h-2 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
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
                        <p className="text-gray-300 leading-relaxed vietnamese-text text-lg">
                          {activity.description}
                        </p>
                      )}
                      
                      {/* Images Gallery */}
                      {activity.images && activity.images.length > 0 && (
                        <div className="mt-8 pt-6 border-t border-white/10">
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
