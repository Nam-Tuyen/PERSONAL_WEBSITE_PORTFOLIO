import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import { Montserrat, Great_Vibes } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
})

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
})

const amsterdamFour = localFont({
  src: "./fonts/AmsterdamFour.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-amsterdam-four",
})

export const metadata: Metadata = {
  title: "Tuyen Le Nam - FinTech Portfolio",
  description: "Personal portfolio of Tuyen Le Nam - Product Manager, Data Analyst, and FinTech Enthusiast",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
            <body className={`${montserrat.variable} ${greatVibes.variable} ${amsterdamFour.variable} font-montserrat antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
