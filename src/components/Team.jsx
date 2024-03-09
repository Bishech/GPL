import React from "react";
import logo_gpl from "../assets/logo-gpl.svg";
import { Link } from "react-router-dom";

const groupColor = {
  a: "before:border-t-blue-500 before:border-b-blue-700 before:bg-blue-600",
  b: "before:border-t-red-500 before:border-b-red-700 before:bg-red-600",
  c: "before:border-t-green-500 before:border-b-green-700 before:bg-green-600",
  d: "before:border-t-purple-500 before:border-b-purple-700 before:bg-purple-600",
};

export const Team = ({ logo, name, points, group }) => {
  return (
    <button className="skew-x-[-5deg] cursor-default bg-gray-700 rounded-lg h-16 border-2 border-black relative text-white">
      <Link to={`/team/${group}/${name}`}>
        <div
          className={`before:w-4 before:rounded before:h-full before:-top-[1px] after:border-y-4 after:border-black before:absolute before:left-0 before:border-t-[12px] before:border-b-[12px] ${groupColor[group]} w-full h-full  rounded-lg border-b-[12px] border-b-slate-800 border-t-[12px] border-t-slate-600 border-x-transparent`}
        >
          <div className="w-full h-full flex flex-row gap-6 px-6 justify-center items-center text-white">
            <div>
              <img src={logo} className="pl-2 w-16 h-16" />
            </div>
            <div className="text-5xl">{name}</div>
            <div className="flex flex-grow"></div>
            <div>
              <img src={logo_gpl} className="w-16 h-16" />
            </div>
            <div className="text-5xl">{points}</div>
          </div>
        </div>
      </Link>
    </button>
  );
};
