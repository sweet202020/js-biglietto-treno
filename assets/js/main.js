/* Il programma dovrà chiedere all'utente:
 il numero di chilometri che vuole percorrere
    e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    il prezzo del biglietto è definito in base ai km (0.21 € al km)
    va applicato uno sconto del 20% per i minorenni
    va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). */

//chiedere il numero di chilometri che si vuole percorrere

const NumberKm = Number(prompt("quanti chilometri vuoi percorrere?"));
console.log(NumberKm);

//chiedere l'eta del passeggero

const userAge = Number(prompt("quanti anni hai?"));
console.log(userAge);

//calcolare il prezzo del biglietto in base ai km

let wholePrice = (NumberKm * 0.21);
wholePrice = wholePrice.toFixed(2);
console.log('il prezzo intero del treno è: ' + wholePrice + '€');
//fare sconto del 20 % per i minorenni e del 40% per gli over 65 utilizzndo if

if (userAge<18) {
    const teenDiscount = (wholePrice * 0.20);
    console.log('lo sconto che possiamo applicare per te è di: ' + teenDiscount + '€');
    let finalPriceTeen = (wholePrice - teenDiscount);
    finalPriceTeen = finalPriceTeen.toFixed(2);
    console.log('il prezzo del biglietto con lo sconto applicato è: ' + finalPriceTeen + '€');
    
} else if (userAge>65){
    const overDiscount = (wholePrice * 0.40);
    console.log('lo sconto che possiamo applicare per te è di: ' + overDiscount + '€');
    let finalOldPrice = (wholePrice - overDiscount);
    finalOldPrice = finalOldPrice.toFixed(2);
    console.log('il prezzo del biglietto con lo sconto applicato è: ' + finalOldPrice + '€');
} else {
    console.log ('non puoi avere nessuno sconto')

}
