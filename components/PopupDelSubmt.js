import Pop from "./Pop.js";

export default class PopupDelSubmit extends Pop {
  constructor({ aktivateDelete }) {
    super();
    this._selector = this.selector;
    this._aktivateDelete = aktivateDelete;
  }

  _openPopup = () => {
    super.openPopup();
  };

  closePopup() {
    //e.target.closest(".popup__form").remove();
    super.closePopup();
    this._elementForm.remove();
  }

  _creatorElements = () => {
    super.creatorElements();
    this._elementTitle = this.elementTitle;
    this._elementCloseBtn = this.elementCloseBtn;
    this._elementCloseBtn.setAttribute("type", "button");
    this._elementForm = document.createElement("form");
    this._elementForm.classList.add("popup__form");
    this._elementSubmit = document.createElement("button");
    this._elementSubmit.classList.add("popup__button-submit");
    this._elementSubmit.textContent = "Да";
    this._elementTitle.textContent = "Вы действительно хотите удалить?";
  };

  _adderElements = () => {
    this._selector.append(this._elementForm);
    this._elementForm.append(this._elementCloseBtn);
    this._elementForm.append(this._elementTitle);
    this._elementForm.append(this._elementSubmit);
  };

  renderPopupDelSbmt = () => {
    this._openPopup();
    this._creatorElements();
    this._adderElements();
    this._setEventListeners();
  };
  _setEventListeners = () => {
    this._elementSubmit.addEventListener("click", (Event) => {
      Event.preventDefault();
      this._aktivateDelete();
      this.closePopup();
    });
  };
}
