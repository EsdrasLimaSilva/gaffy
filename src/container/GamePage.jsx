import React, { useEffect } from "react";
import { fetchSingleGame } from "../api/fetchGames";
import { useSelector, useDispatch } from "react-redux";
import { selectSingleGameData, dataAdded } from "../redux/singleGameSlice";

import HeaderGamePage from "../components/HeaderGamePage/HeaderGamePage";
import GameDescription from "../components/GameDescription/GameDescription";
import GameTableInfo from "../components/GameTableInfo/GameTableInfo";
import SliderGameImages from "../components/SliderGameImages/SliderGameImages";
import Footer from "../components/footer/Footer";
import Spinner from "../components/spinner/Spinner";
import { setItemLocalStorage } from "../helpers/localStorage";

function GamePage() {
  const dispatch = useDispatch();
  const gameData = useSelector(selectSingleGameData);

  useEffect(() => {
    (async function () {
      const query = Number(String(window.location.pathname).replace("/", ""));
      const dt = await fetchSingleGame(query);

      dispatch(dataAdded(dt));
    })();
  }, []);

  if (gameData) {
    return (
      <>
        <HeaderGamePage />
        <section
          id="game-data-sec"
          className="bg-gray-900 w-11/12 max-w-4xl mx-auto -translate-y-16 p-5 pb-20 md:px-28 shadow-lg"
        >
          <GameDescription data={gameData} />
          <GameTableInfo data={gameData} />
          <SliderGameImages images={gameData.screenshots} />
        </section>
        <Footer />
      </>
    );
  }

  return <Spinner />;
}

export default GamePage;
