/*
Operador Rest, es el inverso de spread

- permite agrupar los sobrantes en una operacion para una funcion
- tambien es con los tres puntos (...)
- se reconoce porque se declara dentro de los parametros de una funcion
- cuando se declara un arreglo ya inicializado y valores asignados y se pasa como argumento de una funcion suma(..arreglo), es spread
  - aunque este dentro como argumento de la funcion. Esto desempaca los valores del arreglo y los manda como parametros
- Arreglos
  - agrupa todos los argumentos que no utiliza la funcion y los devuelve en un iterable, en este caso un arreglo
  - tambien se utiliza al destructurar un arreglo, toma todas las posiciones que no fueron seleccionadas y las devuelve en un arreglo
- Objetos
  - sirve para agrupar todas las keys que no son utilizadas y retornarlas junto a sus valores dentro de otro objeto
  - estos keys deben ser guardadas en una variable
  - no se puede utilizar el mismo nombre para otra variable

*/

function suma(a,b, ...otros){
console.log(a);               // 10
console.log(b);               // 20
console.log(otros)            // [30, 40, 50]
}

suma(10, 20, 30, 40, 50) 

// Arreglos
let arreglo = [10, 20, 30, 100, 200];
let [primero, segundo, ...losDemas] = arreglo;
console.log(losDemas); // [30, 100, 200]

//Objetos
let objeto = { nombre: "alfredo", apellido: "supanta", edad: 30 };
let { nombre, ...keysRestantes} = objeto;
console.log(keysRestantes);               // { apellido: "supanta", edad: 30 }

// creando una copia de objeto quitando una key
let {edad, ...nuevoObjeto} = objeto;
console.log(nuevoObjeto);                 // { nombre: "alfredo", apellido: "supanta" }
console.log(edad);                        // 30

function test2(...numero2){ // => Rest porque agrupa nuevamente el arreglo y lo deja en [1,2,3]
  console.log(numero2);
};

let numeros2 = [1,2,3];
test2(...numeros2) //       => Spread porque desempaca los valores, esta enviando 1,2,3