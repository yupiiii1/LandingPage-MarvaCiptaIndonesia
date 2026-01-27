import type React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  className?: string
}

export function Section({ children, className, ...props }: SectionProps) {
  return (
    <section className={cn("py-20 px-4 sm:px-6 lg:px-8", className)} {...props}>
      {children}
    </section>
  )
}