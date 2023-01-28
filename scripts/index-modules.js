import Popup from "../components/Popup.js";
import PopupAdd from "../components/PopupAdd.js";
import Validator from "../components/Validation.js";

const popup = document.querySelector('.popup');

document.addEventListener('click', (Event) => {
    Run(Event, popup); Run2(Event, popup); Run3(Event, popup)
})

function Run(e, c) {
    const PopupS = new Popup(e, c)
    PopupS.renderPopupOverlay();
}

function Run2(e, c) {
    const PopupS = new PopupAdd(e, c)
    PopupS.renderPopupForm();

}

function Run3(e, c) {
    const Validation = new Validator(e, c);
    Validation.ValidatorOn();
}






