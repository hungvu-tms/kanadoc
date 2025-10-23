import { CharmItem } from "@/features/(charm)/charm-list/types/charm-list";
import { NewItem } from "@/features/(news)/news-list/types/new-list";
import DiscoverySection from "@/features/top/components/DiscoverySection";
import HeroSection from "@/features/top/components/HeroSection";
import MedicalSection from "@/features/top/components/MedicalSection";
import NewSection from "@/features/top/components/NewSection";

interface TopWrapperProps {
  topData: {
    news_list: NewItem[];
    charm_list: CharmItem[];
  };
}
const TopWrapper = ({ topData }: TopWrapperProps) => {
  const { news_list, charm_list } = topData;
  return (
    <>
      <HeroSection />
      <NewSection newList={news_list || []} />
      <MedicalSection />
      <DiscoverySection charmList={charm_list || []} />
    </>
  );
};

export default TopWrapper;
