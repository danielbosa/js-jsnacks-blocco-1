/*
Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri casuali (compresi nell'intervallo da 1 a 100) per quanti sono gli elementi da inserire.
Stampiamo poi gli ultimi 5 elementi dell'Array
Bonus:
Chiediamo all'utente quanti elementi dell'array dovremo stampare
Suggerimenti:
Probabilmente conviene controllare che il numero di elementi della coda non sia più grande del numero di elementi totali dell'array
*/

/*
1. Chiedere a utente quanti elementi, tramite prompt;
2. Dichiarare array vuoto;
3. Generare n elementi con ciclo for, dove n = numero dell'utente; ciclo for deve girare da i = 0 a i <= n;
4. Ad ogni ciclata, aggiungo elemento n(i) valorizzando direttamente l'elemento nell'array;
5. Stampo in console.log gli ultimi 5 elementi dell'array: array[array.lenght-5...-1] --> ciclo for al contrario.
    ciclo da i = 5 a i = 1 compreso (i = 5; i >= 1; i--) e ad ogni ciclata stampo l'elemento selezionato dall'array;
BONUS

*/

let numElementi = parseInt(prompt('Quanti elementi vuoi?'));
let arrayVuoto = [];

for (i = 0; i < numElementi; i++){
    arrayVuoto[i] = RndNumberGen(1, 100);
    console.log(arrayVuoto);
};

let numVisibili = parseInt(prompt('Quanti elementi vuoi vedere, a partire dal fondo dell\'elenco?'));

if(numVisibili > arrayVuoto.length){
    console.log('Mi sembra una richiesta esagerata... Non ci sono abbastanza elementi!')
} else {
    console.log(arrayVuoto.slice(-5));
    for(i = numVisibili; i >= 1; i--){
        console.log(arrayVuoto[arrayVuoto.length - i]);
    };
}

/* VERSIONE ALTERNATIVA
if(numVisibili > arrayVuoto.length){
    console.log('Mi sembra una richiesta esagerata... Non ci sono abbastanza elementi!')
} else {
    for(i = numVisibili; i >= 1; i--){
        console.log(arrayVuoto[arrayVuoto.length - i]);
    };
}
*/

