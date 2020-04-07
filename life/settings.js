class Settings {
	/**
	* @param {Object} params - Параметры игры.
	* @param {number} params.rowsCount - Количество строк игрового поля.
	* @param {number} params.colsCount - Количество колонок игрового поля.
	* @param {number} params.speed - Скорость игры.
	* @throws {Error} если переданы неверные настройки, выбрасывается
	* соответствующая ошибка.
	*/

	init({rowsCount = 21,
		  colsCount = 21,
		  speed = 10} = {}) {
		if (rowsCount < 10 || rowsCount > 30) {
			throw new Error ("Неверные настройки, количество строк должно быть между 10 и 30.");
			}

		if (colsCount < 10 || colsCount > 30) {
			throw new Error ("Неверные настройки, количество колонок должно быть между 10 и 30.");
			}

		if (speed < 2 || speed > 20) {
			throw new Error ("Неверные настройки, скорость должна быть между 2 и 20.");
			}

		this.rowsCount = rowsCount;
		this.colsCount = colsCount;
		this.speed = speed;
	}
}

