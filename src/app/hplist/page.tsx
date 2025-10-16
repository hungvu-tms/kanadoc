import { mergeMetadata } from "@/lib/seo/merge-meta-data";
import { Metadata } from "next";

export const metadata: Metadata = mergeMetadata({
  title: "病院情報｜神奈川県医師会",
  description:
    "Kanadoc で全国の病院情報を検索。所在地・診療科・医療機能からあなたに合った病院を見つけよう。",
});

const HpListPage = () => {
  return <div>Hospital List Page</div>;
};

export default HpListPage;
