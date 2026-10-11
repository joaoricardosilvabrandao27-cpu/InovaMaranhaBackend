let entradaUsuario = "Cem"; // O usuário digitou texto em vez do número 100 let pontuacaoConvertida = Number(entradaUsuario); 

// O segurança isNaN() entra em ação 

if (isNaN(pontuacaoConvertida)) { 

console.log("ERRO GRAVE: Você não digitou um número válido. Cadastro cancelado."); 

} else { 

console.log("Sucesso! Pontuação cadastrada: " + pontuacaoConvertida); 

}