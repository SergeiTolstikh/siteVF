const popupOpenBtn = document.querySelector('.header__openpopup');
const popup = document.querySelector('.popup');
//const authPopup = document.querySelector('#authPopup');
const popupForm = document.querySelector('.popup__form');
const popupCloseBtn = document.querySelector('.popup__button-close');
//const popupTitle = document.querySelector('.popup__form-title');
const popupFieldset = document.querySelector('.popup__input-container');

//const popupFirstIn = document.querySelector('#fifstInput');
//const popupScndIn = document.querySelector('#secondInput');
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
const ArrayInputs = Array.from(popupFieldset.querySelectorAll('.popup__input'));
const ArrayTextMistakes = Array.from(popupFieldset.querySelectorAll('.popup__input-error'))
//const ArrayInputAreas = Array.from(document.querySelectorAll('.popup__input'));
//const ArrayInputErrors = Array.from(document.querySelectorAll('.popup__input-error'));


/////



let openPopup = '';
let popupFirstIn = '';
const popupAuthAttributes = (e, c) => {
    popup.id = `${e}`;
    openPopup = document.querySelector(`#${popup.id}`);
    (e === 'auth__input' ? openPopup.querySelector('.popup__button-submit').setAttribute('id', 'submit_auth') : ' ');
    (e === 'img__input' ? openPopup.querySelector('.popup__button-submit').setAttribute('id', 'submit_img') : ' ');
    addInputType(),
        addInputId(e),
        addPopupTitle(e, openPopup);
    handleOpenPopup(openPopup, c);
}

const popupOverlay = (e, c) => {
    const imgOverlay = document.createElement('img');
    imgOverlay.src = c.target.src;
    imgOverlay.alt = c.target.alt;
    imgOverlay.classList.add('popup__img');
    const btnCloseOverlay = e.querySelector('.popup__button-close');
    const popupImgTitle = e.querySelector('.popup__form-title');
    popupImgTitle.textContent = imgOverlay.alt;
    btnCloseOverlay.classList.add('popup__button-close_overlay');
    popupImgTitle.classList.add('popup__form-title_overlay');
    hidderPopup();
    e.append(imgOverlay, btnCloseOverlay, popupImgTitle);
}





const addInputId = (pop) => {
    let i = 0;
    for (i = 0; i < ArrayInputs.length; i++);
    ArrayInputs.forEach((e, i) => {
        e.setAttribute('id', `${pop}` + `${'-'}` + `${i + 1}`);
        plaseholdersInput(e);
        ((e.type === 'text') ? addMaxlength(e, 30) : '');
        ((e.type === 'email') ? addMaxlength(e, 40) : '');
        ((e.type === 'url') ? addMaxlength(e, 350) : '');
    })
    ArrayTextMistakes.forEach((e, i) => {
        e.classList.add(`${pop}` + `${'-'}` + `${i + 1}` + `${'-error'}`)
    })
}

const plaseholdersInput = (el) => {
    ((el.id === 'auth__input-1') ? (el.setAttribute('placeholder', 'name'), el.name = el.placeholder) : '');
    ((el.id === 'auth__input-2') ? (el.setAttribute('placeholder', 'email'), el.name = el.placeholder) : '');
    ((el.id === 'img__input-1') ? (el.setAttribute('placeholder', 'imgname'), el.name = el.placeholder) : '');
    ((el.id === 'img__input-2') ? (el.setAttribute('placeholder', 'url'), el.name = el.placeholder) : '');
}

const addInputType = () => {
    ((openPopup.id === 'auth__input') ? (ArrayInputs[0].type = 'text', ArrayInputs[1].type = 'email') : '');
    ((openPopup.id === 'img__input') ? (ArrayInputs[0].type = 'text', ArrayInputs[1].type = 'url') : '');
}

const addMaxlength = (e, length) => {
    e.setAttribute('maxlength', `${length}`)
}

const addPopupTitle = (e, o) => {
    ((e === 'auth__input') ? o.querySelector('.popup__form-title').textContent = 'Заполните форму' : '');
    ((e === 'img__input') ? o.querySelector('.popup__form-title').textContent = 'Добавьте карточку' : '');
}

const popupBeforeCloseRemoveAths = (o) => {
    ArrayInputs.forEach((e) => {
        e.removeAttribute('id');
        e.removeAttribute('type');
        e.removeAttribute('placeholder');
        e.removeAttribute('name');
        e.removeAttribute('maxlength');
    })
    openPopup.removeAttribute('id');
    o.querySelector('.popup__form-title').textContent = ' ';
}



/////



const ValidationAreas = (o) => {
    const ArrayInputAreas = Array.from(o.querySelectorAll('.popup__input'));
    const sbmtBtn = o.querySelector('.popup__button-submit');

    toggleButtonState(ArrayInputAreas, sbmtBtn);
    ArrayInputAreas.forEach((el) => {
        el.addEventListener('input', () => {
            choiceAuthTextContent(el);
            toggleButtonState(ArrayInputAreas, sbmtBtn);
            Validation(el);
            shieldClickListenOff(o);
        })
    })
}

const choiceAuthTextContent = (el) => {
    if (el.id === 'auth__input-1') {
        authTextContent(el.value);
    }
}

const toggleButtonState = (a, e) => {
    if (hasInvalidInput(a)) {
        //console.log(hasInvalidInput(ArrayInputAreas))
        e.classList.add('popup__button-submit_inactive');
        popupSbmtBtnShield.classList.add('popup__button-submit-shield_on');
        e.setAttribute('disabled', true);
    } else {
        e.classList.remove('popup__button-submit_inactive');
        popupSbmtBtnShield.classList.remove('popup__button-submit-shield_on');
        e.removeAttribute('disabled');
    }
}

const hasInvalidInput = (a) => {
    return a.some(el => !el.validity.valid);
}

//console.log(hasInvalidInput() === true);
const Validation = (el) => {
    let popupInputIdValidation = document.querySelector(`#${el.id}`);
    const errorMessage = document.querySelector(`.${el.id}-error`);

    if (!el.validity.valid) {
        showInputError(popupInputIdValidation, errorMessage);
    } else {
        hideInputError(popupInputIdValidation, errorMessage);
    }
}

const showInputError = (el, er) => {
    el.classList.add('form__input_type-error');
    er.textContent = el.validationMessage;
    er.classList.add('popup__input-error_visible');
}

const hideInputError = (el, er) => {
    el.classList.remove('form__input_type-error');
    er.textContent = '';
    er.classList.remove('popup__input-error_visible');
}

const shieldClickListen = (o) => {
    popupSbmtBtnShield.addEventListener('click', () => {
        o.querySelector('.popup__form-title').classList.add('popup__form-title_onanimation')
    });
}

const shieldClickListenOff = (o) => {
    console.log(o)
    o.querySelector('.popup__form-title').classList.remove('popup__form-title_onanimation');
}



const handleOpenPopup = (o, c) => {
    o.classList.add('popup_opened');
    ((o.id === 'auth__input') || (o.id === 'img__input') ? (console.log(o.id), ValidationAreas(o), shieldClickListen(o)) : '');
    handleMenuClose(headerMenuItems, headerMenuContainer);
    menuButtonVariantClose(headerMenuBtn, headerMenuBtnX);
    popupOpenBtn.classList.add('header__openpopup_inactive');
    (o.id === 'img__overlay' ? popupOverlay(o, c) : '')
}

const hidderPopup = () => {
    popupForm.classList.add('popup__form_hidden');
    popup.classList.add('popup__overlay-mod');
}

const removeHidderPopup = (o) => {
    o.querySelector('.popup__form').classList.remove('popup__form_hidden');
    o.classList.remove('popup__overlay-mod');
    o.querySelector('.popup__button-close').classList.remove('popup__button-close_overlay');
    o.querySelector('.popup__form-title').classList.remove('popup__form-title_overlay');
    (o.id === 'img__overlay' ? moveElements(o) : ' ')
}

const moveElements = (o) => {
    o.querySelector('.popup__img').remove();
    const popupForm = o.querySelector('.popup__form');
    const btnClose = o.querySelector('.popup__button-close');
    const popupTitle = o.querySelector('.popup__form-title');
    popupForm.append(btnClose, popupTitle);

}

const handleClosePopup = (o) => {
    o.querySelectorAll('.popup__input').forEach((el) => { el.value = ''; el.classList.remove('form__input_type-error'); });
    o.querySelectorAll('.popup__input-error').forEach((el) => { el.textContent = ''; })
    o.classList.remove('popup_opened');
    popupOpenBtn.classList.remove('header__openpopup_inactive');
    shieldClickListenOff(o);
    removeHidderPopup(o);
    popupBeforeCloseRemoveAths(o);
}

const Prev = (Event, popup) => {
    console.log(popup.id);
    Event.preventDefault();
    shieldClickListenOff(Event.target.closest('.popup'));
    (popup.id === 'img__input' ? adderCard() : ' ');
    handleClosePopup(popup);
    popupOpenBtn.textContent = `${'выйти:'}` + ' ' + I;
    popupOpenBtn.classList.add('header__openpopup_position');
    if (!document.querySelector('.header__button-addImage')) {
        ((`${'выйти:'}` + ' ' + I) ? addButtonOnPanel(header) : ' ');
    };
}

let I = '';
const authTextContent = (el) => {
    return I = el;
}

const addButtonOnPanel = (e) => {
    e.insertAdjacentHTML('beforeend', '<button class="header__button-addImage"></button>');
    adderButton();
}

const adderButton = () => {
    if (document.querySelector('.header__button-addImage')) {
        document.querySelector('.header__button-addImage').addEventListener('click', () => { popupAuthAttributes('img__input'); });
    }
}

const EscClosePopup = (Event) => {
    if (Event.key === 'Escape') {
        handleClosePopup(popup);
        handleMenuClose(headerMenuItems, headerMenuContainer);
        menuButtonVariantClose(headerMenuBtn, headerMenuBtnX);
    }

}

const clicEscapePopup = () => {
    const ArrayPop = Array.from(document.querySelectorAll('.popup'));
    ArrayPop.forEach((el) => {
        el.addEventListener('click', (Event) => {
            if (Event.target.classList.contains('popup')) {
                handleClosePopup(popup);
            }
        })
    })
    const ArrayMenu = Array.from(document.querySelectorAll('.header__menu-container'));
    ArrayMenu.forEach((el) => {
        el.addEventListener('click', (Event) => {
            if (Event.target.classList.contains('header__menu-container')) {
                handleMenuClose(headerMenuItems, headerMenuContainer);
                menuButtonVariantClose(headerMenuBtn, headerMenuBtnX);
            }
        })
    })

}

const handleMenuOpen = (el, l) => {
    el.classList.add('header__menu-items_on');
    l.classList.add('header__menu-container_on')

}

const handleMenuClose = (el, l) => {
    el.classList.remove('header__menu-items_on');
    l.classList.remove('header__menu-container_on')
}

const menuButtonVariantOpen = (el, btnx) => {
    el.classList.add('header__menu-button_display-off');
    btnx.classList.add('header__menu-button-x_on');
}

const menuButtonVariantClose = (el, btnx) => {
    el.classList.remove('header__menu-button_display-off');
    btnx.classList.remove('header__menu-button-x_on');
}

const resizeWindow = () => {
    if (window.innerWidth >= 768) {
        menuButtonVariantClose(headerMenuBtn, headerMenuBtnX);
        handleMenuClose(headerMenuItems, headerMenuContainer);
    }
}


//// card
const gallery = document.querySelector(".gallery-tmplt__container");
const templater = document.querySelector(".gallery-tmplt");
const templateBlock = document.querySelector(".gallery-tmplt__block");
const templateBtnDel = document.querySelector(".gallery-tmplt__button-del");
const templateImg = document.querySelector(".gallery-tmplt__img");
const templateText = document.querySelector(".gallery-tmplt__text");
const templateBtnLike = document.querySelector(".gallery-tmplt__button-like");


/*addCardInGallery.addEventListener('click', () => addAttributes());

const addAttributes() {
    popup.id = 'addPopupCard';
    popupForm.id = 'addFormCard';
    popupCloseBtn.id = 'addBtnClose';
    popupTitle.id = 'addTitle';
    popupFieldset.id = 'addFieldset';
    popupFirstIn.id = 'addFirstInput';
    popupScndIn.id = 'addSecondInput';
    popupSbmtBtn.id = 'addBtnSubmit';
}*/

////

const clonerCardSample = () => {
    const cardElement = templater.content.cloneNode(true);
    return cardElement;
}

const createrCard = () => {
    const newCard = clonerCardSample();
    const templateBlock = newCard.querySelector(".gallery-tmplt__block");
    const templateBtnDel = newCard.querySelector(".gallery-tmplt__button-del");
    const templateImg = newCard.querySelector(".gallery-tmplt__img");
    const templateText = newCard.querySelector(".gallery-tmplt__text");
    const templateBtnLike = newCard.querySelector(".gallery-tmplt__button-like");
    templateText.textContent = document.querySelector('#img__input-1').value;
    templateImg.src = document.querySelector('#img__input-2').value;
    templateImg.alt = templateText.textContent;
    //onOffListener(templateImg, templateBtnDel, templateBlock);
    onListener(templateImg, templateBtnDel)
    return newCard;
}

const adderCard = () => {
    gallery.append(createrCard())
}

const onOffListener = (c, b, e) => {
    e.addEventListener('mouseover', () => { onListener(c, b) });
    e.addEventListener('mouseout', () => { offListener(c, b) });
}

const onListener = (c, b) => {
    c.addEventListener('click', (c) => { popupAuthAttributes('img__overlay', c) });
    b.addEventListener('click', (b) => { b.target.closest('.gallery-tmplt__block').remove() });
}

const offListener = (c, b) => {
    c.removeEventListener('click', (c) => { popupAuthAttributes('img__overlay', c) });
    b.removeEventListener('click', (b) => { b.target.closest('.gallery-tmplt__block').remove() });
}


const Target = (qq) => {
    console.log(qq.target)
}
document.addEventListener('click', (Event) => Target(Event));


popupOpenBtn.addEventListener('click', () => { popupAuthAttributes('auth__input'); });
popupCloseBtn.addEventListener('click', () => { handleClosePopup(popup); });
popupSbmtBtn.addEventListener('click', (Event) => Prev(Event, popup));
document.addEventListener('keydown', (Event) => EscClosePopup(Event));
document.addEventListener('click', (Event) => { clicEscapePopup(Event) });

headerMenuBtn.addEventListener('click', () => { handleMenuOpen(headerMenuItems, headerMenuContainer); menuButtonVariantOpen(headerMenuBtn, headerMenuBtnX) });
headerMenuBtnX.addEventListener('click', () => { menuButtonVariantClose(headerMenuBtn, headerMenuBtnX); handleMenuClose(headerMenuItems, headerMenuContainer) });
window.addEventListener('resize', () => resizeWindow());