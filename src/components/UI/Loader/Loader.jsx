import React from "react";

export const Loader = () => {
  return (
    <div className="grid min-h-full place-items-center bg-transparent px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <h1 className="mt-4 md:text-9xl text-5xl tracking-tight text-yellow-400 drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
          Идет загрузка контента
        </h1>
        <p className="drop-shadow-[0_2px_2px_rgba(0,0,0,1)] mt-6 text-xl leading-7 text-white font-extra">
          Пожалуйста, подождите :)
        </p>
      </div>
    </div>
  );
};
