import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import { Montserrat, Great_Vibes } from "next/font/google"
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

export const metadata: Metadata = {
  title: "NamTuyenLe-Portfolio",
  description: "Personal portfolio of Tuyen Le Nam - Product Manager, Data Analyst, and FinTech Enthusiast",
  generator: "v0.app",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
    shortcut: '/favicon.ico',
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
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
