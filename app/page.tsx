import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { ServicesSection } from "@/components/services-section"
import { DifferentialsSection } from "@/components/differentials-section"
import { StatsSection } from "@/components/stats-section"
import { SimplifiedSection } from "@/components/simplified-section"
import { CtaSection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <HowItWorks />
        <ServicesSection />
        <DifferentialsSection />
        <StatsSection />
        <SimplifiedSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
