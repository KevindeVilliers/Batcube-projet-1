//--------------NAVBAR--------------------

const burgerButtonJS = document.getElementsByClassName("burgerButton")
console.log(burgerButtonJS);
const navbarLinksJS = document.getElementsByClassName("navbarLinks")
console.log(navbarLinksJS);

burgerButtonJS[0].addEventListener('click', () => {
        navbarLinksJS[0].classList.toggle('active')
    });



// ----------------------- ESCALES ------------------------


//Mise en place des variables des classes pour comportements généralisés
const escalePoint = document.querySelectorAll(".escalePoint");
const escaleTitle = document.querySelectorAll(".escaleTitle");
const escaleText = document.querySelectorAll(".escaleText");


//STALINGRAD ------------------------------

//Mise en place des variables propres à l'escale Stalingrad
const stalingradDiv = document.getElementById("stalingradDiv");
const stalingradTitle = document.getElementById("stalingradTitle");
const stalingradText = document.getElementById("stalingradText")
let stalingradIsClicked = false;

//Apparition/Disparition du titre au passage de la souris
stalingradDiv.addEventListener("mouseover", function(event){
    stalingradTitle.style.display= "block";
});
stalingradDiv.addEventListener("mouseleave", function(event){
        stalingradTitle.style.display= "none"; 
});

//Apparition du titre et du texte propre à l'escale Stalingrad
stalingradDiv.addEventListener("click", function(){
    //Annulation des textes
    quinconcesText.style.display= "none";
    hangarsText.style.display= "none";
    citeDuVinText.style.display= "none";
    lormontText.style.display= "none";
    //Apparitions des valeurs
    stalingradText.style.display= "block";
});


//QUINCONCES --------------------------------

//Mise en place des variables propres à l'escale Quinconces
const quinconcesDiv = document.getElementById("quinconcesDiv");
const quinconcesTitle = document.getElementById("quinconcesTitle");
const quinconcesText = document.getElementById("quinconcesText")
let quinconcesIsClicked = false;

//Apparition/Disparition du titre au passage de la souris
quinconcesDiv.addEventListener("mouseover", function(event){
    quinconcesTitle.style.display= "block";
});
quinconcesDiv.addEventListener("mouseleave", function(event){
        quinconcesTitle.style.display= "none"; 
});

//Apparition du titre et du texte propre à l'escale Stalingrad
quinconcesDiv.addEventListener("click", function(){

    //Annulation des textes
    stalingradText.style.display= "none";
    hangarsText.style.display= "none";
    citeDuVinText.style.display= "none";
    lormontText.style.display= "none";
    //Apparitions des valeurs
    quinconcesText.style.display= "block";
});


//HANGARS -------------------------------

//Mise en place des variables propres à l'escale Hangars
const hangarsDiv = document.getElementById("hangarsDiv");
const hangarsTitle = document.getElementById("hangarsTitle");
const hangarsText = document.getElementById("hangarsText")
let hangarsIsClicked = false;

//Apparition/Disparition du titre au passage de la souris
hangarsDiv.addEventListener("mouseover", function(event){
    hangarsTitle.style.display= "block";
});
hangarsDiv.addEventListener("mouseleave", function(event){
        hangarsTitle.style.display= "none"; 
});

//Apparition du titre et du texte propre à l'escale Stalingrad
hangarsDiv.addEventListener("click", function(){   
    //Annulation des textes
    stalingradText.style.display= "none";
    quinconcesText.style.display= "none";
    citeDuVinText.style.display= "none";
    lormontText.style.display= "none";
    //Apparitions des valeurs
    hangarsText.style.display= "block";
});


//CITE DU VIN ----------------------------

//Mise en place des variables propres à l'escale Cite du vin
const citeDuVinDiv = document.getElementById("citeDuVinDiv");
const citeDuVinTitle = document.getElementById("citeDuVinTitle");
const citeDuVinText = document.getElementById("citeDuVinText")
let citeDuVinIsClicked = false;

//Apparition/Disparition du titre au passage de la souris
citeDuVinDiv.addEventListener("mouseover", function(event){
    citeDuVinTitle.style.display= "block";
});
citeDuVinDiv.addEventListener("mouseleave", function(event){   
        citeDuVinTitle.style.display= "none";     
});

//Apparition du titre et du texte propre à l'escale Stalingrad
citeDuVinDiv.addEventListener("click", function(){
    //Annulation des textes
    stalingradText.style.display= "none";
    quinconcesText.style.display= "none";
    hangarsText.style.display= "none";
    lormontText.style.display= "none";
    //Apparitions des valeurs
    citeDuVinText.style.display= "block";
});


//LORMONT --------------------------------

//Mise en place des variables propres à l'escale Lormont
const lormontDiv = document.getElementById("lormontDiv");
const lormontTitle = document.getElementById("lormontTitle");
const lormontText = document.getElementById("lormontText")
let lormontIsClicked = false;

//Apparition/Disparition du titre au passage de la souris
lormontDiv.addEventListener("mouseover", function(event){
    lormontTitle.style.display= "block";
});
lormontDiv.addEventListener("mouseleave", function(event){
        lormontTitle.style.display= "none";
});

//Apparition du titre et du texte propre à l'escale Stalingrad
lormontDiv.addEventListener("click", function(){
    //Annulation des textes
    stalingradText.style.display= "none";
    quinconcesText.style.display= "none";
    hangarsText.style.display= "none";
    citeDuVinText.style.display= "none";
    //Apparitions des valeurs
    lormontText.style.display= "block";
});

/* -----------Amélioration de la partie Escales -----------------------

const escales =[
    {name: "Stalingrad", 
    div: document.getElementById("stalingradDiv"), 
    title: document.getElementById("stalingradTitle"), 
    text: document.getElementById("stalingradText"), 
    },

    {name: "Quinconces", 
    div: document.getElementById("quinconcesDiv"), 
    title: document.getElementById("quinconcesTitle"), 
    text: document.getElementById("quinconcesText"), 
    },

    {name: "Hangars", 
    div: document.getElementById("hangarsDiv"),
    title: document.getElementById("hangarsTitle"),
    text: document.getElementById("hangarsText"),
    },

    {name: "Cité du vin", 
    div: document.getElementById("citeDuVinDiv"),
    title: document.getElementById("citeDuVinTitle"), 
    text: document.getElementById("citeDuVinText"), 
    },

    {name: "Lormont", 
    div: document.getElementById("lormontDiv"), 
    title: document.getElementById("lormontTitle"), 
    text: document.getElementById("lormontText"), 
    }
]


escales.forEach(element, function(this){
    this.div.addEventListener("mouseover", function(event){
        this.title.style.display= "block";
    });
    this.div.addEventListener("mouseleave", function(event){
        if (!this.IsClicked){
            this.title.style.display= "none";
        };    
    });
})

escales.forEach(element, function(this){
    this.Div.addEventListener("click", function(){
        this.IsClicked = true;
        this.title.style.display="block";
        this.text.style.display= "block";
    });
})*/



//--------------RESERVATION-------------------

const reservationButtonJS = document.getElementsByClassName("reservationButton");
console.log(reservationButtonJS);

reservationButtonJS[0].addEventListener('click', () => {
    alert('trajet réservé !');
});

//-----------------CONTACT---------------------
const buttonContact = document.querySelector(".buttonContactStyle");

buttonContact.addEventListener("click", function(){
    alert("Sent !");
})

