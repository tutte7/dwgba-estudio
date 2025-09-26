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
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              ¿Querés ser parte de la cultura de dwgba • estudio?
              <br />
              Siempre estamos <strong className="text-foreground">buscando nuevos talentos</strong>.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Bottom blur strip with name + role */}
                <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 bg-gradient-to-t from-black/60 to-transparent backdrop-blur-sm">
                  <h3 className="text-white font-medium text-sm md:text-base leading-tight">{member.name}</h3>
                  <p className="text-white/80 text-[10px] md:text-xs uppercase">{member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
