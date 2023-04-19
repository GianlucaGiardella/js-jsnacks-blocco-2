// 3) snack 2.3
// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

const numberList = []
const amount = 10;
let sum = 0;

// random number generator 
for (let i = 0; i < amount; i++) {
    const random = Math.floor(Math.random() * 10) + 1;
    numberList.push(random);
}

// sum odd position array numbers
for (let i = 1; i < amount; i += 2) {
    sum += numberList[i];
}

console.log(numberList);
console.log(sum);

