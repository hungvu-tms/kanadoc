import BaseButton from "@/components/base/BaseButton";
import ImageFallback from "@/components/common/ImageFallback";
import { NewItem } from "@/features/(news)/news-list/types/new-list";

import Link from "next/link";

interface NewSectionProps {
  newList: NewItem[];
}
const NewSection = ({ newList }: NewSectionProps) => {
  return (
    <section className="w-full flex flex-col gap-4 items-center justify-center bg-[#F5F6FA] pt-[80px] px-5">
      <div className="flex flex-col items-center justify-center gap-[30px] w-full">
        <ImageFallback
          src="/images/top/noticeTitle.svg"
          alt="news"
          width={1000}
          height={1000}
          className="w-[400px] h-auto"
        />
        <div className="flex flex-col w-full md:w-[50%]">
          {newList.map((item, key) => (
            <Link
              key={`new-item-${key}`}
              href={`/news/${item.id}`}
              className="relative flex flex-col sm:flex-row items-start gap-[50px] sm:gap-4 w-auto border-[#112B72] border-dashed border-b-[1px] py-[20px]"
            >
              <div className="flex gap-4 flex-1 flex-col md:flex-row w-full min-w-0">
                <BaseButton className="bg-white rounded-[16px] text-[#56A1F3] text-[12px] flex-none basic-[85px] min-w-[85px] max-w-[100px] h-[25px] py-0 px-0">
                  その他
                </BaseButton>
                <div className="flex flex-col gap-2 flex-1 w-full min-w-0">
                  <span className="text-[12px] font-bold text-[#8B8B8B]">
                    {item.date}
                  </span>
                  <p className="text-[19px] font-[600] text-[#112B72] tracking-[3.2px] leading-6 sm:leading-7 overflow-hidden text-ellipsis w-full min-w-0 line-clamp-2">
                    {item.title}
                  </p>
                </div>
              </div>
              <div className="flex-[0_0_70px] absolute md:relative right-0 top-[20px] md:top-0 w-[75px] md:w-[70px]">
                <ImageFallback
                  src={item.image}
                  alt={"no-image"}
                  width={1000}
                  height={1000}
                  className="h-full  w-full"
                />
              </div>
            </Link>
          ))}
        </div>
        <Link href="/news" className="w-full sm:w-auto">
          <BaseButton className="sm:px-[128px] w-full sm:w-auto">
            一覧を見る
          </BaseButton>
        </Link>
        <ImageFallback
          src="/images/top/back.svg"
          alt="discovery"
          width={1000}
          height={1000}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default NewSection;
