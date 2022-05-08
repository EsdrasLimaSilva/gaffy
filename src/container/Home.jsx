import React from "react";

//components
import HeaderHome from "../components/HeaderHome/HeaderHome";
import NavMenu from "../components/NavMenu/NavMenu";
import { useSelector } from "react-redux";
import { selectLoading } from "../redux/gamesSlice";
import Spinner from "../components/spinner/Spinner";
import GamesList from "../components/GamesList/GamesList";
import Favorites from "../components/Favorites/Favorites";

function Home() {
  const loading = useSelector(selectLoading);

  function showMenu() {
    document.querySelector("#cover-close-menu")?.classList.remove("hidden");
    document.querySelector("#menu")?.classList.remove("hidden");
    document.querySelectorAll(".option-menu-tag")?.forEach((el, i) =>
      setTimeout(() => {
        el.classList.remove("scale-0");
      }, 100 * i)
    );
  }

  function closeMenu() {
    document.querySelector("#cover-close-menu")?.classList.add("hidden");
    document.querySelector("#menu")?.classList.add("hidden");
    document
      .querySelectorAll(".option-menu-tag")
      ?.forEach((el, i) => el.classList.add("scale-0"));
  }

  return (
    <>
      <HeaderHome showMenu={showMenu} />
      <NavMenu closeMenu={closeMenu} showMenu={showMenu} />
      {loading ? <Spinner /> : ""}
      <Favorites />
      <GamesList />
    </>
  );
}

export default Home;
