const express = require("express");
const router = express.Router();

const controller = require("../controller/filmesController");

//rota para listar todos os filmes
router.get("/todos", controller.getAll);
//rota para achar por id
router.get("/todos/:id", controller.getById);
//rota para cadastrar novo filme
router.post("/criar", controller.criarFilmes);
//rota para altualizar filme
router.patch("/atualizar/:id", controller.atualizarFilmes);
//rota para deletar filme
router.delete("/deletar/:id", controller.deletarFilme);


module.exports = router;