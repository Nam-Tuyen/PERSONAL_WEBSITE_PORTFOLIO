import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import { Montserrat, Great_Vibes } from "next/font/google"
import "./globals.css"
import PortfolioWrapper from "./components/PortfolioWrapper"

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
})

const greatVibes = Great_Vibes({
  subsets: ["latin", "vietnamese"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
})

export const metadata: Metadata = {
  title: "NamTuyenLe-Portfolio",
  description: "Personal portfolio of Tuyen Le Nam - Product Manager, Data Analyst, and FinTech Enthusiast",
  generator: "v0.app",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${greatVibes.variable} font-montserrat antialiased`}>
        <Suspense fallback={null}>
          <PortfolioWrapper>{children}</PortfolioWrapper>
        </Suspense>
      </body>
    </html>
  )
}
