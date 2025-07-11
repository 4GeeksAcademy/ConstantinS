import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faHourglassEnd } from '@fortawesome/free-solid-svg-icons';


const TimeCounter = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const format = (val) => String(val).padStart(2, "0");

  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div className="row">
        <div className="col-md-4 border bg-black text-white d-flex align-items-center justify-content-center  " style={{width:"100px",height:"100px",color:"white",fontSize:"3rem"}}>
          <FontAwesomeIcon icon={faClock} />
        </div>
        <div className="col-md-4 border bg-black text-white d-flex align-items-center justify-content-center  " style={{width:"100px",height:"100px",color:"white",fontSize:"3rem"}}>

        {format(hours)}
      </div>
      <div className="col-md-4 border bg-black text-white  d-flex align-items-center justify-content-center" style={{width:"100px",height:"100px",color:"white",fontSize:"3rem"}}>

        {format(minutes)}
      </div>
      <div className="col-md-4 border bg-black text-white  d-flex align-items-center justify-content-center" style={{width:"100px",height:"100px",color:"white", fontSize:"3rem"}}>

        {format(secs)}
      </div>
      </div>
      
     
      
    </div>
  );
};

export default TimeCounter;