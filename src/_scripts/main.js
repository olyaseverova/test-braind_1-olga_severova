'use strict';

(function () {

	var ENTER_KEYCODE = 13;

	var detailElement = document.querySelector('.comment-mention__detail');
	var textElement = document.querySelector('.comment-mention__text');
	var additionallyElement = document.querySelector('.comment-mention__additionally');

	var fotosElement = document.querySelector('.comment-button');
	var popapElement = document.querySelector('.popap');
	var popapCloseElement = document.querySelector('.popap-close');

	var showDetails = function () {
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


	var showPopap = function () {
		popapElement.classList.add('modal-show');
	};

	var closePopap = function () {
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


