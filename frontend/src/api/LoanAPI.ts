import axios, { AxiosRequestConfig } from "axios";
import { BusinessType } from "@/components/types/Business";

const URL = process.env.NEXT_PUBLIC_SERVER_URL;

export function REGISTER_LOAN(data: BusinessType) {
  const config: AxiosRequestConfig = {
    url: `${URL}/business/new`,
    data: data,
    method: "post",
  };
  return axios(config);
}
