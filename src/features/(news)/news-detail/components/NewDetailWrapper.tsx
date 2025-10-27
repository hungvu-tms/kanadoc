import HeroSection from "@/components/common/HeroSection";
import NewDetailSection from "@/features/(news)/news-detail/components/NewDetailSection";
import { NewsDetailData } from "@/features/(news)/news-detail/types/news-detail";

export interface NewDetailWrapperProps {
  id: string;
  newsDetailData: NewsDetailData;
}
const NewDetailWrapper = ({ id, newsDetailData }: NewDetailWrapperProps) => {
  return (
    <div className="w-full">
      <HeroSection title="お知らせ" image="/images/news/newsTop.jpg" />
      <NewDetailSection id={id} newsDetailData={newsDetailData} />
    </div>
  );
};
export default NewDetailWrapper;
