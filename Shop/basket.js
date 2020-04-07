"use strict";

class Basket {
	constructor() {
		this.quantity = 0;
		this.amount = 0;
		this.products = {};
	}

	// Отрисовка корзины в html
	fillHTML(shopElement) {
		shopElement.insertAdjacentHTML("beforeend", "<div class='basket'>Корзина</div>");
		const basket = document.querySelector(".basket");
		basket.insertAdjacentHTML("beforeend", `<div>Товаров в корзине: <div class="quantity">${this.quantity}</div></div>`);
		basket.insertAdjacentHTML("beforeend", `<div>Общая стоимость: <div class="amount">${this.amount}</div></div>`);
		basket.insertAdjacentHTML("beforeend", "<div class='products_list'></div")
	};

	addProduct(product) {
		this.addProductToList(product);
		this.increaseBasketData(product);
		this.renderProductsInBasket(product);	
	};

	addProductToList(product)  {
		if(this.products[product.id] == undefined) {
			this.products[product.id] = {
				name: product.name,
				price: product.price,
				count: 1
			}
		} else {
			this.products[product.id].count++;
		}
	};

	increaseBasketData(product) {
		this.quantity++;
		const quantityBox = document.querySelector(".quantity");
		quantityBox.textContent++;
		const amountBox = document.querySelector(".amount");
		amountBox.textContent = +amountBox.textContent + +product.price;
	};

	renderProductsInBasket(product) {
		let productList = document.querySelector(".products_list");
		let textToShow = `name: ${product.name} count: ${this.products[product.id].count}`
		if(this.products[product.id].count == 1) {
			let productRow = `<div class="id${product.id}">` + textToShow + `</div`;
			productList.insertAdjacentHTML("beforeend", productRow);
		} else {
			let productRow = productList.querySelector(".id" + product.id);
			productRow.textContent = textToShow;
		};

	};
}

