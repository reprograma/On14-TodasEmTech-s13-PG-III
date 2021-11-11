const MovieSchema = require("../models/movieSchema");
const mongoose = require("mongoose");

const getAllMovies = async (req, res) => {
  try {
    const moviesFound = await MovieSchema.find();
    res.status(200).json({
      message: "Todos os filmes encontrados: ",
      moviesFound,
    });
  } catch (e) {
    res.status(500),
      json({
        message: e.message,
      });
  }
};

const createMovies = async (req, res) => {
  try {
    const newMovie = new MovieSchema({
      _id: mongoose.Types.ObjectId(),
      Title: req.body.Title,
      Year: req.body.Year,
      Rated: req.body.Rated,
      Released: req.body.Released,
      Runtime: req.body.Runtime,
      Genre: req.body.Genre,
      Director: req.body.Director,
      Writer: req.body.Writer,
      Actors: req.body.Actors,
      Plot: req.body.Plot,
      Language: req.body.Language,
      Country: req.body.Country,
      Awards: req.body.Awards,
    });
    const savedMovie = await newMovie.save();
    res.status(201).json({
      message: `O filme ${newMovie.Title} foi criado com sucesso!`,
      savedMovie,
    });
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};

const getMoviesById = async (req, res) => {
  try {
    const movieFound = await MovieSchema.findById(req.params.id);
    if (movieFound) {
      res.status(200).json({
        message: "Filme encontrado:",
        movieFound,
      });
    } else {
      res.status(404).json({
        message: "Não foi possível encontrar este filme.",
      });
    }
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};

const updateMoviesByid = async (req, res) => {
  try {
    const movieFound = await MovieSchema.findById(req.params.id);
    if (movieFound) {
      movieFound.Title = req.body.Title || movieFound.Title;
      movieFound.Year = req.body.Year || movieFound.Year;
      movieFound.Rated = req.body.Rated || movieFound.Rated;
      movieFound.Released = req.body.Released || movieFound.Released;
      movieFound.Runtime = req.body.Runtime || movieFound.Runtime;
      movieFound.Genre = req.body.Genre || movieFound.Genre;
      movieFound.Director = req.body.Director || movieFound.Director;
      movieFound.Writer = req.body.Writer || movieFound.Writer;
      movieFound.Actors = req.body.Actors || movieFound.Actors;
      movieFound.Plot = req.body.Plot || movieFound.Plot;
      movieFound.Language = req.body.Language || movieFound.Language;
      movieFound.Country = req.body.Country || movieFound.Country;
      movieFound.Awards = req.body.Awards || movieFound.Awards;
    }
    const savedMovie = await movieFound.save();
    res.status(200).json({
      message: `O filme ${movieFound.Title} foi atualizado com sucesso!`,
      savedMovie,
    });
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};

const deleteMovies = async (req, res) =>{
 try {
     const movieFound = await MovieSchema.findById(req.params.id)
     await movieFound.delete()
     res.status(200).json({
         message: `O filme ${movieFound.Title} foi deletado com sucesso!`
     })
 } catch (e) {
     res.status(500).json({
         message: e.message
     })
 }
}


module.exports = {
  getAllMovies,
  createMovies,
  getMoviesById,
  updateMoviesByid,
  deleteMovies
};
