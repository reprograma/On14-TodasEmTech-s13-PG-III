const express = require("express");
const router = express.Router();

const controller = require("../controller/filmesController");


router.get("/all", controller.getAll);
router.get("/all/:id", controller.getById);
router.post("/create", controller.createMovies);
router.put("/update/:id", controller.updateMovie);
router.delete("/delete/:id", controller.deleteMovie);


module.exports = router;