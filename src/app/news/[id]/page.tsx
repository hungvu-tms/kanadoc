import { Spinner } from "@/components/ui/spinner";
import NewDetailWrapper from "@/features/(news)/news-detail/components/NewDetailWrapper";
import { apiFetch } from "@/lib/api-server";
import { mergeMetadata } from "@/lib/seo/merge-meta-data";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = mergeMetadata({
  title: "お知らせ｜神奈川県医師会",
  description: "{title news} の詳細情報をお届けします。",
});

const NewsDetailPageContent = async ({ id }: { id: string }) => {
  const res = await apiFetch(`/newdetail`, {
    cache: "no-store",
  });
  const { data } = res;
  return <NewDetailWrapper id={id} newsDetailData={data} />;
};

const NewsDetailPage = async ({
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
      <NewsDetailPageContent id={id} />
    </Suspense>
  );
};

export default NewsDetailPage;
