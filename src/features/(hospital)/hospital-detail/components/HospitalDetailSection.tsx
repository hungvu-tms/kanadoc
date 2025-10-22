"use client";
import BaseButton from "@/components/base/BaseButton";
import BaseContainer from "@/components/common/BaseContainer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ZoneChip from "@/features/(hospital)/components/ZoneChip";
import TableWrapper from "@/features/(hospital)/hospital-detail/components/TableWrapper";
import { HospitalDetailData } from "@/features/(hospital)/hospital-detail/types/holtel-detail";
import Autoplay from "embla-carousel-autoplay";
import {
  BadgeJapaneseYen,
  Banknote,
  BedSingle,
  HeartPlus,
  Hospital,
  Moon,
  PersonStanding,
  PhoneCall,
  Printer,
  University,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

interface HospitalDetailSectionProps {
  id: string;
  hospitalDetailData: HospitalDetailData;
}
const HospitalDetailSection = ({
  id,
  hospitalDetailData,
}: HospitalDetailSectionProps) => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
  const renderIconSocial = (type: string) => {
    switch (type) {
      case "youtube":
        return (
          <Image
            src="https://kanadoc.com/image/hpinfoIcon/youtube.svg"
            alt="youtube"
            width={25}
            height={25}
            unoptimized
          />
        );
      case "twitter":
        return (
          <Image
            src="https://kanadoc.com/image/hpinfoIcon/x.svg"
            alt="twitter"
            width={25}
            height={25}
            unoptimized
          />
        );
      default:
        return null;
    }
  };
  return (
    <BaseContainer
      component="section"
      classNameContent="flex flex-col gap-[20px] !bg-[#ffffff] sm:py-10 py-4 sm:!px-10 my-[50px]"
      className="!bg-[#F5F6FA] px-[20px] sm:px-0"
    >
      <div className="flex w-full gap-10 sm:flex-row flex-col">
        <div className="w-full sm:w-[70%] flex flex-col gap-4">
          <ZoneChip
            zone={hospitalDetailData.zone}
            type={hospitalDetailData.type}
          />
          <p className="flex items-center text-[24px] text-[#282688] border-l-6 border-[#282688] pl-2 h-[27px]">
            汐田総合病院
          </p>
          <div className="flex flex-col text-[16px] text-[#585858]">
            <p>{hospitalDetailData.road}</p>
            <p>{hospitalDetailData.address}</p>
          </div>

          <div className="flex gap-2 items-center">
            <PhoneCall />
            <span className="text-[16px] text-[#585858]">
              {hospitalDetailData.phone}
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <Printer />
            <span className="text-[16px] text-[#585858]">
              {hospitalDetailData.fax}
            </span>
          </div>
          <div className="flex gap-2 items-start">
            <PersonStanding className="w-[25px] h-[25px]" />
            <div className="flex flex-col">
              {hospitalDetailData.access.map(
                (access: string, index: number) => (
                  <span key={index} className="text-[16px] text-[#585858]">
                    {access}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="flex gap-3 sm:flex-row flex-col items-start sm:items-center">
            {renderIconSocial(hospitalDetailData.social.social_type)}
            <Link href={hospitalDetailData.social.link}>
              <p className="text-[#33447D] text-[16px] border  border-[#33447D] px-2">
                {hospitalDetailData.social.title}
              </p>
            </Link>
          </div>
          <div className="flex sm:gap-8 gap-2 mt-4 flex-col sm:flex-row">
            <Link
              href="https://yokohamah.johas.go.jp/yokohama-kensyuu/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BaseButton className="bg-[#33447D] py-[5px]">
                病院ホームページはこちら
              </BaseButton>
            </Link>
            <Link
              href="https://yokohamah.johas.go.jp/yokohama-kensyuu/resident/kengaku.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BaseButton className="bg-[#33447D] py-[5px]">
                見学フォームはこちら
              </BaseButton>
            </Link>
          </div>
        </div>
        <div className="w-full sm:w-[30%]">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full max-w-xs"
          >
            <CarouselContent>
              {hospitalDetailData.gallery.map(
                (image: string, index: number) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Image
                        src={image}
                        alt="gallery"
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                        unoptimized
                      />
                    </div>
                  </CarouselItem>
                )
              )}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      <div className="w-full flex border border-[#33447D] bg-[#efefef] mt-20 sm:flex-row flex-col">
        <div className="flex-1 flex flex-col">
          <div className="h-[40px] shrink-0 flex items-center justify-center gap-4 bg-[#33447D] text-[#ffffff] text-[16px]">
            <Banknote />
            <span>給与・賞与</span>
          </div>
          <div className="flex flex-col gap-2 w-full h-full text-center text-[16px] text-[#33447D]  sm:border-r-1 border-[#33447D] p-[32px] justify-center">
            <div className="flex flex-col">
              <p className="w-full border-b border-[#33447D] pb-2"> 給与</p>
              <p className="pt-2">
                {hospitalDetailData.salary_info.salary.amount}
              </p>
            </div>
            <div className="flex flex-col">
              <p className="w-full border-b border-[#33447D] pb-2"> 賞与 </p>
              <p className="pt-2">
                {hospitalDetailData.salary_info.salary.note}
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="h-[40px] shrink-0 flex items-center justify-center gap-4 bg-[#33447D] text-[#ffffff] text-[16px]">
            <BadgeJapaneseYen />
            <span>諸手当</span>
          </div>
          <div className="p-[32px] sm:border-r border-[#33447D] h-full flex items-center justify-center text-[16px] text-[#33447D]">
            {hospitalDetailData.salary_info.allowances}
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="h-[40px] shrink-0 flex items-center justify-center gap-4 bg-[#33447D] text-[#ffffff] text-[16px]">
            <Moon />
            <span>当直回数</span>
          </div>
          <div className="p-[32px] sm:border-r border-[#33447D] h-full flex items-center justify-center text-[16px] text-[#33447D]">
            {hospitalDetailData.salary_info.frequency}
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="h-[40px] shrink-0 flex items-center justify-center gap-4 bg-[#33447D] text-[#ffffff] text-[16px]">
            <HeartPlus />
            <span>備考</span>
          </div>
          <div className="p-[32px] h-full flex items-center justify-center text-[16px] text-[#33447D]">
            {hospitalDetailData.salary_info.notes}
          </div>
        </div>
      </div>
      <div className="flex w-full sm:gap-10 gap-0 py-15 sm:flex-row flex-col">
        <TableWrapper
          title="給与・賞与"
          icon={<Hospital className="text-white" />}
        >
          <div className="flex flex-col text-[16px] text-[#33447D] justify-center text-center">
            <div className="border-b border-[#33447D] py-2">
              <p>全体数：{hospitalDetailData.number_detail.doctors.total}</p>
            </div>
            <div className="py-2">
              <p>
                {" "}
                指導医：{hospitalDetailData.number_detail.doctors.nursing}{" "}
              </p>
            </div>
          </div>
        </TableWrapper>

        <TableWrapper
          title="患者数"
          icon={<BedSingle className="text-white" />}
        >
          <div className="flex flex-col text-[16px] text-[#33447D] justify-center text-center">
            <div className="border-b border-[#33447D] py-2">
              <p>
                平均外来患者数:{hospitalDetailData.number_detail.patients.total}
              </p>
            </div>
            <div className="py-2">
              <p>
                平均入院患者数:
                {hospitalDetailData.number_detail.patients.average}
              </p>
            </div>
          </div>
        </TableWrapper>
      </div>
      <div className="w-full pb-15">
        <TableWrapper
          title="主な出身大学"
          icon={<University className="text-white" />}
        >
          <div className="w-full text-[16px] text-[#33447D]">
            <p>{hospitalDetailData.university}</p>
          </div>
        </TableWrapper>
      </div>
      <div className="w-full">
        <TableWrapper title="病院概要・プログラム" icon={<></>}>
          <div className="flex flex-col gap-10 w-full text-[16px] text-[#33447D]">
            <div className="flex flex-col w-full">
              <div className="border-b border-[#33447D] py-2">概要·特色</div>
              <div className="w-full flex flex-col pt-3">
                {hospitalDetailData.overall_info.summary.map(
                  (item: string, index: number) => (
                    <p key={`summary-${index}`}>{item}</p>
                  )
                )}
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="border-b border-[#33447D] py-2">
                プログラムの特徴
              </div>
              <div className="w-full flex flex-col pt-3">
                {hospitalDetailData.overall_info.features.map(
                  (item: string, index: number) => (
                    <p key={`summary-${index}`}>{item}</p>
                  )
                )}
              </div>
            </div>
          </div>
        </TableWrapper>
      </div>
    </BaseContainer>
  );
};

export default HospitalDetailSection;
