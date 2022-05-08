import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { fetchGames } from "../../api/fetchGames";
import { formatQuery } from "../../helpers/formatQuery";
import {
  gamesAdded,
  loadingGames,
  setCurrentOption,
  setCurrentTag,
  setLastTag,
} from "../../redux/gamesSlice";
import { useDispatch } from "react-redux";

function ItemTag({ tagArr, color, closeMenu, showMenu }) {
  const dispatch = useDispatch();

  return (
    <>
      <div
        id="cover-close-menu"
        className="w-screen h-screen absolute top-0 left-0 z-10"
        onClick={() => {
          closeMenu();
          dispatch(setCurrentTag(null));
        }}
      />
      <div
        id="menu"
        className="option-tag fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-20 max-w-2xl w-full max-h-96  overflow-y-auto px-5"
      >
        <ul className=" flex flex-row flex-wrap justify-center items-center">
          {tagArr.map((tag) => (
            <li
              key={tag.id}
              className={`option-tag-type w-24 h-24 m-2 flex flex-col justify-center items-center rounded-lg hover:cursor-pointer bg-${color}-700 hover:bg-gray-50 hover:text-${color}-700`}
              onClick={async (e) => {
                const query =
                  e.target.closest("li").firstElementChild.textContent;
                closeMenu();
                dispatch(setCurrentTag(null));
                dispatch(setCurrentOption(String(query)));
                dispatch(loadingGames());
                const games = await fetchGames(formatQuery(query));
                dispatch(gamesAdded(games));
                dispatch(setLastTag(query));
                localStorage.setItem("ltTag", String(query));
              }}
            >
              <h2 className="text-center text-sm uppercase font-sans font-bold">
                {tag.title}
              </h2>
              <FontAwesomeIcon icon={tag.icon} className="text-3xl mt-2" />
            </li>
          ))}
        </ul>
        <button
          className="text-gray-50 absolute top-0 right-5 text-3xl font-bold"
          onClick={() => {
            closeMenu();
            setCurrentTag(null);
          }}
        >
          x
        </button>
        <button
          className="text-gray-50 absolute top-0 left-5 text-2xl font-bold"
          onClick={() => {
            closeMenu();
            dispatch(setCurrentTag(null));
            setTimeout(() => {
              showMenu();
            }, 90);
          }}
        >
          <FontAwesomeIcon icon={faAnglesLeft} />
        </button>
      </div>
    </>
  );
}

export default ItemTag;
