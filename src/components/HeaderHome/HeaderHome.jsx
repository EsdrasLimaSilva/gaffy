import React from "react";
import menuButton from "../../assets/menu-button.svg";
import characterImg from "../../assets/character.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function HeaderHome() {
  return (
    <header
      id="header-home"
      className="bg-slate-900 w-full h-32 shadow-md relative"
    >
      <svg className="absolute top-2 left-2 hover:cursor-pointer w-6 h-6">
        <use href={`${menuButton}#menu-btn`} />
      </svg>
      <img
        src={characterImg}
        alt="character"
        className="absolute bottom-0 right-0 h-40 z-0"
      />
      <h1 className="text-gray-50 absolute  top-10 left-5 text-3xl uppercase">
        Gaffy
      </h1>
      <form action="#" className="absolute z-10 bottom-2 left-10 flex flex-row">
        <input
          type="search"
          name="game-search-input"
          id="game-search-input"
          required
          placeholder="search for a game"
          className="py-1 px-2 text-xs rounded-l-md outline-none border-none"
        />
        <button
          type="submit"
          className="bg-white p-1 text-slate-900 rounded-r-md"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </header>
  );
}

export default HeaderHome;
