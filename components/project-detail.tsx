"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Ruler, CheckCircle, Tag, User, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectImage {
  src: string
  alt: string
}

interface ProjectData {
  id: string
  title: string
  category: string
  year: string
  location: string
  area: string
  status: string
  description: string
  details: Record<string, string>
  heroImage: string
  images: ProjectImage[]
}

interface ProjectDetailProps {
  project: ProjectData
  categorySlug: string
}

export function ProjectDetail({ project, categorySlug }: ProjectDetailProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="">
      {/* Sticky top controls with site padding */}
      <div className="pointer-events-none fixed top-0 left-0 right-0 z-30 px-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            href={`/proyectos/${categorySlug}`}
            className="pointer-events-auto pill inline-flex items-center gap-2 px-4 py-2 text-white backdrop-blur-[20px] bg-white/10 border border-white/20"
          >
            <ArrowLeft size={18} />
            <span className="text-xs uppercase">Volver</span>
          </Link>
            <Button
              className={`group bg-white cursor-pointer hover:bg-black text-black hover:text-white border border-black hover:border-black transition-all duration-300 hover:scale-105 flex items-center gap-2`}
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
      </div>

      {/* Hero Image full-bleed */}
      <section className="relative">
        <div className="relative w-full h-screen">
          <img
            src={project.heroImage || "/placeholder.svg"}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Project Title, meta and tags bottom-left (over image) */}
          <div className="absolute inset-x-0 bottom-12 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="section-title-sm text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)] mb-3">
                {project.title}
              </h1>
              <div className="text-white/90 text-sm md:text-base space-x-3 mb-3">
                <span className="uppercase font-medium">{project.category}</span>
                <span>•</span>
                <span>{project.location}</span>
              </div>
              {/* Informational tags aligned to container */}
              <div className="flex flex-wrap gap-2">
                <span className="pill inline-flex items-center gap-2 px-3 py-1 text-xs bg-white/10 border border-white/20 text-white backdrop-blur-[6px]">
                  <Tag size={14} />
                  <span>{project.category}</span>
                </span>
                <span className="pill inline-flex items-center gap-2 px-3 py-1 text-xs bg-white/10 border border-white/20 text-white backdrop-blur-[6px]">
                  <Calendar size={14} />
                  <span>{project.year}</span>
                </span>
                <span className="pill inline-flex items-center gap-2 px-3 py-1 text-xs bg-white/10 border border-white/20 text-white backdrop-blur-[6px]">
                  <MapPin size={14} />
                  <span>{project.location}</span>
                </span>
                <span className="pill inline-flex items-center gap-2 px-3 py-1 text-xs bg-white/10 border border-white/20 text-white backdrop-blur-[6px]">
                  <CheckCircle size={14} />
                  <span>{project.status}</span>
                </span>
                {project.details?.["Cliente"] && (
                  <span className="pill inline-flex items-center gap-2 px-3 py-1 text-xs bg-white/10 border border-white/20 text-white backdrop-blur-[6px]">
                    <User size={14} />
                    <span>{project.details["Cliente"]}</span>
                  </span>
                )}
                {project.details?.["Centro Comercial"] && (
                  <span className="pill inline-flex items-center gap-2 px-3 py-1 text-xs bg-white/10 border border-white/20 text-white backdrop-blur-[6px]">
                    <Layers size={14} />
                    <span>{project.details["Centro Comercial"]}</span>
                  </span>
                )}
                {project.details?.["Salas de Espectáculos"] && (
                  <span className="pill inline-flex items-center gap-2 px-3 py-1 text-xs bg-white/10 border border-white/20 text-white backdrop-blur-[6px]">
                    <Layers size={14} />
                    <span>{project.details["Salas de Espectáculos"]}</span>
                  </span>
                )}
                {project.details?.["Anfiteatros"] && (
                  <span className="pill inline-flex items-center gap-2 px-3 py-1 text-xs bg-white/10 border border-white/20 text-white backdrop-blur-[6px]">
                    <Layers size={14} />
                    <span>{project.details["Anfiteatros"]}</span>
                  </span>
                )}
                {project.details?.["Plaza Interna"] && (
                  <span className="pill inline-flex items-center gap-2 px-3 py-1 text-xs bg-white/10 border border-white/20 text-white backdrop-blur-[6px]">
                    <Layers size={14} />
                    <span>{project.details["Plaza Interna"]}</span>
                  </span>
                )}
                {project.details?.["Gimnasio"] && (
                  <span className="pill inline-flex items-center gap-2 px-3 py-1 text-xs bg-white/10 border border-white/20 text-white backdrop-blur-[6px]">
                    <Layers size={14} />
                    <span>{project.details["Gimnasio"]}</span>
                  </span>
                )}
                {project.details?.["Espacio Cowork"] && (
                  <span className="pill inline-flex items-center gap-2 px-3 py-1 text-xs bg-white/10 border border-white/20 text-white backdrop-blur-[6px]">
                    <Layers size={14} />
                    <span>{project.details["Espacio Cowork"]}</span>
                  </span>
                )}
                {project.details?.["Equipo"] && (
                  <span className="pill inline-flex items-center gap-2 px-3 py-1 text-xs bg-white/10 border border-white/20 text-white backdrop-blur-[6px]">
                    <User size={14} />
                    <span>{project.details["Equipo"]}</span>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Info */}
      

      {/* Gallery full width without title */}
      <section className="px-4 sm:px-6 lg:px-8 mt-6 md:mt-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted cursor-pointer group"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Imagen ampliada del proyecto"
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-accent transition-colors duration-200"
            >
              <span className="sr-only">Cerrar</span>✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
