// Crea un array vuoto. OK
// Chiedi per 6 volte all’utente di inserire un numero, OK
// se è dispari inseriscilo nell’array. OK

const OddNumbers = [];

for (let i = 0; i < 6; i++) {
    let newNumber = parseInt(prompt(`Richiesta n.${i}, inserisci un numero:`));
    if (newNumber % 2 != 0) {
        OddNumbers.push(newNumber);
    }
}

console.log(OddNumbers);
