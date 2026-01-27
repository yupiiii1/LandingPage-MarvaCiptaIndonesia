"use client"

import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Check, X } from "lucide-react"

const problems = [
  "Akses pengguna tidak dibatasi dengan jelas",
  "Pencatatan hasil timbang masih manual dan rawan kesalahan",
  "Timbangan tidak terintegrasi langsung dengan sistem",
  "Tidak ada standar formula dan toleransi yang konsisten",
  "Data sulit ditelusuri untuk audit dan quality control",
]

const solutions = [
  "Kontrol akses berbasis peran pengguna",
  "Pencatatan penimbangan otomatis dan real-time",
  "Integrasi langsung dengan timbangan digital",
  "Standar formula dan toleransi terdefinisi jelas",
  "Data tersimpan rapi, siap untuk audit dan QC",
]

export default function Problems() {
  return (
    <Section id="problems" className="py-16 md:py-24 bg-white">
      <div>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#ee3733] mb-4">
              Problems & Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Menjawab Tantangan Proses Penimbangan Industri dengan Sistem Digital Terintegrasi
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="grid md:grid-cols-2 divide-x divide-gray-200">
              {/* Problems Column */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  Masalah
                </h3>
                <ul className="space-y-4">
                  {problems.map((problem, index) => (
                    <li key={index} className="flex items-start">
                      <div className="text-red-500 h-6 flex items-center">
                        <X className="h-5 w-5 mt-0.5" />
                      </div>
                      <span className="text-gray-700 ml-3">{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions Column */}
              <div className="p-6 md:p-8 bg-white">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  Solusi
                </h3>
                <ul className="space-y-4">
                  {solutions.map((solution, index) => (
                    <li key={index} className="flex items-start">
                      <div className="text-green-500 h-6 flex items-center">
                        <Check className="h-5 w-5 mt-0.5" />
                      </div>
                      <span className="text-gray-700 ml-3">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>

              
            </div>
          </div>
        </Container>
      </div>
    </Section>
  )
}