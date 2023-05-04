import Pop from "./Pop.js";

export default class Popup extends Pop {
    constructor(event) {
        super();
        this._selector = this.selector;
        this._event = event;
        this._selectorPopup = 'gallery-tmplt__img'; //Выбор селектора на котором срабатывать
        console.log(this.selector)
    }

    _creatorElements() {
        this._selector.setAttribute('id', 'img__overlay');
        this._elementImg = document.createElement('img');
        super.creatorElements();
        this._elementTitle = this.elementTitle;
        this._elementCloseBtn = this.elementCloseBtn;
        console.log(this._elementTitle)
    }
    _creatorClassForElements() {
        this._elementImg.classList.add('popup__img');
        super.creatorClassForElements();
        (this._event.target.className === `${this._selectorPopup}`
            ? (this._elementCloseBtn.classList.add('popup__button-close_overlay'), this._selector.classList.add('popup__overlay-mod'))
            : '');
    }

    _appendElementsInDom() {
        this._selector.append(this._elementImg);
        this._selector.append(this._elementTitle);
        this._selector.append(this._elementCloseBtn);
    }

    _createAttributes() {
        this._elementImg.src = this._event.target.src;
        (this._event.target.src
            ? (this._elementImg.src = this._event.target.src, this._elementImg.alt = this._event.target.alt)
            : (this._elementImg.src = 'https://i.gifer.com/origin/4d/4dc11d17f5292fd463a60aa2bbb41f6a.gif',
                this._elementImg.alt = `${' Картинка не загрузилась'}`));

        (this._selector.id === 'img__overlay' ? this._elementTitle.textContent = `${this._elementImg.alt}` : '')
        this._elementCloseBtn.setAttribute('type', 'button');

    }

    openPopup() {
        super.openPopup();
    }

    closePopup() {
       

        this._selector.querySelector('.popup__form-title').remove();
        this._selector.querySelector('.popup__button-close').remove();
        this._selector.querySelector('.popup__img').remove();
        this._selector.classList.remove('popup__overlay-mod');
        this._selector.removeAttribute('id');
        super.closePopup();
    }

    listeners() {
        super.listeners();
    }

    _creator() {
        this._creatorElements();
        this._creatorClassForElements();
        this._appendElementsInDom();
        this._createAttributes();
        this.openPopup();
        this.listeners();
    }

    renderPopupOverlay() {
        (this._event.target.className === `${this._selectorPopup}`
            ? (this._creator())
            : '');
    }
}