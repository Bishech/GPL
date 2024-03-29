import React, { useState } from "react";

import { ChoiceItem } from "./ChoiceItem";

// здесь получаю это (массив команд для одного вопроса и айди вопроса)
// {
//   "id": 1,
//   "teams": [
//     {
//       "id": 1,
//       "name": "…",
//       "logo": "…"
//     }
//   ]
// }

export const VoteItem = ({
  teams,
  id,
  onSelectTeam,
  selectedTeamId,
  isReadonly,
}) => {
  const [activeIndex, setActiveIndex] = useState(selectedTeamId);

  return (
    <div className="flex flex-row items-center justify-center">
      {teams.map((team, i) => (
        <ChoiceItem
          key={team.id}
          id={team.id}
          name={team.name}
          logo={team.logo}
          side={i == 0 ? "red" : "blue"}
          isActive={activeIndex != null ? activeIndex == team.id : false}
          handleClick={() => {
            if (!isReadonly) {
              setActiveIndex(team.id);
              onSelectTeam(team.id);
            }
          }}
        />
      ))}
    </div>
  );
};
