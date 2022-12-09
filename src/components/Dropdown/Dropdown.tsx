import './Dropdown.scss';
import Select from 'react-select';
interface IItem {
  id: number;
  name: string;
}

interface IDropdownProps {
  title: string;
  items: IItem[];
  selectedValue: IItem;
}
export const Dropdown = (props: IDropdownProps) => {
  const { title, items, selectedValue } = props;
  const options = [
    { id: 1, name: 'Chocolate' },
    { id: 2, name: 'Strawberry' },
    { id: 3, name: 'Vanilla' },
  ];
  return (
    <Select
      id="currencyFrom"
      isMulti={false}
      value={selectedValue}
      onChange={() => {}}
      options={options}
      isSearchable={false}
    />
  );
};
