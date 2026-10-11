const prompt = require("prompt-sync")();

let listaUsuarios = [];
let sistemaAtivo = true;

function exibirMenuUsuarios(){
    console.log("\n============================");
    console.log("-----Sistema de usuarios------");
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
    let nomeUsuarioAtualizar = prompt("digite o nome do usuario que queira atualizar os pontos: ");

    for (let indice = 0; indice < listaUsuarios.length; indice++){
        if(nomeUsuarioAtualizar === listaUsuarios[indice].nome){
            console.log(`o usuario: ${listaUsuarios[indice].nome}`);
            let quantidadePontosAdicionar = Number(prompt("digite pontos para acrecentar: "));
            listaUsuarios[indice].pontos += Number(quantidadePontosAdicionar);
        }
    }
}

function buscarUsuario(nomeUsuarioDesejado){
    let nomeUsuarioBusca = prompt("digite o nome do usuario que queira buscar: ");
    console.log(`buscando por: ${nomeUsuarioBusca}...`);
    let usuarioEncontrado = false;

    for (let indice = 0; indice < listaUsuarios.length; indice++){
        let nomeUsuarioAtual = listaUsuarios[indice].nome;

        if(nomeUsuarioAtual === nomeUsuarioBusca){
            console.log(`o usuario encontrado: ${nomeUsuarioAtual}`);
            console.log(`Pontos: ${listaUsuarios[indice].pontos} || Funcao: ${listaUsuarios[indice].funcao}`);
            usuarioEncontrado = true;
        }
    }

    if (usuarioEncontrado === false){
        console.log("usuario nao cadastrado");
    }
}

function mostrarUsuarios(){
    if(listaUsuarios.length === 0){
        return;
    }

    for(let indice = 0; indice < listaUsuarios.length; indice++){
        let usuarioAtual = listaUsuarios[indice];

        console.log((indice + 1) + ". " + usuarioAtual.nome + "| FUNCAO: " + usuarioAtual.funcao + "|PONTOS: " + usuarioAtual.pontos);
    }
}

function cadastrarUsuario(){
    let nomeUsuario = prompt("digite o nome do usuario: ");
    let funcaoUsuario = prompt("digite a funcao do usuario: ");
    let pontuacaoUsuario = Number(prompt("digite a pontuacao: "));

    if (isNaN(pontuacaoUsuario)){
        console.log("pontuacao inválida!!");
        return;
    }else{
        let novoUsuario = {
            nome: nomeUsuario,
            funcao: funcaoUsuario,
            pontos: pontuacaoUsuario,
        };

        listaUsuarios.push(novoUsuario);
        console.log(`usuarios cadastrados: ${listaUsuarios.nome}`);
    }
}

function deletarUsuario(){
    if (listaUsuarios.length === 0){
        console.log("nenhum usuario ativo");
        return;
    }

    let nomeUsuarioDeletar = prompt("digite o nome para deletar: ");
    let indiceUsuarioDeletar = -1;

    for (let indice = 0; indice < listaUsuarios.length; indice++){
        if(listaUsuarios[indice].nome === nomeUsuarioDeletar){
            indiceUsuarioDeletar = indice;
            break;
        }
    }

    if (indiceUsuarioDeletar === -1){
        console.log("nenhum usuario cadastrado!!");
        return;
    }

    listaUsuarios.splice(indiceUsuarioDeletar, 1);
    console.log("deletado com sucesso!!");
    console.log("usuarios atuais: ");
    mostrarUsuarios();
}

function calcularMediaPontos(){
    if (listaUsuarios.length === 0){
        console.log("nenhum usuario ainda");
        return;
    }

    let somaPontos = 0;

    for (let indice = 0; indice < listaUsuarios.length; indice++){
        somaPontos = somaPontos + listaUsuarios[indice].pontos;
    }

    let mediaPontos = somaPontos / listaUsuarios.length;

    console.log("o time possue uma potuação media de:", mediaPontos);
}

while(sistemaAtivo){
    exibirMenuUsuarios();

    let opcaoEscolhida = Number(prompt("digite sua opção: "));

    if (opcaoEscolhida === 1){
        cadastrarUsuario();
    }else if (opcaoEscolhida === 2){
        deletarUsuario();
    }else if(opcaoEscolhida === 3){
        sistemaAtivo = false;
    }else if(opcaoEscolhida === 4){
        mostrarUsuarios();
    }else if(opcaoEscolhida === 5){
        calcularMediaPontos();
    }else if(opcaoEscolhida === 6){
        buscarUsuario();
    }else if(opcaoEscolhida === 7){
        atualizarPontos();
    }else{
        console.log("indevido");
    }
}