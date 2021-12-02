const noteSchema = require("../models/noteSchema")
const mongoose = require("mongoose")

const getAll = async (request, response) => {
    try {
        const notes = await NoteSchema.find()
        res.status(200).json(notes)

    } catch (error) {
        response.status(500).json({
            message: error.message,
        })
    }

}

// criar metodo para cadstrar uma rota
//acessar as informações enviadas no bpody da requisição

        //criar um novoschema da nota

        //salvar essa nota no meu banco
        // envio uma reposta pra requisição

const createNote = async (request, response) => {
    try {
       const newNote = new noteSchema({
            author: request.body.author,
            title: request.body.title,
            _id: new mongoose.Types.ObjectId()
        })
        const savedNote = await newNote.save()

        response.status(200).json({
            message: "Nota adicionada com sucesso :)",
            savedNote
        }) 
    }catch (error) {
        response.status(500).json({
            messagem: error.message
        })
    }
}

const updateNoteById = (request, response) => {
    try {
        const findNote = NoteSchema.findById(request.parms.id)
        console.log("Nota inicial", findNote)

        if (findNote) {
        findNote.author = request.body.author || findNote.author
        findNote.title = request.body.title || findNote.title
        }
        
        console.log("Nota depois da reatribuição", findNote)

        const savedNote = findNote.save()
        response.status(200).jason({
            message: "Nota atualizada com sucesso",
            savedNote
        })


    } catch (error){

    }
}

module.exports = {
    getAll,
    createNote,
    updateNoteById
}