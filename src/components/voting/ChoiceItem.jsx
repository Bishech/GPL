import React, { useState } from "react";

const sideColor = {
  red: "bg-gradient-to-l from-red-600 rounded-s-lg",
  blue: "bg-gradient-to-r from-blue-500 rounded-e-lg",
};

export const ChoiceItem = ({ name, logo, side, id, isActive, handleClick }) => {
  const activeStyle = {
    active: "border-2 border-slate-900",
    inactive: "",
  };

  return (
    <div
      onClick={handleClick}
      className={`${sideColor[side]} ${
        isActive ? activeStyle.active : activeStyle.inactive
      } flex flex-col justify-center items-center w-full h-40 skew-x-[-5deg] drop-shadow-[0_2px_2px_rgba(0,0,0,1)] cursor-pointer`}
    >
      <div className="md:w-20 w-16 pt-4">
        <picture>
          <img src={logo} className="h-full w-full object-contain" />
        </picture>
      </div>
      <div className="md:text-4xl pb-4 text-2xl text-center text-wrap text-slate-200 drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
        {name}
      </div>
    </div>
  );
};
