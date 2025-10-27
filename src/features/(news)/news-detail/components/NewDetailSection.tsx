import BaseButton from "@/components/base/BaseButton";
import BaseContainer from "@/components/common/BaseContainer";
import { NewDetailWrapperProps } from "@/features/(news)/news-detail/components/NewDetailWrapper";
import Link from "next/link";

const NewDetailSection = ({ id, newsDetailData }: NewDetailWrapperProps) => {
  return (
    <BaseContainer
      component="section"
      classNameContent="flex flex-col gap-[20px] !bg-[#ffffff] p-6 !px-6 !bg-[#F5F6FA] shadow-[0_0_10px_rgba(0,0,0,0.1)]"
      className="!px-5 py-5 sm:py-20"
    >
      <p className="text-right text-[16px]">{newsDetailData.date}</p>
      <h1 className="text-center font-bold text-[#282688] text-[16px] break-all">
        {newsDetailData.title}
      </h1>
      <div
        className="text-[16px] text-[#000000]"
        dangerouslySetInnerHTML={{ __html: newsDetailData.content }}
      />
      <div className="w-full flex justify-center">
        <Link
          href={`https://resident.mynavi.jp/events/detail/${newsDetailData.id_detail}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BaseButton className="py-2"> お申込みはコチラ</BaseButton>
        </Link>
      </div>
    </BaseContainer>
  );
};
export default NewDetailSection;
