"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { ContactCard } from "@/components/ui/contact-card"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <ContactCard
            title="Hubungi Kami"
            description="Kami siap membantu Anda. Silakan hubungi tim kami untuk informasi lebih lanjut tentang solusi penimbangan digital kami."
            contactInfo={[
              {
                icon: MapPin,
                label: "Alamat",
                value: "Puri Alam Kencana 2 Blok R-2 No.13, Nanggewer Mekar, Cibinong, Bogor 16912",
              },
              {
                icon: Phone,
                label: "Telepon",
                value: "08177243033",
              },
              {
                icon: Mail,
                label: "Email",
                value: "marvacipta@yahoo.co.id",
              },
            ]}
          >
            {/* Contact Form */}
            <motion.form onSubmit={handleSubmit} className="space-y-6 bg-white border border-neutral-200 p-8 rounded-lg shadow-md">
              <div>
                <label className="block text-sm font-medium text-neutral-800 mb-2">Nama</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white border border-neutral-300 text-neutral-900 placeholder:text-neutral-500 rounded-lg focus:outline-none focus:border-[#ee3733] focus:ring-1 focus:ring-[#ee3733]"
                  placeholder="Nama Anda"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-800 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white border border-neutral-300 text-neutral-900 placeholder:text-neutral-500 rounded-lg focus:outline-none focus:border-[#ee3733] focus:ring-1 focus:ring-[#ee3733]"
                  placeholder="email@contoh.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-800 mb-2">Pesan</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-white border border-neutral-300 text-neutral-900 placeholder:text-neutral-500 rounded-lg focus:outline-none focus:border-[#ee3733] focus:ring-1 focus:ring-[#ee3733]"
                  placeholder="Tulis pesan Anda di sini..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#ee3733] hover:bg-[#ee3733] text-white py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Kirim Pesan
              </button>
            </motion.form>
          </ContactCard>
        </motion.div>
      </div>
    </section>
  )
}
