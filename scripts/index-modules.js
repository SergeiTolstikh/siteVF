import Popup from "../components/Popup.js";
import PopupAdd from "../components/PopupAdd.js";
import Validator from "../components/Validation.js";
import Card from "../components/Card.js";

//const popup = document.querySelector('.popup');

document.addEventListener("click", (Event) => {
  runPopup(Event);
  runPopup2(Event, { cardAdd: () => Ca({ popDel: () => delCard() }) });
  runPopup3(Event);
});

function runPopup(e) {
  const PopupS = new Popup(e);
  PopupS.renderPopupOverlay();
}

function runPopup2(e, d) {
  const PopupS = new PopupAdd(e, d);
  PopupS.renderPopupForm();
}

function runPopup3(e) {
  const Validation = new Validator(e);
  Validation.ValidatorOn();
}

function Ca(e) {
  const newCard = new Card(e);
  newCard.adderCard();
}

function delCard() {
  alert("Сверстать попап удаления карточки");
}
