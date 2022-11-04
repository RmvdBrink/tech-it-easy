// Opdracht 2 - Elementen in de DOM plaatsen
// Tip: wanneer we meerdere waardes uit een array willen terugbrengen tot één getal of één string, gebruik je hier gewoon een oude vertrouwde for-loop voor!
//
// Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
// Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
// Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
// Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
// Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.




//opdracht 2a

// make a script with input how many TVs have been sold

let tvCount = 0;

//use for loop to walk through the array
for (let i = 0; i < inventory.length; i++) {
    tvCount += inventory[i].sold
}

//log output
console.log(tvCount)



// Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.

const soldField = document.getElementById("sold-field");
document.getElementById("sold-field").style.color = "green";
soldField.textContent = `totaal verkocht ${tvCount}`;


// Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

let boughtCount = 0;

// console.log(sold)
for (let i = 0; i < inventory.length; i++) {
    boughtCount += inventory[i].originalStock;
}



console.log(boughtCount)


//en snellere manier van huiswerk klas
//
// let inStock = 0;
// inventory.forEach(element => {
//     inStock += element.originalStock;
// });
// console.log(inStock)

// Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
// <th id="bought-field">Bought in</th>
const boughtField = document.getElementById("bought-field");
document.getElementById('bought-field').style.color = "blue";

boughtField.textContent = `ingekocht ${boughtCount}`;


// Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.

const leftToSell = boughtCount - tvCount;
console.log(leftToSell)


const tvForSell = document.getElementById("not-sold-field");
document.getElementById("not-sold-field").style.color = "red";
tvForSell.textContent = `niet verkocht ${leftToSell}`;


// document.getElementById("not-sold-field");
// document.getElementById("not-sold-field").style.color = "red"
