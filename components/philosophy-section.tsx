"use client"

export function PhilosophySection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30" id="filosofia">
      <div className="max-w-7xl mx-auto">
        {/* Big title */}
        <h2 className="section-title mb-10 md:mb-14 text-balance">
          Nuestra Filosofía
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
            <p className="text-pretty font-medium uppercase">
              En <strong className="text-black">dwgba • estudio</strong> creemos que la arquitectura trasciende
              la construcción. Cada proyecto es una oportunidad de crear espacios que mejoren la calidad de vida y
              se integren armoniosamente con su entorno.
            </p>
            <p className="text-pretty font-medium uppercase">
              Nuestro enfoque combina la funcionalidad contemporánea con la sensibilidad hacia el contexto,
              utilizando materiales nobles y técnicas innovadoras para lograr diseños atemporales.
            </p>
            <p className="text-pretty font-medium uppercase">
              Trabajamos de cerca con nuestros clientes para entender sus necesidades y transformar sus visiones en
              realidades arquitectónicas que perduren en el tiempo.
            </p>

            {/* Stats or highlights */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
              <div>
                <div className="text-3xl md:text-4xl font-medium text-black mb-1">15+</div>
                <div className="text-xs md:text-sm text-black uppercase">Años de Experiencia</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-medium text-black mb-1">120+</div>
                <div className="text-xs md:text-sm text-black uppercase">Proyectos Completados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
