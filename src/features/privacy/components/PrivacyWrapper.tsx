import BaseContainer from "@/components/common/BaseContainer";
import HeroSection from "@/components/common/HeroSection";

const PrivacyWrapper = () => {
  return (
    <div className="w-full">
      <HeroSection
        title="プライバシーポリシー"
        image="/images/privacy/privacyTop.jpg"
      />
      <BaseContainer className="py-30">
        <div className="text-gray-800 leading-relaxed space-y-8 w-full mx-auto flex flex-col gap-10">
          <section>
            <h2 className="text-[#2b6cb0] font-bold text-lg mb-2">
              プライバシーポリシー
            </h2>
            <p className="leading-5 whitespace-pre-line">
              {`公益社団法人 神奈川県医師会は、「個人情報保護法」に基づき、\n公益社団法人 神奈川県医師会サイト（https://kanadoc.com/以下「当ウェブサイト」という）の運営を行います。`}
            </p>
            <p className="leading-5">
              本プライバシー・ポリシーは、当ウェブサイトにおいて、お客様の個人情報がどのような方針で収集・利用・管理されるかについて記載したものです。
            </p>
          </section>

          <section>
            <h2 className="text-[#2b6cb0] font-bold text-lg mb-2">適用範囲</h2>
            <p className="leading-5 whitespace-pre-line">
              {` 本プライバシー・ポリシーは、当ウェブサイトにおいてのみ適用されます。\n当ウェブサイトは、いくつかの外部サイトへのリンクを含みますが、個人情報を共有するものではありません。`}
            </p>
            <p className="leading-5">
              リンク先ウェブサイトにて行われる個人情報の収集に関しては、リンク先ウェブサイトのプライバシー・ポリシー等をご参照ください。
            </p>
          </section>

          <section>
            <h2 className="text-[#2b6cb0] font-bold text-lg mb-2">免責事項</h2>
            <p className="leading-5">
              当会は法令の変更等、必要に応じて、本プライバシー・ポリシーを改訂することがあります。
            </p>
          </section>
        </div>
      </BaseContainer>
    </div>
  );
};

export default PrivacyWrapper;
