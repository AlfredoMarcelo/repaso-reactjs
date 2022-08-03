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
    - permite hacer una peticion a otra pagina web o api
    - es un objeto del tipo promesa (se ve con tipeOf())
    - retorna un objeto promesa y no el resultado de la operacion
    - para obtener este resultado hay 3 formas
      - then()
        - ejecuta la funcion cuando la operacion termino con exito
        - es para caso de exito
      - catch()
        - se le pasa una funcion y se ejecuta si la peticion fallo
        - es diferente a un 400 o 500 error http
      - finally()
        - se va a ejecutar si la promesa se cumple con exito o falla
    

  
*/
let urlBuena = "https://api.github.com/users/codigofacilito"; 
let urlMala = "https://codigofacilito.com/articulos/"; 

let p = fetch(urlMala);

p.then(function(resultado){
  console.log("ya termine");
  console.log(resultado)

})

/* p.catch(function(error){
  console.log("Peticion asincrona fallada");
  console.log(error)
}) */

/* p.finally(function(d){
  console.log("termine")
}) */
