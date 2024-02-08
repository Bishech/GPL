import React from "react";

export const Player = ({ playerImg, playerName }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={playerImg} className="w-72 h-72" />
      <p className="bg-white text-blue-800 text-center text-2xl w-40 h-8 skew-x-[-5deg] shadow-lg shadow-black -mt-16">
        {playerName}
      </p>
    </div>
  );
};
