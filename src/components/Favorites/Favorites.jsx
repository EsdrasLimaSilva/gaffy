import React from "react";
import { useNavigate } from "react-router";
import { selectGamesFav, gameRemovedFav } from "../../redux/favsSlice";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faHeartCrack } from "@fortawesome/free-solid-svg-icons";
import { setItemLocalStorage } from "../../helpers/localStorage";

const FavGame = function ({ title, id, img }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div
      id={id}
      className="flex flex-row items-center justify-between bg-gray-900 hover:bg-gray-50 hover:text-gray-900 transition-all rounded-md hover:cursor-pointer my-1 shadow-lg relative"
    >
      <div
        className="flex flex-row items-center"
        onClick={() => navigate(`/${id}`)}
      >
        <img
          src={img}
          alt={`${title} thumbnail`}
          className="h-12 rounded-l-md"
        />
        <h2 className="ml-2 text-sm text-left">{title}</h2>
      </div>
      <button
        onClick={() => {
          dispatch(gameRemovedFav(id));
          setItemLocalStorage(useSelector(selectGamesFav));
        }}
      >
        <FontAwesomeIcon icon={faTrash} className="mx-2" />
      </button>
    </div>
  );
};

function Favorites() {
  const favoritesGames = useSelector(selectGamesFav);

  return (
    <section
      role="favorites-section"
      id="favorites-section"
      className="hidden bg-gray-700 text-gray-50 fixed top-0 left-10 w-80 h-80 rounded-lg px-5 py-2 overflow-y-auto z-40 shadow-2xl"
    >
      <h2 className="mb-5 border-b-2 pb-1">Favorites</h2>
      <button
        className="absolute top-1 right-2 font-bold text-xl"
        onClick={() =>
          document.querySelector("#favorites-section").classList.add("hidden")
        }
      >
        X
      </button>
      {favoritesGames.length > 0 ? (
        favoritesGames.map((game) => (
          <FavGame
            key={game.id}
            title={game.title}
            id={game.id}
            img={game.img}
          />
        ))
      ) : (
        <h2>
          empty <FontAwesomeIcon icon={faHeartCrack} />
        </h2>
      )}
    </section>
  );
}

export default Favorites;
