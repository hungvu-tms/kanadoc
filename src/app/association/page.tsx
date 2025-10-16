import { mergeMetadata } from "@/lib/seo/merge-meta-data";
import { Metadata } from "next";

export const metadata: Metadata = mergeMetadata({
  title: "医師会とは｜神奈川県医師会",
  description: "神奈川県医師会の概要や活動内容についてご紹介します。",
});

const AssociationPage = () => {
  return <div>Association Page</div>;
};

export default AssociationPage;
