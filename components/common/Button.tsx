import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = "button" }) => (
  <button
    type={type}
    onClick={onClick}
    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
  >
    {label}
  </button>
);

export default Button;

