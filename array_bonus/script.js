/*
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
*/

let arrayUno = [1,2,3,4,5];
let arrayDue = [1,2,3,4,5,6,7,8,9,10,11,12];

console.log(arrayUno.length);
console.log(arrayDue.length);

let diff = Math.abs(arrayDue.length - arrayUno.length);
console.log(diff);

if(arrayUno.length < arrayDue.length){
    for(i = 0; i < diff; i++){
        arrayUno.push(RndNumberGen(1, 100));
    }
} else if (arrayUno.length > arrayDue.length) {
    for(i = 0; i < diff; i++){
        arrayDue.push(RndNumberGen(1, 100));
    }
} else {
    console.log('lunghezze uguali')
};

console.log('Array UNO: ', arrayUno);
console.log('Array DUE: ', arrayDue);
console.log('Lunghezza Array UNO: ', arrayUno.length);
console.log('Lunghezza Array DUE: ', arrayDue.length);