import React, { createContext, useState, useContext } from 'react';
import Timer from './components/timer'
import Dropdown from './components/dropdown'
import Counter from './components/counter'
import './App.css';


const options = ['Stretching', "Hanging", 'Pumping', 'Clamping', ];

const handleSelectOption = (option: string) => {
    console.log(`Selected option: ${option}`);
  };

function App() {
  return (
    <div className="peapp">
        <Counter />
        <Dropdown options={options} onSelectOption={handleSelectOption} />
        <Timer/>
        <div className="results"> Results </div>
    </div>
  );
}

export default App;
