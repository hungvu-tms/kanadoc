/* eslint-disable @typescript-eslint/no-explicit-any */

import { axiosInstance } from "@/lib/axios-client";
import { GetListHospitalParams } from "@/types/hospitalApi";

export const hospitalApi = {
  getListHospital: async (params: GetListHospitalParams): Promise<any> => {
    return await axiosInstance.get("/hplist", { params });
  },
} as const;
