import React, { useEffect, useState } from "react";

import { VoteList } from "../components/voting/VoteList";
import { Loader } from "../components/UI/Loader/Loader";

import { useUnit } from "effector-react";
import { $userToken } from "../stores/user";

export const Voting = () => {
  const token = useUnit($userToken);

  const [votes, setVotes] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);

  async function getVotes() {
    const req = await fetch("https://api.gpltournaments.xyz/vote/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (req.status === 204) return setIsEmpty(true);
    const data = await req.json();
    setVotes(data);
  }

  useEffect(() => {
    getVotes();
  }, []);

  if (isEmpty)
    return (
      <div className="md:text-5xl text-3xl text-center text-slate-100 drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
        Наша команда уже загружает новые прогнозы. Загляни позже!
      </div>
    );
  return votes == null ? (
    <Loader />
  ) : (
    <div className="flex flex-col gap-10">
      <div className="text-5xl text-center text-slate-100 drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
        {votes.name}
      </div>
      <VoteList votes={votes.votes} id={votes.id} />
    </div>
  );
};
