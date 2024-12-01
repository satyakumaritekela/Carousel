import { Config } from "../features/Configurator/types";

export const calculateCozeyCarePrice = (config: Config) => {
  return config.priceUsd * 0.1;
};
