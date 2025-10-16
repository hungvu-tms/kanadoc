import { mergeMetadata } from "@/lib/seo/merge-meta-data";
import { Metadata } from "next";

export const metadata: Metadata = mergeMetadata({
  title: "病院情報｜神奈川県医師会",
  description:
    "{name hospital} の住所・診療科・アクセス・診療時間などの詳細情報を Kanadoc で紹介。",
});

const HpDetailPage = () => {
  return <div>Hospital List Detail Page</div>;
};

export default HpDetailPage;
