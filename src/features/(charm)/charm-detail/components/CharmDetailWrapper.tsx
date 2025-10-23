import HeroSection from "@/components/common/HeroSection";
import CharmDetailSection from "@/features/(charm)/charm-detail/components/CharmDetailSection";
import { CharmDetailData } from "@/features/(charm)/charm-detail/types/charm-detail";

interface CharmDetailWrapperProps {
  id: string;
  charmDetailData: CharmDetailData;
}
const CharmDetailWrapper = ({
  id,
  charmDetailData,
}: CharmDetailWrapperProps) => {
  return (
    <div className="w-full">
      <HeroSection
        title="発見！神奈川の魅力"
        image="https://kanadoc.com/image/headerImage/charmTop.jpg"
      />
      <CharmDetailSection id={id} charmDetailData={charmDetailData} />
    </div>
  );
};

export default CharmDetailWrapper;
