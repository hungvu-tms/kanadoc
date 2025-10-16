import { mergeMetadata } from "@/lib/seo/merge-meta-data";
import { Metadata } from "next";

export const metadata: Metadata = mergeMetadata({
  title: "お問合わせ｜神奈川県医師会",
  description: "神奈川県医師会へのお問い合わせ方法や窓口をご案内します。",
});
const ContactPage = () => {
  return <div>Contact Page</div>;
};

export default ContactPage;
