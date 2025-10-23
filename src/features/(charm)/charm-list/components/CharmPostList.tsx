"use client";
import BasePagination from "@/components/base/BasePagination";
import BaseContainer from "@/components/common/BaseContainer";
import { CharmItem } from "@/features/(charm)/charm-list/types/charm-list";
import Image from "next/image";
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
      <div className="w-full flex items-center justify-center sm:py-20 py-10">
        <Image
          src="https://kanadoc.com/image/headerTitle/charmAllTitle.svg"
          alt="charm-introduce"
          width={1000}
          height={1000}
          className="sm:w-[22%] w-[60%] h-full object-cover"
        />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10">
        {charmListData.map((item) => (
          <div
            key={item.id}
            className="grid grid-rows-subgrid row-span-2 gap-2"
          >
            <Link href={`/charm/${item.id}`} className="overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={1000}
                height={1000}
                className="w-full h-full object-cover max-h-[220px]"
                unoptimized
              />
            </Link>
            <Link href={`/charm/${item.id}`} className="">
              <h3 className="font-bold text-[16px] text-[#33447D]">
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
