Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione

Creare un carosello come nella foto allegata.
Milestone 0:
Analizzate l'html statico (è una base da cui partire) del carosello per comprenderne al meglio la struttura da manipolare.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce , l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.
BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

Ecco i dati da utilizzare:
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

1) inserire le immagini nell'html
2) inserire top: 0 nel codice css della freccia prev
 .prev {top: 0;}
3) la classe active è quella che mostra l'immagine nel carosello

4) struttura incollata in js: const images [{...}]
    - è un array quindi può essere iterato
    - nell'array = oggetti
    - negli ogeetti = chiavi
    - chiavi = immagini + titolo + testo
    - immagini = percorso delle immagini webp
    - titolo = stringa, poiché tra virgolette "" (visto che l'apostrofo Marvel's rompe la stringa)
    - testo = stringa, poiché tra apici

5) fare un console.log(images) = array 5 elementi con dentro oggetti

6) MILESTONE 1
    - rimuovere i contenuti statici
    - al click dell'utente l'immagine si visualizza con titolo e testo

il modo in cui si decide di operare adesso andrà a condizionare le possibilità che avremo con html e css

PRIMO METODO = replicare in javascript ciò che succede in html, per ogni elemento che ho nell'array vado a creare un ciclo per inserire gli elementi nel div class items. ci spostiamo sempre nella nostra struttura dati di partenza.

- creare costanti per ogni elemento, quindi items, content h2, content p

- nelle strutture IF {} ELSE {} degli elementi .prev e .next
    currentImage++ currentImage--

- creare una funzione setContent() da invocare sia all'inizio sia dopo le strutture IF-ELS di .prev e .next

____________________________________________________________________________________________________________________________________

SECONDO METODO = nella pagina vedo sempre e solo un'immagine, le altre sono nascoste. l'immagine se ha la classe active la vedo, altrimenti no. quando clicco su una freccia potrei creare un elemento che visualizzi l'immagine. potremmo attribuire al click sulle frecce la visualizzazione dell'immagine. così facendo però si appesantissce il risultato, le immagini non sono state già caricate nella pagina, ciò comporta un rallentamento per ogni volta che si scorre un'immagine, soprattutto perché in futuro le immagini saranno in un server e non nel nostro pc. il secondo metodo è sì valido ma sconsigliato per le performances.

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let currentImage = 0; console.log(currentImage);

prev.addEventListener( 'click, function() {console.log("Ho cliccato su prev"); currentImage-- });
next.addEventListener( 'click, function() {console.log("Ho cliccato su next"); currentImage++ });

// adesso bisognerà dire "quando arrivo al limite delle immagini, fermati"
// qual è la prima immagine da visualizzare? bisogna lavorare sugli indici
// come si mette un'immagine in posizione zero?

// prendiamo l'elemento immagine
const image = document.querySelector (".item img");

// adesso quando carico l'immagine possiamo inserire la struttura dati
// image.src = images[currentImage].image; 

    6.2) al click dell'utente l'immagine si visualizza con titolo e testo

    - manipolare il css
    - div classe content avrà
    {position: absolute; bottom: o; left: 0; padding: 30px; background: #ffff con 0.5 di opacity; width: 100%; text-align: right; color: #ffff}

    6.3) impostare dei limiti al carosello basandosi sulla lunghezza dell'array [0, 1, 2, 3, 4]

    - prev avrà una struttura if {>0} così non andrà indietro
    - next avrà una struttura if {>3} perché non si può arrivare a 4 altrimenti si sborda

7) MILESTONE 2
- ciclo infinito
- da 0 si va a 4
- da 4 si va a 0

l'array ha una lunghezza, un indice, delle posizioni
si potrebbe quindi agire così:
STRUTTURA IF {} ELSE {}

- NEL PREV = else 
- NEL NEXT = else {currentImage = 0;} //quindi torna all'inizio
    la funzione setCurrentImage viene spostata fuori dalla struttura IF{}ELSE{}

____________________________________________________________________________________________________________________________________

BONUS 1 = aggiungere a destra le thumbnails sotto forma di miniatura e al click di un0immagine gestire lo switch delle thumbnails

CSS
- sfruttiamo il flex del .container per inserire a destra un altro div .thumbs
- .thumbs {height: 300px; width: 150px;}
- .thumb {height: calc(100% / 5): }
- .thumb .active {border: 1px solid white}
HTML
- inseriamo una img nelle thumb
- posizioniamo le frecce .prev e .next nelle thumbs

______

parametrizzare la funzione in cui appendiamo elementi

const thumbs = document.querySelector(".thumbs);



