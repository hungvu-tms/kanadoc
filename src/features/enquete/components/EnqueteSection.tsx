import BaseContainer from "@/components/common/BaseContainer";
import Image from "next/image";

const EnqueteSection = () => {
  return (
    <BaseContainer
      classNameContent="bg-white"
      className="mt-15 px-[20px] pb-[20px] sm:pb-[80px] sm:px-0"
    >
      <Image
        src="https://kanadoc.com/image/image/graphH.png"
        alt="enquete"
        width={1000}
        height={1000}
        className="w-full"
        unoptimized
      />

      <Image
        src="https://kanadoc.com/image/image/graphI.png"
        alt="enquete"
        width={1000}
        height={1000}
        className="w-full"
        unoptimized
      />
      <Image
        src="https://kanadoc.com/image/image/graphJ.png"
        alt="enquete"
        width={1000}
        height={1000}
        className="w-full"
        unoptimized
      />
      <Image
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
