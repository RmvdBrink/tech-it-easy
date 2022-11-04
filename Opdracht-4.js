// Opdracht 4 -Functies
// Maak deze gehele opdracht eerst alsof je het voor één tv doet. We gaan één tv weergeven in het volgende format:
//
//     Philips 43PUS6504/12 - 4K TV
// €379,-
//     43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)
// Opdracht 4a: Maak een herbruikbare functie die een string genereert voor de naam van één tv en deze teruggeeft in het format [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.
//
//make a function whit input a tv names of array
function tvName(array){
    return `${array.brand} ${array.type} - ${array.name}`
    }
//declare function whit de first object of array inventory to get the output
    console.log(tvName(inventory[0]))

//     Opdracht 4b: Maak een herbruikbare functie die de prijs van één tv als parameter verwacht (zoals 379 of 159) teruggeeft in het format €379,- of €159,-.
//
//make a function whit input a price of array
function tvPrice(price) {
    return `€${price.price},-`
}
//declare function whit de first object of array inventory to get the output
console.log(tvPrice(inventory[0]))

// Opdracht 4c: Maak een herbruikbare functie die een string genereert voor alle beschikbare schermgroottes van één tv. De functie geeft dit terug in het format [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc. Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm). Wanneer een tv vier schermgroottes heeft ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Let op: om één string te genereren uit een array van schermgroottes zul je een for-loop voor moeten gebruiken.
//
function tvSizes(array) {
   let screenSizeCont = ""
    const screenSize = array.availableSizes;
    for (let i = 0; i < screenSize.length; i++) {
        const inch = screenSize[i];
        const cm = screenSize[i] * 2.54;
        screenSizeCont = `${screenSizeCont}${inch} inch (${cm} cm |)`
    }
    return screenSizeCont;
}

console.log(tvSizes(inventory[0]))

//     Opdracht 4d: Schrijf een script die de informatie van de Philips 43PUS6504/12 tv weergeeft op de pagina zoals onderstaand voorbeeld. Gebruik de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.
//
//     Philips 43PUS6504/12 - 4K TV
// €379,-
//     43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)


//4D en 4E


function print(arr) {
    let result = "";
    arr.map((input) => {
        const result1 = tvName(input);
        const result2 = tvPrice(input);
        const result3 = tvSizes(input);
        result += `${result1} \n ${result2} \n ${result3} \n`;
    })
    return result;
}

console.log(print(inventory))







// Opdracht 4e: Maak een herbruikbare functie die de informatie van alle tv's weergeeft op de pagina. Gebruik hiervoor de map-methode in combinatie met de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.
//

function print2(arr) {

    let result = "";
    arr.map((input) => {
        const result1 = tvName(input);
        const result2 = tvPrice(input);
        const result3 = tvSizes(input);
        result += `${result1} \n ${result2} \n ${result3} \n`;

        const listOfTvs = document.createDocumentFragment();

        const li =document.createElement("li");
        li.textContent = result;
        listOfTvs.appendChild(li);

        const container = document.getElementById("tv-info");
        container.appendChild(listOfTvs)
    })
}
print2(inventory);
// Bonusopdracht
// Maak drie knoppen op de pagina: Sorteer op prijs, AmbiLight TV's en Uitverkochte exemplaren. Gebruik de code die je in opdracht 1b, 1c en 1d hebt gemaakt en schrijf dit om naar functies zodat je ze kunt aanroepen op het moment dat de buttons geklikt worden. Zorg ervoor dat de functies de uitkomsten in de de console loggen als de gebruiker op de bijbehorende knop klikt. Tip: lees hiervoor paragraaf 7.4 op EdHub eens door!
// Zorg er nu voor, in plaats van dat de uitkomsten in de console worden gelogd, dat de uitkomsten worden meegegeven aan jouw functie uit 4e zodat de resultaten daadwerkelijk op de pagina weergegeven worden!
//bonus 1b
function giveTvName(arr) {
    const soldOut = arr.filter((inventory) => {
        return inventory.sold === inventory.originalStock;
    });
    console.log(soldOut);
}



//1c
function giveAmbilight(arr) {
    const hasAmbilight = arr.filter((inventory) => {
        return inventory.options.ambiLight;
    });
    console.log(hasAmbilight);
}


//1d
function sortOnPrice(arr) {
    arr.sort((a, b) => a.price - b.price);
    console.log(arr);
}