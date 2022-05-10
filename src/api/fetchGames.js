const config = {
  method: "get",
  mode: "cors",
  headers: {
    "x-rapidapi-host": process.env.X_HOST,
    "x-rapidapi-key": process.env.X_KEY,
  },
};

export const fetchGames = async function (tag) {
  try {
    const response = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${tag}`,
      config
    );

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchSingleGame = async function (gameId) {
  try {
    const response = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`,
      config
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
