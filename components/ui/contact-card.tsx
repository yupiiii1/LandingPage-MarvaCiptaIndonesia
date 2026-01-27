"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { PlusIcon, LucideIcon } from "lucide-react"

export type ContactInfoItem = {
  icon: LucideIcon
  label: string
  value: string
}

export interface ContactCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
  contactInfo?: ContactInfoItem[]
  formSectionClassName?: string
}

export function ContactCard({
  title = "Contact With Us",
  description =
    "If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day.",
  contactInfo,
  className,
  formSectionClassName,
  children,
  ...props
}: ContactCardProps) {
  return (
    <div
      className={cn(
        "relative grid h-full w-full bg-white border border-neutral-200 rounded-xl shadow-sm md:grid-cols-1 lg:grid-cols-2",
        className
      )}
      {...props}
    >
      {/* Corners */}
      <PlusIcon className="absolute -top-3 -left-3 h-6 w-6 text-[#ee3733]/70" />
      <PlusIcon className="absolute -top-3 -right-3 h-6 w-6 text-[#ee3733]/70" />
      <PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 text-[#ee3733]/70" />
      <PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 text-[#ee3733]/70" />

      {/* Info */}
      <div className="flex flex-col justify-between">
        <div className="relative h-full space-y-4 px-4 py-8 md:p-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ee3733]">{title}</h1>
          <p className="text-neutral-700 max-w-xl text-sm md:text-base lg:text-lg">{description}</p>

          {contactInfo && contactInfo.length > 0 && (
            <div className="grid gap-4 grid-cols-1">
              {contactInfo.map((info, i) => (
                <ContactInfo key={`${info.label}-${i}`} {...info} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Form */}
      <div
        className={cn(
          "flex h-full w-full items-center p-5 md:col-span-1 border-t md:border-t-0 md:border-l bg-white/60 border-neutral-200",
          formSectionClassName
        )}
      >
        <div className="w-full">{children}</div>
      </div>
    </div>
  )
}

function ContactInfo({ icon: Icon, label, value, className, ...props }: ContactInfoItem & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-center gap-3 py-3", className)} {...props}>
      <div className="rounded-lg p-3 bg-white border border-neutral-200">
        <Icon className="h-5 w-5 text-[#ee3733]" />
      </div>
      <div>
        <p className="font-medium text-neutral-900">{label}</p>
        <p className="text-neutral-600 text-xs">{value}</p>
      </div>
    </div>
  )
}
