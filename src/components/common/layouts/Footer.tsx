import BaseContainer from "@/components/common/BaseContainer";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <BaseContainer component="footer" className="!bg-[#112B72] py-[32px]">
      <div className="w-full flex justify-between flex-col sm:flex-row items-center text-white gap-[40px]">
        <div className="flex flex-col gap-2 text-[16px] items-start sm:items-center w-full sm:w-auto">
          <ul className="flex flex-col sm:flex-row sm:items-center gap-4 flex-wrap items-start ">
            <li className="sm:border-r border-white pr-4">
              <Link href="/">TOP</Link>
            </li>
            <li className="sm:border-r border-white pr-4">
              <Link href="/hplist">研修病院一覧</Link>
            </li>
            <li className="pr-4">
              <Link href="/news">お知らせ</Link>
            </li>
          </ul>
          <ul className="flex sm:items-center items-start gap-4 flex-wrap flex-col sm:flex-row">
            <li className="sm:border-r border-white pr-4">
              <Link href="/senior">神奈川県の専門研修</Link>
            </li>
            <li className="pr-4">
              <Link href="/association">医師会とは</Link>
            </li>
          </ul>
          <ul className="flex mt-3 pt-3 sm:pt-0 sm:mt-0 sm:items-center items-start gap-4 flex-wrap flex-col sm:flex-row border-t border-white sm:border-t-0 w-full sm:w-auto">
            <li className="sm:border-r border-white pr-4">
              <Link href="/privacy">プライバシーポリシー</Link>
            </li>
            <li className="pr-4">
              <Link href="/contact">お問合わせ</Link>
            </li>
          </ul>
        </div>
        <Image
          src="/logoMain.svg"
          alt="kanagawa_logo"
          width={150}
          height={150}
          className="object-cover"
          unoptimized
        />
      </div>
    </BaseContainer>
  );
};

export default Footer;
