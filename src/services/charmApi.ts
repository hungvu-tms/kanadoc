/* eslint-disable @typescript-eslint/no-explicit-any */

import { axiosInstance } from "@/lib/axios-client";

export const charmApi = {
  getListCharm: async (page: number): Promise<any> => {
    return await axiosInstance.get("/charmlist", { params: { page } });
  },
} as const;
