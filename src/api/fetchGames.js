import axios from "axios";

const axiosConfig = {
  baseUrl: "https://free-to-play-games-database.p.rapidapi.com/api",
  method: "get",
  headers: {
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    "x-rapidapi-key": "0a15235f9cmsh4b31fb10bfbe4aep1fd69ejsn32eaf2323ad2",
  },
  timout: 3000,
};

const fetchGames = async function (tag) {
  const response = await axios.get(`/games?category=${tag}`);
  return response.json();
};

const fetchSingleGame = async function (gameId) {
  const response = await axios.get("/game?id=${id}");
  return response.json();
};
