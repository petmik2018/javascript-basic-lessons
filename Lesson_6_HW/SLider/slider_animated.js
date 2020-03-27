let slider = document.querySelector(".slider");

let loadIcon = document.createElement("i");
loadIcon.classList.add("fas", "fa-spinner", "fa-spin");
slider.insertAdjacentElement("afterbegin", loadIcon);

let leftArrow = document.createElement("i");
leftArrow.classList.add("fas", "fa-chevron-circle-left", "slider-leftArrow");
slider.insertAdjacentElement("beforeend", leftArrow);

let rightArrow = document.createElement("i");
rightArrow.classList.add("fas", "fa-chevron-circle-right", "slider-rightArrow");
slider.insertAdjacentElement("beforeend", rightArrow);

window.addEventListener("load", function() {
	leftArrow.addEventListener("click", function() {
		images.setNextImage("left");
	});

	rightArrow.addEventListener("click", function() {
		images.setNextImage("right");
	});

	images.init();
	loadIcon.style.display = "none";
});

function setSizes(slider) {
	let width = slider.getAttribute("data-width");
	let height = slider.getAttribute("data-height");
	if (width !== null && width !== "") {
		slider.style.width = width;
	};
	if (height !== null && height !== "") {
		slider.style.height = height;
	}
	// Определение ширины как числа для дальнейшей анимации в moveCurrentImage
	numWidth = +width.slice(0, width.length - 2);
};

setSizes(slider);

let images = {
	currentIndex: 0,
	slides: {},

	init() {
		this.slides = document.querySelectorAll(".slider-item");
		this.showImage(this.currentIndex);
	},

	// Сделать картинку видимой 
	showImage(index) {
		this.slides[index].classList.remove("hidden-slide");
		this.slides[index].style.left = "0px";			
	},

	// Поместить картинку на верхний слой
	setUpperFloor(index) {
		this.slides[index].classList.remove("down_floor");
		this.slides[index].classList.add("upper_floor");	
	},

	// Поместить картинку на нижний слой
	setDownFloor(index) {
		this.slides[index].classList.remove("upper_floor");
		this.slides[index].classList.add("down_floor");	
	},

	// Картинка на верхнем слое съезжает в сторону, открывая нижний слой
	moveCurrentImage(direction) {
		index = this.currentIndex;
		thisSlides = this.slides;

		function moveImage(position) {
			thisSlides[index].style.left = position +"px";
		};

		let leftPosition = 0;
		let timer = setInterval(function() {
			switch (direction) {
				case "left": leftPosition -= (numWidth / 24);
					break;
				case "right": leftPosition += (numWidth / 24);
					break;
			};	
			if (leftPosition < -numWidth || leftPosition > numWidth) {
				clearInterval(timer);
				return;
			}
			moveImage(leftPosition);
		}, 10);
	},

	// Определение индекса следующей картинки
	setNextImage(direction) {
		index = this.currentIndex;
		switch (direction) {
			case "left": new_index = (index - 1 == -1) ? this.slides.length - 1 : index - 1;
	 					break;
			case "right": new_index = (index + 1 == this.slides.length) ? 0 : index + 1;
		};
		this.setUpperFloor(index);
		this.setDownFloor(new_index);
		this.showImage(new_index);
		this.moveCurrentImage(direction);
		this.currentIndex = new_index;
	},
}