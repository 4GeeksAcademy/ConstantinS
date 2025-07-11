import React from "react";

const Cajita = ({ children }) => {
    return (
        <div
            className=" col-md-3 border border-black bg-black text-white d-flex align-items-center justify-content-center" style={{width: "100px",height: "100px",fontSize: "3rem"}}>
            {children}
        </div>
    );
};

export default Cajita;