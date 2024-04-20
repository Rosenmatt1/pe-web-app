import React, { useState } from 'react';

interface DropdownProps {
  options: string[];
  onSelectOption: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelectOption }) => {
  const [selectedOption, setSelectedOption] = useState<string | any>(null);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    onSelectOption(option);
  };

  return (
    <div className="dropdown">
      <select
        value={selectedOption}
        onChange={(e) => handleOptionSelect(e.target.value)}
      >
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