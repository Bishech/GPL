import React from "react";
import { Player } from "./Player";

export const TeamCard = ({ logo, players, name }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5 -mt-10">
      <div className="flex flex-row justify-between  items-center gap-32">
        <img src={logo} className="w-72 h-72" />
        <h1 className="text-8xl text-white">{name}</h1>
      </div>
      <div className="flex flex-row gap-20">
        {players.map((player) => (
          <Player
            playerImg={player.img}
            playerName={player.name}
            teamName={name}
          />
        ))}
      </div>
    </div>
  );
};
