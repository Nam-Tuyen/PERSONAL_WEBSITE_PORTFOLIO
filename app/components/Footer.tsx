"use client"

import React from "react"
import { Mail, Phone, MapPin, Linkedin, Github, Code, Heart } from "lucide-react"

interface FooterProps {
  contact: {
    email: string
    phone: string
    location: string
  }
  copyright: string
}

export default function Footer({ contact, copyright }: FooterProps) {
  return (
    <footer className="relative overflow-hidden">
      {/* Tech Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            animation: 'grid-move 20s linear infinite'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 bg-gradient-to-t from-black via-gray-900 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-lg flex items-center justify-center shadow-lg shadow-[#00ff88]/25">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">LE NAM TUYEN</h3>
                  <p className="text-gray-400">Data Analyst & Product Manager</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Transforming vision into reality and turning intent into results through data-driven insights and innovative product solutions.
              </p>
            </div>

            {/* Contact Section */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white">Get In Touch</h4>
              <div className="space-y-4">
                <a href={`mailto:${contact.email}`} className="flex items-center space-x-3 text-gray-400 hover:text-[#00ff88] transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                  <span>{contact.email}</span>
                </a>
                <a href={`tel:${contact.phone}`} className="flex items-center space-x-3 text-gray-400 hover:text-[#00d4ff] transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                  <span>{contact.phone}</span>
                </a>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="w-5 h-5" />
                  <span>{contact.location}</span>
                </div>
              </div>
            </div>

            {/* Social Section */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white">Connect With Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/tuyen-le-nam-7614a1269/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#00ff88] hover:border-[#00ff88] hover:bg-[#00ff88]/10 transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/Nam-Tuyen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#00d4ff] hover:border-[#00d4ff] hover:bg-[#00d4ff]/10 transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
              <div className="pt-4">
                <button className="group relative px-6 py-3 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black font-semibold rounded-lg shadow-lg shadow-[#00ff88]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#00ff88]/40 hover:scale-105">
                  <span className="relative z-10">Download Resume</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-lg opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm flex items-center space-x-2">
              <span>{copyright}</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>Made with modern tech</span>
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>© 2024 LE NAM TUYEN</span>
              <span>•</span>
              <span>All rights reserved</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}