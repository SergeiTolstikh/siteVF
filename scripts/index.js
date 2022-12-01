const popupOpenBtn = document.querySelector('.header__openpopup');
const popup = document.querySelector('#authPopup');
const popupForm = document.querySelector('.popup__form');
const popupCloseBtn = document.querySelector('.popup__button-close');
const popupTitle = document.querySelector('.popup__form-title');
const popupFieldset = document.querySelector('.popup__input-container');
const popupFirstIn = document.querySelector('#fifstInput');
const popupScndIn = document.querySelector('#secondInput');
const popupSbmtBtn = document.querySelector('.popup__button-submit');
const popupSbmtBtnShield = document.querySelector('.popup__button-submit-shield');

const header = document.querySelector('.header');
const headerTitle = document.querySelector('.header__title');
const headerMenuContainer = document.querySelector('.header__menu-container')
const headerMenu = document.querySelector('.header__menu');
const headerMenuBtn = document.querySelector('.header__menu-button');
const headerMenuBtnX = document.querySelector('.header__menu-button-x');
const headerMenuItems = document.querySelector('.header__menu-items');
const headerMenuItemsOn = document.querySelector('.header__menu-items_on');

const headerItem = document.querySelector('.header__menu-item');

const popupInput = document.querySelector(".popup__input");
//const firstInput = document.querySelector('#firstInput');
//const secondInput = document.querySelector('#secondInput');

//const ArrayInputAreas = Array.from(document.querySelectorAll('.popup__input'));
//const ArrayInputErrors = Array.from(document.querySelectorAll('.popup__input-error'));

function shieldClickListen() {
    popupSbmtBtnShield.addEventListener('click', () => { popupTitle.classList.add('popup__form-title_onanimation') });
}

function shieldClickListenOff() {
    popupTitle.classList.remove('popup__form-title_onanimation');
}




const ValidationAreas = (o) => {
    const ArrayInputAreas = Array.from(document.querySelectorAll('.popup__input'));
    const popupSbmtBtn = o.querySelector('.popup__button-submit');

    toggleButtonState(ArrayInputAreas, popupSbmtBtn);
    ArrayInputAreas.forEach((el) => {
        el.addEventListener('input', () => {
            toggleButtonState(ArrayInputAreas, popupSbmtBtn);
            Validation(el);
            shieldClickListenOff();
        })
    })
}

const toggleButtonState = (ArrayInputAreas, popupSbmtBtn) => {
    if (hasInvalidInput(ArrayInputAreas)) {
        //console.log(hasInvalidInput(ArrayInputAreas))
        popupSbmtBtn.classList.add('popup__button-submit_inactive');
        popupSbmtBtnShield.classList.add('popup__button-submit-shield_on');
        popupSbmtBtn.setAttribute('disabled', true);
    } else {
        popupSbmtBtn.classList.remove('popup__button-submit_inactive');
        popupSbmtBtnShield.classList.remove('popup__button-submit-shield_on');
        popupSbmtBtn.removeAttribute('disabled');
    }
}
const hasInvalidInput = (el) => {
    return el.some(el => !el.validity.valid);
}

//console.log(hasInvalidInput() === true);

function Validation(el) {
    let popupInputIdValidation = document.querySelector(`#${el.id}`);
    const errorMessage = document.querySelector(`.${el.id}-error`);

    if (!el.validity.valid) {
        showInputError(popupInputIdValidation, errorMessage);
    } else {
        hideInputError(popupInputIdValidation, errorMessage);
    }
}

function showInputError(el, er) {
    el.classList.add('form__input_type-error');
    er.textContent = el.validationMessage;
    er.classList.add('popup__input-error_visible');
}

function hideInputError(el, er) {
    el.classList.remove('form__input_type-error');
    er.textContent = '';
    er.classList.remove('popup__input-error_visible');
}



function handleOpenPopup(o) {
    o.classList.add('popup_opened');
    ValidationAreas(o);
    handleMenuClose(headerMenuItems, headerMenuContainer);
    menuButtonVariantClose(headerMenuBtn, headerMenuBtnX);
    popupOpenBtn.classList.add('header__openpopup_inactive');
    shieldClickListen();
}



function handleClosePopup(o) {
    o.querySelectorAll('.popup__input').forEach((el) => { el.value = ''; el.classList.remove('form__input_type-error'); });
    o.querySelectorAll('.popup__input-error').forEach((el) => { el.textContent = ''; })
    o.classList.remove('popup_opened');
    popupOpenBtn.classList.remove('header__openpopup_inactive');
    shieldClickListenOff();
    
}

function Prev(Event) {
    Event.preventDefault();
    handleClosePopup(popup);
    shieldClickListenOff();
}

function EscClosePopup(Event) {
    if (Event.key === 'Escape') {
        handleClosePopup(popup);
        handleMenuClose(headerMenuItems, headerMenuContainer);
        menuButtonVariantClose(headerMenuBtn, headerMenuBtnX);
    }

}

function clicEscapePopup(Event) {
    const ArrayPop = Array.from(document.querySelectorAll('.popup'));
    ArrayPop.forEach(function (el) {
        el.addEventListener('click', (Event) => {
            if (Event.target.classList.contains('popup')) {
                handleClosePopup(popup);
            }
        })
    })
    const ArrayMenu = Array.from(document.querySelectorAll('.header__menu-container'));
    ArrayMenu.forEach(function (el) {
        el.addEventListener('click', (Event) => {
            if (Event.target.classList.contains('header__menu-container')) {
                handleMenuClose(headerMenuItems, headerMenuContainer);
                menuButtonVariantClose(headerMenuBtn, headerMenuBtnX);
            }
        })
    })

}


function handleMenuOpen(el, l) {
    el.classList.add('header__menu-items_on');
    l.classList.add('header__menu-container_on')

}

function handleMenuClose(el, l) {
    el.classList.remove('header__menu-items_on');
    l.classList.remove('header__menu-container_on')
}


function menuButtonVariantOpen(el, btnx) {
    el.classList.add('header__menu-button_display-off');
    btnx.classList.add('header__menu-button-x_on');
}

function menuButtonVariantClose(el, btnx) {
    el.classList.remove('header__menu-button_display-off');
    btnx.classList.remove('header__menu-button-x_on');
}

function resizeWindow() {
    if (window.innerWidth >= 768) {
        menuButtonVariantClose(headerMenuBtn, headerMenuBtnX);
        handleMenuClose(headerMenuItems, headerMenuContainer);
    }
}


function Target(qq) {
    console.log(qq.target)
}
document.addEventListener('click', (Event) => Target(Event));


popupOpenBtn.addEventListener('click', () => handleOpenPopup(popup));
popupCloseBtn.addEventListener('click', () => handleClosePopup(popup));
popupSbmtBtn.addEventListener('click', (Event) => Prev(Event));
document.addEventListener('keydown', (Event) => EscClosePopup(Event));
document.addEventListener('click', (Event) => { clicEscapePopup(Event) });

headerMenuBtn.addEventListener('click', () => { handleMenuOpen(headerMenuItems, headerMenuContainer); menuButtonVariantOpen(headerMenuBtn, headerMenuBtnX) });
headerMenuBtnX.addEventListener('click', () => { menuButtonVariantClose(headerMenuBtn, headerMenuBtnX); handleMenuClose(headerMenuItems, headerMenuContainer) });
window.addEventListener('resize', () => resizeWindow());