import React from 'react';
import ReactDOM from 'react-dom/client';
import CircularProgressBar from './CircularProgressBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CircularProgressBar />
  </React.StrictMode>
);

import React, { useState, useEffect } from 'react';
import './style.css';

function CircularProgressBar() {
  const [startValue, setStartValue] = useState(0);
  const endValue = 100;
  const speed = 50;

  useEffect(() => {
    const progress = setInterval(() => {
      setStartValue(prevValue => {
        const newValue = prevValue + 1;
        const circularProgress = document.querySelector(".circular-progress");
        if (circularProgress) {
          circularProgress.style.background = `conic-gradient(rgb(43, 226, 195) ${newValue * 3.6}deg, #ededed 0deg
          )`;
        }
        if (newValue === endValue) {
          clearInterval(progress);
        }
        return newValue;
      });
    }, speed);

    return () => clearInterval(progress);
  }, []);

  return (
    <div className="container">
      <div className="circular-progress">
        <span className="progress-value">{startValue}%</span>
      </div>
      <span className="text">Progress Bar</span>
    </div>
  );
}

export default CircularProgressBar;
