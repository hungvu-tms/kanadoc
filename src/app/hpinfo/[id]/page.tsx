import HospitalDetailWrapper from "@/features/(hospital)/hospital-detail/components/HospitalDetailWrapper";
import { HOSPITAL_DETAIL_DATA } from "@/features/(hospital)/hospital-detail/constants/hospital-detail";
import { mergeMetadata } from "@/lib/seo/merge-meta-data";
import { Metadata } from "next";

export const metadata: Metadata = mergeMetadata({
  title: "病院情報｜神奈川県医師会",
  description:
    "{name hospital} の住所・診療科・アクセス・診療時間などの詳細情報を Kanadoc で紹介。",
});

interface HpDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

const HpDetailPage = async ({ params }: HpDetailPageProps) => {
  const { id } = await params;
  return <HospitalDetailWrapper id={id} hospitalDetailData={HOSPITAL_DETAIL_DATA} />;
};

export default HpDetailPage;
