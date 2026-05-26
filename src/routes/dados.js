var express = require("express");
var router = express.Router();

var dadosController = require("../controllers/dadosController");

router.get("/performance/:fk_usuario", function (req,res){
    dadosController.listarPerformance(req, res)
})

router.post("/cadastrar", function (req, res){
    dadosController.cadastrar(req, res)
})

// router.post("/cadastrar", function (req, res) {
//     usuarioController.cadastrar(req, res);
// })


module.exports = router;
