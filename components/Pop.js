export default class Pop {
    constructor(selector) {
        this.selector = selector;
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
        document.addEventListener('keydown', this._handleEscClose)
    }

    closePopup() {
        this.selector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose)
    }

    _handleEscClose = (evt) => {
        (evt.key === 'Escape' ? this.closePopup() : ' ')
    }

    listeners() {
        this.selector.querySelector('.popup__button-close').addEventListener('click', () => {
            this.closePopup();
        });
        this.selector.addEventListener('click', (evt) => {
            (evt.target.classList.contains('popup')) ? this.closePopup() : " "
        })
    }
}