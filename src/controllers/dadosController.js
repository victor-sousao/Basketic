var dadosModel = require("../models/dadosModel");

function cadastrar(req, res) {
    var horas_jogadas = req.body.horasServer;
    var fk_usuario = req.body.fkUsuarioServer;
    var qtd_cestas = req.body.cestasServer
    var qtd_partidas = req.body.partidasServer
    var qtd_vitorias = req.body.vitoriasServer

    if (fk_usuario == undefined || qtd_cestas == undefined || qtd_partidas == undefined) {
        res.status(400).send("Todos os campos são obrigatórios!");
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

function listarPerformance(req, res) {

    let fk_usuario = req.params.fk_usuario

    dadosModel.listarPerformance(fk_usuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    cadastrar,
    listarPerformance
}
