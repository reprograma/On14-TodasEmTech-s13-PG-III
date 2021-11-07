const SeriesSchema = require('../modules/seriesSchema')
const mongoose = require('mongoose')

const getAll = async (req,res) => {
    try {
        const series = await SeriesSchema.find();
        res.status(200).send(series)
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getById = async (req,res) => {
    try {
        const series = await SeriesSchema.findById(req.params.id) //PRECISO MESMO DE req.params.id
        res.status(200).send(series)

    } catch (error) {
        res.status(500).send(error.message);
    }
}

const create = async (req,res) => {
    try {
        const series = await SeriesSchema.findById(req.params.id);

        const newSeries = new SeriesSchema({
        _id: new mongoose.Types.ObjectId,
        title: req.body.title,
        totalSeasons:req.body.totalSeasons,
        genre: req.body.genre,
        writers: req.body.writers,
        poster: req.body.poster,
        actors: req.body.actors
        })

        const savedSeries = await newSeries.save();
        res.status(201).send(savedSeries)
    } catch(error) {
        res.status(500).send(error.message)
    }    
}

const update = async (req, res) => {
    try {
        const series = await SeriesSchema.findById(req.params.id);

        if(series){
            series.title = req.query.title || series.title
            series.totalSeasons =req.query.totalSeasons || series.totalSeasons
            series.genre = req.query.genre || series.genre
            series.writers = req.query.writers || series.writers
            series.poster = req.query.poster || series.poster
            series.actors = req.query.actors || series.actors
            series.ratings = req.query.ratings || series.ratings
        }

        const savedSeries = await series.save();
        res.status(200).send(savedSeries);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const remove = async (req,res) => {
    const series = await SeriesSchema.findById(req.params.id)

    const deletedSeries = await series.remove()
    res.status(200).send(deletedSeries)
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
}