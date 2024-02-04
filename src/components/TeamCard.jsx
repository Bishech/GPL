import React from "react";

const TeamCard = ({
  logo,
  firstPlayer,
  secondPlayer,
  thirdPlayer,
  firstPlayerImg,
  secondPlayerImg,
  thirdPlayerImg,
}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5 -mt-10">
      <div className="flex flex-row items-center gap-20">
        <img src={logo} className="w-72 h-72" />
      </div>
      <div className="flex flex-row gap-20">
        <div className="flex flex-col items-center">
          <img src={firstPlayerImg} className="w-72 h-72 " />
          <p className="bg-white text-blue-800 text-center text-2xl w-40 h-8 skew-x-[-5deg] shadow-lg shadow-black -mt-3">
            {firstPlayer}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={secondPlayerImg} className="w-72 h-72" />
          <p className="bg-white text-blue-800 text-center text-2xl w-40 h-8 skew-x-[-5deg] shadow-lg shadow-black -mt-3">
            {secondPlayer}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={thirdPlayerImg} className="w-72 h-72" />
          <p className="bg-white text-blue-800 text-center text-2xl w-40 h-8 skew-x-[-5deg] shadow-lg shadow-black -mt-3">
            {thirdPlayer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
