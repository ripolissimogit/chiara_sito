import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { NumbersSection } from "@/components/numbers-section"
import { ClientsSection } from "@/components/clients-section"
import { SkillsSection } from "@/components/skills-section"
import { ServicesSection } from "@/components/services-section"
import { AiSection } from "@/components/ai-section"
import { FormazioneSection } from "@/components/formazione-section"
import { ContactSection } from "@/components/contact-section"
import { FooterSection } from "@/components/footer-section"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <NumbersSection />
        <ClientsSection />
        <SkillsSection />
        <ServicesSection />
        <AiSection />
        <FormazioneSection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  )
}
