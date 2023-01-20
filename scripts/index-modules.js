import Popup from "../components/Popup.js";
import PopupAdd from "../components/PopupAdd.js";

const popup = document.querySelector('.popup');
document.addEventListener('click', (Event) => {
    Run(Event, popup); Run2(Event, popup);
    console.log(document.querySelectorAll('.popup__input'))
})

function Run(e, c) {
    const PopupS = new Popup(e, c)
    PopupS.renderPopupOverlay();
}

function Run2(e, c) {
    const PopupS = new PopupAdd(e, c)
    PopupS.renderPopupForm();

}






