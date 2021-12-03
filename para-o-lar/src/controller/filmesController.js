const FilmesSchema = require("../models/filmesSchema");
const mongoose = require("mongoose");



const getAll = async (req, res) => {
    try {
        const movies = await FilmesSchema.find();
        res.status(200).json(movies)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const getById = async (req, res) => {
    try {
       
        const id = req.params.id;
        const idRequest = await FilmesSchema.findById(id);

        if(!idRequest) {
            return res.status(422).send({ message: "Não encontramos nenhum cadastro com a informação passada." })
        }
        res.status(200).json({
            idRequest
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const createMovies = async (req, res) => {
    try {
        const newMovie = await new FilmesSchema({
            _id: new mongoose.Types.ObjectId(),
            title: req.body.title,
            year: req.body.year,
            rated: req.body.rated,
            released: req.body.released,
            runtime: req.body.runtime,
            genre: req.body.genre,
            director: req.body.director,
            writer: req.body.writer,
            actors: req.body.actors,
            plot: req.body.plot,
            language: req.body.language,
            country: req.body.country,
            awards: req.body.awards
        })

       const saveMovie = await newMovie.save();
       
       res.status(201).json({
           saveMovie
       })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const updateMovie = async (req, res) => {
    try {
        const id = req.params.id;
        const findMovie = await FilmesSchema.findById(id);

        if(findMovie) {
            findMovie.title = req.body.title || findMovie.title
            findMovie.year = req.body.year || findMovie.year
            findMovie.rated = req.body.rated || findMovie.rated
            findMovie.released = req.body.released || findMovie.released
            findMovie.runtime = req.body.runtime || findMovie.runtime
            findMovie.genre = req.body.genre || findMovie.genre
            findMovie.director = req.body.director || findMovie.director
            findMovie.writer = req.body.writer || findMovie.writer
            findMovie.actors = req.body.actors || findMovie.actors
            findMovie.plot = req.body.plot || findMovie.plot
            findMovie.language = req.body.language || findMovie.language
            findMovie.country = req.body.country || findMovie.country
            findMovie.awards = req.body.awards || findMovie.awards
        }

        const savedMovie = await findMovie.save();

        res.status(200).json({
            savedMovie
        })
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const deleteMovie = async (req, res) => {
    try {
        const id = req.params.id;
        const findMovie = await FilmesSchema.findById(id);

        await findMovie.delete()

        res.status(200).json({
            message: `Filme ${findMovie.title} deletado com sucesso!`
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    getAll,
    getById,
    createMovies,
    updateMovie,
    deleteMovie
}