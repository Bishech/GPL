import React from "react";

export const DefaultPlayer = ({ id, avatar, name, teamName, type }) => {
  return (
    <div className="flex md:flex-row md:items-start flex-col-reverse gap-10 items-center">
      <div className="lg:w-1/2 w-full flex flex-col justify-center items-center">
        <img src={avatar} className="lg:w-2/3 w-full object-contain" />
        <p className="bg-white text-blue-800 text-center text-2xl min-[350px]:text-4xl p-2 max-w-44 skew-x-[-5deg] shadow-lg shadow-black -mt-10 md:-mt-16 text-wrap">
          {name}
        </p>
      </div>
      <div className="flex flex-col justify-start lg:w-1/2 w-full content-center gap-2">
        <div className="md:block hidden text-7xl text-center text-white rotate-[-3deg] pb-3">
          Об участнике
        </div>
        <div className="bg-blue-600 text-3xl text-center px-2 skew-x-[-5deg] border-t-4 border-r-4 border-r-blue-500">
          Команда: {teamName}
        </div>
      </div>
    </div>
  );
};
