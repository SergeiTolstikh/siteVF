import Pop from "./Pop.js";

export default class PopupAdd extends Pop {
    constructor(event, { cardAdd }) {
        super();
        this._selector = this.selector;
        this._event = event;
        this._cardAdd = cardAdd;
        this._selectorPopupAuth = document.querySelector('.header__openpopup');
        this._selectorPopupImg = '';
        this._header = document.querySelector('.header');
        //console.log(this._selectorPopupImg)
    }

    _creatorElements() {
        super.creatorElements();
        this._elementTitle = this.elementTitle;
        this._elementCloseBtn = this.elementCloseBtn;

        this._elementForm = document.createElement('form');
        this._elementFieldset = document.createElement('fieldset');
        this._elementSubmit = document.createElement('button');
    }

    _creatorClassForElements() {
        super.creatorClassForElements();
        this._elementForm.classList.add('popup__form');
        this._elementFieldset.classList.add('popup__input-container');
        this._elementSubmit.classList.add('popup__button-submit');
        this._elementSubmit.textContent = "Сохранить";
    }

    _adderElements() {
        this._selector.append(this._elementForm);
        this._elementForm.append(this._elementCloseBtn);
        this._elementForm.append(this._elementTitle);
        this._elementForm.append(this._elementFieldset);
        this._createInputAndClassAndAdder();
        this._createSpanAndClassAndAdder(this._elementFieldset);
        this._createInputAndClassAndAdder();
        this._createSpanAndClassAndAdder(this._elementFieldset);
        this._elementForm.append(this._elementSubmit);
        this._createSpanAndClassAndAdder(this._elementForm);
    }

    _createInputAndClassAndAdder() {
        this._elementInput = document.createElement('input');
        this._elementInput.classList.add('popup__input');
        this._element = this._selector.querySelector('.popup__input-container');
        this._element.append(this._elementInput);
        this._ArrayInputs = Array.from(this._selector.querySelectorAll('.popup__input'));
    }

    _createSpanAndClassAndAdder(e) {
        this._elementSpan = document.createElement('span');
        (e.className === 'popup__input-container'
            ? this._elementSpan.classList.add('popup__input-error')
            : this._elementSpan.classList.add('popup__button-submit-shield'));
        e.append(this._elementSpan);
        this._ArrayTextMistakes = Array.from(this._selector.querySelectorAll('.popup__input-error'));
    }

    _createAttributeIdforInput() {
        (this._selectorPopupAuth.className === this._event.target.className
            ? (this._selector.id = "auth__input")
            : this._selector.id = "img__input");
        this._ArrayInputs.forEach((e) => { e.id = `${this._selector.id}` });
    }

    _setAttributes() {
        this._elementCloseBtn.setAttribute('type', 'button');
        (this._selector.id === 'auth__input' ?
            (this._selector.querySelector('.popup__button-submit').setAttribute('id', 'submit_auth'),
                this._ArrayInputs[0].type = 'text', this._ArrayInputs[1].type = 'email',
                this._selector.querySelector('.popup__form-title').textContent = 'Заполните форму')
            : ' ');
        (this._selector.id === 'img__input' ?
            (this._selector.querySelector('.popup__button-submit').setAttribute('id', 'submit_img')
                , this._ArrayInputs[0].type = 'text', this._ArrayInputs[1].type = 'url',
                this._selector.querySelector('.popup__form-title').textContent = 'Добавьте карточку')
            : ' ');
    }

    _addInputId() {
        let i = 0;
        for (i = 0; i < this._ArrayInputs.length; i++);
        this._ArrayInputs.forEach((e, i) => {
            e.setAttribute('id', `${this._selector.id}` + `${'-'}` + `${i + 1}`);
            this._plaseholdersInput(e);
            e.setAttribute('required', 'required');
            ((e.name === 'name') ? (this._addMinlenght(e, 2), this._addMaxlength(e, 10)) : '');
            ((e.name === 'email') ? (this._addMinlenght(e, 3), this._addMaxlength(e, 40)) : '');
            ((e.name === 'imgname') ? (this._addMinlenght(e, 3), this._addMaxlength(e, 20)) : '');
            ((e.name === 'url') ? (this._addMinlenght(e, 3), this._addMaxlength(e, 500)) : '');
        })
        this._ArrayTextMistakes.forEach((e, i) => {
            e.setAttribute('id', `${this._selector.id}` + `${'-'}` + `${i + 1}` + `${'-error'}`);
        })
    }

    _plaseholdersInput(el) {
        ((el.id === 'auth__input-1') ? (el.setAttribute('placeholder', 'name'), el.name = el.placeholder) : '');
        ((el.id === 'auth__input-2') ? (el.setAttribute('placeholder', 'email'), el.name = el.placeholder) : '');
        ((el.id === 'img__input-1') ? (el.setAttribute('placeholder', 'imgname'), el.name = el.placeholder) : '');
        ((el.id === 'img__input-2') ? (el.setAttribute('placeholder', 'url'), el.name = el.placeholder) : '');
    }

    _addMaxlength(e, length) {
        e.setAttribute('maxlength', `${length}`);

    }

    _addMinlenght(e, length) {
        e.setAttribute('minlength', `${length}`);
    }

    _creatorFormPopup() {
        this._creatorElements();
        this._creatorClassForElements();
        this._adderElements();
        super.openPopup();
        this._listenerForm();
        this._createAttributeIdforInput();
        this._addInputId();
        this._setAttributes();
    }

    closePopup() {
        super.closePopup();
        this._elementForm.remove();
        this._selector.removeAttribute('id');
    }
    


    _listenerForm() {
        //super.listeners();
        this._elementSubmit.addEventListener('click', (evt) => {
            evt.preventDefault();
            //console.log(this._selector.id)
            (evt.target.id === 'submit_auth' ? this._choiceAuthTextContent(this._ArrayInputs) : this._cardAdd(), this.closePopup());
            console.log(this._ArrayInputs);
            ;
        });
    }



    _choiceAuthTextContent = (el) => {
        el.forEach((e) => {
            if (e.id === 'auth__input-1') {
                this._authTextContent(e.value);
                console.log(e.value)
            }
        })
    }

    _authTextContent(e) {
        this._selectorPopupAuth.textContent = e;
        this._selectorPopupAuth.setAttribute('id', 'authorized');
        this._addButtonOnPanel(this._header);
        this.closePopup();
    }

    _addButtonOnPanel = (e) => {
        e.insertAdjacentHTML('beforeend', '<button class="header__button-addImage"></button>');
        this._buttonOnPanel = document.querySelector('.header__button-addImage');
        this._selectorPopupImg = this._buttonOnPanel.className;
        console.log(this._selectorPopupImg);
        this._listenerOpenPopupImg(this._selectorPopupImg);
    }

    _listenerOpenPopupImg(e) {
        this._buttonOnPanel.addEventListener('click', (event) => {
            console.log(this._event.target)
            this._event = event,
                this.renderPopupForm(e);

        })
    }

    renderPopupForm(e) {
        ((this._event.target.className === `${this._selectorPopupAuth.className}`) || (this._event.target.className === `${e}`)
            ? (this._creatorFormPopup())
            : '');

    }
}