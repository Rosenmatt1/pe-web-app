import React, { createContext, useState, useContext } from 'react';
import Timer from './components/timer'
import Dropdown from './components/dropdown'
import Results from './components/results'
import './App.css';


const options = ['Stretching', "Hanging", 'Pumping', 'Clamping', ];

const handleSelectOption = (option: string) => {
    console.log(`Selected option: ${option}`);
  };

function App() {
  return (
    <div className="peapp">

        <Dropdown options={options} onSelectOption={handleSelectOption} />
        <Timer/>
        <Results />
    </div>
  );
}

export default App;
