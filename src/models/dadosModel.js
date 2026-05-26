var database = require("../database/config")

function cadastrar(horas_jogadas, fk_usuario, qtd_cestas, qtd_partidas, qtd_vitorias){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar(): ", fk_usuario, qtd_cestas, qtd_partidas, qtd_vitorias);
    var instrucaoSql = `
        INSERT INTO dados_usuario (horas_jogadas, fk_usuario, qtd_cestas, qtd_partidas, qtd_vitorias) VALUES (${horas_jogadas}, ${fk_usuario}, ${qtd_cestas}, ${qtd_partidas}, ${qtd_vitorias})
    `;
    console.log("Executando o cadastro SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPerformance(fk_usuario){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar(): ",  fk_usuario );
    var instrucaoSql = `
       SELECT qtd_cestas, qtd_partidas FROM dados_usuario WHERE fk_usuario = ${fk_usuario} ORDER BY dt_jogo DESC LIMIT 7;`;
    console.log("Executando o cadastro SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    listarPerformance
};