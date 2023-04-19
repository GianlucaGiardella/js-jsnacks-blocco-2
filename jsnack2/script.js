// 2) snack 2.2
// Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.

const nameList = [
    "Bradd",
    "Leonardo",
    "George",
    "Tom",
    "Morgan",
    "Angelina",
    "Jennifer",
    "Julia",
    "Sandra",
    "Scarlett"
];

const lastNameList = [
    "Pitt",
    "DiCaprio",
    "Clooney",
    "Cruise",
    "Freeman",
    "Jolie",
    "Aniston",
    "Roberts",
    "Bullock",
    "Johansson"
];

const newList = [];

for (let i = 0; i < 10; i++) {
    const randomName = Math.floor(Math.random() * ((nameList.length - 1) + 1));
    const randomLastName = Math.floor(Math.random() * ((nameList.length - 1) + 1));

    const finalName = nameList[randomName] + " " + lastNameList[randomLastName];
    newList.push(finalName);
}

console.log(newList);

