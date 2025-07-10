import React from "react";

const TimeCounter = ({ totalSeconds }) => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  // Para mostrar siempre dos dígitos
  const format = (val) => String(val).padStart(2, '0');

  return (
    <div className="text-center" style={{ fontSize: "2rem" }}>
      <p>{format(hours)}:{format(minutes)}:{format(seconds)}</p>
    </div>
  );
};

export default TimeCounter;