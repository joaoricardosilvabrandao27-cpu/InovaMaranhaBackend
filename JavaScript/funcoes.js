const prompt = require("prompt-sync")();

let time = [];
let runner = true;

function menuUsuarios(){
    console.log("1 - cadastrar || 2 - deletar usuarios || 3 - sair || 4 - mostrar usuarios");
}
function mostraUsuarios(){
    console.log("==================");
    console.log(`lista de usuarios: ${time}`);
    console.log("==================");
}

function cadastrarUsuarios(){
    let nome = prompt("digite o nome do usuario: ");
    time.push(nome);
    console.log(`usuarios cadastrados: ${time}`);
}

function deletarUsuario(){
    if (time.length === 0){
        return;
    }
    let nomedeletado = prompt("digite o nome para deletar: ");
    let index = time.indexOf(nomedeletado,1);

    if (index === -1){
        console.log("nenhum usuario cadastrado!!");
        return;
    }
    time.splice(index,1);
    console.log("deletado com sucesso!!");
    console.log(`usuarios atuais: ${time}`);
}

while(runner){
    menuUsuarios();
    let opcao = Number(prompt("digite sua opção: "));

    if (opcao === 1){
        cadastrarUsuarios();



    }else if (opcao === 2){
        deletarUsuario();




    }else if(opcao === 3){
        runner = false;
    }else if(opcao === 4){
        mostraUsuarios();
    }







}
