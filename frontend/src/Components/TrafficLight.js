import React from 'react';
import './TrafficLight.css'; 
const TrafficLight = ({ color }) => {
  return (
    <div className="traffic-light">
      <div className={`light ${color === 'red' ? 'red' : ''}`}></div>
      <div className={`light ${color === 'green' ? 'green' : ''}`}></div>
    </div>
  );
};

export default TrafficLight;