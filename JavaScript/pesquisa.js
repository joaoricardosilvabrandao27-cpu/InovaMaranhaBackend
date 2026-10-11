const prompt = require("prompt-sync")();

let time = [];
let runner = true;

while(runner){
    let opcao = Number(prompt("1 - cadastrar || 2 - deletar || 3 - sair: "));

    if (opcao === 1){
        let nome = prompt("digite o nome do usuario: ");
        time.push(nome);
        console.log(`usuarios cadastrados: ${time}`);
    }else if (opcao === 2){
        if (time.length === 0){
            continue; 

            
        }
        let nomeDeletado = prompt("digite o nome para deletar: ");
        let index = time.indexOf(nomeDeletado);

        if (index === -1){
            console.log("nenhum usuario cadastrado!");
            continue;
        }
        time.splice(index,1);
        console.log(`usuarios cadastrados: ${time}`);

    }else if(opcao === 3){
        runner = false;
    }







}