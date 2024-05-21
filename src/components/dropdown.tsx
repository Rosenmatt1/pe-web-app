import React, { useState , useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedKey } from '../store/reducers/dataSlice';
import { RootState } from '../store/store';

interface DropdownProps {
  options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const dispatch = useDispatch();
  const selectedKey = useSelector((state: RootState) => state.data.selectedKey);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSelectedKey(e.target.value));
  };

  useEffect(() => {
    console.log("Selected key Dowpdown:", selectedKey);
  }, [selectedKey]); // Log selectedKey when it changes

  return (
    <div className="dropdown">
        <h1 className="choose"> Choose Exercise </h1>
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