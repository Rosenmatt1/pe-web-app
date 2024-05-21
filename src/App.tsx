import React, { createContext, useState, useContext } from 'react';
import Timer from './components/timer'
import Dropdown from './components/dropdown'
import Results from './components/results'
import './App.css';


const options = ['Stretching', "Hanging", 'Pumping', 'Clamping', 'Jelqing', 'Extending'];


function App() {
  return (
    <div className="wrapper">
      <div className="title"> The PE App </div>
      <div className="peapp">
          <Dropdown options={options} />
          <Timer />
          <Results />
      </div>
    </div>
  );
}

export default App;
