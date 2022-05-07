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
      <section>
        {gamesListPage.map((game) => (
          <SingleGame key={game.id} name={game.title} />
        ))}
        <div id="pagination" className="text-gray-50">
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
