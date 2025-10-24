"use client"

import { useState, useEffect } from "react"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const heroImages = [
  {
    src: "/carrousel/_MG_2319.jpg",
    alt: "Imagen de proyecto del estudio 1",
  },
  {
    src: "/carrousel/2022-12-02 19.15.52.jpg",
    alt: "Imagen de proyecto del estudio 2",
  },
  {
    src: "/carrousel/Ext 01 Final.jpg",
    alt: "Imagen de proyecto del estudio 3",
  },
  {
    src: "/carrousel/F2 (1) copiaA.jpg",
    alt: "Imagen de proyecto del estudio 4",
  },
  {
    src: "/carrousel/final 6.jpg",
    alt: "Imagen de proyecto del estudio 5",
  },
  {
    src: "/carrousel/LA PAMPA 1575 - Render fachada.png",
    alt: "Imagen de proyecto del estudio 6",
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
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight text-balance lowercase">
            dwgba <span className="font-serif text-2xl md:text-5xl mb-7">• </span>estudio
          </h2>
          <h1 className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed text-pretty">
              Estudio de Arquitectura de la Ciudad de Buenos Aires.
          </h1>
          <button
            onClick={scrollToProjects}
            className="btn-rounded bg-white hover:bg-black text-black hover:text-white border border-white hover:border-white px-4 py-2 text-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto"
          >
            EXPLORAR PROYECTOS
            <ArrowUpRight 
              size={20} 
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
            />
          </button>
        </div>
      </div>
    </section>
  )
}
