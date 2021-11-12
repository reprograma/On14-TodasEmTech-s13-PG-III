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

// achar notation

const getByid = async (req,res) => {
    try {
        const noteById = await NoteSchema.findById(req.params.id);
        if(noteById){
            res.status(200).send(noteById)
        }else{
            res.status(404).json({message: "Nota não encontrada."})
        }
        
    } catch (error) {
        res.status(500).send(error.message)
    }
}


//deletar nota

const deleteNote = async (req,res) => {
    try {
        const foundNote = await NoteSchema.findById(req.params.id)

        const deletedNote = await foundNote.remove()
        res.status(200).send(deletedNote)

    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    getAll
}