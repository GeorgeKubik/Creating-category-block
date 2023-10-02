window.addEventListener('DOMContentLoaded', () => {

	'use strict';

	const cards = document.querySelectorAll('.category__card');
	const cardscategory = document.querySelector('.category__cards');
	const leafGreen = document.querySelector('.category__leaf-green');
	const leafBrown = document.querySelector('.category__leaf-brown');


	cards.forEach((item, index) => {
		let count = 0
		item.addEventListener('mouseover', () => {
			count = index;
			console.log(count);
			if (count === 0) {
				leafGreen.style = `transform: translate(-8px, -8px)`;
				leafBrown.style = `transform: translate(8px, 8px)`;
			}
			if (count > 0) {
				leafGreen.style = `transform: translate(${count * 8 - 8}px, -8px)`;
				leafBrown.style = `transform: translate(${count * 8 - 8}px, 8px)`;
			}
			if (count > 1) {
				leafBrown.style = `transform: translate(-${count * 8 - 8}px, 8px)`;
			}
		})
		item.addEventListener('mouseout', () => {
			if (count === 0) {
				leafGreen.style = `transform: translate( 0px, 0px)`;
				leafBrown.style = `transform: translate( 0px, 0px)`;
			}
			if (count > 0) {
				leafGreen.style = `transform: translate( ${count * 8 - 8}px, 0px)`;
				leafBrown.style = `transform: translate(${count * 8 - 8}px, 0px)`;
			}
			if (count > 1) {
				leafBrown.style = `transform: translate(-${count * 8 - 8}px, 0px)`;
			}
		})
	})
});