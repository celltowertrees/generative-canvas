// TODO make this into a main app module thing
// each design should be a module
// use autoreloading or add a reload button

// should be an options object
const elements = 100,
	canvasHeight = 500,
	canvasWidth = 800;

let rectWidth,
	rectHeight,
	rectOffsetLeft,
	rectOffsetTop,
	rectOffsetBottom,
	opacity,
	canvasMidpoint = canvasWidth / 2;

function getRandomNumber(min, max) {
	return Math.random() * (max - min) + min;
}

function reset() {
	opacity = getRandomNumber(1, 0.7);
	rectWidth = getRandomNumber(10, 100);
	rectHeight = getRandomNumber(10, canvasHeight - 5);
	rectOffsetLeft = getRandomNumber(5, canvasWidth - rectWidth - 5);
	// rectOffsetLeft = canvasMidpoint - (rectWidth / 2);
	rectOffsetTop = 5;
	rectOffsetBottom = canvasHeight - rectHeight;
}

function init() {
	const canvas = document.getElementById('canvas');

	if (canvas.getContext) {
		// this is where we would import a certain design with the canvas object passed through it
		let ctx = canvas.getContext('2d');

		for (var i=0; i < elements; i++) {
			reset();

			let gradient = ctx.createLinearGradient(
				rectOffsetLeft,
				rectOffsetBottom,
				rectWidth,
				rectHeight
			);

			// why don't template literals work here?
			gradient.addColorStop(0, 'rgba(135, 181, 196, 0.8)');
			gradient.addColorStop(1, 'rgba(255, 255, 255, 1)')

			ctx.fillStyle = gradient;
			// the get random number opacity stuff should really be stored in a var also
			ctx.strokeStyle = 'rgba(255, 255, 255, ' + opacity + ')';

			ctx.fillRect(rectOffsetLeft, rectOffsetBottom, rectWidth, rectHeight);
			ctx.strokeRect(rectOffsetLeft, rectOffsetBottom, rectWidth, rectHeight);
		}
	}
}

// let's use a better way of onloading in the future
window.onload = init();
