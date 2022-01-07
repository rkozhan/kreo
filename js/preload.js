"use strict";

window.onload = function () {
	const preload = document.querySelector('._preload');
	preload.classList.add('_hide');
	setTimeout(() => {
		preload.remove();
		document.body.classList.remove('_lock');
	}, 800);
	console.log(preload);

}