"use client"

import React from 'react'
import AnimatedBackground from './AnimatedBackground'

interface Project {
  id: string
  title: string
  date: string
  image: string
  features: string[]
  link: string
  isVideo?: boolean
}

interface ProjectsProps {
  translations: any
}

export default function Projects({ translations }: ProjectsProps) {
  const projects: Project[] = [
    {
      id: 'financial-report',
      title: 'Automated Financial Report Export',
      date: 'Aug 2024 - Oct 2024',
      image: '/Demo.mp4',
      isVideo: true,
      features: [
        'Xây dựng pipeline Python toàn diện cho phân tích cổ phiếu, tự động hóa thu thập dữ liệu API và tạo báo cáo hàng ngày với Excel, CSV và PDF',
        'Cấu trúc code module hóa với quản lý đường dẫn, xử lý key bảo mật, xác thực và tiện ích thời gian, tự động hóa với cron',
        'Giảm 90% thời gian chuẩn bị thủ công và cải thiện 25% khả năng phản hồi của đội ngũ'
      ],
      link: 'https://github.com/Nam-Tuyen/Automated-Financial-Report-Export'
    },
    {
      id: 'airbnb-prediction',
      title: 'Airbnb Rental Price Prediction',
      date: 'Apr 2024 - Jun 2024',
      image: '/AirBnB.PNG',
      features: [
        'Xử lý và kỹ thuật hóa dataset 26,000 dòng bao gồm chuyển đổi tiền tệ, phân tích ngày tháng, xử lý ngoại lệ và chuẩn hóa giá',
        'Xây dựng pipeline scikit-learn với ColumnTransformer, StandardScaler, OneHotEncoder, Linear Regression và Random Forest, tối ưu với GridSearchCV',
        'Random Forest đạt RMSE 95.84 và MAE 57.98, giảm 4% lỗi so với baseline. Dự đoán chính xác giá 834.20 USD cho căn hộ Bondi Beach'
      ],
      link: 'https://github.com/Nam-Tuyen/AirBnB_Pricepredictmodel'
    },
    {
      id: 'hr-analytics',
      title: 'Workforce Insight Hub',
      date: 'Aug 2023 - Feb 2024',
      image: '/HRanalytic.png',
      features: [
        'Phát triển quy trình phân tích HR toàn diện với EDA sử dụng histograms, density plots, boxplots và correlation heatmap để xác định rủi ro giữ chân nhân viên',
        'Huấn luyện Random Forest và Logistic Regression đạt độ chính xác 85% với các yếu tố chính: MonthlyIncome, Age, OverTime, TotalWorkingYears và DailyRate',
        'Phân khúc nhân viên thành 3 clusters dựa trên thu nhập, kinh nghiệm và sự hài lòng, đề xuất chính sách với tỷ lệ nghỉ việc 16.1%'
      ],
      link: 'https://github.com/Nam-Tuyen/HR_Analytic'
    }
  ]

  return (
    <section id="projects" className="relative min-h-screen py-20 overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6">
            <span className="bg-gradient-to-r from-[#7c3aed] via-[#00ff88] to-[#00d4ff] bg-clip-text text-transparent">
              PROJECTS
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Khám phá các dự án đột phá kết hợp công nghệ và sáng tạo
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-[#7c3aed]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#7c3aed]/20"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#7c3aed] via-[#00ff88] to-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px]">
                <div className="w-full h-full bg-gray-900/90 rounded-3xl"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Media */}
                <div className="relative h-64 overflow-hidden">
                  {project.isVideo ? (
                    <video
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      controls
                      preload="metadata"
                    >
                      <source src={project.image} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00d4ff] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#00ff88]/20 to-[#00d4ff]/20 border border-[#00ff88]/30 text-[#00ff88] rounded-full text-sm font-semibold">
                      {project.date}
                    </span>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {project.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-500"
                        style={{
                          animationDelay: `${(featureIndex + 1) * 0.1}s`
                        }}
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-[#7c3aed] to-[#00ff88] rounded-lg flex items-center justify-center text-white font-bold text-xs">
                          {featureIndex + 1}
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-4 bg-gradient-to-r from-[#7c3aed] to-[#00ff88] text-black font-bold rounded-xl text-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#7c3aed]/30 group/link relative overflow-hidden"
                  >
                    <span className="relative z-10">XEM DỰ ÁN →</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
