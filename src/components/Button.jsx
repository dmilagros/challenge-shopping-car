import React from "react";
import "../styles/button.css";

const Button = ({ type, icon, textLink, textButton, name, handleClick }) => {
  return (
    <div>
      <button
        className={type === "link" ? "link" : "button"}
        onClick={handleClick}
      >
        <div className="icon-button text-link">
          {icon && <img src={icon} alt={name} />}
          {textLink && <p>{textLink} </p>}
        </div>
        {textButton && <p>{textButton} </p>}
      </button>
    </div>
  );
};

export default Button;
