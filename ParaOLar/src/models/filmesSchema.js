const mongoose = require("mongoose");

const FilmesSchema = new mongoose.Schema({
    id: mongoose.Schema
    .Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    rated: {
        type: String,
        required: true
    }, 
    released: {
        type: String,
        required: true
    }, 
    runtime: {
        type: String,
        required: true
    }, 
    genre: {
        type: String,
        required: true
    }, 
    director: {
        type: String,
        required: true
    }, 
    writer: {
        type: String,
        required: true
    }, 
    actors: {
        type: String,
        required: true
    }, 
    plot: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    awards: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model("filmes", FilmesSchema);
