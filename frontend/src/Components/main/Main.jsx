import React, { useState, useEffect } from 'react';
import TrafficLight from '../TrafficLight';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';

import './Main.css';
import bgImg from '../../Assets/roadCross.svg';

const firebaseConfig = {
  apiKey: "AIzaSyAwDOBao006k2-cRD5ay8PFRtrZRqEUQxM",
  authDomain: "project1-93792.firebaseapp.com",
  databaseURL: "https://project1-93792-default-rtdb.firebaseio.com",
  projectId: "project1-93792",
  storageBucket: "project1-93792.firebasestorage.app",
  messagingSenderId: "847328482575",
  appId: "1:847328482575:web:4384c400dfbc1bce05da7a",
  measurementId: "G-KVWJQCZ6JC",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const Main = () => {
  const [x, setX] = useState(0); 
  const [y, setY] = useState(0); 
  const [timer, setTimer] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const road1Color = isFlipped ? 'red' : 'green';
  const road2Color = isFlipped ? 'green' : 'red';

  const fetchData = async () => {
    try {
      const snapshot = await get(ref(database, '/py'));
      if (snapshot.exists()) {
        const data = snapshot.val();
        setX(data.image1 || 0);
        setY(data.image2 || 0); 
      } else {
        console.log("Aucune donnée trouvée !");
      }
    } catch (error) {
      console.error("Erreur de récupération des données:", error);
    }
  };
    const calculateTimer = () => {
    const maxTime = 20;
    const timePerCar = 2; 
    const maxCars = Math.floor(maxTime / timePerCar); 
    const timeForRoad1 = Math.min(x, maxCars) * timePerCar; 
    const timeForRoad2 = Math.min(y, maxCars) * timePerCar; 
    return isFlipped ? timeForRoad2 : timeForRoad1;
  };

  useEffect(() => {
    fetchData();

    const updateLogic = () => {
      fetchData();
      const newTimer = calculateTimer();
      setTimer(newTimer);
    };

    const flipInterval = setInterval(() => {
      setIsFlipped((prev) => !prev);
      updateLogic();
    }, timer * 1000);

    return () => clearInterval(flipInterval);
  }, [x, y, isFlipped, timer]);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <div className="Appp">
      <div className="container">
        <div className="left-section">
          <h1 className="title">Feux de signalisation</h1>
          <div className="timer-container">
            <svg className="timer-circle" width="100" height="100">
              <circle className="timer-background" cx="50" cy="50" r="45" />
              <circle
                className="timer-progress"
                cx="50"
                cy="50"
                r="45"
                style={{
                  strokeDashoffset: '${(timer / 20) * 283}',
                }}
              />
            </svg>
            <div className="timer-text">{timer}</div>
          </div>
          <div className="controls">
            <p>
              Cars on Road 1:
              <span style={{ color: x > y ? '#27ae60' : '#e74c3c' }}>{x}</span>
            </p>
            <p>
              Cars on Road 2:
              <span style={{ color: y > x ? '#27ae60' : '#e74c3c' }}>{y}</span>
            </p>
          </div>
        </div>
        <div className="right-section">
          <div className="image-container">
            <img src={bgImg} alt="Intersection" className="intersection-image" />
          </div>
          <div className="traffic-lights">
            <div className="roadLight1">
              <TrafficLight color={road1Color} />
            </div>
            <div className="roadLight2">
              <TrafficLight color={road2Color} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;