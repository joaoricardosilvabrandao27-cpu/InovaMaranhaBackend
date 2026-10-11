const prompt = require("prompt-sync")();

let time = [];
let runner = true;

function menuUsuarios(){
    console.log("\n============================");
    console.log("-----Sistema de usuarios------")
    console.log("1 - cadastrar ");
    console.log("2 - deletar usuarios");
    console.log("3 - sair");
    console.log("4 - mostrar usuarios");
    console.log("5 - calcular a media ");
    console.log("6 - buscar usuarios");
    console.log("7 - atualizar pontos");
    console.log("============================");
}

function atualizarPontos(){
    let usuarioPontos =prompt("digite o nome do usuario que queira atualizar os pontos: ");

    for (let i = 0;i < time.length;i++){
        if(usuarioPontos === time[i].nome){
            console.log(`o usuario: ${time[i].nome}`);
            let pontosNovos = Number(prompt("digite pontos para acrecentar: "));
            time[i].pontos += Number(pontosNovos);
        }
    }
}

function buscarUsuario(nomedesejado){
    let usuariobusca = prompt("digite o nome do usuario que queira buscar: ");
    console.log(`buscando por: ${usuariobusca}...`);
    let encontrou = false;

    for (let i = 0;i < time.length;i++){
        let jogadorAtual = time[i].nome
        if(jogadorAtual === usuariobusca){
            console.log(`o usuario encontrado: ${jogadorAtual}`);
            console.log(`Pontos: ${time[i].pontos} || Funcao: ${time[i].funcao}`);
            encontrou = true;

        }
    }

    if (encontrou === false){
        console.log("usuario nao cadastrado");
    }
}

function mostraUsuarios(){
    if(time.length === 0){
        return;
    }

    for(let i = 0;i < time.length;i++){
        let usuarioJogador = time[i];
        console.log((i+1) + ". " + usuarioJogador.nome + "| FUNCAO: " + usuarioJogador.funcao + "|PONTOS: " + usuarioJogador.pontos);
    }
}



function cadastrarUsuarios(){
    let nome = prompt("digite o nome do usuario: ");
    let funcao = prompt("digite a funcao do usuario: ");
    let pontos = Number(prompt("digite a pontuacao: "));

    if (isNaN(pontos)){
        console.log("pontuacao inválida!!");
        return;
    }else{
        let recruta = {
            nome: nome,
            funcao: funcao,
            pontos: pontos,
        }


        time.push(recruta);
        console.log(`usuarios cadastrados: ${time}`);
    }
}




function deletarUsuario(){
    if (time.length === 0){
        console.log("nenhum usuario ativo");
        return;
    }
    let nomedeletado = prompt("digite o nome para deletar: ");
    let indexDeletado = -1;
    for (let i = 0;i < time.length; i ++){
        if(time[i].nome === nomedeletado){
            indexDeletado = i;
            break;

        }
    }


    if (indexDeletado === -1){
        console.log("nenhum usuario cadastrado!!");
        return;
    }
    time.splice(indexDeletado,1);
    console.log("deletado com sucesso!!");
    console.log(`usuarios atuais: ${time}`);
}

function calculoDaMedia(){
    if (time.length === 0){
        console.log("nenhum usuario ainda");
        return;

    }

    let totalpontos = 0;

    for (let i = 0;i < time.length;i++){
        totalpontos = totalpontos + time[i].pontos

    }

    let mediapontos = totalpontos / time.length;

    console.log("o time possue uma potuação media de:" , mediapontos);
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
    }else if(opcao === 5){
        calculoDaMedia();
    }else if(opcao === 6){
        buscarUsuario()
    }else if( opcao === 7){
        atualizarPontos()
    }else{
        console.log("indevido");
    }
    







}
