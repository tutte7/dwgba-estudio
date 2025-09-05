"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ContactFooter() {
  return (
    <footer className="bg-muted/30 border-t border-border" id="contacto">
      {/* Contact Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="section-title-sm mb-6">
                  Hablemos de tu Proyecto
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  Cada proyecto es único. Nos encanta escuchar nuevas ideas y transformarlas en realidades
                  arquitectónicas excepcionales.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin size={20} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Estudio</div>
                    <div className="text-muted-foreground">
                      Av. Corrientes 1234, Piso 8<br />
                      C1043AAZ Buenos Aires, Argentina
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-accent flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Teléfono</div>
                    <div className="text-muted-foreground">+54 11 4567-8900</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail size={20} className="text-accent flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <div className="text-muted-foreground">hola@dwgba.com.ar</div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <div className="font-medium text-foreground mb-3">Seguinos</div>
                <div className="flex space-x-4">
                  <Link href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">
                    <Instagram size={24} />
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">
                    <Linkedin size={24} />
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">
                    <Twitter size={24} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Newsletter & Contact Form */}
            
          </div>
        </div>
      </section>

      {/* Footer Bottom */}
      <div className="border-t border-border py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="font-bold text-foreground">dwgba • estudio</div>
              <div className="text-sm text-muted-foreground">© 2024 Todos los derechos reservados</div>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                Prensa
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                Política de Privacidad
              </Link>
              <div className="text-muted-foreground">
                Sitio por <span className="text-accent">v0.app</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
