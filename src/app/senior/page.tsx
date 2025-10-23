import SeniorWrapper from "@/features/senior/components/SeniorWrapper";
import { mergeMetadata } from "@/lib/seo/merge-meta-data";
import { Metadata } from "next";

export const metadata: Metadata = mergeMetadata({
  title: "神奈川県の専門研修｜神奈川県医師会",
  description: "神奈川県内で行われる専門研修や医師向け講習の情報をご案内。",
});
const SeniorPage = () => {
  return <SeniorWrapper />;
};

export default SeniorPage;
