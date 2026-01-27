import Navbar from "@/components/navbar"
import Hero from "@/components/sections/hero"
import Problems from "@/components/sections/problems"
import Features from "@/components/sections/features"
import { WorkSteps } from "@/components/sections/worksteps"
import Clients from "@/components/sections/clients"
import CTA from "@/components/sections/cta"
import Contact from "@/components/sections/contact"
import Footer from "@/components/footer"

export const metadata = {
  title: "Marva Weighing System - Industrial Weighing & Material Management",
  description:
    "A complete web-based solution for weighing, recording, and monitoring material data in real-time. Trusted by leading companies across Indonesia.",
  keywords: "weighing system, material management, industrial solution, Indonesia",
  openGraph: {
    title: "Marva Weighing System",
    description: "Professional weighing and material management system for modern industries",
    type: "website",
  },
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problems />
      <Features />
      <WorkSteps />
      <Clients />
      <CTA />
      <Contact />
      <Footer />
    </>
  )
}
