"use client";
import { CharmItem } from "@/features/(charm)/charm-list/types/charm-list";
import { useLoading } from "@/providers/LoadingProvider";
import { charmApi } from "@/services/charmApi";
import { scrollToElement } from "@/utils/scrollToElement";
import { useCallback, useState } from "react";

const useQueryCharmList = (
  charmListData: CharmItem[],
  currentPageParam: number,
  totalPagesParam: number
) => {
  const { showLoading, hideLoading, showToast } = useLoading();
  const [currentPage, setCurrentPage] = useState(currentPageParam || 1);
  const totalPages = totalPagesParam;
  const [charmList, setCharmList] = useState<CharmItem[]>(charmListData || []);
  const onChangePage = useCallback(
    async (page: number) => {
      showLoading();
      try {
        const res = await charmApi.getListCharm(page);
        setCharmList(res.data.charm_list);
        setCurrentPage(page);
        scrollToElement("#charm-post");
      } catch (error) {
        showToast({
          messages: "登録に失敗しました",
          severity: "error",
        });
      } finally {
        hideLoading();
      }
    },
    [hideLoading, showLoading, showToast, setCurrentPage]
  );
  return { currentPage, totalPages, charmList, onChangePage };
};

export default useQueryCharmList;
