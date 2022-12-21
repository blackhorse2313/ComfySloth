import './Dropdown.scss';
import React, { useEffect, useState } from 'react';
import Select, { ActionMeta, StylesConfig } from 'react-select';

interface IDropdownProps {
  onChange(value: string | undefined): void;
  label?: string;
  options: ISelectItem[];
}

interface ISelectItem {
  value: string;
  label: string;
}

export const Dropdown = (props: IDropdownProps) => {
  const { options, label } = props;
  const [selectedOption, setSelectedOption] = useState<ISelectItem | null>();

  useEffect(() => {
    if (selectedOption?.value) props.onChange(selectedOption?.value);
  }, [selectedOption]);

  return (
    <div className="custom-select">
      {label && <label>{label}</label>}
      <Select
        isMulti={false}
        classNamePrefix="custom-select"
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        classNames={{
          option: (state) => (state.isFocused ? 'item-focused' : state.isSelected ? 'item-selected' : ''),
        }}
      />
    </div>
  );
};
