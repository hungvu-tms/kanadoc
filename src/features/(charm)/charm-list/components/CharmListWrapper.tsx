"use client";
import HeroSection from "@/components/common/HeroSection";
import CharmIntroduce from "@/features/(charm)/charm-list/components/CharmIntroduce";
import CharmPostList from "@/features/(charm)/charm-list/components/CharmPostList";
import useQueryCharmList from "@/features/(charm)/charm-list/hooks/useQueryCharmList";
import { CharmListData } from "@/features/(charm)/charm-list/types/charm-list";

interface CharmListWrapperProps {
  charmData: CharmListData;
}
const CharmListWrapper = ({ charmData }: CharmListWrapperProps) => {
  const { currentPage, totalPages, charmList, onChangePage } =
    useQueryCharmList(
      charmData.charm_list,
      charmData.page_current,
      charmData.total_pages
    );
  return (
    <div className="w-full">
      <HeroSection
        title="発見！神奈川の魅力"
        image="/images/charm/charmTop.jpg"
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
