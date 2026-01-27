"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Users, Database, Calculator, Scale, Package, ClipboardList, LineChart, CheckCircle } from "lucide-react"

export default function Features() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const features: { key: string; desc: string; Icon: React.ComponentType<{ className?: string }> }[] = [
    { key: "Manajemen Pengguna & Hak Akses", desc: "Mengatur pengguna sistem berdasarkan peran untuk menjaga keamanan dan alur kerja operasional. (Superadmin, Admin, Operator)", Icon: Users },
    { key: "Master Data Terpusat", desc: "Mengelola seluruh data penting seperti material, produk, vendor, customer, warehouse, area, dan kemasan dalam satu sistem terintegrasi.", Icon: Database },
    { key: "Standar Formula & Toleransi", desc: "Menentukan formula penimbangan, berat standar, dan toleransi sebagai acuan utama untuk menjaga kualitas dan konsistensi hasil timbang.", Icon: Calculator },
    { key: "Pengaturan Area & Timbangan", desc: "Mengelola area penimbangan dan menghubungkannya dengan timbangan digital yang digunakan, termasuk konfigurasi komunikasi dan format pembacaan data.", Icon: Scale },
    { key: "Manajemen Box & Wadah Material", desc: "Mengontrol penggunaan box material berdasarkan kapasitas, posisi, dan area untuk mendukung proses penimbangan yang tertib dan aman.", Icon: Package },
    { key: "Permintaan Penimbangan Terstruktur", desc: "Mencatat dan mengelola permintaan penimbangan berdasarkan formula, batch, lot, dan area sebelum proses penimbangan dilakukan.", Icon: ClipboardList },
    { key: "Monitoring Penimbangan Real-Time", desc: "Menampilkan proses penimbangan secara langsung, membandingkan berat standar dan aktual, serta memantau progres penimbangan.", Icon: LineChart },
    { key: "Data Siap Audit & Quality Control", desc: "Seluruh data penimbangan tersimpan rapi, dapat ditelusuri kembali, dan siap digunakan untuk kebutuhan audit serta quality control.", Icon: CheckCircle },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="features"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#ee3733] text-center mb-12">
          Features
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
        >
          {features.map((feature, index) => {
            const isTop = index < 4
            const isLeft = index === 0 || index === 4

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={[
                  "group relative py-10 w-full",
                  "lg:border-r border-neutral-200",
                  isLeft && "lg:border-l",
                  isTop && "lg:border-b",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {/* Hover background */}
                <div className="opacity-0 group-hover:opacity-100 transition absolute inset-0 bg-neutral-100/50 pointer-events-none" />

                {/* Icon */}
                <div className="mb-3 relative z-10 px-6 flex justify-center">
                  <CardDecorator>
                    <feature.Icon className="h-6 w-6 text-neutral-600 group-hover:text-[#ee3733] transition-colors" />
                  </CardDecorator>
                </div>

                {/* Title */}
                <div className="relative z-10 px-6 mb-2 text-center font-bold text-neutral-800">
                  <div className="hidden md:block absolute left-0 inset-y-0 h-6 group-hover:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 group-hover:bg-[#ee3733] transition-all" />
                  <span className="inline-block transition-transform group-hover:translate-x-2">
                    {feature.key}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-neutral-600 px-6 text-justify relative z-10">
                  {feature.desc}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

function CardDecorator({ children }: { children: React.ReactNode }) {
  return (
    <div
      aria-hidden
      className="relative size-20 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:16px_16px] opacity-10" />
      <div className="absolute inset-0 m-auto flex size-8 items-center justify-center rounded-md bg-background border">
        {children}
      </div>
    </div>
  )
}
