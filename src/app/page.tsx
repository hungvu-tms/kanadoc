import { Spinner } from "@/components/ui/spinner";
import TopWrapper from "@/features/top/components/TopWrapper";
import { apiFetch } from "@/lib/api-server";
import { mergeMetadata } from "@/lib/seo/merge-meta-data";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = mergeMetadata({
  title: "TOP｜神奈川県医師会",
  description:
    "Kanadocでオンライン医療相談。専門医と安心の健康サポートを今すぐ。",
});

const TopPageContent = async () => {
  const res = await apiFetch("/top", {
    next: {
      revalidate: 1000,
    },
  });
  const { data } = res;
  return <TopWrapper topData={data} />;
};
export default function TopPage() {
  return (
    <Suspense
      fallback={
        <div className="bg-[#112B72] min-h-[calc(100vh-208px)] flex w-full items-center justify-center loading-component">
          <Spinner className="text-white w-15 h-15" />
        </div>
      }
    >
      <TopPageContent />
    </Suspense>
  );
}
