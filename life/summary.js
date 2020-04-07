class Summary {
	constructor() {
		this.currentTimeEl = document.querySelector(".currentTime");
	}

	/**
	* @param {Settings} settings настройки игры
	*/

	init(settings) {
		this.settings = settings;
	}

	/**
	* Метод устанавливает текущий счет игрока
	* @param {string} score
	*/

	renderCurrentTime(time) {
		this.currentTimeEl.textContent = time;
	}

	setInitialTime() {
		this.currentTimeEl.textContent = 0;
	}

	increaseCurrentTime() {
		this.currentTimeEl.textContent++;
	}
}