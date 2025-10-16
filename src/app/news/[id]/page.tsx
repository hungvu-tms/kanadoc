import { mergeMetadata } from "@/lib/seo/merge-meta-data";
import { Metadata } from "next";

export const metadata: Metadata = mergeMetadata({
  title: "お知らせ｜神奈川県医師会",
  description: "{title news} の詳細情報をお届けします。",
});
const NewsDetailPage = () => {
  return <div>News Detail Page</div>;
};

export default NewsDetailPage;
