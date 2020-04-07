/**
* Здесь хранится статус игры
*/

class Status {
	constructor() {
		this.condition = "paused";
	}

	/**Играем*/
	setPlaying() {
		this.condition = "playing";
	}

	// На паузе
	setPaused() {
		this.condition = "paused";
	}

	/**
	* @returns {boolean} если играем, то true
	*/

	isPlaying() {
		return this.condition === "playing";
	}

	/**
	* @returns {boolean} если игра на паузе, то true
	*/

	isPaused() {
		return this.condition === "paused";
	}
}