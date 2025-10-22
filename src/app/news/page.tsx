import NewsWrapper from "@/features/(news)/news-list/components/NewsWrapper";
import { NEWS_LIST_DATA } from "@/features/(news)/news-list/constants/new-list";
import { mergeMetadata } from "@/lib/seo/merge-meta-data";
import { Metadata } from "next";

export const metadata: Metadata = mergeMetadata({
  title: "お知らせ｜神奈川県医師会",
  description: "神奈川県医師会からのお知らせや最新の情報をお届けします。",
});
const NewsPage = () => {
  return <NewsWrapper newsListData={NEWS_LIST_DATA} />;
};

export default NewsPage;
