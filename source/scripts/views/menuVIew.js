import view from "./view";

class menu extends view {
  _parentElement = document.querySelector("#menu");
  _divClose = document.querySelector("#div-close-menu");

  hideSideMenu() {
    document.body.style.overflow = "auto";
    this._parentElement.classList.add("hidden-menu");
    this._divClose.style.display = "none";
  }

  _showHiddeSideMenu() {
    //mostra o menu lateral
    document.querySelector("#menu-btn").addEventListener(
      "click",
      function () {
        window.scrollTo(0, 0);
        document.body.style.overflow = "hidden";
        this._parentElement.classList.remove("hidden-menu");
        this._divClose.style.display = "block";

        //fecha o menu lateral

        document
          .querySelector("#close-menu-btn")
          .addEventListener("click", this.hideSideMenu.bind(this));

        this._divClose.addEventListener("click", this.hideSideMenu.bind(this));
      }.bind(this)
    );
  }

  addHandlerMenu(handler) {
    //mostra as opçõs ao clicar em alguma tag
    this._parentElement.addEventListener("click", function (e) {
      //informa ao controller qual foi a tag clicada
      if (e.target.closest("li")) {
        const tag = e.target.dataset.tag;
        handler(tag);
      }

      const tagTitle = e.target.closest("h2");
      if (!tagTitle) return;
      const span = tagTitle.firstElementChild;
      span.classList.toggle("span-rotated");
      const list = tagTitle.nextElementSibling;
      list.classList.toggle("hidden-options");
    });

    this._showHiddeSideMenu();
  }
}

export default new menu();
