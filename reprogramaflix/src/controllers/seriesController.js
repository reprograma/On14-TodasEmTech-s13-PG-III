const SerieSchema = require("../models/serieSchema");
const mongoose = require("mongoose");

const getAllSeries = async (request, response) => {
  try {
    const seriesFound = await SerieSchema.find();
    response.status(200).json({
      message: "Todas as séries encontradas: ",
      seriesFound,
    });
  } catch (e) {
    response.status(500).json([
      {
        message: e.message,
      },
    ]);
  }
};

const createSeries = async (request, response) => {
  try {
    const newSerie = new SerieSchema({
      _id: new mongoose.Types.ObjectId(),
      title: request.body.title,
      totalSeasons: request.body.totalSeasons,
      genre: request.body.genre,
      writers: request.body.writers,
      actors: request.body.actors,
      poster: request.body.poster,
      ratings: request.body.ratings,
    });
    if (
      newSerie.genre.length === 0 ||
      newSerie.writers.length === 0 ||
      newSerie.actors.length === 0
    ) {
      response.status(401).json({
        message:
          " É obrigatório os preenchimentos dos campos genre, writers e actors! Por favor, verifique!",
      });
    } else {
      const savedSerie = await newSerie.save();
      response.status(201).json({
        message: `A série ${newSerie.title} foi criada com sucesso!`,
        savedSerie,
      });
    }
  } catch (e) {
    response.status(500).json({
      message: e.message,
    });
  }
};

const getSeriesByGenres = async (req, res) => {
  try {
    const seriesFound = await SerieSchema.find({
      genre: new RegExp(req.query.genre, "i"),
    });
    if (seriesFound) {
      res.status(200).json({
        message: `Séries do gênero de ${req.query.genre}:`,
        seriesFound,
      });
    }
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};

const getSeriesById = async (req, res) => {
  try {
    const serieFound = await SerieSchema.findById(req.params.id);
    if (serieFound) {
      res.status(200).json({
        message: `Serie encontrada:`,
        serieFound,
      });
    } else {
      res.status(404).json({
        message: "Não foi possível encontrar esta série.",
      });
    }
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};

const updateSeriesById = async (req, res) => {
  try {
    const serieFound = await SerieSchema.findById(req.params.id);
    if (serieFound) {
      serieFound.title = req.body.title || serieFound.title;
      serieFound.totalSeasons =
        req.body.totalSeasons || serieFound.totalSeasons;
      serieFound.genre = req.body.genre || serieFound.genre;
      serieFound.writers = req.body.writers || serieFound.writers;
      serieFound.actors = req.body.actors || serieFound.actors;
      serieFound.poster = req.body.poster || serieFound.poster;
      serieFound.ratings = req.body.ratings || serieFound.ratings;
    }
    const savedSerieFound = await serieFound.save();
    res.status(200).json({
      message: `A série ${serieFound.title} foi atualizada com sucesso!`,
      savedSerieFound,
    });
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};

const deleteSeries = async (req, res) => {
  try {
    const serieFound = await SerieSchema.findById(req.params.id);
    await serieFound.delete();
    res.status(200).json({
      message: `A série ${serieFound.title} foi removida com sucesso!`,
    });
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};

module.exports = {
  getAllSeries,
  createSeries,
  getSeriesByGenres,
  getSeriesById,
  updateSeriesById,
  deleteSeries,
};
