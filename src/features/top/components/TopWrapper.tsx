import DiscoverySection from "@/features/top/components/DiscoverySection";
import HeroSection from "@/features/top/components/HeroSection";
import MedicalSection from "@/features/top/components/MedicalSection";
import NewSection from "@/features/top/components/NewSection";

const TopWrapper = () => {
  return (
    <>
      <HeroSection />
      <NewSection />
      <MedicalSection />
      <DiscoverySection />
    </>
  );
};

export default TopWrapper;
