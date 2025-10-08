"use client"

import { useState, useEffect, useRef } from "react"
import {
  Linkedin,
  Mail,
  MapPin,
  Download,
  Menu,
  X,
  GraduationCap,
  Briefcase,
  TrendingUp,
  Users,
  Award,
  Target,
  Database,
  Code,
  ChevronRight,
  Terminal,
  Cpu,
  Zap,
  Globe,
  Rocket,
  BarChart3,
  Bot,
  Layout,
  ChevronLeft,
  ExternalLink,
  Calendar,
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
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("professional")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [language, setLanguage] = useState<"vi" | "en">("en")
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 400
      const newScrollLeft = carouselRef.current.scrollLeft + (direction === "right" ? scrollAmount : -scrollAmount)
      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
    }
  }

  const translations = {
    en: {
      nav: {
        professional: "PROFESSIONAL",
        personal: "PERSONAL",
        contact: "CONTACT",
        hireMe: "HIRE_ME",
      },
      hero: {
        available: "AVAILABLE_FOR_OPPORTUNITIES",
        hello: "HELLO_WORLD",
        role: "DATA_ANALYST_&_FINTECH_SPECIALIST",
        roleDetails: "role: Data Analyst | Financial Technology",
        status: "status: Vice President @ FTC",
        education: "education: Senior @ UEL",
        downloadCV: "DOWNLOAD_CV",
        linkedin: "LINKEDIN",
        location: "VIETNAM",
      },
      stats: {
        internships: "INTERNSHIPS",
        leadership: "LEADERSHIP",
        monthsExp: "MONTHS_EXP",
        graduation: "GRADUATION",
      },
      professional: {
        title: "PROFESSIONAL",
        subtitle: "_EXPERIENCE",
        experience: "EXPERIENCE",
        projects: "PROJECTS",
        skills: "SKILLS",
        education: "EDUCATION",
        certifications: "CERTIFICATIONS",
      },
      personal: {
        title: "PERSONAL",
        subtitle: "_INFO",
        aboutMe: "ABOUT_ME",
        competencies: "CORE_COMPETENCIES",
        clubActivities: "CLUB_ACTIVITIES",
      },
      contact: {
        title: "LET'S_CONNECT",
        subtitle: "Open to Data Analyst, Financial Analyst, and FinTech roles",
        email: "EMAIL",
        linkedin: "LINKEDIN",
        location: "LOCATION",
        locationCity: "Ho Chi Minh City",
        sendMessage: "SEND_MESSAGE",
        connectWithMe: "Connect with me",
      },
      footer: {
        copyright: "© 2025 LE NAM TUYEN",
      },
      experiences: [
        {
          role: "Data Analyst Intern",
          company: "Vietnam Bank for Agriculture and Rural Development (Binh Trieu Branch)",
          period: "Mar 2025 - Jun 2025",
          location: "Ho Chi Minh City",
          type: "INTERNSHIP",
          highlights: [
            "Applied Python to clean, visualize, and interpret 100,000+ trading rows and authored daily and weekly market reports, reducing manual analysis time by about 30 percent",
            "Executed financial analysis and equity valuation of listed companies, prepared investment briefs, monitored portfolios, and supported client development through prospect screening and pitch materials",
            "Designed and deployed an end-to-end pipeline to collect, process, and produce stock ticker analysis reports, delivering daily insights and improving team responsiveness by about 25 percent",
            "Produced timely sector and macro market reports to inform relationship teams and credit committees",
            "Built cash-flow models and scenario analyses and developed capital-utilization proposals covering working capital, capital expenditure, and facility mix to assess repayment capacity and liquidity risk",
            "Performed credit risk assessments and drafted loan recommendations, including full financial statement analysis across profit and loss, balance sheet, and cash flow with ratio and trend reviews",
          ],
          skills: ["Python", "Data Analysis", "Financial Analysis", "Credit Risk Assessment", "Portfolio Management", "Market Research"],
        },
        {
          role: "Data Analyst Intern",
          company: "Maybank Investment Bank Vietnam (Phu Nhuan Branch)",
          period: "Jun 2024 - Dec 2024",
          location: "Ho Chi Minh City",
          type: "INTERNSHIP",
          highlights: [
            "Applied Python to clean, visualize, and interpret 100,000+ trading rows and authored daily and weekly market reports, reducing manual analysis time by about 30 percent",
            "Executed financial analysis and equity valuation of listed companies, prepared investment briefs, monitored portfolios, and supported client development through prospect screening and pitch materials",
            "Designed and deployed an end-to-end pipeline to collect, process, and produce stock ticker analysis reports, delivering daily insights and improving team responsiveness by about 25 percent",
          ],
          skills: ["Python", "Data Analysis", "Financial Analysis", "Equity Valuation", "Portfolio Management", "Investment Briefs"],
        },
      ],
      projects: [
        {
          title: "Automated Financial Report Export",
          description:
            "Built an end-to-end pipeline using requests, pandas and python dotenv to collect, process and export stock ticker analytics, modularized into fetch, process and report export scripts.",
          icon: <Bot className="w-12 h-12" />,
          gradient: "from-pink-500 to-purple-600",
          details: {
            overview:
              "An automated financial reporting system that collects, processes, and exports stock ticker analytics with modularized components for data fetching, processing, and report generation.",
            technologies: ["Python", "Pandas", "Requests", "Python-dotenv", "Excel", "CSV", "PDF"],
            features: [
              "Environment-based configuration and reusable helpers for path management",
              "API key loading, validation and date handling",
              "Standardized outputs to Excel, CSV and PDF formats",
              "Scheduled daily reports reducing manual preparation time by 90%",
              "Improved team responsiveness by 25%",
            ],
            timeline: "Aug 2024 - Oct 2024",
            role: "Developer & Data Analyst",
          },
        },
        {
          title: "Airbnb Rental Pricing Predictor",
          description:
            "Cleaned and engineered a 26,000-row Airbnb dataset, converted currency fields to numeric, parsed dates, trimmed outliers at the 99.5th percentile, and created features such as days since hosted, bedrooms per person, and bathrooms per person.",
          icon: <BarChart3 className="w-12 h-12" />,
          gradient: "from-purple-500 to-orange-500",
          details: {
            overview:
              "A comprehensive machine learning pipeline for predicting Airbnb rental prices using advanced feature engineering and multiple regression models with hyperparameter tuning.",
            technologies: ["Python", "Pandas", "Scikit-learn", "ColumnTransformer", "StandardScaler", "OneHotEncoder", "Linear Regression", "Random Forest", "GridSearchCV"],
            features: [
              "Full preprocessing and modeling pipeline with advanced feature engineering",
              "Stratified sampling by city and hyperparameter tuning with GridSearchCV",
              "Feature importance analysis showing key pricing drivers",
              "Achieved test RMSE 95.84 and MAE 57.98 with tuned Random Forest",
              "Improved error over linear baseline by 4%",
            ],
            timeline: "Apr 2024 - Jun 2024",
            role: "Data Scientist & ML Engineer",
          },
        },
        {
          title: "Workforce Insight Hub: Retention and Compensation",
          description:
            "Built an end-to-end HR analytics workflow to clean and encode Human_Resources.csv and ran EDA with histograms, KDE, boxplots, and a correlation heatmap to surface retention risks.",
          icon: <Layout className="w-12 h-12" />,
          gradient: "from-pink-400 to-orange-400",
          details: {
            overview:
              "A comprehensive HR analytics platform designed to analyze workforce retention patterns and compensation structures using advanced statistical modeling and clustering techniques.",
            technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "Random Forest", "Logistic Regression", "K-means Clustering"],
            features: [
              "End-to-end HR analytics workflow with comprehensive EDA",
              "Random Forest attrition model achieving 85% accuracy",
              "Employee segmentation into three clusters using key metrics",
              "Salary and overtime policy recommendations based on 16.1% attrition rate",
              "Key drivers identified: MonthlyIncome, Age, OverTime, TotalWorkingYears, DailyRate",
            ],
            timeline: "Jan 2024 - Sep 2024",
            role: "Data Analyst & HR Analytics Specialist",
          },
        },
        {
          title: "Public Debt and Economic Stability Research",
          description:
            "Compiled a World Bank panel from 1960 to 2023 and refined 728 raw records to 640 qualified observations using Z-score outlier removal and standardized scaling.",
          icon: <Rocket className="w-12 h-12" />,
          gradient: "from-orange-500 to-pink-500",
          details: {
            overview:
              "A comprehensive research project analyzing the moderating effect of governance on public debt's impact on economic stability across Southeast Asian countries using advanced econometric methods.",
            technologies: ["R", "Stata", "System GMM", "World Bank Data", "Statistical Analysis", "Econometric Modeling"],
            features: [
              "World Bank panel data compilation from 1960-2023 with 640 qualified observations",
              "System GMM analysis testing governance moderation effects",
              "Comprehensive macro controls and interaction terms",
              "Key findings: strong governance turns public debt into growth enhancer",
              "Published in Global Economic Perspectives, Vol 3 Issue 3, 2025",
            ],
            timeline: "Aug 2023 - Feb 2024",
            role: "Research Analyst & Economist",
          },
        },
      ],
      clubActivities: [
        {
          role: "Vice President",
          company: "Financial Technology Club",
          period: "Aug 2024 - Present",
          location: "University of Economics and Law",
          type: "LEADERSHIP",
          highlights: [
            "Directed strategic planning, cross-functional coordination, and partner relations. Oversaw flagship programs and career events",
            "Mentored team leads and implemented templates and standard operating procedures to scale execution quality and accountability",
            "Managed stakeholder communication and program reporting for sponsors and university units",
            "Achievements: Organized ATTACKER with more than 1,000 registered contestants and built a bridge to Ho Chi Minh City's innovation ecosystem in fintech",
            "Elevated recognition to Top 10 at the I-Star awards. Received a Certificate of Merit from the VNU HCM Youth Union for 2024 to 2025 and was commended for outstanding completion of 2025 objectives",
          ],
          skills: ["Strategic Planning", "Team Leadership", "Event Management", "Stakeholder Management"],
        },
        {
          role: "Head of Academics",
          company: "Financial Technology Club",
          period: "Aug 2023 - Aug 2024",
          location: "University of Economics and Law",
          type: "LEADERSHIP",
          highlights: [
            "Led curriculum design for workshops, talkshows, and the ATTACKER competition. Built question banks, scoring rubrics, and evaluation frameworks",
            "Developed training tracks in product analytics, SQL and Python, and dashboarding. Set up KPI dashboards and post-event reporting for continuous improvement",
            "Coordinated lecturers and industry speakers. Managed cross-functional teams to deliver high-quality learning outcomes",
          ],
          skills: ["Curriculum Design", "Training Development", "Academic Coordination", "Content Development"],
        },
      ],
      skills: {
        "PROGRAMMING LANGUAGES": [
          "Python",
          "SQL", 
          "R",
        ],
        "DATA TOOLS": [
          "Power BI", 
          "Excel", 
          "Plotly", 
          "Streamlit", 
          "Jupyter Notebook", 
          "Tableau", 
          "Looker Studio", 
          "Google Sheets", 
          "Google Apps Script"
        ],
        "DATA SYSTEMS & AUTOMATION": [
          "MySQL", 
          "SAP", 
          "UiPath"
        ],
        "DATA SCIENCE": [
          "Regression Analysis", 
          "Classification", 
          "Clustering", 
          "Time Series Forecasting", 
          "A/B Testing", 
          "Feature Engineering", 
          "Model Evaluation"
        ],
        "FINANCE & DOMAIN": [
          "Financial Analysis", 
          "Credit Analysis", 
          "Commercial Banking", 
          "Portfolio Management", 
          "Investment Valuation", 
          "Market Research"
        ],
        "OTHER SKILLS": [
          "Business Insights", 
          "Team Leadership", 
          "Team Collaboration", 
          "Public Speaking", 
          "Problem Solving"
        ],
      },
      about: {
        paragraphs: [
          "As a final-year Financial Technology student at the University of Economics and Law, I specialize in product development, data analytics, and business research.",
          "I design and deliver workshops on product discovery, user research, SQL, Python, dashboards, experiment evaluation, and product analytics. I lead cross-functional teams to convert insights into product requirements, define success metrics, and run lean experiments that drive user experience and business outcomes.",
          "Proficient in Python, SQL, and modern visualization tools, I build templates and reporting systems that scale quality. My goal is to grow as a Data analyst in FinTech.",
          "Relevant Coursework: Database, Data mining, Big Data Analytics in Finance, Blockchain Technology, Application software package for finance, Big data Business information systems, Financial Management, Financial risk management, and more.",
          "GPA: 3.0/4.0 with IELTS: 6.0, demonstrating strong academic foundation and international communication skills.",
        ],
        competencies: [
          "Data Analytics & Visualization (Python, SQL, R)",
          "Financial Analysis & Risk Assessment",
          "Machine Learning & Statistical Modeling",
          "Team Leadership & Cross-functional Coordination",
          "Workshop Design & Training Delivery",
          "Research & Academic Writing",
          "Stakeholder Management & Communication",
          "Process Automation & Optimization",
        ],
      },
    },
    vi: {
      nav: {
        professional: "CHUYÊN_MÔN",
        personal: "CÁ_NHÂN",
        contact: "LIÊN_HỆ",
        hireMe: "TUYỂN_DỤNG",
      },
      hero: {
        available: "SẴN_SÀNG_CHO_CƠ_HỘI",
        hello: "XIN_CHÀO",
        role: "CHUYÊN_GIA_PHÂN_TÍCH_DỮ_LIỆU_&_FINTECH",
        roleDetails: "vai trò: Phân tích Dữ liệu | Công nghệ Tài chính",
        status: "chức vụ: Phó Chủ tịch @ FTC",
        education: "học vấn: Sinh viên năm cuối @ UEL",
        downloadCV: "TẢI_CV",
        linkedin: "LINKEDIN",
        location: "VIỆT_NAM",
      },
      stats: {
        internships: "THỰC_TẬP",
        leadership: "LÃNH_ĐẠO",
        monthsExp: "THÁNG_KINH_NGHIỆM",
        graduation: "TỐT_NGHIỆP",
      },
      professional: {
        title: "CHUYÊN_MÔN",
        subtitle: "_KINH_NGHIỆM",
        experience: "KINH_NGHIỆM",
        projects: "DỰ_ÁN",
        skills: "KỸ_NĂNG",
        education: "HỌC_VẤN",
        certifications: "CHỨNG_CHỈ",
      },
      personal: {
        title: "CÁ_NHÂN",
        subtitle: "_THÔNG_TIN",
        aboutMe: "VỀ_TÔI",
        competencies: "NĂNG_LỰC_CỐT_LÕI",
        clubActivities: "HOẠT_ĐỘNG_CÂU_LẠC_BỘ",
      },
      contact: {
        title: "KẾT_NỐI",
        subtitle: "Mở cho các vị trí Phân tích Dữ liệu, Phân tích Tài chính và FinTech",
        email: "EMAIL",
        linkedin: "LINKEDIN",
        location: "VỊ_TRÍ",
        locationCity: "Thành phố Hồ Chí Minh",
        sendMessage: "GỬI_TIN_NHẮN",
        connectWithMe: "Kết nối với tôi",
      },
      footer: {
        copyright: "© 2025 LÊ NAM TUYỂN",
      },
      experiences: [
        {
          role: "Thực tập sinh Phân tích Dữ liệu",
          company: "Ngân hàng Nông nghiệp và Phát triển Nông thôn Việt Nam (Chi nhánh Bình Triệu)",
          period: "Tháng 3/2025 - Tháng 6/2025",
          location: "Thành phố Hồ Chí Minh",
          type: "THỰC_TẬP",
          highlights: [
            "Áp dụng Python để làm sạch, trực quan hóa và diễn giải hơn 100,000 dòng dữ liệu giao dịch và viết báo cáo thị trường hàng ngày và hàng tuần, giảm thời gian phân tích thủ công khoảng 30%",
            "Thực hiện phân tích tài chính và định giá cổ phiếu của các công ty niêm yết, chuẩn bị báo cáo đầu tư, giám sát danh mục đầu tư và hỗ trợ phát triển khách hàng thông qua sàng lọc triển vọng và tài liệu thuyết trình",
            "Thiết kế và triển khai pipeline đầu cuối để thu thập, xử lý và tạo báo cáo phân tích mã cổ phiếu, cung cấp thông tin chi tiết hàng ngày và cải thiện khả năng phản hồi của nhóm khoảng 25%",
            "Tạo báo cáo thị trường ngành và vĩ mô kịp thời để thông báo cho các nhóm quan hệ và ủy ban tín dụng",
            "Xây dựng mô hình dòng tiền và phân tích kịch bản và phát triển đề xuất sử dụng vốn bao gồm vốn lưu động, chi phí vốn và cơ cấu cơ sở vật chất để đánh giá khả năng trả nợ và rủi ro thanh khoản",
            "Thực hiện đánh giá rủi ro tín dụng và soạn thảo khuyến nghị cho vay, bao gồm phân tích báo cáo tài chính đầy đủ trên lợi nhuận và lỗ, bảng cân đối kế toán và dòng tiền với đánh giá tỷ lệ và xu hướng",
          ],
          skills: ["Python", "Phân tích Dữ liệu", "Phân tích Tài chính", "Đánh giá Rủi ro Tín dụng", "Quản lý Danh mục", "Nghiên cứu Thị trường"],
        },
        {
          role: "Thực tập sinh Phân tích Dữ liệu",
          company: "Maybank Investment Bank Việt Nam (Chi nhánh Phú Nhuận)",
          period: "Tháng 6/2024 - Tháng 12/2024",
          location: "Thành phố Hồ Chí Minh",
          type: "THỰC_TẬP",
          highlights: [
            "Áp dụng Python để làm sạch, trực quan hóa và diễn giải hơn 100,000 dòng dữ liệu giao dịch và viết báo cáo thị trường hàng ngày và hàng tuần, giảm thời gian phân tích thủ công khoảng 30%",
            "Thực hiện phân tích tài chính và định giá cổ phiếu của các công ty niêm yết, chuẩn bị báo cáo đầu tư, giám sát danh mục đầu tư và hỗ trợ phát triển khách hàng thông qua sàng lọc triển vọng và tài liệu thuyết trình",
            "Thiết kế và triển khai pipeline đầu cuối để thu thập, xử lý và tạo báo cáo phân tích mã cổ phiếu, cung cấp thông tin chi tiết hàng ngày và cải thiện khả năng phản hồi của nhóm khoảng 25%",
          ],
          skills: ["Python", "Phân tích Dữ liệu", "Phân tích Tài chính", "Định giá Cổ phiếu", "Quản lý Danh mục", "Báo cáo Đầu tư"],
        },
      ],
      projects: [
        {
          title: "Xuất Báo Cáo Tài Chính Tự Động",
          description:
            "Xây dựng pipeline đầu cuối sử dụng requests, pandas và python dotenv để thu thập, xử lý và xuất phân tích mã cổ phiếu, được mô-đun hóa thành các script fetch, process và export báo cáo.",
          icon: <Bot className="w-12 h-12" />,
          gradient: "from-pink-500 to-purple-600",
          details: {
            overview:
              "Hệ thống báo cáo tài chính tự động thu thập, xử lý và xuất phân tích mã cổ phiếu với các thành phần mô-đun hóa để lấy dữ liệu, xử lý và tạo báo cáo.",
            technologies: ["Python", "Pandas", "Requests", "Python-dotenv", "Excel", "CSV", "PDF"],
            features: [
              "Cấu hình dựa trên môi trường và các helper có thể tái sử dụng cho quản lý đường dẫn",
              "Tải, xác thực khóa API và xử lý ngày tháng",
              "Đầu ra chuẩn hóa sang định dạng Excel, CSV và PDF",
              "Báo cáo hàng ngày theo lịch trình giảm 90% thời gian chuẩn bị thủ công",
              "Cải thiện khả năng phản hồi của nhóm 25%",
            ],
            timeline: "Tháng 8/2024 - Tháng 10/2024",
            role: "Nhà phát triển & Phân tích Dữ liệu",
          },
        },
        {
          title: "Dự Đoán Giá Thuê Airbnb",
          description:
            "Làm sạch và kỹ thuật hóa bộ dữ liệu Airbnb 26,000 dòng, chuyển đổi các trường tiền tệ sang số, phân tích ngày tháng, cắt bỏ ngoại lệ ở phân vị thứ 99.5, và tạo các tính năng như ngày kể từ khi được lưu trú, phòng ngủ trên mỗi người, và phòng tắm trên mỗi người.",
          icon: <BarChart3 className="w-12 h-12" />,
          gradient: "from-purple-500 to-orange-500",
          details: {
            overview:
              "Pipeline machine learning toàn diện để dự đoán giá thuê Airbnb sử dụng kỹ thuật tính năng tiên tiến và nhiều mô hình hồi quy với tinh chỉnh siêu tham số.",
            technologies: ["Python", "Pandas", "Scikit-learn", "ColumnTransformer", "StandardScaler", "OneHotEncoder", "Linear Regression", "Random Forest", "GridSearchCV"],
            features: [
              "Pipeline tiền xử lý và mô hình hóa đầy đủ với kỹ thuật tính năng tiên tiến",
              "Lấy mẫu phân tầng theo thành phố và tinh chỉnh siêu tham số với GridSearchCV",
              "Phân tích tầm quan trọng của tính năng cho thấy các yếu tố chính định giá",
              "Đạt được RMSE 95.84 và MAE 57.98 với Random Forest được tinh chỉnh",
              "Cải thiện lỗi so với baseline tuyến tính 4%",
            ],
            timeline: "Tháng 4/2024 - Tháng 6/2024",
            role: "Nhà khoa học Dữ liệu & Kỹ sư ML",
          },
        },
        {
          title: "Trung Tâm Thông Tin Lực Lượng Lao Động: Duy Trì và Bồi Thường",
          description:
            "Xây dựng quy trình phân tích HR đầu cuối để làm sạch và mã hóa Human_Resources.csv và chạy EDA với biểu đồ, KDE, boxplot và bản đồ nhiệt tương quan để phát hiện rủi ro duy trì.",
          icon: <Layout className="w-12 h-12" />,
          gradient: "from-pink-400 to-orange-400",
          details: {
            overview:
              "Nền tảng phân tích HR toàn diện được thiết kế để phân tích mẫu duy trì lực lượng lao động và cấu trúc bồi thường sử dụng mô hình thống kê tiên tiến và kỹ thuật clustering.",
            technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "Random Forest", "Logistic Regression", "K-means Clustering"],
            features: [
              "Quy trình phân tích HR đầu cuối với EDA toàn diện",
              "Mô hình rời bỏ Random Forest đạt 85% độ chính xác",
              "Phân đoạn nhân viên thành ba cluster sử dụng các chỉ số chính",
              "Khuyến nghị chính sách lương và làm thêm giờ dựa trên tỷ lệ rời bỏ 16.1%",
              "Các yếu tố chính được xác định: Thu nhập hàng tháng, Tuổi, Làm thêm giờ, Tổng số năm làm việc, Tỷ lệ hàng ngày",
            ],
            timeline: "Tháng 1/2024 - Tháng 9/2024",
            role: "Phân tích Dữ liệu & Chuyên gia Phân tích HR",
          },
        },
        {
          title: "Nghiên Cứu Nợ Công và Ổn Định Kinh Tế",
          description:
            "Biên soạn bảng dữ liệu Ngân hàng Thế giới từ 1960 đến 2023 và tinh chỉnh 728 bản ghi thô thành 640 quan sát đủ điều kiện sử dụng loại bỏ ngoại lệ Z-score và chuẩn hóa scaling.",
          icon: <Rocket className="w-12 h-12" />,
          gradient: "from-orange-500 to-pink-500",
          details: {
            overview:
              "Dự án nghiên cứu toàn diện phân tích tác động điều tiết của quản trị đối với tác động của nợ công lên ổn định kinh tế ở các nước Đông Nam Á sử dụng phương pháp kinh tế lượng tiên tiến.",
            technologies: ["R", "Stata", "System GMM", "Dữ liệu Ngân hàng Thế giới", "Phân tích Thống kê", "Mô hình Kinh tế lượng"],
            features: [
              "Biên soạn dữ liệu bảng Ngân hàng Thế giới 1960-2023 với 640 quan sát đủ điều kiện",
              "Phân tích System GMM kiểm tra tác động điều tiết của quản trị",
              "Kiểm soát vĩ mô toàn diện và các thuật ngữ tương tác",
              "Phát hiện chính: quản trị mạnh biến nợ công thành chất tăng cường tăng trưởng",
              "Được xuất bản trong Global Economic Perspectives, Vol 3 Issue 3, 2025",
            ],
            timeline: "Tháng 8/2023 - Tháng 2/2024",
            role: "Phân tích Nghiên cứu & Nhà kinh tế",
          },
        },
      ],
      clubActivities: [
        {
          role: "Phó Chủ tịch",
          company: "Câu lạc bộ Công nghệ Tài chính",
          period: "Tháng 8/2024 - Hiện tại",
          location: "Đại học Kinh tế - Luật",
          type: "LÃNH_ĐẠO",
          highlights: [
            "Chỉ đạo lập kế hoạch chiến lược, phối hợp liên chức năng và quan hệ đối tác. Giám sát các chương trình hàng đầu và sự kiện nghề nghiệp",
            "Cố vấn trưởng nhóm và triển khai các mẫu và quy trình hoạt động tiêu chuẩn để mở rộng chất lượng thực hiện và trách nhiệm",
            "Quản lý giao tiếp bên liên quan và báo cáo chương trình cho nhà tài trợ và đơn vị đại học",
            "Thành tích: Tổ chức ATTACKER với hơn 1,000 thí sinh đăng ký và xây dựng cầu nối với hệ sinh thái đổi mới của Thành phố Hồ Chí Minh trong fintech",
            "Nâng cao sự công nhận lên Top 10 tại giải thưởng I-Star. Nhận được Giấy khen từ Đoàn Thanh niên VNU HCM cho 2024 đến 2025 và được khen ngợi vì hoàn thành xuất sắc các mục tiêu 2025",
          ],
          skills: ["Lập kế hoạch Chiến lược", "Lãnh đạo Nhóm", "Quản lý Sự kiện", "Quản lý Bên liên quan"],
        },
        {
          role: "Trưởng ban Học thuật",
          company: "Câu lạc bộ Công nghệ Tài chính",
          period: "Tháng 8/2023 - Tháng 8/2024",
          location: "Đại học Kinh tế - Luật",
          type: "LÃNH_ĐẠO",
          highlights: [
            "Dẫn dắt thiết kế chương trình giảng dạy cho hội thảo, talkshow và cuộc thi ATTACKER. Xây dựng ngân hàng câu hỏi, thang điểm và khung đánh giá",
            "Phát triển các track đào tạo trong phân tích sản phẩm, SQL và Python, và thiết kế dashboard. Thiết lập dashboard KPI và báo cáo sau sự kiện để cải thiện liên tục",
            "Phối hợp giảng viên và diễn giả ngành. Quản lý các nhóm liên chức năng để cung cấp kết quả học tập chất lượng cao",
          ],
          skills: ["Thiết kế Chương trình", "Phát triển Đào tạo", "Phối hợp Học thuật", "Phát triển Nội dung"],
        },
      ],
      skills: {
        "NGÔN NGỮ LẬP TRÌNH": [
          "Python",
          "SQL", 
          "R",
        ],
        "CÔNG CỤ DỮ LIỆU": [
          "Power BI", 
          "Excel", 
          "Plotly", 
          "Streamlit", 
          "Jupyter Notebook", 
          "Tableau", 
          "Looker Studio", 
          "Google Sheets", 
          "Google Apps Script"
        ],
        "HỆ THỐNG DỮ LIỆU & TỰ ĐỘNG HÓA": [
          "MySQL", 
          "SAP", 
          "UiPath"
        ],
        "KHOA HỌC DỮ LIỆU": [
          "Phân tích Hồi quy", 
          "Phân loại", 
          "Clustering", 
          "Dự báo Chuỗi Thời gian", 
          "Kiểm thử A/B", 
          "Kỹ thuật Tính năng", 
          "Đánh giá Mô hình"
        ],
        "TÀI CHÍNH & LĨNH VỰC": [
          "Phân tích Tài chính", 
          "Phân tích Tín dụng", 
          "Ngân hàng Thương mại", 
          "Quản lý Danh mục", 
          "Định giá Đầu tư", 
          "Nghiên cứu Thị trường"
        ],
        "KỸ NĂNG KHÁC": [
          "Thông tin Kinh doanh", 
          "Lãnh đạo Nhóm", 
          "Hợp tác Nhóm", 
          "Nói trước Công chúng", 
          "Giải quyết Vấn đề"
        ],
      },
      about: {
        paragraphs: [
          "Là sinh viên năm cuối ngành Công nghệ Tài chính tại Đại học Kinh tế - Luật, tôi chuyên về phát triển sản phẩm, phân tích dữ liệu và nghiên cứu kinh doanh.",
          "Tôi thiết kế và tổ chức các hội thảo về khám phá sản phẩm, nghiên cứu người dùng, SQL, Python, dashboard, đánh giá thí nghiệm và phân tích sản phẩm. Tôi lãnh đạo các nhóm liên chức năng để chuyển đổi thông tin chi tiết thành yêu cầu sản phẩm, xác định chỉ số thành công và chạy các thí nghiệm tinh gọn thúc đẩy trải nghiệm người dùng và kết quả kinh doanh.",
          "Thành thạo Python, SQL và các công cụ trực quan hóa hiện đại, tôi xây dựng các mẫu và hệ thống báo cáo có khả năng mở rộng chất lượng. Mục tiêu của tôi là phát triển với vai trò Phân tích Dữ liệu trong FinTech.",
          "Môn học liên quan: Cơ sở dữ liệu, Khai thác dữ liệu, Phân tích Dữ liệu Lớn trong Tài chính, Công nghệ Blockchain, Gói phần mềm ứng dụng cho tài chính, Hệ thống thông tin kinh doanh dữ liệu lớn, Quản lý Tài chính, Quản lý rủi ro tài chính, và nhiều hơn nữa.",
          "GPA: 3.0/4.0 với IELTS: 6.0, thể hiện nền tảng học thuật vững chắc và kỹ năng giao tiếp quốc tế.",
        ],
        competencies: [
          "Phân tích Dữ liệu & Trực quan hóa (Python, SQL, R)",
          "Phân tích Tài chính & Đánh giá Rủi ro",
          "Machine Learning & Mô hình Thống kê",
          "Lãnh đạo Nhóm & Phối hợp Liên chức năng",
          "Thiết kế Hội thảo & Tổ chức Đào tạo",
          "Nghiên cứu & Viết Học thuật",
          "Quản lý Bên liên quan & Giao tiếp",
          "Tự động hóa Quy trình & Tối ưu hóa",
        ],
      },
    },
  }

  const t = translations[language]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#00FF99 1px, transparent 1px), linear-gradient(90deg, #00FF99 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00FF99] rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00FF99] rounded-full blur-[120px] opacity-20"></div>
      </div>

      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-xl border-b border-[#00FF99]/20" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 bg-black border-2 border-[#00FF99] flex items-center justify-center font-bold text-[#00FF99] text-xl">
                TL
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-wider">LE NAM TUYEN</h1>
                <p className="text-xs text-[#00FF99] font-mono">{t.hero.role}</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {[
                { key: "professional", label: t.nav.professional },
                { key: "personal", label: t.nav.personal },
                { key: "contact", label: t.nav.contact },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActiveSection(item.key)}
                  className={`transition-all font-mono text-sm tracking-wider relative group active:scale-95 ${
                    activeSection === item.key ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#00FF99] transition-all ${
                      activeSection === item.key ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </button>
              ))}
              <button
                onClick={() => setLanguage(language === "en" ? "vi" : "en")}
                className="flex items-center gap-2 px-4 py-2 border border-[#00FF99]/30 text-[#00FF99] hover:border-[#00FF99] transition-all active:scale-95"
              >
                <Globe className="w-4 h-4" />
                <span className="font-mono text-xs">{language === "en" ? "VI" : "EN"}</span>
              </button>
              <a
                href="https://www.linkedin.com/in/tuyen-le-nam-7614a1269/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-[#00FF99] text-black font-bold tracking-wider hover:bg-[#00FF99]/80 transition-all active:scale-95"
              >
                {t.nav.hireMe}
              </a>
            </div>

            <button className="md:hidden text-[#00FF99]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-6 pb-4 space-y-4 bg-black/95 border border-[#00FF99]/20 p-6">
              {[
                { key: "professional", label: t.nav.professional },
                { key: "personal", label: t.nav.personal },
                { key: "contact", label: t.nav.contact },
              ].map((item) => (
                <button
                  key={item.key}
                  className="block w-full text-left py-3 font-mono text-sm tracking-wider hover:text-[#00FF99]"
                  onClick={() => {
                    setActiveSection(item.key)
                    setMobileMenuOpen(false)
                  }}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => setLanguage(language === "en" ? "vi" : "en")}
                className="flex items-center gap-2 px-4 py-2 border border-[#00FF99]/30 text-[#00FF99] hover:border-[#00FF99] transition-all w-full justify-center"
              >
                <Globe className="w-4 h-4" />
                <span className="font-mono text-xs">{language === "en" ? "TIẾNG VIỆT" : "ENGLISH"}</span>
              </button>
            </div>
          )}
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#00FF99] text-[#00FF99] font-mono text-xs">
                <Terminal className="w-4 h-4" />
                <span className="animate-pulse">●</span>
                {t.hero.available}
              </div>

              <div className="space-y-2">
                <p className="text-[#00FF99] font-mono text-sm tracking-widest">{t.hero.hello}</p>
                <h1 className="text-6xl md:text-8xl font-bold leading-none tracking-tighter">
                  LE NAM
                  <br />
                  <span className="text-[#00FF99]">TUYEN</span>
                </h1>
                <div className="flex items-center gap-2 pt-2">
                  <div className="w-12 h-0.5 bg-[#00FF99]"></div>
                  <p className="font-mono text-sm text-gray-400">{t.hero.role}</p>
                </div>
              </div>

              <div className="space-y-3 border-l-2 border-[#00FF99] pl-6">
                <p className="text-gray-400 font-mono text-sm">
                  {t.hero.roleDetails}
                  <br />
                  {t.hero.status}
                  <br />
                  {t.hero.education}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-6">
                <button className="px-8 py-4 bg-[#00FF99] text-black font-bold tracking-wider hover:bg-[#00FF99]/80 transition-all flex items-center gap-3 active:scale-95">
                  <Download className="w-5 h-5" />
                  {t.hero.downloadCV}
                </button>
                <a
                  href="https://www.linkedin.com/in/tuyen-le-nam-7614a1269/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-[#00FF99] text-[#00FF99] font-bold tracking-wider hover:bg-[#00FF99]/10 transition-all flex items-center gap-3 active:scale-95"
                >
                  <Linkedin className="w-5 h-5" />
                  {t.hero.linkedin}
                </a>
              </div>

              <div className="flex items-center gap-3 pt-4 text-sm text-gray-400 font-mono">
                <MapPin className="w-4 h-4 text-[#00FF99]" />
                {t.hero.location}
              </div>
            </div>

            <div className="relative">
              <div className="relative w-96 h-96 mx-auto">
                {/* Outer glow effect */}
                <div className="absolute inset-0 bg-[#00FF99] blur-xl opacity-30 animate-pulse"></div>

                {/* Main border frame */}
                <div className="absolute inset-0 border-4 border-[#00FF99] shadow-[0_0_30px_rgba(0,255,153,0.5)]"></div>
                <div className="absolute inset-3 border-2 border-[#00FF99]/60"></div>
                <div className="absolute inset-6 border border-[#00FF99]/30"></div>

                {/* Image container - no overlay for maximum sharpness */}
                <div className="absolute inset-10 overflow-hidden bg-black">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Avatar-653d9ylzzMfaEqsMFNdohWuJz9BSAB.jpg"
                    alt="Tuyen Le Nam"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Corner accents - larger and more prominent */}
                <div className="absolute -top-3 -left-3 w-12 h-12 border-t-4 border-l-4 border-[#00FF99]"></div>
                <div className="absolute -top-3 -right-3 w-12 h-12 border-t-4 border-r-4 border-[#00FF99]"></div>
                <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-4 border-l-4 border-[#00FF99]"></div>
                <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-4 border-r-4 border-[#00FF99]"></div>

                {/* Badge elements - enhanced */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#00FF99] flex items-center justify-center shadow-[0_0_20px_rgba(0,255,153,0.6)]">
                  <Award className="w-10 h-10 text-black" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-black border-4 border-[#00FF99] flex items-center justify-center shadow-[0_0_20px_rgba(0,255,153,0.6)]">
                  <Target className="w-10 h-10 text-[#00FF99]" />
                </div>

                {/* Animated scan line effect */}
                <div className="absolute inset-10 overflow-hidden pointer-events-none">
                  <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-[#00FF99] to-transparent opacity-50 animate-[scan_3s_ease-in-out_infinite]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {[
              { value: "02", label: t.stats.internships, icon: <Briefcase className="w-6 h-6" /> },
              { value: "02", label: t.stats.leadership, icon: <Users className="w-6 h-6" /> },
              { value: "13", label: t.stats.monthsExp, icon: <TrendingUp className="w-6 h-6" /> },
              { value: "2026", label: t.stats.graduation, icon: <GraduationCap className="w-6 h-6" /> },
            ].map((stat, i) => (
              <div
                key={i}
                className="group relative bg-black border border-[#00FF99]/30 p-6 hover:border-[#00FF99] transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-[#00FF99]">{stat.icon}</div>
                  <h3 className="text-4xl font-bold text-[#00FF99] font-mono">{stat.value}</h3>
                </div>
                <p className="text-gray-400 text-xs font-mono tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeSection === "professional" && (
        <>
          <section className="relative py-20 px-6 border-t border-[#00FF99]/20">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-4 mb-12">
                <Zap className="w-8 h-8 text-[#00FF99]" />
                <h2 className="text-4xl font-bold tracking-wider">
                  {t.professional.title}
                  <span className="text-[#00FF99]">{t.professional.subtitle}</span>
                </h2>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-[#00FF99] to-transparent"></div>
              </div>

              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <Briefcase className="w-6 h-6 text-[#00FF99]" />
                  {t.professional.experience}
                </h3>
                <div className="space-y-8">
                  {t.experiences.map((exp, i) => (
                    <div key={i} className="relative group">
                      <div className="absolute left-0 top-0 w-1 h-full bg-[#00FF99]/30"></div>

                      <div className="ml-8 bg-black border border-[#00FF99]/30 p-8 hover:border-[#00FF99] transition-all">
                        <div className="flex flex-wrap justify-between gap-4 mb-6">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-2xl font-bold text-[#00FF99]">{exp.role}</h3>
                              <span className="px-3 py-1 bg-[#00FF99]/10 border border-[#00FF99] text-[#00FF99] text-xs font-mono">
                                {exp.type}
                              </span>
                            </div>
                            <p className="text-xl text-white font-semibold mb-1">{exp.company}</p>
                            <div className="flex gap-4 text-sm text-gray-400 font-mono">
                              <span>{exp.period}</span>
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>

                        <div className="mb-6">
                          <div className="grid md:grid-cols-2 gap-3">
                            {exp.highlights.map((h, j) => (
                              <div key={j} className="flex items-start gap-2 text-gray-300">
                                <ChevronRight className="w-4 h-4 text-[#00FF99] mt-1" />
                                <span className="text-sm">{h}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((s) => (
                            <span
                              key={s}
                              className="px-3 py-1 bg-[#00FF99]/5 border border-[#00FF99]/30 text-[#00FF99] text-xs font-mono"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-16">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold flex items-center gap-3">
                    <Rocket className="w-6 h-6 text-[#00FF99]" />
                    {t.professional.projects}
                  </h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => scrollCarousel("left")}
                      className="w-10 h-10 border border-[#00FF99]/30 flex items-center justify-center hover:border-[#00FF99] hover:bg-[#00FF99]/10 transition-all active:scale-90"
                      aria-label="Scroll left"
                    >
                      <ChevronLeft className="w-5 h-5 text-[#00FF99]" />
                    </button>
                    <button
                      onClick={() => scrollCarousel("right")}
                      className="w-10 h-10 border border-[#00FF99]/30 flex items-center justify-center hover:border-[#00FF99] hover:bg-[#00FF99]/10 transition-all active:scale-90"
                      aria-label="Scroll right"
                    >
                      <ChevronRight className="w-5 h-5 text-[#00FF99]" />
                    </button>
                  </div>
                </div>

                <div
                  ref={carouselRef}
                  className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {t.projects.map((project, i) => (
                    <div
                      key={i}
                      onClick={() => setSelectedProject(i)}
                      className="relative group bg-black border border-[#00FF99]/30 p-8 hover:border-[#00FF99] transition-all overflow-hidden flex-shrink-0 w-[400px] cursor-pointer transform hover:scale-105 hover:-translate-y-2 duration-300"
                    >
                      {/* Corner glow effects */}
                      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#00FF99]/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#00FF99]/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                      <div className="relative z-10">
                        <div className="flex items-start gap-6 mb-4">
                          <div
                            className={`w-20 h-20 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                          >
                            {project.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#00FF99] transition-colors">
                              {project.title}
                            </h4>
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>
                        <div className="flex items-center gap-2 text-[#00FF99] text-sm font-mono">
                          <span>View Details</span>
                          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <Code className="w-6 h-6 text-[#00FF99]" />
                  {t.professional.skills}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(t.skills).map(([cat, list], i) => (
                    <div
                      key={i}
                      className="bg-black border border-[#00FF99]/30 p-6 hover:border-[#00FF99] transition-all"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-[#00FF99] flex items-center justify-center">
                          {i === 0 && <Code className="w-5 h-5 text-black" />}
                          {i === 1 && <Database className="w-5 h-5 text-black" />}
                          {i === 2 && <Cpu className="w-5 h-5 text-black" />}
                          {i === 3 && <BarChart3 className="w-5 h-5 text-black" />}
                          {i === 4 && <TrendingUp className="w-5 h-5 text-black" />}
                          {i === 5 && <Users className="w-5 h-5 text-black" />}
                        </div>
                        <h3 className="text-lg font-bold font-mono">{cat}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {list.map((s) => (
                          <span
                            key={s}
                            className="px-2 py-1 border border-[#00FF99]/50 text-gray-300 text-xs hover:text-[#00FF99] transition-all"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-[#00FF99]" />
                  {t.professional.education}
                </h3>
                <div className="bg-black border border-[#00FF99]/30 p-8 hover:border-[#00FF99] transition-all">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-[#00FF99] flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-8 h-8 text-black" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-[#00FF99] mb-2">Bachelor of Financial Technology (Fintech)</h4>
                      <p className="text-xl text-white font-semibold mb-2">University of Economics and Law (VNU-HCM)</p>
                      <div className="flex gap-6 text-sm text-gray-400 font-mono mb-4">
                        <span>2021 - 2026</span>
                        <span>Ho Chi Minh City</span>
                        <span>GPA: 3.0/4.0</span>
                      </div>
                      <div className="mb-4">
                        <h5 className="text-lg font-semibold text-white mb-3">Relevant Coursework:</h5>
                        <div className="grid md:grid-cols-2 gap-2">
                          {[
                            "Database", "Data mining", "Big Data Analytics in Finance", "Blockchain Technology",
                            "Application software package for finance", "Big data Business information systems",
                            "Financial Management", "Financial risk management"
                          ].map((course, i) => (
                            <div key={i} className="flex items-start gap-2 text-gray-300">
                              <ChevronRight className="w-4 h-4 text-[#00FF99] mt-1" />
                              <span className="text-sm">{course}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-[#00FF99]/10 border border-[#00FF99] text-[#00FF99] text-xs font-mono">
                          Financial Technology
                        </span>
                        <span className="px-3 py-1 bg-[#00FF99]/10 border border-[#00FF99] text-[#00FF99] text-xs font-mono">
                          Data Analytics
                        </span>
                        <span className="px-3 py-1 bg-[#00FF99]/10 border border-[#00FF99] text-[#00FF99] text-xs font-mono">
                          Business Information Systems
                        </span>
                        <span className="px-3 py-1 bg-[#00FF99]/10 border border-[#00FF99] text-[#00FF99] text-xs font-mono">
                          Risk Management
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <Award className="w-6 h-6 text-[#00FF99]" />
                  {t.professional.certifications}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-black border border-[#00FF99]/30 p-6 hover:border-[#00FF99] transition-all">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-[#00FF99] flex items-center justify-center">
                        <Award className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">Ask Questions to Make Data-Driven Decisions</h4>
                        <p className="text-sm text-gray-400 font-mono">Coursera Certificate</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">Professional certificate in data-driven decision making and analytical thinking.</p>
                  </div>
                  <div className="bg-black border border-[#00FF99]/30 p-6 hover:border-[#00FF99] transition-all">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-[#00FF99] flex items-center justify-center">
                        <Cpu className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">Accelerating End-to-End Data Science Workflows</h4>
                        <p className="text-sm text-gray-400 font-mono">NVIDIA Certificate</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">Advanced certification in data science workflow optimization and GPU acceleration.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {activeSection === "personal" && (
        <section className="relative py-20 px-6 border-t border-[#00FF99]/20">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <Terminal className="w-8 h-8 text-[#00FF99]" />
              <h2 className="text-4xl font-bold tracking-wider">
                {t.personal.title}
                <span className="text-[#00FF99]">{t.personal.subtitle}</span>
              </h2>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-[#00FF99] to-transparent"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="border-l-2 border-[#00FF99] pl-6 space-y-4">
                <h3 className="text-2xl font-bold mb-6 text-[#00FF99]">{t.personal.aboutMe}</h3>
                {t.about.paragraphs.map((para, i) => (
                  <p key={i} className="text-gray-300 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              <div className="bg-black border border-[#00FF99]/30 p-8">
                <h3 className="text-sm font-mono text-[#00FF99] mb-6 tracking-wider flex items-center gap-2">
                  <Cpu className="w-5 h-5" />
                  {t.personal.competencies}
                </h3>
                <div className="space-y-3">
                  {t.about.competencies.map((comp, i) => (
                    <div key={i} className="flex items-start gap-3 text-gray-300">
                      <ChevronRight className="w-4 h-4 text-[#00FF99] mt-1" />
                      <span className="text-sm">{comp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Users className="w-6 h-6 text-[#00FF99]" />
                {t.personal.clubActivities}
              </h3>
              <div className="space-y-8">
                {t.clubActivities.map((activity, i) => (
                  <div key={i} className="relative group">
                    <div className="absolute left-0 top-0 w-1 h-full bg-[#00FF99]/30"></div>

                    <div className="ml-8 bg-black border border-[#00FF99]/30 p-8 hover:border-[#00FF99] transition-all">
                      <div className="flex flex-wrap justify-between gap-4 mb-6">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold text-[#00FF99]">{activity.role}</h3>
                            <span className="px-3 py-1 bg-[#00FF99]/10 border border-[#00FF99] text-[#00FF99] text-xs font-mono">
                              {activity.type}
                            </span>
                          </div>
                          <p className="text-xl text-white font-semibold mb-1">{activity.company}</p>
                          <div className="flex gap-4 text-sm text-gray-400 font-mono">
                            <span>{activity.period}</span>
                            <span>{activity.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="grid md:grid-cols-2 gap-3">
                          {activity.highlights.map((h, j) => (
                            <div key={j} className="flex items-start gap-2 text-gray-300">
                              <ChevronRight className="w-4 h-4 text-[#00FF99] mt-1" />
                              <span className="text-sm">{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {activity.skills.map((s) => (
                          <span
                            key={s}
                            className="px-3 py-1 bg-[#00FF99]/5 border border-[#00FF99]/30 text-[#00FF99] text-xs font-mono"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {activeSection === "contact" && (
        <section className="relative py-20 px-6 border-t border-[#00FF99]/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-[#00FF99]">{t.contact.title}</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">{t.contact.subtitle}</p>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
              <a
                href="mailto:bingo.namtuyen@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black border border-[#00FF99]/30 p-6 hover:border-[#00FF99] transition-all active:scale-95"
              >
                <Mail className="w-8 h-8 text-[#00FF99] mx-auto mb-3" />
                <h3 className="font-semibold mb-2 text-white">{t.contact.email}</h3>
                <p className="text-gray-400 text-sm">bingo.namtuyen@gmail.com</p>
              </a>
              <a
                href="https://www.linkedin.com/in/tuyen-le-nam-7614a1269/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black border border-[#00FF99]/30 p-6 hover:border-[#00FF99] transition-all active:scale-95"
              >
                <Linkedin className="w-8 h-8 text-[#00FF99] mx-auto mb-3" />
                <h3 className="font-semibold mb-2 text-white">{t.contact.linkedin}</h3>
                <p className="text-gray-400 text-sm">{t.contact.connectWithMe}</p>
              </a>
              <div className="bg-black border border-[#00FF99]/30 p-6">
                <MapPin className="w-8 h-8 text-[#00FF99] mx-auto mb-3" />
                <h3 className="font-semibold mb-2 text-white">{t.contact.location}</h3>
                <p className="text-gray-400 text-sm">{t.contact.locationCity}</p>
                <p className="text-gray-400 text-sm mt-1">Phone: 0921270404</p>
              </div>
            </div>

            <button className="px-8 py-4 bg-[#00FF99] text-black font-bold tracking-wider hover:bg-[#00FF99]/80 transition-all active:scale-95">
              {t.contact.sendMessage}
            </button>
          </div>
        </section>
      )}

      <footer className="py-8 px-6 border-t border-[#00FF99]/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-gray-400 text-sm font-mono">{t.footer.copyright}</p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/tuyen-le-nam-7614a1269/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-[#00FF99]/30 flex items-center justify-center hover:border-[#00FF99] transition-all active:scale-90"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:bingo.namtuyen@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-[#00FF99]/30 flex items-center justify-center hover:border-[#00FF99] transition-all active:scale-90"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>

      {selectedProject !== null && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-in fade-in duration-300"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-black border-2 border-[#00FF99] max-w-4xl w-full max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 w-10 h-10 border border-[#00FF99]/30 flex items-center justify-center hover:border-[#00FF99] hover:bg-[#00FF99]/10 transition-all active:scale-90 z-10"
            >
              <X className="w-5 h-5 text-[#00FF99]" />
            </button>

            {/* Modal content */}
            <div className="p-8">
              {/* Header */}
              <div className="flex items-start gap-6 mb-8 pb-8 border-b border-[#00FF99]/20">
                <div
                  className={`w-24 h-24 bg-gradient-to-br ${t.projects[selectedProject].gradient} flex items-center justify-center text-white flex-shrink-0`}
                >
                  {t.projects[selectedProject].icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-[#00FF99] mb-3">{t.projects[selectedProject].title}</h2>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 font-mono">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#00FF99]" />
                      <span>{t.projects[selectedProject].details.timeline}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-[#00FF99]" />
                      <span>{t.projects[selectedProject].details.role}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Overview */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-[#00FF99]"></div>
                  {language === "en" ? "Overview" : "Tổng quan"}
                </h3>
                <p className="text-gray-300 leading-relaxed">{t.projects[selectedProject].details.overview}</p>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-[#00FF99]"></div>
                  {language === "en" ? "Technologies" : "Công nghệ"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {t.projects[selectedProject].details.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-[#00FF99]/10 border border-[#00FF99] text-[#00FF99] text-sm font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-[#00FF99]"></div>
                  {language === "en" ? "Key Features" : "Tính năng chính"}
                </h3>
                <div className="space-y-3">
                  {t.projects[selectedProject].details.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 text-gray-300">
                      <ChevronRight className="w-5 h-5 text-[#00FF99] mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
