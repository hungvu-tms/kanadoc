import CharmListWrapper from "@/features/(charm)/charm-list/components/CharmListWrapper";
import { CHARM_LIST_DATA } from "@/features/(charm)/charm-list/constants/charm-list";
import { mergeMetadata } from "@/lib/seo/merge-meta-data";
import { Metadata } from "next";

export const metadata: Metadata = mergeMetadata({
  title: "発見！神奈川の魅力｜神奈川県医師会",
  description: "医師の視点から見る神奈川の魅力を紹介する特集ページです。",
});
const CharmPage = () => {
  return <CharmListWrapper charmListData={CHARM_LIST_DATA} />;
};

export default CharmPage;
