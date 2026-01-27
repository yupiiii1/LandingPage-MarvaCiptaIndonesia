"use client"

import Link from "next/link"
import { Facebook, Github, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const brandName = "Marva Cipta Indonesia"
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
  ]
  const mainLinks = [
    { href: "#home", label: "Home" },
    { href: "#problems", label: "Problems & Solutions" },
    { href: "#features", label: "Features" },
    { href: "#worksteps", label: "Work Steps" },
    { href: "#clients", label: "Clients" },
    { href: "#contact", label: "Contact" },
  ]
  const legalLinks = [
    { href: "#", label: "Terms" },
    { href: "#", label: "Privacy" },
    { href: "#", label: "Cookies" },
  ]

  return (
    <footer className="pb-6 pt-10 lg:pb-6 lg:pt-14 border-t bg-neutral-100 text-neutral-700 border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="md:flex md:items-start md:justify-between">
          <Link href="#home" className="flex items-center gap-x-2" aria-label={brandName}>
            <span className="font-bold text-xl text-neutral-900">{brandName}</span>
          </Link>
          <ul className="flex list-none mt-6 md:mt-0 space-x-3">
            {socialLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  target="_blank"
                  aria-label={link.label}
                  className="h-10 w-10 rounded-full inline-flex items-center justify-center border border-neutral-200 hover:bg-neutral-200 text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t mt-4 pt-6 md:mt-3 md:pt-6 lg:grid lg:grid-cols-10 gap-4 border-neutral-200">
          <nav className="lg:mt-0 lg:col-[4/11]">
            <ul className="list-none flex flex-wrap -my-1 -mx-2 lg:justify-end">
              {mainLinks.map((link, i) => (
                <li key={i} className="my-1 mx-2 shrink-0">
                  <a
                    href={link.href}
                    className="text-sm underline-offset-4 text-neutral-700 hover:underline hover:text-neutral-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-6 lg:mt-0 lg:col-[4/11]">
            <ul className="list-none flex flex-wrap -my-1 -mx-3 lg:justify-end">
              {legalLinks.map((link, i) => (
                <li key={i} className="my-1 mx-3 shrink-0">
                  <a
                    href={link.href}
                    className="text-sm underline-offset-4 text-neutral-500 hover:underline hover:text-neutral-700"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 text-sm leading-6 whitespace-nowrap lg:mt-0 lg:row-[1/3] lg:col-[1/4] text-neutral-500">
            <div>© {new Date().getFullYear()} {brandName}. Seluruh hak cipta dilindungi.</div>
            {/* Add a license line here if needed */}
          </div>
        </div>
      </div>
    </footer>
  )
}