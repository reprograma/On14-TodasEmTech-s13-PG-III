const express = require("express")
const router = express.Router()

const controller = require("../controllers/estabelecimentoController")


router.get("/todos", controller.getAll)

router.get("/:id", controller.getById)

router.post("/criar", controller.criarEstabelecimento)

router.patch("/updatelike/:id", controller.updateLike)

router.patch("/updatedeslike/:id", controller.updateDeslike)

router.put("/atualizar/:id", controller.atualizarEstabelecimento)

router.delete("/deletar/:id", controller.deletarEstabelecimento)

module.exports = router

