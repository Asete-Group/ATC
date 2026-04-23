import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { ServicesSection } from "@/components/services-section"
import { OperationModelsSection } from "@/components/operation-models-section"
import { DifferentialsSection } from "@/components/differentials-section"
import { CasesSection } from "@/components/cases-section"
import { AudienceSection } from "@/components/audience-section"
import { StatsSection } from "@/components/stats-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFab } from "@/components/whatsapp-fab"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <HowItWorks />
        <ServicesSection />
        <OperationModelsSection />
        <DifferentialsSection />
        <CasesSection />
        <AudienceSection />
        <StatsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </>
  )
}
