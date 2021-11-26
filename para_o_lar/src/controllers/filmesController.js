const filmeSchema = require("../models/filmeSchema")
const mongoose = require('mongoose')



 const getAll = async (req,res) =>{
    try {
        const filme = await filmeSchema.find()
        res.status(200).json(filme)

    } catch (error) {
        res.status(500).json({
            mensagem: error.message,
        })
    }
}
 const getById = async (req,res) => {
    try {
        const filmeEncontrado = await filmeSchema.findById(req.params.id)
            res.status(200).json(filmeEncontrado)

      } catch (error) {
          res.status(500).json({
              message: error.message
          })
      }
  }
  
const criarFilme = async (req,res) => {

    try {
        const novofilme = new filmeSchema({
      
         _id: new mongoose.Types.ObjectId(),

        Title:req.body.Title,
        Year:req.body.Year,
        Rated:req.body.Rated,
        Released:req.body.Released,
        Runtime:req.body.Runtime,
        Genre:req.body.Genre,
        Director:req.body.Director,
        Writer:req.body.Writer,
        Actors:req.body.Actors,
        Plot:req.body.Plot,
        Language:req.body.Language,
        Country:req.body.Country,
        Awards:req.body.Awards
    })
    
    const filmeSalvo = await novofilme.save()
    res.status(201).json({
        novofilme:filmeSalvo ,
    })

} catch(error) {
    res.status(400).json({
        mensagem: error.message,
    })
}
}
  //put
 
    const updatemovie = async (req, res) => {
        try {
            const filmeEncontrado = await filmeSchema.findById(req.params.id)
    
            if (filmeEncontrado) {
                
                filmeEncontrado.artista = req.body.artista || filmeEncontrado.artista
                filmeEncontrado.album = req.body.album || filmeEncontrado.album
                filmeEncontrado.ano = req.body.ano || filmeEncontrado.ano
                filmeEncontrado.titulo = req.body.titulo || filmeEncontrado.titulo
    
                const filmeSalvo = await filmeEncontrado.save()
                res.status(200).json({
                    filme: filmeSalvo
                })
            }
    
            res.status(400).json({
                mensagem: " Filme nao encontrado"
            })
        } catch (error) {
            res.status(400).json({
                mensagem: error.message
            })
        }
    }
    
    const deletefilmeById = async (req, res) => {
        try {
            const filmeEncontrado = await filmeSchema.findById(req.params.id)
    
           await filmeEncontrado.delete()
    
           res.status(200).json({
               mensagem: `filme '${filmeEncontrado.titulo}' deletado com sucesso!`
           })
    
        } catch (error) {
            res.status(400).json({
                mensagem: error.message
            })
        }
    }

module.exports = {
    getAll,
    getById,
    criarFilme,
    updatemovie,
    deletefilmeById
    
   
}