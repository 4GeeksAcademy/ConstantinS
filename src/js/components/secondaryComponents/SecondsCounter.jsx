import React, { useEffect, useState } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // <--- ESTA LÍNEA FALTABA
import Cajita from "./Cajita";

library.add(faClock);

const TimeCounter = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const format = (val) => String(val).padStart(2, "0");

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center mt-5" >
      <div className="row g-2">
          <Cajita><FontAwesomeIcon icon={faClock}></FontAwesomeIcon></Cajita>
          <Cajita>{format(hours)}</Cajita>
          <span className="col-md-3 border border-black bg-black text-white d-flex align-items-center justify-content-center" style={{ width: "20px", height: "100px", fontSize: "3rem" }}>:</span>
          <Cajita>{format(minutes)}</Cajita>
          <span className="col-md-3 border border-black bg-black text-white d-flex align-items-center justify-content-center" style={{ width: "20px", height: "100px", fontSize: "3rem" }}>:</span>
          <Cajita>{format(secs)}</Cajita>
      </div>
    </div>
  );
};

export default TimeCounter;