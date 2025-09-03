"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Filter, Map, Grid3X3 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  id: string
  title: string
  year: string
  location: string
  image: string
  size: "small" | "medium" | "large"
}

interface CategoryListingProps {
  category: string
  title: string
  description: string
  projects: Project[]
}

export function CategoryListing({ category, title, description, projects }: CategoryListingProps) {
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid")

  const getGridClasses = (size: string, index: number) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2"
      case "medium":
        return "md:col-span-1 md:row-span-1"
      case "small":
        return "md:col-span-1 md:row-span-1"
      default:
        return "md:col-span-1 md:row-span-1"
    }
  }

  return (
    <div className="pt-16 md:pt-20">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 md:py-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          {/* Back Navigation */}
          <Link
            href="/#proyectos"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200 mb-6"
          >
            <ArrowLeft size={20} className="mr-2" />
            <span className="text-sm uppercase">Volver a Proyectos</span>
          </Link>

          {/* Title */}
          <div className="flex-1">
            <h1 className="section-title-sm mb-4 text-balance">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid - simple 3x2 gallery like reference */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/proyectos/${category}/${project.id}`}
                className="group relative block overflow-hidden bg-muted"
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-60" />
                <div className="absolute top-3 left-3 md:top-4 md:left-4 text-white font-medium text-lg md:text-xl opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {project.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
