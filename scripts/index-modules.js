import Popup from "../components/Popup.js";
import PopupAdd from "../components/PopupAdd.js";
import Validator from "../components/Validation.js";
import Card from "../components/Card.js";
import PopupDelSubmit from "../components/PopupDelSubmt.js";

//const popup = document.querySelector('.popup');

document.addEventListener("click", (Event) => {
  runPopup(Event);
  runPopup2(Event, {
    cardAdd: () => {
      const newCard = new Card({
        popDel: () => delCard({ aktivateDelete: () => newCard.uuuu() }),
      });
      newCard.adderCard();
    },
  });
  /*Ca({
        popDel: (a) => delCard({ aktivateDelete: () => a.remove() }),
      }),
  });*/

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

/*function Ca(a) {
  const newCard = new Card(a);
  newCard.adderCard();
}*/

function delCard(e, c) {
  const PopupDelSbmt = new PopupDelSubmit(e, c);
  PopupDelSbmt.renderPopupDelSbmt();
}
