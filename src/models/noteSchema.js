const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  author: {
    type: String,
    required: true, //obrigatorio
  },
  title: {
    type: String,
    required: true, //obrigatorio
  },
  createdAt: {
    type: Date,
    default: new Date(), // reenche automatico
  },
});

module.exports = mongoose.model("note", noteSchema);
