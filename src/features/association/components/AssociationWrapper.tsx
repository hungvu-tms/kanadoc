import BaseContainer from "@/components/common/BaseContainer";
import HeroSection from "@/components/common/HeroSection";
import ImageFallback from "@/components/common/ImageFallback";
import AssociationTable from "@/features/association/components/AssociationTable";

const AssociationWrapper = () => {
  return (
    <div className="w-full bg-[#F5F6FA]">
      <HeroSection
        title="医師会とは"
        image="/images/association/associationTop.jpg"
      />

      <section className="flex items-center justify-center bg-[#F5F6FA] flex-col gap-10 mt-10 mb-15 px-5">
        <ImageFallback
          src="/images/association/associationTitle.svg"
          alt="news"
          width={1000}
          height={1000}
          className="w-[50%] sm:w-[300px] h-auto sm:pt-[80px] pt-[30px]"
        />
        <div className="text-[16px] sm:text-[21px] font-bold text-black">
          <p>
            神奈川県医師会は、会員９,８９３名（※）により構成される公益法人です。
          </p>
          <p>
            保健医療の充実、地域医療の推進発展、医師の生涯教育および医療従事者の育成に関する事項等、さまざまな事業を行っています。
          </p>
          <p> ※令和６年８月３１日現在</p>
        </div>
      </section>
      <div className="flex flex-col gap-10 w-full">
        <BaseContainer>
          <ImageFallback
            src="/images/association/ishikai1SP.png"
            alt="association"
            width={1000}
            height={1000}
            className="w-full sm:rounded-t-[30px]"
          />

          <div className="flex w-full">
            <a href="#">
              <ImageFallback
                src="/images/association/ishikai1ASP.png"
                alt="association"
                width={1000}
                height={1000}
                className="w-full"
              />
            </a>
            <a href="#">
              <ImageFallback
                src="/images/association/ishikai1BSP.png"
                alt="association"
                width={1000}
                height={1000}
                className="w-full"
              />
            </a>
            <a href="#">
              <ImageFallback
                src="/images/association/ishikai1CSP.png"
                alt="association"
                width={1000}
                height={1000}
                className="w-full"
              />
            </a>
          </div>
          <ImageFallback
            src="/images/association/ishikai2SP.png"
            alt="association"
            width={1000}
            height={1000}
            className="w-full"
          />
          <ImageFallback
            src="/images/association/ishikai3SP.png"
            alt="association"
            width={1000}
            height={1000}
            className="w-full sm:rounded-b-[30px]"
          />
        </BaseContainer>

        <BaseContainer>
          <ImageFallback
            src="/images/association/ishikai4SP.png"
            alt="association"
            width={1000}
            height={1000}
            className="w-full sm:rounded-[30px]"
          />
        </BaseContainer>

        <BaseContainer>
          <ImageFallback
            src="/images/association/ishikai5.png"
            alt="association"
            width={1000}
            height={1000}
            className="w-full sm:rounded-[30px]"
          />
        </BaseContainer>
      </div>

      <AssociationTable />
    </div>
  );
};

export default AssociationWrapper;
