import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faHeart } from "@fortawesome/free-solid-svg-icons";
import setGameTitle from "../../helpers/setGameTitle";

function SingleGame({ name, src, genre, gameUrl, gameId }) {
  return (
    <div
      id={gameId}
      className="text-gray-50 m-2 bg-gray-900 pb-4 shadow-lg relative hover:cursor-pointer hover:opacity-70"
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
          <button>
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleGame;
