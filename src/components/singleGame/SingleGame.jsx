import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faHeart } from "@fortawesome/free-solid-svg-icons";
import setGameTitle from "../../helpers/setGameTitle";
import { useSelector, useDispatch } from "react-redux";
import {
  selectGamesFav,
  gameAddedFav,
  gameRemovedFav,
} from "../../redux/favsSlice";

function SingleGame({ name, src, genre, gameUrl, gameId }) {
  const dispatch = useDispatch();
  const gamesFav = useSelector(selectGamesFav);
  console.log(gamesFav);

  function handleClick(gameIdFavs, gameTitleFavs, gameImgFavs) {
    const gameIsOnFavs = gamesFav.find((game) => game.id === gameIdFavs);

    if (gameIsOnFavs) {
      dispatch(gameRemovedFav(Number(gameIdFavs)));
    }

    if (!gameIsOnFavs) {
      dispatch(
        gameAddedFav({ title: gameTitleFavs, img: gameImgFavs, id: gameIdFavs })
      );
    }
  }

  return (
    <div
      id={gameId}
      className="single-game transition-all text-gray-50 m-2 bg-gray-900 pb-4 shadow-lg relative hover:cursor-pointer hover:bg-gray-100 hover:text-gray-900"
    >
      <img
        src={src}
        alt={`${name} image`}
        className="w-full"
        style={{ width: "276.41px", height: "156px" }}
      />
      <div className="flex flex-row p-2 justify-between items-center">
        <h2 className="text-sm uppercase">{setGameTitle(name)}</h2>
        <span className="absolute top-0 right-0 bg-gray-50 text-gray-900 px-2 text-xs font-bold rounded-l-md">
          {genre}
        </span>
        <div>
          <a href={gameUrl} target="_blank" rel="noreferrer" className="mr-2">
            <FontAwesomeIcon icon={faBullseye} />
          </a>
          {gamesFav.find((game) => game.id === Number(gameId)) ? (
            <button id="button-add-fav" className="text-red-600">
              <FontAwesomeIcon
                icon={faHeart}
                onClick={() => handleClick(gameId, name, src)}
              />
            </button>
          ) : (
            <button id="button-add-fav">
              <FontAwesomeIcon
                icon={faHeart}
                onClick={() => handleClick(gameId, name, src)}
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleGame;
