import React from "react";
import { useParams } from "react-router-dom";
import { PlayerCard } from "../components/PlayerCard";
import playerImg from "../assets/player-image.png";

export const PlayerInfo = () => {
  const { teamName, playerName } = useParams();

  return (
    <div>
      <PlayerCard
        playerImg={playerImg}
        playerName={playerName}
        teamName={teamName}
        matches={14}
        victories={7}
      />
    </div>
  );
};
