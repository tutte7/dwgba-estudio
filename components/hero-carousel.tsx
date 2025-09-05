"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const heroImages = [
  {
    src: "/proyecto21/portada.jpg",
    alt: "Proyecto arquitectónico contemporáneo",
  },
  {
    src: "/proyecto15/20.jpg",
    alt: "Interior minimalista con luz natural",
  },
  {
    src: "/proyecto14/portada.png",
    alt: "Detalle arquitectónico de fachada",
  },
  {
    src: "/proyecto12/Estar Unidad A 2 a 6 Camara 1.png",
    alt: "Vivienda contemporánea en paisaje natural",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const img = new Image()
    img.onload = () => setIsLoading(false)
    img.src = heroImages[0].src
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#proyectos")
    if (projectsSection) {
      const offsetTop = projectsSection.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Loading State */}
      {isLoading && <div className="absolute inset-0 bg-muted animate-pulse z-10" />}

      {/* Carousel Images */}
      <div className="relative h-full">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="h-full w-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-black/65" />
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 hover:scale-125 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center z-10">
        <div className="max-w-4xl px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight text-balance">
            dwgba - estudio
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed text-pretty">
            Diseñamos espacios que trascienden el tiempo, fusionando funcionalidad y belleza en cada proyecto
            arquitectónico.
          </p>
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="group bg-white hover:bg-black text-black hover:text-white border border-white hover:border-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto"
          >
            <span>Explorar Proyectos</span>
            <ArrowUpRight 
              size={20} 
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
            />
          </Button>
        </div>
      </div>
    </section>
  )
}
