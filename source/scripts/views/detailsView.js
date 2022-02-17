import view from "./view";

class details extends view {
  _parentElement = document.querySelector("#details");

  showDetails(data) {
    this._parentElement.style.display = "block";
    document.body.style.overflowY = "hidden";
    this.render(data);
    setTimeout(() => {
      this._parentElement.style.opacity = "1";
    }, 200);
  }

  closeDetails() {
    document.querySelector("#close-details-btn").addEventListener(
      "click",
      function () {
        this._parentElement.style.opacity = "0";
        document.body.style.overflowY = "auto";
        setTimeout(() => {
          this._parentElement.style.display = "none";
        }, 200);
      }.bind(this)
    );
  }

  _generateMarkup(data) {
    return `
    <button id="close-details-btn">X</button>
    <section id="tables">
      <table>
        <caption>Details</caption>
        <tr>
          <td>title</td>
          <td>${data.title}</td>
        </tr>
        <tr>
          <td>Developer</td>
          <td>${data.developer}</td>
        </tr>
        <tr>
          <td>Genre</td>
          <td>${data.genre}</td>
        </tr>
        <tr>
          <td>Platform</td>
          <td>${data.platform}</td>
        </tr>
        <tr>
          <td>Publisher</td>
          <td>${data.publisher}</td>
        </tr>
        <tr>
          <td>Status</td>
          <td>${data.status}</td>
        </tr>
      </table>
      <table>
        <caption>Requirements</caption>
        <tr>
          <td>Graphics</td>
          <td>${data.minimum_system_requirements.graphics}</td>
        </tr>
        <tr>
          <td>Memory</td>
          <td>${data.minimum_system_requirements.memory}</td>
        </tr>
        <tr>
          <td>OS</td>
          <td>${data.minimum_system_requirements.os}</td>
        </tr>
        <tr>
          <td>Processor</td>
          <td>${data.minimum_system_requirements.processor}</td>
        </tr>
        <tr>
          <td>Storage</td>
          <td>${data.minimum_system_requirements.storage}</td>
        </tr>
      </table>
      </section>
      <section id="description">
        ${data.description
          .split("\n")
          .map((el) => `<p>${el}</p>`)
          .join("")}
    `;
  }

  addHandlerDescription(handler) {
    document.querySelector("#games-list").addEventListener("click", (e) => {
      if (e.target.parentElement.classList.contains("game")) {
        handler(e.target.parentElement.dataset.id);
      }
    });
  }
}

export default new details();
