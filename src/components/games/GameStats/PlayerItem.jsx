import React from "react";
import { Link, useParams } from "react-router-dom";

const styles = {
  Partners: "mt-4",
  PartnersPro: "max-[430px]:-mt-3 max-[370px]:-mt-3",
};

// One player
export const PlayerItem = ({ avatar, name, kd, dps, id, isMvp, type }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Link to={`/players/${id}`}>
        <div className="flex flex-col items-center">
          <img src={avatar} className="w-40 h-40 object-contain" />
          {avatar.includes("none") && (
            <p className="bg-white text-blue-800 text-center text-2xl w-28 skew-x-[-5deg] shadow-lg shadow-black -mt-16 md:-mt-12 text-wrap">
              {name}
            </p>
          )}
        </div>
      </Link>
      {type === "None" ? (
        <></>
      ) : (
        <div
          className={`${styles[type]} w-40 flex flex-col justify-center items-center bg-black rounded-sm drop-shadow-[0_2px_2px_rgba(0,0,0,1)] text-slate-400 text-center mt-8 text-4xl p-2`}
        >
          {isMvp == false ? (
            <></>
          ) : (
            <div className="w-full text-white bg-blue-600">MVP</div>
          )}
          <div>{kd}</div>
          <div>{dps}</div>
        </div>
      )}
    </div>
  );
};
