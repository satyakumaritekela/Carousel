import axios from "axios";
import { FetchDataResponse } from "./types";

export const fetchConfigData = async (configId: string): Promise<FetchDataResponse> => {
  try {
    const { data } = await axios.get<FetchDataResponse>(`/api/configuration/${configId}`);
    return data;
  } catch (error) {
    console.error("Error fetching configuration:", error);
    throw new Error("Failed to fetch configuration data.");
  }
};
