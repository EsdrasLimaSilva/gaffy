import React from "react";
import { useSelector } from "react-redux";
import { selectGames } from "../../redux/gamesSlice";
function SingleGame() {
  const games = useSelector(selectGames);
  console.log(games);

  if (games) {
    return <h2 className="bg-slate-100">Empty</h2>;
  }
  return <div className="bg-slate-100">fullField</div>;
}

export default SingleGame;
