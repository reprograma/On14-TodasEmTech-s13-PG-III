// obejetivo:
// construir um bloco de notas 
// possuem notas[
    // Nota: Autora, título, data de criacao e um id

    {
   //    "id" : "3847489237349",
   //    "autora": "Paula",
   //    "titulo":,
   //    "data_de_criacao:"
    }
    // ]

    // objetivo construir o schema da nota

    const mongoose = require("mongoose");

    const noteSchema = new mongoose.Schema({
        id: mongoose.Schema.Types.ObjectId,
        author: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: new Date()
        }

      })
      module.exports = mongoose.model("note", noteSchema)