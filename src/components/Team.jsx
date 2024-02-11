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
    <div className=" text-center">
      <button className="skew-x-[-5deg]  cursor-default bg-gray-700 border-2 rounded-lg w-2/3 h-44 border-black text-white">
        <Link to={`/team/${group}/${name}`}>
          <div
            className={`before:w-6 before:rounded before:content-[''] before:h-[174px] before:-top-[18px]  before:absolute before:left-0 before:border-t-[18px] before:border-b-[18px] ${groupColor[group]} w-full h-full border-2  border-black rounded-lg border-b-[18px] border-b-slate-800 border-t-[18px] border-t-slate-600 relative border-x-transparent`}
          >
            <div className="w-full h-full flex flex-row gap-6 px-6 justify-center items-center text-white">
              <div>
                <img src={logo} className="pl-2 w-36 h-36 object-cover" />
              </div>
              <div className="text-7xl">{name}</div>
              <div className="flex flex-grow"></div>
              <div>
                <img src={logo_gpl} className="w-40 h-40 object-cover" />
              </div>
              <div className="text-8xl">{points}</div>
            </div>
          </div>
        </Link>
      </button>
    </div>
  );
};
