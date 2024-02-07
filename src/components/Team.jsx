import React from "react";
import logo_gpl from "../assets/logo-gpl.svg";

const groupColor = {
  a: "before:border-t-blue-500 before:bg-blue-600",
  b: "before:border-t-red-500 before:bg-red-600",
  c: "before:border-t-green-500 before:bg-green-600",
  d: "before:border-t-purple-500 before:bg-purple-600",
};

export const Team = ({ logo, name, points, group }) => {
  return (
    <div className=" text-center">
      <button
        disabled
        className="shadow-lg shadow-slate-900 skew-x-[-5deg]  cursor-default bg-gray-700 border-2 rounded-lg w-2/3 h-44 border-black text-white"
      >
        <div
          className={`before:w-6 before:rounded before:content-[''] before:h-40 before:-top-3  before:absolute before:left-0 before:border-t-[12px]  ${groupColor[group]} w-full h-full border-2  border-black rounded-lg border-b-[12px] border-b-slate-800 border-t-[12px] border-t-slate-600 relative border-x-transparent`}
        >
          <div className="w-full h-full flex flex-row gap-4 px-6 justify-center items-center text-white">
            <div>
              <img src={logo} className="w-40 h-40 object-cover" />
            </div>
            <div className="text-8xl">{name}</div>
            <div className="flex flex-grow"></div>
            <div>
              <img src={logo_gpl} className="w-40 h-40 object-cover" />
            </div>
            <div className="text-8xl">{points}</div>
          </div>
        </div>
      </button>
    </div>
  );
};
