/*Javascript es un lenguaje de programacion asincrono

  - se ejecuta sobre un solo hilo
  - se ejectua una despues de la otra
  - el problema de esto es que un hilo bloque a otras
  - para esto se explica el event Loop
    - es estar preguntando que tareas van terminando
  - Promesas
    - no permite definir codigo a ejecutarse cuando una tarea fue finalizada
    - es un objeto retornado por una operacion asincrona
    - este objeto devuelve valores o errores
    - es un objeto que va producir un valor en el futuro
    - Puede tener los siguientes estados:
      -fullfield = completada, se completo
      - rejected = rechazada, no se completo
      - pending = no ha terminado
      - settled = finaliza, con exito o error
  - fetch()
    - es una operacion asincrono
    - es una peticion a un endpoint
    - se le debe añadir un await
    - permite hacer una peticion a otra pagina web o api
    - es un objeto del tipo promesa (se ve con tipeOf())
    - retorna un objeto promesa y no el resultado de la operacion
    - para obtener este resultado de una funcion asincrona hay 3 formas
      - then()
        - ejecuta la funcion cuando la operacion termino con exito
        - es para caso de exito
      - catch()
        - se le pasa una funcion y se ejecuta si la peticion fallo
        - es diferente a un 400 o 500 error http
      - finally()
        - se va a ejecutar si la promesa se cumple con exito o falla
    - para obtener los datos de la promesa, hay que generar otra fun async
      - tambien es una funcion asincrona y diferente, por eso usa otro await
      - el metodo json es una fun async que convierte la información a json
      - tambien retorna una promesa
      - al retornar la promesa del metodo json, nos permite usar then y catch
  - Permiten usar expresiones await, estas nos permiten trabajar como sincrono
    - con esto evitamos usar funciones anidadas
    - mejorar el codigo
    - espera que la promesa tenga un valor
    - obtiene el valor de la promesa, saltandose el objecto promesa

  
*/
let urlBuena = "https://api.github.com/users/codigofacilito"; 
let urlMala = "https://codigofacilito.com/articulos/"; 

/* let p = fetch(urlBuena); */

/* p.then(function(resultado){
  console.log("ya termine");
  resultado.json().then(function(json){
    console.log(json);
  })
  console.log(resultado);
}) */

/* p.catch(function(error){
  console.log("Peticion asincrona fallada");
  console.log(error)
}) */

/* p.finally(function(d){
  console.log("termine")
}) */

async function leerRepos(){
  let response = await fetch(urlBuena);
  let json = await response.json();
};

// Como se controlan lo errores en async await

/*
  se utilizan try{}catch(){}
*/

async function leerRepos(){
  try{
    let response = await fetch(urlBuena);
    let json = await response.json();
    console.log(json)
  } catch(error){
    console.log(error);
  }
};
