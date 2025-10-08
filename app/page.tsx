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

export default function Portfolio() {
  const [currentTime, setCurrentTime] = useState("--:--:--")
  const [language, setLanguage] = useState("vi")

  // Update time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')
      const seconds = String(now.getSeconds()).padStart(2, '0')
      setCurrentTime(`${hours} : ${minutes} : ${seconds}`)
    }
    
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const translations = {
    vi: {
      header: {
        location: "HỒ CHÍ MINH, VIỆT NAM",
      },
      hero: {
        greeting: "XIN CHÀO, TÔI LÀ TUYÊN!",
        title: "TẠO RA CÁC SẢN PHẨM<br/>DỮ LIỆU VÀ<br/>FINTECH ĐÁNG NHỚ",
        subtitle: "Tôi là một Data Analyst & FinTech Specialist với sứ mệnh tạo ra những giải pháp dữ liệu đầy cảm hứng và thu hút người dùng.",
      },
      about: {
        label: "VỀ TÔI",
        title: "TÔI MANG ĐẾN TRẢI NGHIỆM DỮ LIỆU XUẤT SẮC TRÊN NHIỀU NỀN TẢNG.",
        name: "LÊ NAM <span>TUYÊN</span>",
        description: "Là một Data Analyst & FinTech Specialist với 2 năm kinh nghiệm, tôi luôn đặt trái tim và tâm hồn vào việc tạo ra những sản phẩm không chỉ đẹp mắt mà còn mang lại trải nghiệm tuyệt vời. Hiện tại, tôi đang là sinh viên năm cuối ngành Công nghệ Tài chính tại Đại học Kinh tế - Luật.",
        button: "TÌM HIỂU THÊM",
      },
      services: {
        label: "DỊCH VỤ CỦA TÔI",
        items: [
          "PHÂN TÍCH DỮ LIỆU",
          "FINTECH SOLUTIONS",
          "DASHBOARD DESIGN",
          "BUSINESS INTELLIGENCE",
        ],
      },
      projects: {
        label: "DỰ ÁN CỦA TÔI",
        intro: "Đây là một số dự án yêu thích của tôi, nơi tôi đã ưu tiên trải nghiệm người dùng và tính thẩm mỹ trực quan. Mỗi dự án phản ánh sự cống hiến của tôi trong việc tạo ra những trải nghiệm số liền mạch và thú vị.",
        items: [
          {
            title: "FINTECH DASHBOARD",
            year: "2024",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
          },
          {
            title: "DATA ANALYTICS PLATFORM",
            year: "2024",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
          },
          {
            title: "BUSINESS INTELLIGENCE",
            year: "2024",
            image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
          },
        ],
      },
      testimonial: {
        label: "ĐÁNH GIÁ",
        quote: "Tuyên đã làm một công việc tuyệt vời trong việc phân tích dữ liệu và thiết kế dashboard của chúng tôi. <span>Nó trông thật tuyệt vời!</span>",
        author: "Nguyễn Văn A",
        position: "CEO of FinTech Startup",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      },
      contact: {
        label: "BẠN CÓ DỰ ÁN TRONG ĐẦU?",
        title: "HÃY <span>KẾT NỐI</span>",
        button: "GỬI TIN NHẮN",
        social: [
          { name: "LinkedIn", icon: "Li", url: "https://www.linkedin.com/in/tuyen-le-nam-7614a1269/" },
          { name: "Email", icon: "Em", url: "mailto:bingo.namtuyen@gmail.com" },
          { name: "GitHub", icon: "Gh", url: "#" },
          { name: "Portfolio", icon: "Po", url: "#" },
        ],
      },
      footer: {
        copyright: "© 2024 LÊ NAM TUYÊN. DATA ANALYST & FINTECH SPECIALIST TẠI HỒ CHÍ MINH",
        nav: ["VỀ TÔI", "DỊCH VỤ", "DỰ ÁN", "LIÊN HỆ"],
      },
    },
    en: {
      header: {
        location: "HO CHI MINH, VIETNAM",
      },
      hero: {
        greeting: "HELLO, I'M TUYEN!",
        title: "CREATING MEMORABLE<br/>DATA &<br/>FINTECH PRODUCTS",
        subtitle: "I am a Data Analyst & FinTech Specialist with a mission to create inspiring and engaging data solutions.",
      },
      about: {
        label: "ABOUT ME",
        title: "I DELIVER EXCELLENT DATA EXPERIENCES ACROSS MULTIPLE PLATFORMS.",
        name: "LE NAM <span>TUYEN</span>",
        description: "As a Data Analyst & FinTech Specialist with 2 years of experience, I always put my heart and soul into creating products that are not only beautiful but also provide excellent experiences. Currently, I am a final-year student majoring in Financial Technology at University of Economics and Law.",
        button: "LEARN MORE",
      },
      services: {
        label: "MY SERVICES",
        items: [
          "DATA ANALYTICS",
          "FINTECH SOLUTIONS",
          "DASHBOARD DESIGN",
          "BUSINESS INTELLIGENCE",
        ],
      },
      projects: {
        label: "MY PROJECTS",
        intro: "Here are some of my favorite projects where I prioritized user experience and visual aesthetics. Each project reflects my dedication to creating seamless and engaging digital experiences.",
        items: [
          {
            title: "FINTECH DASHBOARD",
            year: "2024",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
          },
          {
            title: "DATA ANALYTICS PLATFORM",
            year: "2024",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
          },
          {
            title: "BUSINESS INTELLIGENCE",
            year: "2024",
            image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
          },
        ],
      },
      testimonial: {
        label: "TESTIMONIAL",
        quote: "Tuyen did an amazing job analyzing our data and designing our dashboard. <span>It looks absolutely fantastic!</span>",
        author: "Nguyen Van A",
        position: "CEO of FinTech Startup",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      },
      contact: {
        label: "HAVE A PROJECT IN MIND?",
        title: "LET'S <span>CONNECT</span>",
        button: "SEND MESSAGE",
        social: [
          { name: "LinkedIn", icon: "Li", url: "https://www.linkedin.com/in/tuyen-le-nam-7614a1269/" },
          { name: "Email", icon: "Em", url: "mailto:bingo.namtuyen@gmail.com" },
          { name: "GitHub", icon: "Gh", url: "#" },
          { name: "Portfolio", icon: "Po", url: "#" },
        ],
      },
      footer: {
        copyright: "© 2024 LE NAM TUYEN. DATA ANALYST & FINTECH SPECIALIST IN HO CHI MINH",
        nav: ["ABOUT", "SERVICES", "PROJECTS", "CONTACT"],
      },
    },
  }

  const t = translations[language]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex justify-between items-center py-8">
            <div className="text-sm font-bold tracking-widest text-[#00ff88]">
              {t.header.location}
            </div>
            <div className="text-sm font-mono text-gray-400">
              {currentTime}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-24 relative">
        <div className="max-w-7xl mx-auto px-10 relative z-10">
          <div className="animate-fade-in">
            <div className="text-[#00ff88] text-xl font-bold mb-5 animate-fade-in">
              {t.hero.greeting}
            </div>
            <h1 
              className="text-6xl md:text-8xl font-black leading-tight mb-8 uppercase animate-fade-in-delay"
              dangerouslySetInnerHTML={{ __html: t.hero.title }}
            />
            <p className="text-lg text-gray-300 max-w-2xl mb-12 leading-relaxed animate-fade-in-delay-2">
              {t.hero.subtitle}
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <svg className="absolute top-10 left-5 w-80 h-80 opacity-80 animate-rotate-3d" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" stroke="#00ff88" strokeWidth="2" opacity="0.3"/>
          <circle cx="100" cy="100" r="60" stroke="#00ff88" strokeWidth="2" opacity="0.5"/>
          <circle cx="100" cy="100" r="40" fill="#00ff88" opacity="0.2"/>
        </svg>
        
        <svg className="absolute bottom-10 right-5 w-80 h-80 opacity-80 animate-rotate-3d-reverse" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" stroke="#00ff88" strokeWidth="2" opacity="0.3"/>
          <circle cx="100" cy="100" r="60" stroke="#00ff88" strokeWidth="2" opacity="0.5"/>
          <circle cx="100" cy="100" r="40" fill="#00ff88" opacity="0.2"/>
        </svg>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h3 className="text-[#00ff88] text-sm tracking-widest mb-5">
              {t.about.label}
            </h3>
            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-10">
              {t.about.title}
            </h2>
          </div>
          
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] rounded-3xl overflow-hidden shadow-2xl shadow-[#00ff88]/10 transition-transform hover:-translate-y-3">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Avatar-653d9ylzzMfaEqsMFNdohWuJz9BSAB.jpg" 
              alt="Profile" 
              className="w-full h-[500px] object-cover grayscale transition-all duration-300 hover:grayscale-0"
            />
            <div className="p-8 border-t-4 border-[#00ff88]">
              <h2 
                className="text-3xl font-black mb-3"
                dangerouslySetInnerHTML={{ __html: t.about.name }}
              />
              <p className="text-gray-300 leading-relaxed mb-5">
                {t.about.description}
              </p>
              <a 
                href="#contact" 
                className="inline-block px-10 py-4 bg-transparent border-2 border-[#00ff88] text-[#00ff88] rounded-full font-bold uppercase text-xs tracking-widest transition-all hover:bg-[#00ff88] hover:text-[#0a0a0a] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#00ff88]/30"
              >
                {t.about.button}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-10">
          <div className="mb-16">
            <h3 className="text-[#00ff88] text-sm tracking-widest mb-5">
              {t.services.label}
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-[#00ff88] p-0.5">
            {t.services.items.map((service, index) => (
              <div 
                key={index}
                className="bg-[#1a1a1a] p-12 transition-all hover:bg-[#00ff88] hover:text-[#0a0a0a] hover:scale-105"
              >
                <h4 className="text-2xl font-black uppercase">
                  {service}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-10">
          <div className="mb-16">
            <h3 className="text-[#00ff88] text-sm tracking-widest mb-5">
              {t.projects.label}
            </h3>
          </div>
          
          <div className="text-center max-w-4xl mx-auto mb-16">
            <p className="text-gray-300 leading-relaxed text-base">
              {t.projects.intro}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {t.projects.items.map((project, index) => (
              <div 
                key={index}
                className="bg-[#1a1a1a] rounded-3xl overflow-hidden transition-all hover:border-2 hover:border-[#00ff88] hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#00ff88]/20"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-80 object-cover"
                />
                <div className="p-8">
                  <h4 className="text-2xl font-black mb-4">
                    {project.title}
                  </h4>
                  <p className="text-[#00ff88] font-bold text-lg">
                    {project.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 text-center">
        <div className="max-w-7xl mx-auto px-10">
          <div className="mb-16">
            <h3 className="text-[#00ff88] text-sm tracking-widest mb-5">
              {t.testimonial.label}
            </h3>
          </div>
          
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#1a1a1a] to-[#252525] p-16 rounded-3xl border-l-4 border-[#00ff88]">
            <p 
              className="text-3xl leading-relaxed mb-8 font-light"
              dangerouslySetInnerHTML={{ __html: t.testimonial.quote }}
            />
            <div className="flex items-center justify-center gap-5">
              <img 
                src={t.testimonial.image} 
                alt="Author" 
                className="w-16 h-16 rounded-full border-4 border-[#00ff88]"
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
      <section className="py-24 text-center">
        <div className="max-w-7xl mx-auto px-10">
          <div className="mb-16">
            <h3 className="text-[#00ff88] text-sm tracking-widest mb-5">
              {t.contact.label}
            </h3>
          </div>
          <h2 
            className="text-6xl md:text-8xl font-black mb-8"
            dangerouslySetInnerHTML={{ __html: t.contact.title }}
          />
          <a 
            href="mailto:bingo.namtuyen@gmail.com" 
            className="inline-block px-10 py-4 bg-transparent border-2 border-[#00ff88] text-[#00ff88] rounded-full font-bold uppercase text-xs tracking-widest transition-all hover:bg-[#00ff88] hover:text-[#0a0a0a] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#00ff88]/30 mb-12"
          >
            {t.contact.button}
          </a>
          
          <div className="flex justify-center gap-8">
            {t.contact.social.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-[#00ff88] rounded-full flex items-center justify-center text-[#00ff88] transition-all hover:bg-[#00ff88] hover:text-[#0a0a0a] hover:-translate-y-1"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            <div>
              <p className="text-gray-400 text-sm">
                {t.footer.copyright}
              </p>
            </div>
            <nav className="flex gap-8">
              {t.footer.nav.map((item, index) => (
                <a 
                  key={index}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-400 text-sm uppercase tracking-widest transition-colors hover:text-[#00ff88]"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}