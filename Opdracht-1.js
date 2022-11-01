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


console.log(tvNames)

//1B

const tvSoldOut =
    inventory.filter((soldOut) => {
    return soldOut.sold === soldOut.originalStock
});

console.log(tvSoldOut)


//1c

const tvEmby =
    inventory.filter((ambiLight) => {
        return ambiLight.options.ambiLight === true
    });

console.log(tvEmby)