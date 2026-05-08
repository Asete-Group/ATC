import { NextResponse } from "next/server";
import { getInfoMoneyFeedKey, getInfoMoneyNews } from "@/lib/infomoney-news";

export const dynamic = "force-dynamic";
export const revalidate = 900;

export async function GET(request: Request) {
  const feed = getInfoMoneyFeedKey(new URL(request.url).searchParams.get("feed"));

  try {
    const news = await getInfoMoneyNews(feed);

    return NextResponse.json(
      {
        feed,
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
        feed,
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
