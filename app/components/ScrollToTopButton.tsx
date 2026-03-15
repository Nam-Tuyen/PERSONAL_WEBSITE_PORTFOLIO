"use client"

import React, { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

interface ScrollToTopButtonProps {
  isDark?: boolean
}

export default function ScrollToTopButton({ isDark = true }: ScrollToTopButtonProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 rounded-full p-3 transition-all duration-300 hover:scale-110 active:scale-95 group"
          style={{
            background: isDark ? "rgba(9,12,9,0.92)" : "rgba(255,255,255,0.96)",
            color: isDark ? "#9dff3b" : "#4d7618",
            border: isDark ? "1.5px solid rgba(157,255,59,0.28)" : "1.5px solid rgba(77,118,24,0.18)",
            boxShadow: isDark ? "0 14px 30px rgba(0,0,0,0.42), 0 0 18px rgba(157,255,59,0.12)" : "0 14px 30px rgba(56,76,28,0.14), 0 0 0 4px rgba(255,255,255,0.88)",
            backdropFilter: "blur(12px)",
          }}
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6 group-hover:animate-bounce" />
        </button>
      )}
    </>
  )
}
