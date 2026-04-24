import type { Metadata } from "next";
import { CatalogSection } from "@/components/catalog-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { copy, getLanguage } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Catálogo de Produtos | ATC China Brasil",
  description:
    "Catálogo de produtos da ATC China Brasil com categorias e itens de referência para operações internacionais.",
};

type CatalogPageProps = {
  searchParams?: Promise<{
    lang?: string;
  }>;
};

export default async function CatalogPage({ searchParams }: CatalogPageProps) {
  const params = await searchParams;
  const lang = getLanguage(params?.lang);
  const content = copy[lang];

  return (
    <>
      <SiteHeader lang={lang} content={content.header} />
      <main>
        <CatalogSection lang={lang} />
      </main>
      <SiteFooter content={content.footer} />
    </>
  );
}
