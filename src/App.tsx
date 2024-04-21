import React from 'react';
import Timer from './components/timer'
import Dropdown from './components/dropdown'
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
        <div className="results"> Results </div>
    </div>
  );
}

export default App;
