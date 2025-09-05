import { ProjectData } from "../lib/projects-data"
import { addNewProject, generateImagePaths, validateProject } from "../lib/project-helpers"

/**
 * EJEMPLO: Cómo agregar un proyecto real
 * 
 * Este archivo muestra cómo cargar el proyecto que ya tiene imágenes en public/proyecto1/
 * Una vez que tengas los detalles del proyecto, simplemente completa la información
 * y ejecuta la función addNewProject
 */

// Proyecto de ejemplo con las imágenes existentes
const proyectoEjemplo: ProjectData = {
  id: "proyecto-ejemplo",
  title: "Proyecto Ejemplo", // ← CAMBIAR por el nombre real
  category: "Viviendas Unifamiliares", // ← CAMBIAR por la categoría correcta
  year: "2024", // ← CAMBIAR por el año real
  location: "Buenos Aires, Argentina", // ← CAMBIAR por la ubicación real
  area: "320 m²", // ← CAMBIAR por el área real
  status: "Completado", // ← CAMBIAR por el estado real
  description: `
    Descripción completa del proyecto. 
    Aquí va el texto descriptivo que explique el concepto,
    los desafíos, las soluciones arquitectónicas, etc.
  `.trim(), // ← CAMBIAR por la descripción real
  details: {
    Cliente: "Cliente del proyecto", // ← CAMBIAR
    Programa: "Descripción del programa", // ← CAMBIAR
    Superficie: "320 m² cubiertos + 120 m² semicubiertos", // ← CAMBIAR
    Año: "2024", // ← CAMBIAR
    Ubicación: "Buenos Aires, Argentina", // ← CAMBIAR
    Equipo: "dwgba • estudio",
  },
  heroImage: "/proyecto1/proy-1-img-1.webp", // ← Usando la primera imagen como hero
  images: [
    { src: "/proyecto1/proy-1-img-1.webp", alt: "Vista exterior del proyecto" }, // ← CAMBIAR descripciones
    { src: "/proyecto1/proy-1-img-2.webp", alt: "Interior principal" },
    { src: "/proyecto1/proy-1-img-3.webp", alt: "Detalle de diseño" },
    { src: "/proyecto1/proy-1-img-4.webp", alt: "Espacio exterior" },
    { src: "/proyecto1/proy-1-img-5.webp", alt: "Vista nocturna" },
  ],
}

/**
 * INSTRUCCIONES PARA USAR:
 * 
 * 1. Cambia todos los campos marcados con ← CAMBIAR
 * 2. Asegúrate que la categoría existe en projects-data.ts
 * 3. Verifica que las rutas de las imágenes sean correctas
 * 4. Ejecuta: addNewProject("categoria-correcta", proyectoEjemplo)
 * 
 * CATEGORÍAS DISPONIBLES:
 * - "publicos-urbanos"
 * - "desarrollos" 
 * - "viviendas-unifamiliares"
 * - "corporativos"
 */

// Función para agregar el proyecto (descomenta cuando esté listo)
export function agregarProyecto1() {
  // Validar que el proyecto tenga todos los campos
  if (validateProject(proyectoEjemplo)) {
    // Cambiar "viviendas-unifamiliares" por la categoría correcta
    addNewProject("viviendas-unifamiliares", proyectoEjemplo)
    console.log("✅ Proyecto agregado exitosamente!")
  } else {
    console.error("❌ El proyecto no tiene todos los campos requeridos")
  }
}

// Para agregar el proyecto, descomenta la siguiente línea:
// agregarProyecto1()

export default proyectoEjemplo
