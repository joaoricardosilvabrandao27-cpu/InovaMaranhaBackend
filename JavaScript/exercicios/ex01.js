let entry = require('prompt-sync')();
//eu tenho que especificar que é um int
let valor = Number(entry("digite o valor do produto: "));

let desconto =  valor*15/100;
let resultado = valor+desconto;
console.log(`o desconto fica: ${resultado}`);