//--------------SWITCHMODE--------------------
let isDark = false;
const switchMode = document.getElementById("switchContainer");
const root = document.querySelector(":root");
const batLogo = document.getElementById("batLogo");
const tbmLogo = document.querySelector(".tbmLogo");
const wildLogo = document.querySelector(".wildLogo");
switchMode.addEventListener("click", ()=>{
	if (!isDark){	
		isDark = true;
		root.style.setProperty('--body-color', '#4f5053', 'important');
		root.style.setProperty('--text-color', '#ae9606', 'important');
		root.style.setProperty('--link-color', '#fdff00', 'important');
		root.style.setProperty('--block-color', '#242424', 'important');
		root.style.setProperty('--shadow-color', '#242424', 'important');
		batLogo.src = "src/BatCubeLogoDark.png";
		tbmLogo.src = "src/TBMLogoDark.png";
		wildLogo.src = "src/WildLogoDark.png";
		switchMode.style.flexDirection = "row-reverse";

	} else {
		isDark = false;
		root.style.setProperty('--body-color', 'white', 'important');
		root.style.setProperty('--text-color', '#242424', 'important');
		root.style.setProperty('--link-color', 'blue', 'important');
		root.style.setProperty('--block-color', 'lightgrey', 'important');
		root.style.setProperty('--shadow-color', '#777777', 'important');
		batLogo.src = "src/BatCubeLogoLight.png";
		tbmLogo.src = "src/TBMLogoLight.png";
		wildLogo.src = "src/WildLogoLight.png";
		switchMode.style.flexDirection = "row";
	}
})


//--------------NAVBAR--------------------

const burgerButtonJS = document.querySelector('.burgerButton');
const navbarLinksJS = document.querySelector('.navbarLinks');

burgerButtonJS.addEventListener('click', () => {
	navbarLinksJS.classList.toggle('active')
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
