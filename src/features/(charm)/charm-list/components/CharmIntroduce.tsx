import BaseContainer from "@/components/common/BaseContainer";
import { CHARM_INTRODUCE } from "@/features/(charm)/charm-list/constants/charm-list";
import Image from "next/image";
import Link from "next/link";

const CharmIntroduce = () => {
  return (
    <BaseContainer>
      <div className="flex flex-col items-center justify-center w-full pt-20 sm:pt-30 pb-10 sm:pb-20">
        <Image
          src="https://kanadoc.com/image/headerTitle/charmTitle.svg"
          alt="charm-introduce"
          width={1000}
          height={1000}
          className="w-[60%] sm:w-[22%] h-full object-cover"
        />
      </div>
      <div className="w-full flex flex-col gap-10">
        {CHARM_INTRODUCE.map((item, key) => (
          <div
            key={key}
            style={{ backgroundImage: `url("${item.background_image}")` }}
            className="w-full flex flex-col sm:flex-row bg-cover justify-end items-center sm:min-h-[450px]"
          >
            <div className="h-full py-[128px] sm:py-0"></div>
            <div className="flex flex-col gap-2 sm:w-[65%] w-full sm:min-h-[inherit] bg-[rgba(16,94,177,0.68)] justify-center items-start text-white sm:px-[64px] px-6 py-[32px]">
              <h3 className="text-[28px] font-bold">{item.title}</h3>
              <p className="text-[16px] leading-5">{item.description}</p>
              <Link href={item.link} className="text-end w-full">
                ＞詳しくはコチラ
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center w-full flex-col gap-10 sm:p-30 px-0 py-15">
        <Image
          src="https://kanadoc.com/image/headerTitle/kankouTitle.svg"
          alt="charm-introduce"
          width={1000}
          height={1000}
          className="sm:w-[22%] w-[60%] h-full object-cover"
        />
        <p className="text-[16px] whitespace-pre-line leading-5">
          {`神奈川県では、公式観光サイト「観光かながわNOW」を公益社団法人神奈川県観光協会とともに運営し、\n本県の自然、歴史、伝統、文化などの多様な観光情報を提供しています。`}
        </p>
        <Link
          href="https://www.kanagawa-kankou.or.jp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://kanadoc.com/image/image/kanagawa_logo.jpg"
            alt="kanagawa_logo"
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-[10px] border-[1px]"
            unoptimized
          />
        </Link>
      </div>
    </BaseContainer>
  );
};

export default CharmIntroduce;
