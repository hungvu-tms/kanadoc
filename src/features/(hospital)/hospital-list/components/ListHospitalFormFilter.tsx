"use client";
import BaseButton from "@/components/base/BaseButton";
import BaseContainer from "@/components/common/BaseContainer";
import { FormItemInput } from "@/components/common/form/FormItemInput";

import { FormItemSelect } from "@/components/common/form/FormItemSelect";
import ImageFallback from "@/components/common/ImageFallback";
import { ChevronDownIcon, SearchIcon } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
interface FormValues {
  area: string;
  name: string;
}
interface ListHospitalFormFilterProps {
  onChangeArea: (area: string) => void;
  onChangeName: (name: string) => void;
}
const ListHospitalFormFilter = ({
  onChangeArea,
  onChangeName,
}: ListHospitalFormFilterProps) => {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      area: "",
      name: "",
    },
  });
  const area = watch("area");
  const onSubmit = (data: FormValues) => {
    onChangeName(data.name);
  };
  useEffect(() => {
    if (area) onChangeArea(area);
  }, [area, onChangeArea]);
  return (
    <BaseContainer
      className="!bg-[#F5F6FA] px-[20px] sm:px-0"
      classNameContent="bg-white"
    >
      <div className="w-full h-full flex items-center justify-center flex-col  sm:px-[60px]">
        <div className="sm:w-[50%] my-[60px] mb-4 sm:mb-[60px]">
          <ImageFallback
            src="/images/hplist/pcMap.png"
            alt="filter-image"
            width={1000}
            height={1000}
            className="h-full w-full"
          />
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex items-center justify-center flex-col sm:flex-row gap-4 sm:gap-8"
        >
          <div className="w-full">
            <label className="text-[#33447D] font-bold text-[16px]">
              エリアを選択する
            </label>
            <FormItemSelect
              className="w-full !rounded-[5px] !h-[33px]"
              suffixIcon={
                <div className="w-11 bg-[#112B72] h-full absolute right-0 top-0 text-center z-20 flex items-center justify-center rounded-r-[5px]">
                  <ChevronDownIcon className="w-4 h-4 text-white" />
                </div>
              }
              name="area"
              control={control}
              options={[
                {
                  label: "エリア1",
                  value: "area1",
                },
                {
                  label: "エリア2",
                  value: "area2",
                },
                {
                  label: "エリア3",
                  value: "area3",
                },
              ]}
              placeholder="選択してください。"
            />
          </div>
          <div className="w-full">
            <label className="text-[#33447D] font-bold text-[16px]">
              病院名で検索する
            </label>
            <FormItemInput
              name="name"
              control={control}
              placeholder="選択してください。"
              className="w-full !h-[33px] !rounded-[5px]"
              suffixIcon={
                <BaseButton
                  type="submit"
                  className="w-11 min-w-8 bg-[#112B72] h-full absolute right-0 top-0 text-center z-20 flex items-center justify-center rounded-r-[5px] rounded-l-none"
                >
                  <SearchIcon className="w-4 h-4 text-white" />
                </BaseButton>
              }
            />
          </div>
        </form>
      </div>
    </BaseContainer>
  );
};
export default ListHospitalFormFilter;
