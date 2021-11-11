const express = require("express");
const router = express.Router();

const controller = require("../controllers/seriesController");

router.get("/", controller.getAllSeries);
router.post("/create", controller.createSeries);
router.get("/filter", controller.getSeriesByGenres);
router.get("/:id", controller.getSeriesById);
router.patch("/update/:id", controller.updateSeriesById);
router.delete("/delete/:id", controller.deleteSeries);



module.exports = router;
