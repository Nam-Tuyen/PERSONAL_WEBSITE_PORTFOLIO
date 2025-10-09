"use client"

import { Linkedin, Mail, MapPin, Download, ArrowRight } from "lucide-react"

interface HeroSectionProps {
  t: any
}

export default function HeroSection({ t }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center relative galaxy-section">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="shooting-star" style={{top: '20%', left: '10%', animationDelay: '0s'}}></div>
        <div className="shooting-star" style={{top: '40%', left: '80%', animationDelay: '2s'}}></div>
        <div className="shooting-star" style={{top: '70%', left: '20%', animationDelay: '4s'}}></div>
        <div className="shooting-star" style={{top: '30%', left: '90%', animationDelay: '6s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Location */}
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00ff88]/10 to-[#00d4ff]/10 border border-[#00ff88]/20 rounded-full backdrop-blur-sm">
              <MapPin className="w-4 h-4 text-[#00ff88]" />
              <span className="text-sm font-medium text-gray-300">{t.header.location}</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="mb-12 animate-slide-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="block text-white">{t.hero.greeting}</span>
              <span className="block text-gradient-primary">{t.hero.name}</span>
            </h1>
            
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                {t.hero.title}
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto whitespace-pre-line">
                {t.hero.subtitle}
              </p>
            </div>

            {/* CTA Button */}
            <div className="mb-12">
              <button className="btn-primary group">
                <span>{t.hero.cta}</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 animate-fade-in">
            <a 
              href="https://www.linkedin.com/in/tuyen-le-nam-7614a1269/" 
              className="w-12 h-12 bg-gradient-to-br from-[#0077b5] to-[#005885] rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a 
              href="mailto:bingo.namtuyen@gmail.com" 
              className="w-12 h-12 bg-gradient-to-br from-[#ea4335] to-[#d33b2c] rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
            >
              <Mail className="w-6 h-6 text-white" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-gradient-to-br from-[#00ff88] to-[#00cc6a] rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
            >
              <Download className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
