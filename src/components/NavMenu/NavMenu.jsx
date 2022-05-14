import React, { useState } from "react";
import {
  faGear,
  faGenderless,
  faHandBackFist,
  faCubes,
  faTag,
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
  faBraille,
  faEarthAmerica,
  faBriefcaseMedical,
  faBurst,
  faDragon,
  faGrip,
  faHourglassHalf,
  faBiohazard,
  faPerson,
  faJetFighterUp,
  faWalkieTalkie,
  faShuttleSpace,
  faSailboat,
  faCarSide,
  faMask,
  faSkull,
  faWandSparkles,
  faUserNinja,
  faPlaneDeparture,
  faDesktop,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentTag, setCurrentTag } from "../../redux/gamesSlice";
import ItemTag from "../ItemTag/ItemTag";
import { faEye } from "@fortawesome/free-regular-svg-icons";

const NavMenu = function ({ closeMenu, showMenu }) {
  const currentTag = useSelector(selectCurrentTag);
  const dispatch = useDispatch();
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

    tags: [
      { title: "mmofps", icon: faEye, id: 20 },
      { title: "sandbox", icon: faBraille, id: 21 },
      { title: "open world", icon: faEarthAmerica, id: 22 },
      { title: "survival", icon: faBriefcaseMedical, id: 23 },
      { title: "action rpg", icon: faWandSparkles, id: 24 },
      { title: "mmorts", icon: faHourglassHalf, id: 25 },
      { title: "pixel", icon: faDragon, id: 26 },
      { title: "voxel", icon: faGrip, id: 27 },
      { title: "mmotps", icon: faVideo, id: 28 },
      { title: "zombie", icon: faBiohazard, id: 29 },
      { title: "first-person", icon: faPerson, id: 30 },
      { title: "top-down", icon: faJetFighterUp, id: 31 },
      { title: "tank", icon: faWalkieTalkie, id: 32 },
      { title: "space", icon: faShuttleSpace, id: 33 },
      { title: "sailing", icon: faSailboat, id: 34 },
      { title: "side scroller", icon: faCarSide, id: 35 },
      { title: "superhero", icon: faMask, id: 36 },
      { title: "permadeath", icon: faSkull, id: 37 },
      { title: "action", icon: faBurst, id: 38 },
      { title: "martial arts", icon: faUserNinja, id: 39 },
      { title: "flight", icon: faPlaneDeparture, id: 40 },
      { title: "low-spec", icon: faDesktop, id: 41 },
    ],
  };

  if (currentTag && currentTag === "tag") {
    return (
      <ItemTag
        tagArr={tags.tags}
        color="slate"
        closeMenu={closeMenu}
        showMenu={showMenu}
      />
    );
  }

  if (currentTag && currentTag === "genre") {
    return (
      <ItemTag
        tagArr={tags.genre}
        color="red"
        closeMenu={closeMenu}
        showMenu={showMenu}
      />
    );
  }
  if (currentTag && currentTag === "setting") {
    return (
      <ItemTag
        tagArr={tags.setting}
        color="blue"
        closeMenu={closeMenu}
        showMenu={showMenu}
      />
    );
  }

  if (currentTag && currentTag === "graphics") {
    return (
      <ItemTag
        tagArr={tags.graphics}
        color="orange"
        closeMenu={closeMenu}
        showMenu={showMenu}
      />
    );
  }

  if (currentTag && currentTag === "combat") {
    return (
      <ItemTag
        tagArr={tags.combat}
        color="green"
        closeMenu={closeMenu}
        showMenu={showMenu}
      />
    );
  }
  return (
    <>
      <div
        id="cover-close-menu"
        className="hidden w-screen h-screen absolute top-0 left-0 z-10"
        onClick={() => {
          closeMenu();
          setCurrentTag(null);
        }}
      />
      <div
        id="menu"
        data-testid="menu"
        className="hidden transition-all duration-700 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-64 h-64"
      >
        <nav className="relative w-full h-full text-sm">
          <ul>
            <li
              data-testid="genre-menu-button"
              className="option-menu-tag scale-0 my-2 bg-red-700 text-gray-50 p-2 w-24 h-24 flex items-center justify-center rotate-45 absolute rounded-md hover:bg-gray-50 hover:text-red-700 hover:cursor-pointer transition-all 
            left-1/2 -translate-x-1/2 top-20"
              onClick={() => dispatch(setCurrentTag("genre"))}
            >
              <span className="-rotate-45">
                <FontAwesomeIcon icon={faGenderless} className="mr-1" />
                Genre
              </span>
            </li>

            <li
              data-testid="setting-menu-button"
              className="option-menu-tag scale-0 my-2 bg-blue-700 text-gray-50 p-1 w-24 h-24 flex items-center justify-center rotate-45 absolute rounded-md hover:bg-gray-50 hover:text-blue-700 hover:cursor-pointer transition-all 
            top-0 left-0"
              onClick={() => dispatch(setCurrentTag("setting"))}
            >
              <span className="-rotate-45">
                <FontAwesomeIcon icon={faGear} className="mr-1" />
                Setting
              </span>
            </li>

            <li
              data-testid="combat-menu-button"
              className="option-menu-tag scale-0 my-2 bg-green-700 text-gray-50 p-2 w-24 h-24 flex items-center justify-center rotate-45 absolute rounded-md hover:bg-gray-50 hover:text-green-700 hover:cursor-pointer transition-all 
            left-0 top-40"
              onClick={() => dispatch(setCurrentTag("combat"))}
            >
              <span className="-rotate-45">
                <FontAwesomeIcon icon={faHandBackFist} className="mr-1" />
                Combat
              </span>
            </li>

            <li
              data-testid="graphics-menu-button"
              className="option-menu-tag scale-0 my-2 bg-orange-700 text-gray-50 w-24 p-1 h-24 flex items-center justify-center rotate-45 absolute rounded-md hover:bg-gray-50 hover:text-orange-700 hover:cursor-pointer transition-all 
            top-0 right-0"
              onClick={() => dispatch(setCurrentTag("graphics"))}
            >
              <span className="-rotate-45">
                <FontAwesomeIcon icon={faCubes} className="mr-1" />
                Graphics
              </span>
            </li>

            <li
              className="option-menu-tag scale-0 my-2 bg-slate-700 text-gray-50 w-24 p-1 h-24 flex items-center justify-center rotate-45 absolute rounded-md hover:bg-gray-50 hover:text-slate-700 hover:cursor-pointer transition-all 
            top-40 right-0"
              onClick={() => dispatch(setCurrentTag("tag"))}
            >
              <span className="-rotate-45">
                <FontAwesomeIcon icon={faTag} />
                Tag
              </span>
            </li>
          </ul>
          <button
            id="close-menu"
            className="absolute -top-5 -right-5 text-white font-bold text-4xl"
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
