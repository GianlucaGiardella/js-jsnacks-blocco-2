// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

// Creare un array OK
// Generare numeri casuali usando un ciclo e aggiungerli all'array OK
// Prendere gli elementi dell'array in posizione dispari e sommarli OK

const numberList = []
const amount = 10;
let sum = 0;

// random number generator 
for (let i = 0; i < amount; i++) {
    let random = Math.floor(Math.random() * 20) + 1;
    numberList.push(random);
}

// sum odd position array numbers
for (let i = 1; i < amount; i += 2) {
    sum += numberList[i];
}

console.log(numberList);
console.log(sum);

