import { Spinner } from "@/components/ui/spinner";
import HospitalListWrapper from "@/features/(hospital)/hospital-list/components/HospitalListWrapper";
import { apiFetch } from "@/lib/api-server";
import { mergeMetadata } from "@/lib/seo/merge-meta-data";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = mergeMetadata({
  title: "病院情報｜神奈川県医師会",
  description:
    "Kanadoc で全国の病院情報を検索。所在地・診療科・医療機能からあなたに合った病院を見つけよう。",
});

const HpListPageContent = async () => {
  const res = await apiFetch("/hplist", {
    next: {
      revalidate: 3000,
    },
  });
  const { data } = res;
  return <HospitalListWrapper hospitalListData={data} />;
};

const HpListPage = async () => {
  return (
    <Suspense
      fallback={
        <div className="bg-[#112B72] min-h-[calc(100vh-208px)] flex w-full items-center justify-center loading-component">
          <Spinner className="text-white w-15 h-15" />
        </div>
      }
    >
      <HpListPageContent />
    </Suspense>
  );
};

export default HpListPage;
