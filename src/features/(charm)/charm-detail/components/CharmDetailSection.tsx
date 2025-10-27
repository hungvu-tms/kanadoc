import BaseContainer from "@/components/common/BaseContainer";
import ImageFallback from "@/components/common/ImageFallback";
import { CharmDetailData } from "@/features/(charm)/charm-detail/types/charm-detail";

interface CharmDetailSectionProps {
  id: string;
  charmDetailData: CharmDetailData;
}
const CharmDetailSection = ({
  id,
  charmDetailData,
}: CharmDetailSectionProps) => {
  return (
    <BaseContainer
      component="section"
      classNameContent="flex flex-col gap-[20px] !bg-[#ffffff] p-6 !px-6 !bg-[#F5F6FA] shadow-[0_0_10px_rgba(0,0,0,0.1)]"
      className="!px-5 py-5 sm:py-20"
    >
      <div className="w-full ms:px-20">
        <div className="flex items-center justify-center flex-col w-full gap-10">
          <p className="text-[24px] text-[#282688] font-bold text-center break-all">
            {charmDetailData.title}
          </p>
          <ImageFallback
            src={charmDetailData.image}
            alt={charmDetailData.title}
            width={1000}
            height={1000}
            className="sm:w-[40%] w-full h-full object-cover"
          />
        </div>
        <div
          className="text-[16px] text-[#000000] sm:pt-10 pt-5"
          dangerouslySetInnerHTML={{ __html: charmDetailData.content }}
        />
      </div>
    </BaseContainer>
  );
};

export default CharmDetailSection;
