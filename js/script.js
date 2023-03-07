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
const quizNumbersEl = document.getElementById("quiz-numbers")
const containerEl = document.getElementById("container")

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

    let userNumbers = []

    let answer1 = Number(prompt("Inserisci il primo numero"));
    let answer2 = Number(prompt("Inserisci il secondo numero"));
    let answer3 = Number(prompt("Inserisci il terzo numero"));
    let answer4 = Number(prompt("Inserisci il quarto numero"));
    let answer5 = Number(prompt("Inserisci il quinto numero"));

    userNumbers.push (answer1);
    userNumbers.push (answer2);
    userNumbers.push (answer3);
    userNumbers.push (answer4);
    userNumbers.push (answer5);

    let correctNumbers = [];

    for (let i = 0 ; i < botNumbers.length; i++) {
        if (userNumbers.includes(botNumbers[i])) {
            correctNumbers.push(botNumbers[i]);
        }
    }
    console.log(`Hai indovinato ${correctNumbers.length} numeri: ${correctNumbers.join(", ")}`);
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


