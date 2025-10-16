import { mergeMetadata } from "@/lib/seo/merge-meta-data";
import { Metadata } from "next";

export const metadata: Metadata = mergeMetadata({
  title: "プライバシーポリシー｜神奈川県医師会",
  description: "個人情報の取扱い方針について、神奈川県医師会の考えを示します。",
});
const PrivacyPage = () => {
  return <div>Privacy Page</div>;
};

export default PrivacyPage;
