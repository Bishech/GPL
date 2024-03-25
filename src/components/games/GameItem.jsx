import React from "react";

export const GameItem = ({
  firstTeamLogo,
  secondTeamLogo,
  firstTeamPoints,
  secondTeamPoints,
  id,
  firstTeamId,
  secondTeamId,
}) => {
  return (
    <button className="skew-x-[-5deg] cursor-default bg-gray-700 rounded-lg h-20 border-2 border-black relative text-white">
      <div className="w-full h-full  rounded-lg border-b-[8px] border-b-slate-800 border-t-[8px] border-t-slate-600 border-x-transparent">
        <div className="w-full h-full flex flex-row items-center gap-4  justify-between text-white">
          <div>
            <picture className="h-full w-full">
              <img
                src={firstTeamLogo}
                className="pl-3 w-20 h-20 object-contain"
              />
            </picture>
          </div>
          <div className="lg:text-5xl md:text-4xl text-3xl uppercase text-wrap skew-x-[5deg]">
            {firstTeamPoints}
          </div>
          <div className="lg:text-5xl md:text-4xl text-3xl text-yellow-400 drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
            VS
          </div>
          <div className="lg:text-5xl md:text-4xl text-3xl uppercase text-wrap skew-x-[5deg]">
            {secondTeamPoints}
          </div>
          <div>
            <picture className="h-full w-full">
              <img
                src={secondTeamLogo}
                className="pr-3 w-20 h-20 object-contain"
              />
            </picture>
          </div>
        </div>
      </div>
    </button>
  );
};
