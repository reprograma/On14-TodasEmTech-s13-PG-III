const express = require('express');
const router = express.Router()
const controller = require('../controller/musicaController')

router.get("/", controller.getAll)
router.post("/", controller.createMusic)
router.put("/:id", controller.updateMusic)
router.delete("/:id", controller.deleteMusic)

module.exports = router