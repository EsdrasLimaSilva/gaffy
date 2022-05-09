import React from "react";
import menuButton from "../../assets/menu-button.svg";
import freeToGame from "../../assets/freetogame-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGratipay } from "@fortawesome/free-brands-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function HeaderHome({ showMenu }) {
  return (
    <header
      id="header-home"
      className="bg-slate-900 text-gray-50 w-full h-32 shadow-md relative"
    >
      <button onClick={showMenu}>
        <svg className="absolute top-2 left-2 hover:cursor-pointer w-6 h-6">
          <use href={`${menuButton}#menu-btn`} />
        </svg>
      </button>
      <button
        id="games-fvs-section-button"
        className="text-gray-200 text-2xl absolute top-1 left-10"
        onClick={() =>
          document
            .querySelector("#favorites-section")
            .classList.remove("hidden")
        }
      >
        <FontAwesomeIcon icon={faGratipay} />
      </button>
      <a href="https://www.freetogame.com/" target="_blank" rel="noreferrer">
        <img
          src={freeToGame}
          alt="freeToGame logo"
          className="absolute left-0 bottom-0 h-8"
        />
      </a>
      <a
        href="https://github.com/EsdrasLimaSilva"
        target="_blank"
        rel="noreferrer"
        className="absolute bottom-0 right-2 text-2xl hover:opacity-90"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/esdras-silva-66b31520b"
        target="_blank"
        rel="noreferrer"
        className="absolute bottom-0 right-10 text-2xl hover:opacity-90"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <h1 className="text-gray-50 border-b-2 absolute  top-16 left-1/2 -translate-x-1/2 text-3xl uppercase md:text-5xl">
        Gaffy
      </h1>
    </header>
  );
}

export default HeaderHome;
