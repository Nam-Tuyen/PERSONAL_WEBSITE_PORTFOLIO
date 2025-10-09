"use client"

import React from "react"

export default function UniverseBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Main Galaxy Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Enhanced Animated Nebula Clouds - Reduced for Mobile */}
        <div className="absolute inset-0 opacity-20">
          {/* Large Nebula 1 - Mobile Optimized */}
          <div className="absolute top-0 left-0 w-[400px] h-[300px] sm:w-[600px] sm:h-[400px] lg:w-[800px] lg:h-[600px] bg-gradient-radial from-[#7B68EE]/30 via-[#4A90E2]/20 to-transparent rounded-full blur-3xl animate-nebula-float"></div>
          
          {/* Large Nebula 2 - Mobile Optimized */}
          <div className="absolute bottom-0 right-0 w-[350px] h-[250px] sm:w-[500px] sm:h-[350px] lg:w-[700px] lg:h-[500px] bg-gradient-radial from-[#00CED1]/30 via-[#7B68EE]/20 to-transparent rounded-full blur-3xl animate-nebula-float" style={{animationDelay: '3s'}}></div>
          
          {/* Medium Nebula 3 - Mobile Optimized */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] h-[200px] sm:w-[400px] sm:h-[300px] lg:w-[500px] lg:h-[400px] bg-gradient-radial from-[#8AB5FF]/25 via-[#00CED1]/15 to-transparent rounded-full blur-2xl animate-nebula-float" style={{animationDelay: '6s'}}></div>
        </div>

        {/* Enhanced Animated Star Field - Mobile Optimized */}
        <div className="absolute inset-0 opacity-60">
          {/* Large Stars - Reduced for Mobile */}
          {[...Array(30)].map((_, i) => (
            <div
              key={`large-star-${i}`}
              className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 bg-white rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                opacity: 0.4 + Math.random() * 0.3
              }}
            ></div>
          ))}
          
          {/* Medium Stars - Reduced for Mobile */}
          {[...Array(50)].map((_, i) => (
            <div
              key={`medium-star-${i}`}
              className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                opacity: 0.2 + Math.random() * 0.2
              }}
            ></div>
          ))}
          
          {/* Small Stars - Reduced for Mobile */}
          {[...Array(80)].map((_, i) => (
            <div
              key={`small-star-${i}`}
              className="absolute w-0.5 h-0.5 bg-white rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
                opacity: 0.1 + Math.random() * 0.2
              }}
            ></div>
          ))}
          
          {/* Colored Stars */}
          {[...Array(50)].map((_, i) => {
            const colors = ['#8AB5FF', '#00CED1', '#7B68EE', '#FF6B9D', '#00ffaa'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            return (
              <div
                key={`colored-star-${i}`}
                className="absolute w-1 h-1 rounded-full animate-twinkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 6}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                  backgroundColor: color,
                  opacity: 0.5 + Math.random() * 0.5,
                  boxShadow: `0 0 10px ${color}80`
                }}
              ></div>
            );
          })}
        </div>

        {/* Enhanced Shooting Stars */}
        <div className="absolute inset-0">
          {/* Shooting Star 1 */}
          <div className="absolute top-1/4 left-0 w-3 h-1 bg-gradient-to-r from-white via-[#8AB5FF] to-transparent rounded-full animate-shooting-star"></div>
          
          {/* Shooting Star 2 */}
          <div className="absolute top-3/4 right-0 w-2 h-1 bg-gradient-to-l from-[#00CED1] to-transparent rounded-full animate-shooting-star" style={{animationDelay: '4s'}}></div>
          
          {/* Shooting Star 3 */}
          <div className="absolute top-1/2 left-1/4 w-2.5 h-1 bg-gradient-to-r from-[#7B68EE] to-transparent rounded-full animate-shooting-star" style={{animationDelay: '8s'}}></div>
          
          {/* Shooting Star 4 */}
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1 bg-gradient-to-l from-[#00ffaa] to-transparent rounded-full animate-shooting-star" style={{animationDelay: '12s'}}></div>
          
          {/* Shooting Star 5 */}
          <div className="absolute bottom-1/4 left-1/2 w-2 h-1 bg-gradient-to-r from-[#FF6B9D] to-transparent rounded-full animate-shooting-star" style={{animationDelay: '16s'}}></div>
          
          {/* Additional Shooting Stars */}
          <div className="absolute top-1/6 right-1/4 w-2 h-1 bg-gradient-to-l from-[#aa00ff] to-transparent rounded-full animate-shooting-star" style={{animationDelay: '20s'}}></div>
          
          <div className="absolute bottom-1/3 left-1/6 w-1.5 h-1 bg-gradient-to-r from-[#00d4ff] to-transparent rounded-full animate-shooting-star" style={{animationDelay: '24s'}}></div>
          
          <div className="absolute top-2/3 right-1/6 w-2.5 h-1 bg-gradient-to-l from-[#8AB5FF] to-transparent rounded-full animate-shooting-star" style={{animationDelay: '28s'}}></div>
        </div>

        {/* Enhanced Cosmic Dust Particles */}
        <div className="absolute inset-0">
          {[...Array(60)].map((_, i) => {
            const colors = ['#8AB5FF', '#00CED1', '#7B68EE', '#FF6B9D', '#00ffaa', '#aa00ff', '#00d4ff'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            return (
              <div
                key={`dust-${i}`}
                className="absolute w-1 h-1 rounded-full animate-dust-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${10 + Math.random() * 15}s`,
                  backgroundColor: color,
                  opacity: 0.3 + Math.random() * 0.7,
                  boxShadow: `0 0 8px ${color}60`
                }}
              ></div>
            );
          })}
        </div>

        {/* Enhanced Rotating Galaxy Arms */}
        <div className="absolute inset-0 opacity-25">
          {/* Galaxy Arm 1 */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-[#7B68EE]/40 rounded-full animate-galaxy-rotate" style={{animationDuration: '60s'}}></div>
          
          {/* Galaxy Arm 2 */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#00CED1]/35 rounded-full animate-galaxy-rotate" style={{animationDuration: '45s', animationDirection: 'reverse'}}></div>
          
          {/* Galaxy Arm 3 */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#8AB5FF]/30 rounded-full animate-galaxy-rotate" style={{animationDuration: '30s'}}></div>
          
          {/* Additional Galaxy Arms */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-[#4A90E2]/20 rounded-full animate-galaxy-rotate" style={{animationDuration: '80s', animationDirection: 'reverse'}}></div>
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#FF6B9D]/25 rounded-full animate-galaxy-rotate" style={{animationDuration: '20s'}}></div>
        </div>

        {/* Enhanced Floating Planets */}
        <div className="absolute inset-0">
          {/* Planet 1 */}
          <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-gradient-to-br from-[#4A90E2] to-[#7B68EE] rounded-full animate-planet-orbit shadow-lg" style={{animationDuration: '20s', boxShadow: '0 0 20px #4A90E250'}}></div>
          
          {/* Planet 2 */}
          <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-gradient-to-br from-[#00CED1] to-[#00ffaa] rounded-full animate-planet-orbit shadow-lg" style={{animationDuration: '25s', animationDelay: '5s', boxShadow: '0 0 15px #00CED150'}}></div>
          
          {/* Planet 3 */}
          <div className="absolute top-2/3 right-1/4 w-4 h-4 bg-gradient-to-br from-[#FF6B9D] to-[#aa00ff] rounded-full animate-planet-orbit shadow-lg" style={{animationDuration: '15s', animationDelay: '10s', boxShadow: '0 0 12px #FF6B9D50'}}></div>
          
          {/* Additional Planets */}
          <div className="absolute top-1/6 right-1/6 w-5 h-5 bg-gradient-to-br from-[#8AB5FF] to-[#00d4ff] rounded-full animate-planet-orbit shadow-lg" style={{animationDuration: '18s', animationDelay: '3s', boxShadow: '0 0 10px #8AB5FF50'}}></div>
          
          <div className="absolute bottom-1/4 left-1/6 w-7 h-7 bg-gradient-to-br from-[#7c3aed] to-[#00ff88] rounded-full animate-planet-orbit shadow-lg" style={{animationDuration: '22s', animationDelay: '7s', boxShadow: '0 0 18px #7c3aed50'}}></div>
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-br from-[#00ffaa] to-[#00d4ff] rounded-full animate-planet-orbit shadow-lg" style={{animationDuration: '12s', animationDelay: '12s', boxShadow: '0 0 8px #00ffaa50'}}></div>
        </div>

        {/* Enhanced Pulsing Energy Waves */}
        <div className="absolute inset-0">
          {/* Energy Wave 1 */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-[#00ff88]/40 rounded-full animate-pulse" style={{animationDuration: '4s'}}></div>
          
          {/* Energy Wave 2 */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-[#00d4ff]/35 rounded-full animate-pulse" style={{animationDuration: '6s', animationDelay: '1s'}}></div>
          
          {/* Energy Wave 3 */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[#7c3aed]/30 rounded-full animate-pulse" style={{animationDuration: '8s', animationDelay: '2s'}}></div>
          
          {/* Additional Energy Waves */}
          <div className="absolute top-1/3 left-1/3 w-24 h-24 border border-[#8AB5FF]/25 rounded-full animate-pulse" style={{animationDuration: '3s', animationDelay: '0.5s'}}></div>
          
          <div className="absolute bottom-1/3 right-1/3 w-40 h-40 border border-[#FF6B9D]/20 rounded-full animate-pulse" style={{animationDuration: '5s', animationDelay: '1.5s'}}></div>
        </div>

        {/* Enhanced Moving Constellations */}
        <div className="absolute inset-0">
          {/* Constellation 1 */}
          <div className="absolute top-1/4 left-1/4 flex space-x-2 animate-constellation-float">
            <div className="w-1 h-1 bg-[#8AB5FF] rounded-full"></div>
            <div className="w-1 h-1 bg-[#8AB5FF] rounded-full"></div>
            <div className="w-1 h-1 bg-[#8AB5FF] rounded-full"></div>
            <div className="w-1 h-1 bg-[#8AB5FF] rounded-full"></div>
          </div>
          
          {/* Constellation 2 */}
          <div className="absolute bottom-1/4 right-1/4 flex space-x-3 animate-constellation-float" style={{animationDelay: '3s'}}>
            <div className="w-1 h-1 bg-[#00CED1] rounded-full"></div>
            <div className="w-1 h-1 bg-[#00CED1] rounded-full"></div>
            <div className="w-1 h-1 bg-[#00CED1] rounded-full"></div>
            <div className="w-1 h-1 bg-[#00CED1] rounded-full"></div>
            <div className="w-1 h-1 bg-[#00CED1] rounded-full"></div>
          </div>
          
          {/* Additional Constellations */}
          <div className="absolute top-1/2 right-1/6 flex space-x-1.5 animate-constellation-float" style={{animationDelay: '6s'}}>
            <div className="w-1 h-1 bg-[#7B68EE] rounded-full"></div>
            <div className="w-1 h-1 bg-[#7B68EE] rounded-full"></div>
            <div className="w-1 h-1 bg-[#7B68EE] rounded-full"></div>
          </div>
          
          <div className="absolute bottom-1/6 left-1/2 flex space-x-2.5 animate-constellation-float" style={{animationDelay: '9s'}}>
            <div className="w-1 h-1 bg-[#FF6B9D] rounded-full"></div>
            <div className="w-1 h-1 bg-[#FF6B9D] rounded-full"></div>
            <div className="w-1 h-1 bg-[#FF6B9D] rounded-full"></div>
            <div className="w-1 h-1 bg-[#FF6B9D] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
