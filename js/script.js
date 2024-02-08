/* 
Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali e inserirli in un array, in base al range della difficoltà prescelta (se abbiamo scelto facile l'array conterrà numeri casuali da 1 a 100, se invece abbiamo scelto difficile l'array dovrà contenerne da 1 a 49): questi rappreseranno le posizioni delle nostre bombe :bomba:.
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
*/




// pendiasmo la nostra griglia
// creiamo un ciclo for
    // per ogni iterazione creiamo una cella nella grigli
const buttonElement = document.querySelector("#start");
/* console.log(buttonElement); */
buttonElement.addEventListener("click", function() {
    //salvo la griglia in una variabile
    const gridElement = document.querySelector("#grid");
    /* console.log(gridElement);*/

    //codice per generare la griglia
    let squareNumber;
    //test per la select : stampiamone il valore
    const selectElement = document.querySelector("#difficolta");
    console.log(selectElement.value);
    if(selectElement.value == "easy"){
        squareNumber = 100;
      // gridElement.className = "easy";
    } else if (selectElement.value == "medium"){
        squareNumber = 81;
      // gridElement.className = "medium";
    } else{
        squareNumber = 49;
     // gridElement.className = "hard";
    }
    // per ottimizzare meglio
    gridElement.className = selectElement.value;
   
    // resetto la griglia in modo che al nuovpo click del pulsante non aggiunga altre griglie
    gridElement.innerHTML="";
    // faccio comparire la griglia
    gridElement.style.display = "flex";
    const RandomNumbersArray = getRandomNumbersArray();
    console.log(RandomNumbersArray);
    //griglia 10x10
    for (let i = 0; i < squareNumber ; i++){ // metto 'squareNumber' e non un numero in modo che possa cambiarlo in base alla difficoltà
        // per ognunodi questi creare un elemento 
        const newElement = document.createElement("div");
        /* console.log(newElement); */
        // ci aggiungo la classe
        newElement.classList.add("square");
        newElement.innerText = RandomNumbersArray[i] ; // per scrivere all'interno degli square i numeri da 1 a 100 CASUALI
        /* newElement.innerText = i + 1 ; */ // per scrivere all'interno degli square i numeri da 1 a 100 ORDINATI
 
        //all'interno di se stesso ci aggiungo il nostro newElement
        gridElement.append(newElement);

        newElement.addEventListener("click", function(){
            /* console.log("click"); */
            /* console.log(this); */ //per vedere dove agisce il this
            //per mezzo di 'this' aggiungo una classe
            this.classList.toggle("active");
           // newElement.classList.add("even");
            //newElement.classList.add("odd");
            //voglio avere in console il numero
            console.log(this.innerText);
    })

    }
})



//TEST-TEST-TEST-TEST-TEST-TEST-TEST-TEST-TEST-TEST-TEST-TEST
//faccio la funzione per creare i numeri casuali all'interno degli square

function getRandomNumber(maxNumber){

    const randomNumber = Math.floor(Math.random() * maxNumber) + 1;

    return randomNumber;

}
getRandomNumbersArray();
function getRandomNumbersArray(){

    const numbersArray = [];

    while(numbersArray.length < 100){
    //numbersArray.push(getRandomNumber(100));     
        // console.log(numbersArray); 
        // insrisci il numero solo se non è già presente
        const newNumber = getRandomNumber(100) ;
        //controllo se il numero è già presente nel nostro array
        if( ! numbersArray.includes(newNumber)){
            numbersArray.push(newNumber);
        }
    
    }
    // per farlo apparire in pagina devo fare il return del mio array
    return numbersArray;
}


//Il computer deve generare 16 numeri casuali e inserirli in un array
//in base al range della difficoltà prescelta 
//(se abbiamo scelto facile l'array conterrà numeri casuali da 1 a 100, se invece abbiamo scelto difficile l'array dovrà contenerne da 1 a 49)
//questi rappreseranno le posizioni delle nostre bombe.

// creo una funzioneche mi inserisca in un array 16 numeri:
/* computerRandomNumbers();
function computerRandomNumbers() {
    const computerArray = [];
    while(computerArray.length < 17){
        const computerNumber = getRandomNumber(16);
        console.log(computerNumber);
        if( ! computerArray.includes(computerNumber)){
            computerArray.push(computerNumber);
        }
    }
    // per farlo apparire in pagina devo fare il return del mio array
    return computerArray;
} */