import { createEffect, createStore } from "effector";

export const fetchTeamsFx = createEffect(async () => {
  const req = await fetch(`https://gpl.animaru.app/teams/`);
  return req.json();
});

export const $teams = createStore([]).on(fetchTeamsFx.doneData, (_, teams) => {
  return teams;
});
