import PopupAdd from "./PopupAdd.js";

export default class PopupAddAuth extends PopupAdd {
    constructor(selector) {
        super(selector)
    }



    renderInputForm() {
        console.log(this._event)
        this._createTegs()
    }

    _createTegs() {
        // this._selector.id = "auth__input"
        (this._selectorPopupAuth === this._event.target.className ? this._selector.id = "auth__input" : ' ')

    }


}