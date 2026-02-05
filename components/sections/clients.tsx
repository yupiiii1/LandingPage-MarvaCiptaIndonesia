"use client"

import Image from "next/image"
import { Marquee } from "@/components/ui/marquee"
import { useMemo } from "react"

export default function Clients() {
  const logos = useMemo(
    () => [
      { name: "IRC", src: "/clients/irc.webp" },
      { name: "GarudaFood", src: "/clients/garudafood.webp" },
      { name: "IKP", src: "/clients/ikp.webp" },
      { name: "LasalleFood", src: "/clients/lasallefood.webp" },
      { name: "LIPI", src: "/clients/lipi.webp" },
      
    ],
    []
  )

  return (
    <section id="clients" className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="mb-2 text-2xl font-bold text-[#ee3733] lg:text-4xl">
            Trusted by these companies
          </h2>
        </div>

        <div className="pt-4">
          <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
            {/* Gradient mask */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent" />

            <Marquee speed={24} className="py-0">
              <LogoStrip logos={logos} />
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  )
}

function LogoStrip({
  logos,
}: {
  logos: { name: string; src: string }[]
}) {
  return (
    <div className="flex w-max items-center gap-10">
      {logos.map((logo) => (
        <div
          key={logo.name}
          className="flex-none w-[120px] h-[42px] flex items-center justify-center"
        >
          <Image
            src={logo.src}
            alt={logo.name}
            width={120}
            height={42}
            draggable={false}
            className="object-contain select-none opacity-80 hover:opacity-100 transition"
          />
        </div>
      ))}
    </div>
  )
}
