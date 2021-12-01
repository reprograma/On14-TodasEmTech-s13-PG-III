const NoteSchema = require('../models/noteSchema')

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

//criar metodo para cadastrar uma nota

const createNote = (req, resp) => {
    try {
        // acessar as informações enviadas no body da requisição
            // criar um novo schema da nota
            new NoteSchema ({
                author: req.body.author,
                title: req.body.title,
                _id: new moongose.Types.ObjectId()
            })
                
            

            // salvar essa nota no meu bd
            // envio uma resposta pra requisição

    } catch (erro){


    }
}

module.exports = {
    getAll
}