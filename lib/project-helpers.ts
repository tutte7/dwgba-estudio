import { ProjectData, addProject } from "./projects-data"

/**
 * Helper function para agregar un nuevo proyecto a la base de datos
 * 
 * @param categorySlug - El slug de la categoría (ej: "viviendas-unifamiliares")
 * @param projectData - Los datos completos del proyecto
 * 
 * Uso:
 * const newProject: ProjectData = {
 *   id: "casa-ejemplo",
 *   title: "Casa Ejemplo",
 *   category: "Viviendas Unifamiliares",
 *   year: "2024",
 *   location: "Buenos Aires, Argentina",
 *   area: "250 m²",
 *   status: "Completado",
 *   description: "Descripción del proyecto...",
 *   details: {
 *     Cliente: "Cliente Ejemplo",
 *     Programa: "Vivienda unifamiliar",
 *     // ... otros detalles
 *   },
 *   heroImage: "/proyecto-ejemplo/hero.webp",
 *   images: [
 *     { src: "/proyecto-ejemplo/img1.webp", alt: "Descripción imagen 1" },
 *     { src: "/proyecto-ejemplo/img2.webp", alt: "Descripción imagen 2" },
 *     // ... más imágenes
 *   ]
 * }
 * 
 * addNewProject("viviendas-unifamiliares", newProject)
 */
export function addNewProject(categorySlug: string, projectData: ProjectData): void {
  try {
    addProject(categorySlug, projectData)
    console.log(`✅ Proyecto '${projectData.title}' agregado exitosamente a la categoría '${categorySlug}'`)
  } catch (error) {
    console.error(`❌ Error agregando proyecto:`, error)
    throw error
  }
}

/**
 * Genera la estructura de datos base para un nuevo proyecto
 * Te ayuda a crear el objeto con todos los campos requeridos
 */
export function createProjectTemplate(id: string, title: string, category: string): Partial<ProjectData> {
  return {
    id,
    title,
    category,
    year: new Date().getFullYear().toString(),
    location: "",
    area: "",
    status: "En Construcción",
    description: "",
    details: {
      Cliente: "",
      Programa: "",
      Superficie: "",
      Año: new Date().getFullYear().toString(),
      Ubicación: "",
      Equipo: "dwgba • estudio",
    },
    heroImage: "",
    images: []
  }
}

/**
 * Valida que un proyecto tenga todos los campos requeridos
 */
export function validateProject(project: Partial<ProjectData>): project is ProjectData {
  const requiredFields: (keyof ProjectData)[] = [
    'id', 'title', 'category', 'year', 'location', 'area', 
    'status', 'description', 'details', 'heroImage', 'images'
  ]
  
  for (const field of requiredFields) {
    if (!project[field]) {
      console.error(`❌ Campo requerido faltante: ${field}`)
      return false
    }
  }
  
  return true
}

/**
 * Helper para generar rutas de imágenes basadas en el nombre del proyecto
 * 
 * @param projectId - ID del proyecto (ej: "casa-ejemplo")
 * @param imageCount - Cantidad de imágenes (por defecto 5)
 * @param imageExtension - Extensión de las imágenes (por defecto "webp")
 */
export function generateImagePaths(
  projectId: string, 
  imageCount: number = 5, 
  imageExtension: string = "webp"
): Array<{ src: string; alt: string }> {
  const images = []
  
  for (let i = 1; i <= imageCount; i++) {
    images.push({
      src: `/${projectId}/${projectId}-img-${i}.${imageExtension}`,
      alt: `${projectId} - Imagen ${i}`
    })
  }
  
  return images
}

/**
 * Genera el path de la imagen hero basado en el ID del proyecto
 */
export function generateHeroImagePath(projectId: string, imageExtension: string = "webp"): string {
  return `/${projectId}/${projectId}-hero.${imageExtension}`
}

// Ejemplo de uso:
/*
// 1. Crear template
const projectTemplate = createProjectTemplate(
  "casa-moderna-2024", 
  "Casa Moderna 2024", 
  "Viviendas Unifamiliares"
)

// 2. Completar datos
const newProject: ProjectData = {
  ...projectTemplate,
  location: "Nordelta, Buenos Aires",
  area: "280 m²",
  status: "Completado",
  description: "Una vivienda moderna que integra diseño contemporáneo con funcionalidad...",
  details: {
    ...projectTemplate.details!,
    Cliente: "Familia García",
    Programa: "Vivienda unifamiliar, 3 dormitorios",
    Superficie: "280 m² cubiertos + 120 m² semicubiertos",
    Ubicación: "Nordelta, Buenos Aires",
  },
  heroImage: generateHeroImagePath("casa-moderna-2024"),
  images: generateImagePaths("casa-moderna-2024", 6)
}

// 3. Validar y agregar
if (validateProject(newProject)) {
  addNewProject("viviendas-unifamiliares", newProject)
}
*/
