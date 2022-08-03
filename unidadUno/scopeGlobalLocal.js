// variable Local
  //se usan en el cuerpo principal
  //se usan en funciones
  //una funcion solo debe operar con informacion de alcance local
  //lo que necesite del exterior debe comunicarse por argumentos
  //lo que necesite comunicar al exterior debe ser por retorno

let nombre = "alfredo";

function saludar(){
  let edad = 29;
  console.log(nombre,edad);// alfredo 29
}
saludar();

console.log(nombre); //alfredo
//console.log(edad); // error, edad is not defined (esta dentro de una variable local)


//2) ejemplo


function presentacion(nombre, admin){
  if(admin){
    rol = "administrador";// porque funciona si no esta definido el tipo de variable
  }else{
    rol = "usuario"
  }
  console.log("soy " + nombre + " y mi rol es: " + rol);
}

//presentacion("alfredo", 0);//0 js lo considera false
presentacion("alfredo", true);//0 js lo considera false

//-------------------------------------------------------------------------------------------------

//Variable Global
  //solo en la funcion declarada



//-------------------------------------------------------------------------------------------------

//Arrow function
  // sirve cuando queremos llamar propiedades de un scope local
  // las arrow function no cambian el valor de this, lo heredan o toman de afuera
  // se usa cuando no queremos que el contexto en el cuerpo de la funcion cambie

let obj = {
  numeros: [1,2,3],
  imprimir: function(){
    this.numeros.forEach(()=>{
      console.log(this);
    })
  }
}
obj.imprimir();