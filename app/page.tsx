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
import { copy, getLanguage } from "@/lib/i18n"

type PageProps = {
  searchParams?: Promise<{
    lang?: string
  }>
}

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams
  const lang = getLanguage(params?.lang)
  const content = copy[lang]

  return (
    <>
      <SiteHeader lang={lang} content={content.header} />
      <main>
        <HeroSection lang={lang} content={content.hero} />
        <HowItWorks content={content.howItWorks} />
        <ServicesSection content={content.services} />
        <OperationModelsSection content={content.operationModels} />
        <DifferentialsSection content={content.differentials} />
        <CasesSection content={content.cases} />
        <AudienceSection content={content.audience} />
        <StatsSection content={content.stats} />
        <FaqSection content={content.faq} />
        <CtaSection content={content.cta} />
      </main>
      <SiteFooter content={content.footer} />
      <WhatsAppFab ariaLabel={content.whatsappAriaLabel} />
    </>
  )
}
