const mongoose = require("mongoose");
const NoteSchema = require("../models/noteSchema");

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

const createNote = async (req, res) => {
  try {
    const newNote = new NoteSchema({
      author: req.body.author,
      title: req.body.title,
      _id: new mongoose.Types.ObjectId(),
    });

    const sevedNote = await newNote.save();

    res.status(200).json({
      message: "nota adastrada com sucesso!",
      sevedNote,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateNoteById = async (req, res) => {
  try {
    const findNote = await NoteSchema.findById(req.params.id);

    if (findNote) {
      findNote.author = req.body.author || findNote.author;
      findNote.title = req.body.title || findNote.title;
    }

    const savedNote = await findNote.save();
    res.status(200).json({
      message: "Nota atualizada com sucesso",
      savedNote,
    });
  } catch (error) {}
};

module.exports = {
  getAll,
  createNote,
  updateNoteById,
};
