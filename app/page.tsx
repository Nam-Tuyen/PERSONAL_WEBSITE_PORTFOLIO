"use client"

import React, { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import PdfViewer from "./components/PdfViewer"
import ScrollToTopButton from "./components/ScrollToTopButton"

const getInitialLanguage = (): "en" | "vi" => {
  if (typeof window === "undefined") return "en"
  const storedLanguage = window.localStorage.getItem("portfolio-language")
  return storedLanguage === "vi" || storedLanguage === "en" ? storedLanguage : "en"
}

const getInitialTheme = () => {
  if (typeof window === "undefined") return true
  const storedTheme = window.localStorage.getItem("portfolio-theme")
  if (storedTheme === "dark" || storedTheme === "light") {
    return storedTheme === "dark"
  }
  return document.documentElement.classList.contains("dark")
}

export default function Portfolio() {
  const [language, setLanguage] = useState<"en" | "vi">(getInitialLanguage)
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme)
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<any | null>(null)
  const [selectedProjectMedia, setSelectedProjectMedia] = useState<{ type: "pdf" | "video"; src: string } | null>(null)
  const languageStorageKey = "portfolio-language"
  const themeStorageKey = "portfolio-theme"

  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".anim").forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.92) el.classList.add("visible")
      })
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const syncTheme = () => setIsDarkMode(document.documentElement.classList.contains("dark"))
    syncTheme()
    const observer = new MutationObserver(syncTheme)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
    const handleStorage = (event: StorageEvent) => {
      if (event.key === "portfolio-theme" && (event.newValue === "dark" || event.newValue === "light")) {
        setIsDarkMode(event.newValue === "dark")
      }
      if (event.key === languageStorageKey && (event.newValue === "en" || event.newValue === "vi")) {
        setLanguage(event.newValue)
      }
    }
    window.addEventListener("storage", handleStorage)
    return () => {
      observer.disconnect()
      window.removeEventListener("storage", handleStorage)
    }
  }, [languageStorageKey])

  useEffect(() => {
    window.localStorage.setItem(languageStorageKey, language)
  }, [language, languageStorageKey])

  const handleDownloadResume = () => {
    window.open(
      "https://drive.google.com/drive/folders/1uw7hsng9s3FGMLs_sMuhlzW2IfQpsxdU?usp=drive_link",
      "_blank",
      "noopener,noreferrer"
    )
  }

  const isVietnamese = language === "vi"
  const footerContact = {
    email: "Namtuyenle.CV@gmail.com",
    location: isVietnamese ? "Thành phố Hồ Chí Minh, Việt Nam" : "Ho Chi Minh City, Vietnam",
    linkedin: "https://www.linkedin.com/in/tuyen-le-nam-7614a1269/",
    github: "https://github.com/Nam-Tuyen",
  }
  const heroName = isVietnamese ? "LÊ NAM TUYÊN" : "TUYEN LE NAM"
  const heroTitle = isVietnamese ? "ĐỊNH HƯỚNG QUẢN LÝ SẢN PHẨM TRONG FINTECH" : "ASPIRING PRODUCT MANAGER IN FINTECH"
  const heroDescription = isVietnamese
    ? "Sinh viên năm cuối ngành FinTech tại UEL (VNU-HCM) với định hướng phát triển trong lĩnh vực tài chính, công nghệ và đổi mới sáng tạo. Mục tiêu của tôi là từng bước trở thành chuyên gia fintech, đồng thời góp phần tạo ra những giải pháp tài chính hiệu quả và có tính ứng dụng cao."
    : "Final-year FinTech student at UEL (VNU-HCM) with a strong interest in the intersection of finance, technology, and innovation. My long-term goal is to become a fintech expert who creates impactful solutions for the financial industry."
  const heroLinkedInLabel = isVietnamese ? "LinkedIn cá nhân" : "LinkedIn profile"
  const heroGithubLabel = isVietnamese ? "GitHub cá nhân" : "GitHub profile"
  const viewCertificateLabel = isVietnamese ? "XEM CHỨNG CHỈ" : "View certificate"
  const demoPromptLabel = isVietnamese ? "Bạn hãy lựa chọn loại demo muốn xem:" : "Please select the type of demo you would like to view:"
  const sampleReportLabel = isVietnamese ? "XEM BÁO CÁO MẪU" : "READ SAMPLE REPORT"
  const demoVideoLabel = isVietnamese ? "XEM VIDEO DEMO" : "WATCH DEMO VIDEO"
  const viewDocumentLabel = isVietnamese ? "XEM TÀI LIỆU" : "VIEW DOCUMENT"
  const mobileDemoLabel = isVietnamese ? "XEM BẢN DEMO ĐIỆN THOẠI" : "VIEW MOBILE DEMO"
  const desktopDemoLabel = isVietnamese ? "XEM BẢN DEMO MÁY TÍNH" : "VIEW DESKTOP DEMO"
  const introLabel = isVietnamese ? "GIỚI THIỆU" : "INTRO"
  const experienceLabel = isVietnamese ? "KINH NGHIỆM NỔI BẬT" : "EXPERIENCE HIGHLIGHTS"
  const skillsLabel = isVietnamese ? "KỸ NĂNG NỔI BẬT" : "SKILLS SNAPSHOT"
  const projectsLabel = isVietnamese ? "DỰ ÁN" : "PROJECT"
  const achievementsLabel = isVietnamese ? "THÀNH TÍCH VÀ CHỨNG CHỈ" : "ACHIEVEMENTS AND CERTIFICATES"
  const moreInformationLabel = isVietnamese ? "THÊM THÔNG TIN" : "MORE INFORMATION"
  const bachelorLabel = isVietnamese ? "CỬ NHÂN NGÀNH" : "BACHELOR OF"
  const degreeLabel = isVietnamese ? "CÔNG NGHỆ TÀI CHÍNH" : "FINANCIAL TECHNOLOGY"
  const viewDemoLabel = isVietnamese ? "XEM DEMO" : "VIEW DEMO"
  const viewProjectLabel = isVietnamese ? "XEM DỰ ÁN" : "VIEW PROJECT"
  const externalLinkLabel = isVietnamese ? "LIÊN KẾT" : "LINK"
  const keyInsightLabel = isVietnamese ? "Điểm nhấn:" : "Key insight:"
  const downloadResumeLabel = isVietnamese ? "TẢI CV" : "DOWNLOAD RESUME"
  const openPdfLabel = isVietnamese ? "MỞ PDF" : "OPEN PDF"
  const theme = isDarkMode
      ? {
        pageBg: "#090909",
        shellBg: "#0d110d",
        shellBorder: "1px solid rgba(255,255,255,0.07)",
        shellShadow: "0 22px 48px rgba(0,0,0,0.42)",
        coverBg: "linear-gradient(135deg,#0d1f0a 0%,#132b10 35%,#0a1a1f 65%,#091215 100%)",
        cardBg: "rgba(255,255,255,0.03)",
        cardBorder: "1px solid rgba(255,255,255,0.06)",
        nestedCardBg: "rgba(8,8,8,0.28)",
        nestedCardBorder: "1px solid rgba(255,255,255,0.05)",
        chipBg: "#1e1e1e",
        chipBorder: "1px solid #333",
        textPrimary: "#f2f2ed",
        textSecondary: "#a8a8a8",
        textMuted: "#555",
        sectionBorder: "#222",
        modalBg: "#141414",
        accent: "#9dff3b",
        accentOnSolid: "#000",
        accentLine: "rgba(157,255,59,0.28)",
        accentGlow: "rgba(157,255,59,0.4)",
        accentGlowSoft: "rgba(157,255,59,0.16)",
        accentSoftBg: "rgba(157,255,59,0.08)",
        accentSoftBorder: "1px solid rgba(157,255,59,0.12)",
        socialBg: "rgba(255,255,255,0.04)",
        socialBorder: "1px solid rgba(255,255,255,0.08)",
        ctaGradient: "linear-gradient(135deg,#9dff3b 0%,#c8ff7a 55%,#96f6ff 100%)",
        ctaGradientHover: "linear-gradient(135deg,#c8ff7a 0%,#9dff3b 50%,#78eaff 100%)",
        ctaShadow: "0 0 24px rgba(157,255,59,0.28)",
      }
    : {
        pageBg: "#f3f7ef",
        shellBg: "#fbfdf8",
        shellBorder: "1px solid rgba(94,143,31,0.26)",
        shellShadow: "0 18px 36px rgba(20,40,20,0.08), 0 8px 18px rgba(0,0,0,0.04)",
        coverBg: "linear-gradient(135deg,#eef7e6 0%,#e8f4ea 35%,#e5f1f4 65%,#eef4f6 100%)",
        cardBg: "rgba(255,255,255,0.86)",
        cardBorder: "1px solid rgba(94,143,31,0.28)",
        nestedCardBg: "rgba(255,255,255,0.94)",
        nestedCardBorder: "1px solid rgba(94,143,31,0.24)",
        chipBg: "rgba(16,20,16,0.05)",
        chipBorder: "1px solid rgba(16,20,16,0.09)",
        textPrimary: "#121712",
        textSecondary: "#3f4d3d",
        textMuted: "#697566",
        sectionBorder: "rgba(94,143,31,0.2)",
        modalBg: "#fbfdf8",
        accent: "#5e8f1f",
        accentOnSolid: "#f7fbf2",
        accentLine: "rgba(94,143,31,0.32)",
        accentGlow: "rgba(94,143,31,0.18)",
        accentGlowSoft: "rgba(94,143,31,0.1)",
        accentSoftBg: "rgba(94,143,31,0.12)",
        accentSoftBorder: "1px solid rgba(94,143,31,0.34)",
        socialBg: "rgba(16,20,16,0.05)",
        socialBorder: "1px solid rgba(16,20,16,0.1)",
        ctaGradient: "linear-gradient(135deg,#5e8f1f 0%,#7aa93a 55%,#5ca6b8 100%)",
        ctaGradientHover: "linear-gradient(135deg,#7aa93a 0%,#5e8f1f 50%,#4f93a4 100%)",
        ctaShadow: "0 16px 28px rgba(94,143,31,0.18)",
      }

  const getDemoOptionStyles = (variant: "document" | "mobile" | "desktop") => {
    if (isDarkMode) {
      if (variant === "document") {
        return {
          card: {
            background: "linear-gradient(180deg, rgba(10,10,10,0.72) 0%, rgba(8,8,8,0.34) 100%)",
            border: `1.5px solid ${theme.accent}`,
            color: theme.accent,
            boxShadow: "inset 0 0 0 1px rgba(157,255,59,0.08), 0 14px 30px rgba(0,0,0,0.22)",
          },
          glow: { background: "linear-gradient(180deg, rgba(157,255,59,0.12) 0%, rgba(157,255,59,0) 100%)" },
          badge: { background: theme.accentSoftBg, color: theme.accent },
          icon: { background: "rgba(157,255,59,0.1)", color: theme.accent },
          meta: { color: theme.textSecondary },
        }
      }

      if (variant === "mobile") {
        return {
          card: {
            background: "linear-gradient(135deg, #9dff3b 0%, #c6ff8a 100%)",
            border: `1.5px solid ${theme.accent}`,
            color: theme.accentOnSolid,
            boxShadow: "0 18px 34px rgba(157,255,59,0.2)",
          },
          glow: { background: "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 100%)" },
          badge: { background: "rgba(0,0,0,0.12)", color: theme.accentOnSolid },
          icon: { background: "rgba(0,0,0,0.12)", color: theme.accentOnSolid },
          meta: { color: "rgba(0,0,0,0.62)" },
        }
      }

      return {
        card: {
          background: "linear-gradient(180deg, rgba(22,22,22,0.96) 0%, rgba(14,14,14,0.92) 100%)",
          border: `1.5px solid ${theme.accent}`,
          color: theme.textPrimary,
          boxShadow: "0 14px 30px rgba(0,0,0,0.24)",
        },
        glow: { background: "linear-gradient(180deg, rgba(157,255,59,0.12) 0%, rgba(157,255,59,0) 100%)" },
        badge: { background: theme.accentSoftBg, color: theme.accent },
        icon: { background: "rgba(157,255,59,0.1)", color: theme.accent },
        meta: { color: theme.accent },
      }
    }

    if (variant === "document") {
      return {
        card: {
          background: "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(241,247,235,0.96) 100%)",
          border: `1.5px solid ${theme.accent}`,
          color: theme.accent,
          boxShadow: "inset 0 0 0 1px rgba(94,143,31,0.08), 0 12px 28px rgba(52,84,24,0.08)",
        },
        glow: { background: "linear-gradient(180deg, rgba(94,143,31,0.1) 0%, rgba(94,143,31,0) 100%)" },
        badge: { background: "rgba(94,143,31,0.12)", color: theme.accent },
        icon: { background: "rgba(94,143,31,0.12)", color: theme.accent },
        meta: { color: theme.textSecondary },
      }
    }

    if (variant === "mobile") {
      return {
        card: {
          background: "linear-gradient(135deg, #5e8f1f 0%, #7faa39 100%)",
          border: `1.5px solid ${theme.accent}`,
          color: "#f7fbf2",
          boxShadow: "0 16px 32px rgba(94,143,31,0.22)",
        },
        glow: { background: "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 100%)" },
        badge: { background: "rgba(255,255,255,0.14)", color: "#f7fbf2" },
        icon: { background: "rgba(255,255,255,0.14)", color: "#f7fbf2" },
        meta: { color: "rgba(247,251,242,0.8)" },
      }
    }

    return {
      card: {
        background: "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(245,249,240,0.96) 100%)",
        border: `1.5px solid rgba(94,143,31,0.34)`,
        color: theme.textPrimary,
        boxShadow: "0 12px 28px rgba(52,84,24,0.08)",
      },
      glow: { background: "linear-gradient(180deg, rgba(94,143,31,0.08) 0%, rgba(94,143,31,0) 100%)" },
      badge: { background: "rgba(94,143,31,0.12)", color: theme.accent },
      icon: { background: "rgba(94,143,31,0.12)", color: theme.accent },
      meta: { color: theme.accent },
    }
  }
  const heroSkillSnapshot = isVietnamese
    ? [
        { name: "Ngôn ngữ lập trình", items: ["Python", "SQL", "R"] },
        { name: "Công cụ", items: ["SPSS", "NVivo", "Power BI", "Jupyter Notebook", "GitHub"] },
        { name: "Cơ sở dữ liệu", items: ["Supabase", "PostgreSQL"] },
        { name: "Báo cáo và năng suất", items: ["Microsoft Office Suite", "Lark"] },
        { name: "Kiến thức chuyên môn", items: ["Phân tích tài chính", "Ngân hàng", "Dịch vụ tài chính"] },
      ]
    : [
        { name: "Programming Languages", items: ["Python", "SQL", "R"] },
        { name: "Tools", items: ["SPSS", "NVivo", "Power BI", "Jupyter Notebook", "GitHub"] },
        { name: "Databases", items: ["Supabase", "PostgreSQL"] },
        { name: "Reporting and Productivity", items: ["Microsoft Office Suite", "Lark"] },
        { name: "Domain Knowledge", items: ["Financial analysis", "Banking", "Financial services"] },
      ]
  const heroExperienceHighlights = isVietnamese
    ? [
        {
          title: "THỰC TẬP SINH PHÁT TRIỂN KINH DOANH",
          company: "Ngân hàng Nông nghiệp và Phát triển Nông thôn Việt Nam",
          logo: "/agribank logo.jpg",
          period: "03/2025 - 09/2025",
          location: "Chi nhánh Bình Triệu (Làm việc trực tiếp)",
          link: "https://www.agribank.com.vn/",
          bullets: [
            "Hỗ trợ công tác báo cáo và phối hợp trong các hoạt động phát triển dịch vụ và chuyển đổi số thông qua việc thu thập cập nhật từ các bộ phận nội bộ và tổng hợp thành các bản tóm tắt có cấu trúc.",
            "Theo dõi các đầu việc được phân công và chuẩn bị báo cáo tiến độ hàng tuần cho cấp quản lý.",
            "Hỗ trợ xây dựng tài liệu nội bộ, tài liệu đối chiếu so sánh và các báo cáo liên quan đến quy trình.",
          ],
        },
        {
          title: "THỰC TẬP SINH MÔI GIỚI CHỨNG KHOÁN",
          company: "Maybank Investment Bank Vietnam",
          logo: "/Maybank logo.png",
          period: "06/2024 - 12/2024",
          location: "Chi nhánh Phú Nhuận (Làm việc trực tiếp)",
          link: "https://www.linkedin.com/company/mibv/",
          bullets: [
            "Làm sạch, kiểm tra và chuẩn hóa dữ liệu giao dịch bằng Python nhằm phục vụ báo cáo hàng ngày và hàng tuần.",
            "Thực hiện kiểm tra chất lượng dữ liệu và tổ chức bộ dữ liệu sẵn sàng cho báo cáo nhằm nâng cao độ chính xác và tính nhất quán.",
            "Chuẩn bị các bản tóm tắt có cấu trúc và duy trì hệ thống lưu trữ dữ liệu khoa học để hỗ trợ quá trình báo cáo kịp thời.",
          ],
        },
      ]
    : [
        {
          title: "BUSINESS DEVELOPMENT INTERN",
          company: "Vietnam Bank for Agriculture and Rural Development",
          logo: "/agribank logo.jpg",
          period: "Mar 2025 - Sep 2025",
          location: "Binh Trieu Branch (On-site)",
          link: "https://www.agribank.com.vn/",
          bullets: [
            "Supported reporting and coordination for service development and digital transformation initiatives by collecting updates from internal teams and consolidating them into structured summaries.",
            "Tracked assigned tasks and prepared weekly progress reports for supervisors.",
            "Assisted in preparing internal documentation, benchmarking materials, and process-related reports.",
          ],
        },
        {
          title: "BROKER INTERN",
          company: "Maybank Investment Bank Vietnam",
          logo: "/Maybank logo.png",
          period: "Jun 2024 - Dec 2024",
          location: "Phu Nhuan Branch (On - site)",
          link: "https://www.linkedin.com/company/mibv/",
          bullets: [
            "Cleaned, validated, and standardized trading datasets using Python to support daily and weekly reporting.",
            "Conducted data quality checks and organized reporting-ready datasets to improve accuracy and consistency.",
            "Prepared structured summaries and maintained well-organized data files to support timely reporting.",
          ],
        },
      ]
  const heroAchievements = isVietnamese
    ? [
        { strong: "IELTS: 6.0" },
        { strong: "Top 6 cuộc thi đổi mới sáng tạo Finnovation Hackathon" },
        { strong: "Top 5 cuộc thi học thuật Banker's Got Talent 2025" },
        { strong: "Phó Chủ nhiệm Câu lạc bộ Công nghệ Tài chính" },
        {
          strong: "Trình bày tại hội thảo quốc tế về phát triển bền vững trong kinh tế, kinh doanh và pháp luật:",
          rest: "\"Phương pháp tổ hợp cây vượt trội: Đối sánh các mô hình học máy trong dự báo rủi ro thất bại doanh nghiệp tại Việt Nam\"",
        },
        {
          strong: "Công bố trên Tạp chí Kinh tế Đông Nam Á:",
          rest: "\"Nợ công và ổn định kinh tế: Vai trò điều tiết của quản trị - Bằng chứng từ các quốc gia Đông Nam Á\"",
        },
      ]
    : [
        { strong: "IELTS: 6.0" },
        { strong: "Top 6 Finnovation Hackathon" },
        { strong: "Top 5 Banker's Got Talent 2025" },
        { strong: "Vice President of Financial Technology Club" },
        {
          strong: "Presented at the Global Conference on Sustainability in Economics, Business and Law:",
          rest: "\"Tree Ensembles Lead the Way: Benchmarking Machine Learning Models for Corporate Failure in Vietnam\"",
        },
        {
          strong: "Published in the Journal of Southeast Asian Economies:",
          rest: "\"Public Debt and Economic Stability: The Moderating Effect of Governance: Evidence from Southeast Asian Countries\"",
        },
      ]
  const heroCertificates = isVietnamese
      ? [
        {
          id: "nvidia",
          title: "Chứng chỉ NVIDIA:",
          description: "Tăng tốc quy trình khoa học dữ liệu đầu cuối",
        },
        {
          id: "ert",
          title: "Viện Kinh tế và Xã hội",
          description: "Phân tích dữ liệu dành cho chuyên gia",
        },
      ]
    : [
        {
          id: "nvidia",
          title: "NVIDIA certificate:",
          description: "Accelerating End-to-End Data Science Workflows",
        },
        {
          id: "ert",
          title: "Institute for Economic and Social",
          description: "Data Analytics for Professionals",
        },
      ]
  const certificatePreviewMap: Record<string, { src: string; alt: string }> = {
    google: { src: "/ask-question-to-make-data-driven.PNG", alt: "Google Certificate" },
    nvidia: { src: "/Certificate NVIDIA.PNG", alt: "NVIDIA Certificate" },
    ert: { src: "/Data professional ERT.png", alt: "Data Analytics for Professionals" },
  }
  const selectedCertificatePreview = selectedCertificate ? certificatePreviewMap[selectedCertificate] : null
  const selectedProjectDemoOptions = selectedProject?.id === "macroinsight-me-ai-finance-and-legal-assistant-for-vietnam"
    ? [
        {
          label: viewDocumentLabel,
          src: "/MacroInsight.pdf",
          type: "pdf" as const,
          variant: "document" as const,
          helper: isVietnamese ? "Báo cáo chi tiết" : "Detailed report",
        },
        {
          label: mobileDemoLabel,
          src: "/Demo video(Mobile Phone).mp4",
          type: "video" as const,
          variant: "mobile" as const,
          helper: isVietnamese ? "Trải nghiệm điện thoại" : "Phone experience",
        },
        {
          label: desktopDemoLabel,
          src: "/Demo video(PC).mp4",
          type: "video" as const,
          variant: "desktop" as const,
          helper: isVietnamese ? "Trải nghiệm máy tính" : "Desktop experience",
        },
      ]
    : selectedProject?.id === "automated-financial-report-export"
      ? [
          {
            label: sampleReportLabel,
            src: "/Report_demo.pdf",
            type: "pdf" as const,
            variant: "document" as const,
            helper: isVietnamese ? "Báo cáo mẫu" : "Sample report",
          },
          {
            label: demoVideoLabel,
            src: "/Demo.mp4",
            type: "video" as const,
            variant: "desktop" as const,
            helper: isVietnamese ? "Video minh họa" : "Demo video",
          },
        ]
      : []
  const heroProjectHighlights = isVietnamese
    ? [
        {
          id: "profitpulse-financial-analysis-and-forecasting-platform",
          name: "PROFITPULSE: Nền tảng phân tích và dự báo tài chính",
          period: "12/2025 – 03/2026",
          link: "https://github.com/Nam-Tuyen/profitpulse",
          externalLink: "https://listedfirmdashboard.vercel.app/",
          hasDemo: false,
          description: [
            "Phát triển nền tảng phân tích các doanh nghiệp niêm yết tại Việt Nam, tập trung vào khả năng sinh lời, phân loại rủi ro và xu hướng tài chính.",
            "Ứng dụng PCA và các mô hình ensemble để hỗ trợ sàng lọc, so sánh doanh nghiệp và tạo insight phục vụ ra quyết định.",
            "Xây dựng hệ thống end-to-end bằng React, Flask và Supabase, giúp người dùng theo dõi và hiểu dữ liệu tài chính dễ dàng hơn.",
          ],
          insight: "Khi kết hợp phân tích tài chính, mô hình dự báo và trực quan hóa dữ liệu rõ ràng, người dùng có thể hiểu tình hình doanh nghiệp nhanh hơn và đưa ra quyết định hiệu quả hơn.",
        },
        {
          id: "macroinsight-me-ai-finance-and-legal-assistant-for-vietnam",
          name: "MACROINSIGHT.ME: Trợ lý AI về tài chính và pháp lý tại Việt Nam",
          period: "11/2025 – 01/2026",
          hasDemo: true,
          description: [
            "Xác định định hướng sản phẩm và nhóm người dùng mục tiêu cho một trợ lý AI tập trung vào thông tin tài chính và pháp lý tại Việt Nam.",
            "Thiết kế các luồng trải nghiệm chính như chat AI có dẫn nguồn, khám phá tin tức theo dạng vuốt và theo dõi danh mục để tăng tính dễ dùng và độ tin cậy.",
            "Xây dựng ý tưởng giao diện, luồng tương tác và đặc tả sản phẩm để hỗ trợ triển khai và cải tiến trong các giai đoạn tiếp theo.",
          ],
          insight: "Thiết kế cơ chế cập nhật tin tức theo hướng gamification giúp nhà đầu tư F0 tiếp cận và hiểu tin tức vĩ mô một cách đơn giản, trực quan và dễ theo dõi hơn.",
        },
        {
          id: "automated-financial-report-export",
          name: "Hệ thống tự động hóa tạo báo cáo phân tích cổ phiếu",
          period: "08/2024 – 10/2024",
          link: "https://github.com/Nam-Tuyen/Automated-Financial-Report-Export",
          hasDemo: true,
          description: [
            "Xây dựng pipeline Python end-to-end để thu thập, làm sạch, kiểm tra và chuẩn hóa dữ liệu cổ phiếu Việt Nam.",
            "Chuẩn bị bộ dữ liệu có cấu trúc, sẵn sàng phục vụ cho quy trình phân tích và báo cáo tài chính.",
            "Tự động hóa quá trình tạo báo cáo theo mã cổ phiếu, trực quan hóa dữ liệu và xuất PDF nhằm nâng cao tốc độ, tính nhất quán và khả năng mở rộng.",
          ],
          insight: "Một quy trình dữ liệu được chuẩn hóa và tự động hóa trong khâu viết báo cáo tài chính phân tích cổ phiếu giúp đội ngũ môi giới chứng khoán tiết kiệm thời gian.",
        },
        {
          id: "airbnb-rental-price-prediction",
          name: "Dự báo giá nhà cho thuê được niêm yết trên Airbnb",
          period: "04/2024 – 06/2024",
          link: "https://github.com/Nam-Tuyen/AirBnB_Pricepredictmodel",
          hasDemo: false,
          description: [
            "Làm sạch và chuyển đổi dữ liệu Airbnb, bao gồm chuẩn hóa dữ liệu số, xử lý ngày tháng, ngoại lệ và thiết kế đặc trưng.",
            "Xây dựng pipeline tiền xử lý và mô hình dự báo giá thuê bằng Linear Regression và Random Forest.",
            "Chỉ ra rằng cả đặc điểm bất động sản và yếu tố liên quan đến chủ nhà đều ảnh hưởng đáng kể đến giá niêm yết.",
          ],
          insight: "Giá niêm yết không chỉ phụ thuộc vào đặc điểm của chỗ ở mà còn bị ảnh hưởng bởi thông tin của chủ nhà và quá trình đăng tin. Khi kết hợp cả hai nhóm yếu tố này, mô hình có thể dự báo giá chính xác hơn.",
        },
        {
          id: "workforce-insight-hub-retention-and-compensation",
          name: "Phân tích dữ liệu nhân sự trong công ty để dự đoán khả năng nghỉ việc",
          period: "08/2023 – 02/2024",
          link: "https://github.com/Nam-Tuyen/HR_Analytic",
          hasDemo: false,
          description: [
            "Thực hiện tiền xử lý dữ liệu nhân sự, phân tích khám phá và chuẩn bị biến cho bài toán phân tích nghỉ việc.",
            "Xây dựng mô hình dự báo nghỉ việc bằng Random Forest và Logistic Regression để đánh giá xu hướng biến động nhân sự.",
            "Xác định mức thu nhập, độ tuổi, làm thêm giờ, tổng số năm kinh nghiệm và mức lương theo ngày là các yếu tố ảnh hưởng chính đến nghỉ việc.",
          ],
          insight: "Nhân viên thường dễ nghỉ việc hơn khi thu nhập chưa phù hợp hoặc khối lượng công việc quá cao. Insight này giúp doanh nghiệp đưa ra các chính sách phù hợp để cải thiện khả năng giữ chân nhân sự.",
        },
      ]
    : [
        {
          id: "profitpulse-financial-analysis-and-forecasting-platform",
          name: "PROFITPULSE: Financial Analysis and Forecasting Platform",
          period: "Dec 2025 – Mar 2026",
          link: "https://github.com/Nam-Tuyen/profitpulse",
          externalLink: "https://listedfirmdashboard.vercel.app/",
          hasDemo: false,
          description: [
            "Developed a platform to analyze Vietnamese listed companies, focusing on profitability, risk classification, and financial trends.",
            "Used PCA and ensemble models to support company screening, comparison, and insight generation for decision-making.",
            "Built the system end-to-end with React, Flask, and Supabase to make financial data easier to explore and understand.",
          ],
          insight: "Combining financial analysis, prediction models, and clear data visualization helps users understand company performance more quickly and make better decisions.",
        },
        {
          id: "macroinsight-me-ai-finance-and-legal-assistant-for-vietnam",
          name: "MACROINSIGHT.ME: AI Finance and Legal Assistant for Vietnam",
          period: "Nov 2025 – Jan 2026",
          hasDemo: true,
          description: [
            "Defined the product direction and target users for an AI assistant focused on finance and legal information in Vietnam.",
            "Designed key user flows such as AI chat with citations, swipe-based news discovery, and portfolio tracking to improve usability and trust.",
            "Created UI concepts, interaction flows, and product specifications to support implementation and future iteration.",
          ],
          insight: "Designing a gamified news update experience helps beginner investors approach and understand macroeconomic news in a simpler, more engaging, and user-friendly way.",
        },
        {
          id: "automated-financial-report-export",
          name: "Automated Financial Report Export",
          period: "Aug 2024 – Oct 2024",
          link: "https://github.com/Nam-Tuyen/Automated-Financial-Report-Export",
          hasDemo: true,
          description: [
            "Built an end-to-end Python pipeline to collect, clean, validate, and standardize Vietnamese stock market data.",
            "Prepared structured, reporting-ready datasets to support consistent financial analysis and reporting workflows.",
            "Automated ticker-based report generation with visualizations and PDF export, improving speed, consistency, and scalability.",
          ],
          insight: "A standardized and automated data workflow in the stock analysis reporting process helps brokerage teams save time.",
        },
        {
          id: "airbnb-rental-price-prediction",
          name: "Airbnb Rental Price Prediction",
          period: "Apr 2024 – Jun 2024",
          link: "https://github.com/Nam-Tuyen/AirBnB_Pricepredictmodel",
          hasDemo: false,
          description: [
            "Cleaned and transformed Airbnb listing data, including numeric conversion, date parsing, outlier handling, and feature engineering.",
            "Built a full preprocessing and modeling pipeline using Linear Regression and Random Forest for rental price prediction.",
            "Identified that both property characteristics and host-related factors significantly influence listing prices.",
          ],
          insight: "Listing prices depend not only on property features but also on host information and listing history. By combining both groups of factors, the model can predict prices more accurately.",
        },
        {
          id: "workforce-insight-hub-retention-and-compensation",
          name: "Workforce Insight Hub: Retention and Compensation",
          period: "Aug 2023 – Feb 2024",
          link: "https://github.com/Nam-Tuyen/HR_Analytic",
          hasDemo: false,
          description: [
            "Performed end-to-end HR data preprocessing, exploratory analysis, and feature preparation for attrition analysis.",
            "Built attrition prediction models using Random Forest and Logistic Regression to evaluate employee turnover patterns.",
            "Found that income, age, overtime, total working years, and daily rate were key drivers associated with attrition.",
          ],
          insight: "Employees are more likely to leave when compensation is not competitive or workloads are too high. This insight helps companies design better policies to improve employee retention.",
        },
      ]

  return (
    <div className="page-theme-smooth portfolio-font min-h-screen overflow-x-hidden" suppressHydrationWarning style={{ background: theme.pageBg, color: theme.textPrimary }}>
      {/* Navbar */}
      <Navbar language={language} onLanguageChange={setLanguage} />

      <div>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-16 sm:pt-24 md:pt-32 pb-6 sm:pb-8 md:pb-12">

          {/* HERO */}
          <section id="home" className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32 relative overflow-hidden">

            <div className="grid grid-cols-1 items-center">
              {/* Left Column - Professional Image */}
              <div className="hidden order-2 lg:order-1" style={{ animation: "slideRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) both" }}>
                <div className="relative mx-auto w-fit group" style={{ animation: "slideUp 0.9s 0.12s cubic-bezier(0.34,1.56,0.64,1) both" }}>
                  <div className="absolute inset-0 rounded-[32px] pointer-events-none" style={{ border: `1px solid ${theme.accentLine}`, boxShadow: `0 0 45px ${theme.accentGlowSoft}` }} />

                  <div className="hero-photo-arch relative rounded-[32px] p-3 sm:p-4 md:p-5" style={{ background: "linear-gradient(145deg,#111 0%,#181818 55%,#101010 100%)", border: "1px solid #222" }}>
                    <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[340px] lg:h-[340px] xl:w-[380px] xl:h-[380px] overflow-hidden rounded-[26px]" style={{ border: "1px solid #262626" }}>
                      <div className="absolute left-3 top-3 z-20 rounded-full px-3 py-1" style={{ background: isDarkMode ? "rgba(10,10,10,.72)" : "rgba(255,255,255,.88)", border: `1px solid ${theme.accentLine}` }}>
                        <span className="font-orbitron text-[9px] sm:text-[10px] uppercase tracking-[0.16em]" style={{ color: theme.accent }}>
                          {isVietnamese ? "Hồ sơ cá nhân" : "Portfolio Profile"}
                        </span>
                      </div>

                      <img
                        src="/áº¢nh portfolio.png"
                        alt="LE NAM TUYEN"
                        className="absolute inset-0 h-full w-full object-cover object-top"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70" />
                      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: isDarkMode ? "linear-gradient(to bottom right,transparent,transparent,rgba(157,255,59,.1))" : "linear-gradient(to bottom right,transparent,transparent,rgba(94,143,31,.12))" }} />
                    </div>
                  </div>

                  <div className="absolute -right-3 sm:-right-4 -bottom-3 sm:-bottom-4 w-6 h-6 sm:w-8 sm:h-8 rounded-full" style={{ background: theme.accent, boxShadow: `0 0 22px ${theme.accentGlow}` }} />
                  <div className="absolute -left-2 sm:-left-3 top-8 sm:top-10 w-3 h-3 sm:w-4 sm:h-4 rounded-full" style={{ background: isDarkMode ? "#00d4ff" : "#5ca6b8", boxShadow: isDarkMode ? "0 0 16px rgba(0,212,255,0.5)" : "0 0 16px rgba(92,166,184,0.35)" }} />
                </div>
              </div>

              <div className="order-1" style={{ animation: "slideRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) both" }}>
                <div
                  className="profile-card-hover mx-auto w-full max-w-[1160px] overflow-hidden rounded-[30px] lg:rounded-[34px]"
                  style={{
                    background: theme.shellBg,
                    border: theme.shellBorder,
                    boxShadow: theme.shellShadow,
                  }}
                >
                  <div className="relative h-[220px] overflow-hidden" style={{ background: theme.coverBg }}>
                    <img
                      src="/Background_image.png"
                      alt="Transforming vision into reality"
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,rgba(7,18,10,0.2) 0%,rgba(7,18,10,0.06) 35%,rgba(4,10,12,0.28) 100%)" }} />
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: isDarkMode
                          ? "repeating-linear-gradient(0deg,transparent,transparent 19px,rgba(157,255,59,0.04) 20px), repeating-linear-gradient(90deg,transparent,transparent 19px,rgba(157,255,59,0.03) 20px)"
                          : "repeating-linear-gradient(0deg,transparent,transparent 19px,rgba(94,143,31,0.05) 20px), repeating-linear-gradient(90deg,transparent,transparent 19px,rgba(94,143,31,0.04) 20px)",
                      }}
                    />
                    <div className="cover-sweep absolute inset-0" />
                    <div className={`absolute inset-y-0 left-[14%] hidden w-px lg:block ${isDarkMode ? "bg-[linear-gradient(to_bottom,transparent,rgba(157,255,59,0.1),transparent)]" : "bg-[linear-gradient(to_bottom,transparent,rgba(94,143,31,0.12),transparent)]"}`} />
                    <div className="absolute inset-y-0 left-[38%] hidden w-px bg-[linear-gradient(to_bottom,transparent,rgba(0,212,255,0.08),transparent)] lg:block" />
                    <div className="absolute top-[24px] left-[21%] h-[5px] w-[5px] rounded-full" style={{ background: theme.accent, boxShadow: `0 0 10px ${theme.accent}`, opacity: 0.42 }} />
                    <div className="absolute top-[34px] left-[38%] h-[4px] w-[4px] rounded-full" style={{ background: theme.accent, boxShadow: `0 0 8px ${theme.accent}`, opacity: 0.68 }} />
                    <div className="absolute top-[56px] left-[61%] h-[3px] w-[3px] rounded-full" style={{ background: isDarkMode ? "#00d4ff" : "#5ca6b8", boxShadow: isDarkMode ? "0 0 6px #00d4ff" : "0 0 6px #5ca6b8", opacity: 0.7 }} />
                  </div>

                  <div className="relative px-5 pb-5 sm:px-6 sm:pb-6 md:px-8 md:pb-8 lg:px-10 lg:pb-10">
                    <div className="relative mt-[-52px] grid grid-cols-1 gap-6 lg:mt-[-62px] lg:grid-cols-[340px_minmax(0,1fr)] lg:items-start lg:gap-9">
                      <div className="min-w-0 space-y-5">
                        <div className="flex justify-center lg:justify-start">
                          <div className="avatar-ring-wrap relative h-[108px] w-[108px] shrink-0 sm:h-[124px] sm:w-[124px]">
                            <div
                              className="absolute inset-[-3px] rounded-full"
                              style={{
                                background: isDarkMode ? "linear-gradient(135deg,#9dff3b,#c8ff7a 40%,#00d4ff 70%,#9dff3b)" : "linear-gradient(135deg,#5e8f1f,#8db44b 40%,#5ca6b8 70%,#5e8f1f)",
                                boxShadow: isDarkMode ? "0 0 28px rgba(157,255,59,0.4), 0 0 60px rgba(157,255,59,0.12)" : "0 0 24px rgba(94,143,31,0.22), 0 0 48px rgba(94,143,31,0.08)",
                              }}
                            />
                            <div className="absolute inset-0 rounded-full" style={{ background: theme.shellBg }} />
                            <div className="absolute inset-[4px] overflow-hidden rounded-full" style={{ background: "linear-gradient(135deg,#1a2a10,#0d1a0d)" }}>
                              <img
                                className="avatar-img-inner h-full w-full object-cover object-top"
                                alt={heroName}
                                src="/%E1%BA%A2nh%20portfolio.png"
                              />
                            </div>
                            <div
                              className="absolute bottom-[6px] right-[4px] z-[3] h-[13px] w-[13px] rounded-full"
                              style={{
                                background: theme.accent,
                                border: `2px solid ${theme.shellBg}`,
                                boxShadow: `0 0 8px ${theme.accentGlow}`,
                                animation: "blink 2.2s ease-in-out infinite",
                              }}
                            />
                          </div>
                        </div>

                        <div className="space-y-5 text-center lg:text-left">
                          <div>
                            <div className="mb-2 flex flex-wrap items-end justify-center gap-x-2 gap-y-1 lg:justify-start">
                              <span className="font-orbitron text-[24px] font-black uppercase tracking-[0.01em] sm:text-[28px] md:text-[30px]" style={{ color: theme.textPrimary }}>
                                {heroName}
                              </span>
                            </div>

                            <p className="mb-1 text-sm leading-[1.75] sm:text-[15px] md:text-base" style={{ color: theme.textSecondary }}>
                              {heroTitle}
                            </p>

                            <p className="mb-4 text-[12.5px] sm:text-[13px]" style={{ color: theme.textMuted }}>
                              {footerContact.location}
                            </p>

                            <div className="flex items-center justify-center gap-3 lg:justify-start">
                              <a
                                href={footerContact?.linkedin || "#"}
                                target="_blank"
                                rel="noreferrer"
                                className="card-action-btn inline-flex h-9 w-9 items-center justify-center rounded-full"
                                style={{ background: theme.socialBg, border: theme.socialBorder, color: theme.accent, textDecoration: "none" }}
                                aria-label={heroLinkedInLabel}
                              >
                                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[16px] w-[16px]" fill="currentColor">
                                  <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 0 0 3.28 4.97c0 1.08.88 1.97 1.97 1.97a1.97 1.97 0 1 0 0-3ZM20.44 12.56c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.09-3.38 1.86V8.5H9.38c.04.55 0 11.5 0 11.5h3.36v-6.42c0-.34.02-.68.13-.92.27-.68.89-1.39 1.92-1.39 1.36 0 1.9 1.05 1.9 2.58V20H20v-6.86c0-.2.01-.39.01-.58h.43Z" />
                                </svg>
                              </a>

                              <a
                                href={footerContact?.github || "#"}
                                target="_blank"
                                rel="noreferrer"
                                className="card-action-btn inline-flex h-9 w-9 items-center justify-center rounded-full"
                                style={{ background: theme.socialBg, border: theme.socialBorder, color: theme.accent, textDecoration: "none" }}
                                aria-label={heroGithubLabel}
                              >
                                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[16px] w-[16px]" fill="currentColor">
                                  <path d="M12 .5C5.65.5.5 5.7.5 12.1c0 5.12 3.3 9.46 7.88 10.99.58.11.79-.25.79-.56v-2.17c-3.2.71-3.88-1.38-3.88-1.38-.52-1.35-1.28-1.71-1.28-1.71-1.05-.73.08-.72.08-.72 1.16.08 1.78 1.21 1.78 1.21 1.03 1.79 2.71 1.27 3.37.97.1-.76.4-1.27.72-1.56-2.55-.29-5.24-1.29-5.24-5.74 0-1.27.45-2.31 1.18-3.13-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.19 1.2a10.9 10.9 0 0 1 5.8 0c2.22-1.52 3.19-1.2 3.19-1.2.62 1.59.23 2.77.11 3.06.73.82 1.18 1.86 1.18 3.13 0 4.46-2.69 5.44-5.25 5.73.41.36.78 1.08.78 2.18v3.23c0 .31.21.67.8.56A11.63 11.63 0 0 0 23.5 12.1C23.5 5.7 18.35.5 12 .5Z" />
                                </svg>
                              </a>
                            </div>
                          </div>

                          <div
                            className="min-w-0 rounded-[20px] px-5 py-5"
                            style={{ background: theme.cardBg, border: theme.cardBorder }}
                          >
                          <div className="min-w-0 space-y-2 text-left">
                            <div className="inline-flex w-fit rounded-full px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] sm:text-[10px]" style={{ background: theme.accentSoftBg, border: theme.accentSoftBorder, color: theme.accent }}>
                                {bachelorLabel}
                              </div>
                              <div
                                className="max-w-full font-orbitron whitespace-nowrap text-[10px] font-black uppercase leading-[1.05] tracking-[-0.03em] min-[360px]:text-[11px] sm:text-[12px] md:text-[13px]"
                                style={{ color: theme.textPrimary }}
                              >
                                {degreeLabel}
                              </div>
                            </div>
                          </div>
                        </div>

                        <a
                          href="https://www.uel.edu.vn/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="card-action-btn flex items-start gap-3 rounded-2xl px-5 py-4"
                          style={{ background: theme.cardBg, border: theme.cardBorder, textDecoration: "none" }}
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/95 p-0.5">
                            <img
                              src="/Logo.png"
                              alt="UEL logo"
                              className="h-full w-full object-contain"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-sm font-medium leading-[1.55] sm:text-[15px]" style={{ color: theme.textSecondary }}>
                              {isVietnamese ? "Trường Đại học Kinh tế - Luật" : "University of Economics and Law"}
                            </div>
                            <div
                              className="mt-3 inline-flex items-center space-x-1.5 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 sm:px-4 sm:text-[11px]"
                              style={{ border: `1.5px solid ${theme.accent}`, color: theme.accent, background: "transparent" }}
                            >
                              <span>{moreInformationLabel}</span>
                              <svg className="h-3 w-3 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </div>
                          </div>
                        </a>

                        <div
                          className="rounded-2xl px-5 py-5"
                          style={{ background: theme.cardBg, border: theme.cardBorder }}
                        >
                          <div className="mb-3 flex items-center justify-between gap-3">
                            <div className="font-orbitron text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: theme.accent }}>
                              {achievementsLabel}
                            </div>
                            <div className="h-px flex-1" style={{ background: `linear-gradient(90deg,${theme.accentLine},transparent)` }} />
                          </div>

                          <div className="space-y-2.5 text-left">
                            {heroAchievements.map((item, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: theme.accent }} />
                                <p className="text-xs leading-[1.75] sm:text-[13px] md:text-sm" style={{ color: theme.textSecondary }}>
                                  <strong style={{ color: theme.textPrimary }}>{item.strong}</strong>
                                  {item.rest ? ` ${item.rest}` : ""}
                                </p>
                              </div>
                            ))}
                          </div>

                          <div className="mt-4 space-y-2.5 text-left">
                            {heroCertificates.map((certificate) => (
                              <div key={certificate.id} className="flex items-start gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: theme.accent }} />
                                <div className="min-w-0">
                                  <p className="text-xs leading-[1.75] sm:text-[13px] md:text-sm" style={{ color: theme.textSecondary }}>
                                    {certificate.id === "ert" ? (
                                      <strong style={{ color: theme.textPrimary }}>
                                        {certificate.title} {certificate.description}
                                      </strong>
                                    ) : (
                                      <>
                                        <strong style={{ color: theme.textPrimary }}>{certificate.title}</strong>{" "}
                                        {certificate.description}
                                      </>
                                    )}
                                  </p>
                                  <button
                                    type="button"
                                    onClick={() => setSelectedCertificate(certificate.id)}
                                    className="mt-2 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 hover:-translate-y-0.5 sm:text-[10px]"
                                    style={{ border: theme.accentSoftBorder, color: theme.accent, background: theme.accentSoftBg }}
                                  >
                                    <span>{viewCertificateLabel}</span>
                                    <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-5 lg:pt-[140px]">
                        <div className="space-y-5 text-center lg:text-left">
                          <div id="about-me" className="rounded-[20px] px-4 py-4 sm:px-5" style={{ background: theme.cardBg, border: theme.cardBorder }}>
                            <div className="mb-2.5 flex items-center justify-between gap-3">
                              <div className="font-orbitron text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: theme.accent }}>
                                {introLabel}
                              </div>
                              <div className="h-px flex-1" style={{ background: `linear-gradient(90deg,${theme.accentLine},transparent)` }} />
                            </div>

                            <p className="text-left text-sm leading-[1.9] vietnamese-text sm:text-base md:text-lg" style={{ color: theme.textSecondary }}>
                              {heroDescription}
                            </p>
                          </div>

                          <div className="rounded-[20px] px-5 py-5 sm:px-6" style={{ background: theme.cardBg, border: theme.cardBorder }}>
                            <div className="mb-2.5 flex items-center justify-between gap-3">
                              <div className="font-orbitron text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: theme.accent }}>
                                {experienceLabel}
                              </div>
                              <div className="h-px flex-1" style={{ background: `linear-gradient(90deg,${theme.accentLine},transparent)` }} />
                            </div>

                            <div className="grid gap-3.5">
                              {heroExperienceHighlights.map((item, index) => (
                                <div key={index} className="rounded-[18px] px-4 py-4 text-left sm:px-5 sm:py-5" style={{ background: theme.nestedCardBg, border: theme.nestedCardBorder }}>
                                  <div className="mb-4">
                                    <div className="flex items-start gap-3">
                                      {item.logo ? (
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white p-0.5" style={{ border: theme.accentSoftBorder }}>
                                          <img src={item.logo} alt={item.company} className="h-full w-full object-contain" />
                                        </div>
                                      ) : null}
                                      <div className="min-w-0 flex-1">
                                        <h4 className="font-orbitron text-[12px] font-bold leading-snug sm:text-[13px] md:text-[14px]" style={{ color: theme.textPrimary }}>
                                          {item.title}
                                        </h4>
                                        <p className="mt-1 text-[11px] leading-[1.7] sm:text-[12px] md:text-[13px]" style={{ color: theme.textSecondary }}>
                                          {item.company}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="mt-3 inline-flex rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] sm:text-[11px]" style={{ background: theme.accentSoftBg, border: theme.accentSoftBorder, color: theme.accent }}>
                                      {item.period}
                                    </div>
                                    <div className="mt-3 flex flex-wrap gap-2.5">
                                      <div className="rounded-full px-3 py-1.5 text-[11px] font-medium sm:text-[12px]" style={{ background: theme.chipBg, border: theme.chipBorder, color: theme.textSecondary }}>
                                        <div className="flex items-center space-x-1.5">
                                          <svg className="h-3 w-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                          </svg>
                                          <span>{item.location}</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="space-y-3">
                                    {item.bullets.map((bullet, bulletIndex) => (
                                      <div key={bulletIndex} className="flex items-start gap-2">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: theme.accent }} />
                                        <p className="text-[11px] leading-[1.8] sm:text-[12.5px] md:text-[13.5px]" style={{ color: theme.textSecondary }}>
                                          {bullet}
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                  <div className="mt-3 flex justify-start">
                                    <a
                                      href={item.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center space-x-1.5 rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition-all duration-300 sm:space-x-2"
                                      style={{ border: `1.5px solid ${theme.accent}`, color: theme.accent, background: "transparent" }}
                                    >
                                      <span>{moreInformationLabel}</span>
                                      <svg className="h-3 w-3 shrink-0 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="rounded-[20px] px-5 py-5 sm:px-6" style={{ background: theme.cardBg, border: theme.cardBorder }}>
                            <div className="mb-2.5 flex items-center justify-between gap-3">
                              <div className="font-orbitron text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: theme.accent }}>
                                {skillsLabel}
                              </div>
                              <div className="h-px flex-1" style={{ background: `linear-gradient(90deg,${theme.accentLine},transparent)` }} />
                            </div>

                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                              {heroSkillSnapshot.map((category, index) => (
                                <div
                                  key={index}
                                  className="rounded-[18px] px-4 py-4 text-left sm:px-5 sm:py-5"
                                  style={{ background: theme.nestedCardBg, border: theme.nestedCardBorder }}
                                >
                                  <h4 className="mb-3 font-orbitron text-[12px] font-bold leading-snug sm:text-[13px] md:text-[14px]" style={{ color: theme.textPrimary }}>
                                    {category.name}
                                  </h4>
                                  <div className="flex flex-wrap gap-1.5">
                                    {category.items.map((item, itemIndex) => (
                                      <span
                                        key={itemIndex}
                                        className="rounded-full px-2.5 py-1 text-[10px] font-medium sm:text-[11px]"
                                        style={{ background: theme.accentSoftBg, border: theme.accentSoftBorder, color: theme.textSecondary }}
                                      >
                                        {item}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div id="projects" className="rounded-[20px] px-5 py-5 sm:px-6" style={{ background: theme.cardBg, border: theme.cardBorder }}>
                            <div className="mb-2.5 flex items-center justify-between gap-3">
                              <div className="font-orbitron text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: theme.accent }}>
                                {projectsLabel}
                              </div>
                              <div className="h-px flex-1" style={{ background: `linear-gradient(90deg,${theme.accentLine},transparent)` }} />
                            </div>

                            <div className="grid gap-3.5">
                              {heroProjectHighlights.map((project: any, index: number) => (
                                <div
                                  key={index}
                                  className="rounded-[18px] px-4 py-4 text-left sm:px-5 sm:py-5"
                                  style={{ background: theme.nestedCardBg, border: theme.nestedCardBorder }}
                                >
                                  <div className="mb-4">
                                    <h4 className="font-orbitron text-[12px] font-bold leading-snug sm:text-[13px] md:text-[14px]" style={{ color: theme.textPrimary }}>
                                      {project.name}
                                    </h4>
                                    {project.period && (
                                      <p className="mt-1 text-[11px] leading-[1.7] sm:text-[12px]" style={{ color: theme.accent }}>
                                        {project.period}
                                      </p>
                                    )}
                                  </div>

                                  <div className="mb-3 flex flex-wrap gap-2">
                                    {project.externalLink && (
                                      <a
                                        href={project.externalLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] transition-all duration-300 hover:-translate-y-0.5 sm:text-[11px]"
                                        style={{ background: theme.accent, color: theme.accentOnSolid }}
                                      >
                                        <span>LINK</span>
                                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                      </a>
                                    )}
                                    {project.hasDemo && (
                                      <button
                                        type="button"
                                        onClick={() => {
                                          setSelectedProject(project)
                                          setSelectedProjectMedia(null)
                                        }}
                                        className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] transition-all duration-300 hover:-translate-y-0.5 sm:text-[11px]"
                                        style={{ background: theme.accent, color: theme.accentOnSolid, boxShadow: "0 10px 22px rgba(157,255,59,0.16)" }}
                                      >
                                        <span>{viewDemoLabel}</span>
                                      </button>
                                    )}
                                    {project.link && (
                                      <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] transition-all duration-300 hover:-translate-y-0.5 sm:text-[11px]"
                                        style={{ border: theme.accentSoftBorder, color: theme.accent, background: theme.accentSoftBg }}
                                      >
                                        <span>{viewProjectLabel}</span>
                                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                      </a>
                                    )}
                                  </div>

                                  {Array.isArray(project.description) && (
                                    <div className="space-y-3">
                                      {project.description.map((item: string, itemIndex: number) => (
                                        <div key={itemIndex} className="flex items-start gap-2">
                                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: theme.accent }} />
                                          <p className="text-[11px] leading-[1.8] sm:text-[12.5px] md:text-[13.5px]" style={{ color: theme.textSecondary }}>
                                            {item}
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                  )}

                                  {project.insight && (
                                    <div className="mt-4 rounded-[16px] px-4 py-3" style={{ background: theme.accentSoftBg, border: theme.accentSoftBorder }}>
                                      <p className="text-[11px] leading-[1.8] sm:text-[12.5px] md:text-[13.5px]" style={{ color: theme.textSecondary }}>
                                        <strong style={{ color: theme.textPrimary }}>{keyInsightLabel}</strong> {project.insight}
                                      </p>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>

          </div>{/* end sections wrapper */}
        </div>

        {/* CONTACT / CTA */}
        <section id="contact" className="px-5 md:px-[52px] py-[80px] md:py-[100px] anim" style={{ borderTop: `1px solid ${theme.sectionBorder}` }}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-xs font-semibold uppercase tracking-[2px] mb-6" style={{ color: theme.accent }}>
              {language === "vi" ? "Liên hệ với tôi" : "Get in Touch"}
            </div>
            <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-black mb-8 leading-tight" style={{ color: theme.textPrimary }}>
              {language === "vi"
                ? "Xây dựng các giải pháp fintech thực tiễn"
                : "Building practical fintech solutions"}
            </h2>
            <p className="text-base md:text-lg mb-10" style={{ color: theme.textMuted }}>
              {language === "vi"
                ? "Hãy liên hệ với tôi nếu bạn muốn kết nối, hợp tác hoặc trao đổi về cơ hội công việc"
                : "Feel free to reach out for collaboration, projects or career opportunities"}
            </p>
            <div className="flex justify-center">
              <button
                onClick={handleDownloadResume}
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
                style={{ background: theme.accent, color: theme.accentOnSolid }}
              >
                {downloadResumeLabel}
              </button>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ background: isDarkMode ? "#9dff3b" : "#c7e782" }}>
          <div className="px-5 md:px-[52px] py-12 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10">
              <div>
                <div className="font-orbitron font-black text-lg mb-3" style={{ color: "#000" }}>
                  {language === "vi" ? "LÊ NAM TUYÊN" : "TUYEN LE NAM"}
                </div>
                <p className="mb-1 text-[13px] leading-[1.55]" style={{ color: "#000" }}>
                  {language === "vi" ? "ĐỊNH HƯỚNG PRODUCT MANAGER TRONG FINTECH" : "ASPIRING PRODUCT MANAGER IN FINTECH"}
                </p>
              </div>
              <div>
                <div className="font-bold text-xs uppercase tracking-widest mb-3" style={{ color: "#333" }}>
                  {language === "vi" ? "Điều hướng" : "Navigation"}
                </div>
                <ul className="space-y-2">
                  {[
                    { id: "home", label: language === "vi" ? "Trang chủ" : "Home" },
                    { id: "about-me", label: language === "vi" ? "Về tôi" : "About me" },
                  ].map((item) => (
                    <li key={item.id}>
                      <button onClick={() => { const el = document.getElementById(item.id); el?.scrollIntoView({ behavior: "smooth" }) }}
                        className="text-sm font-medium hover:underline" style={{ color: "#111", background: "none", border: "none", cursor: "pointer" }}>
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="font-bold text-xs uppercase tracking-widest mb-3" style={{ color: "#333" }}>
                  {language === "vi" ? "Liên hệ" : "Contact"}
                </div>
                <ul className="space-y-2 text-sm" style={{ color: "#111" }}>
                  <li className="inline-flex items-center gap-2">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none">
                      <path d="M3 6.75 12 13.5l9-6.75" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M4.5 7.5V18h15V7.5" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M4.5 18 9.75 12.75" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M19.5 18 14.25 12.75" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Namtuyenle.CV@gmail.com</span>
                  </li>
                  <li>
                    <a href={footerContact.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:underline">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
                        <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 0 0 3.28 4.97c0 1.08.88 1.97 1.97 1.97a1.97 1.97 0 1 0 0-3ZM20.44 12.56c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.09-3.38 1.86V8.5H9.38c.04.55 0 11.5 0 11.5h3.36v-6.42c0-.34.02-.68.13-.92.27-.68.89-1.39 1.92-1.39 1.36 0 1.9 1.05 1.9 2.58V20H20v-6.86c0-.2.01-.39.01-.58h.43Z" />
                      </svg>
                      <span>LinkedIn</span>
                    </a>
                  </li>
                  <li>
                    <a href={footerContact.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:underline">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
                        <path d="M12 .5C5.65.5.5 5.7.5 12.1c0 5.12 3.3 9.46 7.88 10.99.58.11.79-.25.79-.56v-2.17c-3.2.71-3.88-1.38-3.88-1.38-.52-1.35-1.28-1.71-1.28-1.71-1.05-.73.08-.72.08-.72 1.16.08 1.78 1.21 1.78 1.21 1.03 1.79 2.71 1.27 3.37.97.1-.76.4-1.27.72-1.56-2.55-.29-5.24-1.29-5.24-5.74 0-1.27.45-2.31 1.18-3.13-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.19 1.2a10.9 10.9 0 0 1 5.8 0c2.22-1.52 3.19-1.2 3.19-1.2.62 1.59.23 2.77.11 3.06.73.82 1.18 1.86 1.18 3.13 0 4.46-2.69 5.44-5.25 5.73.41.36.78 1.08.78 2.18v3.23c0 .31.21.67.8.56A11.63 11.63 0 0 0 23.5 12.1C23.5 5.7 18.35.5 12 .5Z" />
                      </svg>
                      <span>GitHub</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-6 flex items-center justify-center" style={{ borderTop: "1px solid rgba(0,0,0,.15)" }}>
              <p className="text-center text-xs" style={{ color: "#333" }}>
                © {new Date().getFullYear()} {language === "vi" ? "Lê Nam Tuyên" : "Tuyen Le Nam"}.{" "}
                {language === "vi" ? "Đã đăng ký bản quyền." : "All rights reserved."}
              </p>
            </div>
          </div>
        </footer>

      {/* Certificate Modal */}
      {selectedCertificate && selectedCertificatePreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,.88)" }} onClick={() => setSelectedCertificate(null)}>
          <div className="relative max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute -top-3 -right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center font-bold text-black"
              style={{ background: theme.accent, color: theme.accentOnSolid }}
            >
              x
            </button>
            <div className="rounded-[22px] overflow-hidden" style={{ border: "1px solid #222" }}>
              <img
                src={selectedCertificatePreview.src}
                alt={selectedCertificatePreview.alt}
                className="w-full h-auto max-h-[85vh] object-contain bg-white"
              />
            </div>
          </div>
        </div>
      )}

      {/* Project Demo Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,.88)" }} onClick={() => { setSelectedProject(null); setSelectedProjectMedia(null) }}>
          <div className={`relative max-h-[90vh] w-full ${selectedProjectMedia?.type === "pdf" ? "max-w-4xl" : "max-w-5xl"}`} onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => { setSelectedProject(null); setSelectedProjectMedia(null) }}
              className="absolute -top-3 -right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center font-bold text-black"
              style={{ background: theme.accent, color: theme.accentOnSolid }}
            >
              x
            </button>
            {selectedProjectMedia?.type === "pdf" ? (
              <div className="overflow-hidden rounded-[22px]" style={{ background: theme.modalBg, border: theme.cardBorder }}>
                <div className="m-4 sm:m-5">
                  <PdfViewer
                    src={selectedProjectMedia.src}
                    title={selectedProject.name}
                    heightClassName="h-[76vh] sm:h-[82vh]"
                    borderColor={theme.cardBorder}
                    loadingLabel={isVietnamese ? "Đang tải tài liệu..." : "Loading document..."}
                    errorLabel={isVietnamese ? "Không thể mở tài liệu lúc này." : "Unable to load this PDF right now."}
                    helperLabel={isVietnamese ? "Phóng to hoặc vuốt ngang để đọc dễ hơn" : "Zoom or drag sideways for easier reading"}
                    openLabel={openPdfLabel}
                    showOpenButton={false}
                  />
                </div>
              </div>
            ) : (
              <div className="rounded-[22px] overflow-hidden overflow-y-auto max-h-[85vh] transition-colors duration-300" style={{ background: theme.modalBg, border: `1px solid ${theme.sectionBorder}` }}>
                <div className="p-5 text-center sm:p-7" style={{ borderBottom: `1px solid ${theme.sectionBorder}` }}>
                  <h3 className="font-orbitron text-base font-bold sm:text-lg" style={{ color: theme.textPrimary }}>
                    {selectedProject.id === "automated-financial-report-export" || selectedProject.id === "macroinsight-me-ai-finance-and-legal-assistant-for-vietnam"
                      ? demoPromptLabel
                      : selectedProject.name}
                  </h3>
                </div>
                <div className={selectedProjectDemoOptions.length && !selectedProjectMedia ? "p-4 sm:p-5" : "p-5 sm:p-7"}>
                  {selectedProject.image && (
                    <div className="mb-6">
                      {selectedProject.image?.endsWith('.mp4') ? (
                        <video className="w-full h-64 sm:h-80 object-cover rounded-xl" controls preload="metadata" style={{ border: "1px solid #2d2d2d" }}>
                          <source src={selectedProject.image} type="video/mp4" />
                        </video>
                      ) : (
                        <img src={selectedProject.image} alt={selectedProject.name} className="w-full h-64 sm:h-80 object-cover rounded-xl" style={{ border: "1px solid #2d2d2d" }} />
                      )}
                    </div>
                  )}
                  {!selectedProjectMedia && selectedProjectDemoOptions.length > 0 && (
                    <div
                      className={selectedProjectDemoOptions.length === 2
                        ? "mx-auto grid max-w-[720px] gap-3 sm:grid-cols-2"
                        : "mx-auto grid max-w-[980px] gap-3 sm:grid-cols-2 lg:grid-cols-3"}
                    >
                      {selectedProjectDemoOptions.map((option) => (
                        <button
                          key={`${selectedProject.id}-${option.label}`}
                          type="button"
                          onClick={() => setSelectedProjectMedia({ type: option.type, src: option.src })}
                          className="group relative flex min-h-[98px] flex-col justify-between overflow-hidden rounded-[22px] px-4 py-3.5 text-left transition-all duration-300 hover:-translate-y-1"
                          style={getDemoOptionStyles(option.variant).card}
                        >
                          <div
                            className="pointer-events-none absolute inset-x-0 top-0 h-16 opacity-80"
                            style={getDemoOptionStyles(option.variant).glow}
                          />
                          <div className="relative z-[1] flex items-start justify-between gap-3">
                            <span
                              className="inline-flex rounded-full px-2 py-1 text-[9px] font-bold uppercase tracking-[0.14em]"
                              style={getDemoOptionStyles(option.variant).badge}
                            >
                              {option.variant === "document" ? "PDF" : option.variant === "mobile" ? "Mobile" : "Desktop"}
                            </span>
                            <span
                              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-transform duration-300 group-hover:translate-x-0.5"
                              aria-hidden="true"
                              style={getDemoOptionStyles(option.variant).icon}
                            >
                              ↗
                            </span>
                          </div>
                          <div className="relative z-[1] mt-4">
                            <span className="block text-[12px] font-bold leading-snug sm:text-[13px]">
                              {option.label}
                            </span>
                            <span
                              className="mt-1 block text-[9px] font-medium uppercase tracking-[0.12em]"
                              style={getDemoOptionStyles(option.variant).meta}
                            >
                              {option.helper}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                  {selectedProjectMedia?.type === "video" && (
                    <div className="mt-5">
                      <div className="overflow-hidden rounded-[18px]" style={{ border: "1px solid #2d2d2d", background: "#0b0b0b" }}>
                        <video className="h-auto max-h-[70vh] w-full bg-black" controls preload="metadata">
                          <source src={selectedProjectMedia.src} type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <ScrollToTopButton isDark={isDarkMode} />
    </div>
    )
  }


