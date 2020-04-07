window.addEventListener("load", () => {
	const settings = new Settings();
	const status = new Status();
	const board = new Board();
	const controls = new Controls();
	const game = new Game();
	const summary = new Summary();

	const initialSettings = {};

	settings.init(initialSettings);

	board.init(settings);
	game.init(settings, status, board, controls, summary);
	controls.init(game, board, status);
	board.renderBoard();
	controls.addControlsEventListeners();

});