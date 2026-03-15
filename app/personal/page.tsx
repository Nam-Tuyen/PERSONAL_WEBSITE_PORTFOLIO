"use client"

import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import PdfViewer from "../components/PdfViewer"
import ScrollToTopButton from "../components/ScrollToTopButton"

const getInitialLanguage = (): Language => {
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

type Language = "en" | "vi"

type LinkItem = { title: string; url: string }
type RoleItem = { title: string; period: string; bullets: string[]; achievements?: string[] }
type AchievementAction = {
  label: string
  src: string
  type: "pdf" | "video"
  title?: string
  variant?: "document" | "mobile" | "desktop"
}
type SectionItem = {
  id?: string
  title: string
  organization: string
  period?: string
  icon?: string
  logo?: string
  bullets?: string[]
  description?: string
  roles?: RoleItem[]
  images?: string[]
  links?: LinkItem[]
  website?: string
  linkedin?: string
  certificate?: string
  publication?: string
  date?: string
  link?: string
  document?: string
  demoOptions?: { label: string; src: string }[]
}

const content: Record<
  Language,
  {
    intro: string
    labels: {
      news: string
      achievements: string
      viewCertificate: string
      viewPublication: string
      viewDemo: string
      viewDocument: string
      chooseDemo: string
      mobileDemo: string
      desktopDemo: string
      navigation: string
      contact: string
      home: string
      aboutMe: string
      copyright: string
      tagline: string
    }
    sections: {
      extracurriculars: { title: string; items: SectionItem[] }
      socialActivities: { title: string; items: SectionItem[] }
      achievements: { title: string; items: SectionItem[] }
      research: { title: string; items: SectionItem[] }
    }
  }
> = {
  en: {
    intro:
      "This section offers a closer look at who I am beyond my academic and professional work. It reflects my interests, personal journey, and the experiences that have shaped the way I think, learn, and grow. Through this, I hope to share not only what I do, but also what motivates me and how I continue to develop both personally and professionally.",
    labels: {
      news: "News & Media",
      achievements: "Key Achievements",
      viewCertificate: "VIEW CERTIFICATE",
      viewPublication: "VIEW PUBLICATION",
      viewDemo: "VIEW DEMO",
      viewDocument: "VIEW DOCUMENT",
      chooseDemo: "Please select the type of demo you would like to view:",
      mobileDemo: "VIEW MOBILE DEMO",
      desktopDemo: "VIEW DESKTOP DEMO",
      navigation: "Navigation",
      contact: "Contact",
      home: "Home",
      aboutMe: "About me",
      copyright: "All rights reserved.",
      tagline: "ASPIRING PRODUCT MANAGER IN FINTECH",
    },
    sections: {
      extracurriculars: {
        title: "EXTRACURRICULARS",
        items: [
          {
            title: "FINANCIAL TECHNOLOGY CLUB",
            organization: "University of Economics and Law",
            period: "2022 - Present",
            logo: "/FTC_logo.png",
            website: "https://ftc-websites.vercel.app/",
            linkedin: "https://www.linkedin.com/company/ftc-financial-technology-club/posts/?feedView=all",
            roles: [
              {
                title: "Vice Club President",
                period: "08/2024 - Present",
                bullets: [
                  "Directed strategic planning, cross-functional coordination, and partner relations across flagship club programs and career events.",
                  "Mentored team leads and standardized templates and operating processes to improve execution quality and accountability.",
                ],
                achievements: [
                  "Co-organized ATTACKER with more than 1,000 registered contestants and helped strengthen connections with Ho Chi Minh City's fintech innovation ecosystem.",
                  "Contributed to the club being recognized in the Top 10 of the I-Star awards.",
                  "Received a Certificate of Merit from the VNU-HCM Youth Union for the 2024 - 2025 period.",
                ],
              },
              {
                title: "Academic Department Head",
                period: "08/2023 - 08/2024",
                bullets: [
                  "Led content design for workshops, talk shows, and the ATTACKER competition, including question banks, scoring rubrics, and evaluation frameworks.",
                  "Built learning tracks in product analytics, SQL, Python, and dashboarding while setting up KPI dashboards and post-event reports.",
                  "Coordinated lecturers and industry speakers to deliver practical and high-quality learning outcomes.",
                ],
              },
            ],
            images: ["/FTCclb.JPG", "/FTC2.jpg", "/FTC1.jpg"],
          },
          {
            title: "BASKETBALL TEAM CAPTAIN",
            organization: "University of Economics and Law",
            bullets: [
              "Served as captain of the UEL basketball team and led the team in national student tournaments such as VUG 3x3 and the NUC National Student Basketball Championship.",
              "Helped the team win the championship at Basketball STU Open 2024, a tournament involving many universities in Ho Chi Minh City.",
              "Strengthened leadership, discipline, teamwork, and strategic thinking through training and competition.",
            ],
            images: ["/basketballteam.jpg", "/baskteballteamchampion.jpg", "/vug.jpg"],
          },
        ],
      },
      socialActivities: {
        title: "SOCIAL ACTIVITIES",
        items: [
          {
            title: "ATTACKER 2025 - NATIONAL FINTECH ACADEMIC COMPETITION",
            organization: "Rex Hotel",
            bullets: [
              "Supported the coordination of a national FinTech academic competition with more than 2,000 student registrations and nearly 250 projects.",
              "Helped build the timeline, assign tasks, and standardize competition rules, scoring criteria, and submission guidelines.",
              "Contributed to a well-organized competition that connected students with mentors, scholarships, and funding opportunities.",
            ],
            images: ["/attacker.jpg", "/attacker2.jpg", "/attacker3.jpg"],
            links: [
              {
                title: "Tuổi Trẻ - Seeking bold FinTech ideas from students nationwide",
                url: "https://tuoitre.vn/tim-kiem-y-tuong-fintech-tao-bao-cua-sinh-vien-ca-nuoc-20250522142808196.htm",
              },
              {
                title: "UEL - ATTACKER 2025 competition: Opportunity for students to develop in FinTech",
                url: "https://www.uel.edu.vn/tin-tuc/cuoc-thi-attacker-2025-co-hoi-cho-sinh-vien-phat-trien-linh-vuc-fintech",
              },
            ],
          },
          {
            title: "WEB3 CAREER INNOVATION JOB FAIR",
            organization: "University of Economics and Law",
            bullets: [
              "Participated in organizing the WEB3 CAREER INNOVATION Job Fair, which welcomed more than 3,000 students and 15 companies in FinTech, Blockchain, and Web3.",
              "Coordinated the job fair area, experience booths, quick interview zone, and CV review activities to ensure a smooth participant experience.",
              "Supported the successful delivery of an event that offered over 300 internship and collaborator opportunities, along with career-oriented talk shows.",
            ],
            images: ["/jobfare.jpg", "/jobfare2.jpg", "/jobfare3.jpg"],
            links: [
              {
                title: "UEL Library - Web3 Career Innovation",
                url: "https://lib.uel.edu.vn/tin-tuc-hoat-dong-13/web3-career-innovation-trai-nghiem-tuyet-voi-cho-sinh-vien-dam-me-fintech-2",
              },
            ],
          },
          {
            title: "TALK SHOW 'INVESTING IN THE AGE OF TECHNOLOGY: A PRACTICAL MINDSET'",
            organization: "University of Economics and Law",
            bullets: [
              "Coordinated a talk show in partnership with Maybank Investment Bank Vietnam for more than 100 students interested in finance, technology, and investing.",
              "Worked on the event timeline, speaker coordination, communication materials, and post-event feedback collection.",
              "Helped deliver a well-run program that gave students practical insights into investment strategy, risk management, and financial trends.",
            ],
            images: ["/maybank.jpg", "/maybank2.jpg", "/maybank3.jpg"],
            links: [
              {
                title: "Facebook - Maybank Investment Talk Show",
                url: "https://www.facebook.com/share/p/1GzVP9BCum/",
              },
            ],
          },
          {
            title: "MID-AUTUMN FESTIVAL CHARITY PROGRAM",
            organization: "Lam Dong, Vietnam",
            bullets: [
              "Participated in a Mid-Autumn charity program and helped organize a fair booth for underprivileged children in the local community.",
              "Contributed to theme planning, fundraising, material preparation, game design, and on-site task coordination.",
              "Developed stronger teamwork, communication, budgeting, and problem-solving skills through community service activities.",
            ],
            images: ["/sa.jpg", "/sa1.jpg", "/sa2.jpg"],
          },
        ],
      },
      achievements: {
        title: "ACHIEVEMENTS",
        items: [
          {
            title: "OUTSTANDING INDIVIDUAL IN YOUTH UNION AND STUDENT MOVEMENT",
            organization: "",
            period: "2024 - 2025",
            icon: "🏅",
            bullets: [
              "Led and supported impactful Youth Union and student initiatives that encouraged initiative, creativity, and student engagement at UEL.",
              "Contributed to building an active and cohesive environment that supported student growth and community service.",
            ],
            images: ["/IMG_5063.JPG", "/IMG_5064.JPG", "/IMG_5065.JPG"],
            certificate: "/IMG_5081.jpg",
          },
          {
            title: "TOP 5: BANKER'S GOT TALENT 2025 COMPETITION",
            organization: "",
            period: "2025",
            icon: "🏅",
            bullets: [
              "Achieved Top 5 in BANKER'S GOT TALENT 2025, an academic competition focused on finance, banking, quantitative thinking, and equity analysis.",
              "Worked with the team to prepare an equity research report and investment pitch based on financial analysis, valuation, and risk assessment.",
              "Strengthened research, analytical thinking, presentation skills, and professional exposure in finance and banking.",
            ],
            images: ["/FBG1.jpg", "/FBG2.jpg", "/FBG3.jpg"],
            document: "/ReportBanker.pdf",
          },
          {
            id: "finnovative-hackathon-2025",
            title: "TOP 6: THE FINNOVATIVE HACKATHON 2025 - INNOVATORS' TRACK",
            organization: "",
            period: "2025",
            bullets: [
              "Achieved Top 6 in The Finnovative Hackathon 2025, a national competition focused on building practical fintech and digital innovation solutions for the Vietnamese market.",
              "Worked with the team to build MACROINSIGHT.ME, an AI finance and legal assistant for Vietnam, designed to help beginner investors understand macroeconomic news through cited AI chat, swipe-based news discovery, and portfolio tracking.",
              "Strengthened product thinking, user-centered design, and teamwork through the process of turning a problem in financial information overload into a more practical and scalable product solution.",
            ],
            images: ["/Hackathon.jpg", "/Hackathon2.JPG", "/Hackathon3.JPG"],
            document: "/MacroInsight.pdf",
            demoOptions: [
              { label: "VIEW MOBILE DEMO", src: "/Demo video(Mobile Phone).mp4" },
              { label: "VIEW DESKTOP DEMO", src: "/Demo video(PC).mp4" },
            ],
          },
        ],
      },
      research: {
        title: "RESEARCH ACHIEVEMENTS",
        items: [
          {
            title: "PUBLIC DEBT AND ECONOMIC STABILITY: THE MODERATING EFFECT OF GOVERNANCE: EVIDENCE FROM SOUTHEAST ASIAN COUNTRIES",
            organization: "",
            publication: "Journal of Southeast Asian Economies",
            date: "2025",
            icon: "🏆",
            description:
              "Research on the relationship between public debt and economic stability in Southeast Asian countries, with a focus on the moderating role of governance quality.",
            link: "https://ojs.omniscient.sg/index.php/gep/article/view/62858",
          },
          {
            title: "TREE ENSEMBLES LEAD THE WAY: BENCHMARKING MACHINE-LEARNING MODELS FOR CORPORATE FAILURE IN VIETNAM",
            organization: "",
            publication: "Global Conference on Sustainability in Economics, Business and Law",
            date: "2025",
            icon: "🏆",
            bullets: [
              "Presented a research paper on machine learning models for corporate failure prediction in Vietnam at the SEBL 2025 international conference.",
              "Focused on benchmarking machine learning methods, especially tree ensemble models, using preprocessing, experimental design, and performance evaluation on imbalanced data.",
              "Improved quantitative research, academic writing, English presentation, and networking skills through participation in an international academic event.",
            ],
            images: ["/SEBL1.jpg", "/SEBL2.jpg", "/SEBL3.jpg"],
            certificate: "/SEBL4.jpg",
          },
          {
            title: "KOREA - VIETNAM: ECONOMIC & FINANCIAL INSIGHTS",
            organization: "",
            publication: "University of Economics and Law",
            date: "2026",
            bullets: [
              "Represented the Faculty of Finance and Banking and the University of Economics and Law, VNU-HCM in an academic exchange with Chungnam National University, Korea.",
              "Participated in discussions on economic, financial, e-commerce, and fintech topics in the context of Vietnam and Korea through the academic seminar Korea - Vietnam: Economic & Financial Insights.",
              "Strengthened academic communication, cross-cultural exchange, and international presentation skills through direct interaction with Korean students and professors.",
            ],
            images: ["/Korea2.jpg", "/Korean.jpg", "/Korea3.jpg"],
          },
        ],
      },
    },
  },
  vi: {
    intro:
      "Phần này giúp bạn hiểu rõ hơn về tôi ngoài học tập và công việc. Đây là nơi tôi chia sẻ về sở thích, hành trình cá nhân và những trải nghiệm đã góp phần định hình cách tôi suy nghĩ, học hỏi và phát triển. Qua đó, tôi mong muốn thể hiện không chỉ những gì mình đang làm mà còn cả động lực, giá trị và định hướng phát triển của bản thân.",
    labels: {
      news: "Tin tức & truyền thông",
      achievements: "Thành tựu nổi bật",
      viewCertificate: "XEM CHỨNG NHẬN",
      viewPublication: "XEM CÔNG BỐ",
      viewDemo: "XEM DEMO",
      viewDocument: "XEM TÀI LIỆU",
      chooseDemo: "Bạn hãy lựa chọn loại demo muốn xem:",
      mobileDemo: "XEM BẢN DEMO ĐIỆN THOẠI",
      desktopDemo: "XEM BẢN DEMO MÁY TÍNH",
      navigation: "Điều hướng",
      contact: "Liên hệ",
      home: "Trang chủ",
      aboutMe: "Về tôi",
      copyright: "Đã đăng ký bản quyền.",
      tagline: "ĐỊNH HƯỚNG QUẢN LÝ SẢN PHẨM TRONG FINTECH",
    },
    sections: {
      extracurriculars: {
        title: "HOẠT ĐỘNG NGOẠI KHÓA",
        items: [
          {
            title: "CÂU LẠC BỘ CÔNG NGHỆ TÀI CHÍNH",
            organization: "Trường Đại học Kinh tế - Luật",
            period: "2022 - Nay",
            logo: "/FTC_logo.png",
            website: "https://ftc-websites.vercel.app/",
            linkedin: "https://www.linkedin.com/company/ftc-financial-technology-club/posts/?feedView=all",
            roles: [
              {
                title: "Phó Chủ nhiệm Câu lạc bộ",
                period: "08/2024 - Nay",
                bullets: [
                  "Phụ trách định hướng chiến lược, phối hợp liên ban và kết nối đối tác cho các chương trình trọng điểm và sự kiện nghề nghiệp của câu lạc bộ.",
                  "Hỗ trợ trưởng nhóm và chuẩn hóa biểu mẫu, quy trình vận hành nhằm nâng cao chất lượng triển khai và trách nhiệm thực thi.",
                ],
                achievements: [
                  "Đồng tổ chức ATTACKER với hơn 1.000 thí sinh đăng ký và góp phần mở rộng kết nối với hệ sinh thái đổi mới sáng tạo fintech tại TP.HCM.",
                  "Góp phần đưa câu lạc bộ vào Top 10 giải thưởng I-Star.",
                ],
              },
              {
                title: "Trưởng ban Học thuật",
                period: "08/2023 - 08/2024",
                bullets: [
                  "Phụ trách xây dựng nội dung học thuật cho workshop, talkshow và cuộc thi ATTACKER, bao gồm ngân hàng câu hỏi, rubric chấm điểm và khung đánh giá.",
                  "Phát triển các lộ trình đào tạo về product analytics, SQL, Python và dashboard, đồng thời thiết lập KPI và báo cáo sau sự kiện.",
                ],
              },
            ],
            images: ["/FTCclb.JPG", "/FTC2.jpg", "/FTC1.jpg"],
          },
          {
            title: "ĐỘI TRƯỞNG ĐỘI BÓNG RỔ",
            organization: "Trường Đại học Kinh tế - Luật",
            bullets: [
              "Đảm nhiệm vai trò đội trưởng đội bóng rổ UEL và dẫn dắt đội tham gia các giải sinh viên toàn quốc như VUG 3x3 và NUC National Student Basketball Championship.",
              "Cùng đội giành chức vô địch tại Basketball STU Open 2024, giải đấu quy tụ nhiều trường đại học tại TP.HCM.",
              "Rèn luyện kỹ năng lãnh đạo, kỷ luật, làm việc nhóm và tư duy chiến lược thông qua quá trình tập luyện và thi đấu.",
            ],
            images: ["/basketballteam.jpg", "/baskteballteamchampion.jpg", "/vug.jpg"],
          },
        ],
      },
      socialActivities: {
        title: "HOẠT ĐỘNG XÃ HỘI",
        items: [
          {
            title: "ATTACKER 2025 - CUỘC THI HỌC THUẬT FINTECH TOÀN QUỐC",
            organization: "Rex Hotel",
            bullets: [
              "Tham gia hỗ trợ điều phối cuộc thi học thuật FinTech toàn quốc với hơn 2.000 sinh viên đăng ký và gần 250 dự án tham gia.",
              "Phối hợp xây dựng timeline, phân công nhiệm vụ và chuẩn hóa thể lệ, tiêu chí chấm điểm, cũng như hướng dẫn nộp bài.",
              "Góp phần giúp cuộc thi được triển khai hiệu quả, đồng thời tạo cơ hội kết nối sinh viên với mentor, học bổng và nguồn tài trợ.",
            ],
            images: ["/attacker.jpg", "/attacker2.jpg", "/attacker3.jpg"],
          },
          {
            title: "NGÀY HỘI VIỆC LÀM WEB3 CAREER INNOVATION",
            organization: "Trường Đại học Kinh tế - Luật",
            bullets: [
              "Tham gia tổ chức ngày hội việc làm WEB3 CAREER INNOVATION với hơn 3.000 sinh viên và 15 doanh nghiệp trong lĩnh vực FinTech, Blockchain và Web3.",
              "Phối hợp vận hành khu vực job fair, booth trải nghiệm, khu phỏng vấn nhanh và hoạt động góp ý CV để đảm bảo trải nghiệm xuyên suốt cho người tham dự.",
              "Góp phần mang đến một sự kiện hiệu quả với hơn 300 cơ hội thực tập, cộng tác viên và các hoạt động định hướng nghề nghiệp thiết thực.",
            ],
            images: ["/jobfare.jpg", "/jobfare2.jpg", "/jobfare3.jpg"],
          },
          {
            title: "TALK SHOW \"ĐẦU TƯ TRONG KỶ NGUYÊN CÔNG NGHỆ: TƯ DUY THỰC TIỄN\"",
            organization: "Trường Đại học Kinh tế - Luật",
            bullets: [
              "Tham gia điều phối talk show phối hợp cùng Maybank Investment Bank Vietnam với hơn 100 sinh viên quan tâm đến tài chính, công nghệ và đầu tư.",
              "Hỗ trợ xây dựng timeline chương trình, làm việc với diễn giả, chuẩn bị nội dung truyền thông và tổng hợp phản hồi sau sự kiện.",
              "Góp phần giúp chương trình diễn ra suôn sẻ và mang đến cho sinh viên những góc nhìn thực tiễn về chiến lược đầu tư, quản trị rủi ro và xu hướng tài chính.",
            ],
            images: ["/maybank.jpg", "/maybank2.jpg", "/maybank3.jpg"],
          },
          {
            title: "CHƯƠNG TRÌNH THIỆN NGUYỆN TRUNG THU",
            organization: "Lâm Đồng, Việt Nam",
            bullets: [
              "Tham gia chương trình thiện nguyện Trung thu và hỗ trợ tổ chức gian hàng hội chợ dành cho trẻ em có hoàn cảnh khó khăn tại địa phương.",
              "Phối hợp thực hiện các công việc như lên ý tưởng, kêu gọi đóng góp, chuẩn bị vật dụng, thiết kế trò chơi và phân công công việc tại sự kiện.",
              "Phát triển thêm kỹ năng làm việc nhóm, giao tiếp, quản lý nguồn lực nhỏ và xử lý tình huống linh hoạt trong hoạt động cộng đồng.",
            ],
            images: ["/sa.jpg", "/sa1.jpg", "/sa2.jpg"],
          },
        ],
      },
      achievements: {
        title: "THÀNH TÍCH",
        items: [
          {
            title: "CÁ NHÂN TIÊU BIỂU TRONG CÔNG TÁC ĐOÀN VÀ PHONG TRÀO SINH VIÊN",
            organization: "",
            period: "2024 - 2025",
            icon: "🏅",
            bullets: [
              "Dẫn dắt và hỗ trợ nhiều hoạt động Đoàn - Hội có tác động tích cực, khuyến khích tinh thần chủ động, sáng tạo và gắn kết trong sinh viên UEL.",
              "Góp phần xây dựng môi trường năng động, hỗ trợ sinh viên phát triển bản thân và đóng góp cho cộng đồng.",
            ],
            images: ["/IMG_5063.JPG", "/IMG_5064.JPG", "/IMG_5065.JPG"],
            certificate: "/IMG_5081.jpg",
          },
          {
            title: "TOP 5: CUỘC THI BANKER'S GOT TALENT 2025",
            organization: "",
            period: "2025",
            icon: "🏅",
            bullets: [
              "Đạt Top 5 tại BANKER'S GOT TALENT 2025, cuộc thi học thuật về Tài chính - Ngân hàng tập trung vào tư duy định lượng và phân tích cổ phiếu.",
              "Cùng nhóm xây dựng báo cáo phân tích doanh nghiệp niêm yết và bài thuyết trình đầu tư dựa trên phân tích tài chính, định giá và đánh giá rủi ro.",
              "Nâng cao kỹ năng nghiên cứu, tư duy phân tích, thuyết trình và mở rộng hiểu biết thực tế về lĩnh vực tài chính - ngân hàng.",
            ],
            images: ["/FBG1.jpg", "/FBG2.jpg", "/FBG3.jpg"],
            document: "/ReportBanker.pdf",
          },
          {
            id: "finnovative-hackathon-2025",
            title: "TOP 6: THE FINNOVATIVE HACKATHON 2025 - BẢNG NHÀ SÁNG TẠO",
            organization: "",
            period: "2025",
            bullets: [
              "Đạt Top 6 tại The Finnovative Hackathon 2025, cuộc thi toàn quốc tập trung vào phát triển các giải pháp công nghệ tài chính và đổi mới số có tính ứng dụng thực tiễn tại Việt Nam.",
              "Cùng đội xây dựng MACROINSIGHT.ME, trợ lý AI về tài chính và pháp lý tại Việt Nam, hướng đến hỗ trợ nhà đầu tư F0 tiếp cận tin tức vĩ mô dễ hơn thông qua chat AI có dẫn nguồn, khám phá tin tức dạng vuốt và theo dõi danh mục đầu tư.",
              "Nâng cao tư duy sản phẩm, khả năng thiết kế theo nhu cầu người dùng và kỹ năng làm việc nhóm thông qua quá trình biến bài toán quá tải thông tin tài chính thành một giải pháp thực tế và có khả năng phát triển hơn.",
            ],
            images: ["/Hackathon.jpg", "/Hackathon2.JPG", "/Hackathon3.JPG"],
            document: "/MacroInsight.pdf",
            demoOptions: [
              { label: "XEM BẢN DEMO ĐIỆN THOẠI", src: "/Demo video(Mobile Phone).mp4" },
              { label: "XEM BẢN DEMO MÁY TÍNH", src: "/Demo video(PC).mp4" },
            ],
          },
        ],
      },
      research: {
        title: "THÀNH TỰU NGHIÊN CỨU",
        items: [
          {
            title: "NỢ CÔNG VÀ ỔN ĐỊNH KINH TẾ: VAI TRÒ ĐIỀU TIẾT CỦA QUẢN TRỊ - BẰNG CHỨNG TỪ CÁC NƯỚC ĐÔNG NAM Á",
            organization: "",
            publication: "Tạp chí Kinh tế Đông Nam Á",
            date: "2025",
            icon: "🏆",
            description:
              "Nghiên cứu mối quan hệ giữa nợ công và ổn định kinh tế tại các quốc gia Đông Nam Á, đồng thời xem xét vai trò điều tiết của chất lượng quản trị.",
            link: "https://ojs.omniscient.sg/index.php/gep/article/view/62858",
          },
          {
            title: "PHƯƠNG PHÁP TỔ HỢP CÂY VƯỢT TRỘI: ĐỐI SÁNH CÁC MÔ HÌNH HỌC MÁY TRONG DỰ BÁO RỦI RO THẤT BẠI DOANH NGHIỆP TẠI VIỆT NAM",
            organization: "",
            publication: "Hội thảo quốc tế về Phát triển bền vững trong Kinh tế, Kinh doanh và Pháp luật",
            date: "2025",
            icon: "🏆",
            bullets: [
              "Nghiên cứu về mô hình machine learning dự báo rủi ro thất bại doanh nghiệp tại Việt Nam được chọn trình bày tại hội thảo quốc tế SEBL 2025.",
              "Nội dung nghiên cứu tập trung vào việc so sánh các mô hình học máy, đặc biệt là tree ensemble, thông qua tiền xử lý dữ liệu, thiết kế thực nghiệm và đánh giá hiệu quả trên dữ liệu mất cân bằng.",
              "Củng cố kỹ năng nghiên cứu định lượng, viết học thuật, trình bày tiếng Anh và mở rộng kết nối với giảng viên, nhà nghiên cứu trong lĩnh vực tài chính và mô hình rủi ro.",
            ],
            images: ["/SEBL1.jpg", "/SEBL2.jpg", "/SEBL3.jpg"],
            certificate: "/SEBL4.jpg",
          },
          {
            title: "HÀN QUỐC - VIỆT NAM: GÓC NHÌN KINH TẾ VÀ TÀI CHÍNH",
            organization: "",
            publication: "Trường Đại học Kinh tế - Luật",
            date: "2026",
            bullets: [
              "Đại diện Khoa Tài chính - Ngân hàng và Trường Đại học Kinh tế - Luật, ĐHQG-HCM tham gia chương trình giao lưu, trao đổi học thuật với Đại học Chungnam, Hàn Quốc.",
              "Tham gia thảo luận các chủ đề về kinh tế, tài chính, thương mại điện tử và công nghệ tài chính trong bối cảnh Việt Nam và Hàn Quốc tại hội thảo Hàn Quốc - Việt Nam: Góc nhìn Kinh tế và Tài chính.",
              "Nâng cao kỹ năng giao tiếp học thuật, trao đổi liên văn hóa và trình bày trong môi trường quốc tế thông qua quá trình làm việc cùng sinh viên và giáo sư Hàn Quốc.",
            ],
            images: ["/Korea2.jpg", "/Korean.jpg", "/Korea3.jpg"],
          },
        ],
      },
    },
  },
}

export default function PersonalPage() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme)
  const [selectedAchievement, setSelectedAchievement] = useState<
    | {
        type: "image" | "pdf" | "video" | "choice"
        src?: string
        title?: string
        options?: AchievementAction[]
      }
    | null
  >(null)

  const languageStorageKey = "portfolio-language"
  const themeStorageKey = "portfolio-theme"
  const pageContent = content[language]

  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".anim").forEach((element) => {
        const rect = element.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.92) element.classList.add("visible")
      })
    }

    const syncTheme = () => setIsDarkMode(document.documentElement.classList.contains("dark"))
    const handleStorage = (event: StorageEvent) => {
      if (event.key === "portfolio-theme" && (event.newValue === "dark" || event.newValue === "light")) {
        setIsDarkMode(event.newValue === "dark")
      }
      if (event.key === languageStorageKey && (event.newValue === "en" || event.newValue === "vi")) {
        setLanguage(event.newValue)
      }
    }

    syncTheme()
    handleScroll()

    const observer = new MutationObserver(syncTheme)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("storage", handleStorage)

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("storage", handleStorage)
    }
  }, [languageStorageKey])

  useEffect(() => {
    window.localStorage.setItem(languageStorageKey, language)
  }, [language, languageStorageKey])

  const theme = isDarkMode
    ? {
        pageBg: "#090909",
        cardBg: "#141414",
        cardBorder: "1px solid rgba(255,255,255,0.06)",
        nestedCardBg: "rgba(8,8,8,0.28)",
        nestedCardBorder: "1px solid rgba(255,255,255,0.05)",
        textPrimary: "#f2f2ed",
        textSecondary: "#a8a8a8",
        textMuted: "#767676",
        accent: "#9dff3b",
        accentOnSolid: "#000000",
        accentSoftBg: "rgba(157,255,59,0.08)",
        accentSoftBorder: "1px solid rgba(157,255,59,0.16)",
        sectionBorder: "#222222",
        footerBg: "#9dff3b",
      }
    : {
        pageBg: "#f3f7ef",
        cardBg: "rgba(255,255,255,0.92)",
        cardBorder: "1px solid rgba(94,143,31,0.28)",
        nestedCardBg: "rgba(255,255,255,0.96)",
        nestedCardBorder: "1px solid rgba(94,143,31,0.24)",
        textPrimary: "#121712",
        textSecondary: "#3f4d3d",
        textMuted: "#667264",
        accent: "#5e8f1f",
        accentOnSolid: "#f7fbf2",
        accentSoftBg: "rgba(94,143,31,0.1)",
        accentSoftBorder: "1px solid rgba(94,143,31,0.34)",
        sectionBorder: "rgba(94,143,31,0.2)",
        footerBg: "#c7e782",
      }

  const footerContact = {
    email: "Namtuyenle.CV@gmail.com",
    linkedin: "https://www.linkedin.com/in/tuyen-le-nam-7614a1269/",
    github: "https://github.com/Nam-Tuyen",
  }

  const renderSectionHeading = (title: string) => (
    <div className="mb-10 flex flex-col items-center px-2 text-center md:mb-14">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center">
        <h2
          className="w-full text-center font-orbitron text-[26px] font-black leading-[1.18] tracking-[0.04em] sm:text-[34px] md:text-[42px] lg:text-[48px]"
          style={{ color: theme.textPrimary }}
        >
          {title}
        </h2>
        <div className="mx-auto mt-4 h-[3px] w-[56px] rounded-[2px] sm:w-[64px] md:w-[72px]" style={{ background: theme.accent }} />
      </div>
    </div>
  )

  const renderBullets = (items: string[]) => (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className="flex items-start gap-3">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full" style={{ background: theme.accent }} />
          <p className="text-left text-sm leading-relaxed sm:text-base" style={{ color: theme.textSecondary }}>
            {item}
          </p>
        </div>
      ))}
    </div>
  )

  const renderGallery = (images?: string[], title?: string) =>
    images?.length ? (
      <div className="mt-6 grid grid-cols-1 gap-3 border-t pt-6 sm:grid-cols-2 lg:grid-cols-3" style={{ borderColor: theme.sectionBorder }}>
        {images.map((image, index) => (
          <img key={`${title}-${index}`} src={image} alt={`${title} - ${index + 1}`} className="h-48 w-full rounded-2xl object-cover sm:h-56 md:h-64" style={{ border: theme.nestedCardBorder }} />
        ))}
      </div>
    ) : null

  const renderLinks = (links?: LinkItem[]) =>
    links?.length ? (
      <div className="mt-6 space-y-3 border-t pt-6" style={{ borderColor: theme.sectionBorder }}>
        <h4 className="text-base font-semibold sm:text-lg" style={{ color: theme.textPrimary }}>
          {pageContent.labels.news}
        </h4>
        {links.map((link, index) => (
          <a key={`${link.url}-${index}`} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-300 hover:-translate-y-0.5" style={{ background: theme.nestedCardBg, border: theme.nestedCardBorder }}>
            <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: theme.accent }} />
            <span className="min-w-0 flex-1 text-sm leading-relaxed sm:text-base" style={{ color: theme.textSecondary }}>{link.title}</span>
            <svg className="h-4 w-4 shrink-0" style={{ color: theme.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        ))}
      </div>
    ) : null

  return (
    <div
      className="page-theme-smooth portfolio-font min-h-screen overflow-x-hidden"
      style={{ background: theme.pageBg, color: theme.textPrimary }}
      suppressHydrationWarning
    >
      <Navbar language={language} onLanguageChange={(lang) => setLanguage(lang as Language)} />

      <main className="px-5 pb-16 pt-24 md:px-[52px] md:pt-28">
        <div className="mx-auto max-w-6xl">
          <section id="personal-hero" className="mb-20 pt-8 md:mb-28">
            <div className="mb-10 flex flex-col items-center px-2 text-center md:mb-14">
              <div className="mx-auto flex w-full max-w-4xl flex-col items-center">
                <h2
                  className="w-full text-center font-orbitron text-[26px] font-black uppercase leading-[1.18] tracking-[0.04em] sm:text-[34px] md:text-[42px] lg:text-[48px]"
                  style={{ color: theme.textPrimary }}
                >
                  {language === "vi" ? "ĐÔI LỜI CHIA SẺ" : "PERSONAL NOTE"}
                </h2>
                <div className="mx-auto mt-4 h-[3px] w-[56px] rounded-[2px] sm:w-[64px] md:w-[72px]" style={{ background: theme.accent }} />
              </div>
            </div>
            <div className="rounded-[24px] p-4 sm:p-6 md:p-8" style={{ background: theme.cardBg, border: theme.cardBorder }}>
              <p className="text-left text-sm leading-[1.9] sm:text-base md:text-lg" style={{ color: theme.textSecondary }}>
                {pageContent.intro}
              </p>
            </div>
          </section>

          <section id="extracurriculars" className="mb-20 anim md:mb-28">
            {renderSectionHeading(pageContent.sections.extracurriculars.title)}
            <div className="space-y-6">
              {pageContent.sections.extracurriculars.items.map((item, index) => (
                <div key={index} className="rounded-[24px] p-4 sm:p-6 md:p-8" style={{ background: theme.cardBg, border: theme.cardBorder }}>
                  <div className="mb-5">
                    <div className="min-w-0 flex-1">
                      <h3 className="mb-1 font-orbitron text-base font-bold leading-tight sm:text-lg md:text-xl" style={{ color: theme.textPrimary }}>
                        {item.title}
                      </h3>
                      <p className="text-sm font-medium sm:text-base" style={{ color: theme.accent }}>
                      {item.period ? `${item.organization} • ${item.period}` : item.organization}
                      </p>
                      {item.website && item.linkedin ? (
                        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                          <a href={item.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5" style={{ background: theme.accentSoftBg, border: theme.accentSoftBorder, color: theme.accent }}>
                            {language === "vi" ? "Trang web" : "Website"}
                          </a>
                          <a href={item.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5" style={{ background: theme.nestedCardBg, border: theme.nestedCardBorder, color: theme.textPrimary }}>
                            LinkedIn
                          </a>
                        </div>
                      ) : null}
                    </div>
                  </div>

                  {item.roles ? (
                    <div className="space-y-6">
                      {item.roles.map((role, roleIndex) => (
                        <div key={roleIndex} className="pl-4 sm:pl-5" style={{ borderLeft: `3px solid ${theme.accent}` }}>
                          <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <h4 className="text-base font-bold sm:text-lg" style={{ color: theme.textPrimary }}>
                              {role.title}
                            </h4>
                            <span className="text-sm font-medium" style={{ color: theme.accent }}>
                              {role.period}
                            </span>
                          </div>
                          <div className="mb-5">{renderBullets(role.bullets)}</div>
                          {role.achievements ? (
                            <div>
                              <h5 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] sm:text-base" style={{ color: theme.accent }}>
                                {pageContent.labels.achievements}
                              </h5>
                              {renderBullets(role.achievements)}
                            </div>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  ) : item.bullets ? (
                    <div className="pl-4 sm:pl-5" style={{ borderLeft: `3px solid ${theme.accent}` }}>
                      {renderBullets(item.bullets)}
                    </div>
                  ) : null}

                  {renderGallery(item.images, item.title)}
                </div>
              ))}
            </div>
          </section>

          <section id="social-activities" className="mb-20 anim md:mb-28">
            {renderSectionHeading(pageContent.sections.socialActivities.title)}
            <div className="space-y-6">
              {pageContent.sections.socialActivities.items.map((item, index) => (
                <div key={index} className="rounded-[24px] p-4 sm:p-6 md:p-8" style={{ background: theme.cardBg, border: theme.cardBorder }}>
                  <div className="mb-5">
                    <h3 className="mb-1 font-orbitron text-base font-bold leading-tight sm:text-lg md:text-xl" style={{ color: theme.textPrimary }}>
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium sm:text-base" style={{ color: theme.accent }}>
                      {item.organization}
                    </p>
                  </div>
                  <div className="pl-4 sm:pl-5" style={{ borderLeft: `3px solid ${theme.accent}` }}>
                    {item.bullets ? renderBullets(item.bullets) : item.description ? (
                      <p className="text-justify text-sm leading-relaxed sm:text-base md:text-lg" style={{ color: theme.textSecondary }}>
                        {item.description}
                      </p>
                    ) : null}
                  </div>
                  {renderGallery(item.images, item.title)}
                  {renderLinks(item.links)}
                </div>
              ))}
            </div>
          </section>

          <section id="achievements" className="mb-20 anim md:mb-28">
            {renderSectionHeading(pageContent.sections.achievements.title)}
            <div className="space-y-6">
              {pageContent.sections.achievements.items.map((item, index) => (
                <div key={index} className="rounded-[24px] p-4 sm:p-6 md:p-8" style={{ background: theme.cardBg, border: theme.cardBorder }}>
                  <div className="mb-5">
                    <h3 className="mb-1 font-orbitron text-base font-bold leading-tight sm:text-lg md:text-xl" style={{ color: theme.textPrimary }}>
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium sm:text-base" style={{ color: theme.accent }}>
                      {item.period}
                    </p>
                  </div>
                  <div className="pl-4 sm:pl-5" style={{ borderLeft: `3px solid ${theme.accent}` }}>
                    {item.bullets ? renderBullets(item.bullets) : item.description ? (
                      <p className="text-justify text-sm leading-relaxed sm:text-base md:text-lg" style={{ color: theme.textSecondary }}>
                        {item.description}
                      </p>
                    ) : null}
                  </div>
                  {renderGallery(item.images, item.title)}
                  {item.certificate || item.document || item.demoOptions ? (
                    <div className="mt-6 border-t pt-6" style={{ borderColor: theme.sectionBorder }}>
                      <div className="flex flex-wrap items-center justify-center gap-3">
                        {item.demoOptions ? (
                          <button
                            onClick={() =>
                              setSelectedAchievement({
                                type: "choice",
                                title: pageContent.labels.chooseDemo,
                                options: [
                                  ...(item.document
                                    ? [
                                        {
                                          label: pageContent.labels.viewDocument,
                                          src: item.document,
                                          type: "pdf" as const,
                                          title: item.title,
                                          variant: "document" as const,
                                        },
                                      ]
                                    : []),
                                  ...item.demoOptions.map((option) => ({
                                    ...option,
                                    type: "video" as const,
                                    title: item.title,
                                    variant: option.src.includes("(Mobile Phone)") ? ("mobile" as const) : ("desktop" as const),
                                  })),
                                ],
                              })
                            }
                            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5"
                            style={{ background: theme.accent, color: theme.accentOnSolid }}
                          >
                            {pageContent.labels.viewDemo}
                          </button>
                        ) : null}
                        {item.document && !item.demoOptions ? (
                          <button
                            onClick={() =>
                              setSelectedAchievement({
                                type: "pdf",
                                src: item.document,
                                title: item.title,
                              })
                            }
                            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5 sm:text-sm"
                            style={{ border: `1.5px solid ${theme.accent}`, color: theme.accent, background: "transparent" }}
                          >
                            {pageContent.labels.viewDocument}
                          </button>
                        ) : null}
                        {item.certificate ? (
                          <button
                            onClick={() =>
                              setSelectedAchievement({
                                type: "image",
                                src: item.certificate,
                                title: item.title,
                              })
                            }
                            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5"
                            style={{ background: theme.accent, color: theme.accentOnSolid }}
                          >
                            {pageContent.labels.viewCertificate}
                          </button>
                        ) : null}
                      </div>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </section>

          <section id="research-achievement" className="mb-20 anim md:mb-28">
            {renderSectionHeading(pageContent.sections.research.title)}
            <div className="space-y-6">
              {pageContent.sections.research.items.map((item, index) => (
                <div key={index} className="rounded-[24px] p-4 sm:p-6 md:p-8" style={{ background: theme.cardBg, border: theme.cardBorder }}>
                  <div className="mb-5">
                    <h3 className="mb-1 font-orbitron text-base font-bold leading-tight sm:text-lg md:text-xl" style={{ color: theme.textPrimary }}>
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium sm:text-base" style={{ color: theme.accent }}>
                      {item.publication} • {item.date}
                    </p>
                  </div>
                  <div className="pl-4 sm:pl-5" style={{ borderLeft: `3px solid ${theme.accent}` }}>
                    {item.bullets ? renderBullets(item.bullets) : item.description ? (
                      <p className="text-justify text-sm leading-relaxed sm:text-base md:text-lg" style={{ color: theme.textSecondary }}>
                        {item.description}
                      </p>
                    ) : null}
                  </div>
                  {renderGallery(item.images, item.title)}
                  <div className="mt-6 flex flex-wrap justify-center gap-3 border-t pt-6" style={{ borderColor: theme.sectionBorder }}>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5" style={{ background: theme.accent, color: theme.accentOnSolid }}>
                        {pageContent.labels.viewPublication}
                      </a>
                    ) : null}
                    {item.certificate ? (
                      <button
                        onClick={() =>
                          setSelectedAchievement({
                            type: "image",
                            src: item.certificate,
                            title: item.title,
                          })
                        }
                        className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
                        style={{ background: theme.accent, color: theme.accentOnSolid }}
                      >
                        {pageContent.labels.viewCertificate}
                      </button>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer style={{ background: theme.footerBg }}>
        <div className="px-5 py-12 md:px-[52px] md:py-16">
          <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
            <div>
              <div className="mb-3 font-orbitron text-lg font-black" style={{ color: "#000" }}>
                {language === "vi" ? "LÊ NAM TUYÊN" : "TUYEN LE NAM"}
              </div>
              <p className="mb-1 text-[13px] leading-[1.55]" style={{ color: "#000" }}>
                {pageContent.labels.tagline}
              </p>
            </div>
            <div>
              <div className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#333" }}>
                {pageContent.labels.navigation}
              </div>
              <ul className="space-y-2">
                {[
                  { id: "personal-hero", label: pageContent.labels.home },
                  { id: "extracurriculars", label: pageContent.labels.aboutMe },
                ].map((item) => (
                  <li key={item.id}>
                    <button onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })} className="text-sm font-medium hover:underline" style={{ color: "#111", background: "none", border: "none", cursor: "pointer" }}>
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#333" }}>
                {pageContent.labels.contact}
              </div>
              <ul className="space-y-2 text-sm" style={{ color: "#111" }}>
                <li className="inline-flex items-center gap-2">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none">
                    <path d="M3 6.75 12 13.5l9-6.75" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4.5 7.5V18h15V7.5" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4.5 18 9.75 12.75" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19.5 18 14.25 12.75" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{footerContact.email}</span>
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
          <div className="flex items-center justify-center pt-6" style={{ borderTop: "1px solid rgba(0,0,0,.15)" }}>
            <p className="text-center text-xs" style={{ color: "#333" }}>
              © {new Date().getFullYear()} {language === "vi" ? "Lê Nam Tuyên" : "Tuyen Le Nam"}. {pageContent.labels.copyright}
            </p>
          </div>
        </div>
      </footer>

      {selectedAchievement && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,.88)" }} onClick={() => setSelectedAchievement(null)}>
          <div className="relative max-h-[90vh] w-full max-w-4xl" onClick={(event) => event.stopPropagation()}>
            <button onClick={() => setSelectedAchievement(null)} className="absolute -right-3 -top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full font-bold" style={{ background: theme.accent, color: theme.accentOnSolid }}>
              x
            </button>
            <div className="overflow-hidden rounded-[22px]" style={{ background: theme.cardBg, border: theme.cardBorder }}>
              {selectedAchievement.type === "choice" ? (
                <div className="overflow-y-auto max-h-[85vh] transition-colors duration-300">
                  <div className="p-5 text-center sm:p-7" style={{ borderBottom: `1px solid ${theme.sectionBorder}` }}>
                    <h3 className="font-orbitron text-base font-bold sm:text-lg" style={{ color: theme.textPrimary }}>
                      {selectedAchievement.title}
                    </h3>
                  </div>
                  <div className="p-5 sm:p-7">
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {selectedAchievement.options?.map((option) => (
                        <button
                          key={option.src}
                          type="button"
                          onClick={() =>
                            setSelectedAchievement({
                              type: option.type,
                              src: option.src,
                              title: option.title || selectedAchievement.title,
                            })
                          }
                            className="group flex min-h-[88px] flex-col items-start justify-between rounded-[20px] px-5 py-4 text-left transition-all duration-300 hover:-translate-y-1"
                          style={option.variant === "document"
                            ? {
                                background: theme.nestedCardBg,
                                border: `1.5px dashed ${theme.accent}`,
                                color: theme.accent,
                                boxShadow: "inset 0 0 0 1px rgba(157,255,59,0.08)",
                              }
                            : option.variant === "mobile"
                              ? {
                                  background: theme.accent,
                                  border: `1.5px solid ${theme.accent}`,
                                  color: theme.accentOnSolid,
                                  boxShadow: "0 14px 28px rgba(157,255,59,0.18)",
                                }
                              : {
                                  background: theme.cardBg,
                                  border: `1.5px solid ${theme.accent}`,
                                  color: theme.textPrimary,
                                }}
                        >
                          <span
                            className="inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em]"
                            style={option.variant === "document"
                              ? { background: theme.accentSoftBg, color: theme.accent }
                              : option.variant === "mobile"
                                ? { background: "rgba(0,0,0,0.12)", color: theme.accentOnSolid }
                                : { background: theme.accentSoftBg, color: theme.accent }}
                          >
                            {option.variant === "document"
                              ? "PDF"
                              : option.variant === "mobile"
                                ? "Mobile"
                                : "Desktop"}
                          </span>
                          <span className="mt-3 text-sm font-bold leading-snug sm:text-[15px]">
                            {option.label}
                          </span>
                          <span
                            className="mt-3 text-[11px] font-medium uppercase tracking-[0.16em]"
                            style={option.variant === "mobile"
                              ? { color: "rgba(0,0,0,0.62)" }
                              : { color: option.variant === "document" ? theme.textSecondary : theme.accent }}
                          >
                            {option.variant === "document"
                              ? language === "vi"
                                ? "Báo cáo chi tiết"
                                : "Detailed report"
                              : option.variant === "mobile"
                                ? language === "vi"
                                  ? "Trải nghiệm điện thoại"
                                  : "Phone experience"
                                : language === "vi"
                                  ? "Trải nghiệm máy tính"
                                  : "Desktop experience"}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : selectedAchievement.type === "pdf" ? (
                <div className="m-4 sm:m-5">
                  <PdfViewer
                    src={selectedAchievement.src || ""}
                    title={selectedAchievement.title || "Document"}
                    heightClassName="h-[76vh] sm:h-[82vh]"
                    borderColor={theme.cardBorder}
                    loadingLabel={language === "vi" ? "Đang tải tài liệu..." : "Loading document..."}
                    errorLabel={language === "vi" ? "Không thể mở tài liệu lúc này." : "Unable to load this PDF right now."}
                  />
                </div>
              ) : selectedAchievement.type === "video" ? (
                <video className="h-auto max-h-[85vh] w-full bg-black" controls preload="metadata">
                  <source src={selectedAchievement.src} type="video/mp4" />
                </video>
              ) : (
                <img src={selectedAchievement.src} alt={selectedAchievement.title || "Certificate"} className="max-h-[85vh] w-full bg-white object-contain" />
              )}
            </div>
          </div>
        </div>
      )}

      <ScrollToTopButton isDark={isDarkMode} />
    </div>
  )
}
