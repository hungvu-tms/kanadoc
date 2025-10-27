import BaseContainer from "@/components/common/BaseContainer";
import ImageFallback from "@/components/common/ImageFallback";

const EnqueteSection = () => {
  return (
    <BaseContainer
      classNameContent="bg-white"
      className="mt-15 px-[20px] pb-[20px] sm:pb-[80px] sm:px-0"
    >
      <ImageFallback
        src="/images/enquete/graphH.png"
        alt="enquete"
        width={1000}
        height={1000}
        className="w-full"
      />

      <ImageFallback
        src="/images/enquete/graphI.png"
        alt="enquete"
        width={1000}
        height={1000}
        className="w-full"
      />
      <ImageFallback
        src="/images/enquete/graphJ.png"
        alt="enquete"
        width={1000}
        height={1000}
        className="w-full"
      />
      <ImageFallback
        src="/images/enquete/graphK.png"
        alt="enquete"
        width={1000}
        height={1000}
        className="w-full"
      />
    </BaseContainer>
  );
};

export default EnqueteSection;
