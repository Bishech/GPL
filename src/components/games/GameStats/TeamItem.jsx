import React from "react";
import { PlayerItem } from "./PlayerItem";

// one team
export const TeamItem = ({ players, type }) => {
  return (
    <div className="flex md:flex-row flex-col md:items-start items-center justify-evenly gap-10">
      {players.map((player) => (
        <PlayerItem
          key={player.id}
          id={player.id}
          avatar={player.avatar}
          name={player.name}
          dps={player.dps}
          kd={player.kd}
          isMvp={player.isMvp}
          type={type}
        />
      ))}
    </div>
  );
};
