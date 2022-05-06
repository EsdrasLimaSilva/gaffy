import React, { useState } from "react";
import {
  faGear,
  faGenderless,
  faHandBackFist,
  faCubes,
  faAnglesLeft,
  faPeopleGroup,
  faUsersRays,
  faGun,
  faChessKnight,
  faGroupArrowsRotate,
  faPersonRifle,
  faSquareCaretDown,
  faFlagCheckered,
  faBaseball,
  faCircleUser,
  faExplosion,
  faCube,
  faSquare,
  faPeopleArrowsLeftRight,
  faRobot,
  faA,
  faHatWizard,
  faJetFighter,
  faAtom,
  faGhost,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchGames } from "../../api/fetchGames";
import { formatQuery } from "../../helpers/formatQuery";

const NavMenu = function ({ closeMenu, showMenu }) {
  const [currentTag, setCurrentTag] = useState(null);

  const tags = {
    genre: [
      { title: "MMO", icon: faPeopleGroup, id: 1 },
      { title: "MMORPG", icon: faUsersRays, id: 2 },
      { title: "Shooter", icon: faGun, id: 3 },
      { title: "strategy", icon: faChessKnight, id: 4 },
      { title: "moba", icon: faGroupArrowsRotate, id: 5 },
      { title: "battle royale", icon: faPersonRifle, id: 6 },
      { title: "card", icon: faSquareCaretDown, id: 7 },
      { title: "racing", icon: faFlagCheckered, id: 8 },
      { title: "sports", icon: faBaseball, id: 9 },
      { title: "social", icon: faCircleUser, id: 10 },
      { title: "fighting", icon: faExplosion, id: 11 },
    ],

    graphics: [
      { title: "3d", icon: faCube, id: 11 },
      { title: "2d", icon: faSquare, id: 12 },
    ],

    combat: [
      { title: "pvp", icon: faPeopleArrowsLeftRight, id: 13 },
      { title: "pve", icon: faRobot, id: 14 },
    ],

    setting: [
      { title: "anime", icon: faA, id: 15 },
      { title: "fantasy", icon: faHatWizard, id: 16 },
      { title: "military", icon: faJetFighter, id: 17 },
      { title: "sci-fi", icon: faAtom, id: 18 },
      { title: "horror", icon: faGhost, id: 19 },
    ],
  };

  if (currentTag && currentTag === "genre") {
    return (
      <>
        <div
          id="cover-close-menu"
          className="w-screen h-screen absolute top-0 left-0 z-10 hidden"
          onClick={() => {
            closeMenu();
            setCurrentTag("pamonha");
          }}
        />
        <div className="option-tag fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-20 max-w-2xl w-full max-h-96  overflow-auto">
          <ul className=" flex flex-row flex-wrap justify-center items-center">
            {tags.genre.map((genre) => (
              <li
                key={genre.id}
                className="option-tag-type w-24 h-24 m-2 flex flex-col justify-center items-center rounded-lg hover:cursor-pointer bg-red-700 hover:bg-gray-50 hover:text-red-700"
                onClick={(e) =>
                  fetchGames(
                    formatQuery(
                      e.target.closest("li").firstElementChild.textContent
                    )
                  )
                }
              >
                <h2 className="text-center text-sm uppercase font-sans font-bold">
                  {genre.title}
                </h2>
                <FontAwesomeIcon icon={genre.icon} className="text-3xl mt-2" />
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
              setCurrentTag(null);
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

  if (currentTag && currentTag === "setting") {
    return (
      <>
        <div
          id="cover-close-menu"
          className="w-screen h-screen absolute top-0 left-0 z-10 hidden"
          onClick={() => {
            closeMenu();
            setCurrentTag("pamonha");
          }}
        />
        <div className="option-tag fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-20 max-w-2xl  w-full max-h-96  overflow-auto">
          <ul className="w-full flex flex-row flex-wrap justify-center items-center">
            {tags.setting.map((set) => (
              <li
                key={set.id}
                className="option-tag-type w-24 h-24 m-2 flex flex-col justify-center items-center rounded-lg hover:cursor-pointer bg-blue-700 hover:bg-gray-50 hover:text-blue-700"
                onClick={(e) =>
                  fetchGames(
                    formatQuery(
                      e.target.closest("li").firstElementChild.textContent
                    )
                  )
                }
              >
                <h2 className="text-center text-sm uppercase font-sans font-bold">
                  {set.title}
                </h2>
                <FontAwesomeIcon icon={set.icon} className="text-3xl mt-2" />
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
              setCurrentTag(null);
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

  if (currentTag && currentTag === "graphics") {
    return (
      <>
        <div
          id="cover-close-menu"
          className="w-screen h-screen absolute top-0 left-0 z-10 hidden"
          onClick={() => {
            closeMenu();
            setCurrentTag(null);
          }}
        />
        <div className="option-tag fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-20 max-w-2xl  w-full max-h-80 overflow-auto">
          <ul className="flex flex-row flex-wrap justify-center items-center ">
            {tags.graphics.map((grap) => (
              <li
                key={grap.id}
                className="option-tag-type w-24 h-24 m-2 flex flex-col justify-center items-center rounded-lg hover:cursor-pointer bg-orange-700 hover:bg-gray-50 hover:text-orange-700"
                onClick={(e) =>
                  fetchGames(
                    formatQuery(
                      e.target.closest("li").firstElementChild.textContent
                    )
                  )
                }
              >
                <h2 className="text-center text-sm uppercase font-sans font-bold">
                  {grap.title}
                </h2>
                <FontAwesomeIcon icon={grap.icon} className="text-3xl mt-2" />
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
              setCurrentTag(null);
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

  if (currentTag && currentTag === "combat") {
    return (
      <>
        <div
          id="cover-close-menu"
          className="w-screen h-screen absolute top-0 left-0 z-10 hidden"
          onClick={() => {
            closeMenu();
            setCurrentTag(null);
          }}
        />
        <ul className="option-tag fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-20 max-w-2xl flex flex-row flex-wrap w-full max-h-80 justify-center items-center overflow-auto">
          {tags.combat.map((comb) => (
            <li
              key={comb.id}
              className="option-tag-type w-24 h-24 m-2 flex flex-col justify-center items-center rounded-lg hover:cursor-pointer bg-green-700 hover:bg-gray-50 hover:text-green-700"
              onClick={(e) =>
                fetchGames(
                  formatQuery(
                    e.target.closest("li").firstElementChild.textContent
                  )
                )
              }
            >
              <h2 className="text-center text-sm uppercase font-sans font-bold">
                {comb.title}
              </h2>
              <FontAwesomeIcon icon={comb.icon} className="text-3xl mt-2" />
            </li>
          ))}
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
              setCurrentTag(null);
              setTimeout(() => {
                showMenu();
              }, 90);
            }}
          >
            <FontAwesomeIcon icon={faAnglesLeft} />
          </button>
        </ul>
      </>
    );
  }
  return (
    <>
      <div
        id="cover-close-menu"
        className="w-screen h-screen absolute top-0 left-0 z-10 hidden"
        onClick={() => {
          closeMenu();
          setCurrentTag(null);
        }}
      />
      <div
        id="menu"
        className="hidden transition-all duration-700 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-64 h-64"
      >
        <nav className="relative w-full h-full text-sm">
          <ul>
            <li
              className="option-menu-tag scale-0 my-2 bg-red-700 text-gray-50 p-2 w-24 h-24 flex items-center justify-center rotate-45 absolute rounded-md hover:bg-gray-50 hover:text-red-700 hover:cursor-pointer transition-all 
            left-1/2 -translate-x-1/2"
              onClick={() => setCurrentTag("genre")}
            >
              <span className="-rotate-45">
                <FontAwesomeIcon icon={faGenderless} className="mr-1" />
                Genre
              </span>
            </li>

            <li
              className="option-menu-tag scale-0 my-2 bg-blue-700 text-gray-50 p-1 w-24 h-24 flex items-center justify-center rotate-45 absolute rounded-md hover:bg-gray-50 hover:text-blue-700 hover:cursor-pointer transition-all 
            top-20 left-0"
              onClick={() => setCurrentTag("setting")}
            >
              <span className="-rotate-45">
                <FontAwesomeIcon icon={faGear} className="mr-1" />
                Setting
              </span>
            </li>

            <li
              className="option-menu-tag scale-0 my-2 bg-green-700 text-gray-50 p-2 w-24 h-24 flex items-center justify-center rotate-45 absolute rounded-md hover:bg-gray-50 hover:text-green-700 hover:cursor-pointer transition-all 
            left-1/2 -translate-x-1/2 top-40"
              onClick={() => setCurrentTag("combat")}
            >
              <span className="-rotate-45">
                <FontAwesomeIcon icon={faHandBackFist} className="mr-1" />
                Combat
              </span>
            </li>

            <li
              className="option-menu-tag scale-0 my-2 bg-orange-700 text-gray-50 w-24 p-1 h-24 flex items-center justify-center rotate-45 absolute rounded-md hover:bg-gray-50 hover:text-orange-700 hover:cursor-pointer transition-all 
            top-20 right-0"
              onClick={() => setCurrentTag("graphics")}
            >
              <span className="-rotate-45">
                <FontAwesomeIcon icon={faCubes} className="mr-1" />
                Graphics
              </span>
            </li>
          </ul>
          <button
            id="close-menu"
            className="absolute top-0 right-0 text-white font-bold text-3xl"
            onClick={closeMenu}
          >
            x
          </button>
        </nav>
      </div>
    </>
  );
};

export default NavMenu;
