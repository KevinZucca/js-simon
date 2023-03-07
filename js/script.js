// Visualizzare in pagina 5 numeri casuali
// Far partire un timer di 10 secondi
// I numeri scompaiono al time out e l utente deve inserire uno alla volta i numeri che erano comparsi tramite prompt
// Il software dice quanti e quali numeri sono stati individuati 


// Creare una funzione che generi 5 numeri random da un array e farli comparire in pagina
// Creare una timing function che faccia partire un timer di 10 secondi
// al time out dare display none ai numeri 
// Inserire un prompt che chieda i 5 numeri 
// Salvare in un array questi numeri che saranno confrontati con l altro array
// Dichiarare in pagina i numeri indovinati 



//carico l'elemento h2 dove verranno generati i numeri della funzione e il container di tutti gli elementi
const quizNumbersEl = document.getElementById("quiz-numbers");
const containerEl = document.getElementById("container");
const answerContainerEl = document.getElementById("answer-container");
let firstAnswer = document.getElementById("first-answer");
let secondAnswer = document.getElementById("second-answer");
let thirdAnswer = document.getElementById("third-answer");
let fourthAnswer = document.getElementById("fourth-answer");
let fifthAnswer = document.getElementById("fifth-answer");

const playButtonEl = document.getElementById("play-button");



//specifico il contenuto di h2 collegando l'array
let botNumbers = generateRandomNumbers(5, 100);
quizNumbersEl.innerHTML = botNumbers.join(" - ");
console.log(botNumbers);

setTimeout (askMeNumbers, 5000) 


/**
 * Funzione che fa sparire i numeri e genera le domande
 * @returns {any}
 */
function askMeNumbers() {
    quizNumbersEl.style.display = ("none")
    const message = document.createElement ("h2");
    containerEl.append (message)
    message.textContent = "Indovina i 5 numeri";

    answerContainerEl.style.display = ("flex")


    playButtonEl.addEventListener("click", function(){
        let userNumbers = []
        userNumbers.push (Number(firstAnswer.value));
        userNumbers.push (Number(secondAnswer.value));
        userNumbers.push (Number(thirdAnswer.value));
        userNumbers.push (Number(fourthAnswer.value));
        userNumbers.push (Number(fifthAnswer.value));

        let correctNumbers = [];

        for (let i = 0 ; i < botNumbers.length; i++) {
            if (userNumbers.includes(botNumbers[i])) {
                correctNumbers.push(botNumbers[i]);
            }
        }
        console.log(`Hai indovinato ${correctNumbers.length} numeri: ${correctNumbers.join(", ")}`);
    })
  
}





/**
 * Funzione alla quale vengono dati la massima lunghezza dell'array e un range massimo di numeri 
 * e genera tot numeri random
 * @param {number} maxLength
 * @param {number} rangeNumber
 * @returns {array}
 */
function generateRandomNumbers (maxLength, rangeNumber ) {
    array = [];
    let randomNumber;
    for (let i = 1; i <= maxLength; i++ ) {
        randomNumber = Math.floor(Math.random() * rangeNumber + 1);
        if (!array.includes(randomNumber)){
        array.push (randomNumber);
    }
    }
    return array;
}


