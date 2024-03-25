import React from "react";

import { GameItem } from "./GameItem";

export const LastGames = ({ rounds }) => {
  return (
    <div className="flex flex-col gap-10 w-full mt-10 justify-center items-center">
      <div className="skew-y-[-3deg] text-white lg:text-7xl text-5xl text-center drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
        Недавние бои
      </div>
      <div className="flex flex-col gap-7 md:w-1/2 w-full">
        {rounds.map((round) => {
          const firstTeam = round.teams[0];
          const secondTeam = round.teams[1];

          return (
            <GameItem
              key={round.id}
              id={round.id}
              firstTeamId={firstTeam.id}
              firstTeamLogo={firstTeam.logo}
              firstTeamPoints={firstTeam.winsCount}
              secondTeamId={secondTeam.id}
              secondTeamLogo={secondTeam.logo}
              secondTeamPoints={secondTeam.winsCount}
            />
          );
        })}
      </div>
    </div>
  );
};
