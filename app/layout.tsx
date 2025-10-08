import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Tuyen Le Nam - Data Analyst & FinTech Specialist",
  description: "Personal portfolio of Tuyen Le Nam - Data Analyst, FinTech Specialist, and Business Intelligence Expert",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-montserrat antialiased">
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
