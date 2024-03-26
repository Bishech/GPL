import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { DefaultPlayer } from "../components/playercards/DefaultPlayer";
import { PartnersPlayer } from "../components/playercards/PartnersPlayer";
import { PartnersProPlayer } from "../components/playercards/PartnersProPlayer";

import { Loader } from "../components/UI/Loader/Loader";

export const PlayerInfo = () => {
  const { teamId, id } = useParams();

  const [player, setPlayer] = useState(null);

  async function getPlayerInfo(teamId, id) {
    const req = await fetch(
      `https://api.gpltournaments.xyz/${teamId}/players/${id}/`
    );
    const data = await req.json();
    setPlayer(data);
  }

  useEffect(() => {
    getPlayerInfo(teamId, id);
  }, []);

  return player == null ? (
    <Loader />
  ) : (
    <div>
      {player.type == "None" && (
        <DefaultPlayer
          id={id}
          type={player.type}
          avatar={player.avatar}
          name={player.name}
          teamName={player.teamName}
        />
      )}
      {player.type == "Partners" && (
        <PartnersPlayer
          id={id}
          type={player.type}
          avatar={player.avatar}
          name={player.name}
          teamName={player.teamName}
          gameCount={player.stats.gameCount}
          winCount={player.stats.winCount}
          telegramLink={player.telegramLink}
        />
      )}
      {player.type == "PartnersPro" && (
        <PartnersProPlayer
          id={id}
          type={player.type}
          avatar={player.avatar}
          name={player.name}
          teamName={player.teamName}
          kd={player.stats.kd}
          winRate={player.stats.winRate}
          dps={player.stats.dps}
          mvpCount={player.stats.mvpCount}
          kills={player.stats.kills}
          deaths={player.stats.deaths}
          gameCount={player.stats.gameCount}
          winCount={player.stats.winCount}
          telegramLink={player.telegramLink}
        />
      )}
    </div>
  );
};
