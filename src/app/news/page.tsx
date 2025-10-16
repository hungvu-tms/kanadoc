import { mergeMetadata } from "@/lib/seo/merge-meta-data";
import { Metadata } from "next";

export const metadata: Metadata = mergeMetadata({
  title: "お知らせ｜神奈川県医師会",
  description: "神奈川県医師会からのお知らせや最新の情報をお届けします。",
});
const NewsPage = () => {
  return <div>News Page</div>;
};

export default NewsPage;
