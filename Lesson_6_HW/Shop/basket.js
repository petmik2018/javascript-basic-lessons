"use strict";

class Basket {
	constructor() {
		this.quantity = 0;
		this.amount = 0;
	}

	// Отрисовка корзины в html
	fillHTML(shopElement) {
		document.body.insertAdjacentHTML("beforeend", "<div class='basket'>Корзина</div>");
		const basket = document.querySelector(".basket");
		basket.insertAdjacentHTML("beforeend", `<div class="quantity">Товаров в корзине: ${this.quantity}</div>`);
		basket.insertAdjacentHTML("beforeend", `<div class="amount">Общая стоимость: ${this.amount}</div>`);
	}
}

