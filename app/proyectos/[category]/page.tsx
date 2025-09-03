import { Navigation } from "@/components/navigation"
import { CategoryListing } from "@/components/category-listing"
import { notFound } from "next/navigation"

// Sample projects data organized by category
const projectsData = {
  "publicos-urbanos": {
    title: "Proyectos Públicos y Urbanos",
    description: "Espacios públicos que transforman la ciudad y mejoran la calidad de vida urbana",
    projects: [
      {
        id: "centro-cultural-metropolitano",
        title: "Centro Cultural Metropolitano",
        year: "2023",
        location: "Buenos Aires",
        image: "/placeholder.svg?key=pub1",
        size: "large",
      },
      {
        id: "plaza-san-martin",
        title: "Renovación Plaza San Martín",
        year: "2022",
        location: "Córdoba",
        image: "/placeholder.svg?key=pub2",
        size: "medium",
      },
      {
        id: "biblioteca-municipal",
        title: "Biblioteca Municipal Norte",
        year: "2024",
        location: "Rosario",
        image: "/placeholder.svg?key=pub3",
        size: "medium",
      },
      {
        id: "mercado-central",
        title: "Mercado Central Renovado",
        year: "2023",
        location: "Mendoza",
        image: "/placeholder.svg?key=pub4",
        size: "small",
      },
      {
        id: "parque-lineal",
        title: "Parque Lineal Costanera",
        year: "2022",
        location: "La Plata",
        image: "/placeholder.svg?key=pub5",
        size: "small",
      },
      {
        id: "estacion-intermodal",
        title: "Estación Intermodal",
        year: "2024",
        location: "Tucumán",
        image: "/placeholder.svg?key=pub6",
        size: "large",
      },
    ],
  },
  desarrollos: {
    title: "Desarrollos",
    description: "Complejos residenciales y comerciales que redefinen el paisaje urbano",
    projects: [
      {
        id: "torres-del-rio",
        title: "Torres del Río",
        year: "2024",
        location: "Puerto Madero",
        image: "/placeholder.svg?key=dev1",
        size: "large",
      },
      {
        id: "complejo-nordelta",
        title: "Complejo Nordelta",
        year: "2023",
        location: "Tigre",
        image: "/placeholder.svg?key=dev2",
        size: "medium",
      },
      {
        id: "distrito-palermo",
        title: "Distrito Palermo",
        year: "2022",
        location: "Palermo",
        image: "/placeholder.svg?key=dev3",
        size: "medium",
      },
    ],
  },
  "viviendas-unifamiliares": {
    title: "Viviendas Unifamiliares",
    description: "Casas diseñadas para la vida moderna, integrando funcionalidad y belleza",
    projects: [
      {
        id: "casa-del-bosque",
        title: "Casa del Bosque",
        year: "2024",
        location: "Nordelta",
        image: "/placeholder.svg?key=viv1",
        size: "large",
      },
      {
        id: "casa-minimalista",
        title: "Casa Minimalista",
        year: "2023",
        location: "San Isidro",
        image: "/placeholder.svg?key=viv2",
        size: "medium",
      },
      {
        id: "casa-patio",
        title: "Casa Patio",
        year: "2022",
        location: "Belgrano",
        image: "/placeholder.svg?key=viv3",
        size: "medium",
      },
    ],
  },
  "corporativo-interiores": {
    title: "ARQ CORP - Diseño Interiores",
    description: "Espacios corporativos y diseño interior que potencian la productividad",
    projects: [
      {
        id: "oficinas-tech",
        title: "Oficinas Tech Hub",
        year: "2024",
        location: "Catalinas",
        image: "/placeholder.svg?key=corp1",
        size: "large",
      },
      {
        id: "showroom-automotriz",
        title: "Showroom Automotriz",
        year: "2023",
        location: "Recoleta",
        image: "/placeholder.svg?key=corp2",
        size: "medium",
      },
      {
        id: "restaurante-gourmet",
        title: "Restaurante Gourmet",
        year: "2022",
        location: "Las Cañitas",
        image: "/placeholder.svg?key=corp3",
        size: "medium",
      },
    ],
  },
}

interface CategoryPageProps {
  params: {
    category: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params

  const categoryData = projectsData[category as keyof typeof projectsData]

  if (!categoryData) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <CategoryListing
        category={category}
        title={categoryData.title}
        description={categoryData.description}
        projects={categoryData.projects}
      />
    </main>
  )
}

// Generate static params for known categories
export function generateStaticParams() {
  return Object.keys(projectsData).map((category) => ({
    category,
  }))
}
