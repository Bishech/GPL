import React from "react";

export const PlayerStats = ({
  kd,
  dps,
  mvp,
  kills,
  deaths,
  winRate,
  favBrawler,
}) => {
  return (
    <div className="pt-3 md:grid md:grid-row-7 flex flex-col gap-4 md:items-center content-center">
      <div className="md:text-7xl text-4xl col-span-3 items-center text-center text-white rotate-[-3deg] pb-3">
        Статистика
      </div>
      <div className="bg-violet-900 text-3xl text-center px-2 skew-x-[-5deg] border-t-4 border-r-4 border-r-violet-600">
        Общий K/D: {kd}
      </div>
      <div className="bg-violet-900 text-3xl text-center px-2 skew-x-[-5deg] border-t-4 border-r-4 border-r-violet-600">
        Общий DPS: {dps}
      </div>
      <div className="bg-violet-900 text-3xl text-center px-2 skew-x-[-5deg] border-t-4 border-r-4 border-r-violet-600">
        MVP: {mvp}
      </div>
      <div className="bg-violet-900 text-3xl text-center px-2 skew-x-[-5deg] border-t-4 border-r-4 border-r-violet-600">
        Все убийства: {kills}
      </div>
      <div className="bg-violet-900 text-3xl text-center px-2 skew-x-[-5deg] border-t-4 border-r-4 border-r-violet-600">
        Все смерти: {deaths}
      </div>
      <div className="bg-violet-900 text-3xl text-center px-2 skew-x-[-5deg] border-t-4 border-r-4 border-r-violet-600">
        Win Rate: {winRate}
      </div>
      <div className="bg-violet-900 text-3xl text-center col-span-3 px-2 skew-x-[-5deg] border-t-4 border-r-4 border-r-violet-600">
        Любимый бравлер: {favBrawler}
      </div>
    </div>
  );
};
