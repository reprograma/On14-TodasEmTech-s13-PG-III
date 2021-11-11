const express = require("express");
const router = express.Router();

const controller = require("../controllers/moviesController");

router.get("/", controller.getAllMovies);
router.post("/create", controller.createMovies);
router.get("/:id", controller.getMoviesById);
router.patch("/update/:id", controller.updateMoviesByid);
router.delete("/delete/:id", controller.deleteMovies);

module.exports = router