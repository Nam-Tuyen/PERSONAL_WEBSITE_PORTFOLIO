"use client"

import React from "react"

export default function UniverseBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Main Galaxy Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Animated Nebula Clouds */}
        <div className="absolute inset-0 opacity-30">
          {/* Large Nebula 1 */}
          <div className="absolute top-0 left-0 w-[800px] h-[600px] bg-gradient-radial from-purple-500/40 via-blue-500/20 to-transparent rounded-full blur-3xl animate-nebula-float"></div>
          
          {/* Large Nebula 2 */}
          <div className="absolute bottom-0 right-0 w-[700px] h-[500px] bg-gradient-radial from-cyan-500/40 via-purple-500/20 to-transparent rounded-full blur-3xl animate-nebula-float" style={{animationDelay: '3s'}}></div>
          
          {/* Medium Nebula 3 */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-gradient-radial from-pink-500/30 via-cyan-500/15 to-transparent rounded-full blur-2xl animate-nebula-float" style={{animationDelay: '6s'}}></div>
          
          {/* Small Nebula 4 */}
          <div className="absolute top-1/4 right-1/4 w-[300px] h-[250px] bg-gradient-radial from-yellow-500/25 via-pink-500/15 to-transparent rounded-full blur-xl animate-nebula-float" style={{animationDelay: '9s'}}></div>
          
          {/* Small Nebula 5 */}
          <div className="absolute bottom-1/3 left-1/3 w-[350px] h-[280px] bg-gradient-radial from-green-500/20 via-blue-500/10 to-transparent rounded-full blur-xl animate-nebula-float" style={{animationDelay: '12s'}}></div>
        </div>

        {/* Animated Star Field */}
        <div className="absolute inset-0">
          {/* Large Stars */}
          {[...Array(50)].map((_, i) => (
            <div
              key={`large-star-${i}`}
              className="absolute w-2 h-2 bg-white rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
          
          {/* Medium Stars */}
          {[...Array(80)].map((_, i) => (
            <div
              key={`medium-star-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
          
          {/* Small Stars */}
          {[...Array(120)].map((_, i) => (
            <div
              key={`small-star-${i}`}
              className="absolute w-0.5 h-0.5 bg-white rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        {/* Shooting Stars */}
        <div className="absolute inset-0">
          {/* Shooting Star 1 */}
          <div className="absolute top-1/4 left-0 w-3 h-1 bg-gradient-to-r from-white to-transparent rounded-full animate-shooting-star"></div>
          
          {/* Shooting Star 2 */}
          <div className="absolute top-3/4 right-0 w-2 h-1 bg-gradient-to-l from-cyan-400 to-transparent rounded-full animate-shooting-star" style={{animationDelay: '4s'}}></div>
          
          {/* Shooting Star 3 */}
          <div className="absolute top-1/2 left-1/4 w-2.5 h-1 bg-gradient-to-r from-purple-400 to-transparent rounded-full animate-shooting-star" style={{animationDelay: '8s'}}></div>
          
          {/* Shooting Star 4 */}
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1 bg-gradient-to-l from-yellow-400 to-transparent rounded-full animate-shooting-star" style={{animationDelay: '12s'}}></div>
          
          {/* Shooting Star 5 */}
          <div className="absolute bottom-1/4 left-1/2 w-2 h-1 bg-gradient-to-r from-pink-400 to-transparent rounded-full animate-shooting-star" style={{animationDelay: '16s'}}></div>
        </div>

        {/* Cosmic Dust Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={`dust-${i}`}
              className="absolute w-1 h-1 bg-gray-400 rounded-full animate-dust-float opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${10 + Math.random() * 6}s`
              }}
            ></div>
          ))}
        </div>

        {/* Rotating Galaxy Arms */}
        <div className="absolute inset-0 opacity-20">
          {/* Galaxy Arm 1 */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-purple-500/30 rounded-full animate-galaxy-rotate" style={{animationDuration: '60s'}}></div>
          
          {/* Galaxy Arm 2 */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-cyan-500/25 rounded-full animate-galaxy-rotate" style={{animationDuration: '45s', animationDirection: 'reverse'}}></div>
          
          {/* Galaxy Arm 3 */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-pink-500/20 rounded-full animate-galaxy-rotate" style={{animationDuration: '30s'}}></div>
        </div>

        {/* Floating Planets */}
        <div className="absolute inset-0">
          {/* Planet 1 */}
          <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full animate-planet-orbit shadow-lg shadow-blue-500/50" style={{animationDuration: '20s'}}></div>
          
          {/* Planet 2 */}
          <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-gradient-to-br from-green-500 to-cyan-500 rounded-full animate-planet-orbit shadow-lg shadow-green-500/50" style={{animationDuration: '25s', animationDelay: '5s'}}></div>
          
          {/* Planet 3 */}
          <div className="absolute top-2/3 right-1/4 w-4 h-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-full animate-planet-orbit shadow-lg shadow-orange-500/50" style={{animationDuration: '15s', animationDelay: '10s'}}></div>
        </div>

        {/* Pulsing Energy Waves */}
        <div className="absolute inset-0">
          {/* Energy Wave 1 */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-[#00ff88]/30 rounded-full animate-pulse" style={{animationDuration: '4s'}}></div>
          
          {/* Energy Wave 2 */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-[#00d4ff]/25 rounded-full animate-pulse" style={{animationDuration: '6s', animationDelay: '1s'}}></div>
          
          {/* Energy Wave 3 */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[#7c3aed]/20 rounded-full animate-pulse" style={{animationDuration: '8s', animationDelay: '2s'}}></div>
        </div>

        {/* Moving Constellations */}
        <div className="absolute inset-0">
          {/* Constellation 1 */}
          <div className="absolute top-1/4 left-1/4 flex space-x-2 animate-constellation-float">
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>
          
          {/* Constellation 2 */}
          <div className="absolute bottom-1/4 right-1/4 flex space-x-3 animate-constellation-float" style={{animationDelay: '3s'}}>
            <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
            <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
            <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
            <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
            <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
