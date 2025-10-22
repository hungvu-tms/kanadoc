import CharmDetailWrapper from "@/features/(charm)/charm-detail/components/CharmDetailWrapper";
import { CHARM_DETAIL_DATA } from "@/features/(charm)/charm-detail/constants/charm-detail";
import { mergeMetadata } from "@/lib/seo/merge-meta-data";
import { Metadata } from "next";

export const metadata: Metadata = mergeMetadata({
  title: "発見！神奈川の魅力｜神奈川県医師会",
  description: "医師の視点から見る神奈川の魅力を紹介する特集ページです。",
});
interface CharmDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}
const CharmDetailPage = async ({ params }: CharmDetailPageProps) => {
  const { id } = await params;
  return <CharmDetailWrapper id={id} charmDetailData={CHARM_DETAIL_DATA} />;
};

export default CharmDetailPage;
