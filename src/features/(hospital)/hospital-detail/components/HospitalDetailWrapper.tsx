import HeroSection from "@/components/common/HeroSection";
import HospitalDetailSection from "@/features/(hospital)/hospital-detail/components/HospitalDetailSection";
import { HospitalDetailData } from "@/features/(hospital)/hospital-detail/types/holtel-detail";

interface HospitalDetailWrapperProps {
  id: string;
  hospitalDetailData: HospitalDetailData;
}
const HospitalDetailWrapper = ({
  id,
  hospitalDetailData,
}: HospitalDetailWrapperProps) => {
  return (
    <div className="w-full">
      <HeroSection
        title="病院情報"
        image="https://kanadoc.com/image/headerImage/infoTop.jpg"
      />
      <HospitalDetailSection id={id} hospitalDetailData={hospitalDetailData} />
    </div>
  );
};

export default HospitalDetailWrapper;
