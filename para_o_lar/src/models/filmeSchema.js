const mongoose = require('mongoose');

const filmeSchema = new mongoose.Schema({
    
    
    Title: {
        type: String,
        required: true
    },

    Year: {
        type: Number,
        required: true
    },

    Rated:{
         type: String,
        required:true
    },

    Released:{
        type: String,
        required:true
    },

    Runtime:{
        type: String,
        required:true
    },

    Genre:{
        type: String,
        required:true
    },

    Director:{
        type: String,
        required:true
    },

    Writer:{
        type: String,
        required:true
    },

    Actors:{
        type: String,
        required:true
    },

    Plot:{
        type: String,
        required:true
    },

     Language:{
        type: String,
        required:true
    },

    Country:{
        type: String,
        required:true
    },

    Awards:{
    type: String,
    required:true
},

    criadoEm: {
        type: Date,
        default: new Date()},

        id: mongoose.Schema.Types.ObjectId,

    })

module.exports = mongoose.model("filme", filmeSchema)