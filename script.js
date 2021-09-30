const burgerButtonJS = document.getElementsByClassName("burgerButton")
console.log(burgerButtonJS);
const navbarLinksJS = document.getElementsByClassName("navbarLinks")
console.log(navbarLinksJS);

burgerButtonJS[0].addEventListener('click', () => {
        navbarLinksJS[0].classList.toggle('active')
    });

const reservationButtonJS = document.getElementsByClassName("reservationButton");
console.log(reservationButtonJS);

reservationButtonJS[0].addEventListener('click', () => {
    alert('trajet réservé !');
});

const buttonContact = document.querySelector(".buttonContactStyle");

buttonContact.addEventListener("click", function(){
    buttonContact.href = "#";
    buttonContact.value ="Sent !"; 
})