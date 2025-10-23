import { Spinner } from "@/components/ui/spinner";
import CharmListWrapper from "@/features/(charm)/charm-list/components/CharmListWrapper";
import { apiFetch } from "@/lib/api-server";
import { mergeMetadata } from "@/lib/seo/merge-meta-data";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = mergeMetadata({
  title: "発見！神奈川の魅力｜神奈川県医師会",
  description: "医師の視点から見る神奈川の魅力を紹介する特集ページです。",
});

const CharmPageContent = async () => {
  const res = await apiFetch("/charmlist", {
    next: {
      revalidate: 3000,
    },
  });
  const { data } = res;
  return <CharmListWrapper charmData={data} />;
};
const CharmPage = async () => {
  return (
    <Suspense
      fallback={
        <div className="bg-[#112B72] min-h-[calc(100vh-208px)] flex w-full items-center justify-center loading-component">
          <Spinner className="text-white w-15 h-15" />
        </div>
      }
    >
      <CharmPageContent />
    </Suspense>
  );
};

export default CharmPage;
