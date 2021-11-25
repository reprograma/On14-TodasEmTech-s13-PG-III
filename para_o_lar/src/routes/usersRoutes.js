const express = require("express")
const router = express.Router();
const controller = require("../controller/usersController")

router.get("/all", controller.getAll); // Funciona
router.post("/create", controller.createUser);  //Funciona
router.get("/procura:id", controller.getById);
router.patch("/update:id", controller.updateUser);
router.delete("/delete:id", controller.deleteUser);

module.exports = router