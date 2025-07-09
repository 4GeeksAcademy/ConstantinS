import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({ counter }) => {
  return (
    <div className="text-center">
      <h1 className="text-center mt-5">Hello Rigo!</h1>
      <p>{counter}</p>
    </div>
  );
};

export default Home;
