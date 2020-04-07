"use strict";


// Описания товаров
const description_1 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit";
const description_2 = "Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit";
const description_3 = "Sonsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore"; 

let myShop =  {
	shopElement: document.getElementById("shop"),
	products: {},

	init() {
		this.addProduct("1", "Куртка", "images/22-54.jpg", description_1, 2000);
		this.addProduct("2", "Брюки", "images/12-51.jpg", description_2, 1200);
		this.addProduct("3", "Пальто", "images/21-03.jpg", description_3, 2400);
	},

	// Функция добавления карточки товара в магазин
	addProduct(id, name, imageSrc, descriptionText, price) {
		let newProduct = new Product(id, name, imageSrc, descriptionText, price);
		newProduct.fillHTML(this.shopElement);
	},

	initToBasketButtons(basket) {
		let basketButns = document.querySelectorAll(".to_basket_button");
		basketButns.forEach(function(btn) {
			btn.addEventListener("click", function(event) {
				let id = event.srcElement.dataset.id;
				let name = event.srcElement.dataset.name;
				let price = event.srcElement.dataset.price;
				basket.addProduct({id: id, name: name, price: price})
			})

		})

	},

};

myShop.init();
let myBasket = new Basket();
myBasket.fillHTML(myShop.shopElement);
myShop.initToBasketButtons(myBasket);

