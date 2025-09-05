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
          image: "/proyecto1/proy-1-img-1.webp",
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
          title: "Oasis urbano Santa fe",
          year: "2012",
          location: "Santa fe 5111, CABA",
          image: "/proyecto34/portada.jpg",
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
        heroImage: "/proyecto1/proy-1-img-1.webp",
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
        title: "Oasis urbano Santa fe",
        category: "Proyectos Públicos y Urbanos",
        year: "2012",
        location: "Santa fe 5111, CABA",
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
        heroImage: "/proyecto34/portada.jpg",
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
