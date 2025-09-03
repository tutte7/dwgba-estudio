import { Navigation } from "@/components/navigation"
import { HeroCarousel } from "@/components/hero-carousel"
import { PhilosophySection } from "@/components/philosophy-section"
import { ProjectCategories } from "@/components/project-categories"
import { TeamSection } from "@/components/team-section"
import { ContactFooter } from "@/components/contact-footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroCarousel />
      <PhilosophySection />
      <ProjectCategories />
      <TeamSection />
      <ContactFooter />
    </main>
  )
}
