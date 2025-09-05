import { ProjectDetail } from "@/components/project-detail"
import { notFound } from "next/navigation"
import { getProjectData, projectsDatabase } from "@/lib/projects-data"

interface ProjectPageProps {
  params: {
    category: string
    project: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { category, project } = params

  // Get project data from centralized database
  const projectData = getProjectData(category, project)
  
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

  for (const [category, categoryData] of Object.entries(projectsDatabase)) {
    for (const projectId of Object.keys(categoryData.projects)) {
      params.push({
        category,
        project: projectId,
      })
    }
  }

  return params
}
