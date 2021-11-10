const  ArtistasSchema= require("../models/noteSchema");
const mongoose = require("mongoose");

const getAllArtistas = async (req, res) => {
  try {
    const artists = await ArtistasSchema.find();
    res.status(200).json(artists);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const pesquisarAlbum = async (req, res) => {
  try {
    const albumFound = await ArtistasSchema.find({
      album: new RegExp(req.query.album, "i"),
    });
    res.status(200).json({
      message: albumFound,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getArtistasById = async (req, res) => {
  try {
    const artistFound = await ArtistasSchema.findById(req.params.id);
    if (artistFound) {
      res.status(200).json(artistFound);
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createArtistas = async (req, res) => {
  try {
    const artist = new ArtistasSchema({
      _id: new mongoose.Types.ObjectId(),

      artista: req.body.artista,
      likes: req.body.likes,
      deslikes: req.body.deslikes,
      musicas: req.body.musicas,
      album: req.body.album,
      ano: req.body.ano,
    });
    const artistSaved = await artist.save();
    res.status(201).json({
      massage: `Artista: ${artist.artista}, criado com sucesso!!`,
      artistSaved,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateArtistas = async (req, res) => {
  try {
    const artistFound = await ArtistsSchema.findById(req.params.id);

    if (artistFound) {
      artistFound.artista = req.body.artista || artistFound.artista;
      artistFound.feat = req.body.feat || artistFound.feat;
      artistFound.likes = req.body.likes || artistFound.likes;
      artistFound.deslikes = req.body.deslikes || artistFound.deslikes;
      artistFound.musicas = req.body.musicas || artistFound.musicas;
      artistFound.album = req.body.album || artistFound.album;
      artistFound.ano = req.body.ano || artistFound.ano;
    }
    const artistSaved = await artistFound.save();
    res.status(200).json({
      message: `Artista: ${artistFound.artista}, atualizado com sucesso com sucesso!`,
      artistSaved,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteArtistas = async (req, res) => {
  try {
    const artistFound = await ArtistsSchema.findById(req.params.id);

    if (artistFound) {
      artistFound.delete();
      res.status(200).json({
        message: `Artista: ${artistFound.artista}, excluído com sucesso!!!`,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllArtistas,
  pesquisarAlbum,
  createArtistas,
  getArtistasById,
  updateArtistas,
  deleteArtistas,
};