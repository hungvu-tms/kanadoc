import NewDetailWrapper from "@/features/(news)/news-detail/components/NewDetailWrapper";
import { NEWS_DETAIL_DATA } from "@/features/(news)/news-detail/constants/news-detail";
import { mergeMetadata } from "@/lib/seo/merge-meta-data";
import { Metadata } from "next";

export const metadata: Metadata = mergeMetadata({
  title: "お知らせ｜神奈川県医師会",
  description: "{title news} の詳細情報をお届けします。",
});
interface NewsDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

const NewsDetailPage = async ({ params }: NewsDetailPageProps) => {
  const { id } = await params;
  return <NewDetailWrapper id={id} newsDetailData={NEWS_DETAIL_DATA} />;
};

export default NewsDetailPage;
