import React from "react";
import tournamentGrid from "../assets/tournament-grid.png";

export const TournamentGrid = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-center md:w-2/3 w-full h-full">
        <img src={tournamentGrid} className="block m-auto" />
      </div>
    </div>
  );
};
