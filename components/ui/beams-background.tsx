"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface Props {
  className?: string
  children?: React.ReactNode
  intensity?: "subtle" | "medium" | "strong"
}

interface Beam {
  x: number
  y: number
  width: number
  length: number
  angle: number
  speed: number
  opacity: number
  hue: number
}

function createBeam(width: number, height: number): Beam {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    width: 40 + Math.random() * 40,
    length: height * 2,
    angle: -30 + Math.random() * 6,
    speed: 0.4 + Math.random() * 0.5,
    opacity: 0.12 + Math.random() * 0.1,
    hue: 0 + Math.random() * 4,
  }
}

export default function BeamsBackground({
  className,
  children,
  intensity = "strong",
}: Props) {
  const rootRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const beamsRef = useRef<Beam[]>([])
  const frameRef = useRef<number>(0)

  const opacityMap = {
    subtle: 0.6,
    medium: 0.8,
    strong: 1,
  } as const

  useEffect(() => {
    const root = rootRef.current
    const canvas = canvasRef.current
    if (!root || !canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      const rect = root.getBoundingClientRect()

      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)

      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`

      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)

      beamsRef.current = Array.from({ length: 12 }, () =>
        createBeam(rect.width, rect.height)
      )
    }

    resize()
    window.addEventListener("resize", resize)

    const animate = () => {
      const rect = root.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      ctx.filter = "blur(18px)"

      beamsRef.current.forEach((beam) => {
        beam.y -= beam.speed

        if (beam.y + beam.length < -50) {
          beam.y = rect.height + 50
        }

        ctx.save()
        ctx.translate(beam.x, beam.y)
        ctx.rotate((beam.angle * Math.PI) / 180)

        const gradient = ctx.createLinearGradient(0, 0, 0, beam.length)
        gradient.addColorStop(0, `hsla(${beam.hue},85%,65%,0)`)
        gradient.addColorStop(
          0.5,
          `hsla(${beam.hue},95%,55%,${beam.opacity * 1.3})`
        )
        gradient.addColorStop(1, `hsla(${beam.hue},85%,65%,0)`)

        ctx.fillStyle = gradient
        ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length)

        ctx.restore()
      })

      frameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(frameRef.current)
      window.removeEventListener("resize", resize)
    }
  }, [intensity])

  return (
    <div
      ref={rootRef}
      className={cn("relative w-full overflow-hidden bg-neutral-50", className)}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ filter: "blur(8px)" }}
      />

      <motion.div
        className="absolute inset-0 bg-red-100/30"
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
        style={{ backdropFilter: "blur(20px)" }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  )
}