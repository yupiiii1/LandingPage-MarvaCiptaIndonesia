"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  pauseOnHover?: boolean
  direction?: "left" | "right"
  speed?: number
}

export function Marquee({
  children,
  pauseOnHover = false,
  direction = "left",
  speed = 30,
  className,
  ...props
}: MarqueeProps) {
  return (
    <div
      className={cn("w-full overflow-hidden sm:mt-24 mt-10 z-10", className)}
      {...props}
    >
      <div className="relative flex w-full overflow-hidden py-5">
        <div
          className={cn(
            "flex w-max animate-marquee will-change-transform pointer-events-none",
            pauseOnHover && "hover:[animation-play-state:paused]",
            direction === "right" && "animate-marquee-reverse"
          )}
          style={{
            ["--duration" as any]: `${speed}s`,
          }}
        >
          {/* original */}
          <span className="flex w-max">{children}</span>

          {/* duplicate */}
          <span className="flex w-max" aria-hidden>
            {children}
          </span>
        </div>
      </div>
    </div>
  )
}
