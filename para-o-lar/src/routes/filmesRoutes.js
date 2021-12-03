const express = require("express");
const routes = express.Router();

const controller = require("../controller/filmesController");


routes.get("/all", controller.getAll);
routes.get("/all/:id", controller.getById);
routes.post("/create", controller.createMovies);
routes.patch("/update/:id", controller.updateMovie);
routes.delete("/delete/:id", controller.deleteMovie);


module.exports = routes;