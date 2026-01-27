"use client"

import { Check } from "lucide-react"

export default function CTA() {
  const features = [
    "Terintegrasi langsung dengan timbangan digital",
    "Kontrol akses berbasis peran pengguna",
    "Data penimbangan real-time & historis",
    "Siap audit dan quality control",
    "Dirancang untuk kebutuhan industri"
  ]

  return (
    <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Siap Meningkatkan Akurasi Penimbangan Produksi?</h2>
              <p className="text-gray-600 mb-6">
               Konsultasikan kebutuhan sistem penimbangan digital Anda bersama tim Marva untuk memastikan akurasi, kontrol, dan kesiapan audit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                
                <button 
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium rounded-full px-8 py-3 text-base transition-colors duration-200 flex-1 sm:flex-none"
                >
                  Hubungi Kami
                </button>

                <button 
                  className="bg-[#ee3733] text-white hover:bg-red-700 font-medium rounded-full px-8 py-3 text-base transition-colors duration-200 flex-1 sm:flex-none"
                >
                  Request Demo Sistem →
                </button>
              </div>
            </div>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#ee3733] flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}