import TopWrapper from "@/features/top/components/TopWrapper";
import { mergeMetadata } from "@/lib/seo/merge-meta-data";
import { Metadata } from "next";

export const metadata: Metadata = mergeMetadata({
  title: "TOP｜神奈川県医師会",
  description:
    "Kanadocでオンライン医療相談。専門医と安心の健康サポートを今すぐ。",
});

export default function TopPage() {
  return <TopWrapper />;
}
