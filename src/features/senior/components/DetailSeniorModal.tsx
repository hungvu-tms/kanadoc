import BaseModal from "@/components/base/BaseModal";
import { SeniorItem } from "@/features/senior/types/senior";
import Image from "next/image";
import Link from "next/link";

export interface DetailSeniorModalProps {
  open: boolean;
  onClose: () => void;
  dataSenior: {
    icon: string;
    name: string;
    listSeniors: SeniorItem[];
  };
}
const DetailSeniorModal = ({
  open,
  onClose,
  dataSenior,
}: DetailSeniorModalProps) => {
  const { icon, name, listSeniors } = dataSenior;
  return (
    <BaseModal open={open} onClose={onClose}>
      <div className="flex w-full justify-center items-center gap-4">
        <Image
          src={icon}
          alt={name}
          width={1000}
          height={1000}
          className="w-[32px] h-[32px] object-cover"
          unoptimized
        />
        <p className="text-[24px] font-bold text-[#120f46]">{name}</p>
      </div>
      <div className="flex w-full justify-start items-start flex-col gap-2 mt-4">
        {listSeniors.map((item, key) => (
          <div key={key}>
            <Link href={item.link} target="_blank" rel="noopener noreferrer">
              <p className="text-[16px] font-normal text-[#000000]">
                {item.name}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </BaseModal>
  );
};

export default DetailSeniorModal;
