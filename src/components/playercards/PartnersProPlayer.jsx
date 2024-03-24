import React from "react";
import { ContactPlayer } from "./ContactPlayer";
import { PlayerStats } from "./PlayerStats";

import partnersProLogo from "../../assets/partners-pro-item.png";

export const PartnersProPlayer = ({
  avatar,
  teamName,
  gameCount,
  winCount,
  winRate,
  dps,
  kd,
  mvpCount,
  kills,
  deaths,
  favoriteBrawler,
  telegramLink,
  name,
}) => {
  return (
    <div className="flex md:flex-row md:items-start flex-col gap-10 items-center">
      <div className="lg:w-1/2 w-full flex flex-col justify-center items-center">
        <div className="lg:w-2/3 object-contain mb-4">
          <img src={partnersProLogo} />
        </div>
        <img src={avatar} className="lg:w-2/3 w-full object-contain" />
        {avatar.includes("none") && (
          <p className="bg-white text-blue-800 text-center text-2xl min-[350px]:text-4xl p-2 max-w-44 skew-x-[-5deg] shadow-lg shadow-black -mt-10 md:-mt-16 text-wrap">
            {name}
          </p>
        )}
      </div>
      <div className="flex flex-col justify-start lg:w-1/2 w-full content-center gap-2">
        <div className="md:grid md:grid-col-6 flex flex-col gap-4 content-center md:items-center">
          <div className="col-span-2 md:grid hidden text-7xl text-center text-white rotate-[-3deg] pb-3">
            Об участнике
          </div>
          <div className="bg-blue-600 min-[470px]:text-3xl text-2xl text-center col-span-2 skew-x-[-5deg] border-t-4 border-r-4 border-r-blue-500">
            Команда: {teamName}
          </div>
          <div className="text-center bg-blue-600 min-[470px]:text-3xl text-2xl skew-x-[-5deg] border-t-4  border-r-4 border-r-blue-500">
            Матчей: {gameCount}
          </div>
          <div className="text-center bg-blue-600 min-[470px]:text-3xl text-2xl skew-x-[-5deg] border-t-4 border-r-4 border-r-blue-500">
            Побед: {winCount}
          </div>
        </div>
        <PlayerStats
          dps={dps}
          kills={kills}
          deaths={deaths}
          mvpCount={mvpCount}
          kd={kd}
          favoriteBrawler={favoriteBrawler}
          winRate={winRate}
        />
        {!telegramLink ? <></> : <ContactPlayer telegramLink={telegramLink} />}
      </div>
    </div>
  );
};
