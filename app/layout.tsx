import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Marva Weighing System - Industrial Weighing & Material Management",
  description:
    "A complete web-based solution for weighing, recording, and monitoring material data in real-time. Trusted by leading companies across Indonesia.",
  keywords: "weighing system, material management, industrial solution, Indonesia",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Marva Weighing System",
    description: "Professional weighing and material management system for modern industries",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light">
      <body className="font-sans antialiased min-h-dvh bg-white text-neutral-900">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
