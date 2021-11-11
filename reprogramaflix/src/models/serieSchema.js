const mongoose = require("mongoose");

const serieSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true,
  },
  totalSeasons: {
    type: Number,
    required: true,
  },
  genre: [
     {
      type: String,
      required: true,
    },
  ],

  writers: [
    {
      type: String,
      required: true,
    },
  ],

  actors: [
    {
      type: String,
      required: true,
    },
  ],

  poster: {
    type: String,
    required: true,
  },
  ratings: {
    rating: {
      type: Number,
    },
    likes: {
      type: Number,
    },
  },
});

module.exports = mongoose.model("serie", serieSchema);
