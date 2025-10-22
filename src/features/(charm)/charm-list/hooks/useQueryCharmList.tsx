import { CharmItem } from "@/features/(charm)/charm-list/types/charm-list";
import { useCallback, useState } from "react";

const useQueryCharmList = (charmListData: CharmItem[]) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;
  const [charmList] = useState<CharmItem[]>(charmListData);
  const onChangePage = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);
  return { currentPage, totalPages, charmList, onChangePage };
};

export default useQueryCharmList;
