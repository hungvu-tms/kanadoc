import { Spinner } from "@/components/ui/spinner";
import NewsWrapper from "@/features/(news)/news-list/components/NewsWrapper";
import { apiFetch } from "@/lib/api-server";
import { mergeMetadata } from "@/lib/seo/merge-meta-data";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = mergeMetadata({
  title: "お知らせ｜神奈川県医師会",
  description: "神奈川県医師会からのお知らせや最新の情報をお届けします。",
});

const NewsPageContent = async () => {
  const res = await apiFetch("/newslist", {
    next: {
      revalidate: 3000,
    },
  });
  const { data } = res;
  return <NewsWrapper newsListData={data} />;
};
const NewsPage = async () => {
  return (
    <Suspense
      fallback={
        <div className="bg-[#112B72] min-h-[calc(100vh-208px)] flex w-full items-center justify-center loading-component">
          <Spinner className="text-white w-15 h-15" />
        </div>
      }
    >
      <NewsPageContent />
    </Suspense>
  );
};

export default NewsPage;
