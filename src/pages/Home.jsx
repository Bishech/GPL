import React from "react";

import logo from "../assets/team-logo.png";
import listGroupA from "../assets/leader-board-group-A.png";
import listGroupB from "../assets/leader-board-group-B.png";
import listGroupC from "../assets/leader-board-group-C.png";
import listGroupD from "../assets/leader-board-group-D.png";

import { Team } from "../components/Team";

const groupA = [
  { id: 1, name: "firstTeam", group: "a", points: 0, logo: logo },
  { id: 2, name: "secondTeam", group: "a", points: 0, logo: logo },
  { id: 3, name: "thirdTeam", group: "a", points: 0, logo: logo },
  { id: 4, name: "fourthTeam", group: "a", points: 0, logo: logo },
  { id: 5, name: "fifthTeam", group: "a", points: 0, logo: logo },
];

const groupB = [
  { id: 1, name: "firstTeam", group: "b", points: 0, logo: logo },
  { id: 2, name: "secondTeam", group: "b", points: 0, logo: logo },
  { id: 3, name: "thirdTeam", group: "b", points: 0, logo: logo },
  { id: 4, name: "fourthTeam", group: "b", points: 0, logo: logo },
  { id: 5, name: "fifthTeam", group: "b", points: 0, logo: logo },
];

const groupC = [
  { id: 1, name: "firstTeam", group: "c", points: 0, logo: logo },
  { id: 2, name: "secondTeam", group: "c", points: 0, logo: logo },
  { id: 3, name: "thirdTeam", group: "c", points: 0, logo: logo },
  { id: 4, name: "fourthTeam", group: "c", points: 0, logo: logo },
  { id: 5, name: "fifthTeam", group: "c", points: 0, logo: logo },
];

const groupD = [
  { id: 1, name: "firstTeam", group: "d", points: 0, logo: logo },
  { id: 2, name: "secondTeam", group: "d", points: 0, logo: logo },
  { id: 3, name: "thirdTeam", group: "d", points: 0, logo: logo },
  { id: 4, name: "fourthTeam", group: "d", points: 0, logo: logo },
  { id: 5, name: "fifthTeam", group: "d", points: 0, logo: logo },
];

export const Home = () => {
  return (
    <div className="flex flex-col gap-20 mb-20">
      <div className="flex flex-col lg:flex-row gap-2 w-full lg:px-10 justify-center items-center">
        <div className="lg:w-1/2 w-full grid">
          <img src={listGroupA} className="m-auto w-full h-auto items-center" />
        </div>
        <div className="flex flex-col gap-4 lg:w-1/2 w-full">
          {groupA.map((team) => (
            <Team
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
          <img src={listGroupB} className="m-auto w-full h-auto items-center" />
        </div>
        <div className="flex flex-col gap-4 lg:w-1/2 w-full">
          {groupB.map((team) => (
            <Team
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
          <img src={listGroupC} className="m-auto w-full h-auto items-center" />
        </div>
        <div className="flex flex-col gap-4 lg:w-1/2 w-full">
          {groupC.map((team) => (
            <Team
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
          <img src={listGroupD} className="m-auto w-full h-auto items-center" />
        </div>
        <div className="flex flex-col gap-4 lg:w-1/2 w-full">
          {groupD.map((team) => (
            <Team
              key={team.id}
              group={team.group}
              name={team.name}
              logo={team.logo}
              points={team.points}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
