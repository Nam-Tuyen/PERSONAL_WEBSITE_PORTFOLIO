export const translations = {
  vi: {
    header: {
      logo: "LNT",
      nav: {
        professional: "CHUYÊN NGHIỆP",
        personal: "CÁ NHÂN"
      }
    },
    footer: {
      contact: {
        email: "bingo.namtuyen@gmail.com",
        phone: "0921270404",
        location: "Ho Chi Minh City, Vietnam",
        linkedin: "https://www.linkedin.com/in/tuyen-le-nam-7614a1269/",
        github: "https://github.com/Nam-Tuyen"
      },
      copyright: "© 2024 LE NAM TUYEN. All rights reserved."
    },
    hero: {
      greeting: "HI, I AM",
      name: "LE NAM TUYEN",
      title: "ASPIRING PRODUCT MANAGER & DATA ANALYST IN FINTECH"
    },
    about: {
      label: "PROFESSIONAL PROFILE",
      quote: "Transforming vision into reality turning intent into results",
      description: "Final-year Financial Technology student at the University of Economics and Law with a focus on product development, analytics, and evidence-based decision making. I design and deliver practical workshops on product discovery, user research, SQL, Python, dashboards, experiment evaluation, and product analytics. In cross-functional settings, I convert insights into clear product requirements, define success metrics, and run lean experiments that elevate user experience and business outcomes. Proficient in Python, SQL, and modern BI platforms, I build scalable templates and reporting systems that improve execution quality and velocity. I'm seeking a Data Analyst or Associate PM role in FinTech where I can translate data and customer insight into measurable product impact."
    },
    education: {
      title: "ACADEMIC EXCELLENCE",
      university: "University of Economics and Law (VNU-HCM)",
      degree: "Bachelor of Financial Technology",
      gpa: "3.0/4.0",
      ielts: "6.0",
      coursework: [
        "Advanced Database Systems",
        "Data Mining & Analytics", 
        "Big Data Analytics in Finance",
        "Blockchain Technology & Cryptocurrency",
        "Financial Software Applications",
        "Business Intelligence Systems",
        "Financial Management & Risk Assessment",
        "Quantitative Finance & Modeling"
      ],
      learnMoreUrl: "https://www.uel.edu.vn/"
    },
    skills: {
      title: "TECHNICAL EXPERTISE",
      categories: [
        {
          name: "Programming Languages",
          items: ["Python", "SQL", "JavaScript", "HTML/CSS", "R"]
        },
        {
          name: "Data Analysis & Visualization",
          items: ["Power BI", "Tableau", "Excel", "Pandas", "NumPy", "Matplotlib"]
        },
        {
          name: "Product Management",
          items: ["User Research", "Product Discovery", "A/B Testing", "Analytics", "Figma"]
        },
        {
          name: "Database & Cloud",
          items: ["MySQL", "PostgreSQL", "AWS", "Google Cloud", "MongoDB"]
        }
      ]
    },
    certifications: {
      title: "PROFESSIONAL CREDENTIALS",
      items: [
        {
          title: "Ask Questions to Make Data-Driven Decisions",
          issuer: "Coursera",
          image: "/ask-question-to-make-data-driven.PNG",
          description: "Coursera Professional Certificate"
        },
        {
          title: "Accelerating End-to-End Data Science Workflows",
          issuer: "NVIDIA",
          image: "/Certificate%20NVIDIA.PNG",
          description: "NVIDIA Professional Certificate"
        }
      ]
    },
    workExperience: {
      title: "PROFESSIONAL JOURNEY",
      agribank: {
        company: "Vietnam Bank for Agriculture and Rural Development",
        department: "Binh Trieu Branch - Credit Analysis Department",
        position: "Financial Analysis Intern",
        period: "March 2025 - June 2025",
        achievements: [
          "Analyzed financial statements and credit risk assessment for agricultural loan applications",
          "Developed Excel models for loan portfolio analysis and risk monitoring",
          "Assisted in preparing credit reports and recommendations for loan approval",
          "Collaborated with senior analysts to evaluate borrower creditworthiness and repayment capacity"
        ],
        icon: "🏦"
      },
      maybank: {
        company: "Maybank Investment Bank Vietnam",
        department: "Phu Nhuan Branch - Investment Research & Analysis",
        position: "Data Analysis & Research Intern",
        period: "June 2024 - December 2024",
        achievements: [
          "Conducted market research and financial analysis for investment opportunities",
          "Created interactive dashboards using Power BI for investment performance tracking",
          "Assisted in preparing investment reports and presentations for clients",
          "Analyzed economic indicators and market trends to support investment decisions"
        ],
        icon: "🏢"
      }
    },
    experience: {
      title: "PROFESSIONAL EXPERIENCE",
      subtitle: "My career journey and achievements",
      maybank: {
        company: "Maybank Investment Bank Vietnam",
        department: "Phu Nhuan Branch - Investment Research & Analysis",
        position: "Data Analysis & Research Intern",
        period: "June 2024 - December 2024",
        achievements: [
          "Conducted market research and financial analysis for investment opportunities",
          "Created interactive dashboards using Power BI for investment performance tracking",
          "Assisted in preparing investment reports and presentations for clients",
          "Analyzed economic indicators and market trends to support investment decisions"
        ],
        icon: "🏢"
      }
    },
    projects: {
      title: "FEATURED PROJECTS",
      items: [
        {
          name: "Automated Financial Report Export",
          description: [
            "Built an end-to-end Python pipeline (Aug–Oct 2024, individual) for stock-ticker analytics, ingesting raw API data with environment-managed secrets and producing standardized daily reports in Excel, CSV, and PDF.",
            "Implemented with requests, pandas, and python-dotenv; modularized into fetch, process, and report components with reusable helpers for path management, API key loading, validation, and date handling; scheduled via a cron runner.",
            "Automated report generation that reduced manual preparation by 90% and improved team responsiveness by 25%."
          ],
          technologies: ["Python", "Pandas", "Flask", "Streamlit", "API"],
          image: "/Demo.mp4",
          link: "https://github.com/Nam-Tuyen/Automated-Financial-Report-Export",
          period: "08/2024 - 10/2024"
        },
        {
          name: "Airbnb rental pricing predictor",
          description: [
            "Cleaned and engineered a 26,000-row Airbnb dataset as an individual project, converting currencies to numeric, parsing dates, trimming outliers at the 99.5th percentile, and producing a pricing workflow with standardized inputs and outputs.",
            "Built a full preprocessing and modeling pipeline in scikit-learn using ColumnTransformer, StandardScaler, OneHotEncoder, Linear Regression, Random Forest, stratified sampling by city, and GridSearchCV for tuning.",
            "Delivered client-ready insights with feature importance highlighting accommodates, bathrooms, bedrooms, beds, and fees as key drivers and achieved test RMSE 95.84 and MAE 57.98 using the tuned Random Forest with about 4% error reduction versus the linear baseline and an example predicted price of 834.20 for a Bondi Beach home."
          ],
          technologies: ["Python", "Pandas", "Flask", "Streamlit", "API"],
          image: "/AirBnB.PNG",
          link: "https://github.com/Nam-Tuyen/AirBnB_Pricepredictmodel",
          period: "04/2024 - 06/2024"
        },
        {
          name: "Workforce Insight Hub: Retention and Compensation",
          description: [
            "Built an end-to-end HR analytics workflow (individual) to clean and encode Human_Resources.csv and conduct EDA with histograms, KDE, boxplots, and a correlation heatmap to surface retention risks.",
            "Trained a Random Forest attrition model and a Logistic Regression for interpretability, achieving 85% accuracy with key drivers including MonthlyIncome, Age, OverTime, TotalWorkingYears, and DailyRate, while noting low recall on leavers at 0.07.",
            "Segmented employees into three clusters using MonthlyIncome, TotalWorkingYears, YearsAtCompany, and JobSatisfaction, and delivered salary and overtime policy recommendations based on a 16.1% attrition rate."
          ],
          technologies: ["Python", "Pandas", "Flask", "Streamlit", "API"],
          image: "/HRanalytic.png",
          link: "https://github.com/Nam-Tuyen/HR_Analytic",
          period: "04/2024 - 06/2024"
        }
      ]
    },

    // Personal Page Sections
    personal: {
      title: "CÁ NHÂN",
      subtitle: "Khám phá con người cá nhân của tôi",
      myHobby: {
        title: "SỞ THÍCH CỦA TÔI",
        subtitle: "Những điều tôi thích làm trong thời gian rảnh",
        hobbies: [
          {
            name: "Nhiếp ảnh",
            description: "Ghi lại những khoảnh khắc và khám phá các góc nhìn khác nhau qua ống kính",
            icon: "📸",
            details: "Tôi thích chụp ảnh phong cảnh và đường phố, luôn tìm kiếm những góc độ và ánh sáng độc đáo"
          },
          {
            name: "Đọc sách",
            description: "Mở rộng kiến thức thông qua sách và bài viết",
            icon: "📚",
            details: "Tập trung vào sách kinh doanh, công nghệ và phát triển bản thân"
          },
          {
            name: "Chơi game",
            description: "Game chiến thuật và giải đố để kích thích tinh thần",
            icon: "🎮",
            details: "Thích game chiến thuật và thử thách giải đố"
          },
          {
            name: "Du lịch",
            description: "Khám phá các nền văn hóa và địa điểm mới",
            icon: "✈️",
            details: "Yêu thích khám phá những điểm đến mới và trải nghiệm các nền văn hóa khác nhau"
          }
        ]
      },
      extracurriculars: {
        title: "HOẠT ĐỘNG NGOẠI KHÓA",
        subtitle: "Các hoạt động ngoài học tập và công việc",
        activities: [
          {
            name: "Hội Sinh viên",
            position: "Phó Chủ tịch",
            period: "2022 - 2023",
            description: "Dẫn dắt các sáng kiến sinh viên và tổ chức sự kiện trong khuôn viên",
            achievements: [
              "Tổ chức thành công 15+ sự kiện trong khuôn viên",
              "Tăng sự tham gia của sinh viên lên 40%",
              "Quản lý ngân sách $50,000 cho các hoạt động sinh viên"
            ]
          },
          {
            name: "Câu lạc bộ Tranh biện",
            position: "Đội trưởng",
            period: "2021 - 2023",
            description: "Tham gia các giải đấu tranh biện khu vực và quốc gia",
            achievements: [
              "Thắng 3 chức vô địch khu vực",
              "Dẫn dắt đội vào chung kết quốc gia",
              "Hướng dẫn 20+ thành viên mới"
            ]
          },
          {
            name: "Công tác Tình nguyện",
            position: "Tình nguyện viên Cộng đồng",
            period: "2020 - Hiện tại",
            description: "Tích cực trong dịch vụ cộng đồng và các vấn đề xã hội",
            achievements: [
              "500+ giờ dịch vụ cộng đồng",
              "Tổ chức các đợt quyên góp thực phẩm cho các trung tâm tạm trú địa phương",
              "Dạy kèm cho các học sinh có hoàn cảnh khó khăn"
            ]
          }
        ]
      },
      achievements: {
        title: "THÀNH TÍCH",
        subtitle: "Các cột mốc cá nhân và sự công nhận",
        personalAchievements: [
          {
            name: "Danh sách Hiệu trưởng",
            period: "2021 - 2023",
            description: "Duy trì thành tích học tập cao trong suốt thời gian đại học",
            category: "Học thuật"
          },
          {
            name: "Giải thưởng Lãnh đạo",
            period: "2023",
            description: "Được công nhận vì khả năng lãnh đạo xuất sắc trong các tổ chức sinh viên",
            category: "Lãnh đạo"
          },
          {
            name: "Giải thưởng Dịch vụ Cộng đồng",
            period: "2022",
            description: "Được vinh danh vì những đóng góp đáng kể cho dịch vụ cộng đồng",
            category: "Dịch vụ"
          },
          {
            name: "Giải nhất Cuộc thi Nhiếp ảnh",
            period: "2023",
            description: "Giải nhất trong cuộc thi nhiếp ảnh của trường đại học",
            category: "Sáng tạo"
          }
        ]
      }
    }
  },
  en: {
    header: {
      logo: "LNT",
      nav: {
        professional: "PROFESSIONAL",
        personal: "PERSONAL"
      }
    },
    footer: {
      contact: {
        email: "bingo.namtuyen@gmail.com",
        phone: "0921270404",
        location: "Ho Chi Minh City, Vietnam",
        linkedin: "https://www.linkedin.com/in/tuyen-le-nam-7614a1269/",
        github: "https://github.com/Nam-Tuyen"
      },
      copyright: "© 2024 LE NAM TUYEN. All rights reserved."
    },
    hero: {
      greeting: "HI, I AM",
      name: "LE NAM TUYEN",
      title: "ASPIRING PRODUCT MANAGER & DATA ANALYST IN FINTECH"
    },
    about: {
      label: "PROFESSIONAL PROFILE",
      quote: "Transforming vision into reality turning intent into results",
      description: "Final-year Financial Technology student at the University of Economics and Law with a focus on product development, analytics, and evidence-based decision making. I design and deliver practical workshops on product discovery, user research, SQL, Python, dashboards, experiment evaluation, and product analytics. In cross-functional settings, I convert insights into clear product requirements, define success metrics, and run lean experiments that elevate user experience and business outcomes. Proficient in Python, SQL, and modern BI platforms, I build scalable templates and reporting systems that improve execution quality and velocity. I'm seeking a Data Analyst or Associate PM role in FinTech where I can translate data and customer insight into measurable product impact."
    },
    education: {
      title: "ACADEMIC EXCELLENCE",
      university: "University of Economics and Law (VNU-HCM)",
      degree: "Bachelor of Financial Technology",
      gpa: "3.0/4.0",
      ielts: "6.0",
      coursework: [
        "Advanced Database Systems",
        "Data Mining & Analytics", 
        "Big Data Analytics in Finance",
        "Blockchain Technology & Cryptocurrency",
        "Financial Software Applications",
        "Business Intelligence Systems",
        "Financial Management & Risk Assessment",
        "Quantitative Finance & Modeling"
      ],
      learnMoreUrl: "https://www.uel.edu.vn/"
    },
    skills: {
      title: "TECHNICAL EXPERTISE",
      categories: [
        {
          name: "Programming Languages",
          items: ["Python", "SQL", "JavaScript", "HTML/CSS", "R"]
        },
        {
          name: "Data Analysis & Visualization",
          items: ["Power BI", "Tableau", "Excel", "Pandas", "NumPy", "Matplotlib"]
        },
        {
          name: "Product Management",
          items: ["User Research", "Product Discovery", "A/B Testing", "Analytics", "Figma"]
        },
        {
          name: "Database & Cloud",
          items: ["MySQL", "PostgreSQL", "AWS", "Google Cloud", "MongoDB"]
        }
      ]
    },
    certifications: {
      title: "PROFESSIONAL CREDENTIALS",
      items: [
        {
          title: "Ask Questions to Make Data-Driven Decisions",
          issuer: "Coursera",
          image: "/ask-question-to-make-data-driven.PNG",
          description: "Coursera Professional Certificate"
        },
        {
          title: "Accelerating End-to-End Data Science Workflows",
          issuer: "NVIDIA",
          image: "/Certificate%20NVIDIA.PNG",
          description: "NVIDIA Professional Certificate"
        }
      ]
    },
    workExperience: {
      title: "PROFESSIONAL JOURNEY",
      agribank: {
        company: "Vietnam Bank for Agriculture and Rural Development",
        department: "Binh Trieu Branch - Credit Analysis Department",
        position: "Financial Analysis Intern",
        period: "March 2025 - June 2025",
        achievements: [
          "Analyzed financial statements and credit risk assessment for agricultural loan applications",
          "Developed Excel models for loan portfolio analysis and risk monitoring",
          "Assisted in preparing credit reports and recommendations for loan approval",
          "Collaborated with senior analysts to evaluate borrower creditworthiness and repayment capacity"
        ],
        icon: "🏦"
      },
      maybank: {
        company: "Maybank Investment Bank Vietnam",
        department: "Phu Nhuan Branch - Investment Research & Analysis",
        position: "Data Analysis & Research Intern",
        period: "June 2024 - December 2024",
        achievements: [
          "Conducted market research and financial analysis for investment opportunities",
          "Created interactive dashboards using Power BI for investment performance tracking",
          "Assisted in preparing investment reports and presentations for clients",
          "Analyzed economic indicators and market trends to support investment decisions"
        ],
        icon: "🏢"
      }
    },
    experience: {
      title: "KINH NGHIỆM LÀM VIỆC",
      subtitle: "Hành trình sự nghiệp và thành tựu của tôi",
      maybank: {
        company: "Maybank Investment Bank Vietnam",
        department: "Chi nhánh Phú Nhuận - Nghiên cứu & Phân tích Đầu tư",
        position: "Thực tập sinh Phân tích Dữ liệu & Nghiên cứu",
        period: "Tháng 6/2024 - Tháng 12/2024",
        achievements: [
          "Thực hiện nghiên cứu thị trường và phân tích tài chính cho các cơ hội đầu tư",
          "Tạo dashboard tương tác sử dụng Power BI để theo dõi hiệu suất đầu tư",
          "Hỗ trợ chuẩn bị báo cáo đầu tư và thuyết trình cho khách hàng",
          "Phân tích các chỉ số kinh tế và xu hướng thị trường để hỗ trợ quyết định đầu tư"
        ],
        icon: "🏢"
      }
    },
    projects: {
      title: "DỰ ÁN",
      items: [
        {
          name: "Automated Financial Report Export",
          description: [
            "Built an end-to-end Python pipeline (Aug–Oct 2024, individual) for stock-ticker analytics, ingesting raw API data with environment-managed secrets and producing standardized daily reports in Excel, CSV, and PDF.",
            "Implemented with requests, pandas, and python-dotenv; modularized into fetch, process, and report components with reusable helpers for path management, API key loading, validation, and date handling; scheduled via a cron runner.",
            "Automated report generation that reduced manual preparation by 90% and improved team responsiveness by 25%."
          ],
          technologies: ["Python", "Pandas", "Flask", "Streamlit", "API"],
          image: "/Demo.mp4",
          link: "https://github.com/Nam-Tuyen/Automated-Financial-Report-Export",
          period: "08/2024 - 10/2024"
        },
        {
          name: "Airbnb rental pricing predictor",
          description: [
            "Cleaned and engineered a 26,000-row Airbnb dataset as an individual project, converting currencies to numeric, parsing dates, trimming outliers at the 99.5th percentile, and producing a pricing workflow with standardized inputs and outputs.",
            "Built a full preprocessing and modeling pipeline in scikit-learn using ColumnTransformer, StandardScaler, OneHotEncoder, Linear Regression, Random Forest, stratified sampling by city, and GridSearchCV for tuning.",
            "Delivered client-ready insights with feature importance highlighting accommodates, bathrooms, bedrooms, beds, and fees as key drivers and achieved test RMSE 95.84 and MAE 57.98 using the tuned Random Forest with about 4% error reduction versus the linear baseline and an example predicted price of 834.20 for a Bondi Beach home."
          ],
          technologies: ["Python", "Pandas", "Flask", "Streamlit", "API"],
          image: "/AirBnB.PNG",
          link: "https://github.com/Nam-Tuyen/AirBnB_Pricepredictmodel",
          period: "04/2024 - 06/2024"
        },
        {
          name: "Workforce Insight Hub: Retention and Compensation",
          description: [
            "Built an end-to-end HR analytics workflow (individual) to clean and encode Human_Resources.csv and conduct EDA with histograms, KDE, boxplots, and a correlation heatmap to surface retention risks.",
            "Trained a Random Forest attrition model and a Logistic Regression for interpretability, achieving 85% accuracy with key drivers including MonthlyIncome, Age, OverTime, TotalWorkingYears, and DailyRate, while noting low recall on leavers at 0.07.",
            "Segmented employees into three clusters using MonthlyIncome, TotalWorkingYears, YearsAtCompany, and JobSatisfaction, and delivered salary and overtime policy recommendations based on a 16.1% attrition rate."
          ],
          technologies: ["Python", "Pandas", "Flask", "Streamlit", "API"],
          image: "/HRanalytic.png",
          link: "https://github.com/Nam-Tuyen/HR_Analytic",
          period: "04/2024 - 06/2024"
        }
      ]
    },

    // Personal Page Sections
    personal: {
      title: "PERSONAL",
      subtitle: "Discover my personal side",
      myHobby: {
        title: "MY HOBBY",
        subtitle: "Things I love to do in my free time",
        hobbies: [
          {
            name: "Photography",
            description: "Capturing moments and exploring different perspectives through the lens",
            icon: "📸",
            details: "I enjoy landscape and street photography, always looking for unique angles and lighting"
          },
          {
            name: "Reading",
            description: "Expanding knowledge through books and articles",
            icon: "📚",
            details: "Focused on business, technology, and personal development books"
          },
          {
            name: "Gaming",
            description: "Strategic and puzzle games for mental stimulation",
            icon: "🎮",
            details: "Enjoy strategy games and puzzle-solving challenges"
          },
          {
            name: "Travel",
            description: "Exploring new cultures and places",
            icon: "✈️",
            details: "Love discovering new destinations and experiencing different cultures"
          }
        ]
      },
      extracurriculars: {
        title: "EXTRACURRICULARS",
        subtitle: "Activities beyond academics and work",
        activities: [
          {
            name: "Student Council",
            position: "Vice President",
            period: "2022 - 2023",
            description: "Led student initiatives and organized campus events",
            achievements: [
              "Organized 15+ successful campus events",
              "Increased student participation by 40%",
              "Managed budget of $50,000 for student activities"
            ]
          },
          {
            name: "Debate Club",
            position: "Team Captain",
            period: "2021 - 2023",
            description: "Competed in regional and national debate tournaments",
            achievements: [
              "Won 3 regional championships",
              "Led team to national finals",
              "Mentored 20+ new members"
            ]
          },
          {
            name: "Volunteer Work",
            position: "Community Volunteer",
            period: "2020 - Present",
            description: "Active in community service and social causes",
            achievements: [
              "500+ hours of community service",
              "Organized food drives for local shelters",
              "Tutored underprivileged students"
            ]
          }
        ]
      },
      achievements: {
        title: "ACHIEVEMENTS",
        subtitle: "Personal milestones and recognitions",
        personalAchievements: [
          {
            name: "Dean's List",
            period: "2021 - 2023",
            description: "Maintained high academic performance throughout university",
            category: "Academic"
          },
          {
            name: "Leadership Award",
            period: "2023",
            description: "Recognized for outstanding leadership in student organizations",
            category: "Leadership"
          },
          {
            name: "Community Service Award",
            period: "2022",
            description: "Honored for significant contributions to community service",
            category: "Service"
          },
          {
            name: "Photography Contest Winner",
            period: "2023",
            description: "First place in university photography competition",
            category: "Creative"
          }
        ]
      }
    }
  }
}
