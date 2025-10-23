import { Spinner } from "@/components/ui/spinner";
import CharmDetailWrapper from "@/features/(charm)/charm-detail/components/CharmDetailWrapper";
import { apiFetch } from "@/lib/api-server";
import { mergeMetadata } from "@/lib/seo/merge-meta-data";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = mergeMetadata({
  title: "発見！神奈川の魅力｜神奈川県医師会",
  description: "医師の視点から見る神奈川の魅力を紹介する特集ページです。",
});

const CharmDetailPageContent = async ({ id }: { id: string }) => {
  const res = await apiFetch(`/charmdetail`, {
    cache: "no-store",
  });
  const { data } = res;
  return <CharmDetailWrapper id={id} charmDetailData={data} />;
};

const CharmDetailPage = async ({
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
      <CharmDetailPageContent id={id} />
    </Suspense>
  );
};

export default CharmDetailPage;
