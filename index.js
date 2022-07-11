//hoisting

saludar();

function saludar (){
    console.log("hola ")
}

buenosDias;//por el hoisting no se puede llamar a esta funcion antes de ser declarada

let buenosDias = () => {//por ser expresada no se puede llamar antes
    console.log("Buenos días")
}