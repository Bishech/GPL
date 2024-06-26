import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="grid min-h-full place-items-center bg-transparent px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <h1 className="mt-4 md:text-9xl text-5xl tracking-tight text-yellow-400">
          Страница не найдена
        </h1>
        <p className="mt-6 text-xl leading-7 text-white font-extra">
          Извините, мы не смогли найти страницу, которая вам нужна
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to=""
            className="skew-x-[-5deg] font-extra bg-indigo-950 shadow-lg shadow-violet-950 px-3.5 py-2.5 text-xl font-semibold text-gray-300 hover:bg-violet-700"
          >
            Вернуться назад
          </Link>
        </div>
      </div>
    </div>
  );
};
