const MoviesSchema = require('../modules/moviesSchema')
const mongoose = require('mongoose')

const getAll = async (req,res) => {
    try {
        const movies = await MoviesSchema.find();
        res.status(200).send(movies);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getById = async (req, res) => {
    try {
        const movies = await MoviesSchema.findById(req.params.id);
        res.status(200).send(movies);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const create = async (req,res) => {
    try {
        const newMovie = new MoviesSchema({
            _id: new mongoose.Types.ObjectId,
            Title: req.body.Title,
            Year: req.body.Year,
            Rated: req.body.Rated,
            Released:req.body.Released,
            Runtime: req.body.Runtime,
            Genre:req.body.Genre,
            Director:req.body.Director,
            Writer: req.body.Writer,
            Actors: req.body.Actors,
            Plot: req.body.Plot,
            Language: req.body.Language,
            Country: req.body.Country,
            Awards: req.body.Awards
        })

        const movie = await newMovie.save();
        res.status(200).send(movie)
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const update = async (req,res) => {
    try {
        const movie = await MoviesSchema.findById(req.params.id);

        if(movie){
            movie.Title = req.query.Title || movie.Title
            movie.Year = req.query.Year || movie.Year
            movie.Rated = req.query.Rated || movie.Rated
            movie.Released = req.query.Released || movie.Released
            movie.Runtime = req.query.Runtime || movie.Runtime
            movie.Genre = req.query.Genre || movie.Genre
            movie.Director = req.query.Director || movie.Director
            movie.Writer = req.query.Writer || movie.Writer
            movie.Actors = req.query.Actors || movie.Actors
            movie.Plot = req.query.Plot || movie.Plot
            movie.Language = req.query.Language || movie.Language
            movie.Country = req.query.Country || movie.Country
            movie.Awards = req.query.Awards || movie.Awards
        }

        const savedMovie = await movie.save()

        res.status(200).send(savedMovie)
    } catch (error) {
        res.status(500).send(error.message)
    }
    
}

const remove = async (req,res) => {
    try {
        const movie = await MoviesSchema.findById(req.params.id);
        const deletedMovie = await movie.remove();
        res.status(200).send(deletedMovie)
    } catch (error) {
        res.status(500).send(error.message)
    }
    
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
}