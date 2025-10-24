"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react"
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
                  CONTACTO
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  <span className="lowercase font-medium text-foreground">dwgba <span className="font-serif">•</span> estudio</span>
                  <br />
                  Estudio de Arquitectura de la Ciudad de Buenos Aires <span className="font-serif">•</span> Palermo.
                  <br />
                  Cnel. Niceto Vega 4601 <span className="font-serif">•</span> 4699 <span className="font-serif">•</span> Piso 9 <span className="font-serif">•</span> Of 903 <span className="font-serif">•</span> C1414BEA <span className="font-serif">•</span> Buenos Aires.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin size={20} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground lowercase">dwgba <span className="font-serif">•</span> estudio</div>
                    <div className="text-muted-foreground">
                      Cnel. Niceto Vega 4601 <span className="font-serif">•</span> 4699 <span className="font-serif">•</span> Piso 9 <span className="font-serif">•</span> Of 903 <span className="font-serif">•</span> C1414BEA <span className="font-serif">•</span> Buenos Aires
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-accent flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Teléfono</div>
                    <div className="text-muted-foreground">+54 9 11 5800<span className="font-serif">•</span>1537</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail size={20} className="text-accent flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <div className="text-muted-foreground">estudio@dwgba.com.ar</div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <div className="font-medium text-foreground mb-3">Seguinos</div>
                <div className="flex space-x-4">
                  <Link href="https://www.instagram.com/dwgba/" target="_blank" className="text-muted-foreground hover:text-accent transition-colors duration-200">
                    <Instagram size={24} />
                  </Link>
                  <Link href="https://www.facebook.com/dwgba.estudio/" target="_blank" className="text-muted-foreground hover:text-accent transition-colors duration-200">
                    <Facebook size={24} />
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
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/dwgba - logo color.png"
                alt="dwgba • estudio"
                width={140}
                height={28}
                className="h-6 w-auto"
              />
            </div>
            
            {/* Copyright and Digital Identity */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-center md:text-right">
              <div className="text-sm text-muted-foreground">
                © 2025 dwgba<span className="font-serif"> • </span>estudio
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-sm text-muted-foreground">página construida por:</span>
                <Button variant="outline" size="sm" asChild>
                  <Link 
                    href="https://www.instagram.com/id.identidaddigital/" 
                    target="_blank"
                    className="text-xs"
                  >
                    @id.identidaddigital
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
