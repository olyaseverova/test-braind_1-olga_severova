(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

(function () {

	var ENTER_KEYCODE = 13;

	var detailElement = document.querySelector('.comment-mention__detail');
	var textElement = document.querySelector('.comment-mention__text');
	var additionallyElement = document.querySelector('.comment-mention__additionally');

	var fotosElement = document.querySelector('.comment-button');
	var popapElement = document.querySelector('.popap');
	var popapCloseElement = document.querySelector('.popap-close');

	var showDetails = function showDetails() {
		textElement.classList.add('show-additionally');
		additionallyElement.classList.add('block');
		detailElement.classList.add('detail-move');
	};

	detailElement.addEventListener('mousedown', function () {
		showDetails();
	});

	detailElement.addEventListener('keydown', function (evt) {
		if (evt.keyCode === ENTER_KEYCODE) {
			showDetails();
		}
	});

	var showPopap = function showPopap() {
		popapElement.classList.add('modal-show');
	};

	var closePopap = function closePopap() {
		popapElement.classList.remove('modal-show');
	};

	fotosElement.addEventListener('mousedown', function () {
		showPopap();
	});

	fotosElement.addEventListener('keydown', function (evt) {
		if (evt.keyCode === ENTER_KEYCODE) {
			showPopap();
		}
	});

	popapCloseElement.addEventListener('mousedown', function () {
		closePopap();
	});

	popapCloseElement.addEventListener('keydown', function (evt) {
		if (evt.keyCode === ENTER_KEYCODE) {
			closePopap();
		}
	});
})();

},{}]},{},[1])

//# sourceMappingURL=main.js.map
