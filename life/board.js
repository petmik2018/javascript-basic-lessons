class Board {
	constructor() {
		this.boardEl = document.getElementById("game");
	}

	/**
	*Метод получает настройки и объект для работы.
	* @param {Settings} settings объект настроек.
	*/
	init(settings) {
		this.settings = settings;
	}

	renderBoard() {
		for (let row = 0; row < this.settings.rowsCount; row++) {
			let tr = document.createElement("tr");
			this.boardEl.appendChild(tr);

			for (let col = 0; col < this.settings.colsCount; col++) {
				let td = document.createElement("td");
				td.dataset.row = row.toString();
                td.dataset.col = col.toString();
				tr.appendChild(td);
			}
		}
	}

	clearNeighbours() {
		const tdElems = document.querySelectorAll("TD");
		tdElems.forEach(function(td) {
			td.dataset.neighbours = 0;
		});
	}

	clearBoard() {
		const tdElems = document.querySelectorAll("TD");
		tdElems.forEach(function(td) {
			td.classList.remove("filled");
			td.classList.remove("toBorn");
			td.classList.remove("toDie");
		});
	}

}