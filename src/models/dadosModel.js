var database = require("../database/config")

function cadastrar(horas_jogadas, fk_usuario, qtd_cestas, qtd_partidas, qtd_vitorias){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar(): ", horas_jogadas, fk_usuario, qtd_cestas, qtd_partidas, qtd_vitorias);
    var instrucaoSql = `
        INSERT INTO dados_usuario (horas_jogadas, fk_usuario, qtd_cestas, qtd_partidas, qtd_vitorias) VALUES (${horas_jogadas}, ${fk_usuario}, ${qtd_cestas}, ${qtd_partidas}, ${qtd_vitorias})
    `;
    console.log("Executando o cadastro SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// function autenticar(email, senha) {
//     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    // var instrucaoSql = `
    //     SELECT id, nome, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    // `;
    // console.log("Executando a instrução SQL: \n" + instrucaoSql);
    // return database.executar(instrucaoSql);
// }

// // Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
// function cadastrar(nome, email, senha) {
//     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
//     // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
//     //  e na ordem de inserção dos dados.
//     var instrucaoSql = `
//         INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

module.exports = {
    cadastrar
};