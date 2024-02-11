import React from "react";
import logo from "../assets/logo-gpl.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="w-screen h-14 bg-neutral-900 flex fixed left-0 right-0 z-20 top-0">
      <Link
        to="/"
        className="flex flex-row justify-start gap-4 items-center ml-7"
      >
        <img src={logo} className="h-10 w-10" />
        <p className="text-xl text-white font-extra">GPL SEASON 7</p>
      </Link>
    </div>
  );
};
