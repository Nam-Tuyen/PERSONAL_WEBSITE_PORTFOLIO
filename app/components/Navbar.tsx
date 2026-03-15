"use client"

import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"

type Language = "en" | "vi"

interface NavbarProps {
  language: Language
  onLanguageChange: (lang: Language) => void
}

export default function Navbar({ language, onLanguageChange }: NavbarProps) {
  const router = useRouter()
  const pathname = usePathname()
  const themeStorageKey = "portfolio-theme"
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return true
    const storedTheme = window.localStorage.getItem(themeStorageKey)
    if (storedTheme === "dark" || storedTheme === "light") {
      return storedTheme === "dark"
    }
    return document.documentElement.classList.contains("dark")
  })

  const isHomePage = pathname === "/"
  const isPersonalPage = pathname === "/personal"

  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === themeStorageKey && (event.newValue === "dark" || event.newValue === "light")) {
        setIsDark(event.newValue === "dark")
      }
    }

    window.addEventListener("storage", handleStorage)
    return () => window.removeEventListener("storage", handleStorage)
  }, [])

  useEffect(() => {
    const bgColor = isDark ? "#090909" : "#f3f7ef"
    const textColor = isDark ? "#f2f2ed" : "#121712"

    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

    document.documentElement.dataset.theme = isDark ? "dark" : "light"
    document.documentElement.style.setProperty("--bg", bgColor)
    document.documentElement.style.setProperty("--text", textColor)
    document.documentElement.style.backgroundColor = bgColor
    document.body.style.backgroundColor = bgColor
    document.body.style.color = textColor
    window.localStorage.setItem(themeStorageKey, isDark ? "dark" : "light")
  }, [isDark])

  const navBg = isDark ? "rgba(20,20,20,0.65)" : "rgba(255,255,255,0.9)"
  const navBorder = isDark ? "1px solid rgba(157,255,59,0.15)" : "1px solid rgba(0,0,0,0.1)"
  const divider = isDark ? "rgba(157,255,59,0.2)" : "rgba(0,0,0,0.15)"

  return (
    <div className="pointer-events-none fixed bottom-3 left-1/2 z-[200] flex -translate-x-1/2 justify-center px-2.5 md:bottom-auto md:top-5 md:px-4">
      <nav
        className="pointer-events-auto flex items-center gap-0.5 shadow-2xl backdrop-blur-xl sm:gap-1"
        style={{
          background: navBg,
          border: navBorder,
          borderRadius: "9999px",
          padding: "4px",
          transition: "all .16s ease",
          boxShadow: isDark ? "0 4px 24px -1px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)" : "0 4px 20px -2px rgba(0,0,0,0.1)",
        }}
      >
        <button
          onClick={() => router.push("/")}
          className="group relative flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200 hover:scale-105 active:scale-95 md:h-9 md:w-9"
          style={{
            background: isHomePage ? (isDark ? "linear-gradient(135deg,rgba(157,255,59,0.1),transparent)" : "rgba(0,0,0,0.04)") : "transparent",
            color: isHomePage ? (isDark ? "#9dff3b" : "#000") : (isDark ? "#a0a0a0" : "#666"),
          }}
          aria-label={language === "vi" ? "Trang ch\u1ee7" : "Portfolio"}
        >
          {isHomePage && isDark && <div className="absolute inset-0 rounded-full border border-[#9dff3b]/30" />}
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4 md:h-[1.1rem] md:w-[1.1rem]" xmlns="http://www.w3.org/2000/svg">
            <path d="M216,120v96H152V152H104v64H40V120a8,8,0,0,1,2.34-5.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,216,120Z" opacity="0.2" />
            <path d="M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z" />
          </svg>
        </button>

        <div className="mx-0.5 h-3.5 w-px md:mx-1 md:h-4.5" style={{ background: divider }} />

        <button
          onClick={() => router.push("/personal")}
          className="group relative flex h-8 items-center gap-1 whitespace-nowrap rounded-full px-2.5 transition-all duration-200 hover:scale-105 active:scale-95 md:h-9 md:gap-1.5 md:px-3.5"
          style={{
            background: isPersonalPage ? (isDark ? "linear-gradient(135deg,rgba(157,255,59,0.1),transparent)" : "rgba(0,0,0,0.04)") : "transparent",
            color: isPersonalPage ? (isDark ? "#9dff3b" : "#000") : (isDark ? "#a0a0a0" : "#666"),
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.02em",
          }}
        >
          {isPersonalPage && isDark && <div className="absolute inset-0 rounded-full border border-[#9dff3b]/30" />}
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4 md:h-[1.1rem] md:w-[1.1rem]" xmlns="http://www.w3.org/2000/svg">
            <path d="M224,128a95.76,95.76,0,0,1-31.8,71.37A72,72,0,0,0,128,160a40,40,0,1,0-40-40,40,40,0,0,0,40,40,72,72,0,0,0-64.2,39.37h0A96,96,0,1,1,224,128Z" opacity="0.2" />
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z" />
          </svg>
          <span className="hidden min-[360px]:inline md:text-[12px]">{language === "vi" ? "V\u1ec1 t\u00f4i" : "About me"}</span>
        </button>

        <div className="mx-0.5 h-3.5 w-px md:mx-1 md:h-4.5" style={{ background: divider }} />

        <button
          onClick={() => onLanguageChange(language === "en" ? "vi" : "en")}
          className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200 hover:scale-105 hover:bg-black/5 active:scale-95 dark:hover:bg-white/5 md:h-9 md:w-9"
          style={{ color: isDark ? "#e0e0e0" : "#333", fontSize: "11px", fontWeight: 700, letterSpacing: "0.05em" }}
          aria-label={language === "en" ? "Chuy\u1ec3n sang ti\u1ebfng Vi\u1ec7t" : "Switch to English"}
        >
          {language === "en" ? "VI" : "EN"}
        </button>

        <button
          onClick={() => setIsDark((prev) => !prev)}
          className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200 hover:scale-105 hover:bg-black/5 active:scale-95 dark:hover:bg-white/5 md:h-9 md:w-9"
          aria-label={language === "vi" ? `Chuy\u1ec3n sang ch\u1ebf \u0111\u1ed9 ${isDark ? "s\u00e1ng" : "t\u1ed1i"}` : `Switch to ${isDark ? "light" : "dark"} mode`}
        >
          {isDark ? (
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="h-4 w-4 text-[#e0e0e0] md:h-[1rem] md:w-[1rem]" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
          ) : (
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="h-4 w-4 text-[#333] md:h-[1rem] md:w-[1rem]" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
          )}
        </button>
      </nav>
    </div>
  )
}
