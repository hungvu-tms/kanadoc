import BaseButton from "@/components/base/BaseButton";
import ImageFallback from "@/components/common/ImageFallback";
import Link from "next/link";

const medicalItems = [
  {
    image: "https://kanadoc.com/image/index/hospitalnewList1.jpg",
    title: "研修病院一覧",
    description: "神奈川県の臨床研修病院が\n一目でわかります",
    color: "#112B72",
    link: "/hplist",
  },
  {
    image: "https://kanadoc.com/image/index/hospitalnewList2.jpg",
    title: "医師会とは",
    description: "神奈川県医師会の詳細\n最新情報はこちらから",
    color: "#43AEA5",
    link: "/association",
  },
  {
    image: "https://kanadoc.com/image/index/hospitalnewList3.jpg",
    title: "神奈川県の専門研修",
    description: "神奈川県専門研修病院の\nプログラム情報はこちらから",
    color: "#0b8dc9",
    link: "/senior",
  },
];
const MedicalSection = () => {
  return (
    <section className="bg-cover bg-center bg-[url('https://kanadoc.com/image/headerImage/newmainTop2.jpg')] min-h-[500px] px-6 ms:px-0 py-[100px] flex items-center justify-center">
      <div className="xl:w-[1120px] 2xl:w-[1120px] w-full flex flex-col md:flex-row items-center justify-center gap-[40px]">
        {medicalItems.map((item, key) => (
          <div
            style={{ backgroundColor: item.color }}
            className={`w-full rounded-[16px] flex flex-col gap-4 border-[1px] border-[#ffffff] bg-[${item.color}] self-stretch`}
            key={`medical-item-${key}`}
          >
            <div className="w-full h-full max-h-[200px] md:max-h-[150px]">
              <ImageFallback
                src={item.image}
                alt={item.title}
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-t-[16px] max-h-[200px] md:max-h-[150px]"
                unoptimized
              />
            </div>
            <div className="flex flex-col gap-6 pt-[20px] px-[30px] pb-[60px] text-center">
              <h3 className="text-[32px] font-bold text-white">{item.title}</h3>
              <p className="text-[16px] font-bold text-white whitespace-pre-line">
                {item.description}
              </p>
              <Link href={item.link}>
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
    </section>
  );
};

export default MedicalSection;
