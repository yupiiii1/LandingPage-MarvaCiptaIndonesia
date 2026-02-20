"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface Props {
  className?: string
  children?: React.ReactNode
}

interface Blob {
  x: number
  y: number
  radius: number
  speedX: number
  speedY: number
  opacity: number
}

function createBlob(width: number, height: number): Blob {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    radius: 120 + Math.random() * 180,
    speedX: (Math.random() - 0.5) * 0.3,
    speedY: (Math.random() - 0.5) * 0.3,
    opacity: 0.15 + Math.random() * 0.15,
  }
}

export default function BeamsBackground({
  className,
  children,
}: Props) {
  const rootRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const blobsRef = useRef<Blob[]>([])
  const frameRef = useRef<number>(0)

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

      // 🔥 6 blob cukup, ringan tapi keliatan
      blobsRef.current = Array.from({ length: 6 }, () =>
        createBlob(rect.width, rect.height)
      )
    }

    resize()
    window.addEventListener("resize", resize)

    const animate = () => {
      const rect = root.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      ctx.filter = "blur(40px)" // glow creamy

      blobsRef.current.forEach((blob) => {
        blob.x += blob.speedX
        blob.y += blob.speedY

        // bounce biar ga keluar layar
        if (blob.x < 0 || blob.x > rect.width) blob.speedX *= -1
        if (blob.y < 0 || blob.y > rect.height) blob.speedY *= -1

        const gradient = ctx.createRadialGradient(
          blob.x,
          blob.y,
          0,
          blob.x,
          blob.y,
          blob.radius
        )

        gradient.addColorStop(0, `rgba(220, 20, 30, ${blob.opacity})`)
        gradient.addColorStop(1, "rgba(220, 20, 30, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      frameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(frameRef.current)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <div
      ref={rootRef}
      className={cn("relative w-full overflow-hidden bg-neutral-50", className)}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ filter: "blur(20px)" }}
      />

      <motion.div
        className="absolute inset-0 bg-red-100/20"
        animate={{ opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  )
}