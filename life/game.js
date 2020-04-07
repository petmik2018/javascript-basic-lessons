class Game {
	constructor() {
		this.tickIdentifier = null;
	}

	/**
	* Метод получает игровые объекты
	* param {Settings} settings
	* param {Status} status
	* param {Board} board
	* param {menu} menu
	* param {summary} summary
	*/

	init(settings, status, board, menu, summary) {
		this.settings = settings;
		this.status = status;
		this.board = board;
		this.menu = menu;
		this.summary = summary;
	}

	/**
	* Метод начинает игру сначала
	*/
	newGame() {
		this.summary.setInitialTime();
		this.board.clearBoard();
		if (this.status.isPlaying()) {
			this.pause();
		};
	}

	/**
	* Метод запускает игру
	*/
	start() {
		if (this.status.isPaused()) {
			this.status.setPlaying();
			this.tickIdentifier = setInterval(this.doTick.bind(this), 1000 / this.settings.speed);
		}
	}

	/**
	* Метод ставит игру на паузу
	*/
	pause() {
		if (this.status.isPlaying()) {
			this.status.setPaused();
			this.stopGame();
		}
	}

	/**
	* Метод запускает игру
	*/
	oneStep() {
		if (this.status.isPaused()) {
			this.doTick();
		}
	}

	stopGame() {
		clearInterval(this.tickIdentifier);
	}

	doTick() {
		this.board.clearNeighbours();
		this.performStep();
		this.summary.increaseCurrentTime();
	}

	performStep() {
		this.countNeighbours();
		this.defineBoardCellsTypes();
		this.makeChanges();
	}

	countNeighbours() {
		const cellElems = document.querySelectorAll(".filled");
		cellElems.forEach((td) => {
        	let row = +td.dataset.row;
        	let col = +td.dataset.col;
        	for (let i = -1; i < 2; i++) {
	        	for (let j = -1; j < 2; j++) {
        			this.getCellEl(col + i, row + j).dataset.neighbours++;
        		}
        	};
        	this.getCellEl(col, row).dataset.neighbours--;        	
		});
	}

	defineBoardCellsTypes() {
		const allCellElems = document.querySelectorAll("TD");
		allCellElems.forEach((td) => {
			this.defineCellType(td);
		})
	}

	defineCellType(td) {
		let count = td.dataset.neighbours;
		if (td.classList.contains("filled")) {
			if (count < 2 || count > 3) {
				td.classList.add("toDie");
			}
		}
		else {
			if (count == 3) {
				td.classList.add("toBorn");
			}
		}
	}

	makeChanges() {
		const allCellElems = document.querySelectorAll("TD");
		allCellElems.forEach((td) => {
			if (td.classList.contains("filled") && td.classList.contains("toDie")) {
				td.classList.remove("filled");
				td.classList.remove("toDie");
			};
			if (td.classList.contains("toBorn")) {
				td.classList.add("filled");
				td.classList.remove("toBorn");
			};
		})
	}		

	getCellEl(currX, currY) {
		let x = currX + 1;
		let y = currY + 1;
		if (x == 0) {x = this.settings.colsCount};
		if (y == 0) {y = this.settings.rowsCount};
		if (x == this.settings.colsCount + 1) {x = 1};
		if (y == this.settings.rowsCount + 1) {y = 1};
		return this.board.boardEl.querySelector(`tr:nth-child(${y}) td:nth-child(${x})`)
	}

	cellIsCorrect(i, j) {
		return (i > -1) && (j > -1) && (i < this.settings.rowsCount) && (j < this.settings.colsCount);
	}


}