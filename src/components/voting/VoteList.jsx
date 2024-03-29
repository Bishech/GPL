import React, { useState } from "react";

import { VoteItem } from "./VoteItem";

import { useUnit } from "effector-react";
import { $userToken } from "../../stores/user";
import { useNavigate } from "react-router-dom";

export const VoteList = ({ id, votes, isReadonly }) => {
  const navigate = useNavigate();

  const token = useUnit($userToken);

  const [list, setList] = useState(votes);

  function sendVote() {
    fetch(`https://api.gpltournaments.xyz/votes/${id}/vote/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(
        list.map((item) => ({ id: item.id, teamId: item.selectedTeamId }))
      ),
    });
    alert("Спасибо, твои прогнозы записаны!");
    navigate("/");
  }

  return (
    <div className="flex flex-col gap-16 mb-10">
      {list.map((vote) => (
        <VoteItem
          key={vote.id}
          teams={vote.teams}
          id={vote.id}
          isReadonly={isReadonly}
          selectedTeamId={vote.selectedTeamId}
          onSelectTeam={(teamId) => {
            setList(
              list.map((item) =>
                item.id == vote.id ? { ...item, selectedTeamId: teamId } : item
              )
            );
            console.log(teamId);
          }}
        />
      ))}
      <div className="text-center">
        {isReadonly ? (
          <div className="md:text-3xl text-xl text-slate-100 drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
            Прогнозы сегодняшнего дня завершены.
          </div>
        ) : (
          <button
            onClick={sendVote}
            className="md:text-2xl text-xl md:w-1/3 w-1/2 font-extra text-slate-200 drop-shadow-[0_2px_2px_rgba(0,0,0,1)] text-center p-2 skew-x-[-5deg] bg-neutral-900 hover:bg-neutral-800 border-2 rounded-lg shadow-md shadow-black border-yellow-400"
          >
            Отправить
          </button>
        )}
      </div>
    </div>
  );
};
