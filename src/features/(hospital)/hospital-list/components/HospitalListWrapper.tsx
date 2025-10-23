"use client";

import HeroSection from "@/components/common/HeroSection";
import ImageFallback from "@/components/common/ImageFallback";
import ListHospitalFormFilter from "@/features/(hospital)/hospital-list/components/ListHospitalFormFilter";
import ListHospitalList from "@/features/(hospital)/hospital-list/components/ListHospitalList";
import useQueryHospitalList from "@/features/(hospital)/hospital-list/hooks/useQueryHospitalList";
import { Hospital } from "@/features/(hospital)/hospital-list/types/hospital-list";
import Image from "next/image";
interface HospitalListWrapperProps {
  hospitalListData: Hospital[];
}
const HospitalListWrapper = ({
  hospitalListData,
}: HospitalListWrapperProps) => {
  const { hospitalList, onChangeArea, onChangeName } =
    useQueryHospitalList(hospitalListData);
  return (
    <div className="w-full bg-[#F5F6FA]">
      <HeroSection
        title="病院情報"
        image="https://kanadoc.com/image/headerImage/infoTop.jpg"
      />
      <section className="flex items-center justify-center bg-[#F5F6FA]">
        <Image
          src="https://kanadoc.com/image/headerTitle/listTitle.svg"
          alt="news"
          width={1000}
          height={1000}
          className="w-[50%] sm:w-[22%] h-auto pt-[80px] pb-[50px]"
        />
      </section>
      <ListHospitalFormFilter
        onChangeArea={onChangeArea}
        onChangeName={onChangeName}
      />
      <ListHospitalList hospitalList={hospitalList} />
      <section className="w-full bg-white flex flex-col items-center justify-center py-[30px] gap-[40px] mt-5 sm:mt-[70px]">
        <ImageFallback
          src="https://kanadoc.com/image/headerTitle/articleTitle.svg"
          alt="senior"
          width={1000}
          height={1000}
          className="w-[200px] h-auto"
        />
        <p className="text-[16px] text-black whitespace-pre-line">
          現在準備中です
        </p>
      </section>
    </div>
  );
};
export default HospitalListWrapper;
