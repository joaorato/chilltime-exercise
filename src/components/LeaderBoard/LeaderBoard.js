import React from "react";
import "./LeaderBoard.css";

const LeaderBoard = ({ playerName, tries, timeElapsed, finalScore }) => {
  return (
    <>
    <div className="Leaderboard-wrapper">LEADERBOARD</div>
    <div className="Leaderboard-wrapper">
      <div>{playerName}{tries}{timeElapsed}{finalScore}</div>
    </div>
    </>
  );
};

export default LeaderBoard;
