import React from "react";

export const RoundButton = ({ children, buttonStyle }) => {

  return (
    <button className="btn btn-light mx-1 rounded-pill"
    style={buttonStyle}
    >{children}</button>
  );
};


