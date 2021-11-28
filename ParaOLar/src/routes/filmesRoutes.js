const express = require("express");
const router = express.Router();

const controller = require("../controller/filmesController");

//rota para listar todos os filmes
router.get("/all", controller.getAll);
//rota para achar por id
router.get("/all/:id", controller.getById);
//rota para cadastrar novo filme
router.post("/create", controller.createMovies);
//rota para altualizar filme
router.patch("/update/:id", controller.updateMovie);
//rota para deletar filme
router.delete("/delete/:id", controller.deleteMovie);


module.exports = router;