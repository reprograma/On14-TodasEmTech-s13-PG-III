const express = require("express")

const router = express.Router()

const controller = require("../controller/musicaController")

router.get("/all", controller.getAll)
router.post("/create", controller.createMusic)
router.get("/titulo", controller.musicaPorTitulo)

router.get("/:id", controller.musicaPorId)
router.patch("/update/:id", controller.updateMusicById)
router.delete("/delete/:id", controller.deleteMusicById)
module.exports = router