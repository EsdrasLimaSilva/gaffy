import React, { createRef, useState } from "react";
import SingleGame from "../singleGame/SingleGame";
import { useSelector } from "react-redux";
import { selectGames } from "../../redux/gamesSlice";

function GamesList() {
  const games = useSelector(selectGames);
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(games.length / 10);
  const gamesListPage = games.slice(currentPage * 10 - 10, currentPage * 10);
  console.log(games, currentPage, maxPage);

  if (games.length !== 0) {
    return (
      <section className="mx-auto max-w-5xl flex flex-col items-center justify-center py-10 mt-16">
        <div className="w-full flex flex-row flex-wrap justify-center items-center">
          {gamesListPage.map((game) => (
            <SingleGame
              key={game.id}
              gameId={game.id}
              name={game.title}
              src={game.thumbnail}
              genre={game.genre}
              gameUrl={game.game_url}
            />
          ))}
        </div>
        <div id="pagination" className="text-gray-50 mt-10">
          {currentPage > 1 ? (
            <button
              className="bg-blue-700 px-2 rounded-l-lg font-mono font-bold hover:bg-gray-50 hover:text-blue-700 hover:cursor-pointer mx-1 transition-all text-sm"
              onClick={() => setCurrentPage((prevState) => prevState - 1)}
            >
              Back
            </button>
          ) : (
            ""
          )}
          {currentPage < maxPage ? (
            <button
              className="bg-blue-700 px-2 rounded-r-lg font-mono font-bold hover:bg-gray-50 hover:text-blue-700 hover:cursor-pointer mx-1 transition-all text-sm"
              onClick={() => setCurrentPage((prevState) => prevState + 1)}
            >
              Next
            </button>
          ) : (
            ""
          )}
        </div>
      </section>
    );
  }

  return (
    <h2 className="text-gray-50">Try to choose one category on the menu</h2>
  );
}

export default GamesList;
