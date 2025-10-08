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
  const [language, setLanguage] = useState("vi")
  const [activeSection, setActiveSection] = useState("professional")

  const translations = {
    vi: {
      header: {
        location: "HỒ CHÍ MINH, VIỆT NAM",
      },
      hero: {
        greeting: "HI, I AM",
        name: "LE NAM TUYEN",
        title: "PRODUCT MANAGER & DATA ANALYST",
        subtitle: "Transforming vision into reality and turning intent into results",
        cta: "CONTACT ME",
      },
      about: {
        label: "ABOUT ME",
        title: "I DELIVER EXCELLENT DATA EXPERIENCES ACROSS MULTIPLE PLATFORMS.",
        headline: [
          "I DELIVER EXCEPTIONAL",
          "DATA EXPERIENCES",
          "ACROSS VARIOUS",
          "PLATFORMS."
        ],
        name: "LE NAM <span>TUYEN</span>",
        description: "As a final-year Financial Technology student at the University of Economics and Law, I specialize in product development, data analytics, and business research. I design and deliver workshops on product discovery, user research, SQL, Python, dashboards, experiment evaluation, and product analytics. I lead cross-functional teams to convert insights into product requirements, define success metrics, and run lean experiments that drive user experience and business outcomes. Proficient in Python, SQL, and modern visualization tools, I build templates and reporting systems that scale quality. My goal is to grow as a Data analyst in FinTech.",
        mainQuote: "Transforming vision into reality and turning intent into results",
        background: "Background includes market research, financial analysis, and mentoring teams through hypothesis formulation, metric selection, and post-mortem review to improve user experience and business outcomes.",
        recognition: "Recognized for establishing templates and processes that scale delivery quality across cohorts and for aligning business strategy with data-driven decision making.",
        objective: "Career objective is to grow as a Product Manager or Product Owner, applying research, analytics, and strategic thinking to build scalable FinTech products that solve meaningful problems.",
        quote: "Transforming vision into reality and turning intent into results",
        button: "LEARN MORE",
        social: [
          { name: "LinkedIn", icon: "Li", url: "https://linkedin.com/in/nam-tuyen" },
          { name: "GitHub", icon: "Gh", url: "https://github.com/Nam-Tuyen" },
          { name: "Email", icon: "Em", url: "mailto:bingo.namtuyen@gmail.com" },
          { name: "Portfolio", icon: "Po", url: "#" },
        ],
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
      personal: {
        title: "CUỘC SỐNG CÁ NHÂN",
        subtitle: "Khám phá những điều thú vị về tôi",
        hobbies: {
          title: "SỞ THÍCH",
          items: [
            { name: "Đọc sách", description: "Yêu thích sách về công nghệ và kinh doanh", icon: "📚" },
            { name: "Du lịch", description: "Khám phá những vùng đất mới", icon: "✈️" },
            { name: "Nấu ăn", description: "Thử nghiệm các món ăn mới", icon: "🍳" },
            { name: "Thể thao", description: "Chạy bộ và bơi lội", icon: "🏃‍♂️" },
          ]
        },
        values: {
          title: "GIÁ TRỊ CỐT LÕI",
          items: [
            "Sáng tạo và đổi mới",
            "Học hỏi liên tục",
            "Làm việc nhóm hiệu quả",
            "Trách nhiệm và đáng tin cậy"
          ]
        },
        goals: {
          title: "MỤC TIÊU",
          description: "Phát triển bản thân và đóng góp tích cực cho cộng đồng công nghệ"
        }
      },
    },
    en: {
      header: {
        location: "HO CHI MINH, VIETNAM",
      },
      hero: {
        greeting: "HI, I AM",
        name: "LE NAM TUYEN",
        title: "PRODUCT MANAGER & DATA ANALYST",
        subtitle: "Transforming vision into reality and turning intent into results",
        cta: "CONTACT ME",
      },
      about: {
        label: "ABOUT ME",
        title: "I DELIVER EXCELLENT DATA EXPERIENCES ACROSS MULTIPLE PLATFORMS.",
        headline: [
          "I DELIVER EXCEPTIONAL",
          "DATA EXPERIENCES",
          "ACROSS VARIOUS",
          "PLATFORMS."
        ],
        name: "LE NAM <span>TUYEN</span>",
        description: "As a final-year Financial Technology student at the University of Economics and Law, I specialize in product development, data analytics, and business research. I design and deliver workshops on product discovery, user research, SQL, Python, dashboards, experiment evaluation, and product analytics. I lead cross-functional teams to convert insights into product requirements, define success metrics, and run lean experiments that drive user experience and business outcomes. Proficient in Python, SQL, and modern visualization tools, I build templates and reporting systems that scale quality. My goal is to grow as a Data analyst in FinTech.",
        mainQuote: "Transforming vision into reality and turning intent into results",
        background: "Background includes market research, financial analysis, and mentoring teams through hypothesis formulation, metric selection, and post-mortem review to improve user experience and business outcomes.",
        recognition: "Recognized for establishing templates and processes that scale delivery quality across cohorts and for aligning business strategy with data-driven decision making.",
        objective: "Career objective is to grow as a Product Manager or Product Owner, applying research, analytics, and strategic thinking to build scalable FinTech products that solve meaningful problems.",
        quote: "Transforming vision into reality and turning intent into results",
        button: "LEARN MORE",
        social: [
          { name: "LinkedIn", icon: "Li", url: "https://linkedin.com/in/nam-tuyen" },
          { name: "GitHub", icon: "Gh", url: "https://github.com/Nam-Tuyen" },
          { name: "Email", icon: "Em", url: "mailto:bingo.namtuyen@gmail.com" },
          { name: "Portfolio", icon: "Po", url: "#" },
        ],
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
      personal: {
        title: "PERSONAL LIFE",
        subtitle: "Discover interesting things about me",
        hobbies: {
          title: "HOBBIES",
          items: [
            { name: "Reading", description: "Love books about technology and business", icon: "📚" },
            { name: "Traveling", description: "Exploring new places", icon: "✈️" },
            { name: "Cooking", description: "Experimenting with new recipes", icon: "🍳" },
            { name: "Sports", description: "Running and swimming", icon: "🏃‍♂️" },
          ]
        },
        values: {
          title: "CORE VALUES",
          items: [
            "Creativity and innovation",
            "Continuous learning",
            "Effective teamwork",
            "Responsibility and reliability"
          ]
        },
        goals: {
          title: "GOALS",
          description: "Personal development and positive contribution to the tech community"
        }
      },
    },
  }

  const t = translations[language]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] text-white overflow-x-hidden relative">
      {/* Tech Grid Background */}
      <div className="fixed inset-0 tech-grid opacity-20 pointer-events-none"></div>
      
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass-tech">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex justify-between items-center py-4 sm:py-6">
            <div className="text-xs sm:text-sm font-bold tracking-widest text-gradient-primary">
              {t.header.location}
      </div>

            {/* Navigation */}
            <nav className="flex items-center gap-2 sm:gap-4 lg:gap-8">
                <button
                onClick={() => setActiveSection("professional")}
                className={`px-3 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-xs sm:text-sm ${
                  activeSection === "professional"
                    ? "bg-gradient-primary text-white shadow-lg shadow-[#00ff88]/30"
                    : "text-gray-300 hover:text-white hover:bg-[#1a1a1a]/50"
                }`}
              >
                <span className="hidden sm:inline">PROFESSIONAL</span>
                <span className="sm:hidden">PRO</span>
                </button>
              <button
                onClick={() => setActiveSection("personal")}
                className={`px-3 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-xs sm:text-sm ${
                  activeSection === "personal"
                    ? "bg-gradient-tech text-white shadow-lg shadow-[#00d4ff]/30"
                    : "text-gray-300 hover:text-white hover:bg-[#1a1a1a]/50"
                }`}
              >
                <span className="hidden sm:inline">PERSONAL</span>
                <span className="sm:hidden">PER</span>
              </button>
            </nav>
            </div>
          </div>
      </header>

      {/* Professional Section */}
      {activeSection === "professional" && (
        <>
          {/* Hero Section - Modern 2 Column Layout */}
          <section className="min-h-screen flex items-center pt-20 sm:pt-24 relative overflow-hidden">
            {/* Floating Decorative Elements */}
            <div className="absolute top-20 left-10 text-6xl opacity-5 animate-float">
              &lt;/&gt;
            </div>
            <div className="absolute bottom-20 right-10 text-6xl opacity-5 animate-float" style={{animationDelay: '2s'}}>
              { }
        </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                
                {/* Left Column - Content - Centered */}
                <div className="space-y-8 animate-fade-in text-center lg:text-left">
                  <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight uppercase tracking-tight text-center lg:text-left">
                    <span className="block">{t.hero.greeting}</span>
                    <span className="block bg-gradient-to-r from-[#00ff88] to-[#00d4ff] bg-clip-text text-transparent">
                      {t.hero.name}
                    </span>
                </h1>
                  
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-300 uppercase tracking-wider text-center lg:text-left relative group">
                    <span className="relative inline-block">
                      <span className="absolute inset-0 bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] opacity-20 blur-sm animate-pulse"></span>
                      <span className="relative bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent animate-gradient-shift drop-shadow-lg" style={{
                        textShadow: '0 0 20px rgba(0, 255, 136, 0.5), 0 0 40px rgba(0, 212, 255, 0.3), 0 0 60px rgba(124, 58, 237, 0.2)'
                      }}>
                        {t.hero.title}
                      </span>
                      <span className="inline-block w-0.5 h-8 bg-gradient-to-b from-[#00ff88] to-[#7c3aed] ml-1 animate-pulse shadow-lg shadow-[#00ff88]/50"></span>
                    </span>
                    <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] opacity-60 animate-pulse shadow-lg shadow-[#00ff88]/30"></div>
                    <div className="absolute -top-2 left-0 w-full h-0.5 bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] opacity-40 animate-pulse shadow-lg shadow-[#00d4ff]/30" style={{animationDelay: '0.5s'}}></div>
                    
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/10 via-[#00d4ff]/10 to-[#7c3aed]/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </h2>
                  
                  <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-lg mx-auto lg:mx-0 font-amsterdam-four italic">
                    {t.hero.subtitle}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 justify-center lg:justify-start">
                    <a 
                      href="#contact" 
                      className="group relative inline-flex items-center px-8 py-4 bg-[#00ff88] text-black text-sm font-bold uppercase tracking-wider rounded-full transition-all duration-300 hover:bg-[#00d4ff] hover:scale-105 hover:shadow-lg hover:shadow-[#00ff88]/30"
                    >
                      <span>{t.hero.cta}</span>
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                    
                    <div className="flex gap-4">
                      <a 
                        href="https://linkedin.com/in/nam-tuyen" 
                        className="w-12 h-12 border-2 border-gray-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:border-[#00ff88] hover:text-[#00ff88] hover:scale-110 hover:shadow-lg hover:shadow-[#00ff88]/20"
                        aria-label="LinkedIn"
                      >
                        <span className="text-sm font-semibold">in</span>
                      </a>
                      <a 
                        href="https://github.com/Nam-Tuyen" 
                        className="w-12 h-12 border-2 border-gray-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:border-[#00ff88] hover:text-[#00ff88] hover:scale-110 hover:shadow-lg hover:shadow-[#00ff88]/20"
                        aria-label="GitHub"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
              </div>

                {/* Right Column - Profile Image */}
                <div className="flex justify-center lg:justify-end animate-scale-in">
                  <div className="relative group">
                    {/* Decorative Circles */}
                    <div className="absolute -top-12 -left-12 w-80 h-80 border border-[#00ff88]/10 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
                    <div className="absolute -bottom-12 -right-12 w-64 h-64 border border-[#00d4ff]/10 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
                    
                    {/* Ultra Modern Futuristic Tech Avatar Container */}
                    <div className="relative w-80 h-96 sm:w-96 sm:h-[500px] lg:w-[450px] lg:h-[550px]">
                      
                      {/* Enhanced Animated Grid Background */}
                      <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="w-full h-full" style={{
                          backgroundImage: `
                            linear-gradient(rgba(0, 255, 170, 0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0, 255, 170, 0.05) 1px, transparent 1px)
                          `,
                          backgroundSize: '40px 40px',
                          animation: 'gridMove 15s linear infinite'
                        }}></div>
              </div>
                      
                      {/* Additional Grid Layer */}
                      <div className="absolute inset-0 opacity-5 pointer-events-none">
                        <div className="w-full h-full" style={{
                          backgroundImage: `
                            linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)
                          `,
                          backgroundSize: '80px 80px',
                          animation: 'gridMove 25s linear infinite reverse'
                        }}></div>
            </div>

                      {/* Enhanced Glowing Orbs - More and Larger */}
                      <div className="absolute -top-24 -left-24 w-56 h-56 bg-gradient-radial from-[#00ffaa] to-transparent rounded-full blur-3xl opacity-50 animate-float"></div>
                      <div className="absolute -bottom-24 -right-24 w-52 h-52 bg-gradient-radial from-[#00d4ff] to-transparent rounded-full blur-3xl opacity-50 animate-float" style={{animationDelay: '2s'}}></div>
                      <div className="absolute top-1/2 -right-20 w-44 h-44 bg-gradient-radial from-[#aa00ff] to-transparent rounded-full blur-3xl opacity-50 animate-float" style={{animationDelay: '4s'}}></div>
                      <div className="absolute top-1/4 -left-16 w-32 h-32 bg-gradient-radial from-[#ff00aa] to-transparent rounded-full blur-3xl opacity-40 animate-float" style={{animationDelay: '1s'}}></div>
                      <div className="absolute bottom-1/4 -right-12 w-28 h-28 bg-gradient-radial from-[#00ff88] to-transparent rounded-full blur-3xl opacity-40 animate-float" style={{animationDelay: '3s'}}></div>
                      
                      {/* Enhanced Hexagon Decorations - More Hexagons */}
                      <div className="absolute top-[15%] left-[10%] w-24 h-14 bg-gradient-to-br from-[#00ffaa]/25 to-[#00d4ff]/25 border border-[#00ffaa]/40 animate-hex-float" style={{
                        clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
                      }}></div>
                      <div className="absolute bottom-[20%] right-[12%] w-24 h-14 bg-gradient-to-br from-[#00d4ff]/25 to-[#aa00ff]/25 border border-[#00d4ff]/40 animate-hex-float" style={{
                        clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                        animationDelay: '1.5s'
                      }}></div>
                      <div className="absolute top-[8%] right-[15%] w-16 h-10 bg-gradient-to-br from-[#aa00ff]/20 to-[#ff00aa]/20 border border-[#aa00ff]/30 animate-hex-float" style={{
                        clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                        animationDelay: '0.8s'
                      }}></div>
                      <div className="absolute bottom-[8%] left-[15%] w-16 h-10 bg-gradient-to-br from-[#ff00aa]/20 to-[#00ff88]/20 border border-[#ff00aa]/30 animate-hex-float" style={{
                        clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                        animationDelay: '2.2s'
                      }}></div>
                      <div className="absolute top-[35%] left-[5%] w-12 h-8 bg-gradient-to-br from-[#00ff88]/20 to-[#00ffaa]/20 border border-[#00ff88]/30 animate-hex-float" style={{
                        clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                        animationDelay: '3s'
                      }}></div>
                      
                      {/* Enhanced Tech Circles with Scanning Effect - More Circles */}
                      <div className="absolute -top-12 -left-12 w-72 h-72 border-2 border-transparent rounded-full" style={{
                        borderImage: 'linear-gradient(45deg, rgba(0, 255, 170, 0.4), transparent, rgba(0, 212, 255, 0.4), transparent) 1',
                        animation: 'techScan 4s linear infinite'
                      }}></div>
                      <div className="absolute -bottom-12 -right-12 w-56 h-56 border-2 border-transparent rounded-full" style={{
                        borderImage: 'linear-gradient(45deg, rgba(0, 212, 255, 0.4), transparent, rgba(170, 0, 255, 0.4), transparent) 1',
                        animation: 'techScan 3s linear infinite reverse'
                      }}></div>
                      <div className="absolute top-1/2 left-1/2 w-48 h-48 border-2 border-transparent rounded-full transform -translate-x-1/2 -translate-y-1/2" style={{
                        borderImage: 'linear-gradient(45deg, rgba(170, 0, 255, 0.4), transparent, rgba(0, 255, 170, 0.4), transparent) 1',
                        animation: 'techScan 5s linear infinite'
                      }}></div>
                      <div className="absolute top-[20%] right-[5%] w-32 h-32 border-2 border-transparent rounded-full" style={{
                        borderImage: 'linear-gradient(45deg, rgba(255, 0, 170, 0.3), transparent, rgba(0, 255, 136, 0.3), transparent) 1',
                        animation: 'techScan 6s linear infinite'
                      }}></div>
                      <div className="absolute bottom-[20%] left-[5%] w-28 h-28 border-2 border-transparent rounded-full" style={{
                        borderImage: 'linear-gradient(45deg, rgba(0, 255, 136, 0.3), transparent, rgba(0, 212, 255, 0.3), transparent) 1',
                        animation: 'techScan 7s linear infinite reverse'
                      }}></div>
                      
                      {/* Enhanced Corner Brackets */}
                      <div className="absolute -top-3 -left-3 w-16 h-16 border-l-2 border-t-2 border-[#00ffaa] opacity-60 animate-bracket-pulse"></div>
                      <div className="absolute -top-3 -right-3 w-16 h-16 border-r-2 border-t-2 border-[#00d4ff] opacity-60 animate-bracket-pulse" style={{animationDelay: '0.5s'}}></div>
                      <div className="absolute -bottom-3 -left-3 w-16 h-16 border-l-2 border-b-2 border-[#aa00ff] opacity-60 animate-bracket-pulse" style={{animationDelay: '1s'}}></div>
                      <div className="absolute -bottom-3 -right-3 w-16 h-16 border-r-2 border-b-2 border-[#00ffaa] opacity-60 animate-bracket-pulse" style={{animationDelay: '1.5s'}}></div>
                      
                      {/* Enhanced Data Points - More Points */}
                      <div className="absolute top-[20%] left-[15%] w-3 h-3 bg-[#00ffaa] rounded-full shadow-lg shadow-[#00ffaa]/60 animate-data-pulse"></div>
                      <div className="absolute top-[35%] right-[18%] w-3 h-3 bg-[#00d4ff] rounded-full shadow-lg shadow-[#00d4ff]/60 animate-data-pulse" style={{animationDelay: '0.5s'}}></div>
                      <div className="absolute bottom-[25%] left-[20%] w-3 h-3 bg-[#aa00ff] rounded-full shadow-lg shadow-[#aa00ff]/60 animate-data-pulse" style={{animationDelay: '1s'}}></div>
                      <div className="absolute bottom-[15%] right-[15%] w-3 h-3 bg-[#00ffaa] rounded-full shadow-lg shadow-[#00ffaa]/60 animate-data-pulse" style={{animationDelay: '1.5s'}}></div>
                      <div className="absolute top-[10%] right-[25%] w-2 h-2 bg-[#ff00aa] rounded-full shadow-lg shadow-[#ff00aa]/50 animate-data-pulse" style={{animationDelay: '0.3s'}}></div>
                      <div className="absolute bottom-[35%] right-[8%] w-2 h-2 bg-[#00ff88] rounded-full shadow-lg shadow-[#00ff88]/50 animate-data-pulse" style={{animationDelay: '0.8s'}}></div>
                      <div className="absolute top-[45%] left-[8%] w-2 h-2 bg-[#00d4ff] rounded-full shadow-lg shadow-[#00d4ff]/50 animate-data-pulse" style={{animationDelay: '1.2s'}}></div>
                      <div className="absolute bottom-[8%] left-[30%] w-2 h-2 bg-[#aa00ff] rounded-full shadow-lg shadow-[#aa00ff]/50 animate-data-pulse" style={{animationDelay: '1.8s'}}></div>
                      
                      {/* Enhanced Connection Lines - More Lines */}
                      <div className="absolute top-[20%] left-[15%] w-40 h-px bg-gradient-to-r from-transparent via-[#00ffaa]/70 to-transparent transform rotate-45 animate-line-glow"></div>
                      <div className="absolute bottom-[25%] left-[20%] w-32 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/70 to-transparent transform -rotate-30 animate-line-glow" style={{animationDelay: '1s'}}></div>
                      <div className="absolute top-[10%] right-[25%] w-24 h-px bg-gradient-to-r from-transparent via-[#ff00aa]/60 to-transparent transform rotate-60 animate-line-glow" style={{animationDelay: '0.5s'}}></div>
                      <div className="absolute bottom-[35%] right-[8%] w-20 h-px bg-gradient-to-r from-transparent via-[#00ff88]/60 to-transparent transform -rotate-45 animate-line-glow" style={{animationDelay: '1.5s'}}></div>
                      <div className="absolute top-[45%] left-[8%] w-28 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/60 to-transparent transform rotate-15 animate-line-glow" style={{animationDelay: '0.8s'}}></div>
                      
                      
                      {/* Main Avatar Frame - Ultra Large Size */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                        
                        {/* Static Animated Border */}
                        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#00ffaa] via-[#00d4ff] via-[#aa00ff] via-[#ff00aa] to-[#00ffaa] opacity-60 animate-gradient-shift" style={{backgroundSize: '400% 400%'}}></div>
                        
                        {/* Inner Frame */}
                        <div className="relative w-full h-full rounded-xl overflow-hidden bg-black">
                          
                          {/* Profile Image - No Hover Effects */}
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Avatar-653d9ylzzMfaEqsMFNdohWuJz9BSAB.jpg"
                            alt="LE NAM TUYEN" 
                    className="w-full h-full object-cover"
                  />
                </div>
                </div>
                </div>
                </div>
              </div>
            </div>
          </div>

      </section>

          {/* About Section - Modern Harmonious Layout */}
          <section className="min-h-screen flex items-center py-16 md:py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-primary rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-tech rounded-full blur-3xl"></div>
              </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                
                {/* Left Content - 7 columns */}
                <div className="lg:col-span-7 space-y-10">
                  {/* About Label with Modern Styling */}
                  <div className="animate-slide-up">
                    <div className="inline-flex items-center gap-3 mb-8">
                      <div className="w-12 h-px bg-gradient-primary"></div>
                      <span className="text-gray-400 text-xs tracking-[4px] font-medium uppercase">
                        {t.about.label}
                              </span>
                      <div className="w-12 h-px bg-gradient-primary"></div>
                            </div>
                            </div>

                  {/* Main Quote with Enhanced Typography */}
                  <div className="animate-slide-up">
                    <blockquote className="relative">
                      <div className="absolute -left-6 -top-2 text-6xl text-gradient-primary opacity-20 font-serif">"</div>
                      <p className="text-3xl sm:text-4xl md:text-5xl font-light italic text-gradient-primary leading-tight pl-8 mb-8">
                        {t.about.mainQuote}
                      </p>
                      <div className="absolute -right-4 -bottom-4 text-6xl text-gradient-primary opacity-20 font-serif">"</div>
                    </blockquote>
                          </div>

                  {/* Name with Modern Typography */}
                  <div className="animate-slide-up">
                    <h2 
                      className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 leading-tight"
                      dangerouslySetInnerHTML={{ __html: t.about.name }}
                  />
                        </div>

                  {/* Description with Better Typography */}
                  <div className="animate-slide-up">
                    <div className="prose prose-lg prose-invert max-w-none">
                      <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 font-light">
                        {t.about.description}
                      </p>
                          </div>
                        </div>

                  {/* CTA and Social in Modern Layout */}
                  <div className="animate-slide-up">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                      <a 
                        href="#contact" 
                        className="group relative inline-flex items-center px-8 py-4 bg-transparent border-2 border-gradient-primary text-white text-sm tracking-[2px] font-semibold rounded-full transition-all duration-300 hover:bg-gradient-primary hover:text-black hover:scale-105 hover:shadow-lg hover:shadow-[#00ff88]/30"
                      >
                        <span className="relative z-10">{t.about.button}</span>
                        <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </a>
                      
                      {/* Social Icons with Modern Styling */}
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500 text-xs tracking-widest uppercase mr-4">Connect</span>
                        <div className="flex gap-4">
                          {t.about.social.map((social, index) => (
                            <a
                              key={index}
                              href={social.url}
                              className="group relative w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 transition-all duration-300 hover:border-[#00ff88] hover:text-[#00ff88] hover:scale-110 hover:shadow-lg hover:shadow-[#00ff88]/20"
                              aria-label={social.name}
                            >
                              <span className="text-sm font-semibold group-hover:scale-110 transition-transform">
                                {social.icon}
                            </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                </div>
              </div>

                {/* Right Image - 5 columns */}
                <div className="lg:col-span-5 animate-scale-in">
                  <div className="relative group">
                    {/* Main Image Container */}
                    <div className="relative">
                      <div className="w-full max-w-md mx-auto aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-black/30 bg-gradient-to-br from-gray-800 to-gray-900">
                        <img 
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Avatar-653d9ylzzMfaEqsMFNdohWuJz9BSAB.jpg" 
                          alt="Profile" 
                          className="w-full h-full object-cover grayscale-[30%] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                      {/* Modern Decorative Elements */}
                      <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-primary rounded-2xl opacity-80 animate-pulse shadow-lg shadow-[#00ff88]/30"></div>
                      <div className="absolute -bottom-6 -right-6 w-8 h-8 bg-gradient-tech rounded-xl opacity-80 animate-pulse shadow-lg shadow-[#00d4ff]/30" style={{animationDelay: '0.5s'}}></div>
                      <div className="absolute top-1/2 -left-4 w-6 h-6 bg-gradient-cyber rounded-full opacity-60 animate-pulse shadow-lg shadow-[#7c3aed]/30" style={{animationDelay: '1s'}}></div>
                      <div className="absolute top-1/3 -right-4 w-4 h-4 bg-gradient-primary rounded-full opacity-60 animate-pulse shadow-lg shadow-[#00ff88]/30" style={{animationDelay: '1.5s'}}></div>
                </div>

                    {/* Floating Tech Elements */}
                    <div className="absolute -z-10 top-10 -right-10 w-20 h-20 border border-gradient-primary/20 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
                    <div className="absolute -z-10 bottom-10 -left-10 w-16 h-16 border border-gradient-tech/20 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
                          </div>
                          </div>
                        </div>
                        </div>
          </section>

      {/* Services Section */}
      <section className="py-12 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h3 className="text-gradient-tech text-sm tracking-widest mb-5">
              {t.services.label}
                </h3>
                </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {t.services.items.map((service, index) => (
              <div 
                key={index}
                className="card-cyber text-center group hover:scale-105 transition-all duration-300 animate-scale-in p-6 sm:p-8"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-tech rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  {index === 0 && <Database className="w-6 h-6 sm:w-8 sm:h-8 text-white" />}
                  {index === 1 && <Code className="w-6 h-6 sm:w-8 sm:h-8 text-white" />}
                  {index === 2 && <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />}
                  {index === 3 && <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-white" />}
                        </div>
                <h4 className="text-lg sm:text-xl font-bold group-hover:text-gradient-tech transition-all">
                  {service}
                            </h4>
                      </div>
                  ))}
              </div>
            </div>
          </section>

      {/* Projects Section */}
      <section className="py-12 md:py-24 relative">
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
            {t.projects.items.map((project, index) => (
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
      <section className="py-24 text-center relative">
        <div className="max-w-7xl mx-auto px-10">
          <div className="mb-16 animate-fade-in">
            <h3 className="text-gradient-tech text-sm tracking-widest mb-5">
              {t.contact.label}
              </h3>
                          </div>
          <h2 
            className="text-responsive-xl font-black mb-8 animate-fade-in-delay"
            dangerouslySetInnerHTML={{ __html: t.contact.title }}
          />
          <button className="btn-gradient-cyber mb-12 animate-fade-in-delay-2">
            <Mail className="w-5 h-5 mr-2" />
            {t.contact.button}
          </button>
          
          <div className="flex justify-center gap-6 animate-fade-in-delay-2">
            {t.contact.social.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 glass-tech rounded-2xl flex items-center justify-center text-white transition-all hover:scale-110 hover:shadow-tech-glow"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
              </div>
          </div>
        </section>
        </>
      )}

      {/* Personal Section */}
      {activeSection === "personal" && (
        <>
          {/* Personal Hero */}
          <section className="min-h-screen flex items-center pt-24 relative">
            <div className="max-w-7xl mx-auto px-10 relative z-10">
              <div className="text-center animate-fade-in">
                <h1 className="text-responsive-xl font-black leading-tight mb-8 uppercase">
                  <span className="bg-gradient-to-r from-[#EEEEEE] to-[#EEEEEE]/80 bg-clip-text text-transparent">{t.personal.title}</span>
                </h1>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
                  {t.personal.subtitle}
                </p>
          </div>
        </div>
          </section>

          {/* Hobbies Section */}
          <section className="py-24 relative">
            <div className="max-w-7xl mx-auto px-10">
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-gradient-tech text-4xl font-black mb-5">
                  {t.personal.hobbies.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {t.personal.hobbies.items.map((hobby, index) => (
                  <div 
                    key={index}
                    className="card-tech text-center group hover:scale-105 transition-all duration-300 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
                      {hobby.icon}
                </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-gradient-primary transition-all">
                      {hobby.name}
                </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {hobby.description}
                    </p>
                    </div>
                  ))}
                    </div>
                  </div>
          </section>

          {/* Values Section */}
          <section className="py-24 relative">
            <div className="max-w-7xl mx-auto px-10">
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-gradient-cyber text-4xl font-black mb-5">
                  {t.personal.values.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {t.personal.values.items.map((value, index) => (
                  <div 
                    key={index}
                    className="card-cyber p-8 group hover:scale-105 transition-all duration-300 animate-slide-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-tech rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-white font-bold">{index + 1}</span>
                </div>
                      <h3 className="text-xl font-bold group-hover:text-gradient-tech transition-all">
                        {value}
                </h3>
                    </div>
                    </div>
                  ))}
                </div>
              </div>
        </section>

          {/* Goals Section */}
          <section className="py-24 relative">
            <div className="max-w-7xl mx-auto px-10">
              <div className="text-center animate-fade-in">
                <h2 className="text-gradient-primary text-4xl font-black mb-8">
                  {t.personal.goals.title}
            </h2>
                <div className="max-w-4xl mx-auto card-tech p-12">
                  <p className="text-xl text-gray-300 leading-relaxed">
                    {t.personal.goals.description}
                  </p>
            </div>
          </div>
        </div>
        </section>
        </>
      )}

      {/* Footer */}
      <footer className="py-12 glass-tech border-t border-[#00ff88]/20">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
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
                  className="text-gray-400 text-sm font-medium transition-colors hover:text-gradient-primary"
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