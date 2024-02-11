import React from "react";
import { useParams } from "react-router-dom";
import { TeamCard } from "../components/TeamCard";
import logo from "../assets/team-logo.png";
import playerImg from "../assets/player-image.png";

const players = [
  { name: "playerName", img: playerImg, id: 1 },
  { name: "playerName", img: playerImg, id: 2 },
  { name: "playerName", img: playerImg, id: 3 },
];

export const TeamInfo = () => {
  const { name } = useParams();

  return (
    <div>
      <TeamCard logo={logo} players={players} name={name} />
    </div>
  );
};
