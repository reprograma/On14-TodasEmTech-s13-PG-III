const express = require("express");
const router = express.Router();

const controller = require("../controller/noteController");

// DEMANDA: visualizar todas as notas cadastradas
router.get("/all", controller.getAll);

// DEMANDA: cadastrar nota
router.post("/create", controller.createNote);

// DEMANDA: buscar uma nota por id
router.get("/search/:id", controller.getNoteById);

// DEMANDA: atualizar uma nota
router.patch("/update/:id", controller.updateNoteById);

module.exports = router;
