const entry = require('prompt-sync')();

let time = [];
let runner = true;

while(runner === true){
    let nome = entry("digite o nome do usuario: (ou sair)");

    if (nome === "sair"){
        
        runner = false;
    }else{
        console.log(`usuario ${nome} foi cadastrado com sucesso!`);
    }
}
