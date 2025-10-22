import HeroSection from "@/components/common/HeroSection";
import SeniorSection from "@/features/senior/components/SeniorSection";

const SeniorWrapper = () => {
  return (
    <div className="w-full">
      <HeroSection
        title="神奈川県の専門研修"
        image="https://kanadoc.com/image/headerImage/seniorTop.jpg"
      />
      <SeniorSection />
    </div>
  );
};

export default SeniorWrapper;
