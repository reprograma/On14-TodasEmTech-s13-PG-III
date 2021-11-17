const mongoose = require('mongoose');

const culturalSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    id: {
        type: Number,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    like: {
        type: Number,
        required: true
    },
    deslike: {
        type: Number,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    endereço: {
        type: String,
        required: true
    },
    numero: {
        type: Number,
        required: true
    },
    bairro: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    telefone: {
        type: Number,
        required: true
    },
    pagamento: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('cultural', culturalSchema)