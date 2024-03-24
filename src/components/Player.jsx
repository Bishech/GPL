import React from "react";
import { Link } from "react-router-dom";

export const Player = ({ avatar, name, teamId, id }) => {
  return (
    <Link to={`/teams/${teamId}/players/${id}`}>
      <div className="flex flex-col items-center">
        <img src={avatar} className="w-72 h-72 object-contain" />
        <p className="bg-white text-blue-800 text-center text-2xl w-40 skew-x-[-5deg] shadow-lg shadow-black -mt-20 md:-mt-16 text-wrap">
          {name}
        </p>
      </div>
    </Link>
  );
};
