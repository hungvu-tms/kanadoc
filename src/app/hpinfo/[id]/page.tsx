import { Spinner } from "@/components/ui/spinner";
import HospitalDetailWrapper from "@/features/(hospital)/hospital-detail/components/HospitalDetailWrapper";
import { apiFetch } from "@/lib/api-server";
import { mergeMetadata } from "@/lib/seo/merge-meta-data";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = mergeMetadata({
  title: "病院情報｜神奈川県医師会",
  description:
    "{name hospital} の住所・診療科・アクセス・診療時間などの詳細情報を Kanadoc で紹介。",
});

const HpDetailPageContent = async ({ id }: { id: string }) => {
  const res = await apiFetch(`/hpdetail`, {
    cache: "no-store",
  });
  const { data } = res;
  return <HospitalDetailWrapper id={id} hospitalDetailData={data} />;
};

const HpDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return (
    <Suspense
      fallback={
        <div className="bg-[#112B72] min-h-[calc(100vh-208px)] flex w-full items-center justify-center loading-component">
          <Spinner className="text-white w-15 h-15" />
        </div>
      }
    >
      <HpDetailPageContent id={id} />
    </Suspense>
  );
};

export default HpDetailPage;
