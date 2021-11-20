const express = require("express")
const controller = require("../controller/estabelecimentoController");
const router = express.Router();

router.get("/all", controller.getAll)

router.get("/:id", controller.findEstabelecimentoById)

router.post("/create", controller.createEstabelecimento)

router.patch("/update/:id", controller.updateEstabelecimentoById)

router.delete("/remove/:id", controller.deleteEstabelecimentoById)

module.exports = router