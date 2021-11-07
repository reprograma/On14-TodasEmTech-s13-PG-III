const mongoose = require('mongoose');

const serieSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    title: { type: String,
        required: true
    },
    totalSeasons: { type: Number,
        required: true
    },
    genre: { type: Array,
        required: true
    },
    writers: { type: Array,
        required: true
    },
    poster: { type: String,
        required: true
    },
    actors: { type: Array,
        required: true
    }
})

module.exports = mongoose.model('series',serieSchema)