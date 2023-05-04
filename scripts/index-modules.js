import Popup from "../components/Popup.js";
import PopupAdd from "../components/PopupAdd.js";
import Validator from "../components/Validation.js";
import Card from "../components/Card.js";

const popup = document.querySelector('.popup');

document.addEventListener('click', (Event) => {
    Run(Event, popup);Run2(Event, popup, { cardAdd: () => Ca() }); Run3(Event, popup)
})

function Run(e, c) {
    const PopupS = new Popup(e, c)
    PopupS.renderPopupOverlay();
}

function Run2(e, c, d) {
    const PopupS = new PopupAdd(e, c, d)
    PopupS.renderPopupForm();

}

function Run3(e, c) {
    const Validation = new Validator(e, c);
    Validation.ValidatorOn();
}

function Ca() {
    const newCard = new Card();
    newCard.adderCard();
}






