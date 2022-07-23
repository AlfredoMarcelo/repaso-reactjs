// en js un valor puede ser enviado por valor o referencia
  //cuando es por referencia el parametro apunta a la misma direccion que el argumento original

function imprimir(nombre){// nombre = beto
  nombre = "alfredo";// altera el parametro de manera local
  console.log(nombre)     //imprime beto
}

let names = "luis"

imprimir(names);// el arguemento es guardado dentro del parametro
console.log(names)//luis, no se altera por el cambio en la funcion


//-----------------------------------------

  //objetos y los arreglos son enviados por referencia
  //todo lo demas es enviado por valor

  //cuando son enviados por referencia, en react pueden tener efectos secundarios
    //y se convierten en puerta a que una funcion produzca efectos secundarios

 //2) ejemplo
 
 function imprimirReferencial(arreglo){   // arreglo | numeros, por referncia se modifican a fuera
  arreglo[0] = 100;                       //cambia el valor a 100
  console.log(arreglo);                   //100
 }

 let numeros = [0];

 console.log(numeros);                    //0
 imprimirReferencial(numeros);
console.log(numeros);                     //100, cambia su valor desde la funcion
