export default class SelectPopup {
    constructor(selector, { auth, img }) {
        this._selector = selector;
        this._openerPopupHeader = document.querySelector(`${this._selector.headerOpenPopup}`);
        this._openerPopupAddImg = document.querySelector(`${this._selector.titleHeader}`);
        this._auth = auth;
        this._img = img;
    }

    setEventListener() {
        this._openerPopupHeader.addEventListener('click', () => { this._auth() });
        this._openerPopupAddImg.addEventListener('click', () => { this._img() });


    }

}