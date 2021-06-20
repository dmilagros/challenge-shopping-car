import React from "react";
import "../styles/divider.css";

const Divider = ({ isHidden }) => {
  return <div className={isHidden ? "hidden" : "divider"} />;
};

export default Divider;
