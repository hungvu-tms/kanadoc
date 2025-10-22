import { Hospital } from "@/features/(hospital)/hospital-list/types/hospital-list";
import { useCallback, useState } from "react";

const useQueryHospitalList = (hospitalListData: Hospital[]) => {
  const [hospitalList] = useState<Hospital[]>(hospitalListData);
  const onChangeArea = useCallback((area: string) => {}, []);
  const onChangeName = useCallback((name: string) => {}, []);

  return {
    hospitalList,
    onChangeArea,
    onChangeName,
  };
};
export default useQueryHospitalList;
