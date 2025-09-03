import { ProjectDetail } from "@/components/project-detail"
import { notFound } from "next/navigation"

// Sample project data - in a real app this would come from a CMS or database
const projectsData = {
  "publicos-urbanos": {
    "centro-cultural-metropolitano": {
      id: "centro-cultural-metropolitano",
      title: "Centro Cultural Metropolitano",
      category: "Proyectos Públicos y Urbanos",
      year: "2023",
      location: "Buenos Aires, Argentina",
      area: "4,500 m²",
      status: "Completado",
      description:
        "Un espacio cultural que redefine la relación entre la arquitectura pública y la comunidad. El diseño integra espacios flexibles para exposiciones, teatro y actividades comunitarias, creando un nuevo punto de encuentro urbano.",
      details: {
        Cliente: "Gobierno de la Ciudad de Buenos Aires",
        Programa: "Centro Cultural, Biblioteca, Auditorio",
        Superficie: "4,500 m²",
        Año: "2023",
        Ubicación: "Barrio Norte, Buenos Aires",
        Equipo: "dwgba • estudio + Consultores Asociados",
      },
      heroImage: "/placeholder.svg?key=proj1",
      images: [
        { src: "/placeholder.svg?key=proj1a", alt: "Fachada principal del centro cultural" },
        { src: "/placeholder.svg?key=proj1b", alt: "Interior del auditorio principal" },
        { src: "/placeholder.svg?key=proj1c", alt: "Biblioteca con luz natural" },
        { src: "/placeholder.svg?key=proj1d", alt: "Plaza de acceso" },
        { src: "/placeholder.svg?key=proj1e", alt: "Detalle de fachada" },
        { src: "/placeholder.svg?key=proj1f", alt: "Espacio de exposiciones" },
      ],
    },
  },
  "viviendas-unifamiliares": {
    "casa-del-bosque": {
      id: "casa-del-bosque",
      title: "Casa del Bosque",
      category: "Viviendas Unifamiliares",
      year: "2024",
      location: "Nordelta, Buenos Aires",
      area: "320 m²",
      status: "En Construcción",
      description:
        "Una vivienda contemporánea que dialoga con su entorno natural. El diseño privilegia la conexión interior-exterior a través de grandes ventanales y espacios de transición que integran la arquitectura con el paisaje circundante.",
      details: {
        Cliente: "Familia Rodríguez",
        Programa: "Vivienda Unifamiliar, 4 dormitorios",
        Superficie: "320 m² cubiertos + 150 m² semicubiertos",
        Año: "2024",
        Ubicación: "Nordelta, Buenos Aires",
        Equipo: "dwgba • estudio",
      },
      heroImage: "/placeholder.svg?key=proj2",
      images: [
        { src: "/placeholder.svg?key=proj2a", alt: "Vista exterior de la casa" },
        { src: "/placeholder.svg?key=proj2b", alt: "Living integrado con cocina" },
        { src: "/placeholder.svg?key=proj2c", alt: "Dormitorio principal" },
        { src: "/placeholder.svg?key=proj2d", alt: "Terraza con vista al bosque" },
        { src: "/placeholder.svg?key=proj2e", alt: "Detalle de escalera" },
        { src: "/placeholder.svg?key=proj2f", alt: "Piscina y deck" },
      ],
    },
  },
}

interface ProjectPageProps {
  params: {
    category: string
    project: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { category, project } = params

  // Get project data
  const categoryData = projectsData[category as keyof typeof projectsData]
  if (!categoryData) {
    notFound()
  }

  const projectData = categoryData[project as keyof typeof categoryData]
  if (!projectData) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <ProjectDetail project={projectData} categorySlug={category} />
    </main>
  )
}

// Generate static params for known projects
export function generateStaticParams() {
  const params = []

  for (const [category, projects] of Object.entries(projectsData)) {
    for (const projectId of Object.keys(projects)) {
      params.push({
        category,
        project: projectId,
      })
    }
  }

  return params
}
