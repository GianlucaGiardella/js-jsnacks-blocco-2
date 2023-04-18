// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

// Creare un array OK
// Generare numeri casuali usando un ciclo e aggiungerli all'array OK
// Prendere gli elementi dell'array in posizione dispari e sommarli OK

const numberList = []
let sum = 0;

// random number generator 
for (let i = 0; i < 10; i++) {
    let random = Math.floor(Math.random() * 20) + 1;
    numberList.push(random);
}
console.log(numberList);


// debugger;
// sum odd position numbers in array
for (let i = 1; i < 10; i += 2) {
    sum += numberList[i];
}
console.log(sum);

