console.log("script is running")
// Functionaliteit bouwen
// Opdracht 1 - Array Methoden
// Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.
//     Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.
// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.
// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.

//1a
//create variable and map by array
const tvNames =
inventory.map((tvNames) =>{
    return tvNames.name
});
// create a function with a callback return outcome

console.log(tvNames)
// log outcome


//1B
//create variable and map by array

const tvSoldOut =
    inventory.filter((soldOut) => {
    return soldOut.sold === soldOut.originalStock
});
// create a function with a callback return outcome


console.log(tvSoldOut)
// log outcome

//1c
//create variable and map by array
const tvEmby =
    inventory.filter((ambiLight) => {
        return ambiLight.options.ambiLight === true
    });
// create a function with a callback return outcome
console.log(tvEmby)
// log outcome


//1D
//create variable and map by array



// const priceRange = inventory
//
// inventory.sort((a, b) => {
//
//     if (a.price < b.price) {
//         return -1;
//     }
//     if (a.price > b.price) {
//         return 1;
//     }
//     return 0;
// })
// console.log(priceRange)

//create variable and map by array
// const priceRange = inventory.sort((a, b) => a.price - b.price)
//
// //compare the values of the array and sort them and return outcome
//
// console.log(priceRange)

// log outcome

