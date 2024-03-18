import React from "react";
import { useParams } from "react-router-dom";
import playerImg from "../assets/player-image.png";

import { DefaultPlayer } from "../components/playercards/DefaultPlayer";

export const PlayerInfo = () => {
  const { teamName, playerName } = useParams();

  return (
    <div>
      <DefaultPlayer
        playerImg={playerImg}
        playerName={playerName}
        teamName={teamName}
      />
    </div>
  );
};
