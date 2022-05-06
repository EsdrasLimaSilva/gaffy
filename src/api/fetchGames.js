const timeout = (time) => {
  let controler = new AbortController();
  setTimeout(() => controler.abort(), time * 1000);
  return controler;
};

const config = {
  method: "get",
  mode: "cors",
  headers: {
    "x-rapidapi-host": process.env.X_HOST,
    "x-rapidapi-key": process.env.X_KEY,
  },
  signal: timeout(8).signal,
};

export const fetchGames = async function (tag) {
  console.log("oi");
  try {
    const response = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${tag}`,
      config
    );

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.messahe);
  }
};

export const fetchSingleGame = async function (gameId) {
  try {
    const response = await fetch(
      "https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}",
      config
    );
    return response.json();
  } catch (error) {
    console.log(error.message);
  }
};
