// NUMERO 1

// Creo array x1 inizialmente senza elementi
var x1 = [];
// Carico il vettore sulla console
console.log(x1);

// Inserisco all'interno del vettore x1 5 elementi (1,2,3,4,5)
x1 = [1,2,3,4,5];
// Carico l'array sulla console
console.log(x1);



// ESERCIZIO 2

// Creo arry x2 con l'annotazione degli oggetti
var x2 = new Array();
// Inserisco all'interno del vettore gli stessi elementi di x2
x2 = [1,2,3,4,5];
// Carico l'array sulla console
console.log(x2);



// ESERCIZIO 3

// Creo l'array y inizializzandolo con quattro numeri (1,2,3,4)
var y = [1,2,3,4];
// Carico l'array sulla console
console.log(y);
// Con il metodo push() vado ad inserire in append gli elemnti passati come parametri al metodo stesso (5,6,7,8,9)
y.push(5,6,7,8,9);
// Carico l'array sulla console
console.log(y);



// ESERCIZIO 4

// Creo l'array z iniziallizzandolo con i primi 5 numeri dispari
var z = [1,3,5,7,9];
// Carico l'array sulla console
console.log(z);



// ESERCIZIO 5

// Creo un array associativo w1
var w1 = [];
w1["ind"] = "Valerio";
w1["ind2"] = "Andrea";
w1["ind3"] = "Matteo";
// Carico l'array sulla console
console.log(w1);



// ESERCIZIO 6

// Creo l'array associativo w2 mettendoci gli stessi elementi di w1
var w2 = new Array();
w2.push(w1["ind"], w1["ind2"], w1["ind3"]);
// Carico l'array sulla console
console.log(w2);




// ESERCIZIO 7

// Creo l'array r avente nelle prime tre posizioni i valori 5, 6, 70, nelle seguenti tre posizioni nessun valore, nelle seguenti due posizioni i valori 10 e 20.
var r = [5,6,70, , , , 10,20];
// Carico l'array sulla console
console.log(r);




// ESERCIZIO 8

// Utilizzando il metodo reverse(), rovescio il vettore x1
x1.reverse();
// Carico il vettore x1 sulla console
console.log(x1);





// ESERCIZIO 9

// Con il metodo sort() riordino l'array x1
x1.sort();
// Carico l'array sulla console
console.log(x1);




// ESERCIZIO 10

// Verifico attraverso il metodo Array.isArray() se tutti gli array creati in precedenza sono degli array

if(Array.isArray(x1) == true)
    console.log("x1 è un array");

else console.log("x1 non è un array");

if(Array.isArray(x2) == true)
    console.log("x2 è un array");

else console.log("x2 non è un array");

if(Array.isArray(y) == true)
    console.log("y è un array");

else console.log("y non è un array");

if(Array.isArray(z) == true)
    console.log("z è un array");

else console.log("z non è un array");

if(Array.isArray(w1) == true)
    console.log("w1 è un array");

else console.log("w1 non è un array");

if(Array.isArray(w2) == true)
    console.log("w2 è un array");

else console.log("w2 non è un array");

if(Array.isArray(r) == true)
    console.log("r è un array");

else console.log("r non è un array");






