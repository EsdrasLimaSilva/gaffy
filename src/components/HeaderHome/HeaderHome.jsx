import React from "react";
import menuButton from "../../assets/menu-button.svg";
import characterImgI from "../../assets/character.png";
import freeToGame from "../../assets/freetogame-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGratipay } from "@fortawesome/free-brands-svg-icons";

function HeaderHome({ showMenu }) {
  return (
    <header
      id="header-home"
      className="bg-slate-900 w-full h-32 shadow-md relative"
    >
      <button onClick={showMenu}>
        <svg className="absolute top-2 left-2 hover:cursor-pointer w-6 h-6">
          <use href={`${menuButton}#menu-btn`} />
        </svg>
      </button>
      <button
        id="games-fvs-section-button"
        className="text-gray-200 text-2xl absolute top-1 left-10"
      >
        <FontAwesomeIcon icon={faGratipay} />
      </button>
      <img
        src={characterImgI}
        alt="character"
        className="absolute bottom-0 right-10 h-40 z-0"
      />
      <a href="https://www.freetogame.com/" target="_blank" rel="noreferrer">
        <img
          src={freeToGame}
          alt="freeToGame logo"
          className="absolute left-0 bottom-0 h-8"
        />
      </a>
      <h1 className="text-gray-50 border-b-2 absolute  top-16 left-1/2 -translate-x-1/2 text-3xl uppercase md:text-5xl">
        Gaffy
      </h1>
    </header>
  );
}

export default HeaderHome;
