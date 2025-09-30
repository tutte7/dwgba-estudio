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
          id: "mercado-publico-casablanca",
          title: "Mercado publico",
          year: "2016",
          location: "Casablanca",
          image: "/proyecto23/portada.jpg",
          size: "large" as const,
        },
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
          image: "/proyecto1/proy-1-img-4.webp",
          size: "large" as const,
        },
        {
          id: "parque-civico",
          title: "Parque civico",
          year: "2008",
          location: "Barracas, CABA",
          image: "/proyecto24/portada.jpg",
          size: "medium" as const,
        },
        {
          id: "parque-ferroviario-liniers",
          title: "Parque Ferroviario Liniers",
          year: "2012",
          location: "Liniers, CABA",
          image: "/proyecto25/portada.jpg",
          size: "large" as const,
        },
        {
          id: "parque-ferroviario-palermo",
          title: "Parque Ferroviario Palermo",
          year: "2011",
          location: "Liniers, CABA",
          image: "/proyecto26/portada.jpg",
          size: "medium" as const,
        },
        {
          id: "parque-ferroviario-caballito",
          title: "Parque Ferroviario Caballito",
          year: "2013",
          location: "Liniers, CABA",
          image: "/proyecto25/img1.jpg",
          size: "large" as const,
        },
        {
          id: "rascacielos-la-paz",
          title: "Rascacielos, La paz",
          year: "2011",
          location: "La Paz, Bolivia",
          image: "/proyecto28/portada.jpg",
          size: "large" as const,
        },
        {
          id: "skyscrapper-rio-de-la-plata",
          title: "Skyscrapper Rio de la Plata",
          year: "2006",
          location: "Buenos Aires",
          image: "/proyecto29/portada.jpg",
          size: "large" as const,
        },
        {
          id: "oasis-urbano-santa-fe",
          title: "Oasis urbano Santa Fe",
          year: "2012",
          location: "Santa fe 5111, CABA",
          image: "/proyecto34/acceso-santa-fe.jpg",
          size: "small" as const,
        },
        {
          id: "museo-arte-moderno-buenos-aires",
          title: "Museo de arte Moderno de Buenos Aires",
          year: "2012",
          location: "Puerto madero, CABA",
          image: "/proyecto39/portada.jpg",
          size: "large" as const,
        },
        {
          id: "parque-tecnologico-la-matanza",
          title: "Parque tecnologico La matanza",
          year: "2014",
          location: "La matanza, provincia de baires",
          image: "/proyecto42/portada.jpg",
          size: "medium" as const,
        }
      ],
    },
    projects: {
      "mercado-publico-casablanca": {
        id: "mercado-publico-casablanca",
        title: "Mercado publico",
        category: "Proyectos Públicos y Urbanos",
        year: "2016",
        location: "Casablanca, Marruecos",
        area: "12,360 m²",
        status: "Completado",
        description:
          "Un mercado público que combina espacios comerciales tradicionales con una plaza pública contemporánea. El diseño respeta las tradiciones comerciales locales mientras crea un nuevo espacio de encuentro comunitario en el corazón de Casablanca.",
        details: {
          Cliente: "Municipalidad de Casablanca",
          "Espacio Comercial": "Espacio comercial",
          "Plaza Publica": "Plaza publica",
          Superficie: "12,360 m²",
          Año: "2016",
          Ubicación: "Casablanca, Marruecos",
          Equipo: "dwgba • estudio",
        },
        heroImage: "/proyecto23/portada.jpg",
        images: [
          { src: "/proyecto23/portada.jpg", alt: "Vista exterior del Mercado público" },
          { src: "/proyecto23/F1.jpg", alt: "Espacios comerciales interiores" },
          { src: "/proyecto23/F4.jpg", alt: "Plaza pública integrada" },
          { src: "/proyecto23/F6.jpg", alt: "Actividad comercial y social" },
        ],
      },
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
        heroImage: "/proyecto1/proy-1-img-4.webp",
        images: [
          { src: "/proyecto1/proy-1-img-1.webp", alt: "Vista exterior del centro comercial" },
          { src: "/proyecto1/proy-1-img-2.webp", alt: "Plaza interna con anfiteatro" },
          { src: "/proyecto1/proy-1-img-3.webp", alt: "Salas de espectáculos y entretenimiento" },
          { src: "/proyecto1/proy-1-img-4.webp", alt: "Área de gimnasio y cowork" },
        ],
      },
      "parque-civico": {
        id: "parque-civico",
        title: "Parque civico",
        category: "Proyectos Públicos y Urbanos",
        year: "2008",
        location: "Barracas, CABA",
        area: "23,500 m²",
        status: "Completado",
        description:
          "Un complejo gubernamental integrado con espacios públicos que combina oficinas administrativas con una plaza pública. El proyecto busca crear un nuevo centro cívico que fortalezca la relación entre la administración pública y la comunidad.",
        details: {
          Cliente: "Gobierno de la Ciudad de Buenos Aires",
          "Oficinas Gubernamentales": "Oficinas gubernamentales",
          "Plaza Publica": "Plaza publica",
          Superficie: "23,500 m²",
          Año: "2008",
          Ubicación: "Barracas, CABA",
          Equipo: "dwgba • estudio",
        },
        heroImage: "/proyecto24/portada.jpg",
        images: [
          { src: "/proyecto24/img1.jpg", alt: "Vista general del parque cívico" },
          { src: "/proyecto24/img2.jpg", alt: "Oficinas gubernamentales" },
          { src: "/proyecto24/img3.jpg", alt: "Plaza pública integrada" },
          { src: "/proyecto24/portada.jpg", alt: "Conjunto arquitectónico" },
        ],
      },
      "parque-ferroviario-liniers": {
        id: "parque-ferroviario-liniers",
        title: "Parque Ferroviario Liniers",
        category: "Proyectos Públicos y Urbanos",
        year: "2012",
        location: "Liniers, CABA",
        area: "14,300 m²",
        status: "Completado",
        description:
          "Un proyecto de transformación urbana que convierte una antigua estación ferroviaria en un complejo de uso mixto. Combina viviendas multifamiliares, espacios comerciales y una plaza pública, creando un nuevo corazón urbano para el barrio de Liniers.",
        details: {
          Cliente: "Gobierno de la Ciudad de Buenos Aires",
          "Viviendas Multifamiliares": "Viviendas multifamiliares",
          Comercio: "Comercio",
          "Plaza Publica": "Plaza publica",
          Superficie: "14,300 m²",
          Año: "2012",
          Ubicación: "Liniers, CABA",
          Equipo: "dwgba • estudio",
        },
        heroImage: "/proyecto25/portada.jpg",
        images: [
          { src: "/proyecto25/img1.jpg", alt: "Vista general del parque ferroviario" },
          { src: "/proyecto25/5.jpg", alt: "Viviendas multifamiliares" },
          { src: "/proyecto25/6.jpg", alt: "Espacios comerciales integrados" },
          { src: "/proyecto25/portada.jpg", alt: "Plaza pública y conjunto urbano" },
        ],
      },
      "parque-ferroviario-palermo": {
        id: "parque-ferroviario-palermo",
        title: "Parque Ferroviario Palermo",
        category: "Proyectos Públicos y Urbanos",
        year: "2011",
        location: "Liniers, CABA",
        area: "11,400 m²",
        status: "Completado",
        description:
          "Un proyecto de renovación urbana que transforma una antigua infraestructura ferroviaria en un moderno complejo de uso mixto. El diseño integra viviendas multifamiliares, espacios comerciales y una plaza pública, generando un nuevo polo de desarrollo urbano.",
        details: {
          Cliente: "Gobierno de la Ciudad de Buenos Aires",
          "Viviendas Multifamiliares": "Viviendas multifamiliares",
          Comercio: "Comercio",
          "Plaza Publica": "Plaza publica",
          Superficie: "11,400 m²",
          Año: "2011",
          Ubicación: "Liniers, CABA",
          Equipo: "dwgba • estudio",
        },
        heroImage: "/proyecto26/portada.jpg",
        images: [
          { src: "/proyecto26/img1.jpg", alt: "Vista general del parque ferroviario Palermo" },
          { src: "/proyecto26/img2.jpg", alt: "Viviendas multifamiliares integradas" },
          { src: "/proyecto26/img3.jpg", alt: "Espacios comerciales y plaza pública" },
          { src: "/proyecto26/portada.jpg", alt: "Conjunto urbano completo" },
        ],
      },
      "parque-ferroviario-caballito": {
        id: "parque-ferroviario-caballito",
        title: "Parque Ferroviario Caballito",
        category: "Proyectos Públicos y Urbanos",
        year: "2013",
        location: "Liniers, CABA",
        area: "17,340 m²",
        status: "Completado",
        description:
          "Un ambicioso proyecto de transformación urbana que convierte una antigua estación ferroviaria en un complejo integral de uso mixto. El diseño integra viviendas multifamiliares, espacios comerciales y una amplia plaza pública, estableciendo un nuevo paradigma de desarrollo urbano sostenible.",
        details: {
          Cliente: "Gobierno de la Ciudad de Buenos Aires",
          "Viviendas Multifamiliares": "Viviendas multifamiliares",
          Comercio: "Comercio",
          "Plaza Publica": "Plaza publica",
          Superficie: "17,340 m²",
          Año: "2013",
          Ubicación: "Liniers, CABA",
          Equipo: "dwgba • estudio",
        },
        heroImage: "/proyecto25/img1.jpg",
        images: [
          { src: "/proyecto25/portada.jpg", alt: "Vista general del parque ferroviario Caballito" },
          { src: "/proyecto25/5.jpg", alt: "Viviendas multifamiliares de gran escala" },
          { src: "/proyecto25/6.jpg", alt: "Espacios comerciales y áreas públicas" },
          { src: "/proyecto25/img1.jpg", alt: "Conjunto urbano integral" },
        ],
      },
      "rascacielos-la-paz": {
        id: "rascacielos-la-paz",
        title: "Rascacielos, La paz",
        category: "Proyectos Públicos y Urbanos",
        year: "2011",
        location: "La Paz, Bolivia",
        area: "42,500 m²",
        status: "Concurso",
        description:
          "Un proyecto de gran escala que combina un rascacielos residencial con espacios comerciales y una plaza pública en el corazón de La Paz. El diseño responde a las condiciones topográficas únicas de la ciudad y busca crear un nuevo hito urbano que integre vivienda, comercio y espacio público.",
        details: {
          Cliente: "Concurso Internacional",
          "Viviendas Multifamiliares": "Viviendas multifamiliares",
          Comercio: "Comercio",
          "Plaza Publica": "Plaza publica",
          Concurso: "Concurso",
          Superficie: "42,500 m²",
          Año: "2011",
          Ubicación: "La Paz, Bolivia",
          Equipo: "dwgba • estudio",
        },
        heroImage: "/proyecto28/final1.jpg",
        images: [
          { src: "/proyecto28/0897-1.jpg", alt: "Vista aérea del rascacielos La Paz" },
          { src: "/proyecto28/portada.jpg", alt: "Detalle arquitectónico del rascacielos" },
        ],
      },
      "skyscrapper-rio-de-la-plata": {
        id: "skyscrapper-rio-de-la-plata",
        title: "Skyscrapper Rio de la Plata",
        category: "Proyectos Públicos y Urbanos",
        year: "2006",
        location: "Buenos Aires",
        area: "53,700 m²",
        status: "Concurso",
        description:
          "Un proyecto emblemático de rascacielos que busca redefinir el skyline de Buenos Aires con un diseño innovador que integra viviendas multifamiliares, espacios comerciales y una plaza pública. El proyecto responde a la necesidad de densificación urbana sostenible en la capital argentina.",
        details: {
          Cliente: "Concurso Internacional",
          "Viviendas Multifamiliares": "Viviendas multifamiliares",
          Comercio: "Comercio",
          "Plaza Publica": "Plaza publica",
          Concurso: "Concurso",
          Superficie: "53,700 m²",
          Año: "2006",
          Ubicación: "Buenos Aires",
          Equipo: "dwgba • estudio",
        },
        heroImage: "/proyecto29/portada.jpg",
        images: [
          { src: "/proyecto29/portada.jpg", alt: "Vista general del Skyscrapper Rio de la Plata" },
          { src: "/proyecto29/sky10.jpg", alt: "Perspectiva urbana del rascacielos" },
        ],
      },
      "oasis-urbano-santa-fe": {
        id: "oasis-urbano-santa-fe",
        title: "Oasis urbano Santa Fe",
        category: "Proyectos Públicos y Urbanos",
        year: "2012",
        location: "Santa Fe 5111, CABA",
        area: "430 m²",
        status: "Completado",
        description:
          "Un pequeño oasis urbano que transforma un espacio residual en una plaza pública de barrio. El proyecto demuestra cómo intervenciones de pequeña escala pueden generar un gran impacto en la calidad de vida urbana, creando un nuevo punto de encuentro comunitario.",
        details: {
          Cliente: "Gobierno de la Ciudad de Buenos Aires",
          "Plaza Publica": "Plaza publica",
          Superficie: "430 m²",
          Año: "2012",
          Ubicación: "Santa fe 5111, CABA",
          Equipo: "dwgba • estudio",
        },
        heroImage: "/proyecto34/acceso-santa-fe.jpg",
        images: [
          { src: "/proyecto34/portada.jpg", alt: "Vista general del oasis urbano" },
          { src: "/proyecto34/acceso-santa-fe.jpg", alt: "Acceso desde Santa Fe" },
          { src: "/proyecto34/aerea.jpg", alt: "Vista aérea del proyecto" },
        ],
      },
      "museo-arte-moderno-buenos-aires": {
        id: "museo-arte-moderno-buenos-aires",
        title: "Museo de arte Moderno de Buenos Aires",
        category: "Proyectos Públicos y Urbanos",
        year: "2012",
        location: "Puerto madero, CABA",
        area: "25,650 m²",
        status: "Completado",
        description:
          "Un museo de arte contemporáneo que redefine el paisaje cultural de Puerto Madero. El diseño integra espacios expositivos de gran flexibilidad con una plaza pública que conecta el museo con la trama urbana, creando un nuevo polo cultural en el waterfront porteño.",
        details: {
          Cliente: "Gobierno de la Ciudad de Buenos Aires",
          "Plaza Publica": "Plaza publica",
          Superficie: "25,650 m²",
          Año: "2012",
          Ubicación: "Puerto madero, CABA",
          Equipo: "dwgba • estudio",
        },
        heroImage: "/proyecto39/portada.jpg",
        images: [
          { src: "/proyecto39/portada.jpg", alt: "Vista general del Museo de Arte Moderno" },
          { src: "/proyecto39/img1.jpg", alt: "Fachada principal del museo" },
          { src: "/proyecto39/img2.jpg", alt: "Plaza pública integrada" },
        ],
      },
      "parque-tecnologico-la-matanza": {
        id: "parque-tecnologico-la-matanza",
        title: "Parque tecnologico La matanza",
        category: "Proyectos Públicos y Urbanos",
        year: "2014",
        location: "La matanza, provincia de baires",
        area: "10,160 m²",
        status: "Concurso",
        description:
          "Un parque tecnológico que busca impulsar la innovación y el desarrollo tecnológico en La Matanza. El proyecto integra espacios de trabajo colaborativo, laboratorios de investigación y áreas de incubación de empresas, creando un ecosistema que favorece el emprendimiento y la transferencia de conocimiento.",
        details: {
          Cliente: "Concurso Provincial",
          Concurso: "Concurso",
          Superficie: "10,160 m²",
          Año: "2014",
          Ubicación: "La matanza, provincia de baires",
          Equipo: "dwgba • estudio",
        },
        heroImage: "/proyecto42/portada.jpg",
        images: [
          { src: "/proyecto42/portada.jpg", alt: "Vista general del parque tecnológico" },
          { src: "/proyecto42/img1.jpg", alt: "Espacios de innovación y trabajo colaborativo" },
          { src: "/proyecto42/img2.jpg", alt: "Laboratorios de investigación" },
          { src: "/proyecto42/img3.jpg", alt: "Áreas de incubación de empresas" },
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
          id: "vivienda-soler-3333",
          title: "Vivienda Soler 3333",
          year: "2016",
          location: "Recoleta, CABA",
          image: "/proyecto5/portada.jpg",
          size: "medium" as const,
        },
        {
          id: "vivienda-cordoba-3113",
          title: "Vivienda Córdoba 3113",
          year: "2023",
          location: "Barrio Norte, CABA",
          image: "/proyecto12/Estar Unidad A 2 a 6 Camara 1.png",
          size: "large" as const,
        },
        {
          id: "edificio-armenia-2387",
          title: "Edificio Armenia 2387",
          year: "2015",
          location: "Palermo, CABA",
          image: "/proyecto13/portada.jpg",
          size: "medium" as const,
        },
        {
          id: "proyecto-oro-2476",
          title: "Proyecto Oro 2476",
          year: "2025",
          location: "Palermo, CABA",
          image: "/proyecto14/portada.png",
          size: "medium" as const,
        },
        {
          id: "proyecto-la-pampa-1575",
          title: "Proyecto La Pampa 1575",
          year: "2024",
          location: "Belgrano, CABA",
          image: "/proyecto15/20.jpg",
          size: "large" as const,
        },
        {
          id: "edificio-m1",
          title: "Edificio M1",
          year: "2018",
          location: "Once, Bs as",
          image: "/proyecto16/01 Final.jpg",
          size: "medium" as const,
        },
        {
          id: "edificio-s1",
          title: "Edificio S1",
          year: "2012",
          location: "Belgrano, CABA",
          image: "/proyecto21/portada.jpg",
          size: "medium" as const,
        },
        {
          id: "edificio-h1",
          title: "Edificio H1",
          year: "2010",
          location: "Palermo, CABA",
          image: "/proyecto22/DWG-Humboldt_2227-03-Living_101-01-GENTE.jpg",
          size: "medium" as const,
        },
      ],
    },
    projects: {
      "vivienda-soler-3333": {
        id: "vivienda-soler-3333",
        title: "Vivienda Soler 3333",
        category: "Desarrollos",
        year: "2016",
        location: "Recoleta, CABA",
        area: "1,780 m²",
        status: "Completado",
        description:
          "Un edificio de vivienda multifamiliar que combina la elegancia arquitectónica con la funcionalidad urbana en el corazón de Recoleta. El proyecto optimiza el uso del lote urbano creando unidades de alta calidad con espacios flexibles y abundante luz natural.",
        details: {
          Cliente: "Desarrollador Privado",
          "Vivienda Multifamiliar": "Vivienda multifamiliar",
          Superficie: "1,780 m²",
          Año: "2016",
          Ubicación: "Recoleta, CABA",
          Equipo: "dwgba • estudio",
        },
        heroImage: "/proyecto5/portada.jpg",
        images: [
          { src: "/proyecto5/portada.jpg", alt: "Vista general de Vivienda Soler 3333" },
          { src: "/proyecto5/img1.jpg", alt: "Fachada principal del edificio" },
          { src: "/proyecto5/img2.jpg", alt: "Detalles arquitectónicos" },
          { src: "/proyecto5/img3.jpg", alt: "Espacios interiores" },
        ],
      },
      "vivienda-cordoba-3113": {
        id: "vivienda-cordoba-3113",
        title: "Vivienda Córdoba 3113",
        category: "Desarrollos",
        year: "2023",
        location: "Barrio Norte, CABA",
        area: "4,560 m²",
        status: "Completado",
        description:
          "Un moderno edificio de viviendas multifamiliares que redefine el estándar residencial en Barrio Norte. El proyecto incluye amenities de primer nivel como gimnasio, sala de juegos y espacios comunitarios, ofreciendo una experiencia de vida integral en el corazón de la ciudad.",
        details: {
          Cliente: "Desarrollador Privado",
          "Edificio de Viviendas Multifamiliar": "Edificio de viviendas multifamiliar",
          Superficie: "4,560 m²",
          Año: "2023",
          Ubicación: "Barrio Norte, CABA",
          Equipo: "dwgba • estudio",
        },
        heroImage: "/proyecto12/Estar Unidad A 2 a 6 Camara 1.png",
        images: [
          { src: "/proyecto12/Estar Unidad A 2 a 6 Camara 1.png", alt: "Estar de unidad tipo" },
          { src: "/proyecto12/Gym.png", alt: "Gimnasio del edificio" },
          { src: "/proyecto12/Patio Bloque B.png", alt: "Patio del bloque B" },
          { src: "/proyecto12/Sala de juegos.png", alt: "Sala de juegos comunitaria" },
        ],
      },
      "edificio-armenia-2387": {
        id: "edificio-armenia-2387",
        title: "Edificio Armenia 2387",
        category: "Desarrollos",
        year: "2015",
        location: "Palermo, CABA",
        area: "2,230 m²",
        status: "Completado",
        description:
          "Un edificio de viviendas que combina el diseño contemporáneo con la calidez del barrio de Palermo. El proyecto optimiza la relación entre espacios privados y comunes, creando un ambiente residencial que respeta la escala del entorno mientras ofrece todas las comodidades modernas.",
        details: {
          Cliente: "Desarrollador Privado",
          "Edificio de Viviendas": "Edificio de viviendas",
          Superficie: "2,230 m²",
          Año: "2015",
          Ubicación: "Palermo, CABA",
          Equipo: "dwgba • estudio",
        },
        heroImage: "/proyecto13/portada.jpg",
        images: [
          { src: "/proyecto13/portada.jpg", alt: "Vista general del Edificio Armenia 2387" },
          { src: "/proyecto13/img1.jpg", alt: "Fachada principal del edificio" },
          { src: "/proyecto13/img2.jpg", alt: "Detalles arquitectónicos" },
          { src: "/proyecto13/img3.jpg", alt: "Espacios comunes y accesos" },
        ],
      },
      "proyecto-oro-2476": {
        id: "proyecto-oro-2476",
        title: "Proyecto Oro 2476",
        category: "Desarrollos",
        year: "2025",
        location: "Palermo, CABA",
        area: "2,740 m²",
        status: "En Desarrollo",
        description:
          "Un moderno proyecto de vivienda multifamiliar que representa la evolución más reciente del estudio en el diseño residencial. Ubicado en el corazón de Palermo, el proyecto combina espacios habitacionales de alta calidad con amenities contemporáneos, estableciendo nuevos estándares en el mercado inmobiliario porteño.",
        details: {
          Cliente: "Desarrollador Privado",
          "Vivienda Multifamiliar": "Vivienda multifamiliar",
          Superficie: "2,740 m²",
          Año: "2025",
          Ubicación: "Palermo, CABA",
          Equipo: "dwgba • estudio",
        },
        heroImage: "/proyecto14/portada.png",
        images: [
          { src: "/proyecto14/portada.png", alt: "Vista general del Proyecto Oro 2476" },
          { src: "/proyecto14/render.jpg", alt: "Render exterior del edificio" },
          { src: "/proyecto14/Camara_1_Tipologia C.png", alt: "Interior tipología C" },
          { src: "/proyecto14/SUM.png", alt: "Salón de usos múltiples" },
        ],
      },
      "proyecto-la-pampa-1575": {
        id: "proyecto-la-pampa-1575",
        title: "Proyecto La Pampa 1575",
        category: "Desarrollos",
        year: "2024",
        location: "Belgrano, CABA",
        area: "4,340 m²",
        status: "En construcción para 2026",
        description:
          "Un ambicioso desarrollo de edificio de viviendas multifamiliares en el prestigioso barrio de Belgrano. El proyecto se destaca por su gran escala y su diseño innovador que maximiza la calidad habitacional mientras respeta el carácter residencial del barrio. Con finalización prevista para 2026.",
        details: {
          Cliente: "Desarrollador Privado",
          "Edificio de Viviendas Multifamiliares": "Edificio de viviendas multifamiliares",
          Superficie: "4,340 m²",
          Año: "2024",
          Ubicación: "Belgrano, CABA",
          "Estado": "En construcción para 2026",
          Equipo: "dwgba • estudio",
        },
        heroImage: "/proyecto15/20.jpg",
        images: [
          { src: "/proyecto15/20.jpg", alt: "Vista general del Proyecto La Pampa 1575" },
          { src: "/proyecto15/11.jpg", alt: "Fachada principal del edificio" },
          { src: "/proyecto15/12.jpg", alt: "Detalles arquitectónicos" },
          { src: "/proyecto15/5 (2).jpg", alt: "Espacios comunes" },
          { src: "/proyecto15/9.jpg", alt: "Vista contextual del proyecto" },
        ],
      },
      "edificio-m1": {
        id: "edificio-m1",
        title: "Edificio M1",
        category: "Desarrollos",
        year: "2018",
        location: "Once, Bs as",
        area: "1,894 m²",
        status: "Completado",
        description:
          "Un proyecto de vivienda multifamiliar ubicado en el dinámico barrio de Once. El Edificio M1 combina diseño contemporáneo con funcionalidad urbana, optimizando el uso del suelo en una zona de alta densidad. El proyecto incluye espacios interiores cuidadosamente diseñados y terrazas que ofrecen vistas panorámicas de la ciudad.",
        details: {
          Cliente: "Desarrollador Privado",
          "Vivienda Multifamiliar": "Vivienda multifamiliar",
          Superficie: "1,894 m²",
          Año: "2018",
          Ubicación: "Once, Bs as",
          Equipo: "dwgba • estudio",
        },
        heroImage: "/proyecto16/01 Final.jpg",
        images: [
          { src: "/proyecto16/01 Final.jpg", alt: "Vista general del Edificio M1" },
          { src: "/proyecto16/Int 01 Final.jpg", alt: "Interior unidad tipo 1" },
          { src: "/proyecto16/Int 02 Final.jpg", alt: "Interior unidad tipo 2" },
          { src: "/proyecto16/Terraza Final.jpg", alt: "Terraza con vista panorámica" },
        ],
      },
      "edificio-s1": {
        id: "edificio-s1",
        title: "Edificio S1",
        category: "Desarrollos",
        year: "2012",
        location: "Belgrano, CABA",
        area: "2,987 m²",
        status: "Completado",
        description:
          "Un edificio de viviendas que marca una etapa temprana en la evolución del estudio en el desarrollo de proyectos residenciales en Belgrano. El Edificio S1 combina espacios habitacionales funcionales con un diseño que respeta la escala del barrio, estableciendo las bases para futuros desarrollos en la zona.",
        details: {
          Cliente: "Desarrollador Privado",
          "Edificio de Viviendas": "Edificio de viviendas",
          Superficie: "2,987 m²",
          Año: "2012",
          Ubicación: "Belgrano, CABA",
          Equipo: "dwgba • estudio",
        },
        heroImage: "/proyecto21/portada.jpg",
        images: [
          { src: "/proyecto21/portada.jpg", alt: "Vista general del Edificio S1" },
          { src: "/proyecto21/DWGBA-Sucre_2275-06-Hall-02-pp.jpg", alt: "Hall de acceso del edificio" },
          { src: "/proyecto21/DWGBA-Sucre_2275-07-Fachada-03.jpg", alt: "Fachada principal" },
        ],
      },
      "edificio-h1": {
        id: "edificio-h1",
        title: "Edificio H1",
        category: "Desarrollos",
        year: "2010",
        location: "Palermo, CABA",
        area: "1,689 m²",
        status: "Completado",
        description:
          "El Edificio H1 representa uno de los primeros proyectos del estudio en el desarrollo de viviendas multifamiliares en Palermo. Con una escala compacta pero cuidadosamente diseñada, el proyecto estableció las bases para el lenguaje arquitectónico que caracterizaría los futuros desarrollos del estudio en el barrio.",
        details: {
          Cliente: "Desarrollador Privado",
          "Edificio de Viviendas": "Edificio de viviendas",
          Superficie: "1,689 m²",
          Año: "2010",
          Ubicación: "Palermo, CABA",
          Equipo: "dwgba • estudio",
        },
        heroImage: "/proyecto22/DWG-Humboldt_2227-03-Living_101-01-GENTE.jpg",
        images: [
          { src: "/proyecto22/DWG-Humboldt_2227-03-Living_101-01-GENTE.jpg", alt: "Living unidad 101" },
          { src: "/proyecto22/DWG-Humboldt_2227-03-Living_102-01-GENTE.jpg", alt: "Living unidad 102" },
          { src: "/proyecto22/DWG-Humboldt_2227-03-Living_103-01-GENTE2.jpg", alt: "Living unidad 103" },
          { src: "/proyecto22/DWG-Humboldt_2227-04-Terraza-01-GENTE.jpg", alt: "Terraza del edificio" },
        ],
      },
    },
  },
  "viviendas-unifamiliares": {
    info: {
      title: "Viviendas Unifamiliares",
      description: "Casas diseñadas para la vida moderna, integrando funcionalidad y belleza",
      projects: [
        {
          id: "casa-evm",
          title: "Casa EVM",
          year: "2005",
          location: "Quilmes, provincia de Buenos Aires",
          image: "/proyecto2/portada.jpg",
          size: "medium" as const,
        },
        {
          id: "casa-escobar",
          title: "Casa Escobar",
          year: "2008",
          location: "Escobar, PBA",
          image: "/proyecto19/portada.jpg",
          size: "medium" as const,
        },
        {
          id: "apartamento-casa-escobar",
          title: "Casa Escobar",
          year: "2024",
          location: "Barrio norte",
          image: "/proyecto35/Foto 4-7-25, 11 41 10 a m.jpg",
          size: "small" as const,
        },
        {
          id: "casa-saal",
          title: "Casa Saal",
          year: "2021",
          location: "Escobar, PBA",
          image: "/proyecto36/20211116_120809.jpg",
          size: "medium" as const,
        },
        {
          id: "casa-tesler",
          title: "Casa Tesler",
          year: "2022",
          location: "CC El Sosiego",
          image: "/proyecto37/20211130_085605.jpg",
          size: "medium" as const,
        },
        {
          id: "casa-mr",
          title: "Casa MR",
          year: "2022",
          location: "CC Mi Refugio",
          image: "/proyecto38/portada.jpg",
          size: "medium" as const,
        },
    
      ],
    },
    projects: {
      "casa-evm": {
        id: "casa-evm",
        title: "Casa EVM",
        category: "Viviendas Unifamiliares",
        year: "2005",
        location: "Quilmes, pciia de bas as",
        area: "470 m²",
        status: "Completado",
        description:
          "Una de las primeras obras del estudio que marca el inicio de su trayectoria en vivienda unifamiliar. La Casa EVM combina funcionalidad y diseño en un contexto suburbano, estableciendo las bases del lenguaje arquitectónico que caracterizaría los futuros proyectos residenciales del estudio.",
        details: {
          Cliente: "Familia EVM",
          "Edificio de Viviendas": "Edificio de viviendas",
          Superficie: "470 m²",
          Año: "2005",
          Ubicación: "Quilmes, pciia de bas as",
          Equipo: "dwgba • estudio",
        },
        heroImage: "/proyecto2/portada.jpg",
        images: [
          { src: "/proyecto2/portada.jpg", alt: "Vista general de Casa EVM" },
          { src: "/proyecto2/_MG_2263.jpg", alt: "Fachada principal" },
          { src: "/proyecto2/5tabique (1).JPG", alt: "Detalle de tabique interior" },
          { src: "/proyecto2/8asador.JPG", alt: "Área de asador" },
        ],
      },
      "casa-escobar": {
        id: "casa-escobar",
        title: "Casa Escobar",
        category: "Viviendas Unifamiliares",
        year: "2008",
        location: "Escobar, PBA",
        area: "470 m²",
        status: "Completado",
        description:
          "Una vivienda unifamiliar que representa la evolución del estudio en el diseño residencial suburbano. La Casa Escobar desarrolla un lenguaje arquitectónico más maduro, integrando espacios interiores y exteriores en un entorno natural de la provincia de Buenos Aires.",
        details: {
          Cliente: "Familia Escobar",
          "Vivienda Unifamiliar": "Vivienda unifamiliar",
          Superficie: "470 m²",
          Año: "2008",
          Ubicación: "Escobar, PBA",
          Equipo: "dwgba • estudio",
        },
        heroImage: "/proyecto19/portada.jpg",
        images: [
          { src: "/proyecto19/portada.jpg", alt: "Vista general de Casa Escobar" },
          { src: "/proyecto19/P1260032.JPG", alt: "Exterior de la vivienda" },
          { src: "/proyecto19/P1260045.JPG", alt: "Detalles arquitectónicos" },
        ],
      },
      "apartamento-casa-escobar": {
        id: "apartamento-casa-escobar",
        title: "Casa Escobar",
        category: "Viviendas Unifamiliares",
        year: "2024",
        location: "Barrio norte",
        area: "85 m²",
        status: "Completado",
        description:
          "Un apartamento contemporáneo que demuestra la versatilidad del estudio en espacios compactos urbanos. Este proyecto, a pesar de su nombre, representa una tipología de apartamento que maximiza la funcionalidad en una superficie reducida, aplicando principios de diseño eficiente en el corazón de Barrio Norte.",
        details: {
          Cliente: "Cliente Privado",
          Apartamento: "Apartamento",
          Superficie: "85 m²",
          Año: "2024",
          Ubicación: "Barrio norte",
          Equipo: "dwgba • estudio",
        },
        heroImage: "/proyecto35/Foto 4-7-25, 11 41 10 a m.jpg",
        images: [
          { src: "/proyecto35/Foto 4-7-25, 11 41 10 a m.jpg", alt: "Interior principal del apartamento" },
          { src: "/proyecto35/Foto 4-7-25, 11 43 00 a m.jpg", alt: "Área de cocina integrada" },
          { src: "/proyecto35/Foto 4-7-25, 11 44 19 a m.jpg", alt: "Dormitorio principal" },
          { src: "/proyecto35/Foto 4-7-25, 11 49 58 a m.jpg", alt: "Detalle de diseño interior" },
        ],
      },
      "casa-saal": {
        id: "casa-saal",
        title: "Casa Saal",
        category: "Viviendas Unifamiliares",
        year: "2021",
        location: "Escobar, PBA",
        area: "230 m²",
        status: "Completado",
        description:
          "Una vivienda unifamiliar contemporánea que desarrolla un lenguaje arquitectónico refinado en el contexto suburbano de Escobar. La Casa Saal optimiza la relación entre espacios interiores y exteriores, creando una experiencia habitacional que combina confort y conexión con el entorno natural.",
        details: {
          Cliente: "Familia Saal",
          "Vivienda Unifamiliar": "Vivienda unifamiliar",
          Superficie: "230 m²",
          Año: "2021",
          Ubicación: "Escobar, PBA",
          Equipo: "dwgba • estudio",
        },
        heroImage: "/proyecto36/20211116_120809.jpg",
        images: [
          { src: "/proyecto36/20211116_120809.jpg", alt: "Vista exterior de Casa Saal" },
          { src: "/proyecto36/2021-11-16 12.10.26.jpg", alt: "Fachada principal" },
          { src: "/proyecto36/20211116_121229.jpg", alt: "Detalle arquitectónico exterior" },
        ],
      },
      "casa-tesler": {
        id: "casa-tesler",
        title: "Casa Tesler",
        category: "Viviendas Unifamiliares",
        year: "2022",
        location: "CC El Sosiego",
        area: "245 m²",
        status: "Completado",
        description:
          "Una vivienda unifamiliar ubicada en el exclusivo country club El Sosiego. La Casa Tesler desarrolla un diseño contemporáneo que se adapta a las normativas del barrio cerrado mientras mantiene la identidad arquitectónica del estudio, creando espacios funcionales y estéticamente refinados.",
        details: {
          Cliente: "Familia Tesler",
          "Vivienda Unifamiliar": "Vivienda unifamiliar",
          Superficie: "245 m²",
          Año: "2022",
          Ubicación: "CC El Sosiego",
          Equipo: "dwgba • estudio",
        },
        heroImage: "/proyecto37/20211130_085605.jpg",
        images: [
          { src: "/proyecto37/20211130_085605.jpg", alt: "Vista exterior de Casa Tesler" },
          { src: "/proyecto37/2021-07-03 17.58.59.jpg", alt: "Fachada principal" },
          { src: "/proyecto37/2021-07-03 17.59.00-5.jpg", alt: "Detalle arquitectónico" },
        ],
      },
      "casa-mr": {
        id: "casa-mr",
        title: "Casa MR",
        category: "Viviendas Unifamiliares",
        year: "2022",
        location: "CC Mi Refugio",
        area: "233 m²",
        status: "Completado",
        description:
          "Una vivienda unifamiliar contemporánea ubicada en el country club Mi Refugio. La Casa MR desarrolla un lenguaje arquitectónico refinado que combina modernidad y confort, adaptándose a las características del entorno mientras mantiene la identidad distintiva del estudio en proyectos residenciales exclusivos.",
        details: {
          Cliente: "Familia MR",
          "Vivienda Unifamiliar": "Vivienda unifamiliar",
          Superficie: "233 m²",
          Año: "2022",
          Ubicación: "CC Mi Refugio",
          Equipo: "dwgba • estudio",
        },
        heroImage: "/proyecto38/portada.jpg",
        images: [
          { src: "/proyecto38/portada.jpg", alt: "Vista general de Casa MR" },
          { src: "/proyecto38/2023-12-28 09.36.25.jpg", alt: "Exterior de la vivienda" },
          { src: "/proyecto38/2023-12-28 09.36.30.jpg", alt: "Vista lateral" },
          { src: "/proyecto38/Pa Snaider_Photo - 4.jpg", alt: "Fotografía profesional" },
        ],
      },
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
          id: "working-co-soler-4443",
          title: "Working & Co - Soler 4443",
          year: "2019",
          location: "Soler 4443, Palermo",
          image: "/proyecto6/2021-04-20 11.48.07-1.jpg",
          size: "large" as const,
        },
        {
          id: "working-co-paraguay",
          title: "Working & Co - Paraguay",
          year: "2019",
          location: "Paraguay",
          image: "/proyecto8/Hall de Entrada.jpg",
          size: "large" as const,
        },
        {
          id: "alaire",
          title: "Alaire",
          year: "2012",
          location: "Palermo, CABA",
          image: "/proyecto17/DSC_6408-R.jpg",
          size: "medium" as const,
        },
        {
          id: "apartamento-casa-escobar-corp",
          title: "Casa Escobar",
          year: "2024",
          location: "Barrio norte",
          image: "/proyecto35/Foto 4-7-25, 11 41 10 a m.jpg",
          size: "small" as const,
        },
      ],
    },
    projects: {
      "working-co-soler-4443": {
        id: "working-co-soler-4443",
        title: "Working & Co - Soler 4443",
        category: "corporativos",
        year: "2019",
        location: "Soler 4443, Palermo",
        area: "960m²",
        status: "Construido",
        description: "Proyecto de diseño interior para un espacio de coworking en el corazón de Palermo. El diseño busca crear un ambiente moderno y funcional que promueva la colaboración y productividad, con espacios flexibles adaptables a diferentes necesidades de trabajo.",
        details: {
          "Tipología": "Oficinas de Coworking",
          "Área": "960m²",
          "Cliente": "Working & Co",
          "Año": "2019",
        },
        heroImage: "/proyecto6/2021-04-20 11.48.07-1.jpg",
        images: [
          {
            src: "/proyecto6/2020-09-01 15.55.30.jpg",
            alt: "Vista general del espacio de coworking",
          },
          {
            src: "/proyecto6/2020-09-01 16.01.23.jpg",
            alt: "Zona de trabajo colaborativo",
          },
          {
            src: "/proyecto6/2020-09-28 10.32.34.jpg",
            alt: "Oficinas privadas",
          },
          {
            src: "/proyecto6/2021-04-20 11.48.07-1.jpg",
            alt: "Área de reuniones y descanso",
          },
        ],
      },
      "working-co-paraguay": {
        id: "working-co-paraguay",
        title: "Working & Co - Paraguay",
        category: "corporativos",
        year: "2019",
        location: "Paraguay",
        area: "980m²",
        status: "Construido",
        description: "Diseño integral de oficinas de coworking en Paraguay. El proyecto contempla espacios flexibles y multifuncionales que fomentan la colaboración y el networking profesional, incluyendo áreas de trabajo compartido, salas de reuniones, espacios de eventos y zonas de descanso.",
        details: {
          "Tipología": "Oficinas de Coworking",
          "Área": "980m²",
          "Cliente": "Working & Co",
          "Año": "2019",
        },
        heroImage: "/proyecto8/Hall de Entrada.jpg",
        images: [
          {
            src: "/proyecto8/Hall de Entrada.jpg",
            alt: "Hall de entrada principal",
          },
          {
            src: "/proyecto8/Comedor - Area de uso común(4).jpg",
            alt: "Comedor y área de uso común",
          },
          {
            src: "/proyecto8/Comedor - Area de uso común(7).jpg",
            alt: "Vista alternativa del área común",
          },
          {
            src: "/proyecto8/Meeting Room PB(1).jpg",
            alt: "Sala de reuniones planta baja",
          },
          {
            src: "/proyecto8/Oficina(8).jpg",
            alt: "Espacio de oficina privada",
          },
        ],
      },
      "alaire": {
        id: "alaire",
        title: "Alaire",
        category: "corporativos",
        year: "2012",
        location: "Palermo, CABA",
        area: "2987m²",
        status: "Construido",
        description: "Diseño integral de un resto bar en el corazón de Palermo. El proyecto busca crear una experiencia gastronómica única a través de un diseño interior contemporáneo que combina funcionalidad y ambiente, generando espacios cálidos y sofisticados para la experiencia culinaria.",
        details: {
          "Tipología": "Resto bar",
          "Área": "2987m²",
          "Cliente": "Alaire",
          "Año": "2012",
        },
        heroImage: "/proyecto17/DSC_6408-R.jpg",
        images: [
          {
            src: "/proyecto17/DSC_6408-R.jpg",
            alt: "Vista general del restaurante",
          },
          {
            src: "/proyecto17/DSC_0063-instagram.jpg",
            alt: "Área de comedor principal",
          },
          {
            src: "/proyecto17/DSC_0064-instagram.jpg",
            alt: "Detalle de mobiliario y iluminación",
          },
          {
            src: "/proyecto17/DSC_0071-instagram.jpg",
            alt: "Zona de bar y coctelería",
          },
        ],
      },
      "apartamento-casa-escobar-corp": {
        id: "apartamento-casa-escobar-corp",
        title: "Casa Escobar",
        category: "corporativos",
        year: "2024",
        location: "Barrio norte",
        area: "85 m²",
        status: "Completado",
        description:
          "Un apartamento contemporáneo que demuestra la versatilidad del estudio en espacios compactos urbanos. Este proyecto de diseño interior maximiza la funcionalidad en una superficie reducida, aplicando principios de diseño eficiente y moderno en el corazón de Barrio Norte.",
        details: {
          "Tipología": "Diseño Interior",
          "Área": "85 m²",
          "Cliente": "Cliente Privado",
          "Año": "2024",
        },
        heroImage: "/proyecto35/Foto 4-7-25, 11 41 10 a m.jpg",
        images: [
          { src: "/proyecto35/Foto 4-7-25, 11 41 10 a m.jpg", alt: "Interior principal del apartamento" },
          { src: "/proyecto35/Foto 4-7-25, 11 43 00 a m.jpg", alt: "Área de cocina integrada" },
          { src: "/proyecto35/Foto 4-7-25, 11 44 19 a m.jpg", alt: "Dormitorio principal" },
          { src: "/proyecto35/Foto 4-7-25, 11 49 58 a m.jpg", alt: "Detalle de diseño interior" },
        ],
      },
    },
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
