import React, { createContext, useState, useContext } from 'react';
import Timer from './components/timer'
import Dropdown from './components/dropdown'
import './App.css';


// Define the type for the context value
interface MyContextType {
  value1: string;
  setValue1: React.Dispatch<React.SetStateAction<string>>;
  value2: string;
  setValue2: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context
const MyContext = createContext<MyContextType | undefined>(undefined);

const options = ['Stretching', "Hanging", 'Pumping', 'Clamping', ];

const handleSelectOption = (option: string) => {
    console.log(`Selected option: ${option}`);
  };

function App() {
  return (
    <div className="peapp">
        <Dropdown options={options} onSelectOption={handleSelectOption} />
        <Timer/>
        <div className="results"> Results </div>
    </div>
  );
}

export default App;
