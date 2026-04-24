import type { Language } from "@/lib/i18n";

type Product = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

type Category = {
  id: string;
  title: string;
  description: string;
  products: Product[];
};

type CatalogContent = {
  eyebrow: string;
  title: string;
  description: string;
  backLabel: string;
  categories: Category[];
};

function createProductImage(label: string, background: string, accent: string) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${background}" />
          <stop offset="100%" stop-color="#081830" />
        </linearGradient>
      </defs>
      <rect width="800" height="520" rx="36" fill="url(#bg)" />
      <circle cx="130" cy="110" r="72" fill="${accent}" opacity="0.28" />
      <circle cx="675" cy="410" r="112" fill="${accent}" opacity="0.18" />
      <rect x="72" y="88" width="656" height="344" rx="28" fill="white" fill-opacity="0.08" stroke="white" stroke-opacity="0.22" />
      <text x="72" y="380" fill="white" font-family="Arial, Helvetica, sans-serif" font-size="58" font-weight="700">
        ${label}
      </text>
      <text x="72" y="428" fill="white" fill-opacity="0.7" font-family="Arial, Helvetica, sans-serif" font-size="26">
        ATC Product Catalog
      </text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export const productCatalog: Record<Language, CatalogContent> = {
  pt: {
    eyebrow: "Catálogo",
    title: "Produtos organizados para facilitar sua prospecção",
    description:
      "Explore categorias com produtos de referência para acelerar a seleção, validação e negociação internacional.",
    backLabel: "Voltar para o site",
    categories: [
      {
        id: "eletronicos",
        title: "Eletrônicos",
        description: "Itens com alta demanda e bom potencial de escala para distribuição e varejo.",
        products: [
          {
            title: "Smartwatch Pro X9",
            description: "Relógio inteligente com tela AMOLED, monitoramento de saúde e bateria de longa duração.",
            image: createProductImage("Smartwatch Pro X9", "#00A6A6", "#7AE7FF"),
            imageAlt: "Ilustração do produto Smartwatch Pro X9",
          },
          {
            title: "Fone Bluetooth Pulse",
            description: "Fone sem fio com cancelamento de ruído, estojo compacto e conexão estável.",
            image: createProductImage("Fone Bluetooth Pulse", "#125B9A", "#5AD1FF"),
            imageAlt: "Ilustração do produto Fone Bluetooth Pulse",
          },
          {
            title: "Caixa de Som Orbit",
            description: "Speaker portátil com graves reforçados, proteção contra respingos e autonomia estendida.",
            image: createProductImage("Caixa de Som Orbit", "#174E4F", "#8FF3D3"),
            imageAlt: "Ilustração do produto Caixa de Som Orbit",
          },
        ],
      },
      {
        id: "beleza",
        title: "Beleza",
        description: "Linhas pensadas para marcas próprias, kits promocionais e operações de e-commerce.",
        products: [
          {
            title: "Secador Ionic Care",
            description: "Secador de alta performance com controle térmico e acabamento premium.",
            image: createProductImage("Secador Ionic Care", "#9B4D96", "#F2A7DF"),
            imageAlt: "Ilustração do produto Secador Ionic Care",
          },
          {
            title: "Escova Facial Glow",
            description: "Escova elétrica para limpeza facial com modos suaves e recarregamento USB.",
            image: createProductImage("Escova Facial Glow", "#C26E5A", "#FFD0A8"),
            imageAlt: "Ilustração do produto Escova Facial Glow",
          },
          {
            title: "Kit de Maquiagem Studio",
            description: "Kit compacto com acabamento profissional para varejo, presentes e assinatura.",
            image: createProductImage("Kit de Maquiagem Studio", "#C84C5B", "#FFC7CF"),
            imageAlt: "Ilustração do produto Kit de Maquiagem Studio",
          },
        ],
      },
      {
        id: "casa-e-cozinha",
        title: "Casa e Cozinha",
        description: "Produtos funcionais com apelo visual forte para marketplaces e lojas especializadas.",
        products: [
          {
            title: "Air Fryer Compact 5L",
            description: "Fritadeira elétrica com painel digital, múltiplas funções e cesto antiaderente.",
            image: createProductImage("Air Fryer Compact 5L", "#A55C1B", "#FFC874"),
            imageAlt: "Ilustração do produto Air Fryer Compact 5L",
          },
          {
            title: "Mixer Chef Blend",
            description: "Mixer multifuncional com acessórios para preparo rápido em cozinhas residenciais.",
            image: createProductImage("Mixer Chef Blend", "#486A3A", "#C8F08A"),
            imageAlt: "Ilustração do produto Mixer Chef Blend",
          },
          {
            title: "Luminária Aura Desk",
            description: "Luminária LED articulada com design minimalista e ajuste de intensidade.",
            image: createProductImage("Luminária Aura Desk", "#364E91", "#B8C8FF"),
            imageAlt: "Ilustração do produto Luminária Aura Desk",
          },
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
        id: "electronics",
        title: "Electronics",
        description: "High-demand items with strong scale potential for retail and distribution.",
        products: [
          {
            title: "Smartwatch Pro X9",
            description: "Smartwatch with AMOLED display, health tracking and long battery life.",
            image: createProductImage("Smartwatch Pro X9", "#00A6A6", "#7AE7FF"),
            imageAlt: "Illustration of the Smartwatch Pro X9 product",
          },
          {
            title: "Pulse Bluetooth Earbuds",
            description: "Wireless earbuds with noise cancellation, compact case and stable connection.",
            image: createProductImage("Pulse Bluetooth Earbuds", "#125B9A", "#5AD1FF"),
            imageAlt: "Illustration of the Pulse Bluetooth Earbuds product",
          },
          {
            title: "Orbit Speaker",
            description: "Portable speaker with deep bass, splash protection and extended battery life.",
            image: createProductImage("Orbit Speaker", "#174E4F", "#8FF3D3"),
            imageAlt: "Illustration of the Orbit Speaker product",
          },
        ],
      },
      {
        id: "beauty",
        title: "Beauty",
        description: "Lines designed for private label brands, promotional kits and e-commerce operations.",
        products: [
          {
            title: "Ionic Care Dryer",
            description: "High-performance hair dryer with thermal control and premium finish.",
            image: createProductImage("Ionic Care Dryer", "#9B4D96", "#F2A7DF"),
            imageAlt: "Illustration of the Ionic Care Dryer product",
          },
          {
            title: "Glow Facial Brush",
            description: "Electric facial cleansing brush with gentle modes and USB charging.",
            image: createProductImage("Glow Facial Brush", "#C26E5A", "#FFD0A8"),
            imageAlt: "Illustration of the Glow Facial Brush product",
          },
          {
            title: "Studio Makeup Kit",
            description: "Compact makeup kit with professional finish for retail, gifting and subscriptions.",
            image: createProductImage("Studio Makeup Kit", "#C84C5B", "#FFC7CF"),
            imageAlt: "Illustration of the Studio Makeup Kit product",
          },
        ],
      },
      {
        id: "home-kitchen",
        title: "Home & Kitchen",
        description: "Functional products with strong visual appeal for marketplaces and specialty stores.",
        products: [
          {
            title: "Compact Air Fryer 5L",
            description: "Digital air fryer with multiple cooking modes and non-stick basket.",
            image: createProductImage("Compact Air Fryer 5L", "#A55C1B", "#FFC874"),
            imageAlt: "Illustration of the Compact Air Fryer 5L product",
          },
          {
            title: "Chef Blend Mixer",
            description: "Multifunctional hand blender with accessories for fast home cooking.",
            image: createProductImage("Chef Blend Mixer", "#486A3A", "#C8F08A"),
            imageAlt: "Illustration of the Chef Blend Mixer product",
          },
          {
            title: "Aura Desk Lamp",
            description: "Articulated LED lamp with minimalist design and brightness adjustment.",
            image: createProductImage("Aura Desk Lamp", "#364E91", "#B8C8FF"),
            imageAlt: "Illustration of the Aura Desk Lamp product",
          },
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
        id: "electronics",
        title: "电子产品",
        description: "适合零售与分销的高需求产品，具备良好的规模化潜力。",
        products: [
          {
            title: "Smartwatch Pro X9",
            description: "配备 AMOLED 屏幕、健康监测和长续航能力的智能手表。",
            image: createProductImage("Smartwatch Pro X9", "#00A6A6", "#7AE7FF"),
            imageAlt: "Smartwatch Pro X9 产品示意图",
          },
          {
            title: "Pulse 蓝牙耳机",
            description: "具备降噪、便携充电盒和稳定连接的无线耳机。",
            image: createProductImage("Pulse Bluetooth Earbuds", "#125B9A", "#5AD1FF"),
            imageAlt: "Pulse 蓝牙耳机产品示意图",
          },
          {
            title: "Orbit 音箱",
            description: "便携音箱，低音增强，支持防泼溅并具备更长续航。",
            image: createProductImage("Orbit Speaker", "#174E4F", "#8FF3D3"),
            imageAlt: "Orbit 音箱产品示意图",
          },
        ],
      },
      {
        id: "beauty",
        title: "美妆个护",
        description: "适合自有品牌、促销套装和电商销售的产品线。",
        products: [
          {
            title: "Ionic Care 吹风机",
            description: "高性能吹风机，带温控系统与高级外观。",
            image: createProductImage("Ionic Care Dryer", "#9B4D96", "#F2A7DF"),
            imageAlt: "Ionic Care 吹风机产品示意图",
          },
          {
            title: "Glow 洁面刷",
            description: "USB 充电电动洁面刷，提供温和清洁模式。",
            image: createProductImage("Glow Facial Brush", "#C26E5A", "#FFD0A8"),
            imageAlt: "Glow 洁面刷产品示意图",
          },
          {
            title: "Studio 彩妆套装",
            description: "紧凑型彩妆套装，适用于零售、礼品和订阅场景。",
            image: createProductImage("Studio Makeup Kit", "#C84C5B", "#FFC7CF"),
            imageAlt: "Studio 彩妆套装产品示意图",
          },
        ],
      },
      {
        id: "home-kitchen",
        title: "家居与厨房",
        description: "兼顾实用性与视觉吸引力，适合平台和专业门店。",
        products: [
          {
            title: "Compact Air Fryer 5L",
            description: "数显空气炸锅，支持多种烹饪模式和不粘炸篮。",
            image: createProductImage("Compact Air Fryer 5L", "#A55C1B", "#FFC874"),
            imageAlt: "Compact Air Fryer 5L 产品示意图",
          },
          {
            title: "Chef Blend 搅拌器",
            description: "多功能搅拌器，配件齐全，适合家庭快速烹饪。",
            image: createProductImage("Chef Blend Mixer", "#486A3A", "#C8F08A"),
            imageAlt: "Chef Blend 搅拌器产品示意图",
          },
          {
            title: "Aura 台灯",
            description: "极简风 LED 台灯，支持角度调节和亮度控制。",
            image: createProductImage("Aura Desk Lamp", "#364E91", "#B8C8FF"),
            imageAlt: "Aura 台灯产品示意图",
          },
        ],
      },
    ],
  },
};
