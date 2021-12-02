const FilmesSchema = require("../models/filmesSchema");
const mongoose = require("mongoose");


//lógica para acessar todos os filmes cadastrados
const getAll = async (req, res) => {
    try {
        const filmes = await FilmesSchema.find();
        res.status(200).json(filmes)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

//lógica para buscar por id
const getById = async (req, res) => {
    try {
        //parametro por id
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

//lógica para criar mais filmes 
const criarFilmes = async (req, res) => {
    try {
        const novoFilme = await new FilmesSchema({
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

       const salvarFilme = await novoFilme.save();
       
       res.status(201).json({
           salvarFilme
       })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

//lógica para atualizar informações de algum filme
const atualizarFilmes = async (req, res) => {
    try {
        const id = req.params.id;
        const acharFilme = await FilmesSchema.findById(id);

        if (acharFilme) {
         acharFilme.title = req.body.title || acharFilme.title
         acharFilme.year = req.body.year || acharFilme.year
         acharFilme.rated = req.body.rated || acharFilme.rated
         acharFilme.released = req.body.released || acharFilme.released
         acharFilme.runtime = req.body.runtime || acharFilme.runtime
         acharFilme.genre = req.body.genre || acharFilme.genre
         acharFilme.director = req.body.director || acharFilme.director
         acharFilme.writer = req.body.writer || acharFilme.writer
         acharFilme.actors = req.body.actors || acharFilme.actors
         acharFilme.plot = req.body.plot || acharFilme.plot
         acharFilme.language = req.body.language || acharFilme.language
         acharFilme.country = req.body.country || acharFilme.country
         acharFilme.awards = req.body.awards || acharFilme.awards
        }

        const salvarFilme = await acharFilme.save();

        res.status(200).json({
            salvarFilme
        })
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

//lógica para deletar um filme 
const deletarFilme = async (req, res) => {
    try {
        const id = req.params.id;
        const acharFilme = await FilmesSchema.findById(id);

        await acharFilme.delete()

        res.status(200).json({
            message: `Filme ${acharFilme.title} deletado com sucesso!`
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
    criarFilmes,
    atualizarFilmes,
    deletarFilme
}