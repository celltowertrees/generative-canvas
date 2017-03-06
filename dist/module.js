(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _towers = require('./towers');

var _towers2 = _interopRequireDefault(_towers);

var options = {
	elements: 50,
	canvasHeight: 200,
	canvasWidth: 200
},
    towers = new _towers2['default'](options);

document.addEventListener('DOMContentLoaded', function () {
	var reload = document.getElementsByClassName('reload')[0];

	function init() {
		towers.init(function () {
			window.requestAnimationFrame(init);
		});
	}
	window.requestAnimationFrame(init);
});

},{"./towers":2}],2:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Towers = (function () {
	function Towers(opts) {
		_classCallCheck(this, Towers);

		this.opts = opts;
	}

	Towers.prototype.getRandomNumber = function getRandomNumber(min, max) {
		return Math.random() * (max - min) + min;
	};

	/**
  * set random values every time new image is generated
  */

	Towers.prototype.reset = function reset() {
		this.opacity = this.getRandomNumber(1, 0.7);
		this.rectWidth = this.getRandomNumber(10, 100);
		this.rectHeight = this.getRandomNumber(10, this.opts.canvasHeight - 50);
		this.rectOffsetLeft = this.getRandomNumber(5, this.opts.canvasWidth - this.rectWidth - 5);
		this.rectOffsetTop = 5;
		this.rectOffsetBottom = this.opts.canvasHeight - this.rectHeight;
	};

	Towers.prototype.init = function init(callback) {
		this.canvas = document.getElementById('canvas');

		if (this.canvas.getContext) {
			// this is where we would import a certain design with the canvas object passed through it
			var ctx = canvas.getContext('2d');

			// ensure a clean slate
			ctx.clearRect(0, 0, this.opts.canvasWidth, this.opts.canvasHeight);

			for (var i = 0; i < this.opts.elements; i++) {
				this.reset();

				var gradient = ctx.createLinearGradient(this.rectOffsetLeft, this.rectOffsetBottom, this.rectWidth, this.rectHeight);

				// why don't template literals work here?
				gradient.addColorStop(0, 'rgba(135, 181, 196, 0.8)');
				gradient.addColorStop(1, 'rgba(255, 255, 255, 1)');

				ctx.fillStyle = gradient;
				// the get random number opacity stuff should really be stored in a var also
				ctx.strokeStyle = 'rgba(255, 255, 255, ' + this.opacity + ')';

				ctx.fillRect(this.rectOffsetLeft, this.rectOffsetBottom, this.rectWidth, this.rectHeight);
			}
		}

		callback();
	};

	return Towers;
})();

exports['default'] = Towers;
module.exports = exports['default'];

},{}]},{},[1]);
