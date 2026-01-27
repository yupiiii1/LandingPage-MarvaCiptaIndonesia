"use client"

import { motion } from "framer-motion"
import BeamsBackground from "@/components/ui/beams-background"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <BeamsBackground className="min-h-[80vh] sm:min-h-screen">
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-balance text-neutral-900"
            >
              Marva Weighing System
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl sm:text-2xl font-semibold text-[#ee3733]">
              Sistem Penimbangan Digital untuk Kebutuhan Industri
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-neutral-700 leading-relaxed max-w-2xl mx-auto">
              Marva Weighing System adalah aplikasi berbasis web yang membantu perusahaan mengelola proses penimbangan secara real-time, terhubung langsung dengan timbangan digital, serta memastikan hasil timbang sesuai formula, standar, dan toleransi yang ditentukan.
            </motion.p>

            <motion.div variants={itemVariants}>
              <button className="bg-[#ee3733] hover:bg-[#ee3733] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-block">
                Request Demo Sistem
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </BeamsBackground>
  )
}
