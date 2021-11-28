const NoteSchema = require('../models/noteSchema')
//importando o mongoose:
const mongoose = require ('mongoose')
const { json } = require('express')

const getAll = async (req, res) => {
    try {
        const notes = await NoteSchema.find()
        res.status(200).json(notes)

    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
}

//criando método para cadastrar uma nota
const createNote = async (req, res) => {
    try { //acessar as informações enviadas no body da requisição.
        
//criando um novo schema de notas:
const newNote = new NoteSchema({
        autora: req.body.autora,
        titulo: req.body.titulo,
        _id: new mongoose.Types.ObjectId()
})
// salvando essa nota no banco de dados:
const savedNote = await newNote.save()
// enviando uma resposta para a requisição:
res.status(200).json({
    message: "Nota adicionada com sucesso!", savedNote
})

    } catch (erro){
        res.status(500).json({
            message: error.message
        })
    }
}

// criar metodo para atualizar informações de uma nota
const updateNoteById = async (req, res) => {
    try{
// criando uma const para chamar o id e encontrar a nota através do id
        const findNote = await NoteSchema.findById(req.params.id)
        console.log(findNote)
// acessar os dados a serem alterados recb pelo bady
       if (findNote){
           findNote.autora = req.body.autora || findNote.autora
           findNote.titulo = req.body.titulo || findNote.titulo
       }
       // salvando a alteração
       const savedNote = await findNote.save()
       console.log('nota depois da reatribuição', savedNote)
       // envio status como resposta para a requisição
       res.status(200).json({
           message: "Nota atualizada com sucesso!", savedNote 
       })

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}





module.exports = {
    getAll,
    createNote,
    updateNoteById
}