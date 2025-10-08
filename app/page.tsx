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
        greeting: "XIN CHÀO, TÔI LÀ TUYÊN!",
        title: "TẠO RA CÁC SẢN PHẨM<br/>DỮ LIỆU VÀ<br/>FINTECH ĐÁNG NHỚ",
        subtitle: "Tôi là một Data Analyst & FinTech Specialist với sứ mệnh tạo ra những giải pháp dữ liệu đầy cảm hứng và thu hút người dùng.",
      },
      about: {
        label: "VỀ TÔI",
        title: "TÔI MANG ĐẾN TRẢI NGHIỆM DỮ LIỆU XUẤT SẮC TRÊN NHIỀU NỀN TẢNG.",
        name: "LÊ NAM <span>TUYÊN</span>",
        description: "Sinh viên năm cuối tại Đại học Kinh tế - Luật, chuyên về phát triển sản phẩm, phân tích dữ liệu và nghiên cứu kinh doanh. Có kinh nghiệm thiết kế và tổ chức các workshop về product discovery, user research, phân tích SQL và Python, dashboarding, đánh giá thí nghiệm và product analytics. Đã chứng minh khả năng dẫn dắt các nhóm sinh viên đa chức năng để chuyển đổi nghiên cứu thành yêu cầu sản phẩm, định nghĩa các chỉ số thành công và thực hiện các thí nghiệm nhẹ tạo ra insights có thể hành động cho các sản phẩm số.",
        background: "Nền tảng bao gồm nghiên cứu thị trường, phân tích tài chính và cố vấn các nhóm thông qua việc xây dựng giả thuyết, lựa chọn metrics và đánh giá post-mortem để cải thiện trải nghiệm người dùng và kết quả kinh doanh. Chịu trách nhiệm thiết kế chương trình, điều phối sự kiện với các diễn giả ngành và vận hành cuộc thi, bao gồm ngân hàng câu hỏi, khung chấm điểm và báo cáo.",
        recognition: "Được công nhận vì thiết lập các template và quy trình nâng cao chất lượng delivery trên các cohort và liên kết chiến lược kinh doanh với việc ra quyết định dựa trên dữ liệu.",
        objective: "Mục tiêu nghề nghiệp là phát triển thành Product Manager hoặc Product Owner, áp dụng nghiên cứu, phân tích và tư duy chiến lược để xây dựng các sản phẩm FinTech có thể mở rộng giải quyết các vấn đề có ý nghĩa.",
        quote: "Biến tầm nhìn thành hiện thực và chuyển đổi ý định thành kết quả",
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
        greeting: "HELLO, I'M TUYEN!",
        title: "CREATING MEMORABLE<br/>DATA &<br/>FINTECH PRODUCTS",
        subtitle: "I am a Data Analyst & FinTech Specialist with a mission to create inspiring and engaging data solutions.",
      },
      about: {
        label: "ABOUT ME",
        title: "I DELIVER EXCELLENT DATA EXPERIENCES ACROSS MULTIPLE PLATFORMS.",
        name: "LE NAM <span>TUYEN</span>",
        description: "A Senior at the University of Economics and Law, specializing in product development, data analytics, and business research. Experienced in designing and delivering workshops on product discovery, user research, SQL and Python analytics, dashboarding, experiment evaluation, and product analytics. Proven track record leading cross-functional student teams to translate research into product requirements, define success metrics, and run lightweight experiments that generate actionable insight for digital products.",
        background: "Background includes market research, financial analysis, and mentoring teams through hypothesis formulation, metric selection, and post-mortem review to improve user experience and business outcomes. Responsible for program design, event coordination with industry speakers, and competition operations, including question banks, scoring frameworks, and reporting.",
        recognition: "Recognized for establishing templates and processes that scale delivery quality across cohorts and for aligning business strategy with data-driven decision making.",
        objective: "Career objective is to grow as a Product Manager or Product Owner, applying research, analytics, and strategic thinking to build scalable FinTech products that solve meaningful problems.",
        quote: "Transforming vision into reality and turning intent into results",
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
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex justify-between items-center py-6">
            <div className="text-sm font-bold tracking-widest text-gradient-primary">
              {t.header.location}
      </div>

            {/* Navigation */}
            <nav className="flex items-center gap-8">
                <button
                onClick={() => setActiveSection("professional")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeSection === "professional"
                    ? "bg-gradient-primary text-white shadow-lg shadow-[#00ff88]/30"
                    : "text-gray-300 hover:text-white hover:bg-[#1a1a1a]/50"
                }`}
              >
                PROFESSIONAL
                </button>
              <button
                onClick={() => setActiveSection("personal")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeSection === "personal"
                    ? "bg-gradient-tech text-white shadow-lg shadow-[#00d4ff]/30"
                    : "text-gray-300 hover:text-white hover:bg-[#1a1a1a]/50"
                }`}
              >
                PERSONAL
              </button>
            </nav>
            </div>
          </div>
      </header>

      {/* Professional Section */}
      {activeSection === "professional" && (
        <>
          {/* Hero Section */}
          <section className="min-h-screen flex items-center pt-24 relative matrix-rain">
        <div className="max-w-7xl mx-auto px-10 relative z-10">
          <div className="animate-fade-in">
            <div className="text-gradient-primary text-xl font-bold mb-5 animate-fade-in">
              {t.hero.greeting}
            </div>
            <h1 
              className="text-responsive-xl font-black leading-tight mb-8 uppercase animate-fade-in-delay"
              dangerouslySetInnerHTML={{ __html: t.hero.title }}
            />
            <p className="text-lg text-gray-300 max-w-2xl mb-12 leading-relaxed animate-fade-in-delay-2">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
              <button className="btn-gradient-primary">
                <Download className="w-5 h-5 mr-2" />
                TẢI CV
                </button>
              <button className="btn-gradient-tech">
                <Linkedin className="w-5 h-5 mr-2" />
                LINKEDIN
              </button>
            </div>
        </div>
              </div>

        {/* Tech Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-tech rounded-full opacity-20 float-element animate-pulse-glow"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-cyber rounded-full opacity-20 float-element"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-primary rounded-full opacity-20 float-element"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-tech rounded-full opacity-20 float-element"></div>
        
        {/* Cyber Grid Overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#00ff88" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
              </div>
      </section>

      {/* About Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="animate-slide-up">
            <h3 className="text-gradient-primary text-sm tracking-widest mb-5">
              {t.about.label}
            </h3>
            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-10">
              {t.about.title}
            </h2>
              </div>

          <div className="card-tech animate-scale-in">
            {/* Avatar Section - Centered and properly sized */}
            <div className="flex justify-center mb-8">
              <div className="relative group">
                {/* Outer glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                
                {/* Main avatar container */}
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-3 border-gradient-primary shadow-xl shadow-[#00ff88]/20">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Avatar-653d9ylzzMfaEqsMFNdohWuJz9BSAB.jpg"
                    alt="Profile" 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  
                  {/* Overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Tech icon overlay */}
                  <div className="absolute top-3 right-3 w-8 h-8 bg-gradient-tech rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                    <Code className="w-4 h-4 text-white" />
                </div>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-primary rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-gradient-tech rounded-full opacity-60 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-1/2 -left-3 w-3 h-3 bg-gradient-cyber rounded-full opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 -right-3 w-3 h-3 bg-gradient-primary rounded-full opacity-60 animate-pulse" style={{animationDelay: '1.5s'}}></div>
                </div>
              </div>
            <div className="border-t-4 border-gradient-primary pt-8">
              <h2 
                className="text-3xl font-black mb-4"
                dangerouslySetInnerHTML={{ __html: t.about.name }}
              />
              
              {/* Main Description */}
              <p className="text-gray-300 leading-relaxed mb-6">
                {t.about.description}
              </p>
              
              {/* Background */}
              <p className="text-gray-300 leading-relaxed mb-6">
                {t.about.background}
              </p>
              
              {/* Recognition */}
              <p className="text-gray-300 leading-relaxed mb-6">
                {t.about.recognition}
              </p>
              
              {/* Career Objective */}
              <p className="text-gray-300 leading-relaxed mb-6">
                {t.about.objective}
              </p>
              
              {/* Quote */}
              <div className="bg-gradient-to-r from-[#00ff88]/10 to-[#00d4ff]/10 border-l-4 border-gradient-primary p-6 mb-8 rounded-r-lg">
                <blockquote className="text-lg font-medium text-gradient-primary italic">
                  "{t.about.quote}"
                </blockquote>
                        </div>

              <button className="btn-gradient-cyber">
                {t.about.button}
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
                        </div>
                      </div>
                    </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-gradient-tech text-sm tracking-widest mb-5">
              {t.services.label}
                  </h3>
                </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.items.map((service, index) => (
              <div 
                key={index}
                className="card-cyber text-center group hover:scale-105 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-tech rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {index === 0 && <Database className="w-8 h-8 text-white" />}
                  {index === 1 && <Code className="w-8 h-8 text-white" />}
                  {index === 2 && <BarChart3 className="w-8 h-8 text-white" />}
                  {index === 3 && <Brain className="w-8 h-8 text-white" />}
                          </div>
                <h4 className="text-xl font-bold group-hover:text-gradient-tech transition-all">
                  {service}
                            </h4>
                    </div>
                  ))}
                </div>
              </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-gradient-cyber text-sm tracking-widest mb-5">
              {t.projects.label}
                </h3>
            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {t.projects.intro}
            </p>
                        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.projects.items.map((project, index) => (
              <div 
                key={index}
                className="card-tech group hover:scale-105 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-tech rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-5 h-5 text-white" />
                        </div>
                      </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2 group-hover:text-gradient-primary transition-all">
                              {project.title}
                            </h4>
                  <p className="text-gradient-tech font-semibold text-lg mb-3">
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