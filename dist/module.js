(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// TODO make this into a main app module thing
// each design should be a module
// use autoreloading or add a reload button

'use strict';

var squareWidth = undefined,
    squareOffsetLeft = undefined,
    squareOffsetTop = undefined,
    squareOffsetBottom = undefined,
    canvasDimensions = 500,
    canvasMidpoint = canvasDimensions / 2;

function getRandomNumber(min, max) {
	return Math.random() * (max - min) + min;
}

function reset() {
	squareWidth = getRandomNumber(10, canvasDimensions - 5);
	squareOffsetLeft = getRandomNumber(5, canvasDimensions - squareWidth - 5);
	// squareOffsetLeft = canvasMidpoint - (squareWidth / 2);
	squareOffsetTop = 5;
	squareOffsetBottom = canvasDimensions - squareWidth;
}

function init() {
	var canvas = document.getElementById('canvas');

	if (canvas.getContext) {
		// this is where we would import a certain design with the canvas object passed through it
		var ctx = canvas.getContext('2d');

		ctx.strokeStyle = 'rgba(255, 255, 255, 1)';

		// i dont know why the template literals dont work here
		// ctx.fillStyle = 'rgba(255, 255, 255, ' + getRandomNumber(0.1, 0.3) + ')';
		// ctx.fillStyle = gradient;

		for (var i = 0; i < 10; i++) {
			reset();
			var gradient = ctx.createLinearGradient(squareOffsetLeft, squareOffsetBottom, squareWidth, squareWidth);

			gradient.addColorStop(0, 'rgba(255, 255, 255, 0.5)');
			gradient.addColorStop(1, 'rgba(0, 0, 0, 0.5)');

			ctx.fillStyle = gradient;

			ctx.fillRect(squareOffsetLeft, squareOffsetBottom, squareWidth, squareWidth);
			ctx.strokeRect(squareOffsetLeft, squareOffsetBottom, squareWidth, squareWidth);
		}
	}
}

// let's use a better way of onloading in the future
window.onload = init();

},{}],2:[function(require,module,exports){
'use strict';

require('./import');

},{"./import":1}]},{},[2]);
