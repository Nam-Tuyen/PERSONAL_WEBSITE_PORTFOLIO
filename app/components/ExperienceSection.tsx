"use client"

interface ExperienceSectionProps {
  t: any
}

export default function ExperienceSection({ t }: ExperienceSectionProps) {
  return (
    <section className="py-24 relative galaxy-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12 relative">
            <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-px bg-gradient-to-r from-transparent via-[#00ff88] to-[#00d4ff]"></div>
            <div className="relative">
              <span className="text-[#00ff88] text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-[4px] sm:tracking-[6px] md:tracking-[8px] font-black uppercase relative z-10">
                {t.workExperience.label}
              </span>
              <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-[#00ff88]/30 to-[#00d4ff]/30 blur-lg sm:blur-xl rounded-full"></div>
              <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-[#00ff88]/20 to-[#00d4ff]/20 blur-md sm:blur-lg rounded-full"></div>
            </div>
            <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-px bg-gradient-to-r from-[#00d4ff] via-[#7c3aed] to-transparent"></div>
          </div>
        </div>

        {/* Work Experience Content Container - Enhanced Responsive Grid with Equal Heights */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-stretch">
          
          {/* Agribank Experience - Modern Card */}
          <div className="group relative flex flex-col h-full">
            {/* Animated Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
            
            {/* Main Card - Enhanced Responsive with Equal Height */}
            <div className="relative bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 md:p-8 hover:border-[#00ff88]/30 transition-all duration-500 hover:scale-[1.02] flex flex-col h-full">
              
              {/* Company Header - Sleek Design */}
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-2xl flex items-center justify-center shadow-lg shadow-[#00ff88]/25">
                    <span className="text-white font-bold text-xl">🏦</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 leading-tight">
                      {t.workExperience.agribank.company}
                    </h3>
                    <p className="text-[#00ff88] font-medium text-sm">
                      {t.workExperience.agribank.department}
                    </p>
                  </div>
                </div>
                
                {/* Position & Period - Modern Tags */}
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#00ff88]/20 to-[#00d4ff]/20 border border-[#00ff88]/30 rounded-full text-[#00ff88] font-semibold text-sm">
                    {t.workExperience.agribank.position}
                  </span>
                  <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#00d4ff]/20 to-[#7c3aed]/20 border border-[#00d4ff]/30 rounded-full text-[#00d4ff] font-medium text-sm">
                    {t.workExperience.agribank.period}
                  </span>
                </div>
              </div>

              {/* Achievements - Modern List */}
              <div className="space-y-4 flex-1">
                {t.workExperience.agribank.achievements.map((achievement: string, index: number) => (
                  <div key={index} className="relative group/achievement">
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-white/5 to-white/10 border border-white/10 hover:border-[#00ff88]/30 transition-all duration-300">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-lg flex items-center justify-center shadow-md">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed group-hover/achievement:text-gray-100 transition-colors">
                        {achievement}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-[#00ff88] rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-[#00d4ff] rounded-full opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>

          {/* Maybank Experience - Modern Card */}
          <div className="group relative flex flex-col h-full">
            {/* Animated Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00d4ff] via-[#7c3aed] to-[#00ff88] rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
            
            {/* Main Card - Enhanced Responsive with Equal Height */}
            <div className="relative bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 md:p-8 hover:border-[#00d4ff]/30 transition-all duration-500 hover:scale-[1.02] flex flex-col h-full">
              
              {/* Company Header - Sleek Design */}
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] rounded-2xl flex items-center justify-center shadow-lg shadow-[#00d4ff]/25">
                    <span className="text-white font-bold text-xl">💼</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 leading-tight">
                      {t.workExperience.maybank.company}
                    </h3>
                    <p className="text-[#00d4ff] font-medium text-sm">
                      {t.workExperience.maybank.department}
                    </p>
                  </div>
                </div>
                
                {/* Position & Period - Modern Tags */}
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#00d4ff]/20 to-[#7c3aed]/20 border border-[#00d4ff]/30 rounded-full text-[#00d4ff] font-semibold text-sm">
                    {t.workExperience.maybank.position}
                  </span>
                  <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#7c3aed]/20 to-[#00ff88]/20 border border-[#7c3aed]/30 rounded-full text-[#7c3aed] font-medium text-sm">
                    {t.workExperience.maybank.period}
                  </span>
                </div>
              </div>

              {/* Achievements - Modern List */}
              <div className="space-y-4 flex-1">
                {t.workExperience.maybank.achievements.map((achievement: string, index: number) => (
                  <div key={index} className="relative group/achievement">
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-white/5 to-white/10 border border-white/10 hover:border-[#00d4ff]/30 transition-all duration-300">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] rounded-lg flex items-center justify-center shadow-md">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed group-hover/achievement:text-gray-100 transition-colors">
                        {achievement}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-[#00d4ff] rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-[#7c3aed] rounded-full opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
