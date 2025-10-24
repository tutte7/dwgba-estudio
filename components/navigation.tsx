"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const navItems = [
    { name: "Filosofía", href: isHomePage ? "#filosofia" : "/#filosofia" },
    { name: "Proyectos", href: isHomePage ? "#proyectos" : "/#proyectos" },
    { name: "Equipo", href: isHomePage ? "#equipo" : "/#equipo" },
    { name: "Contacto", href: isHomePage ? "#contacto" : "/#contacto" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#") && isHomePage) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
      setIsMenuOpen(false)
    }
  }

  const navBackground = isHomePage
    ? isScrolled
      ? "bg-white backdrop-blur-md border-b border-border/50"
      : "bg-transparent"
    : "bg-background/95 backdrop-blur-md border-b border-border/50"

  const textColor = isHomePage && !isScrolled ? "text-white" : "text-foreground"
  const logoColor = isHomePage && !isScrolled ? "text-white" : "text-foreground"

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackground}`}>
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-center h-20 md:h-24 max-w-[1400px] mx-auto">
          {/* Logo */}
          <div className="hidden md:block flex-1">
            <Link
              href="/"
              aria-label="dwgba • estudio"
              className={`inline-flex items-center`}
            >
              <Image
                src="/dwgba - logo color.png"
                alt="dwgba • estudio"
                width={140}
                height={28}
                className="h-6 md:h-7 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Mobile Logo (centered) */}
          <div className="md:hidden flex-1 flex justify-center">
            <Link
              href="/"
              aria-label="dwgba • estudio"
              className={`inline-flex items-center`}
            >
              <Image
                src="/dwgba - logo color.png"
                alt="dwgba • estudio"
                width={140}
                height={28}
                className="h-6 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-8 flex-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={`text-sm uppercase font-medium ${textColor}`}
              >
                <span className="rolling-link" aria-hidden="true">
                  <span className="rolling-text">
                    <span>{item.name}</span>
                    <span>{item.name}</span>
                  </span>
                </span>
                <span className="sr-only">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex flex-1 justify-end">
            <Button
              className={`btn-rounded group bg-white cursor-pointer hover:bg-black text-black hover:text-white border border-black hover:border-black transition-all duration-300 hover:scale-105 flex items-center gap-2`}
              onClick={() => {
                const contactSection = document.querySelector("#contacto")
                if (contactSection) {
                  const offsetTop = contactSection.getBoundingClientRect().top + window.pageYOffset - 80
                  window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth",
                  })
                }
              }}
            >
              <span>Contactar</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 transition-colors btn-rounded duration-200 ${textColor}`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200/80">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="block px-4 py-3 text-gray-800 text-sm uppercase font-medium hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  <span className="rolling-link" aria-hidden="true">
                    <span className="rolling-text">
                      <span>{item.name}</span>
                      <span>{item.name}</span>
                    </span>
                  </span>
                  <span className="sr-only">{item.name}</span>
                </Link>
              ))}
              <div className="px-4 pt-4">
                <Button
                  className="btn-rounded group w-full bg-black hover:bg-gray-800 text-white border border-black hover:border-gray-800 transition-all duration-300 flex items-center gap-2 justify-center py-3 rounded-lg shadow-sm"
                  onClick={() => {
                    const contactSection = document.querySelector("#contacto")
                    if (contactSection) {
                      const offsetTop = contactSection.getBoundingClientRect().top + window.pageYOffset - 80
                      window.scrollTo({
                        top: offsetTop,
                        behavior: "smooth",
                      })
                    }
                    setIsMenuOpen(false)
                  }}
                >
                  <span>Contactar</span>
                  <ArrowUpRight 
                    size={16} 
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
                  />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
