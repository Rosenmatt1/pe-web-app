import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Results: React.FC = () => {
  const data = useSelector((state: RootState) => state.data.data);

  return (
    <div className="results">
      <h2>Results</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <strong>Exercise:</strong> {item.key}, <strong>Time:</strong> {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;