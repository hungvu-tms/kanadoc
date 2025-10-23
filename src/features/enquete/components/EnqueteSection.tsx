import BaseContainer from "@/components/common/BaseContainer";
import ImageFallback from "@/components/common/ImageFallback";

const EnqueteSection = () => {
  return (
    <BaseContainer
      classNameContent="bg-white"
      className="mt-15 px-[20px] pb-[20px] sm:pb-[80px] sm:px-0"
    >
      <ImageFallback
        src="https://kanadoc.com/image/image/graphH.png"
        alt="enquete"
        width={1000}
        height={1000}
        className="w-full"
        unoptimized
      />

      <ImageFallback
        src="https://kanadoc.com/image/image/graphI.png"
        alt="enquete"
        width={1000}
        height={1000}
        className="w-full"
        unoptimized
      />
      <ImageFallback
        src="https://kanadoc.com/image/image/graphJ.png"
        alt="enquete"
        width={1000}
        height={1000}
        className="w-full"
        unoptimized
      />
      <ImageFallback
        src="https://kanadoc.com/image/image/graphK.png"
        alt="enquete"
        width={1000}
        height={1000}
        className="w-full"
        unoptimized
      />
    </BaseContainer>
  );
};

export default EnqueteSection;
