"use client";

import HeroSection from "@/components/common/HeroSection";
import NewSection from "@/features/(news)/news-list/components/NewSection";
import useQueryNewList from "@/features/(news)/news-list/hooks/useQueryNewList";
import { NewItem } from "@/features/(news)/news-list/types/new-list";

interface NewsWrapperProps {
  newsListData: NewItem[];
}
const NewsWrapper = ({ newsListData }: NewsWrapperProps) => {
  const { newList } = useQueryNewList(newsListData);
  return (
    <>
      <HeroSection
        title="お知らせ"
        image="https://kanadoc.com/image/headerImage/newsTop.jpg"
      />
      <NewSection newList={newList} />
    </>
  );
};
export default NewsWrapper;
