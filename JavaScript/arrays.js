const entry = require('prompt-sync')();

let time = [];
let runner = true;

while(runner === true){
    
        
    
    let nome = entry("digite o nome do usuario: (ou sair)");

    if (nome === "sair"){
        runner = false;
    }else{
        time.push(nome);
        console.log(`usuario ${nome} foi cadastrado com sucesso!`);
        console.log(`seu time: ${time}`)
    }
}