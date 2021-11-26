
const NoteSchema = require('../models/noteSchema')
const mongoose = require('mongoose')

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

const CreateNote = async (req,res) => {
   
try{
    const newNote =new NoteSchema ({
        author: req.body.author,
        title : req.body.title,
        _id: new mongoose.Types.ObjectId()
    })

  const savedNote= await newNote.save() 

  res.status(200).json({
      message :"Nota adicionada com sucesso! (:",
    savedNote
})
}
catch (erro){
    res.status(500).json({
        message: error.message,
})
}
}

const updateNoteById = async (req,res)=>{

    try{
      const findNote = await NoteSchema.findById(req.params.id)
     console.log(findNote);

     if (findNote){ 
         findNote.author = req.body.author || findNote.author
      findNote.title = req.body.title || findNote.title
    }
    const savedNote = await findNote.save()
    console.log("apos atualizacao",savedNote);

    res.status(200).json({
        message:"Nota atualizada",
        savedNote
    })
    
}
    catch (erro){
        res.status(500).json({
            message: error.message,
    })
}
}

module.exports = {
    getAll,
    CreateNote,
    updateNoteById

}