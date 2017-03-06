
import Towers from './towers';

const options = {
		elements: 50,
		canvasHeight: 200,
		canvasWidth: 200
	},
	towers = new Towers(options);

document.addEventListener('DOMContentLoaded', () => {
	const reload = document.getElementsByClassName('reload')[0];

	function init() {
		towers.init(function () {
			window.requestAnimationFrame(init);
		});
	}
	window.requestAnimationFrame(init);
});

