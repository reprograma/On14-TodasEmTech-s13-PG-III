const express = require("express");
const controller = require("../controller/artistasController");

const router = express.Router();

router.get("/all", controller.getAllArtistas);
router.get("/pesquisar", controller.pesquisarAlbum);
router.get("/:id", controller.getArtistasById);
router.post("/criar", controller.createArtistas);
router.patch("/update/:id", controller.updateArtistas);
router.delete("/delete/:id", controller.deleteArtistas);

module.exports = router;