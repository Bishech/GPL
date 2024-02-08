import React from "react";
import { Player } from "./Player";

export const TeamCard = ({ logo, players }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5 -mt-10">
      <div className="flex flex-row items-center gap-20">
        <img src={logo} className="w-72 h-72" />
      </div>
      <div className="flex flex-row gap-20">
        {players.map((player) => {
          return (
            <Player
              playerImg={player.img}
              playerName={player.name}
              key={player.id}
            />
          );
        })}
      </div>
    </div>
  );
};
