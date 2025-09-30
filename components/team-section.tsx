"use client"

const teamMembers = [
  {
    name: "Diego Martínez",
    position: "Director Fundador",
    image: "/team/154.png",
  },
  {
    name: "Gabriela Rodríguez",
    position: "Socia Directora",
    image: "/team/155.png",
  },
  {
    name: "Bruno Fernández",
    position: "Arquitecto Senior",
    image: "/team/156.png",
  },
  {
    name: "Ana Castillo",
    position: "Arquitecta de Proyectos",
    image: "/team/157.png",
  },
  {
    name: "Martín López",
    position: "Arquitecto Junior",
    image: "/team/158.png",
  },
  {
    name: "Sofía Herrera",
    position: "Diseñadora de Interiores",
    image: "/team/159.png",
  },
  {
    name: "Carlos Mendoza",
    position: "Coordinador de Obra",
    image: "/team/160.png",
  },
  {
    name: "Lucía Torres",
    position: "Arquitecta Paisajista",
    image: "/team/161.png",
  },
  {
    name: "Andrés Silva",
    position: "Arquitecto Técnico",
    image: "/team/162.png",
  },
  {
    name: "Valentina Cruz",
    position: "Diseñadora Gráfica",
    image: "/team/163.png",
  },
  {
    name: "Keiko",
    position: "Perrito",
    image: "/team/keiko.jpeg"
  }
]

export function TeamSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background" id="equipo">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="section-title mb-6 text-balance">
            Nuestro Equipo
          </h2>
          <div className="max-w-4xl">
            <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed text-pretty">
              Orgullosos de nuestro equipo multicultural de más de 20 horizontes diferentes, extraemos nuestra
              inspiración de esta riqueza, profundamente convencidos de que fomenta nuevas formas de comunicación y
              pensamiento. Pulsamos a través de todas nuestras interacciones, para aprender constantemente unos de
              otros, expandiendo nuestro conocimiento en todos los sentidos y direcciones.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="space-y-6">
          {/* Primera fila - 4 miembros */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {teamMembers.slice(0, 4).map((member, index) => (
              <div key={index} className="group">
                <div className="relative aspect-auto overflow-hidden bg-muted">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Segunda fila - 4 miembros */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {teamMembers.slice(4, 8).map((member, index) => (
              <div key={index + 4} className="group">
                <div className="relative aspect-auto overflow-hidden bg-muted">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Tercera fila - 3 miembros centrados */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full md:max-w-[75%]">
              {teamMembers.slice(8, 11).map((member, index) => (
                <div key={index + 8} className="group">
                  <div className="relative aspect-auto overflow-hidden bg-muted">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
