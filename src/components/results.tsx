import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Results: React.FC = () => {
  const data = useSelector((state: RootState) => state.data.data);
//   console.log(data)

  return (
    <div className="results">
      <h2>Results</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <strong>Key:</strong> {item.key}, <strong>Value:</strong> {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;