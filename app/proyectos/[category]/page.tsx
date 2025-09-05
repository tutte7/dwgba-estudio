import { Navigation } from "@/components/navigation"
import { CategoryListing } from "@/components/category-listing"
import { notFound } from "next/navigation"
import { getCategoryData, projectsDatabase } from "@/lib/projects-data"

interface CategoryPageProps {
  params: {
    category: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params

  const categoryData = getCategoryData(category)

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
  return Object.keys(projectsDatabase).map((category) => ({
    category,
  }))
}
