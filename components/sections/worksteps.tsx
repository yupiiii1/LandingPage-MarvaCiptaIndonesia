"use client"

import { useState } from "react"
import { FeatureSteps } from "@/components/ui/feature-steps"

export function WorkSteps() {
  const [activeStep, setActiveStep] = useState(0)
  
  const features = [
    { 
      step: 'Langkah 1', 
      title: 'Persiapan Data & Standar',
      content: 'Admin menyiapkan master data, formula penimbangan, standar berat, toleransi, serta pengaturan area dan timbangan yang digunakan.', 
      image: '/worksteps/step1.png'
    },
    { 
      step: 'Langkah 2',
      title: 'Pembuatan Permintaan Penimbangan',
      content: 'Permintaan penimbangan dibuat berdasarkan formula, batch, lot, dan area kerja sebagai acuan sebelum proses penimbangan dimulai.',
      image: '/worksteps/step2.png'
    },
    { 
      step: 'Langkah 3',
      title: 'Proses Penimbangan Real-Time',
      content: 'Operator melakukan penimbangan di area yang ditentukan. Sistem membaca data berat langsung dari timbangan digital dan menampilkan hasil secara real-time.',
      image: '/worksteps/step3.png'
    },
    { 
      step: 'Langkah 4',
      title: 'Verifikasi, Monitoring, dan Audit',
      content: 'Hasil penimbangan diverifikasi berdasarkan standar dan toleransi. Seluruh data tersimpan rapi dan dapat ditelusuri kembali untuk kebutuhan audit dan quality control.',
      image: '/worksteps/step3.png'
    }
  ]

  const handleStepClick = (index: number) => {
    setActiveStep(index)
  }

  return (
    <section className="py-12 md:py-24">
      <FeatureSteps 
        features={features}
        title="Work Steps"
        activeStep={activeStep}
        onStepClick={handleStepClick}
        imageMaxWidth="max-w-[680px]"
      />
    </section>
  )
}
