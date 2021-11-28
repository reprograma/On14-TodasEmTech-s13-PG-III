const blocoDeNotas = {
  id: "1",
  autora: "Jeni",
  titulo: "Demanda de Negócios",
  data_de_criaçao: "23/11/21"
}
// construindo o schema da nota - tempo 2:35:56
const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  autora: {
    type: String,
    require: true
  },
  titulo: {
    type: String,
    require: true
  },
  data_de_criaçao: {
    type: Date,
    require: new Date()
  }
})

module.exports = mongoose.model('note', noteSchema)