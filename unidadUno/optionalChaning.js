/*
Optional Chaining ?.

  - Es similar al operador de encadenamiento
  - se utiliza para evitar que errores rompan las app
  - si hay un error, retornara un undefined
  - se puede utilizar cuando se soliciten datos y si hay error en una key lo validamos con  ?.


*/

let usuarios = { nombre: "Alfredo"};
console.log(usuarios?.calificaciones?.promedio); // esto devuelve un undefined, no corta con un error
usuarios.inscribir?.();                          // de esta manera se usa en funciones