import React from "react";
import logo from "../assets/logo-gpl.svg";
import { Link } from "react-router-dom";
import { $userToken, setUserToken } from "../stores/user";
import { useUnit } from "effector-react";

export const Header = () => {
  const redirect = () => {
    window.location.replace("https://api.gpltournaments.xyz/auth/google");
  };

  const token = useUnit($userToken);

  const logOut = () => {
    setUserToken(null);
  };

  return (
    <div className="w-screen h-14 bg-neutral-900 fixed left-0 right-0 z-20 top-0">
      <div className="w-full h-full flex items-center justify-between">
        <div>
          <Link
            to="/"
            className="flex flex-row justify-start gap-4 items-center ml-7"
          >
            <img src={logo} className="h-10 w-10" />
            <p className="sm:block hidden text-xl text-white font-extra">
              GPL SEASON 8
            </p>
          </Link>
        </div>
        <nav className="flex items-center md:mr-10 mr-4">
          <ul className="inline-flex items-center">
            <li className="cursor-pointer transition-all duration-300 text-slate-100 md:text-xl text-md font-extra inline-block py-3 px-2 border-b-2 border-transparent hover:border-yellow-400 hover:text-yellow-400">
              <Link to={`/grid`}>Сетка</Link>
            </li>
            {!token ? (
              <></>
            ) : (
              <li className="cursor-pointer transition-all duration-300 text-slate-100 md:text-xl text-md font-extra inline-block py-3 px-2 border-b-2 border-transparent hover:border-yellow-400 hover:text-yellow-400">
                <Link to={`/votes`}>Прогнозы</Link>
              </li>
            )}
            <li
              onClick={!token ? redirect : logOut}
              className="cursor-pointer transition-all duration-300 text-slate-100 md:text-xl text-md font-extra inline-block py-3 px-1 border-b-2 border-transparent hover:border-yellow-400 hover:text-yellow-400"
            >
              {!token ? "Войти" : "Выйти"}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
