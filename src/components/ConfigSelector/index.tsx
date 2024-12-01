import React from "react";
import { ConfigSelectorProps } from "./types";
import { ConfigOption, ConfigSelectorWrapper } from "./styles";

const ConfigSelector = React.memo(({ 
  label, 
  options, 
  selectedValue, 
  onChange 
}: ConfigSelectorProps) => {
  return (
    <ConfigSelectorWrapper>
      <label>{label}</label>
      <select value={selectedValue} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <ConfigOption key={option.value} value={option.value}>
            {option.title || option.value}
          </ConfigOption>
        ))}
      </select>
    </ConfigSelectorWrapper>
  );
});

export default ConfigSelector;