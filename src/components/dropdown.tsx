import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedKey } from '../store/reducers/dataSlice';
import { RootState } from '../store/store';

interface DropdownProps {
  options: string[];
  onSelectOption: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelectOption }) => {
  const dispatch = useDispatch();
  // const [selectedOption, setSelectedOption] = useState<string | any>(null);
  const selectedKey = useSelector((state: RootState) => state.data.selectedKey);

  // const handleOptionSelect = (option: string) => {
  //   setSelectedOption(option);
  //   onSelectOption(option);
  // };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSelectedKey(e.target.value));
  };

  return (
    <div className="dropdown">
        {/* <select
        value={selectedOption}
        onChange={(e) => handleOptionSelect(e.target.value)}
        > */}
        <select value={selectedKey} onChange={handleSelectChange}>
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
        </select>
    </div>
  );
};

export default Dropdown;