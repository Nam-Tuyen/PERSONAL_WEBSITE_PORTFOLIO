"use client"

import React from "react"
import HeroSection from "./HeroSection"
import AboutSection from "./AboutSection"
import EducationSection from "./EducationSection"
import WorkExperienceSection from "./WorkExperienceSection"

interface BodyProps {
  activeSection: string
  translations: any
}

export default function Body({ activeSection, translations }: BodyProps) {
  return (
    <main className="relative z-10">
      {/* Body Universe Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Additional Stars for Body */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white rounded-full animate-twinkle opacity-50"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Floating Constellations */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 flex space-x-2 animate-constellation-float">
            <div className="w-1 h-1 bg-[#00ff88] rounded-full"></div>
            <div className="w-1 h-1 bg-[#00ff88] rounded-full"></div>
            <div className="w-1 h-1 bg-[#00ff88] rounded-full"></div>
            <div className="w-1 h-1 bg-[#00ff88] rounded-full"></div>
          </div>
          
          <div className="absolute bottom-1/4 right-1/4 flex space-x-3 animate-constellation-float" style={{animationDelay: '3s'}}>
            <div className="w-1 h-1 bg-[#00d4ff] rounded-full"></div>
            <div className="w-1 h-1 bg-[#00d4ff] rounded-full"></div>
            <div className="w-1 h-1 bg-[#00d4ff] rounded-full"></div>
            <div className="w-1 h-1 bg-[#00d4ff] rounded-full"></div>
            <div className="w-1 h-1 bg-[#00d4ff] rounded-full"></div>
          </div>
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex space-x-2 animate-constellation-float" style={{animationDelay: '6s'}}>
            <div className="w-1 h-1 bg-[#7c3aed] rounded-full"></div>
            <div className="w-1 h-1 bg-[#7c3aed] rounded-full"></div>
            <div className="w-1 h-1 bg-[#7c3aed] rounded-full"></div>
          </div>
        </div>
        
        {/* Energy Waves */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-16 h-16 border border-[#00ff88]/20 rounded-full animate-pulse" style={{animationDuration: '4s'}}></div>
          <div className="absolute bottom-1/3 right-1/3 w-20 h-20 border border-[#00d4ff]/15 rounded-full animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}}></div>
          <div className="absolute top-2/3 left-2/3 w-12 h-12 border border-[#7c3aed]/10 rounded-full animate-pulse" style={{animationDuration: '8s', animationDelay: '4s'}}></div>
        </div>
      </div>
      {/* Professional Section */}
      {activeSection === "professional" && (
        <>
          {/* Hero Section */}
          <HeroSection
            greeting={translations.hero.greeting}
            name={translations.hero.name}
            title={translations.hero.title}
          />

          {/* About Section */}
          <AboutSection
            label={translations.about.label}
            quote={translations.about.quote}
            description={translations.about.description}
          />

          {/* Education Section */}
          <EducationSection
            title={translations.education.title}
            data={translations.education}
          />

          {/* Work Experience Section */}
          <WorkExperienceSection
            title={translations.workExperience.title}
            experiences={[translations.workExperience.agribank, translations.workExperience.maybank]}
          />
        </>
      )}

      {/* Personal Section */}
      {activeSection === "personal" && (
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
            {/* Personal Content Header */}
            <div className="mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-wider bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent mb-8">
                Personal Life
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover more about my personal interests, hobbies, and life outside of work.
              </p>
            </div>

            {/* Personal Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Hobbies Card */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-[#00ff88]/30 transition-all duration-500 hover:scale-105">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#00ff88]/25">
                      <span className="text-white font-bold text-2xl">🎯</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Hobbies</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Photography, reading tech blogs, exploring new technologies, and playing basketball.
                    </p>
                  </div>
                </div>
              </div>

              {/* Interests Card */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-[#00d4ff]/30 transition-all duration-500 hover:scale-105">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#00d4ff]/25">
                      <span className="text-white font-bold text-2xl">🚀</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Interests</h3>
                    <p className="text-gray-300 leading-relaxed">
                      FinTech innovation, data science, product management, and emerging technologies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Goals Card */}
              <div className="group relative md:col-span-2 lg:col-span-1">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#7c3aed] to-[#00ff88] rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-[#7c3aed]/30 transition-all duration-500 hover:scale-105">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#7c3aed] to-[#00ff88] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#7c3aed]/25">
                      <span className="text-white font-bold text-2xl">🎯</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Goals</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Become a leading Product Manager in FinTech, contribute to innovative solutions, and mentor others.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Quote */}
            <div className="mt-16 relative">
              <div className="max-w-4xl mx-auto">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#00ff88]/20 via-[#00d4ff]/20 to-[#7c3aed]/20 rounded-2xl blur opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 sm:p-12">
                    <blockquote className="text-2xl sm:text-3xl md:text-4xl text-center font-great-vibes italic text-white leading-relaxed">
                      "Life is about continuous learning, growing, and making a positive impact through technology."
                    </blockquote>
                    <cite className="block text-center mt-6 text-[#00ff88] font-semibold text-lg">
                      - LE NAM TUYEN
                    </cite>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
