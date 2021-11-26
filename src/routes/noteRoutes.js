const express = require("express")
const router = express.Router()

const controller = require("../controller/noteController")

router.get("/all", controller.getAll)
router.post("/create",controller.CreateNote)
router.patch("/update/:id",controller.updateNoteById)


module.exports = router