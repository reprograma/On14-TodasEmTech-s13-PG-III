const mongoose = require('mongoose');

const estabelecimentoSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,

    likes: {
        type: Number,
        required: true
    },

    nome: {
        type: String,
        required: true
    },

    categoria: {
        type: String,
        default: true
    },
    endereço: {
        type: String,
        required: true
    },

    numero: {
        type: String,
        default: true
    },
    bairro: {
        type: String,
        required: true
    },

    cidade: {
        type: String,
        default: true
    },
    telefone: {
        type: String,
        required: true
    },

    pagamento: {
        type: Array,
        default: true
    },
    delivery: {
        type: String,
        required: true || false
    }


})

module.exports = mongoose.model('Estabelecimento', estabelecimentoSchema)