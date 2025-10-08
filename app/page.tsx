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
  const [isScrolled, setIsScrolled] = useState(false)

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

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
        name: "LÊ NAM <span>Tuyên</span>",
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
            description: "Dashboard phân tích tài chính với real-time data visualization",
          },
          {
            title: "DATA ANALYTICS PLATFORM",
            year: "2024",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
            description: "Nền tảng phân tích dữ liệu doanh nghiệp với AI insights",
          },
          {
            title: "BUSINESS INTELLIGENCE",
            year: "2024",
            image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
            description: "Hệ thống báo cáo và phân tích kinh doanh thông minh",
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
        name: "LE NAM <span>Tuyen</span>",
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
            description: "Financial analytics dashboard with real-time data visualization",
          },
          {
            title: "DATA ANALYTICS PLATFORM",
            year: "2024",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
            description: "Enterprise data analytics platform with AI insights",
          },
          {
            title: "BUSINESS INTELLIGENCE",
            year: "2024",
            image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
            description: "Smart business reporting and analytics system",
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
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50 text-neutral-900 overflow-x-hidden">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl border-b border-neutral-200/50 shadow-soft' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="text-sm font-semibold tracking-widest text-gradient-primary">
              {t.header.location}
            </div>
            <div className="text-sm font-mono text-neutral-500">
              {currentTime}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="animate-fade-in">
            <div className="text-gradient-primary text-lg font-semibold mb-6 animate-fade-in">
              {t.hero.greeting}
            </div>
            <h1 
              className="text-responsive-xl font-black leading-tight mb-8 text-neutral-900 animate-fade-in-delay"
              dangerouslySetInnerHTML={{ __html: t.hero.title }}
            />
            <p className="text-lg text-neutral-600 max-w-2xl mb-12 leading-relaxed animate-fade-in-delay-2">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
              <button className="btn-gradient-primary">
                <Download className="w-5 h-5 mr-2" />
                TẢI CV
              </button>
              <button className="btn-outline-gradient text-neutral-700">
                <Linkedin className="w-5 h-5 mr-2" />
                LINKEDIN
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 float-element"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-secondary rounded-full opacity-20 float-element"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-accent rounded-full opacity-20 float-element"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-primary rounded-full opacity-20 float-element"></div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            <h3 className="text-gradient-primary text-sm font-semibold tracking-widest mb-6">
              {t.about.label}
            </h3>
            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-10 text-neutral-900">
              {t.about.title}
            </h2>
          </div>
          
          <div className="card-modern animate-slide-up">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Avatar-653d9ylzzMfaEqsMFNdohWuJz9BSAB.jpg" 
              alt="Profile" 
              className="w-full h-80 object-cover rounded-2xl mb-8 grayscale transition-all duration-500 hover:grayscale-0"
            />
            <div className="border-t-4 border-gradient-primary pt-8">
              <h2 
                className="text-3xl font-black mb-4 text-neutral-900"
                dangerouslySetInnerHTML={{ __html: t.about.name }}
              />
              <p className="text-neutral-600 leading-relaxed mb-8">
                {t.about.description}
              </p>
              <button className="btn-gradient-secondary">
                {t.about.button}
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-gradient-primary text-sm font-semibold tracking-widest mb-6">
              {t.services.label}
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.items.map((service, index) => (
              <div 
                key={index}
                className="card-modern text-center group hover:scale-105 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {index === 0 && <Database className="w-8 h-8 text-white" />}
                  {index === 1 && <Code className="w-8 h-8 text-white" />}
                  {index === 2 && <BarChart3 className="w-8 h-8 text-white" />}
                  {index === 3 && <Brain className="w-8 h-8 text-white" />}
                </div>
                <h4 className="text-xl font-bold text-neutral-900 group-hover:text-gradient-primary transition-all">
                  {service}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-gradient-primary text-sm font-semibold tracking-widest mb-6">
              {t.projects.label}
            </h3>
            <p className="text-neutral-600 leading-relaxed max-w-3xl mx-auto">
              {t.projects.intro}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.projects.items.map((project, index) => (
              <div 
                key={index}
                className="card-modern group hover:scale-105 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-neutral-900 mb-2 group-hover:text-gradient-primary transition-all">
                    {project.title}
                  </h4>
                  <p className="text-gradient-secondary font-semibold text-lg mb-3">
                    {project.year}
                  </p>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-gradient-primary text-sm font-semibold tracking-widest mb-6">
              {t.testimonial.label}
            </h3>
          </div>
          
          <div className="max-w-4xl mx-auto card-modern text-center animate-scale-in">
            <p 
              className="text-2xl md:text-3xl leading-relaxed mb-8 text-neutral-700 font-light"
              dangerouslySetInnerHTML={{ __html: t.testimonial.quote }}
            />
            <div className="flex items-center justify-center gap-6">
              <img 
                src={t.testimonial.image} 
                alt="Author" 
                className="w-16 h-16 rounded-full border-4 border-gradient-primary"
              />
              <div className="text-left">
                <h5 className="text-lg font-bold text-neutral-900 mb-1">
                  {t.testimonial.author}
                </h5>
                <p className="text-neutral-500 text-sm">
                  {t.testimonial.position}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-neutral-900 via-neutral-800 to-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="mb-16 animate-fade-in">
            <h3 className="text-gradient-accent text-sm font-semibold tracking-widest mb-6">
              {t.contact.label}
            </h3>
          </div>
          <h2 
            className="text-4xl md:text-6xl font-black mb-8 animate-fade-in-delay"
            dangerouslySetInnerHTML={{ __html: t.contact.title }}
          />
          <button className="btn-gradient-accent mb-12 animate-fade-in-delay-2">
            {t.contact.button}
            <Mail className="w-5 h-5 ml-2" />
          </button>
          
          <div className="flex justify-center gap-6 animate-fade-in-delay-2">
            {t.contact.social.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center text-white transition-all hover:bg-white/20 hover:scale-110 hover:shadow-glow"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-neutral-400 text-sm">
                {t.footer.copyright}
              </p>
            </div>
            <nav className="flex gap-8">
              {t.footer.nav.map((item, index) => (
                <a 
                  key={index}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-neutral-400 text-sm font-medium transition-colors hover:text-gradient-accent"
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