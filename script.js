let buttoncolor = document.querySelector('#buttoncolor');
let tekst4 = document.querySelector('#tekst4')
buttoncolor.addEventListener("click", functiekleur);
function functiekleur() {
    tekst4.style.backgroundColor = "green";
    tekst4.innerHTML = "tekst";
}


let kirbys = document.querySelector("#tekst3");
let button = document.querySelector('#mybutton');
let tekst = document.querySelector('#text');

if(button) {
    button.addEventListener('click', functie);

}

function functie(){
    console.log(tekst.value);
    if(tekst.value == '1') {kirbys.style.backgroundImage = "URL('img/kirby1.jpg')";}
    else if(tekst.value == '2') {kirbys.style.backgroundImage = "URL('img/kirby2.jpg')";}
    else if(tekst.value == '3') {kirbys.style.backgroundImage = "URL('img/kirby3.jpg')";}
    else if(tekst.value == '4') {kirbys.style.backgroundImage = "URL('img/kirby4.jpg')";}
    else if(tekst.value == '5') {kirbys.style.backgroundImage = "URL('img/kirby5.jpg')";}
    else if(tekst.value == '6') {kirbys.style.backgroundImage = "URL('img/kirby6.jpg')";}
    else if(tekst.value == '7') {kirbys.style.backgroundImage = "URL('img/kirby7.jpg')";}
    else if(tekst.value == '8') {kirbys.style.backgroundImage = "URL('img/kirby8.jpg')";}
    else if(tekst.value == '9') {kirbys.style.backgroundImage = "URL('img/kirby9.jpg')";}
    else if(tekst.value == '10') {kirbys.style.backgroundImage = "URL('img/kirby10.jpg')";}

    else {kirbys.style.backgroundImage = "URL('img/kirbyerror.jpg')";

    }
    
    
}