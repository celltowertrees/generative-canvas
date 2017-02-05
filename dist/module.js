(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var squareWidth = undefined,
    squareWidthPrevious = undefined,
    squareOffset1 = undefined,
    squareOffset2 = undefined,
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
	var canvas = document.getElementById('canvas');

	if (canvas.getContext) {
		var ctx = canvas.getContext('2d');

		ctx.strokeStyle = "rgba(255, 0, 0, 1)";
		ctx.fillStyle = "rgba(255, 0, 0, " + getRandomNumber(0.1, 0.3) + ")";

		for (var i = 0; i < 10; i++) {
			reset();
			ctx.fillRect(squareOffset1, squareOffset2, squareWidth, squareWidth);
			squareWidthPrevious = squareWidth;
		}
	}
	console.log('fuck, man');
}

window.onload = init();

var boring = 'boring';

exports.boring = boring;

},{}],2:[function(require,module,exports){
'use strict';

var _import = require('./import');

},{"./import":1}]},{},[2]);
