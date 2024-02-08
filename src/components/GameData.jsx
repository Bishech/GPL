import React from "react";

export const GameData = ({
  firstTeamLogo,
  secondTeamLogo,
  firstTeamPoints,
  secondTeamPoints,
}) => {
  return (
    <div className="text-center">
      <button
        disabled
        className="skew-x-[-5deg] cursor-default bg-gray-700 border-2 rounded-lg w-2/3 h-44 border-black"
      >
        <div className="h-full w-full border-2  border-black rounded-lg border-b-[18px] border-b-slate-800 border-t-[18px] border-t-slate-600 relative border-x-transparent">
          <div className="w-full h-full flex flex-row gap-10 px-6 justify-center items-center">
            <div>
              <img src={firstTeamLogo} className="w-32 h-32 object-cover" />
            </div>
            <div className="flex flex-grow"></div>
            <div className="text-9xl text-white">{firstTeamPoints}</div>
            <div className="text-8xl text-yellow-400">VS</div>
            <div className="text-9xl text-red-600">{secondTeamPoints}</div>
            <div className="flex flex-grow"></div>
            <div>
              <img src={secondTeamLogo} className="w-32 h-32 object-cover" />
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};
