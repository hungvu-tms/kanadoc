import HeroSection from "@/components/common/HeroSection";
import ImageFallback from "@/components/common/ImageFallback";
import EnqueteSection from "@/features/enquete/components/EnqueteSection";

const EnqueteWrapper = () => {
  return (
    <div className="w-full bg-[#F5F6FA]">
      <HeroSection
        title="研修医アンケート"
        image="https://kanadoc.com/image/headerImage/seniorTop.jpg"
      />
      <section className="flex items-center justify-center bg-[#F5F6FA] flex-col gap-10">
        <ImageFallback
          src="https://kanadoc.com/image/headerTitle/enqueteTitle.svg"
          alt="news"
          width={1000}
          height={1000}
          className="w-[50%] sm:w-[300px] h-auto pt-[80px]"
        />
        <div className="text-[21px] font-bold text-[#1062af] text-center">
          <p> 神奈川県の現役研修医にアンケートを実施しました！</p>
          <p>
            <span className="text-[#DC7492] font-normal">
              令和６年４月に入局された初期研修医
            </span>
            に行ったアンケート調査の結果になります。
          </p>
        </div>
      </section>
      <EnqueteSection />
    </div>
  );
};

export default EnqueteWrapper;
