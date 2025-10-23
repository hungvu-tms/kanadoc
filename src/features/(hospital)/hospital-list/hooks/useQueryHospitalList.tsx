import { Hospital } from "@/features/(hospital)/hospital-list/types/hospital-list";
import { useLoading } from "@/providers/LoadingProvider";
import { hospitalApi } from "@/services/hospitalApi";
import { useCallback, useRef, useState } from "react";

const useQueryHospitalList = (hospitalListData: Hospital[]) => {
  const { showLoading, hideLoading, showToast } = useLoading();
  const queryParams = useRef({
    area: "",
    name: "",
  });
  const [hospitalList, setHospitalList] =
    useState<Hospital[]>(hospitalListData);
  const onChangeArea = useCallback(
    async (area: string) => {
      showLoading();
      try {
        queryParams.current.area = area;
        const res = await hospitalApi.getListHospital({
          ...queryParams.current,
          area: area,
        });
        const { data } = res;
        setHospitalList(data);
      } catch (error) {
        showToast({
          messages: "登録に失敗しました",
          severity: "error",
        });
      } finally {
        hideLoading();
      }
    },
    [hideLoading, showLoading, showToast]
  );
  const onChangeName = useCallback(
    async (name: string) => {
      showLoading();
      try {
        queryParams.current.name = name;
        const res = await hospitalApi.getListHospital({
          ...queryParams.current,
          name: name,
        });
        const { data } = res;
        setHospitalList(data);
      } catch (error) {
        showToast({
          messages: "登録に失敗しました",
          severity: "error",
        });
      } finally {
        hideLoading();
      }
    },
    [hideLoading, showLoading, showToast]
  );

  return {
    hospitalList,
    onChangeArea,
    onChangeName,
  };
};
export default useQueryHospitalList;
