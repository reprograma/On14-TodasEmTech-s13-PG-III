const mongoose = require ('mongoose')

const artistaSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,

    artista: {
        type: String,
        unique: true,
        required: true
    },

    likes: {
        type: Number
    },

    deslikes: {
        type: Number
    },

    musicas: {
        type: Array
    },

    criadoEm: {
        type: Date,
        default: new Date()
    },

}) 


module.exports = mongoose.model("artista", artistaSchema)