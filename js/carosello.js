'use strict';

// creo array contenente gli oggetti segnalati

const images = [
    {image: 'img/01.webp', title: 'Marvel\'s Spiderman Miles Morale', text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',}, 
    {image: 'img/02.webp', title: 'Ratchet & Clank: Rift Apart', text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',},
    {image: 'img/03.webp', title: 'Fortnite', text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting,crafting, shootouts and chaos.",},
    {image: 'img/04.webp', title: 'Stray', text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',},
    {image: 'img/05.webp', title: "Marvel's Avengers", text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',}
];

// Ref HTML
const items = document.querySelector('.items');
const prev = document.querySelector('.prev');
// const next = document.querySelector('.next');

// tiene traccia della slide attiva
// e imposta la slide di default
let activeSlide = 0;

// console.log(images[0]);
// console.log(images[1]);
// console.log(images[2]);

// loop ci permette di iterare un array da inizio a fine
for(let i = 0; i < images.length; i++) {
    console.log(images[i]);
    const slide = images[i];

    // output dinamico HTML delle singole slide
    items.innerHTML +=  `<div class="item">
        <img src="${slide.image}" alt="${slide.title}">
        <h3>${slide.title}</h3>
        <p>${slide.text}</p>
    </div>`;
}

const slides = document.querySelectorAll('.item');
slides[activeSlide].classList.add('active');

const next = document.querySelector(".next");
next.addEventListener("click", function() {
    console.log("Ho cliccato su next");

    // increment activeSlide
    
    if(activeSlide == images.length -1) {
        activeSlide = 0
    } else {
        activeSlide += 1;
    }
    
    // reset old active slide
    document.querySelector('.item.active').classList.remove('active')

    // set new active slide
    slides[activeSlide].classList.add('active');
}
);


/* creo costanti per ogni elemento html da gestire successivamente. gli elementi li seleziono con il querySelector in modo da non andare a modificare html perché non sempre in futuro sarà possibile averne accesso */


// const div = document.querySelector('.item');

// console.log(items); console.log(prev); console.log(next); console.log(document);

// utilizzo il metodo degli array: forEach per ciclare attraverso l'array images: images.forEach()

// images.forEach()



