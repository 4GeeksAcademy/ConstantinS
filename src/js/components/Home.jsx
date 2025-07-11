import React from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import TimeCounter from "./secondaryComponents/SecondsCounter";


//create your first component


const Home = ({ counter }) => {
  return (
    <div className="text-center" style={{ color: "red" }}>
      <TimeCounter totalSeconds={counter} />
    </div>
  );
};
export default Home;
