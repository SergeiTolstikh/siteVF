export default class Pop {
  constructor() {
    this.selector = document.querySelector(".popup");
  }

  creatorElements() {
    this.elementTitle = document.createElement("p");
    this.elementTitle.classList.add("popup__form-title");

    this.elementCloseBtn = document.createElement("button");
    this.elementCloseBtn.classList.add("popup__button-close");
  }

  creatorClassForElements() {
    //this.elementTitle.classList.add("popup__form-title");
    //this.elementCloseBtn.classList.add("popup__button-close");
  }

  openPopup() {
    this.selector.classList.add("popup_opened");
    this.listeners();
  }

  closePopup(e) {
    this.selector.classList.remove("popup_opened");
    //e.target.closest(".popup__form").remove();
  }

  _handleEscClose = (evt) => {
    evt.key === "Escape" ? this.closePopup() : " ";
  };

  /*listeners() {
    this.selector
      .querySelector(".popup__button-close")
      .addEventListener("click", () => {
        this.closePopup();
      });
    this.selector.addEventListener("click", (evt) => {
      evt.target.classList.contains("popup") ? this.closePopup() : " ";
    });
  }*/

  listeners = () => {
    document.addEventListener("keydown", this._handleEscClose);
    document.addEventListener("click", (evt) => {
      evt.target.classList.contains("popup") ||
      evt.target.classList.contains("popup__button-close")
        ? (this.closePopup(),
          document.removeEventListener("keydown", this._handleEscClose))
        : "";
    });
  };
}
