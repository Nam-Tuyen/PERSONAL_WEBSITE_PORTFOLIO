"use client"

import React, { useState } from "react"
import { X, Trophy, Target, Users, Award } from "lucide-react"

interface SportsModalProps {
  isOpen: boolean
  onClose: () => void
  translations: any
  language: string
}

export default function SportsModal({ isOpen, onClose, translations, language }: SportsModalProps) {
  const [activeSport, setActiveSport] = useState("basketball")

  if (!isOpen) return null

  const sports = [
    {
      id: "tennis",
      name: language === 'vi' ? "TENNIS" : "TENNIS",
      icon: "🎾",
      description: language === 'vi' 
        ? "Chơi tennis để rèn luyện sự nhanh nhẹn và phản xạ" 
        : "Play tennis to improve agility and reflexes"
    },
    {
      id: "pickleball", 
      name: language === 'vi' ? "PICKLEBALL" : "PICKLEBALL",
      icon: "🏓",
      description: language === 'vi'
        ? "Môn thể thao mới nổi với sự kết hợp giữa tennis và ping pong"
        : "Emerging sport combining tennis and ping pong elements"
    },
    {
      id: "badminton",
      name: language === 'vi' ? "CẦU LÔNG" : "BADMINTON", 
      icon: "🏸",
      description: language === 'vi'
        ? "Rèn luyện sức bền và kỹ thuật chính xác"
        : "Develops endurance and precise technique"
    },
    {
      id: "basketball",
      name: language === 'vi' ? "BÓNG RỔ" : "BASKETBALL",
      icon: "🏀",
      description: language === 'vi'
        ? "Môn thể thao yêu thích với hơn 10 năm kinh nghiệm"
        : "Favorite sport with over 10 years of experience"
    }
  ]

  const basketballContent = language === 'vi' ? {
    title: "BÓNG RỔ - HÀNH TRÌNH LÃNH ĐẠO",
    achievements: [
      {
        icon: "🏆",
        title: "VÔ ĐỊCH",
        description: "Basketball STU Open 2024 - Giải quy tụ nhiều trường đại học tại TP.HCM"
      },
      {
        icon: "👑", 
        title: "ĐỘI TRƯỞNG",
        description: "Đội tuyển Đại học Kinh tế – Luật"
      },
      {
        icon: "🏅",
        title: "THAM DỰ",
        description: "VUG 3x3 Giải Thể thao Sinh viên Việt Nam và NUC Giải bóng rổ sinh viên toàn quốc"
      }
    ],
    philosophy: "Gắn bó với bóng rổ hơn 10 năm, đảm nhiệm vai trò Đội trưởng đội tuyển Đại học Kinh tế – Luật, dẫn dắt đội tham dự các giải sinh viên cấp quốc gia gồm VUG 3x3 Giải Thể thao Sinh viên Việt Nam và NUC Giải bóng rổ sinh viên toàn quốc, đồng thời đạt chức vô địch đầu tiên tại Basketball STU Open 2024, một giải quy tụ nhiều trường đại học tại TP.HCM. Quá trình rèn luyện và thi đấu đã giúp bản thân tôi hình thành nên phương pháp làm việc rõ ràng: xác lập mục tiêu, xây dựng chiến lược, triển khai kỷ luật và phối hợp hiệu quả để đạt kết quả cụ thể. Những nguyên tắc này được áp dụng nhất quán trong môi trường chuyên nghiệp, tập trung vào trách nhiệm, hiệu suất và tiêu chuẩn thực thi."
  } : {
    title: "BASKETBALL - LEADERSHIP JOURNEY",
    achievements: [
      {
        icon: "🏆",
        title: "CHAMPION",
        description: "Basketball STU Open 2024 - Tournament featuring multiple universities in Ho Chi Minh City"
      },
      {
        icon: "👑",
        title: "TEAM CAPTAIN", 
        description: "University of Economics and Law Basketball Team"
      },
      {
        icon: "🏅",
        title: "PARTICIPANT",
        description: "VUG 3x3 Vietnam Student Sports and NUC National Student Basketball Championship"
      }
    ],
    philosophy: "Over 10 years of basketball experience, serving as Team Captain of the University of Economics and Law team, leading the team to participate in national student competitions including VUG 3x3 Vietnam Student Sports and NUC National Student Basketball Championship, while achieving the first championship at Basketball STU Open 2024, a tournament featuring multiple universities in Ho Chi Minh City. The training and competition process has helped me develop a clear work methodology: setting goals, building strategies, implementing discipline and effective coordination to achieve specific results. These principles are consistently applied in professional environments, focusing on responsibility, performance and execution standards."
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-gray-900/95 to-gray-800/95 backdrop-blur-xl border-b border-white/10 p-4 sm:p-6 rounded-t-2xl sm:rounded-t-3xl">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              {language === 'vi' ? "THỂ THAO" : "SPORTS"}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          {/* Sports Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {sports.map((sport) => (
              <button
                key={sport.id}
                onClick={() => setActiveSport(sport.id)}
                className={`p-3 sm:p-4 rounded-xl transition-all duration-300 ${
                  activeSport === sport.id
                    ? 'bg-gradient-to-r from-[#00ff88]/20 to-[#00d4ff]/20 border border-[#00ff88]/40 text-white'
                    : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <div className="text-2xl sm:text-3xl mb-2">{sport.icon}</div>
                <div className="text-xs sm:text-sm font-medium">{sport.name}</div>
              </button>
            ))}
          </div>

          {/* Sport Content */}
          <div className="space-y-6">
            {activeSport === "basketball" ? (
              <div className="space-y-6">
                {/* Basketball Title */}
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                    {basketballContent.title}
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] mx-auto rounded-full"></div>
                </div>

                {/* Achievements Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  {basketballContent.achievements.map((achievement, index) => (
                    <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 text-center">
                      <div className="text-3xl sm:text-4xl mb-3">{achievement.icon}</div>
                      <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{achievement.title}</h4>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{achievement.description}</p>
                    </div>
                  ))}
                </div>

                {/* Images Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                    <img 
                      src="/basketballteam.jpg" 
                      alt="Basketball Team"
                      className="w-full h-48 sm:h-56 object-cover"
                    />
                    <div className="p-3 sm:p-4">
                      <p className="text-sm text-gray-300 text-center">Đội tuyển bóng rổ UEL</p>
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                    <img 
                      src="/baskteballteamchampion.jpg" 
                      alt="Championship Victory"
                      className="w-full h-48 sm:h-56 object-cover"
                    />
                    <div className="p-3 sm:p-4">
                      <p className="text-sm text-gray-300 text-center">Vô địch STU Open 2024</p>
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                    <img 
                      src="/vug.jpg" 
                      alt="VUG Tournament"
                      className="w-full h-48 sm:h-56 object-cover"
                    />
                    <div className="p-3 sm:p-4">
                      <p className="text-sm text-gray-300 text-center">Giải VUG 3x3</p>
                    </div>
                  </div>
                </div>

                {/* Philosophy */}
                <div className="bg-gradient-to-r from-[#00ff88]/10 to-[#00d4ff]/10 border border-[#00ff88]/20 rounded-xl p-4 sm:p-6">
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-3">
                    {language === 'vi' ? "TRIẾT LÝ LÀM VIỆC" : "WORK PHILOSOPHY"}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {basketballContent.philosophy}
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 sm:py-12">
                <div className="text-6xl sm:text-8xl mb-4 sm:mb-6">
                  {sports.find(s => s.id === activeSport)?.icon}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 sm:mb-6">
                  {sports.find(s => s.id === activeSport)?.name}
                </h3>
                <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  {sports.find(s => s.id === activeSport)?.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
