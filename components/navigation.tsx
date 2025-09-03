"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
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
      ? "bg-background/95 backdrop-blur-md border-b border-border/50"
      : "bg-transparent"
    : "bg-background/95 backdrop-blur-md border-b border-border/50"

  const textColor = isHomePage && !isScrolled ? "text-white" : "text-foreground"
  const logoColor = isHomePage && !isScrolled ? "text-white" : "text-foreground"

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackground}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link
            href="/"
            className={`font-medium text-lg md:text-xl transition-colors duration-200 hover:text-accent ${logoColor}`}
          >
            dwgba • estudio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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
          <div className="hidden md:block">
            <Button
              className={`transition-all duration-200 bg-black text-white border-black hover:bg-black/90 pill`}
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
              Contactar
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-200 ${textColor}`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="block px-3 py-2 text-foreground text-sm uppercase font-medium"
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
              <div className="px-3 py-2">
                <Button
                  className="w-full bg-black text-white border-black hover:bg-black/90 transition-all duration-200 pill"
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
                  Contactar
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
