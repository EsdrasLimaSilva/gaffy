import view from "./view.js";
import fav from "url:../../styles/fav.svg";
class gamesList extends view {
  _parentElement = document.querySelector("#games-list");
  _listInit = 0;
  _listEnd = 15;
  _nextBtn = document.querySelector("#next-btn");
  _prevBtn = document.querySelector("#prev-btn");

  _resetPagination() {
    this._listInit = 0;
    this._listEnd = 15;
  }

  _changePage() {
    window.scrollTo(0, 0);
    this.render(this._data);
    this.showGames();
  }
  _increasePage() {
    this._listInit += 15;
    this._listEnd += 15;
    this._changePage();
  }

  _decreasePage() {
    this._listInit -= 15;
    this._listEnd -= 15;
    this._changePage();
  }

  Pagination() {
    this._nextBtn.addEventListener("click", this._increasePage.bind(this));
    this._prevBtn.addEventListener("click", this._decreasePage.bind(this));
  }

  showGames() {
    setTimeout(() => {
      document
        .querySelectorAll(".game")
        .forEach((el) => el.classList.remove("game-hidden"));
    }, 500);
  }

  _generateMarkup(data) {
    if (this._data.list.length <= 15) {
      this._nextBtn.style.display = "none";
      this._prevBtn.style.display = "none";
    } else if (this._listInit === 0 && this._data.list.length > 15) {
      this._prevBtn.style.display = "none";
      this._nextBtn.style.display = "block";
    } else if (this._listEnd >= this._data.list.length) {
      this._nextBtn.style.display = "none";
      this._prevBtn.style.display = "block";
    } else {
      this._nextBtn.style.display = "block";
      this._prevBtn.style.display = "block";
    }

    const games = data.list.slice(this._listInit, this._listEnd);
    let markup = [];
    games.forEach((game) => {
      markup.push(`
      <div class="game game-hidden" data-id="${game.id}">
        <span>${game.genre}</span>
        <img loading="lazy" src="${game.thumbnail}"" alt="Game image"}"/>
        <div id="short-description">
          <p>${game.short_description}</p>
        </div>
        <div id="actions">
        <a title="go to game page" href="${game.game_url}" target="_blank"><span id="go">&#x27BD;</span></a>
        <span title="add to favorites" class="fav-button"><svg><use href="${fav}#fav-icon"></svg></span>
        </div>
      </div>`);
    });

    return markup.join("");
  }
}

export default new gamesList();
