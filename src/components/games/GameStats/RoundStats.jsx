import React from "react";

import { TeamItem } from "./TeamItem";

// one round
export const RoundStats = ({ teams, event }) => {
  return (
    <div className="flex flex-col justify-center gap-10 -mt-14">
      <TeamItem players={teams[0].players} type={teams[0].type} />
      <div className="flex flex-col justify-center items-center gap-2 drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
        <div className="bg-zinc-950 w-36 text-center p-2 rounded-t-sm">
          <div className="text-slate-100 text-2xl">{event}</div>
        </div>
        <div className="bg-zinc-950	w-36 text-center p-2 rounded-b-md	">
          <div className="text-slate-400 text-2xl">K/D</div>
          <div className="text-slate-400 text-2xl">DPS</div>
        </div>
      </div>
      <TeamItem players={teams[1].players} type={teams[1].type} />
    </div>
  );
};
