const images = [
	{
		image: '01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: '02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: '03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: '04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: '05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
];

const eleSlider = document.querySelector('.slider');
const eleBtnTop = document.querySelector('.btn-top');
const eleBtnBottom = document.querySelector('.btn-bottom');

for (let i = 0; i < images.length; i++) {
	// const eleImg = document.createElement('img');
	// eleImg.src = arrImages[i];
	// eleImg.classList.add('slider-img');
	eleSlider.innerHTML += `
	<div>
		<img class="img slider-img active" src="img/${images[i].image}" alt="">
		<h1>${images[i].title}</h1>
		<p>${images[i].text}</p>
	</div>
	`
	// let eleImg = images[i].image
	// if (i === 0) {
	// 	eleImg.classList.add('active');
	// }

	// eleSlider.append(eleImg);
}

const listEleImg = document.querySelectorAll('.slider-img');

let activeCounter = 0

eleBtnBottom.addEventListener('click', function () {

    listEleImg[activeCounter].classList.remove('active');

	if (activeCounter === 4) {
		activeCounter = -1;
	}
	
    activeCounter++;

    listEleImg[activeCounter].classList.add('active');

});

eleBtnTop.addEventListener('click', function () {
	listEleImg[activeCounter].classList.remove('active');
	
	
	if (activeCounter === 0) {
		activeCounter = 5;
	}

	activeCounter--;

	listEleImg[activeCounter].classList.add('active');

});


