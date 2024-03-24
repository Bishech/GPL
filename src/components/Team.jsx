import React from "react";
import logo_gpl from "../assets/logo-gpl.svg";
import { Link } from "react-router-dom";

const groupColor = {
  A: "before:border-t-blue-500 before:border-b-blue-700 before:bg-blue-600",
  B: "before:border-t-red-500 before:border-b-red-700 before:bg-red-600",
  C: "before:border-t-green-500 before:border-b-green-700 before:bg-green-600",
  D: "before:border-t-purple-500 before:border-b-purple-700 before:bg-purple-600",
};

export const Team = ({ logo, name, points, group, id }) => {
  return (
    <button className="skew-x-[-5deg] cursor-default bg-gray-700 rounded-lg h-16 border-2 border-black relative text-white">
      <Link to={`/teams/${id}`}>
        <div
          className={`before:w-4 before:rounded before:h-full before:-top-[1px] after:border-y-4 after:border-black before:absolute before:left-0 before:border-t-[8px] before:border-b-[8px] ${groupColor[group]} w-full h-full  rounded-lg border-b-[8px] border-b-slate-800 border-t-[8px] border-t-slate-600 border-x-transparent`}
        >
          <div className="w-full h-full flex flex-row gap-2 lg:px-6 px-4 justify-center items-center text-white">
            <div>
              <picture className="h-full w-full">
                <img src={logo} className="pl-2 w-14 h-14 object-contain" />
              </picture>
            </div>
            <div className="lg:text-4xl md:text-3xl sm:text-xl text-lg uppercase text-wrap">
              {name}
            </div>
            <div className="flex flex-grow"></div>
            <div>
              <img src={logo_gpl} className="w-12 h-12 object-contain" />
            </div>
            <div className="lg:text-4xl md:text-3xl text-xl">{points}</div>
          </div>
        </div>
      </Link>
    </button>
  );
};
