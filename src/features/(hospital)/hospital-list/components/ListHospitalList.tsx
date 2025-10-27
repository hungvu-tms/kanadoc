import BaseButton from "@/components/base/BaseButton";
import BaseContainer from "@/components/common/BaseContainer";
import ImageFallback from "@/components/common/ImageFallback";
import ZoneChip from "@/features/(hospital)/components/ZoneChip";
import { Hospital } from "@/features/(hospital)/hospital-list/types/hospital-list";
import Link from "next/link";

interface ListHospitalListProps {
  hospitalList: Hospital[];
}
const ListHospitalList = ({ hospitalList }: ListHospitalListProps) => {
  return (
    <BaseContainer
      className="!bg-[#F5F6FA] px-[20px] sm:px-0"
      classNameContent="bg-white"
    >
      <div className="w-full grid  grid-cols-1 md:grid-cols-2 grid-rows-1 gap-10 py-[50px] px-0 sm:px-[50px]">
        {hospitalList.map((hospital) => (
          <div
            key={hospital.id}
            className="flex items-center flex-col sm:flex-row gap-[32px] border-b border-dotted border-[#33447D] pb-4"
          >
            <ImageFallback
              src={hospital.image}
              alt="image"
              width={1000}
              height={1000}
              className="w-full sm:w-[90px]"
            />
            <div className="flex flex-col gap-2 w-full min-w-0">
              <div className="flex flex-col">
                <ZoneChip zone={hospital.zone} type={hospital.type} />
                <p className="text-[16px] font-bold text-[#33447D] whitespace-nowrap overflow-hidden text-ellipsis">
                  {hospital.name}
                </p>
              </div>
              <Link
                className="text-right text-[16px] text-[#33447D]"
                href={`/hpinfo/${hospital.id}`}
              >
                ＞詳細を見る
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center w-full flex-col gap-[30px] pb-[50px]">
        <ImageFallback
          src="/images/hplist/enqueteTitle.svg"
          alt="list-title"
          width={1000}
          height={1000}
          className="w-[200px] h-auto"
        />
        <p className="text-[16px] text-black whitespace-pre-line leading-5">
          {
            "神奈川県の現役研修医にアンケートを実施しました\n令和６年４月に入局された初期研修医に行ったアンケート調査の結果になります。"
          }
        </p>
        <Link href="/enquete">
          <BaseButton className="py-[10px] text-[19px]">
            アンケート結果はこちら
          </BaseButton>
        </Link>
      </div>
    </BaseContainer>
  );
};
export default ListHospitalList;
