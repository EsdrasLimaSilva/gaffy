import React, { useEffect, useState } from "react";
import SingleGame from "../singleGame/SingleGame";
import { useSelector } from "react-redux";
import { selectGames, selectCurrentOption } from "../../redux/gamesSlice";

function GamesList() {
  const games = useSelector(selectGames);
  const currentOption = useSelector(selectCurrentOption);

  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(games.length / 10);
  const gamesListPage = games.slice(currentPage * 12 - 12, currentPage * 12);

  if (games.length !== 0) {
    return (
      <section className="mx-auto max-w-5xl flex flex-col items-center justify-center py-10 mt-16">
        <h2 className="text-gray-50 border-b-2 border-l-2 pr-5 border-purple-800 mb-16 p-2 rounded-md mr-auto ml-5">
          {currentOption}
        </h2>
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
              onClick={() => {
                setCurrentPage((prevState) => prevState - 1);
                window.scrollTo(0, 0);
              }}
            >
              Back
            </button>
          ) : (
            ""
          )}
          {currentPage < maxPage ? (
            <button
              className="bg-blue-700 px-2 rounded-r-lg font-mono font-bold hover:bg-gray-50 hover:text-blue-700 hover:cursor-pointer mx-1 transition-all text-sm"
              onClick={() => {
                setCurrentPage((prevState) => prevState + 1);
                window.scrollTo(0, 0);
              }}
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
