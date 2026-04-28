import type { Language } from "@/lib/i18n";

type Category = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  products: string[];
};

type CatalogContent = {
  eyebrow: string;
  title: string;
  description: string;
  backLabel: string;
  categories: Category[];
};

export const productCatalog: Record<Language, CatalogContent> = {
  pt: {
    eyebrow: "Catálogo",
    title: "Produtos organizados para facilitar sua prospecção",
    description:
      "Explore categorias com produtos de referência para acelerar a seleção, validação e negociação internacional.",
    backLabel: "Voltar para o site",
    categories: [
      {
        id: "eletronicos-acessorios-mobile",
        title: "Eletrônicos & Acessórios Mobile",
        tagline: "Produtos de alto giro, baixa barreira e excelente margem",
        description:
          "Itens com alto giro e demanda constante, ideais para distribuição, varejo e marketplaces. Produtos com excelente margem e facilidade de reposição.",
        products: [
          "Capas de celular (silicone, premium, transparente)",
          "Películas (3D, privacidade, vidro temperado)",
          "Cabos (USB-C, Lightning, reforçados)",
          "Carregadores (turbo, veicular)",
          "Fones bluetooth / com fio",
          "Ring light e iluminação para criadores",
          "Fitas LED e iluminação decorativa",
        ],
      },
      {
        id: "casa-cozinha-utilidades",
        title: "Casa, Cozinha & Utilidades",
        tagline: "Produtos virais, funcionais e com apelo visual forte",
        description:
          "Produtos funcionais com alto apelo visual, ideais para e-commerce, lojas físicas e vendas por redes sociais. Forte potencial de viralização.",
        products: [
          "Utensílios de cozinha (kits silicone, bowls, mixers)",
          "Organizadores domésticos",
          "Escorredores de louça",
          "Tábuas multifuncionais",
          "Luminárias (mesa, teto, LED)",
          "Produtos de limpeza inteligente",
        ],
      },
      {
        id: "automotivo-pet-utilidades-diversas",
        title: "Automotivo, Pet & Utilidades Diversas",
        tagline: "Linha complementar com alta recorrência e ticket médio variável",
        description:
          "Categoria estratégica para diversificação de portfólio, com produtos de necessidade recorrente e forte aceitação no mercado.",
        products: [
          "Acessórios automotivos",
          "Pneus e itens de manutenção",
          "Produtos pet (escovas, tapetes, higiene)",
          "Ferramentas pequenas",
          "Organizadores multiuso",
        ],
      },
      {
        id: "energia-mobilidade-projetos-especiais",
        title: "Energia, Mobilidade & Projetos Especiais",
        tagline: "Produtos de maior valor e operações estruturadas",
        description:
          "Soluções de maior escala e valor agregado, voltadas para empresas, investidores e projetos estruturados com suporte completo da ATC.",
        products: [
          "Motos elétricas",
          "Painéis solares",
          "Iluminação industrial",
          "Equipamentos sob demanda",
          "Projetos industriais e agro",
        ],
      },
    ],
  },
  en: {
    eyebrow: "Catalog",
    title: "Products organized to streamline your sourcing process",
    description:
      "Browse curated categories with reference products to speed up selection, validation and international negotiation.",
    backLabel: "Back to website",
    categories: [
      {
        id: "electronics-mobile-accessories",
        title: "Electronics & Mobile Accessories",
        tagline: "Fast-moving products with low entry barriers and strong margins",
        description:
          "High-turnover items with constant demand, ideal for distribution, retail and marketplaces. Products with strong margins and easy replenishment.",
        products: [
          "Phone cases (silicone, premium, transparent)",
          "Screen protectors (3D, privacy, tempered glass)",
          "Cables (USB-C, Lightning, reinforced)",
          "Chargers (fast charging, car chargers)",
          "Bluetooth / wired earphones",
          "Ring lights and creator lighting",
          "LED strips and decorative lighting",
        ],
      },
      {
        id: "home-kitchen-utilities",
        title: "Home, Kitchen & Utilities",
        tagline: "Viral, functional products with strong visual appeal",
        description:
          "Functional products with strong visual appeal, ideal for e-commerce, physical stores and social commerce. Strong viral potential.",
        products: [
          "Kitchen utensils (silicone kits, bowls, mixers)",
          "Home organizers",
          "Dish racks",
          "Multifunctional cutting boards",
          "Lighting fixtures (desk, ceiling, LED)",
          "Smart cleaning products",
        ],
      },
      {
        id: "automotive-pet-diverse-utilities",
        title: "Automotive, Pet & Diverse Utilities",
        tagline: "Complementary line with high recurrence and variable ticket size",
        description:
          "A strategic category for portfolio diversification, with recurring-need products and strong market acceptance.",
        products: [
          "Automotive accessories",
          "Tires and maintenance items",
          "Pet products (brushes, mats, hygiene)",
          "Small tools",
          "Multipurpose organizers",
        ],
      },
      {
        id: "energy-mobility-special-projects",
        title: "Energy, Mobility & Special Projects",
        tagline: "Higher-value products and structured operations",
        description:
          "Larger-scale, higher value-added solutions for companies, investors and structured projects with full ATC support.",
        products: [
          "Electric motorcycles",
          "Solar panels",
          "Industrial lighting",
          "On-demand equipment",
          "Industrial and agribusiness projects",
        ],
      },
    ],
  },
  zh: {
    eyebrow: "产品目录",
    title: "按品类组织产品，便于快速筛选",
    description:
      "浏览精选分类与参考产品，加快选品、验证与国际采购谈判流程。",
    backLabel: "返回网站",
    categories: [
      {
        id: "electronics-mobile-accessories",
        title: "电子产品与手机配件",
        tagline: "高周转、低门槛、利润空间良好的产品",
        description:
          "高周转且需求稳定的产品，适合分销、零售和电商平台。产品利润空间良好，补货便利。",
        products: [
          "手机壳（硅胶、高端款、透明款）",
          "手机膜（3D、防窥、钢化玻璃）",
          "数据线（USB-C、Lightning、加固款）",
          "充电器（快充、车载）",
          "蓝牙耳机 / 有线耳机",
          "补光灯与创作者照明",
          "LED 灯带与装饰照明",
        ],
      },
      {
        id: "home-kitchen-utilities",
        title: "家居、厨房与日用产品",
        tagline: "具备传播潜力、实用性和强视觉吸引力的产品",
        description:
          "兼具功能性与视觉吸引力的产品，适合电商、实体店和社交媒体销售，具备较强传播潜力。",
        products: [
          "厨房用品（硅胶套装、碗具、搅拌器）",
          "家居收纳用品",
          "碗碟沥水架",
          "多功能砧板",
          "灯具（台灯、吸顶灯、LED）",
          "智能清洁产品",
        ],
      },
      {
        id: "automotive-pet-diverse-utilities",
        title: "汽车、宠物与多用途产品",
        tagline: "高复购、客单价灵活的补充产品线",
        description:
          "适合丰富产品组合的战略品类，覆盖重复需求产品，并在市场中具备较高接受度。",
        products: [
          "汽车配件",
          "轮胎与维护用品",
          "宠物产品（刷子、垫子、清洁卫生）",
          "小型工具",
          "多用途收纳用品",
        ],
      },
      {
        id: "energy-mobility-special-projects",
        title: "能源、出行与专项项目",
        tagline: "高价值产品与结构化业务",
        description:
          "面向企业、投资者和结构化项目的更大规模、高附加值解决方案，并由 ATC 提供完整支持。",
        products: [
          "电动摩托车",
          "太阳能板",
          "工业照明",
          "按需定制设备",
          "工业与农业项目",
        ],
      },
    ],
  },
};
