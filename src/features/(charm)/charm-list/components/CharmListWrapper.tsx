"use client";
import HeroSection from "@/components/common/HeroSection";
import CharmIntroduce from "@/features/(charm)/charm-list/components/CharmIntroduce";
import CharmPostList from "@/features/(charm)/charm-list/components/CharmPostList";
import useQueryCharmList from "@/features/(charm)/charm-list/hooks/useQueryCharmList";
import { CharmItem } from "@/features/(charm)/charm-list/types/charm-list";

interface CharmListWrapperProps {
  charmListData: CharmItem[];
}
const CharmListWrapper = ({ charmListData }: CharmListWrapperProps) => {
  const { currentPage, totalPages, charmList, onChangePage } =
    useQueryCharmList(charmListData);
  return (
    <div className="w-full">
      <HeroSection
        title="発見！神奈川の魅力"
        image="https://kanadoc.com/image/headerImage/charmTop.jpg"
      />
      <CharmIntroduce />
      <CharmPostList
        charmListData={charmList}
        currentPage={currentPage}
        totalPages={totalPages}
        onChangePage={onChangePage}
      />
    </div>
  );
};

export default CharmListWrapper;
