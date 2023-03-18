import React from 'react';
import "./styles.css";

const Button = ({ title, ...props }) => {
  return (
    <button {...props} className="red-button">
      {title}
    </button>
  );
};

export default Button;
