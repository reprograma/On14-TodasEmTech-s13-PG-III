const NoteSchema = require("../models/noteSchema");
const mongoose = require("mongoose");

const getAll = async (req, res) => {
  try {
    const notes = await NoteSchema.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// criar método para cadastrar uma nota
const createNote = async (req, res) => {
  try {
    const newNote = new NoteSchema({
      author: req.body.author,
      title: req.body.title,
      note: req.body.note,
      _id: new mongoose.Types.ObjectId(),
    });

    const savedNote = await newNote.save();
    res.status(200).json({
      message: "Nota adicionada com sucesso! (:",
      savedNote,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// criar método para buscar nota por id
const getNoteById = async (req, res) => {
  try {
    const findNote = await NoteSchema.findById(req.params.id);
    if (findNote) {
      res.status(200).json(findNote);
    } else {
      res.status(404).json({
        message: "Não foi possível encontrar esta nota.",
      });
    }
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};

// criar método para atualizar informações de uma nota
const updateNoteById = async (req, res) => {
  try {
    const findNote = await NoteSchema.findById(req.params.id);

    if (findNote) {
      findNote.author = req.body.author || findNote.author;
      findNote.title = req.body.title || findNote.title;
      findNote.note = req.body.note || findNote.note;
    }

    const savedNote = await findNote.save();

    res.status(200).json({
      message: "Nota atualizada com sucesso!!!!",
      savedNote,
    });
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};

module.exports = {
  getAll,
  createNote,
  getNoteById,
  updateNoteById,
};
