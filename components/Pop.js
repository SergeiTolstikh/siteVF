export default class Pop {
    constructor(selector) {
        this.selector = selector;
        console.log(this.selector);

    }

    creatorElements() {
        this.elementTitle = document.createElement('p');
        this.elementCloseBtn = document.createElement('button');
    }

    creatorClassForElements() {
        this.elementTitle.classList.add('popup__form-title');
        this.elementCloseBtn.classList.add('popup__button-close');
    }

    openPopup() {
        this.selector.classList.add('popup_opened');
    }

    closePopup() {
        this.selector.classList.remove('popup_opened');
    }

    listeners() {
        this.selector.querySelector('.popup__button-close').addEventListener('click', () => {
            this.closePopup();
        })
    }


}