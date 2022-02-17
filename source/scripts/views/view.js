export default class view {
  _data;
  _spinner = document.querySelector("#load");

  render(data) {
    if (!data) return;
    this._clear();
    this._data = data;
    const markup = this._generateMarkup(this._data);
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
    setTimeout(() => this.renderSpinner(false), 500);
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  _renderError() {
    this._parentElement.innerHTML = this._errorMessage;
  }

  renderSpinner(spinning) {
    if (spinning) {
      this._spinner.style.display = "block";
    } else {
      this._spinner.style.display = "none";
    }
  }
}
