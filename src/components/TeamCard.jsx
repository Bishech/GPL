import React from "react";
import { Player } from "./Player";

export const TeamCard = ({ logo, players, name, teamId }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5 -mt-10">
      <div className="flex lg:flex-row flex-col justify-between items-center lg:gap-32">
        <img
          src={logo}
          className="lg:w-64 md:w-60 w-48 lg:h-64 md:h-60 h-48 object-contain"
        />
        <h1 className="lg:text-8xl md:text-7xl text-5xl text-center text-white uppercase drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
          {name}
        </h1>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-center flex-wrap gap-20">
        {players.map((player) => (
          <Player
            avatar={player.avatar}
            name={player.name}
            id={player.id}
            teamId={teamId}
            key={player.id}
          />
        ))}
      </div>
    </div>
  );
};
