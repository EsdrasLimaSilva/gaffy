import view from "./view.js";

class favorites extends view {
  _parentElement = document.querySelector(".favs-sec");

  _generateMarkup(data) {
    if (data.length === 0) {
      return `<h2>Empty :(</h2>`;
    }

    const markup = [];
    data.forEach((game) => {
      markup.push(`
      <div data-id="${game.id}">
        <a href="${game.gameUrl}" target="_blank">
          <img src="${game.thumbnail}" alt="game image" />
          <h2>${
            game.title.length > 15
              ? game.title.slice(0, 15) + "..."
              : game.title
          }</h2>
        </a>
        <button class="rmv-from-fvs">X</button>
      </div>
      `);
    });

    return markup.join("");
  }

  removeFromFavorites(handler) {
    this._parentElement.addEventListener("click", function (e) {
      if (e.target.classList.contains("rmv-from-fvs")) {
        const id = e.target.closest("div").dataset.id;
        handler(id);
      }
    });
  }

  changeIcon(svg) {
    svg.classList.toggle("filled");
  }

  showFavorites() {
    document.querySelector("#fav-btn-sec").addEventListener(
      "click",
      function () {
        this._parentElement.classList.toggle("fav-hidden");
      }.bind(this)
    );
  }

  addHandlerFavorites(handler) {
    this.showFavorites();
    document.querySelector("#games-list").addEventListener(
      "click",
      function (e) {
        if (e.target.closest("svg")) {
          this.changeIcon(e.target.closest("svg"));
          handler(e.target.closest(".game").dataset.id);
        }
      }.bind(this)
    );
  }
}

export default new favorites();
