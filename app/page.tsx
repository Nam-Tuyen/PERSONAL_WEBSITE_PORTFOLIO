"use client"

import { useState, useEffect } from "react"
import {
  Linkedin,
  Mail,
  MapPin,
  Download,
  Menu,
  X,
  Code,
  Database,
  BarChart3,
  Bot,
  Globe,
  Zap,
  ChevronRight,
  ExternalLink,
  Calendar,
  Briefcase,
  Users,
  Award,
  Target,
  Terminal,
  Cpu,
  Rocket,
  Star,
  ArrowRight,
  Sparkles,
  Brain,
  Lightbulb,
  Shield,
  Layers,
  Activity,
  Eye,
  MousePointer,
  Palette,
  Monitor,
  Smartphone,
  Tablet,
  User,
} from "lucide-react"

// Import data and components
import { translations } from "./data/translations"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import ExperienceSection from "./components/ExperienceSection"

export default function Portfolio() {
  const [language, setLanguage] = useState("vi")
  const [activeSection, setActiveSection] = useState("professional")
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null)

  const t = translations[language as keyof typeof translations]

  return (
    <div className="min-h-screen galaxy-bg text-white overflow-x-hidden relative">
      {/* Tech Grid Background */}
      <div className="fixed inset-0 tech-grid opacity-20 pointer-events-none"></div>
      
      {/* Cosmic Dust */}
      <div className="cosmic-dust" style={{top: '10%', left: '20%', animationDelay: '0s'}}></div>
      <div className="cosmic-dust" style={{top: '30%', left: '70%', animationDelay: '5s'}}></div>
      <div className="cosmic-dust" style={{top: '60%', left: '15%', animationDelay: '10s'}}></div>
      <div className="cosmic-dust" style={{top: '80%', left: '85%', animationDelay: '15s'}}></div>
      
      {/* Shooting Stars */}
      <div className="shooting-star" style={{top: '20%', left: '10%', animationDelay: '0s'}}></div>
      <div className="shooting-star" style={{top: '40%', left: '80%', animationDelay: '2s'}}></div>
      <div className="shooting-star" style={{top: '70%', left: '20%', animationDelay: '4s'}}></div>
      <div className="shooting-star" style={{top: '30%', left: '90%', animationDelay: '6s'}}></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gradient-primary">LE NAM TUYEN</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setLanguage(language === "vi" ? "en" : "vi")}
                className="px-3 py-1 bg-gradient-to-r from-[#00ff88]/20 to-[#00d4ff]/20 border border-[#00ff88]/30 rounded-full text-sm font-medium text-[#00ff88] hover:from-[#00ff88]/30 hover:to-[#00d4ff]/30 transition-all"
              >
                {language === "vi" ? "EN" : "VI"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection t={t} />

        {/* About Section */}
        <AboutSection t={t} />

        {/* Experience Section */}
        <ExperienceSection t={t} />

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-24 relative galaxy-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="text-center mb-12 md:mb-16 animate-fade-in">
              <h3 className="text-gradient-cyber text-sm tracking-widest mb-5">
                {t.projects.label}
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto text-sm sm:text-base">
                {t.projects.intro}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {t.projects.items.map((project: any, index: number) => (
                <div 
                  key={index}
                  className="card-tech group hover:scale-105 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative overflow-hidden rounded-2xl mb-4 sm:mb-6">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-tech rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h4 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-gradient-primary transition-all">
                      {project.title}
                    </h4>
                    <p className="text-gradient-tech font-semibold text-base sm:text-lg mb-3">
                      {project.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-24 text-center relative">
          <div className="max-w-7xl mx-auto px-10">
            <div className="mb-16 animate-fade-in">
              <h3 className="text-gradient-primary text-sm tracking-widest mb-5">
                {t.testimonial.label}
              </h3>
            </div>

            <div className="max-w-4xl mx-auto card-tech text-center animate-scale-in">
              <p 
                className="text-2xl md:text-3xl leading-relaxed mb-8 font-light"
                dangerouslySetInnerHTML={{ __html: t.testimonial.quote }}
              />
              <div className="flex items-center justify-center gap-6">
                <img 
                  src={t.testimonial.image} 
                  alt="Author" 
                  className="w-16 h-16 rounded-full border-4 border-gradient-primary"
                />
                <div className="text-left">
                  <h5 className="text-lg font-bold mb-1">
                    {t.testimonial.author}
                  </h5>
                  <p className="text-gray-400 text-sm">
                    {t.testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 text-center relative">
          <div className="max-w-7xl mx-auto px-10">
            <div className="mb-16 animate-fade-in">
              <h3 className="text-gradient-primary text-sm tracking-widest mb-5">
                {t.contact.label}
              </h3>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                {t.contact.title}
              </h2>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {t.contact.social.map((social: any, index: number) => (
                  <a
                    key={index}
                    href={social.url}
                    className="group flex flex-col items-center p-6 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-[#00ff88]/30 transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      {social.icon === "Li" && <Linkedin className="w-6 h-6 text-white" />}
                      {social.icon === "Em" && <Mail className="w-6 h-6 text-white" />}
                      {social.icon === "Gh" && <Code className="w-6 h-6 text-white" />}
                      {social.icon === "Po" && <Globe className="w-6 h-6 text-white" />}
                    </div>
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>

              <button className="btn-primary group">
                <span>{t.contact.button}</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
