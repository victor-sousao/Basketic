var dadosModel = require("../models/dadosModel");

function cadastrar(req, res) {
    var horas_jogadas = req.body.horasServer;
    var fk_usuario = req.body.fkUsuarioServer;
    var qtd_cestas = req.body.cestasServer
    var qtd_partidas = req.body.partidasServer
    var qtd_vitorias = req.body.vitoriasServer

    if (horas_jogadas == undefined || fk_usuario == undefined || qtd_cestas == undefined || qtd_partidas == undefined || qtd_vitorias == undefined) {
        res.status(400).send("Um ou mais campos estão undefined");
        return;
    }

    dadosModel.cadastrar(horas_jogadas, fk_usuario, qtd_cestas, qtd_partidas, qtd_vitorias)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}


// function cadastrar(req, res) {
//     // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
//     var nome = req.body.nomeServer;
//     var email = req.body.emailServer;
//     var senha = req.body.senhaServer;
//     // var fkEmpresa = req.body.idEmpresaVincularServer;

//     // Faça as validações dos valores
//     if (nome == undefined) {
//         res.status(400).send("Seu nome está undefined!");
//     } else if (email == undefined) {
//         res.status(400).send("Seu email está undefined!");
//     } else if (senha == undefined) {
//         res.status(400).send("Sua senha está undefined!");
//     // } else if (fkEmpresa == undefined) {
//     //     res.status(400).send("Sua empresa a vincular está undefined!");
//     } else {

//         // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
//         usuarioModel.cadastrar(nome, email, senha)
//             .then(
//                 function (resultado) {
//                     res.json(resultado);
//                 }
// ).catch(
//     function (erro) {
//         console.log(erro);
//         console.log(
//             "\nHouve um erro ao realizar o cadastro! Erro: ",
//             erro.sqlMessage
//         );
//         res.status(500).json(erro.sqlMessage);
//     }
// );
//     }
// }


module.exports = {
    cadastrar
}