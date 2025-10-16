import { mergeMetadata } from "@/lib/seo/merge-meta-data";
import { Metadata } from "next";

export const metadata: Metadata = mergeMetadata({
  title: "研修医アンケート｜神奈川県医師会",
  description: "研修医の意識や現状を調査したアンケート結果を掲載しています。",
});
const EnquetePage = () => {
  return <div>Enquete Page</div>;
};

export default EnquetePage;
