import React from "react";
import logo from "../assets/logo-gpl.svg";
import { Link } from "react-router-dom";

export const Header = () => {
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
        <button className="px-4 text-lg sm:px-8 sm:text-xl skew-x-[-5deg] font-extra relative top-4 h-12 bg-neutral-900 hover:bg-neutral-800 border-2 rounded-lg shadow-md shadow-black border-yellow-400 text-white flex justify-end items-center mr-10 sm:mr-14">
          <div>
            <div>Войти</div>
          </div>
        </button>
      </div>
    </div>
  );
};
