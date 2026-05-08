import { NextResponse } from "next/server";
import { getInfoMoneyNews } from "@/lib/infomoney-news";

export const dynamic = "force-dynamic";
export const revalidate = 900;

export async function GET() {
  try {
    const news = await getInfoMoneyNews();

    return NextResponse.json(
      {
        news,
        updatedAt: new Date().toISOString(),
      },
      {
        headers: {
          "Cache-Control": "s-maxage=900, stale-while-revalidate=1800",
        },
      },
    );
  } catch {
    return NextResponse.json(
      {
        news: [],
        updatedAt: new Date().toISOString(),
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-store",
        },
      },
    );
  }
}
