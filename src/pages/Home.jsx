import React, { useEffect } from "react";

import logo from "../assets/team-logo.png";
import gplLogo from "../assets/logo-gpl.svg";
import listGroupA from "../assets/leader-board-group-A.png";
import listGroupB from "../assets/leader-board-group-B.png";
import listGroupC from "../assets/leader-board-group-C.png";
import listGroupD from "../assets/leader-board-group-D.png";

import { Team } from "../components/Team";
import { Footer } from "../components/Footer";
import { Loader } from "../components/UI/Loader/Loader";
import { useUnit } from "effector-react";
import { $teams, fetchTeamsFx } from "../stores/teams";

export const Home = () => {
  const teams = useUnit($teams);

  const groupA = teams.filter((item) => item.group === "A");
  const groupB = teams.filter((item) => item.group === "B");
  const groupC = teams.filter((item) => item.group === "C");
  const groupD = teams.filter((item) => item.group === "D");

  useEffect(() => {
    fetchTeamsFx();
  }, []);

  return (
    <div className="flex flex-col gap-20 mb-20">
      {/* <div className="flex items-center justify-center object-contain">
        <Stream />
      </div> */}
      {teams.length === 0 ? (
        <Loader />
      ) : (
        <>
          <div className="flex flex-col lg:flex-row gap-2 w-full lg:px-10 justify-center items-center">
            <div className="lg:w-1/2 w-full grid">
              <img
                src={listGroupA}
                className="m-auto w-full h-auto items-center"
              />
            </div>
            <div className="flex flex-col gap-4 lg:w-1/2 w-full">
              {groupA.map((team) => (
                <Team
                  id={team.id}
                  key={team.id}
                  group={team.group}
                  name={team.name}
                  logo={team.logo}
                  points={team.points}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-2 w-full lg:px-10 justify-center items-center">
            <div className="lg:w-1/2 w-full grid">
              <img
                src={listGroupB}
                className="m-auto w-full h-auto items-center"
              />
            </div>
            <div className="flex flex-col gap-4 lg:w-1/2 w-full">
              {groupB.map((team) => (
                <Team
                  id={team.id}
                  key={team.id}
                  group={team.group}
                  name={team.name}
                  logo={team.logo}
                  points={team.points}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-2 w-full lg:px-10 justify-center items-center">
            <div className="lg:w-1/2 w-full grid">
              <img
                src={listGroupC}
                className="m-auto w-full h-auto items-center"
              />
            </div>
            <div className="flex flex-col gap-4 lg:w-1/2 w-full">
              {groupC.map((team) => (
                <Team
                  id={team.id}
                  key={team.id}
                  group={team.group}
                  name={team.name}
                  logo={team.logo}
                  points={team.points}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-2 w-full lg:px-10 justify-center items-center">
            <div className="lg:w-1/2 w-full grid">
              <img
                src={listGroupD}
                className="m-auto w-full h-auto items-center"
              />
            </div>
            <div className="flex flex-col gap-4 lg:w-1/2 w-full">
              {groupD.map((team) => (
                <Team
                  id={team.id}
                  key={team.id}
                  group={team.group}
                  name={team.name}
                  logo={team.logo}
                  points={team.points}
                />
              ))}
            </div>
          </div>
        </>
      )}
      {teams.length === 0 ? <div></div> : <Footer />}
    </div>
  );
};
