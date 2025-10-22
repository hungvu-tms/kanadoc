import { NewItem } from "@/features/(news)/news-list/types/new-list";
import { useState } from "react";

const useQueryNewList = (newsListData: NewItem[]) => {
  const [newList] = useState<NewItem[]>(newsListData);
  return {
    newList,
  };
};
export default useQueryNewList;
