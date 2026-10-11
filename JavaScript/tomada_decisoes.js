const entrada = require('prompt-sync')();

let nome = entrada("nome do usuario: ");
let pontuacao = Number(entrada("pontuação do usuario: "));
const pontuacaoMinima = 1000;

console.log("analisando perfil");
 
if (pontuacao >= pontuacaoMinima){
    console.log(`o jogador ${nome} tem nivel necessario`);
} else{
    let pontuacaoNecessaria = pontuacaoMinima - pontuacao;
    console.log(`o jogador ${nome} nao tem o nivel, necessario ${pontuacaoNecessaria}`);
    
}

 