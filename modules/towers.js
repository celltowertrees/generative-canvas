

class Towers {

	constructor(opts) {
		this.opts = opts;
	}

	getRandomNumber(min, max) {
		return Math.random() * (max - min) + min;
	}

	/**
	 * set random values every time new image is generated
	 */
	reset() {
		this.opacity = this.getRandomNumber(1, 0.7);
		this.rectWidth = this.getRandomNumber(10, 100);
		this.rectHeight = this.getRandomNumber(10, this.opts.canvasHeight - 5);
		this.rectOffsetLeft = this.getRandomNumber(5, this.opts.canvasWidth - this.rectWidth - 5);
		this.rectOffsetTop = 5;
		this.rectOffsetBottom = this.opts.canvasHeight - this.rectHeight;
	}

	init() {
		this.canvas = document.getElementById('canvas');

		if (this.canvas.getContext) {
			// this is where we would import a certain design with the canvas object passed through it
			let ctx = canvas.getContext('2d');

			for (var i=0; i < this.opts.elements; i++) {
				this.reset();

				let gradient = ctx.createLinearGradient(
					this.rectOffsetLeft,
					this.rectOffsetBottom,
					this.rectWidth,
					this.rectHeight
				);

				// why don't template literals work here?
				gradient.addColorStop(0, 'rgba(135, 181, 196, 0.8)');
				gradient.addColorStop(1, 'rgba(255, 255, 255, 1)')

				ctx.fillStyle = gradient;
				// the get random number opacity stuff should really be stored in a var also
				ctx.strokeStyle = 'rgba(255, 255, 255, ' + this.opacity + ')';

				ctx.fillRect(
					this.rectOffsetLeft,
					this.rectOffsetBottom,
					this.rectWidth,
					this.rectHeight
				);

				ctx.strokeRect(
					this.rectOffsetLeft,
					this.rectOffsetBottom,
					this.rectWidth,
					this.rectHeight
				);
			}
		}
	}
}

export default Towers;