import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const inter = localFont({
  src: [
    { path: "./fonts/Inter-400.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Inter-500.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Inter-600.ttf", weight: "600", style: "normal" },
    { path: "./fonts/Inter-700.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-body",
  display: "block",
})

const orbitron = localFont({
  src: [
    { path: "./fonts/Orbitron-400.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Orbitron-700.ttf", weight: "700", style: "normal" },
    { path: "./fonts/Orbitron-900.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-heading",
  display: "block",
})

export const metadata: Metadata = {
  title: "Tuyen Le Nam's Portfolio",
  description: "Personal portfolio of Le Nam Tuyen - Product Manager, Data Analyst and FinTech Enthusiast",
  icons: {
    icon: "/tabimage.svg",
    shortcut: "/tabimage.svg",
    apple: "/tabimage.svg",
  },
}

const themeBootstrapScript = `
  (() => {
    try {
      const storedTheme = window.localStorage.getItem("portfolio-theme");
      const isLight = storedTheme === "light";
      const bgColor = isLight ? "#f3f7ef" : "#090909";
      const textColor = isLight ? "#121712" : "#f2f2ed";
      const root = document.documentElement;

      root.dataset.theme = isLight ? "light" : "dark";
      root.style.setProperty("--bg", bgColor);
      root.style.setProperty("--text", textColor);
      root.style.backgroundColor = bgColor;

      if (isLight) {
        root.classList.remove("dark");
      } else {
        root.classList.add("dark");
      }

      document.addEventListener(
        "DOMContentLoaded",
        () => {
          document.body.style.backgroundColor = bgColor;
          document.body.style.color = textColor;
        },
        { once: true }
      );
    } catch (error) {
      document.documentElement.style.backgroundColor = "#090909";
    }
  })();
`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={inter.className}
      suppressHydrationWarning
      style={{ backgroundColor: "#090909", fontFamily: "var(--font-body), sans-serif" }}
    >
      <head>
        <title>Tuyen Le Nam&apos;s Portfolio</title>
        <meta name="description" content="Personal portfolio of Le Nam Tuyen - Product Manager, Data Analyst and FinTech Enthusiast" />
        <script dangerouslySetInnerHTML={{ __html: themeBootstrapScript }} />
      </head>
      <body
        className={`${inter.className} ${inter.variable} ${orbitron.variable} portfolio-font`}
        suppressHydrationWarning
        style={{ backgroundColor: "#090909", color: "#f2f2ed", fontFamily: "var(--font-body), sans-serif" }}
      >
        {children}
      </body>
    </html>
  )
}
