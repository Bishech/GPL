import React from "react";

export const PlayerStats = ({ KD, DPS, MVP }) => {
  return (
    <div className="pt-3 grid grid-row-3 gap-4 content-center justify-stretch">
      <div className="text-7xl col-span-3 text-center text-white rotate-[-3deg] pb-3">
        Статистика
      </div>
      <div className="bg-violet-900 text-3xl text-center px-2 skew-x-[-5deg] border-t-4 border-r-4 border-r-violet-600">
        Общий K/D: {KD}
      </div>
      <div className="bg-violet-900 text-3xl text-center px-2 skew-x-[-5deg] border-t-4 border-r-4 border-r-violet-600">
        Общий DPS: {DPS}
      </div>
      <div className="bg-violet-900 text-3xl text-center px-2 skew-x-[-5deg] border-t-4 border-r-4 border-r-violet-600">
        MVP: {MVP}
      </div>
    </div>
  );
};
