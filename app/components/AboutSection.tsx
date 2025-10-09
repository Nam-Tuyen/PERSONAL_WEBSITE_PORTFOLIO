"use client"

import { ChevronRight, Sparkles, Brain, Lightbulb, Shield, Layers, Activity } from "lucide-react"

interface AboutSectionProps {
  t: any
}

export default function AboutSection({ t }: AboutSectionProps) {
  return (
    <section className="py-24 relative galaxy-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12 relative">
            <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-px bg-gradient-to-r from-transparent via-[#00ff88] to-[#00d4ff]"></div>
            <div className="relative">
              <span className="text-[#00ff88] text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-[4px] sm:tracking-[6px] md:tracking-[8px] font-black uppercase relative z-10">
                {t.about.label}
              </span>
              <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-[#00ff88]/30 to-[#00d4ff]/30 blur-lg sm:blur-xl rounded-full"></div>
              <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-[#00ff88]/20 to-[#00d4ff]/20 blur-md sm:blur-lg rounded-full"></div>
            </div>
            <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-px bg-gradient-to-r from-[#00d4ff] via-[#7c3aed] to-transparent"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="animate-slide-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 leading-tight">
              <span className="block text-white">{t.about.title}</span>
            </h2>
            
            <div className="mb-8">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-primary mb-6 leading-tight">
                {t.about.name}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {t.about.description}
              </p>
            </div>

            {/* Quote Section */}
            <div className="mb-8 p-6 bg-gradient-to-r from-[#00ff88]/10 to-[#00d4ff]/10 border border-[#00ff88]/20 rounded-2xl backdrop-blur-sm">
              <p className="text-lg font-medium text-white italic leading-relaxed">
                "{t.about.quote}"
              </p>
            </div>

            {/* CTA Button */}
            <button className="btn-outline-gradient group">
              <span>{t.about.button}</span>
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Main Visual Container */}
              <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-full flex items-center justify-center shadow-lg">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-[#7c3aed] to-[#00d4ff] rounded-full flex items-center justify-center shadow-lg">
                  <Brain className="w-3 h-3 text-white" />
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Lightbulb className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-white font-bold text-lg mb-2">Innovation</h4>
                    <p className="text-gray-400 text-sm">Creative Solutions</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-white font-bold text-lg mb-2">Security</h4>
                    <p className="text-gray-400 text-sm">Data Protection</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#7c3aed] to-[#00ff88] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Layers className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-white font-bold text-lg mb-2">Architecture</h4>
                    <p className="text-gray-400 text-sm">Scalable Design</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00ff88] to-[#7c3aed] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Activity className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-white font-bold text-lg mb-2">Analytics</h4>
                    <p className="text-gray-400 text-sm">Data Insights</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
