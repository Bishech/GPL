import React from "react";

export const PlayerStats = ({
  kd,
  dps,
  favoriteBrawler,
  mvpCount,
  kills,
  deaths,
  winRate,
}) => {
  return (
    <div className="pt-3 md:grid md:grid-row-7 flex flex-col gap-4 md:items-start content-center">
      <div className="md:text-7xl text-4xl col-span-3 items-center text-center text-white rotate-[-3deg] pb-3">
        Статистика
      </div>
      <div className="bg-blue-600 text-3xl text-center px-2 skew-x-[-5deg] border-t-4 border-r-4 border-r-blue-500">
        Общий K/D: {kd}
      </div>
      <div className="bg-blue-600 text-3xl text-center px-2 skew-x-[-5deg] border-t-4 border-r-4  border-r-blue-500">
        Общий DPS: {dps}
      </div>
      <div className="bg-blue-600 text-3xl text-center px-2 skew-x-[-5deg] border-t-4 border-r-4  border-r-blue-500">
        MVP: {mvpCount}
      </div>
      <div className="bg-blue-600 text-3xl text-center px-2 skew-x-[-5deg] border-t-4 border-r-4  border-r-blue-500">
        Все убийства: {kills}
      </div>
      <div className="bg-blue-600 text-3xl text-center px-2 skew-x-[-5deg] border-t-4 border-r-4  border-r-blue-500">
        Все смерти: {deaths}
      </div>
      <div className="bg-blue-600 text-3xl text-center px-2 skew-x-[-5deg] border-t-4 border-r-4  border-r-blue-500">
        Win Rate: {winRate}
      </div>
      {/* <div className="bg-blue-600 text-3xl text-center col-span-3 px-2 skew-x-[-5deg] border-t-4 border-r-4  border-r-blue-500">
        Любимый бравлер: {favoriteBrawler}
      </div> */}
    </div>
  );
};
