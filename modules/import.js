let squareWidth,
	squareWidthPrevious,
	squareOffset1,
	squareOffset2,
	canvasDimensions = 500;

function getRandomNumber(min, max) {
	return Math.random() * (max - min) + min;
}

function reset() {
	squareWidth = getRandomNumber(10, canvasDimensions - 5);
	squareOffset1 = getRandomNumber(5, canvasDimensions - squareWidth - 5);
	squareOffset2 = getRandomNumber(5, canvasDimensions - squareWidth - 5);
}

function init() {
	const canvas = document.getElementById('canvas');

	if (canvas.getContext) {
		let ctx = canvas.getContext('2d');

			ctx.strokeStyle = "rgba(255, 0, 0, 1)";
		ctx.fillStyle = "rgba(255, 0, 0, " + getRandomNumber(0.1, 0.3) + ")";

		for (var i=0; i < 10; i++) {
			reset();
			ctx.fillRect(squareOffset1, squareOffset2, squareWidth, squareWidth);
			squareWidthPrevious = squareWidth;
		}
	}
	console.log('fuck, man');
}

window.onload = init();

let boring = 'boring';

export {
	boring
};