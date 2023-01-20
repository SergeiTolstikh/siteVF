export default class PopupTegsAdd {
    constructor(id) {
        this._id = id;
        this._popup = document.querySelector('.popup');
        this._popup.id = `${this._id}`;
        this._openPopup = document.querySelector(`#${this._id}`);
        this._ArrayInputs = Array.from(this._openPopup.querySelectorAll('.popup__input'));
        this._ArrayTextMistakes = Array.from(this._openPopup.querySelectorAll('.popup__input-error'));
        this._sbmtBtn = this._openPopup.querySelector('.popup__button-submit');
        
    }

    generate() {
        this._setAttributes();
        this._addInputId();

    }

    _setAttributes() {
        (this._id === 'auth__input' ?
            (this._openPopup.querySelector('.popup__button-submit').setAttribute('id', 'submit_auth'),
                this._ArrayInputs[0].type = 'text', this._ArrayInputs[1].type = 'email',
                this._openPopup.querySelector('.popup__form-title').textContent = 'Заполните форму')
            : ' ');
        (this._id === 'img__input' ?
            (this._openPopup.querySelector('.popup__button-submit').setAttribute('id', 'submit_img')
                , this._ArrayInputs[0].type = 'text', this._ArrayInputs[1].type = 'url',
                this._openPopup.querySelector('.popup__form-title').textContent = 'Добавьте карточку')
            : ' ');
        this._openerPopup();
    }

    _addInputId() {
        let i = 0;
        for (i = 0; i < this._ArrayInputs.length; i++);
        this._ArrayInputs.forEach((e, i) => {
            e.setAttribute('id', `${this._id}` + `${'-'}` + `${i + 1}`);
            this._plaseholdersInput(e);
            ((e.type === 'text') ? this._addMaxlength(e, 30) : '');
            ((e.type === 'email') ? this._addMaxlength(e, 40) : '');
            ((e.type === 'url') ? this._addMaxlength(e, 350) : '');
        })
        this._ArrayTextMistakes.forEach((e, i) => {
            e.classList.add(`${this._id}` + `${'-'}` + `${i + 1}` + `${'-error'}`);
        })

    }



    _plaseholdersInput(el) {
        ((el.id === 'auth__input-1') ? (el.setAttribute('placeholder', 'name'), el.name = el.placeholder) : '');
        ((el.id === 'auth__input-2') ? (el.setAttribute('placeholder', 'email'), el.name = el.placeholder) : '');
        ((el.id === 'img__input-1') ? (el.setAttribute('placeholder', 'imgname'), el.name = el.placeholder) : '');
        ((el.id === 'img__input-2') ? (el.setAttribute('placeholder', 'url'), el.name = el.placeholder) : '');

    }

    _addMaxlength(e, length) {
        e.setAttribute('maxlength', `${length}`)
    }


    _setEventListeners() {
        this._openPopup.querySelector('.popup__button-close').addEventListener('click',
            () => { this._closerPopup() });
            
    }

    _openerPopup() {
        this._popup.classList.add('popup_opened');
        this._setEventListeners();
    }

    _closerPopup() {
        this._popupBeforeCloseRemoveAths();
        this._popup.classList.remove('popup_opened');

    }

    _popupBeforeCloseRemoveAths() {
        this._ArrayInputs.forEach((e) => {
            e.removeAttribute('id');
            e.removeAttribute('type');
            e.removeAttribute('placeholder');
            e.removeAttribute('name');
            e.removeAttribute('maxlength');
        })
        this._popup.removeAttribute('id');
        this._openPopup.querySelector('.popup__form-title').textContent = ' ';
        this._sbmtBtn.removeAttribute('id');

        let i = 0;
        for (i = 0; i < this._ArrayInputs.length; i++);
        this._ArrayTextMistakes.forEach((e, i) => {
            e.classList.remove(`${this._id}` + `${'-'}` + `${i + 1}` + `${'-error'}`);
        })
    }
}