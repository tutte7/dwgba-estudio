"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const categories = [
  {
    id: "publicos-urbanos",
    title: "Proyectos Públicos y Urbanos",
    image: "/portadas-proyectos/PROYECTOS PULICOS Y URBNOS .jpg",
    description: "Espacios públicos que transforman la ciudad",
  },
  {
    id: "desarrollos",
    title: "Desarrollos",
    image: "/portadas-proyectos/DESARROLLOS .png",
    description: "Complejos residenciales y comerciales",
  },
  {
    id: "viviendas-unifamiliares",
    title: "Viviendas Unifamiliares",
    image: "/portadas-proyectos/VIVIENDA.jpg",
    description: "Casas diseñadas para la vida moderna",
  },
  {
    id: "corporativos",
    title: "ARQ CORP",
    titleSuffix: "Diseño Interiores",
    image: "/portadas-proyectos/Arq corporatica, diseño de interiro y arq comercial .jpg",
    description: "Espacios corporativos y diseño interior",
  },
]

export function ProjectCategories() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background" id="proyectos">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="section-title mb-4 text-balance">
            Nuestros Proyectos
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={`/proyectos/${category.id}`}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] md:aspect-[3/2] bg-muted"
            >
              {/* Background Image */}
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              {/* Extra darken on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-60" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <div className="transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 tracking-tight text-balance">
                    {category.title}
                    {(category as any).titleSuffix && (
                      <>
                        {" "}
                        <span className="font-serif">•</span> {(category as any).titleSuffix}
                      </>
                    )}
                  </h3>

                  {/* Arrow Icon */}
                  <div className="flex items-center text-white gap-2">
                    {/* Rolling text like navbar */}
                    <span className="text-sm uppercase font-medium leading-none">
                      <span className="rolling-link">
                        <span className="rolling-text">
                          <span>Ver Proyectos</span>
                          <span>Ver Proyectos</span>
                        </span>
                      </span>
                    </span>
                    {/* Rolling arrow */}
                    <span className="leading-none">
                      <span className="rolling-link" aria-hidden="true">
                        <span className="rolling-text">
                          <span className="block">
                            <ArrowUpRight size={18} className="block h-[1em] w-[1em]" />
                          </span>
                          <span className="block">
                            <ArrowUpRight size={18} className="block h-[1em] w-[1em]" />
                          </span>
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
