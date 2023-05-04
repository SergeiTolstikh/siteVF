import Popup from "../components/Popup.js";
import PopupAdd from "../components/PopupAdd.js";
import Validator from "../components/Validation.js";
import Card from "../components/Card.js";

//const popup = document.querySelector('.popup');

document.addEventListener('click', (Event) => {
    Run(Event); Run2(Event, { cardAdd: () => Ca() }); Run3(Event)
})

function Run(e) {
    const PopupS = new Popup(e)
    PopupS.renderPopupOverlay();
}

function Run2(e, d) {
    const PopupS = new PopupAdd(e, d)
    PopupS.renderPopupForm();

}

function Run3(e) {
    const Validation = new Validator(e);
    Validation.ValidatorOn();
}

function Ca() {
    const newCard = new Card();
    newCard.adderCard();
}






