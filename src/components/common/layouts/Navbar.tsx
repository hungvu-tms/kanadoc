"use client";
import BaseButton from "@/components/base/BaseButton";
import { FormItemInput } from "@/components/common/form/FormItemInput";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

const navItems = [
  {
    label: "TOP",
    href: "/",
  },
  {
    label: "お知らせ",
    href: "/news",
  },
  {
    label: "医師会とは",
    href: "/association",
  },
  {
    label: "研修病院一覧",
    href: "/hplist",
  },
  {
    label: "神奈川県の専門研修",
    href: "/senior",
  },
];
interface FormValues {
  keyword: string;
}
const Navbar = () => {
  const [visibleNavbar, setVisibleNavbar] = useState(false);
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      keyword: "",
    },
  });
  const onSubmit = (data: FormValues) => {};
  return (
    // sm:bg-red-500 md:bg-green-500 lg:bg-blue-500 xl:bg-yellow-500  2xl:bg-pink-500
    <nav className="!z-51 w-full flex align-center justify-end p-3 sm:pt-[16px] sm:pr-[32px] sm:pb-[32px] absolute top-0 left-0 right-0  text-[#ffffff]">
      <ul className="items-center gap-6 text-[16px] font-bold hidden lg:flex">
        {navItems.map((item, key) => (
          <li key={`navbar-item-${key}`}>
            <Link
              href={item.href}
              className="hover:text-[#112B72] transition-all duration-300 [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)]"
            >
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-center gap-[4px]"
          >
            <FormItemInput
              name="keyword"
              control={control}
              placeholder="キーワードを入力"
              className="text-black font-normal"
            />
            <BaseButton
              className="rounded-none bg-[#112B72] min-w-auto px-2 py-[2px]"
              type="submit"
            >
              検索
            </BaseButton>
          </form>
        </li>
      </ul>
      <div className="w-full flex lg:hidden justify-end">
        <Sheet open={visibleNavbar}>
          {visibleNavbar ? (
            <X
              className="w-[30px] h-[30px] text-[#ffffff] pointer-events-auto cursor-pointer"
              onClick={() => {
                setVisibleNavbar(false);
              }}
            />
          ) : (
            <MenuIcon
              className="w-[30px] h-[30px] text-[#ffffff] pointer-events-auto cursor-pointer"
              onClick={() => setVisibleNavbar(true)}
            />
          )}

          <SheetContent
            side="top"
            className="h-screen w-screen [&>button.absolute.right-4.top-4]:hidden overflow-y-auto no-scrollbar bg-[#112B72] text-white flex items-center justify-center"
          >
            <SheetTitle></SheetTitle>
            <ul className="flex flex-col text-center gap-7">
              {navItems.map((item, key) => (
                <li key={`navbar-item-${key}`}>
                  <Link
                    onClick={() => setVisibleNavbar(false)}
                    href={item.href}
                    className="transition-all duration-300 text-[16px] border-b border-white pb-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
