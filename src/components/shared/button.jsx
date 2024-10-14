import React from "react";

const Button = ({ text }) => {
  return (
    <button className=" p-3 bg-rose-800 text-white  hover:scale-110 transition-all rounded-md capitalize">
      {text}
    </button>
  );
};

export const ButtonSecondary = ({ text }) => {
  return (
    <button className=" p-3 bg-rose-700 text-white hover:scale-110 transition-all rounded-md capitalize">
      {text}
    </button>
  );
};

export default Button;
