/*
Template literals o template string

- Nos permite tener string de varias lineas
- interpolacion de cadenas
  - permite colocar dentro de un string una expresion de js que se va a evaluar como codigo ${}
- templates tageadas
- es una alternativa a la concatenacion de string o numeros
- cada template es enviada a un procesamiento
- uso comun en react es interpolar


*/

function observador(cadenas,...expresiones){
  console.log(cadenas);
  console.log(expresiones);
  return cadenas;
}

let nombre = "alfredo";
let edad = 29;

let templateLiteral = observador`Mi nombre es ${ nombre } y tengo ${ edad }` ;
console.log(templateLiteral);



