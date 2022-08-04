/**
Spread syntax
  
  - Para enviar un iterable en forma de argumentos
  - para clonar iterables
  - para combinar iterables
  -  Iterables: cuando puede ser separado y recorrido en partes
    - arreglos
      - compuestos por elementos
    - cadenas
    - objetos
  - nos permite expandir los elementos que hay en un iterable
    - clones
    - iterables entre si
  - se usa mas al querer duplicar un iterable
  - sirve para combinar dos arreglos
    - let combinar = [...numeros2, ...frutas];
  - sirve para combinar objetos
    - pero es diferente
      - let usuarioCopia = { ...usuario};
  

 
 */

function suma(a ,b){
  return a + b;
}

let numeros= [10, 20];

let numerosCopia = [...numeros];  //esta haciendo una copia del array numeros // [10,20]
numerosCopia.push(50);            // [10,20, 50]
console.log(numeros);
console.log(numerosCopia);


/* let resultado = suma(...numeros);
console.log(resultado); */

let numeros2 = [ 10, 15, 30];
let frutas = ["sandia", "platano"];
let combinar = [...numeros2, ...frutas];
console.log(combinar); //[10, 15, 30, 'sandia', 'platano']

let bidi = [
  [1],[1],[1],
  [1],[1],[1],
  [1],[1],[1]
]

// Objetos

let cobipaBidi = [...bidi];
console.log(cobipaBidi);

let usuario = {nombre: "alfredo"};
let usuarioCopia = { ...usuario };
console.log(usuario, usuarioCopia);// {nombre: 'alfredo} {nombre: 'alfredo }

let calificacion = {notas: [6, 5, 7]};
let registro = {...usuario, ...calificacion};
console.log(registro);             // {nombre: "alfredo", notas: [6, 5, 7]}