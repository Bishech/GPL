import React, { useEffect, useState } from "react";

import { RoundStats } from "../components/games/GameStats/RoundStats";
import { Loader } from "../components/UI/Loader/Loader";
import { useParams } from "react-router-dom";

// list of rounds
export const GameStats = () => {
  const { id } = useParams();

  const [rounds, setRound] = useState(null);

  async function getRoundInfo(id) {
    const req = await fetch(`https://api.gpltournaments.xyz/rounds/${id}/`);
    const data = await req.json();
    setRound(data);
  }

  useEffect(() => {
    getRoundInfo(id);
  }, []);

  return rounds == null ? (
    <Loader />
  ) : (
    <div className="flex flex-col gap-44">
      {rounds.map((round) => (
        <RoundStats teams={round.teams} event={round.event} />
      ))}
    </div>
  );
};
