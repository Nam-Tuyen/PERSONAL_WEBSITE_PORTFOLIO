"use client"

import React from "react"
import { Linkedin, Github, Mail, MapPin, Phone } from "lucide-react"

interface FooterProps {
  contact: {
    email: string
    phone: string
    location: string
    linkedin: string
    github: string
  }
  copyright: string
}

export default function Footer({ contact, copyright }: FooterProps) {
  return (
    <footer className="relative bg-gradient-to-t from-black via-gray-900 to-black border-t border-white/10 overflow-hidden">
      {/* Footer Universe Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Stars in Footer */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white rounded-full animate-twinkle opacity-70"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Nebula Effects in Footer */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-radial from-[#00ff88]/20 to-transparent rounded-full blur-2xl animate-nebula-float"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-radial from-[#00d4ff]/20 to-transparent rounded-full blur-2xl animate-nebula-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-radial from-[#7c3aed]/15 to-transparent rounded-full blur-xl animate-nebula-float" style={{animationDelay: '4s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-radial from-[#ff6b6b]/10 to-transparent rounded-full blur-lg animate-nebula-float" style={{animationDelay: '6s'}}></div>
        </div>
        
        {/* Shooting Stars in Footer */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-2 h-1 bg-gradient-to-r from-white to-transparent rounded-full animate-shooting-star" style={{animationDelay: '8s'}}></div>
          <div className="absolute top-2/3 right-0 w-1.5 h-1 bg-gradient-to-l from-cyan-400 to-transparent rounded-full animate-shooting-star" style={{animationDelay: '12s'}}></div>
        </div>
        
        {/* Cosmic Dust in Footer */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gray-400 rounded-full animate-dust-float opacity-50"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#00ff88] to-[#00d4ff] bg-clip-text text-transparent">
              Get In Touch
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-xl flex items-center justify-center shadow-lg shadow-[#00ff88]/25 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a 
                    href={`mailto:${contact.email}`}
                    className="text-white hover:text-[#00ff88] transition-colors duration-300"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] rounded-xl flex items-center justify-center shadow-lg shadow-[#00d4ff]/25 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a 
                    href={`tel:${contact.phone}`}
                    className="text-white hover:text-[#00d4ff] transition-colors duration-300"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-[#7c3aed] to-[#00ff88] rounded-xl flex items-center justify-center shadow-lg shadow-[#7c3aed]/25 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">{contact.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent">
              Follow Me
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#00ff88]/10 to-[#00d4ff]/10 border border-[#00ff88]/20 rounded-xl hover:border-[#00ff88]/40 hover:bg-gradient-to-r hover:from-[#00ff88]/20 hover:to-[#00d4ff]/20 transition-all duration-300 hover:scale-105"
              >
                <Linkedin className="w-6 h-6 text-[#00ff88] group-hover:scale-110 transition-transform duration-300" />
                <span className="text-white font-medium group-hover:text-[#00ff88] transition-colors duration-300">
                  LinkedIn
                </span>
              </a>

              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#00d4ff]/10 to-[#7c3aed]/10 border border-[#00d4ff]/20 rounded-xl hover:border-[#00d4ff]/40 hover:bg-gradient-to-r hover:from-[#00d4ff]/20 hover:to-[#7c3aed]/20 transition-all duration-300 hover:scale-105"
              >
                <Github className="w-6 h-6 text-[#00d4ff] group-hover:scale-110 transition-transform duration-300" />
                <span className="text-white font-medium group-hover:text-[#00d4ff] transition-colors duration-300">
                  GitHub
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#7c3aed] to-[#00ff88] bg-clip-text text-transparent">
              Quick Links
            </h3>
            
            <div className="space-y-3">
              <a 
                href="#about" 
                className="block text-gray-300 hover:text-[#00ff88] transition-colors duration-300 hover:translate-x-2 transform"
              >
                About Me
              </a>
              <a 
                href="#education" 
                className="block text-gray-300 hover:text-[#00d4ff] transition-colors duration-300 hover:translate-x-2 transform"
              >
                Education
              </a>
              <a 
                href="#experience" 
                className="block text-gray-300 hover:text-[#7c3aed] transition-colors duration-300 hover:translate-x-2 transform"
              >
                Experience
              </a>
              <a 
                href="#contact" 
                className="block text-gray-300 hover:text-[#00ff88] transition-colors duration-300 hover:translate-x-2 transform"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              {copyright}
            </p>
            
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Made with</span>
              <span className="text-red-500 animate-pulse">❤️</span>
              <span>by LE NAM TUYEN</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
