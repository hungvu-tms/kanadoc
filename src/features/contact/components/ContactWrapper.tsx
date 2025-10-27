import BaseContainer from "@/components/common/BaseContainer";
import HeroSection from "@/components/common/HeroSection";

const ContactWrapper = () => {
  return (
    <>
      <HeroSection
        title="お問合わせ"
        image="/images/contact/contactTop.jpg"
      />
      <BaseContainer className="py-30">
        <div className="p-4 rounded-md w-full">
          <h2 className="text-[#2b6cb0] font-bold text-lg mb-2">
            公益社団法人 神奈川県医師会
          </h2>

          <p className="text-sm leading-relaxed mb-1">〒231-0037</p>
          <p className="text-sm leading-relaxed mb-3">
            神奈川県横浜市中区富士見町3-1 神奈川県総合医療会館3階
          </p>

          <p className="text-sm leading-relaxed">
            <span className="font-semibold">TEL：</span>045-241-7000
          </p>
          <p className="text-sm leading-relaxed">
            <span className="font-semibold">FAX：</span>045-241-1464
          </p>
        </div>
      </BaseContainer>
    </>
  );
};

export default ContactWrapper;
