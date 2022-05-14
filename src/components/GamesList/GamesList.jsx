import React, { useEffect, useState } from "react";
import SingleGame from "../singleGame/SingleGame";
import { useSelector, useDispatch } from "react-redux";
import {
  selectGames,
  selectLastTag,
  gamesAdded,
  loadingGames,
} from "../../redux/gamesSlice";
import { fetchGames } from "../../api/fetchGames";
import { formatQuery } from "../../helpers/formatQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceD20 } from "@fortawesome/free-solid-svg-icons";
import { setItemLocalStorage } from "../../helpers/localStorage";

function GamesList() {
  const dispatch = useDispatch();
  const games = useSelector(selectGames);
  const lastTag = useSelector(selectLastTag);
  useSelector(selectLastTag);
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(games.length / 10);
  const gamesListPage = games.slice(currentPage * 12 - 12, currentPage * 12);

  useEffect(() => {
    async function getGamesData() {
      if (lastTag && games.length === 0) {
        dispatch(loadingGames());
        const games = await fetchGames(formatQuery(lastTag));
        dispatch(gamesAdded(games));
      }
    }

    getGamesData();
  }, []);

  if (games.length !== 0) {
    return (
      <section
        role="games-list-section-fullfield"
        className="mx-auto max-w-5xl flex flex-col items-center justify-center py-10 mt-16"
      >
        <h2 className="text-gray-50 border-b-2 border-l-2 pr-5 border-purple-800 mb-16 p-2 rounded-md mr-auto ml-5">
          {lastTag}
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
    <h2
      className="text-gray-50 text-center mt-48"
      data-testid="initial-message"
    >
      Try choosing a category from the menu <FontAwesomeIcon icon={faDiceD20} />
    </h2>
  );
}

export default GamesList;
