"use client"

export function PhilosophySection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30" id="filosofia">
      <div className="max-w-7xl mx-auto">
        {/* Big title */}
        <h2 className="section-title mb-10 md:mb-14 text-balance">
          Estudio
        </h2>

        {/* 50/50 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Image */}
          <div className="relative overflow-hidden rounded-lg bg-muted aspect-[3/2] md:aspect-[4/3]">
            <img
              src="/architecture-studio-workspace-with-drafting-tables.jpg"
              alt="Estudio de arquitectura dwgba"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6 text-lg md:text-xl text-black leading-relaxed">
            <p className="text-pretty font-medium lowercase">
              <span className="uppercase">f</span>undado en 1993 nuestroEstudio de Arquitectura se ha consolidado como un espacio de excelencia profesional, dedicado al desarrollo de proyectos y obras que abarcan desde la escala doméstica hasta la urbana, y que transitan entre lo privado y lo público. En todos ellos, el compromiso, la actitud y la intensidad con que son abordados constituyen el sello distintivo de nuestro quehacer. En nuestro estudio no existen encargos menores: cada proyecto representa una oportunidad de innovar, crecer y aprender en conjunto. Disfrutamos dellevarlos adelante como equipo, colaborando estrechamente con desarrolladores, asesores, gremios y proveedores. Creemos firmemente que este camino compartido constituye la base para alcanzar nuestros objetivos y sostener mejores estándaresprofesionales
            </p>

            {/* Stats or highlights */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
              <div>
              <div className="text-3xl md:text-4xl font-medium text-black mb-1">32+</div>
              <div className="text-xs md:text-sm text-black uppercase">AÑOS DE EXPERIENCIA</div>
              </div>
              <div>
              <div className="text-3xl md:text-4xl font-medium text-black mb-1">64+</div>
              <div className="text-xs md:text-sm text-black uppercase">PROYECTOS FINALIZADOS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
