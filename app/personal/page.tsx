'use client'

import React, { useState, useEffect } from 'react'
import { translations } from '../data/translations'
import Sidebar from '../components/Sidebar'
import UniverseBackground from '../components/UniverseBackground'
import TopNavigation from '../components/TopNavigation'

export default function PersonalPage() {
  const [language, setLanguage] = useState<'en' | 'vi'>('en')
  const [activeSection, setActiveSection] = useState<string>('hobbies')

  const t = translations[language]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'vi' : 'en')
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <UniverseBackground />
      
      {/* Top Navigation */}
      <TopNavigation 
        language={language} 
        onLanguageToggle={toggleLanguage}
      />
      
      {/* Sidebar */}
      <Sidebar 
        language={language} 
        onLanguageToggle={toggleLanguage}
        activeSection={activeSection}
        onSectionChange={scrollToSection}
        isPersonalPage={true}
      />

      {/* Main Content */}
      <div className="relative z-10 ml-0 lg:ml-80 pt-16 transition-all duration-300">
        <div className="min-h-screen">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-20">
            
            {/* Hero Section */}
            <section className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32">
              <div className="text-center">
                <div className="space-y-4 sm:space-y-6 md:space-y-8">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] mb-6 sm:mb-8 tracking-tight leading-tight vietnamese-text gradient-text">
                    {t?.personal?.title || "PERSONAL"}
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium leading-relaxed max-w-3xl mx-auto">
                    {t?.personal?.subtitle || "Discover my personal interests, activities, and achievements beyond the professional realm"}
                  </p>
                </div>
              </div>
            </section>

            {/* Hobbies Section */}
            {activeSection === "hobbies" && (
              <section id="hobbies" className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                  <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] mb-4 sm:mb-6 tracking-tight leading-tight vietnamese-text gradient-text">
                      {t?.hobbies?.title || "PERSONAL HOBBIES"}
                    </h2>
                    <div className="w-16 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-[#7c3aed] to-[#00ff88] mx-auto"></div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {t?.hobbies?.items?.map((hobby: any, index: number) => (
                      <div key={index} className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/10 to-[#00d4ff]/10 rounded-2xl sm:rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                        <div className="relative bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-[#7c3aed]/40 transition-all duration-500 shadow-2xl group-hover:shadow-[#7c3aed]/25">
                          <div className="text-center">
                            <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                              {hobby.icon}
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-[#7c3aed] transition-colors duration-300">
                              {hobby.name}
                            </h3>
                            <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                              {hobby.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Extracurriculars Section */}
            {activeSection === "extracurriculars" && (
              <section id="extracurriculars" className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                  <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] mb-4 sm:mb-6 tracking-tight leading-tight vietnamese-text gradient-text">
                      {t?.extracurriculars?.title || "EXTRACURRICULAR ACTIVITIES"}
                    </h2>
                    <div className="w-16 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-[#7c3aed] to-[#00ff88] mx-auto"></div>
                  </div>
                  
                  <div className="space-y-8 sm:space-y-12">
                    {t?.extracurriculars?.items?.map((activity: any, index: number) => (
                      <div key={index} className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/10 to-[#7c3aed]/10 rounded-2xl sm:rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                        <div className="relative bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-[#00ff88]/40 transition-all duration-500 shadow-2xl group-hover:shadow-[#00ff88]/25">
                          <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                            <div className="flex-1">
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-0 group-hover:text-[#00ff88] transition-colors duration-300">
                                  {activity.name}
                                </h3>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                  <span className="text-sm sm:text-base text-[#00ff88] font-semibold bg-[#00ff88]/10 px-3 py-1 rounded-full">
                                    {activity.role}
                                  </span>
                                  <span className="text-sm sm:text-base text-gray-400">
                                    {activity.period}
                                  </span>
                                </div>
                              </div>
                              <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                                {activity.description}
                              </p>
                              <div className="space-y-2">
                                <h4 className="text-lg font-semibold text-white mb-3">{t?.extracurriculars?.keyAchievements || "Key Achievements"}:</h4>
                                <ul className="space-y-2">
                                  {activity.achievements?.map((achievement: string, achievementIndex: number) => (
                                    <li key={achievementIndex} className="flex items-start space-x-3">
                                      <div className="w-2 h-2 bg-[#00ff88] rounded-full mt-2 flex-shrink-0"></div>
                                      <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                                        {achievement}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Social Activities Section */}
            {activeSection === "socialActivities" && (
              <section id="socialActivities" className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                  <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] mb-4 sm:mb-6 tracking-tight leading-tight vietnamese-text gradient-text">
                      {t?.socialActivities?.title || "SOCIAL ACTIVITIES"}
                    </h2>
                    <div className="w-16 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-[#7c3aed] to-[#00ff88] mx-auto"></div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                    {t?.socialActivities?.items?.map((activity: any, index: number) => (
                      <div key={index} className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/10 to-[#7c3aed]/10 rounded-2xl sm:rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                        <div className="relative bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-[#00d4ff]/40 transition-all duration-500 shadow-2xl group-hover:shadow-[#00d4ff]/25">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-0 group-hover:text-[#00d4ff] transition-colors duration-300">
                              {activity.name}
                            </h3>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                              <span className="text-sm sm:text-base text-[#00d4ff] font-semibold bg-[#00d4ff]/10 px-3 py-1 rounded-full">
                                {activity.role}
                              </span>
                              <span className="text-sm sm:text-base text-gray-400">
                                {activity.period}
                              </span>
                            </div>
                          </div>
                          <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300">
                            {activity.description}
                          </p>
                          <div className="bg-gradient-to-r from-[#00d4ff]/10 to-[#7c3aed]/10 rounded-lg p-4 border border-[#00d4ff]/20">
                            <h4 className="text-sm font-semibold text-[#00d4ff] mb-2">{t?.socialActivities?.impact || "Impact"}:</h4>
                            <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                              {activity.impact}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Research Achievement Section */}
            {activeSection === "researchAchievement" && (
              <section id="researchAchievement" className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                  <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] mb-4 sm:mb-6 tracking-tight leading-tight vietnamese-text gradient-text">
                      {t?.researchAchievement?.title || "RESEARCH ACHIEVEMENTS"}
                    </h2>
                    <div className="w-16 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-[#7c3aed] to-[#00ff88] mx-auto"></div>
                  </div>
                  
                  <div className="space-y-8 sm:space-y-12">
                    {t?.researchAchievement?.items?.map((research: any, index: number) => (
                      <div key={index} className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/10 to-[#00ff88]/10 rounded-2xl sm:rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                        <div className="relative bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-[#7c3aed]/40 transition-all duration-500 shadow-2xl group-hover:shadow-[#7c3aed]/25">
                          <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                            <div className="flex-1">
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-0 group-hover:text-[#7c3aed] transition-colors duration-300">
                                  {research.name}
                                </h3>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                  <span className="text-sm sm:text-base text-[#7c3aed] font-semibold bg-[#7c3aed]/10 px-3 py-1 rounded-full">
                                    {research.type}
                                  </span>
                                  <span className={`text-sm sm:text-base px-3 py-1 rounded-full font-semibold ${
                                    research.status === 'Published' || research.status === 'Đã xuất bản' 
                                      ? 'text-green-400 bg-green-400/10' 
                                      : research.status === 'In Progress' || research.status === 'Đang thực hiện'
                                      ? 'text-yellow-400 bg-yellow-400/10'
                                      : 'text-blue-400 bg-blue-400/10'
                                  }`}>
                                    {research.status}
                                  </span>
                                </div>
                              </div>
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                                <span className="text-sm sm:text-base text-gray-400">
                                  {research.period}
                                </span>
                              </div>
                              <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                                {research.description}
                              </p>
                              <div className="space-y-4">
                                <div>
                                  <h4 className="text-lg font-semibold text-white mb-3">{t?.researchAchievement?.keyAchievements || "Key Achievements"}:</h4>
                                  <ul className="space-y-2">
                                    {research.achievements?.map((achievement: string, achievementIndex: number) => (
                                      <li key={achievementIndex} className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-[#7c3aed] rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                                          {achievement}
                                        </span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="text-lg font-semibold text-white mb-3">{t?.researchAchievement?.technologiesUsed || "Technologies Used"}:</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {research.technologies?.map((tech: string, techIndex: number) => (
                                      <span key={techIndex} className="px-3 py-1 bg-[#7c3aed]/10 text-[#7c3aed] rounded-full text-sm font-medium border border-[#7c3aed]/20">
                                        {tech}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}
