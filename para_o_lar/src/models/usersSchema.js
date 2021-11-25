const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  nome: {
    type: String,
    required: true,
  }, 
  experiencia: {
    type: Number,
  }, 
  cidade: {
    type: String
  },
  telefone: {
    type: String
  }, 
  sistemas: {
    type: Array,
    required: true
  },
  mestra: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model("user", userSchema)