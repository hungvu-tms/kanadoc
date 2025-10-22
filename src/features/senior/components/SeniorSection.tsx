"use client";
import BaseContainer from "@/components/common/BaseContainer";
import DetailSeniorModal from "@/features/senior/components/DetailSeniorModal";
import { SENIOR_DATA } from "@/features/senior/constants/senior";
import { SeniorData } from "@/features/senior/types/senior";
import Image from "next/image";
import { useState } from "react";

const SeniorSection = () => {
  const [openDetailSeniorModal, setOpenDetailSeniorModal] = useState(false);
  const [dataSenior, setDataSenior] = useState<SeniorData | null>(null);
  const handleOpenDetailSeniorModal = (item: SeniorData) => {
    setOpenDetailSeniorModal(true);
    setDataSenior({
      icon: item.icon,
      name: item.name,
      listSeniors: item.listSeniors,
    });
  };
  return (
    <BaseContainer>
      <div className="flex justify-center items-center gap-4 w-full pt-20">
        <Image
          src="https://kanadoc.com/image/headerTitle/seniorTitle.svg"
          alt="senior-section-1"
          width={1000}
          height={1000}
          className="md:w-[22%] w-[60%] h-auto"
        />
      </div>
      <div className="flex w-full justify-center items-start md:gap-20 md:py-20 py-10 flex-col md:flex-row gap-8">
        <div className="flex text-[16px] text-black flex-col gap-4 flex-1 w-full">
          <p className="leading-5">
            神奈川県であれば、基本19領域・230の専門研修プログラムから、
            自分の志向・キャリアに合ったプログラム選択が可能です。
          </p>
          <p className="leading-5">
            希望する科目の専門医がどの病院で取得できるのか、
            さっそくチェックしてみましょう。
          </p>
        </div>
        <div className="flex-1 w-full">
          <Image
            src="https://kanadoc.com/image/hparticle/senior.jpg"
            alt="senior-section-1"
            width={1000}
            height={1000}
            className="w-full md:h-auto md:max-h-auto max-h-[250px] object-cover"
            unoptimized
          />
        </div>
      </div>
      <div className="w-full flex justify-center items-center xl:pb-30 pb-20">
        <div className="flex w-full justify-start items-start gap-2 xl:gap-15 flex-wrap">
          {SENIOR_DATA.map((item, key) => (
            <div
              key={`senior-section-${key}`}
              className="cursor-pointer shadow-[0px_3px_10px_0px_rgba(0,0,0,0.158)]"
              onClick={() =>
                handleOpenDetailSeniorModal({
                  icon: item.icon,
                  name: item.name,
                  listSeniors: item.list,
                })
              }
            >
              <Image
                src={item.image}
                alt={item.name}
                width={1000}
                height={1000}
                className="w-[101px] xl:w-fit h-auto block"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
      <DetailSeniorModal
        open={openDetailSeniorModal}
        onClose={() => setOpenDetailSeniorModal(false)}
        dataSenior={
          dataSenior ?? {
            icon: "",
            name: "",
            listSeniors: [],
          }
        }
      />
    </BaseContainer>
  );
};

export default SeniorSection;
