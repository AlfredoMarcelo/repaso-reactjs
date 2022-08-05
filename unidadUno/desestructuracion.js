/*
Destructuring

- desenpacar los elementos de un arreglo u objeto en elementos individuales
- recordar que se pueden inizializar mas de una variable en una linea
  - let a,b,c;
  - arreglos
    - puedo obtener los que necesite, no es necesario capturar todos los valores de los indices
    - basta con dar vuelta las declaraciones para hacer el destructuring
    - let arreglo = [10, 20]
      let [numero1, numero2] = arreglo;
    - cuando los corchetes estan del lado izquierdo, es desestructuracion o destructuring
    - los nombres asignados en el destructuring seran tendran el valor segun la posición
    - en el ejemplo numero1 se asignara para el indice 0, numero2 para el valor del indice 2
      
  - objetos
    - puedo obtener las key que necesite, no es necesario desempacar todo
    - basta con dar vuelta las declaraciones para hacer el destructuring
      - let objeto = {nombre: "alfredo", edad: 20}
        let [nombre, edad] = objeto;
      - para hacer desestructuring con los objetos es importante:
        - que los nombres de las variables de destructuring sean igual que las keys del objeto
        - este devolvera el valor asignado a la key
    - Se puede cambiar el nombre de la key para desempacar 
      - let objeto = {nombre: "alfredo"};
        let {nombre: userName} = objeto    => ahora userName tendra como valor "alfredo"; 
    - cuando las llaves estan del lado izquierdo, es desestructuracion o destructuring


*/

let numeros = [10, 20];
let [a, b ] = numeros;
console.log(a);
console.log(b);

let objeto = { nombre: "Alfredo", edad: 29 };
let {edad, nombre } = objeto;
console.log(nombre); //alfredo
console.log(edad);   // 29