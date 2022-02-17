export const state = {
  games: {},
  favorites: [],
};

async function getJson(url) {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      "x-rapidapi-key": "0a15235f9cmsh4b31fb10bfbe4aep1fd69ejsn32eaf2323ad2",
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

export async function getGamesList(tag = "shooter") {
  const data = await getJson(
    `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${tag}`
  );
  state.games.list = data;
  state.games.tag = tag;
}

export async function getGameById(id) {
  const data = await getJson(
    `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`
  );
  return data;
}

export function addNRemoveFavorites(idi) {
  const game = state.games.list.find((el) => el.id === +idi);
  const exist = state.favorites.find((el) => el.id === +idi);

  if (exist) {
    state.favorites.splice(state.favorites.indexOf(exist), 1);
  } else {
    const data = {
      id: game.id,
      thumbnail: game.thumbnail,
      title: game.title,
      gameUrl: game.game_url,
    };
    state.favorites.unshift(data);
  }
}
