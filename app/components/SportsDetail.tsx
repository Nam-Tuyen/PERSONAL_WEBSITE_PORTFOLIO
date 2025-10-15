"use client"

import React, { useState } from "react"
import { X, ArrowLeft } from "lucide-react"

interface SportsDetailProps {
  sportsData: any
  language: string
  onClose: () => void
}

export default function SportsDetail({ sportsData, language, onClose }: SportsDetailProps) {
  const [selectedSport, setSelectedSport] = useState<string | null>(null)

  if (!sportsData) return null

  const sports = sportsData.sports || []

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div className="flex items-center space-x-3">
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              {sportsData.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {!selectedSport ? (
          /* Sports Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {sports.map((sport: any, index: number) => (
              <button
                key={index}
                onClick={() => setSelectedSport(sport.name)}
                className="group bg-gradient-to-br from-gray-800/60 to-gray-700/60 backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-[#00ff88]/40 transition-all duration-300 shadow-lg hover:shadow-xl text-left"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-3xl sm:text-4xl">{sport.icon}</div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#00ff88] transition-colors duration-200">
                      {sport.name}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      {sport.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        ) : (
          /* Sport Detail */
          <div>
            {(() => {
              const sport = sports.find((s: any) => s.name === selectedSport)
              if (!sport) return null

              return (
                <div>
                  {/* Back Button */}
                  <button
                    onClick={() => setSelectedSport(null)}
                    className="flex items-center space-x-2 text-[#00ff88] hover:text-[#00d4ff] transition-colors duration-200 mb-6"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="font-medium">Back to Sports</span>
                  </button>

                  {/* Sport Header */}
                  <div className="flex items-center space-x-4 mb-6 sm:mb-8">
                    <div className="text-4xl sm:text-5xl">{sport.icon}</div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                        {sport.name}
                      </h3>
                      <p className="text-lg text-gray-300">
                        {sport.description}
                      </p>
                    </div>
                  </div>

                  {/* Detailed Description */}
                  {sport.detailedDescription && (
                    <div className="mb-6 sm:mb-8">
                      <div className="bg-gradient-to-br from-gray-800/40 to-gray-700/40 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed sm:leading-loose">
                          {sport.detailedDescription}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Images */}
                  {sport.images && sport.images.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                      {sport.images.map((image: string, index: number) => (
                        <div
                          key={index}
                          className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <img
                            src={image}
                            alt={`${sport.name} ${index + 1}`}
                            className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            })()}
          </div>
        )}
      </div>
    </div>
  )
}
