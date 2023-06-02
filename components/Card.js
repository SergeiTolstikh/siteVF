export default class Card {
  constructor({ popDel }) {
    this._popDel = popDel;
  }

  _elements = () => {
    this._gallery = document.querySelector(".gallery-tmplt__container");
    this._templater = document.querySelector(".gallery-tmplt");
  };

  _clonerCardSample = () => {
    this._cardElement = this._templater.content.cloneNode(true);

    return this._cardElement;
  };

  _createrCard = () => {
    this._newCard = this._clonerCardSample();
    this._templateBlock = this._newCard.querySelector(".gallery-tmplt__block");
    this._templateBtnDel = this._newCard.querySelector(
      ".gallery-tmplt__button-del"
    );
    this._templateImg = this._newCard.querySelector(".gallery-tmplt__img");
    this._templateText = this._newCard.querySelector(".gallery-tmplt__text");
    this._templateBtnLike = this._newCard.querySelector(
      ".gallery-tmplt__button-like"
    );
    this._templateBtnDisLike = this._newCard.querySelector(
      ".gallery-tmplt__button-dislike"
    );
    this._templateText.textContent =
      document.querySelector("#img__input-1").value;
    this._templateImg.src = document.querySelector("#img__input-2").value;
    this._templateImg.alt = this._templateText.textContent;
    this._templateCountLike = this._newCard.querySelector(
      ".gallery-tmplt__count_like"
    );
    this._templateCountDisLike = this._newCard.querySelector(
      ".gallery-tmplt__count_dislike"
    );

    this._listener();
    return this._newCard;
  };

  _listener = () => {
    this._templateBtnLike.addEventListener("click", () => {
      this._templateBtnLike.classList.toggle("gallery-tmplt__button-like_on");
      this._templateBtnDisLike.classList.contains(
        "gallery-tmplt__button-dislike_on"
      )
        ? this._templateBtnDisLike.classList.remove(
            "gallery-tmplt__button-dislike_on"
          )
        : "";
    });

    this._templateBtnDisLike.addEventListener("click", () => {
      this._templateBtnDisLike.classList.toggle(
        "gallery-tmplt__button-dislike_on"
      );
      this._templateBtnLike.classList.contains("gallery-tmplt__button-like_on")
        ? this._templateBtnLike.classList.remove(
            "gallery-tmplt__button-like_on"
          )
        : "";
    });
    document.addEventListener("click", (event) => {
      event.target.className === "gallery-tmplt__button-del"
        ? /*event.target.closest(".gallery-tmplt__block").remove(),*/
          this._popDel(event.target.closest(".gallery-tmplt__block"))
        : " ";
    });
  };

  uuuu(){
    this._templateBlock.remove()
    console.log("999")
  }

  adderCard = () => {
    this._elements();
    this._clonerCardSample();
    this._gallery.append(this._createrCard());
  };
}
