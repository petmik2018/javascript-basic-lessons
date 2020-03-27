"use strict";

class Product {
	constructor(id, name, imageSrc, descriptionText, price) {
		this.id = id;
		this.name = name;
		this.imageSrc = imageSrc;
		this.descriptionText = descriptionText;
		this.price = price;
	}

	// Отрисовка карточки продукта в html
	fillHTML(shopElement) {
		const product = document.createElement("div");
		product.setAttribute('id', this.id);
		product.classList.add("product");
		shopElement.appendChild(product);
		product.insertAdjacentHTML("beforeend", `<div class="product_name">${this.name}</div>`);
		product.insertAdjacentHTML("beforeend", `<img src=${this.imageSrc}>`);
		product.insertAdjacentHTML("beforeend", "<button>Подробнее</button>");
		product.insertAdjacentHTML("beforeend", `<div class="description hidden">${this.descriptionText}</div>`);
		const description = product.querySelector(".description");
		description.insertAdjacentHTML("beforeend", "<button>Назад</button>");
		const detailsBtn = product.querySelector("button");
		detailsBtn.addEventListener("click", event => this.setDetailButtonHundler());
		const backBtn = description.querySelector("button");
		backBtn.addEventListener("click", event => this.setBackButtonHundler());
		product.insertAdjacentHTML("beforeend", "<div class='to_sell'></div>");
		const toSellBlock = product.querySelector(".to_sell");
		toSellBlock.insertAdjacentHTML("beforeend", `<div>Цена: ${this.price}</div>`);
		toSellBlock.insertAdjacentHTML("beforeend", "<button>Купить</button>");
		const toSellBtn = toSellBlock.querySelector("button");
		toSellBtn.addEventListener("click", event => this.setToSellButtonHundler());
	};

	// Получение узла с картинкой
	getImageElement() {
		const product= document.getElementById(this.id);
		const image = product.querySelector("img");
		return image
	};

	// Полученте узла с описанием товара 
	getDescriptionElement() {
		const product= document.getElementById(this.id);
		const description = product.querySelector(".description");
		return description
	};

	// Получение узла с кнопкой показа описания товара
	getDetailesButtonElement() {
		const product= document.getElementById(this.id);
		const button = product.querySelector("button");
		return button
	};

	// Получение узла с кнопкой скрытия описания товара
	getBackButtonElement() {
		const product= document.getElementById(this.id);
		const description = product.querySelector(".description");
		const button = description.querySelector("button");
		return button
	};

	// Задание обработчика клика на кнопку показа описания товара
	setDetailButtonHundler() {
		this.getImageElement().classList.add("hidden");
		this.getDetailesButtonElement().classList.add("hidden");
		this.getDescriptionElement().classList.remove("hidden");
	};

	// Задание обработчика клика на кнопку скрытия описания товара
	setBackButtonHundler() {
		this.getImageElement().classList.remove("hidden");
		this.getDetailesButtonElement().classList.remove("hidden");
		this.getDescriptionElement().classList.add("hidden");
	};

	// Задание обработчика клика на кнопку КУПИТЬ
	setToSellButtonHundler() {
		// Добавление единицы товара к общему количеству товаров в корзине 
		const basket = document.querySelector(".basket");
		const quantityMessage = basket.querySelector(".quantity");
		let currentQuantity = +quantityMessage.innerText.slice(19, quantityMessage.length);
		currentQuantity++;
		quantityMessage.innerText = "Товаров в корзине: " + currentQuantity;

		// Добавление стоимости единицы товара к общей стоимости товаров в корзине 
		const amountMessage = basket.querySelector(".amount");
		let currentAmount = +amountMessage.innerText.slice(17, amountMessage.length);
		currentAmount += this.price;
		amountMessage.innerText = "Общая стоимость: " + currentAmount;
	};

}


