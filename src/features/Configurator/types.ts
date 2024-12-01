export interface ConfigSelectionData {
  color?: string;
  seating?: string;
}

export interface handleconfig {
  color?: string;
  seating?: string;
}

export interface FetchDataResponse {
  seatingOptions: { value: string; title: string }[];
}

export interface Seating {
  option1OptionsCollection: { value: string; title: string }[];
  sofa: {
    option2OptionsCollection: { value: string; title: string }[];
  };
}

export interface Config {
  priceUsd: number;
}

export interface Price {
  value: number;
}

export interface ColorsData {
  colors: { value: string; title: string }[];
}

export interface SeatingConfiguratorProps {
  collectionTitle: string;
  seating: Seating;
  config: Config;
  price: Price;
  colorsData: ColorsData;
  configId: string;
}