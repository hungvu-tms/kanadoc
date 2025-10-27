import BaseButton from "@/components/base/BaseButton";
import ImageFallback from "@/components/common/ImageFallback";
import Link from "next/link";

const medicalItems = [
  {
    image: "/images/top/hospitalnewList1.jpg",
    title: "研修病院一覧",
    description: "神奈川県の臨床研修病院が\n一目でわかります",
    color: "#112B72",
    link: "/hplist",
  },
  {
    image: "/images/top/hospitalnewList2.jpg",
    title: "医師会とは",
    description: "神奈川県医師会の詳細\n最新情報はこちらから",
    color: "#43AEA5",
    link: "/association",
  },
  {
    image: "/images/top/hospitalnewList3.jpg",
    title: "神奈川県の専門研修",
    description: "神奈川県専門研修病院の\nプログラム情報はこちらから",
    color: "#0b8dc9",
    link: "/senior",
  },
];
const MedicalSection = () => {
  return (
    <section className="bg-cover bg-center bg-[url('/images/top/newmainTop2.jpg')] min-h-[500px] px-6 ms:px-0 py-[100px] flex items-center justify-center">
      <div className="xl:w-[1120px] 2xl:w-[1120px] w-full flex flex-col md:flex-row items-center justify-center gap-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-[40px]">
          {medicalItems.map((item, key) => (
            <div
              style={{ backgroundColor: item.color }}
              className={`w-full rounded-[16px] border-[1px] border-[#ffffff] grid grid-rows-subgrid row-span-4 gap-6`}
              key={`medical-item-${key}`}
            >
              <div className="w-full h-full max-h-[200px] md:max-h-[150px]">
                <ImageFallback
                  src={item.image}
                  alt={item.title}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover rounded-t-[16px] max-h-[200px] md:max-h-[150px]"
                />
              </div>
              <div className="w-full px-[30px] text-center flex items-center justify-center">
                <h3 className="text-[32px] font-bold text-white">
                  {item.title}
                </h3>
              </div>
              <div className="w-full px-[30px] text-center">
                <p className="text-[16px] font-bold text-white whitespace-pre-line">
                  {item.description}
                </p>
              </div>
              <div className="flex flex-col gap-6 pt-[20px] px-[30px] pb-[60px] text-center">
                <Link href={item.link} className="w-full">
                  <BaseButton
                    style={{ color: item.color }}
                    className={`bg-white  w-full hover:bg-white `}
                  >
                    一覧を見る
                  </BaseButton>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalSection;
