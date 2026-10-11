// um prompt para fazer o usuario digitar
const dado = require('prompt-sync')();

console.log("=============== ");
//usamos o nome da const para dizer que é uma entrada de dados
let nome = dado("Digite o nome: ");

console.log(`o nome do jogador: ${nome}`); 
//tipo de dado number
let pontuacao = Number (dado("Digite a pontuação deste jogador: "));
console.log(pontuacao);
