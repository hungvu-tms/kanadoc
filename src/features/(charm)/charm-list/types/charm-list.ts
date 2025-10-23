export interface CharmItem {
  id: number;
  title: string;
  image: string;
}

export interface CharmListData {
  charm_list: CharmItem[];
  page_current: number;
  total_pages: number;
}