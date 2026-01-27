"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface Feature {
  step: string
  title?: string
  content: string
  image: string
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: string
  activeStep: number
  onStepClick: (index: number) => void
  imageMaxWidth?: string
}

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  activeStep = 0,
  onStepClick,
  imageMaxWidth = "max-w-[680px]",
}: FeatureStepsProps) {
  const currentFeature = activeStep
  const activeFeature = features[activeStep]

  return (
    <div className={cn("p-8 md:p-12", className)} id="worksteps">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center text-red-500">
          {title}
        </h2>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          <div className="order-2 md:order-1 w-full md:w-1/2 space-y-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={cn(
                  "flex items-start gap-4 md:gap-6 p-4 rounded-lg cursor-pointer transition-all duration-200",
                  "hover:bg-gray-50 hover:shadow-sm hover:scale-[1.01]",
                  index === currentFeature 
                    ? "bg-white shadow-md scale-[1.01] my-2" 
                    : "opacity-80 my-1.5 hover:opacity-100"
                )}
                onClick={() => onStepClick(index)}
              >
                <div className={cn(
                  "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-2 mt-1",
                  index === currentFeature 
                    ? "bg-red-500 border-red-500 text-white"
                    : "border-gray-200 text-gray-400"
                )}>
                  {index + 1}
                </div>

                <div className="flex-1">
                  <h3 className={cn(
                    "text-lg md:text-xl font-semibold mb-1",
                    index === currentFeature ? "text-red-500" : "text-gray-700"
                  )}>
                    {feature.title || feature.step}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    {feature.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="order-1 md:order-2 w-full md:w-1/2 relative">
            <div className={cn(
              "w-full bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden sticky top-24",
              imageMaxWidth
            )} style={{ zIndex: 10 }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeature}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="p-3 md:p-4"
                >
                  <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-gray-50">
                    <Image
                      src={activeFeature.image}
                      alt={activeFeature.step}
                      className="object-contain"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={currentFeature === 0}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
