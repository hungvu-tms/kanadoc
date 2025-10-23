import BaseButton from "@/components/base/BaseButton";
import { BaseTable } from "@/components/base/BaseTable";
import BaseContainer from "@/components/common/BaseContainer";
import { ASSOCIATION_TABLE_DATA } from "@/features/association/constants/association";
import Image from "next/image";
import Link from "next/link";

const AssociationTable = () => {
  return (
    <BaseContainer className="sm:pb-20 pb-10">
      <div className="flex items-center justify-between flex-col w-full py-[70px]">
        <Link
          href="https://mamis.member-sys.info/"
          className="w-full sm:min-w-[250px] sm:w-auto"
        >
          <BaseButton className="w-full">医師会入会はこちら</BaseButton>
        </Link>
        <Link
          href="https://kanadoc.com/industrialdoctor"
          className="block sm:hidden mt-5 w-full sm:min-w-[250px]"
        >
          <BaseButton className="w-full">産業医についてはこちら</BaseButton>
        </Link>
        <Image
          src="https://kanadoc.com/image/headerTitle/bunkakaiTitle.svg"
          alt="bunkakai"
          width={1000}
          height={1000}
          className="sm:w-[22%] w-[70%] h-auto pt-[80px]"
        />
      </div>
      <BaseTable
        columns={[
          {
            title: "No",
            width: "auto",
            key: "order",
          },
          {
            title: "宛先",
            width: "auto",
            key: "name",
          },
          {
            title: "〒",
            width: "auto",
            key: "postal_code",
            className: "min-w-[150px]",
          },
          {
            title: "事務局所在地",
            width: "auto",
            key: "location",
          },
          {
            title: "電話",
            width: "auto",
            key: "phone",
            className: "min-w-[200px]",
          },
        ]}
        dataTable={ASSOCIATION_TABLE_DATA.map((item, key) => {
          return {
            order: key + 1,
            name: (
              <div className="flex flex-col">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    item.address.first.link ? "text-[#2c80ee]" : "text-black"
                  }`}
                  href={item.address.first.link}
                >
                  {item.address.first.name}
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    item.address.second.link ? "text-[#2c80ee]" : "text-black"
                  }`}
                  href={item.address.second.link}
                >
                  {item.address.second.name}
                </Link>
                {item?.address?.third && (
                  <>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        item.address.third.link
                          ? "text-[#2c80ee]"
                          : "text-black"
                      }`}
                      href={item.address.third.link}
                    >
                      {item.address.third.name}
                    </Link>
                  </>
                )}
              </div>
            ),
            postal_code: item.postal_code,
            location: (
              <div className="flex flex-col">
                <p>{item.address.first.location}</p>
                <p>{item.address.second.location}</p>
                {item?.address?.third && <p>{item.address.third.location}</p>}
              </div>
            ),
            phone: item.phone,
          };
        })}
        classNameTableCell="align-top !p-[16px] bg-[#F5F6FA]"
        classNameTableHead="bg-[#cfd9ff] text-black !p-[20px]"
        classNameTable="table-auto text-[16px]"
      />
    </BaseContainer>
  );
};

export default AssociationTable;
