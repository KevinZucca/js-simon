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



//carico l'elemento h2 dove verranno generati i numeri della funzione
const quizNumbersEl = document.getElementById("quiz-numbers")

//specifico il contenuto di h2 collegando l'array
let botNumbers = generateRandomNumbers(5, 100)
quizNumbersEl.innerHTML = botNumbers.join(" - ")
console.log(botNumbers)









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