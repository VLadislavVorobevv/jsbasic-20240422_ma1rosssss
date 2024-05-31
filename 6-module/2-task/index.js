export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.render();
  }
  render() {
    const divCard = document.createElement("div");
    divCard.classList.add("card");

    const divCardTop = document.createElement("div");
    divCardTop.classList.add("card");

    const cardImg = document.createElement("img");
    cardImg.classList.add("card__image");
    cardImg.src = `/assets/images/products/${this.product.image}`;
    cardImg.alt = "product";

    const spanPrice = document.createElement("span");
    let priceFix = this.product.price.toFixed(2);
    spanPrice.classList.add("card__price");
    spanPrice.textContent = `€${priceFix}`;

    divCardTop.appendChild(cardImg);
    divCardTop.appendChild(spanPrice);

    const divBody = document.createElement("div");
    divBody.classList.add("card__body");

    const divTitle = document.createElement("div");
    divTitle.classList.add("card__title");
    divTitle.textContent = `${this.product.name}`;

    const button = document.createElement("button");
    button.classList.add("card__button");
    button.setAttribute("type", "button");

    const iconImg = document.createElement("img");
    iconImg.src = "/assets/images/icons/plus-icon.svg";
    iconImg.alt = "icon";

    button.appendChild(iconImg);

    button.addEventListener("click", () => {
      const event = new CustomEvent("product-add", {
        detail: this.product.id,
        bubbles: true,
      });
      this.elem.dispatchEvent(event);
    });

    divBody.appendChild(divTitle);
    divBody.appendChild(button);

    divCard.appendChild(divCardTop);
    divCard.appendChild(divBody);

    this.elem = divCard;
  }
}
