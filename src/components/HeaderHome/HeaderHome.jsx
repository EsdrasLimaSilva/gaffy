import React from "react";
import menuButton from "../../assets/menu-button.svg";
import characterImg from "../../assets/character.png";

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
      <img
        src={characterImg}
        alt="character"
        className="absolute bottom-0 right-0 h-40 z-0"
      />
      <h1 className="text-gray-50 absolute  top-10 left-5 text-3xl uppercase">
        Gaffy
      </h1>
    </header>
  );
}

export default HeaderHome;
