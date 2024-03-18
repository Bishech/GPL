import React from "react";
import { ContactPlayer } from "./ContactPlayer";
import { PlayerStats } from "./PlayerStats";

import partnersProLogo from "../../assets/partners-pro-item.png";

export const PartnersProPlayer = ({
  playerImg,
  playerName,
  teamName,
  matches,
  victories,
}) => {
  return (
    <div className="flex gap-10">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="w-2/3 mb-4">
          <img src={partnersProLogo} />
        </div>
        <img src={playerImg} className="w-2/3" />
        <p className="-mt-24 bg-white text-blue-800 text-center text-5xl w-56 h-16 flex items-center justify-center skew-x-[-5deg] shadow-lg shadow-black">
          {playerName}
        </p>
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
        <PlayerStats KD={8} DPS={148} MVP={2} />
        <ContactPlayer />
      </div>
    </div>
  );
};
