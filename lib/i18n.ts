export const languages = ["pt", "en", "zh"] as const;

export type Language = (typeof languages)[number];

export function getLanguage(value?: string): Language {
  return languages.includes(value as Language) ? (value as Language) : "pt";
}

export function localizedHref(lang: Language, anchor = "") {
  return `/?lang=${lang}${anchor}`;
}

export function localizedPath(lang: Language, path: string) {
  return `${path}?lang=${lang}`;
}

export const copy = {
  pt: {
    languageName: "Português",
    languageMenuLabel: "Idioma",
    whatsappAriaLabel: "Falar no WhatsApp",
    header: {
      brandLabel: "China Brasil",
      menuLabel: "Menu",
      nav: [
        { href: "#como-funciona", label: "Como funciona" },
        { href: "#servicos", label: "Serviços" },
        { href: "#diferenciais", label: "Diferenciais" },
        { href: "#estatisticas", label: "Resultados" },
        { href: "/catalogo", label: "Catálogo" },
      ],
      ctaLabel: "Falar com especialista",
      ctaMessage: "Olá, quero solicitar uma cotação internacional.",
    },
    hero: {
      title:
        "Soluções estratégicas que conectam você ao comércio internacional",
      description:
        "Conectamos sua empresa às principais indústrias globais, com estratégia, segurança e atuação local na China.",
      primaryCtaLabel: "Falar com especialista",
      primaryCtaMessage: "Olá, quero falar com um especialista da ATC.",
      secondaryCtaLabel: "Como funciona",
      stats: [
        { value: "+1MM", label: "toneladas exportadas" },
        { value: "+3.000", label: "clientes atendidos" },
        { value: "+8", label: "países com operações" },
      ],
    },
    howItWorks: {
      eyebrow: "Como funciona",
      title: "Um processo estruturado para reduzir risco e maximizar resultado",
      description:
        "Operamos com um modelo validado internacionalmente, garantindo controle em cada etapa da importação.",
      steps: [
        {
          title: "Diagnóstico Estratégico",
          desc: "Analisamos produto, volume, margem, mercado e viabilidade da operação. Você recebe uma visão clara antes de investir.",
        },
        {
          title: "Sourcing, Validação & Negociação",
          desc: "Identificamos fábricas qualificadas, realizamos due diligence e negociamos direto na origem, sem intermediários desnecessários.",
        },
        {
          title: "Logística Internacional & Entrega Final",
          desc: "Gerenciamos frete, documentação, desembaraço e entrega até o destino final da operação.",
        },
      ],
      highlight:
        "Cada etapa é desenhada para dar visibilidade, controle e segurança comercial antes da tomada de decisão.",
    },
    services: {
      eyebrow: "Serviços",
      title: "Soluções completas para operações internacionais",
      description:
        "Atuação consultiva e operacional para empresas que precisam escalar com inteligência, controle e execução internacional confiável.",
      items: [
        {
          title: "Importação Estratégica (End-to-End)",
          desc: "Operação completa, do planejamento à entrega. Modelo chave na mão para empresas que buscam escala com segurança.",
        },
        {
          title: "Sourcing & Desenvolvimento na China",
          desc: "Busca, validação e negociação direta com fábricas homologadas, incluindo auditoria, amostras e análise técnica.",
        },
        {
          title: "Intermediação Internacional de Negócios",
          desc: "Conectamos compradores e fornecedores globais com segurança jurídica e inteligência cultural.",
        },
        {
          title: "Exportação & Commodities",
          desc: "Estruturação e execução de operações internacionais para produtos brasileiros.",
        },
      ],
    },
    operationModels: {
      eyebrow: "Modelos de operação",
      title:
        "Estrutura comercial adaptada ao nível de suporte que sua operação exige",
      description:
        "Atuamos tanto como parceiro estratégico na intermediação quanto na execução integral da importação, conforme a maturidade e o objetivo do seu negócio.",
      items: [
        {
          title: "Consultoria + intermediação",
          desc: "Estruturamos a operação, validamos fornecedores e conduzimos a negociação para empresas que já possuem time interno e precisam de inteligência local para executar com segurança.",
          highlight:
            "Ideal para quem quer manter controle interno com suporte estratégico.",
        },
        {
          title: "Importação completa (chave na mão)",
          desc: "Assumimos o fluxo completo da operação internacional, do planejamento ao destino final, com gestão integrada de sourcing, produção, qualidade, logística e documentação.",
          highlight:
            "Modelo indicado para empresas que buscam escala com previsibilidade operacional.",
        },
      ],
    },
    differentials: {
      eyebrow: "Diferenciais",
      title: "Estrutura global + inteligência operacional",
      description:
        "A operação combina presença internacional, execução local e governança comercial para reduzir risco em negociações globais.",
      imageAlt: "Navio cargueiro com containers",
      items: [
        {
          title: "Presença internacional real",
          desc: "Equipe e operações entre China, Brasil e hubs estratégicos internacionais.",
        },
        {
          title: "Acesso direto à origem",
          desc: "Relacionamento com fábricas e negociação sem intermediários.",
        },
        {
          title: "Segurança jurídica internacional",
          desc: "Contratos estruturados no país de origem com proteção operacional.",
        },
        {
          title: "Capacidade de operações complexas",
          desc: "Experiência com projetos industriais, commodities e contratos de grande escala.",
        },
      ],
    },
    cases: {
      eyebrow: "Casos e projetos",
      title: "Experiência aplicada em operações que exigem lastro real",
      description:
        "Atuação em projetos industriais, exportações estruturadas e operações internacionais que demandam execução precisa.",
      items: [
        {
          title: "Projeto com indústria automotiva",
          desc: "Coordenação internacional para atendimento de demanda industrial com critérios técnicos, validação de fornecedor e controle de risco operacional.",
        },
        {
          title: "Exportação de commodities",
          desc: "Estruturação de operações internacionais para produtos brasileiros, com alinhamento comercial, documentação e execução logística ponta a ponta.",
        },
        {
          title: "Operações industriais complexas",
          desc: "Gestão de projetos com múltiplas etapas, fornecedores homologados e acompanhamento rigoroso de produção, conformidade e entrega.",
        },
      ],
    },
    audience: {
      eyebrow: "Para quem é",
      title:
        "A ATC opera para empresas e projetos que tratam comércio internacional como estratégia",
      profileLabel: "Perfil",
      items: [
        {
          title: "Indústrias",
          desc: "Para empresas que precisam de fornecimento internacional confiável, padronização técnica e escala operacional.",
        },
        {
          title: "Distribuidores",
          desc: "Para operações que buscam margem, previsibilidade de abastecimento e acesso direto à origem.",
        },
        {
          title: "Importadores",
          desc: "Para negócios que querem reduzir risco, validar fornecedores e profissionalizar a cadeia internacional.",
        },
      ],
    },
    authorityMedia: {
      eyebrow: "Em campo",
      title: "Operação real, presença internacional e execução comprovada",
      description:
        "Registros de operações, visitas técnicas e acompanhamento direto em ambientes industriais e logísticos.",
      videoLabel: "Operação em movimento",
      imageAlt: "Registro de operação internacional da ATC",
    },
    stats: {
      eyebrow: "Autoridade",
      title: "Números que sustentam nossa operação",
      description:
        "Resultados construídos em operações internacionais reais, com capacidade de execução em diferentes mercados e níveis de complexidade.",
      items: [
        { value: "+1MM", label: "toneladas exportadas" },
        { value: "+3.000", label: "clientes atendidos" },
        { value: "+8", label: "países com operações" },
      ],
    },
    faq: {
      eyebrow: "Perguntas frequentes",
      title: "Respostas objetivas para decisões internacionais mais seguras",
      items: [
        {
          question: "A ATC atua apenas com importação da China?",
          answer:
            "Não. A operação tem forte presença na China, mas também estruturamos exportações brasileiras e intermediações internacionais em diferentes mercados.",
        },
        {
          question:
            "Vocês podem operar desde a busca do fornecedor até a entrega final?",
          answer:
            "Sim. No modelo chave na mão, conduzimos planejamento, sourcing, validação, negociação, produção, qualidade, logística, desembaraço e entrega.",
        },
        {
          question:
            "A empresa atende projetos industriais e operações complexas?",
          answer:
            "Sim. A atuação inclui operações industriais, commodities e projetos com exigência técnica, documental e contratual mais elevada.",
        },
        {
          question: "É possível contratar apenas consultoria ou intermediação?",
          answer:
            "Sim. Também atuamos em formato consultivo e de intermediação para empresas que já possuem equipe interna e precisam de suporte estratégico na origem.",
        },
        {
          question: "Como iniciar uma análise da minha operação?",
          answer:
            "O primeiro passo é falar com a equipe pelo WhatsApp para apresentar produto, volume, objetivo e estágio atual da operação. A partir disso, definimos o melhor modelo de atuação.",
        },
      ],
    },
    cta: {
      title: "Pronto para importar com segurança e escala?",
      description:
        "Fale com um especialista da ATC China Brasil e receba um diagnóstico gratuito do seu projeto.",
      quoteLabel: "Solicitar cotação internacional",
      quoteMessage: "Olá, quero solicitar uma cotação internacional.",
      specialistLabel: "Falar com especialista",
      specialistMessage: "Olá, quero falar com um especialista da ATC.",
    },
    footer: {
      description:
        "Soluções em importação, exportação e sourcing internacional.",
      rights: "Todos os direitos reservados.",
    },
  },
  en: {
    languageName: "English",
    languageMenuLabel: "Language",
    whatsappAriaLabel: "Chat on WhatsApp",
    header: {
      brandLabel: "China Brazil",
      menuLabel: "Menu",
      nav: [
        { href: "#como-funciona", label: "How it works" },
        { href: "#servicos", label: "Services" },
        { href: "#diferenciais", label: "Differentials" },
        { href: "#estatisticas", label: "Results" },
        { href: "/catalogo", label: "Catalog" },
      ],
      ctaLabel: "Talk to a specialist",
      ctaMessage: "Hello, I would like to request an international quotation.",
    },
    hero: {
      title: "International import, export and sourcing solutions",
      description:
        "We connect your company directly with the world's best factories, combining security, strategy and local presence in China.",
      primaryCtaLabel: "Talk to a specialist",
      primaryCtaMessage: "Hello, I would like to talk to an ATC specialist.",
      secondaryCtaLabel: "How it works",
      stats: [
        { value: "+1MM", label: "tons exported" },
        { value: "+3,000", label: "clients served" },
        { value: "+8", label: "countries with operations" },
      ],
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "A structured process to reduce risk and maximize results",
      description:
        "We operate with an internationally validated model, ensuring control at every stage of the import process.",
      steps: [
        {
          title: "Strategic Diagnosis",
          desc: "We assess product, volume, margin, market and operational feasibility. You gain a clear picture before investing.",
        },
        {
          title: "Sourcing, Validation & Negotiation",
          desc: "We identify qualified factories, perform due diligence and negotiate directly at origin, without unnecessary intermediaries.",
        },
        {
          title: "International Logistics & Final Delivery",
          desc: "We manage freight, documentation, customs clearance and delivery to the final destination.",
        },
      ],
      highlight:
        "Every stage is designed to provide visibility, control and commercial security before decisions are made.",
    },
    services: {
      eyebrow: "Services",
      title: "Complete solutions for international operations",
      description:
        "Consulting and operational support for companies that need to scale with intelligence, control and reliable international execution.",
      items: [
        {
          title: "Strategic Importing (End-to-End)",
          desc: "Complete operation from planning to delivery. A turnkey model for companies seeking scale with security.",
        },
        {
          title: "Sourcing & Product Development in China",
          desc: "Search, validation and direct negotiation with approved factories, including audits, samples and technical review.",
        },
        {
          title: "International Business Intermediation",
          desc: "We connect global buyers and suppliers with legal certainty and cultural intelligence.",
        },
        {
          title: "Exports & Commodities",
          desc: "Structuring and execution of international operations for Brazilian products.",
        },
      ],
    },
    operationModels: {
      eyebrow: "Operating models",
      title:
        "Commercial structure adapted to the level of support your operation requires",
      description:
        "We act both as a strategic intermediation partner and as the operator for full import execution, according to your company's maturity and goals.",
      items: [
        {
          title: "Consulting + intermediation",
          desc: "We structure the operation, validate suppliers and lead negotiations for companies that already have an internal team and need local intelligence to execute safely.",
          highlight:
            "Ideal for companies that want to keep internal control with strategic support.",
        },
        {
          title: "Full importing (turnkey)",
          desc: "We take responsibility for the entire international flow, from planning to final destination, with integrated management of sourcing, production, quality, logistics and documentation.",
          highlight:
            "Recommended for companies seeking scale with operational predictability.",
        },
      ],
    },
    differentials: {
      eyebrow: "Differentials",
      title: "Global structure + operational intelligence",
      description:
        "Our operation combines international presence, local execution and commercial governance to reduce risk in global negotiations.",
      imageAlt: "Container ship at port",
      items: [
        {
          title: "Real international presence",
          desc: "Teams and operations across China, Brazil and strategic international hubs.",
        },
        {
          title: "Direct access to origin",
          desc: "Relationships with factories and direct negotiation without intermediaries.",
        },
        {
          title: "International legal security",
          desc: "Contracts structured in the country of origin with operational protection.",
        },
        {
          title: "Capacity for complex operations",
          desc: "Experience with industrial projects, commodities and large-scale contracts.",
        },
      ],
    },
    cases: {
      eyebrow: "Cases and projects",
      title: "Practical experience in operations that demand real backing",
      description:
        "Work across industrial projects, structured exports and international operations that require precise execution.",
      items: [
        {
          title: "Automotive industry project",
          desc: "International coordination to serve industrial demand with technical criteria, supplier validation and operational risk control.",
        },
        {
          title: "Commodity Export",
          desc: "Structuring international operations for Brazilian products, including commercial alignment, documentation, and end-to-end logistics execution.",
        },
        {
          title: "Complex industrial operations",
          desc: "Project management with multiple stages, qualified suppliers and strict monitoring of production, compliance and delivery.",
        },
      ],
    },
    audience: {
      eyebrow: "Who it's for",
      title:
        "ATC operates for companies and projects that treat international trade as strategy",
      profileLabel: "Profile",
      items: [
        {
          title: "Industries",
          desc: "For companies that need reliable international supply, technical standardization and operational scale.",
        },
        {
          title: "Distributors",
          desc: "For operations seeking margin, supply predictability and direct access to origin.",
        },
        {
          title: "Importers",
          desc: "For businesses that want to reduce risk, validate suppliers and professionalize their international chain.",
        },
      ],
    },
    authorityMedia: {
      eyebrow: "In the field",
      title: "Real operations, international presence and proven execution",
      description:
        "Records from operations, technical visits and direct follow-up in industrial and logistics environments.",
      videoLabel: "Operation in motion",
      imageAlt: "ATC international operation record",
    },
    stats: {
      eyebrow: "Authority",
      title: "Numbers that support our operation",
      description:
        "Results built on real international operations, with execution capacity across different markets and levels of complexity.",
      items: [
        { value: "+1MM", label: "tons exported" },
        { value: "+3,000", label: "clients served" },
        { value: "+8", label: "countries with operations" },
      ],
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "Objective answers for safer international decisions",
      items: [
        {
          question: "Does ATC work only with imports from China?",
          answer:
            "No. We have a strong presence in China, but we also structure Brazilian exports and international intermediation in different markets.",
        },
        {
          question:
            "Can you handle everything from supplier search to final delivery?",
          answer:
            "Yes. In the turnkey model, we lead planning, sourcing, validation, negotiation, production, quality, logistics, customs clearance and delivery.",
        },
        {
          question:
            "Does the company handle industrial and complex operations?",
          answer:
            "Yes. Our work includes industrial operations, commodities and projects with higher technical, documentary and contractual requirements.",
        },
        {
          question: "Is it possible to hire only consulting or intermediation?",
          answer:
            "Yes. We also operate in consulting and intermediation formats for companies that already have an internal team and need strategic support at origin.",
        },
        {
          question: "How do I start an analysis of my operation?",
          answer:
            "The first step is to contact the team on WhatsApp to present the product, volume, goals and current stage of the operation. From there, we define the best operating model.",
        },
      ],
    },
    cta: {
      title: "Ready to import with security and scale?",
      description:
        "Talk to an ATC China Brazil specialist and receive a free diagnosis for your project.",
      quoteLabel: "Request international quote",
      quoteMessage:
        "Hello, I would like to request an international quotation.",
      specialistLabel: "Talk to a specialist",
      specialistMessage: "Hello, I would like to talk to an ATC specialist.",
    },
    footer: {
      description: "International import, export and sourcing solutions.",
      rights: "All rights reserved.",
    },
  },
  zh: {
    languageName: "中文",
    languageMenuLabel: "语言",
    whatsappAriaLabel: "通过 WhatsApp 联系",
    header: {
      brandLabel: "中巴贸易",
      menuLabel: "菜单",
      nav: [
        { href: "#como-funciona", label: "运作方式" },
        { href: "#servicos", label: "服务" },
        { href: "#diferenciais", label: "优势" },
        { href: "#estatisticas", label: "成果" },
        { href: "/catalogo", label: "目录" },
      ],
      ctaLabel: "联系专家",
      ctaMessage: "您好，我想申请一份国际报价。",
    },
    hero: {
      title: "国际进口、出口与采购解决方案",
      description:
        "我们将您的企业直接连接到全球优质工厂，以安全、策略和中国本地执行能力推动业务发展。",
      primaryCtaLabel: "联系专家",
      primaryCtaMessage: "您好，我想与 ATC 专家沟通。",
      secondaryCtaLabel: "运作方式",
      stats: [
        { value: "+1MM", label: "出口吨数" },
        { value: "+3,000", label: "服务客户" },
        { value: "+8", label: "业务覆盖国家" },
      ],
    },
    howItWorks: {
      eyebrow: "运作方式",
      title: "以结构化流程降低风险并提升结果",
      description:
        "我们采用经过国际验证的运营模式，确保进口流程每个阶段都可控。",
      steps: [
        {
          title: "战略诊断",
          desc: "我们评估产品、数量、利润、市场与可行性，让您在投入前获得清晰判断。",
        },
        {
          title: "采购、验证与谈判",
          desc: "我们筛选合格工厂，执行尽职调查，并在原产地直接谈判，避免不必要的中间环节。",
        },
        {
          title: "国际物流与最终交付",
          desc: "我们负责运费、文件、清关以及交付到最终目的地。",
        },
      ],
      highlight: "每一个阶段都旨在在决策之前提供透明度、控制力和商业安全。",
    },
    services: {
      eyebrow: "服务",
      title: "国际业务的完整解决方案",
      description:
        "为需要以更高效率、更强控制力和可靠国际执行实现规模化的企业提供咨询与运营支持。",
      items: [
        {
          title: "战略进口（端到端）",
          desc: "从规划到交付的完整操作。适合追求安全扩张的企业的一站式模式。",
        },
        {
          title: "中国采购与产品开发",
          desc: "与合格工厂进行搜寻、验证和直接谈判，包括审厂、样品与技术评估。",
        },
        {
          title: "国际商务撮合",
          desc: "我们以法律保障和文化理解连接全球买家与供应商。",
        },
        {
          title: "出口与大宗商品",
          desc: "为巴西产品提供国际业务的结构设计与执行。",
        },
      ],
    },
    operationModels: {
      eyebrow: "合作模式",
      title: "根据您的业务支持需求配置商业结构",
      description:
        "我们既可以作为战略中介合作伙伴，也可以承担完整进口执行工作，具体取决于企业成熟度和业务目标。",
      items: [
        {
          title: "咨询 + 中介",
          desc: "我们帮助企业搭建业务结构、验证供应商并主导谈判，适合已有内部团队但需要本地情报与安全执行支持的公司。",
          highlight: "适合希望保留内部控制并获得战略支持的企业。",
        },
        {
          title: "全流程进口（一站式）",
          desc: "我们负责从规划到最终交付的全部国际流程，整合采购、生产、质量、物流和文件管理。",
          highlight: "适合追求规模化与运营可预测性的企业。",
        },
      ],
    },
    differentials: {
      eyebrow: "优势",
      title: "全球布局 + 运营智能",
      description:
        "我们的业务将国际布局、本地执行与商业治理结合起来，以降低全球谈判风险。",
      imageAlt: "港口中的集装箱货轮",
      items: [
        {
          title: "真实的国际布局",
          desc: "团队和业务覆盖中国、巴西及多个战略枢纽。",
        },
        {
          title: "直接触达源头",
          desc: "与工厂直接建立关系并开展谈判，无需中间商。",
        },
        {
          title: "国际法律安全",
          desc: "在原产国完成合同结构设计，保障运营安全。",
        },
        {
          title: "复杂项目执行能力",
          desc: "拥有工业项目、大宗商品与大型合同经验。",
        },
      ],
    },
    cases: {
      eyebrow: "案例与项目",
      title: "具备真实背书的国际业务实战经验",
      description: "覆盖工业项目、结构化出口以及需要精确执行的国际业务。",
      items: [
        {
          title: "汽车工业项目",
          desc: "以技术标准、供应商验证和运营风险控制为基础协调国际工业需求。",
        },
        {
          title: "蛋白产品出口",
          desc: "为巴西产品设计国际出口方案，协调商务、单证与端到端物流执行。",
        },
        {
          title: "复杂工业业务",
          desc: "管理多阶段项目、合格供应商以及对生产、合规和交付的严格跟踪。",
        },
      ],
    },
    audience: {
      eyebrow: "适用对象",
      title: "ATC 服务于将国际贸易视为战略的企业和项目",
      profileLabel: "类型",
      items: [
        {
          title: "工业企业",
          desc: "适合需要可靠国际供应、技术标准化和运营规模的企业。",
        },
        {
          title: "大宗商品出口",
          desc: "为巴西产品搭建国际业务运营架构，涵盖商务对接、文件准备以及端到端物流执行。",
        },
        {
          title: "进口商",
          desc: "适合希望降低风险、验证供应商并提升国际供应链专业度的企业。",
        },
      ],
    },
    authorityMedia: {
      eyebrow: "现场实力",
      title: "真实业务、国际布局与经过验证的执行能力",
      description: "来自业务现场、技术拜访以及工业和物流环境直接跟进的记录。",
      videoLabel: "业务动态",
      imageAlt: "ATC 国际业务记录",
    },
    stats: {
      eyebrow: "实力",
      title: "支撑我们业务的关键数字",
      description:
        "成果来自真实国际业务执行，覆盖不同市场和不同复杂程度的项目。",
      items: [
        { value: "+1MM", label: "出口吨数" },
        { value: "+3,000", label: "服务客户" },
        { value: "+8", label: "业务覆盖国家" },
      ],
    },
    faq: {
      eyebrow: "常见问题",
      title: "为更安全的国际决策提供直接答案",
      items: [
        {
          question: "ATC 只做中国进口业务吗？",
          answer:
            "不是。我们在中国有很强的本地布局，同时也为巴西出口和其他国际市场的商务撮合提供服务。",
        },
        {
          question: "你们能从找供应商一直做到最终交付吗？",
          answer:
            "可以。在一站式模式下，我们负责规划、采购、验证、谈判、生产、质量、物流、清关和交付。",
        },
        {
          question: "公司是否承接工业和复杂业务项目？",
          answer:
            "可以。我们的业务包括工业项目、大宗商品，以及对技术、单证和合同要求更高的项目。",
        },
        {
          question: "是否可以只聘请咨询或中介服务？",
          answer:
            "可以。对于已有内部团队、但在原产地仍需要战略支持的企业，我们也提供咨询和中介服务。",
        },
        {
          question: "如何开始评估我的业务？",
          answer:
            "第一步是在 WhatsApp 上联系团队，说明产品、数量、目标以及业务当前阶段。随后我们会定义最合适的合作模式。",
        },
      ],
    },
    cta: {
      title: "准备好更安全、更高效地开展进口了吗？",
      description: "与 ATC China Brazil 专家沟通，免费获得您的项目诊断。",
      quoteLabel: "申请国际报价",
      quoteMessage: "您好，我想申请一份国际报价。",
      specialistLabel: "联系专家",
      specialistMessage: "您好，我想与 ATC 专家沟通。",
    },
    footer: {
      description: "国际进口、出口与采购解决方案。",
      rights: "版权所有。",
    },
  },
} as const;
