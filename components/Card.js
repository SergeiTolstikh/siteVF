export default class Card {
    constructor() {
    }

    _elements = () => {
        this._gallery = document.querySelector(".gallery-tmplt__container");
        this._templater = document.querySelector(".gallery-tmplt");
    }

    _clonerCardSample = () => {
        this._cardElement = this._templater.content.cloneNode(true);

        return this._cardElement;
    }

    _createrCard = () => {
        this._newCard = this._clonerCardSample();
        this._templateBlock = this._newCard.querySelector(".gallery-tmplt__block");
        this._templateBtnDel = this._newCard.querySelector(".gallery-tmplt__button-del");
        this._templateImg = this._newCard.querySelector(".gallery-tmplt__img");
        this._templateText = this._newCard.querySelector(".gallery-tmplt__text");
        this._templateBtnLike = this._newCard.querySelector(".gallery-tmplt__button-like");
        this._templateBtnDisLike = this._newCard.querySelector(".gallery-tmplt__button-dislike");
        this._templateText.textContent = document.querySelector('#img__input-1').value;
        this._templateImg.src = document.querySelector('#img__input-2').value;
        this._templateImg.alt = this._templateText.textContent;
        this._templateCountLike = this._newCard.querySelector(".gallery-tmplt__count_like");
        this._templateCountDisLike = this._newCard.querySelector(".gallery-tmplt__count_dislike");

        this._listener();
        //this._likers();
        this._delCard();
        //console.dir(this._templateBtnLike)
        return this._newCard;
    }

    _listener = () => {

        let count = 0
        document.addEventListener('click', (event) => {
            (event.target.className === "gallery-tmplt__button-like") ? this._counterPush(count) : ""
        })


        /*let like = 0;
        let dislike = 0;

        document.addEventListener('click', (event) => {
            for (like = 0; like <= 0; like++);
            (event.target.className === "gallery-tmplt__button-like") ?
                console.log(event.target.querySelector(".gallery-tmplt__count_like").textContent = like + dislike)
                : '';

            (event.target.className === "gallery-tmplt__button-dislike") ?
                event.target.querySelector(".gallery-tmplt__count_dislike").textContent = like + dislike
                : '';
        });*/
    }

    /*_likers = () => {
        document.addEventListener('click', (event) => {
            (event.target.className === "gallery-tmplt__button-like") ?
                (this.t = event.target,
                    this._ArrayLike = Array.from(document.querySelectorAll(".gallery-tmplt__button-like")),
                    this.index = this._ArrayLike.findIndex(e => e[0] === this.t),
                    console.log(this.index)) : '';

        })
    }*/


    _counterPush = (e) => {
        for (; e <5; e++)
        // e++
        console.log(e);
    }




    _delCard = () => {
        document.addEventListener('click', (event) => {
            (event.target.className === "gallery-tmplt__button-del") ?
                event.target.closest(".gallery-tmplt__block").remove() : " "
        })
    }



    adderCard = () => {
        this._elements();
        this._clonerCardSample();
        this._gallery.append(this._createrCard());
    }


}