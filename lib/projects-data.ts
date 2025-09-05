// Tipos de datos para proyectos
export interface ProjectImage {
  src: string
  alt: string
}

export interface ProjectData {
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

// Interfaz que coincide con la del componente CategoryListing
export interface Project {
  id: string
  title: string
  year: string
  location: string
  image: string
  size: "small" | "medium" | "large"
}

export interface CategoryData {
  title: string
  description: string
  projects: Project[]
}

export interface ProjectsDatabase {
  [categorySlug: string]: {
    info: CategoryData
    projects: { [projectId: string]: ProjectData }
  }
}

// Base de datos de proyectos organizada por categorías
export const projectsDatabase: ProjectsDatabase = {
  "publicos-urbanos": {
    info: {
      title: "Proyectos Públicos y Urbanos",
      description: "Espacios públicos que transforman la ciudad y mejoran la calidad de vida urbana",
      projects: [
        {
          id: "centro-convenciones-buenos-aires",
          title: "Centro de Convenciones de Buenos Aires",
          year: "2016",
          location: "Recoleta",
          image: "/proyecto20/1.jpg",
          size: "large" as const,
        },
        {
          id: "biblioteca-la-villa",
          title: "Biblioteca de La Villa",
          year: "2021",
          location: "Madrid",
          image: "/proyecto18/portada.jpg",
          size: "medium" as const,
        },
        {
          id: "estadio-boca-juniors",
          title: "Estadio Alberto J Armando - Boca Juniors",
          year: "2015",
          location: "La Boca",
          image: "/proyecto10/portada.jpg",
          size: "large" as const,
        },
        {
          id: "museo-arqueologia-chichen-itza",
          title: "Museo de Arqueología",
          year: "2010",
          location: "Chichen Itza",
          image: "/proyecto9/portada.jpg",
          size: "large" as const,
        },
        {
          id: "parque-tecnologico-tandil",
          title: "Parque Tecnológico Tandil",
          year: "2011",
          location: "Tandil",
          image: "/proyecto4/portada.jpg",
          size: "large" as const,
        },
        {
          id: "consejo-arquitectos-capba-iv",
          title: "Consejo de arquitectos - CAPBA IV",
          year: "2012",
          location: "San Martín",
          image: "/proyecto3/portada.jpg",
          size: "medium" as const,
        },
        {
          id: "centro-comercial-merlo",
          title: "Centro Comercial Merlo",
          year: "2024",
          location: "Merlo",
          image: "/proyecto1/proy-1-img-1.webp",
          size: "large" as const,
        },
        {
          id: "centro-cultural-metropolitano",
          title: "Centro Cultural Metropolitano",
          year: "2023",
          location: "Buenos Aires",
          image: "/placeholder.svg?key=pub1",
          size: "large" as const,
        },
        {
          id: "plaza-san-martin",
          title: "Renovación Plaza San Martín",
          year: "2022",
          location: "Córdoba",
          image: "/placeholder.svg?key=pub2",
          size: "medium" as const,
        },
        {
          id: "biblioteca-municipal",
          title: "Biblioteca Municipal Norte",
          year: "2024",
          location: "Rosario",
          image: "/placeholder.svg?key=pub3",
          size: "medium" as const,
        },
        {
          id: "mercado-central",
          title: "Mercado Central Renovado",
          year: "2023",
          location: "Mendoza",
          image: "/placeholder.svg?key=pub4",
          size: "small" as const,
        },
        {
          id: "parque-lineal",
          title: "Parque Lineal Costanera",
          year: "2022",
          location: "La Plata",
          image: "/placeholder.svg?key=pub5",
          size: "small" as const,
        },
        {
          id: "estacion-intermodal",
          title: "Estación Intermodal",
          year: "2024",
          location: "Tucumán",
          image: "/placeholder.svg?key=pub6",
          size: "large" as const,
        },
      ],
    },
    projects: {
      "centro-convenciones-buenos-aires": {
        id: "centro-convenciones-buenos-aires",
        title: "Centro de Convenciones de Buenos Aires",
        category: "Proyectos Públicos y Urbanos",
        year: "2016",
        location: "Recoleta, CABA",
        area: "11,400 m²",
        status: "Concurso",
        description:
          "Propuesta de concurso para un centro de convenciones en el barrio de Recoleta. El diseño busca crear un espacio versátil para eventos corporativos y culturales, integrándose al perfil urbano de uno de los barrios más emblemáticos de Buenos Aires.",
        details: {
          Cliente: "Gobierno de la Ciudad de Buenos Aires",
          "Concurso": "Concurso",
          Superficie: "11,400 m²",
          Año: "2016",
          Ubicación: "Recoleta, CABA",
          Equipo: "dwgba • estudio",
        },
        heroImage: "/proyecto20/1.jpg",
        images: [
          { src: "/proyecto20/1.jpg", alt: "Vista exterior del Centro de Convenciones" },
          { src: "/proyecto20/2 copia.jpg", alt: "Espacios interiores para eventos" },
          { src: "/proyecto20/3.jpg", alt: "Integración urbana en Recoleta" },
        ],
      },
      "biblioteca-la-villa": {
        id: "biblioteca-la-villa",
        title: "Biblioteca de La Villa",
        category: "Proyectos Públicos y Urbanos",
        year: "2021",
        location: "Madrid, España",
        area: "N/A",
        status: "Concurso",
        description:
          "Propuesta de concurso para una biblioteca pública en Madrid. El diseño busca crear un espacio cultural que fomente el encuentro comunitario y el acceso democrático al conocimiento, integrándose armónicamente al tejido urbano madrileño.",
        details: {
          Cliente: "Ayuntamiento de Madrid",
          "Concurso": "Concurso",
          Año: "2021",
          Ubicación: "Madrid, España",
          Equipo: "dwgba • estudio",
        },
        heroImage: "/proyecto18/portada.jpg",
        images: [
          { src: "/proyecto18/portada.jpg", alt: "Vista exterior de la Biblioteca de La Villa" },
          { src: "/proyecto18/img1.jpg", alt: "Espacios de lectura y estudio" },
          { src: "/proyecto18/img2.jpg", alt: "Integración urbana en Madrid" },
        ],
      },
      "estadio-boca-juniors": {
        id: "estadio-boca-juniors",
        title: "Estadio Alberto J Armando - Boca Juniors",
        category: "Proyectos Públicos y Urbanos",
        year: "2015",
        location: "La Boca, CABA",
        area: "45,000 m²",
        status: "Concurso",
        description:
          "Propuesta de concurso para la renovación y ampliación del emblemático estadio de Boca Juniors. El proyecto incluye investigación proyectual para optimizar la experiencia del espectador mientras respeta la identidad histórica del club y su integración urbana en el barrio de La Boca.",
        details: {
          Cliente: "Club Atlético Boca Juniors",
          "Concurso": "Concurso",
          "Investigación Proyectual": "Investigación Proyectual",
          Superficie: "45,000 m²",
          Año: "2015",
          Ubicación: "La Boca, CABA",
          Equipo: "dwgba • estudio",
        },
        heroImage: "/proyecto10/portada.jpg",
        images: [
          { src: "/proyecto10/portada.jpg", alt: "Vista exterior del Estadio Alberto J Armando" },
          { src: "/proyecto10/img1.jpg", alt: "Propuesta de renovación arquitectónica" },
          { src: "/proyecto10/img2.jpg", alt: "Integración urbana en La Boca" },
          { src: "/proyecto10/img3.jpg", alt: "Estudios de capacidad y flujos" },
        ],
      },
      "museo-arqueologia-chichen-itza": {
        id: "museo-arqueologia-chichen-itza",
        title: "Museo de Arqueología",
        category: "Proyectos Públicos y Urbanos",
        year: "2010",
        location: "Chichen Itza, México",
        area: "6,300 m²",
        status: "Concurso",
        description:
          "Propuesta de concurso para un museo de arqueología en el sitio patrimonial de Chichen Itza. El diseño respeta y dialoga con el entorno arqueológico, integrando espacios expositivos que realzan la riqueza cultural maya en un contexto contemporáneo.",
        details: {
          Cliente: "Concurso Internacional",
          "Concurso": "Concurso",
          Superficie: "6,300 m²",
          Año: "2010",
          Ubicación: "Chichen Itza, México",
          Equipo: "dwgba • estudio",
        },
        heroImage: "/proyecto9/portada.jpg",
        images: [
          { src: "/proyecto9/portada.jpg", alt: "Vista exterior del Museo de Arqueología" },
          { src: "/proyecto9/img1.jpg", alt: "Integración con el sitio arqueológico" },
          { src: "/proyecto9/img2.jpg", alt: "Espacios expositivos interiores" },
          { src: "/proyecto9/img3.jpg", alt: "Perspectiva del conjunto museográfico" },
        ],
      },
      "parque-tecnologico-tandil": {
        id: "parque-tecnologico-tandil",
        title: "Parque Tecnológico Tandil",
        category: "Proyectos Públicos y Urbanos",
        year: "2011",
        location: "Tandil, Provincia de Buenos Aires",
        area: "11,000 m²",
        status: "Completado",
        description:
          "Un complejo tecnológico que integra oficinas y espacios de desarrollo corporativo en un entorno innovador. El diseño fomenta la colaboración entre empresas tecnológicas y startups, creando un ecosistema de innovación en Tandil.",
        details: {
          Cliente: "Parque Tecnológico Tandil",
          "Oficinas": "Oficinas",
          "Espacios de Desarrollo Corporativo": "Espacios de desarrollo corporativo",
          Superficie: "11,000 m²",
          Año: "2011",
          Ubicación: "Tandil, Provincia de Buenos Aires",
          Equipo: "dwgba • estudio",
        },
        heroImage: "/proyecto4/portada.jpg",
        images: [
          { src: "/proyecto4/portada.jpg", alt: "Vista exterior del Parque Tecnológico" },
          { src: "/proyecto4/img1.webp", alt: "Espacios de oficinas corporativas" },
          { src: "/proyecto4/img2.webp", alt: "Áreas de desarrollo e innovación" },
          { src: "/proyecto4/img3.webp", alt: "Espacios colaborativos" },
        ],
      },
      "consejo-arquitectos-capba-iv": {
        id: "consejo-arquitectos-capba-iv",
        title: "Consejo de arquitectos - CAPBA IV",
        category: "Proyectos Públicos y Urbanos",
        year: "2012",
        location: "San Martín, Provincia de Buenos Aires",
        area: "650 m²",
        status: "Completado",
        description:
          "Sede institucional del Consejo de Arquitectos de la Provincia de Buenos Aires IV. El diseño arquitectónico refleja la importancia de la institución profesional, integrando espacios de oficinas y áreas institucionales que fomentan el encuentro y la actividad profesional de los arquitectos de la región.",
        details: {
          Cliente: "Consejo de Arquitectos - CAPBA IV",
          "Oficinas": "Oficinas",
          "Espacio Institucional": "Espacio institucional",
          Superficie: "650 m²",
          Año: "2012",
          Ubicación: "San Martín, Provincia de Buenos Aires",
          Equipo: "dwgba • estudio",
        },
        heroImage: "/proyecto3/portada.jpg",
        images: [
          { src: "/proyecto3/portada.jpg", alt: "Fachada principal del Consejo de Arquitectos" },
          { src: "/proyecto3/img1.jpg", alt: "Espacios de oficinas institucionales" },
          { src: "/proyecto3/img2.jpg", alt: "Área de reuniones y eventos" },
          { src: "/proyecto3/img3.jpg", alt: "Interior institucional" },
        ],
      },
      "centro-comercial-merlo": {
        id: "centro-comercial-merlo",
        title: "Centro Comercial Merlo",
        category: "Proyectos Públicos y Urbanos",
        year: "2024",
        location: "Merlo, Buenos Aires",
        area: "8,500 m²",
        status: "Completado",
        description:
          "Un complejo comercial multifuncional que integra comercio, entretenimiento y espacios comunitarios. El diseño incluye salas de espectáculos, anfiteatros, una plaza interna, gimnasio y espacios de cowork, creando un nuevo polo de actividad urbana en Merlo.",
        details: {
          Cliente: "Municipalidad de Merlo",
          "Centro Comercial": "Centro comercial",
          "Salas de Espectáculos": "Salas de espectáculos", 
          "Anfiteatros": "Anfiteatros",
          "Plaza Interna": "Plaza interna",
          "Gimnasio": "Gimnasio",
          "Espacio Cowork": "Espacio cowork",
          Ubicación: "Merlo, Buenos Aires",
          Equipo: "dwgba • estudio",
        },
        heroImage: "/proyecto1/proy-1-img-1.webp",
        images: [
          { src: "/proyecto1/proy-1-img-1.webp", alt: "Vista exterior del centro comercial" },
          { src: "/proyecto1/proy-1-img-2.webp", alt: "Plaza interna con anfiteatro" },
          { src: "/proyecto1/proy-1-img-3.webp", alt: "Salas de espectáculos y entretenimiento" },
          { src: "/proyecto1/proy-1-img-4.webp", alt: "Área de gimnasio y cowork" },
        ],
      },
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
  },
  desarrollos: {
    info: {
      title: "Desarrollos",
      description: "Complejos residenciales y comerciales que redefinen el paisaje urbano",
      projects: [
        {
          id: "torres-del-rio",
          title: "Torres del Río",
          year: "2024",
          location: "Puerto Madero",
          image: "/placeholder.svg?key=dev1",
          size: "large" as const,
        },
        {
          id: "complejo-nordelta",
          title: "Complejo Nordelta",
          year: "2023",
          location: "Tigre",
          image: "/placeholder.svg?key=dev2",
          size: "medium" as const,
        },
        {
          id: "distrito-palermo",
          title: "Distrito Palermo",
          year: "2022",
          location: "Palermo",
          image: "/placeholder.svg?key=dev3",
          size: "medium" as const,
        },
      ],
    },
    projects: {},
  },
  "viviendas-unifamiliares": {
    info: {
      title: "Viviendas Unifamiliares",
      description: "Casas diseñadas para la vida moderna, integrando funcionalidad y belleza",
      projects: [
        {
          id: "casa-del-bosque",
          title: "Casa del Bosque",
          year: "2024",
          location: "Nordelta",
          image: "/placeholder.svg?key=viv1",
          size: "large" as const,
        },
        {
          id: "casa-moderna-belgrano",
          title: "Casa Moderna Belgrano",
          year: "2023",
          location: "Belgrano",
          image: "/placeholder.svg?key=viv2",
          size: "medium" as const,
        },
        {
          id: "casa-minimalista",
          title: "Casa Minimalista",
          year: "2022",
          location: "San Isidro",
          image: "/placeholder.svg?key=viv3",
          size: "medium" as const,
        },
      ],
    },
    projects: {
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
  },
  corporativos: {
    info: {
      title: "ARQ CORP - Diseño Interiores",
      description: "Espacios corporativos y diseño interior que potencian la productividad",
      projects: [
        {
          id: "oficinas-tech",
          title: "Oficinas Tech Hub",
          year: "2024",
          location: "Catalinas",
          image: "/placeholder.svg?key=corp1",
          size: "large" as const,
        },
        {
          id: "showroom-automotriz",
          title: "Showroom Automotriz",
          year: "2023",
          location: "Recoleta",
          image: "/placeholder.svg?key=corp2",
          size: "medium" as const,
        },
        {
          id: "restaurante-gourmet",
          title: "Restaurante Gourmet",
          year: "2022",
          location: "Las Cañitas",
          image: "/placeholder.svg?key=corp3",
          size: "medium" as const,
        },
      ],
    },
    projects: {},
  },
}

// Funciones de utilidad para acceder a los datos
export function getCategoryData(categorySlug: string): CategoryData | null {
  const category = projectsDatabase[categorySlug]
  return category ? category.info : null
}

export function getProjectData(categorySlug: string, projectId: string): ProjectData | null {
  const category = projectsDatabase[categorySlug]
  return category?.projects[projectId] || null
}

export function getAllCategories(): Array<{ slug: string; data: CategoryData }> {
  return Object.entries(projectsDatabase).map(([slug, category]) => ({
    slug,
    data: category.info,
  }))
}

export function addProject(categorySlug: string, projectData: ProjectData): void {
  if (!projectsDatabase[categorySlug]) {
    throw new Error(`Category '${categorySlug}' does not exist`)
  }
  
  projectsDatabase[categorySlug].projects[projectData.id] = projectData
  
  // También agregar a la lista de proyectos de la categoría si no existe
  const categoryInfo = projectsDatabase[categorySlug].info
  const existingProject = categoryInfo.projects.find(p => p.id === projectData.id)
  
  if (!existingProject) {
    categoryInfo.projects.push({
      id: projectData.id,
      title: projectData.title,
      year: projectData.year,
      location: projectData.location,
      image: projectData.heroImage,
      size: "medium" as const, // valor por defecto
    })
  }
}
