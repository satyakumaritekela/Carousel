import { useState, useEffect } from "react";
import { FetchDataResponse } from "../features/Configurator/types";
import { fetchConfigData } from "../features/Configurator/services";

export const useConfigData = (configId: string) => {
  const [data, setData] = useState<FetchDataResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const configData = await fetchConfigData(configId);
        setData(configData);
      } catch (err) {
        setErrorMessage(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [configId]);

  return { data, isLoading, errorMessage, setErrorMessage };
};
