class Controls {
	constructor() {
		this.newGameBtnEl = document.getElementById("newGameBtn");
		this.pauseBtnEl = document.getElementById("pauseBtn");
		this.startBtnEl = document.getElementById("startBtn");
		this.oneStepBtnEl = document.getElementById("oneStepBtn");
	}

	/**
	* $param {Game} game
	*/
	 init(game, board, status) {
	 	this.game = game;
	 	this.board = board;
	 	this.status = status;
	 }

	/**
	* $param {Game} game
	*/

	addControlsEventListeners() {
		this.newGameBtnEl.addEventListener("click", this.game.newGame.bind(this.game));
		this.pauseBtnEl.addEventListener("click", this.game.pause.bind(this.game));
		this.startBtnEl.addEventListener("click", this.game.start.bind(this.game));
		this.oneStepBtnEl.addEventListener("click", this.game.oneStep.bind(this.game));
        this.board.boardEl.addEventListener('click', event => this.cellClickHandler(event));
    }

    cellClickHandler(event) {
        // Если клик не нужно обрабатывать, уходим из функции.
        if (!this.isCorrectClick(event)) {
            return;
        }

        // Заполняем ячейку.
        this.fillCell(event);
    }

    isCorrectClick(event) {
    	console.log(this.status.isPaused);
        return this.status.isPaused && this.isClickByCell(event) && this.isCellEmpty(event);
    }

    isClickByCell(event) {
        return event.target.tagName === 'TD';
    }

    isCellEmpty(event) {
        // Получаем строку и колонку куда кликнули.
        // let row = +event.target.dataset.row;
        // let col = +event.target.dataset.col;

        // return this.mapValues[row][col] === '';
        return true;
    }

    fillCell(event) {
        // Получаем строку и колонку куда кликнули.
        let row = +event.target.dataset.row;
        let col = +event.target.dataset.col;

        // Заполняем ячейку и ставим значение в массиве, в свойстве mapValues.
        event.target.classList.add("filled");
    }
}