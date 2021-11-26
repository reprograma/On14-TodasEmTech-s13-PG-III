const controller = require("../controllers/filmesController")


const express = require("express")
const router = express.Router()



   
router.get("",controller.getAll)
router.get("/:id" , controller.getById)

router.post("/criar", controller.criarFilme)

router.put("/update/:id",controller.updatemovie)

router.delete("/delete/:id" , controller.deletefilmeById)


module.exports = router