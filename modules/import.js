// TODO make this into a main app module thing
// each design should be a module
// use autoreloading or add a reload button

let squareWidth,
	squareOffsetLeft,
	squareOffsetTop,
	squareOffsetBottom,
	canvasDimensions = 500,
	canvasMidpoint = canvasDimensions / 2;

function getRandomNumber(min, max) {
	return Math.random() * (max - min) + min;
}

function reset() {
	squareWidth = getRandomNumber(10, canvasDimensions - 5);
	// squareOffsetLeft = getRandomNumber(5, canvasDimensions - squareWidth - 5);
	squareOffsetLeft = canvasMidpoint - (squareWidth / 2);
	squareOffsetTop = 5;
	squareOffsetBottom = canvasDimensions - squareWidth;
}

function init() {
	const canvas = document.getElementById('canvas');

	if (canvas.getContext) {
		// this is where we would import a certain design with the canvas object passed through it
		let ctx = canvas.getContext('2d');

		ctx.strokeStyle = "rgba(0, 0, 0, 1)";
		ctx.fillStyle = "rgba(255, 0, 0, " + getRandomNumber(0.1, 0.3) + ")";
		ctx.fillStyle = "rgba(255, 255, 255, " + getRandomNumber(0.1, 0.3) + ")";

		for (var i=0; i < 10; i++) {
			reset();
			ctx.strokeRect(squareOffsetLeft, squareOffsetBottom, squareWidth, squareWidth);
			ctx.fillRect(squareOffsetLeft, squareOffsetBottom, squareWidth, squareWidth);
		}
	}
}

// let's use a better way of onloading in the future
window.onload = init();
