export default class Validator {
    constructor(event, selector) {
        this._event = event;
        this._selector = selector;
        this._popupAuth = '.header__openpopup';
        this._popupImg = '.header__button-addimage';
        this._I = '';
        this._popupSbmtBtnShield = this._selector.querySelector('.popup__button-submit-shield');

    }

    ValidatorOn() {
        ((`.${this._event.target.className}` === this._popupAuth || `.${this._event.target.className}` === this._popupImg)
            ? this._ValidationAreas()
            : " ");
    }

    _ValidationAreas() {
        this._ArrayInputAreas = Array.from(this._selector.querySelectorAll('.popup__input'));
        this._sbmtBtn = this._selector.querySelector('.popup__button-submit');
        this._shieldClickListen();
        this._toggleButtonState(this._ArrayInputAreas, this._sbmtBtn);
        this._ArrayInputAreas.forEach((el) => {

            el.addEventListener('input', () => {
                this._toggleButtonState(this._ArrayInputAreas, this._sbmtBtn);
                this._Validation(el);
                this._shieldClickListenOff();
            })
        })
    }

    _choiceAuthTextContent(el) {
        if (el.id === 'auth__input-1') {
            this._authTextContent(el.value);
        }
    }

    _authTextContent(el) {
        return this._I = el;
    }

    _toggleButtonState(a, e) {
        if (this._hasInvalidInput(a)) {
            e.classList.add('popup__button-submit_inactive');
            this._popupSbmtBtnShield.classList.add('popup__button-submit-shield_on');
            e.setAttribute('disabled', true);
        } else {
            e.classList.remove('popup__button-submit_inactive');
            this._popupSbmtBtnShield.classList.remove('popup__button-submit-shield_on');
            e.removeAttribute('disabled');
        }
    }

    _hasInvalidInput(a) {
        return a.some(el => !el.validity.valid);
    }

    _Validation(el) {
        this._popupInputIdValidation = this._selector.querySelector(`#${el.id}`);
        this._errorMessage = this._selector.querySelector(`#${el.id}-error`);
        if (!el.validity.valid) {
            this._showInputError(this._popupInputIdValidation, this._errorMessage);
        } else {
            this._hideInputError(this._popupInputIdValidation, this._errorMessage);
        }
    }

    _showInputError(el, er) {
        el.classList.add('form__input_type-error');
        er.textContent = el.validationMessage;
        er.classList.add('popup__input-error_visible');
    }

    _hideInputError(el, er) {
        el.classList.remove('form__input_type-error');
        er.textContent = '';
        er.classList.remove('popup__input-error_visible');
    }

    _shieldClickListen() {
        this._popupSbmtBtnShield.addEventListener('click', () => {
            this._selector.querySelector('.popup__form-title').classList.add('popup__form-title_onanimation');
        });
    }

    _shieldClickListenOff() {
        this._selector.querySelector('.popup__form-title').classList.remove('popup__form-title_onanimation');
    }





}

