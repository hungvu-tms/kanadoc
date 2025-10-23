import ListHospitalResponse from "@/mocks/data/GetListHospital.json";
import HospitalDetailResponse from "@/mocks/data/GẹtHospitalDetail.json";
import NewsListResponse from "@/mocks/data/GetNewsList.json";
import NewDetailResponse from "@/mocks/data/GetNewDetail.json";
import CharmListResponse from "@/mocks/data/GetCharmList.json";
import CharmDetailResponse from "@/mocks/data/GetCharmDetail.json";
import { NextRequest } from "next/server";

const mockDataMap: Record<string, unknown> = {
  hplist: ListHospitalResponse,
  hpdetail: HospitalDetailResponse,
  newslist: NewsListResponse,
  newdetail: NewDetailResponse,
  charmlist: CharmListResponse,
  charmdetail: CharmDetailResponse,
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

// Handle preflight OPTIONS request
export async function OPTIONS(_request: NextRequest) {
  return new Response(null, {
    status: 200,
    headers: corsHeaders,
  });
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const { slug } = await params;
  const endpoint = slug.join("/");
  const mockData = mockDataMap[endpoint];

  if (mockData) {
    return new Response(JSON.stringify(mockData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  }

  return new Response(
    JSON.stringify({
      error: `No mock data found for: ${endpoint}`,
      availableEndpoints: Object.keys(mockDataMap),
    }),
    {
      status: 404,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    }
  );
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const { slug } = await params;
  const endpoint = slug.join("/");
  const mockData = mockDataMap[endpoint];

  if (mockData) {
    return new Response(JSON.stringify(mockData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  }

  return new Response(
    JSON.stringify({ error: `No mock data found for: ${endpoint}` }),
    {
      status: 404,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    }
  );
}
