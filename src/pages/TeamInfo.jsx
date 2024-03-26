import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { TeamCard } from "../components/TeamCard";
import { Loader } from "../components/UI/Loader/Loader";
import { LastGames } from "../components/games/LastGames";

export const TeamInfo = () => {
  const { id } = useParams();

  const [team, setTeam] = useState(null);

  async function getTeamInfo(id) {
    const req = await fetch(`https://api.gpltournaments.xyz/teams/${id}/`);
    const data = await req.json();
    setTeam(data);
  }

  useEffect(() => {
    getTeamInfo(id);
  }, []);
  return team == null ? (
    <Loader />
  ) : (
    <div>
      <TeamCard
        logo={team.logo}
        name={team.name}
        players={team.players}
        teamId={id}
      />
      {team.rounds.length == 0 ? <></> : <LastGames rounds={team.rounds} />}
    </div>
  );
};
