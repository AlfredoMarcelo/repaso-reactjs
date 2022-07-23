//hoisting

saludar();

//declaracion de funcion, esta puede ser llamada antes de ser declarada
function saludar (){
    console.log("hola ")
}

buenosDias;//por el hoisting no se puede llamar a esta funcion antes de ser declarada


//Expresion de funcion, esta no se puede llamar antes de ser declarada
    //se pueden usar arrow function o funciones anonimas

let buenosDias = () => {//por ser expresada no se puede llamar antes
    console.log("Buenos días")
}

