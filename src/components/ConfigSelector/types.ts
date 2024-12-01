export interface OptionType {
  value: string;
  title: string;
}

export interface ConfigSelectorProps {
  label: string;
  options: OptionType[];
  selectedValue: string;
  onChange: (value: string) => void;
}
