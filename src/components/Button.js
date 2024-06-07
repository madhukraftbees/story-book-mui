// src/components/Button.js
import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      style={{ padding: "10px 20px", fontSize: "16px" }}
    >
      {children}
    </button>
  );
};

export default Button;
