"use client";
import BasePagination from "@/components/base/BasePagination";
import BaseContainer from "@/components/common/BaseContainer";
import ImageFallback from "@/components/common/ImageFallback";
import { CharmItem } from "@/features/(charm)/charm-list/types/charm-list";
import Link from "next/link";

interface CharmPostListProps {
  charmListData: CharmItem[];
  currentPage: number;
  totalPages: number;
  onChangePage: (page: number) => void;
}
const CharmPostList = ({
  charmListData,
  currentPage,
  totalPages,
  onChangePage,
}: CharmPostListProps) => {
  return (
    <BaseContainer className="bg-white">
      <div id="charm-post" className="w-full flex items-center justify-center sm:py-20 py-10">
        <ImageFallback
          src="/images/charm/charmAllTitle.svg"
          alt="charm-introduce"
          width={1000}
          height={1000}
          className="sm:w-[50%] w-[60%] h-full object-cover"
        />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10">
        {charmListData.map((item) => (
          <div
            key={item.id}
            className="grid grid-rows-subgrid row-span-2 gap-2"
          >
            <Link href={`/charm/${item.id}`} className="overflow-hidden">
              <ImageFallback
                src={item.image}
                alt={item.title}
                width={1000}
                height={1000}
                className="w-full h-full object-cover max-h-[220px]"
              />
            </Link>
            <Link href={`/charm/${item.id}`} className="w-full min-w-0">
              <h3 className="font-bold text-[16px] text-[#33447D] overflow-hidden text-ellipsis w-full min-w-0 line-clamp-2">
                {item.title}
              </h3>
            </Link>
          </div>
        ))}
      </div>
      {Boolean(charmListData.length) && (
        <div className="w-full flex items-center justify-center pt-10 pb-20">
          <BasePagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={onChangePage}
          />
        </div>
      )}
    </BaseContainer>
  );
};

export default CharmPostList;
