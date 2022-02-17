import menu from "./views/menuVIew.js";
import favorites from "./views/favoritesView.js";

import * as model from "./model.js";
import "core-js/stable";
import "regenerator-runtime/runtime";
import { async } from "regenerator-runtime";

function remove(idrem) {
  //remove dos favoritos quando o 'x' é clicado
  model.addNRemoveFavorites(idrem);
  favorites.render(model.state.favorites);

  const game = Array.from(document.querySelectorAll(".game")).find(
    (el) => +el.dataset.id === +idrem
  );
  const svg = game
    .querySelector("#actions")
    .querySelector(".fav-button")
    .querySelector("svg");
  favorites.changeIcon(svg);
}

function controlFavorites(id) {
  //adiciona o game com o 'id' aos favoritos
  model.addNRemoveFavorites(id);
  favorites.render(model.state.favorites);
}

//controla todas as funções da view details
const controlDescription = async function (id) {
  menu.renderSpinner(true);
  const game = await model.getGameById(id);
  import("./views/detailsView").then(function (page) {
    page.default.showDetails(game);
    page.default.closeDetails();
  });
};

//Faz um request de todos os games com a tag indicada
const getGamesByTag = async function (tag) {
  menu.renderSpinner(true);
  await model.getGamesList(tag);
  //importa dinamicamente o codigo do module gamesListView
  import("./views/gamesListView").then(function (page) {
    page.default._resetPagination();
    page.default.render(model.state.games);
    page.default.Pagination();
    page.default.showGames();
  });

  //importa dinamicamente o codigo do module detailsView
  import("./views/detailsView").then((page) =>
    page.default.addHandlerDescription(controlDescription)
  );
};

//observa qual foi a tag clicada, além de mostrar e esconder o menu
function controlMenu(tag) {
  menu.hideSideMenu();
  getGamesByTag(tag);
}

const init = function () {
  menu.addHandlerMenu(controlMenu);
  favorites.addHandlerFavorites(controlFavorites);
  favorites.removeFromFavorites(remove);
};

init();
