import YahooFinance from "yahoo-finance2";
import { NextResponse } from "next/server";
import { type Language } from "@/lib/i18n";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const yahooFinance = new YahooFinance();

const labels: Record<Language, Record<string, string>> = {
  pt: {
    "BRL=X": "Dólar",
    "CNYBRL=X": "RMB",
    "GC=F": "Ouro",
    "SI=F": "Prata",
    "CL=F": "Petróleo WTI",
    "BZ=F": "Brent",
    "HG=F": "Cobre",
    "ZS=F": "Soja",
    "ZC=F": "Milho",
    "KC=F": "Café",
  },
  en: {
    "BRL=X": "US Dollar",
    "CNYBRL=X": "RMB",
    "GC=F": "Gold",
    "SI=F": "Silver",
    "CL=F": "WTI Oil",
    "BZ=F": "Brent",
    "HG=F": "Copper",
    "ZS=F": "Soybean",
    "ZC=F": "Corn",
    "KC=F": "Coffee",
  },
  zh: {
    "BRL=X": "美元",
    "CNYBRL=X": "人民币",
    "GC=F": "黄金",
    "SI=F": "白银",
    "CL=F": "WTI 原油",
    "BZ=F": "布伦特",
    "HG=F": "铜",
    "ZS=F": "大豆",
    "ZC=F": "玉米",
    "KC=F": "咖啡",
  },
};

const symbols = Object.keys(labels.pt);
const brlPairs = new Set(["BRL=X", "CNYBRL=X"]);

function getLanguage(value: string | null): Language {
  return value === "en" || value === "zh" ? value : "pt";
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lang = getLanguage(searchParams.get("lang"));

  const results = await Promise.allSettled(
    symbols.map(async (symbol) => {
      const quote = await yahooFinance.quote(symbol);
      const currency = brlPairs.has(symbol)
        ? "BRL"
        : quote.currency === "USX"
          ? "USD"
          : (quote.currency ?? "USD");
      const unitFactor = quote.currency === "USX" ? 100 : 1;
      const price =
        quote.regularMarketPrice === undefined
          ? null
          : quote.regularMarketPrice / unitFactor;
      const change =
        quote.regularMarketChange === undefined
          ? null
          : quote.regularMarketChange / unitFactor;

      return {
        symbol,
        label: labels[lang][symbol],
        price,
        change,
        changePercent: quote.regularMarketChangePercent ?? null,
        currency,
        marketTime: quote.regularMarketTime ?? null,
      };
    }),
  );

  const commodities = results
    .filter((result) => result.status === "fulfilled")
    .map((result) => result.value)
    .filter((quote) => quote.price !== null);

  return NextResponse.json(
    {
      commodities,
      updatedAt: new Date().toISOString(),
    },
    {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    },
  );
}
