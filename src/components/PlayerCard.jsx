import React from "react";
import { ContactPlayer } from "./ContactPlayer";

export const PlayerCard = ({
  playerImg,
  playerName,
  teamName,
  matches,
  victories,
}) => {
  return (
    <div className="flex gap-10">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <p className="bg-white text-blue-800 text-center text-5xl w-72 h-16 flex items-center justify-center skew-x-[-5deg] shadow-lg shadow-black">
          {playerName}
        </p>
        <img src={playerImg} className="w-2/3" />
      </div>
      <div className="flex flex-col justify-stretch w-1/2 content-center ">
        <div className="grid grid-col-6 gap-4 content-center justify-stretch">
          <div className="text-7xl col-span-2 text-center text-white rotate-[-3deg] pb-3">
            Об участнике
          </div>
          <div className="bg-blue-600 text-3xl text-center px-2 col-span-2 skew-x-[-5deg] border-t-4 border-r-4 border-r-blue-500">
            Команда: {teamName}
          </div>
          <div className="text-center bg-blue-600 text-3xl px-2 skew-x-[-5deg] border-t-4  border-r-4 border-r-blue-500">
            Сыграно матчей: {matches}
          </div>
          <div className="text-center bg-blue-600 text-3xl px-2 skew-x-[-5deg] border-t-4 border-r-4 border-r-blue-500">
            Побед: {victories}
          </div>
        </div>
        <ContactPlayer />
      </div>
    </div>
  );
};
