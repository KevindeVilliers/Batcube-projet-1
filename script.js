//--------------NAVBAR--------------------

const burgerButtonJS = document.querySelector('.burgerButton');
const navbarLinksJS = document.querySelector('.navbarLinks');

burgerButtonJS.addEventListener('click', () => {
	navbarLinksJS.classList.toggle('active');
});

// ----------------------- ESCALES ------------------------

//Mise en place des variables des classes pour comportements généralisés
const escaleText = document.querySelectorAll('.escaleText');


function initEscales(titleElement, bubbleElement, contentElement) {
	// Apparition/Disparition du titre au passage de la souris
	bubbleElement.addEventListener('mouseover', function(event) {
		titleElement.style.display = 'block';
	});

	bubbleElement.addEventListener('mouseleave', function(event) {
		titleElement.style.display = 'none';
	});

	// Apparition du titre et du texte propre à l'escale Stalingrad
	bubbleElement.addEventListener('click', function() {
		// Masquage des textes
		escaleText.forEach(element => {
			element.style.display = 'none';
		});

		// Apparitions des valeurs
		contentElement.style.display = 'flex';
	});
}

const escales = [
	{ title: 'hangarsTitle', bubble: 'hangarsDiv', text: 'hangarsText' },
	{ title: 'citeDuVinTitle', bubble: 'citeDuVinDiv', text: 'citeDuVinText' },
	{ title: 'lormontTitle', bubble: 'lormontDiv', text: 'lormontText' },
	{ title: 'stalingradTitle', bubble: 'stalingradDiv', text: 'stalingradText' },
	{ title: 'quinconcesTitle', bubble: 'quinconcesDiv', text: 'quinconcesText' },
];

escales.forEach(function(escale) {
	initEscales(
		document.getElementById(escale.title), 
		document.getElementById(escale.bubble), 
		document.getElementById(escale.text)
	);
});



//--------------RESERVATION-------------------

const reservationButtonJS = document.querySelector('.reservationButton');

reservationButtonJS.addEventListener('click', () => {
	alert('trajet réservé !');
});

//-----------------CONTACT---------------------
const buttonContact = document.querySelector('.buttonContactStyle');

buttonContact.addEventListener('click', function() {
	alert('Sent !');
});
