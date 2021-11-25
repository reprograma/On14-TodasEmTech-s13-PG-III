const mongoose = require("mongoose");
const UsersSchema = require("../models/usersSchema");


const getAll = async (req, res) => {
  try {
    const allUsers = await UsersSchema.find();
    res.status(200).send(allUsers);
  } catch (error) {
    res.status(500).send({
      message: error.message
    })
  }

}

const getById = async (req, res) => {
  try {
    console.log("to aqui")
    const userRequested = await UsersSchema.findById(req.params.id);
    console.log(userRequested)
    res.status(200).send(userRequested)
  } catch (error) {
    res.status(500).send({
      message: error.message
    })
  }
}

const createUser = async (req, res) => {
  try {
    const newUser = new UsersSchema({
      nome: req.body.nome,
      experiencia: req.body.experiencia, 
      cidade: req.body.cidade,
      telefone: req.body.telefone, 
      sistemas: req.body.sistemas,
      mestra: req.body.mestra,
      _id: new mongoose.Types.ObjectId()
    })

    const userSaved = await newUser.save()
    res.status(201).send(userSaved);
  } catch (error) {
    res.status(500).send({
      message: error.message
    })
  }
}

const updateUser = async (req, res) => {
  try {
    let userRequested = await UsersSchema.findById(req.params.id);
    let bodyRequest = req.body;
    if (userRequested) {
      userRequested.nome = bodyRequest.nome || userRequested.nome;
      userRequested.experiencia = bodyRequest.experiencia || userRequested.experiencia;
      userRequested.cidade = bodyRequest.cidade || userRequested.cidade
      userRequested.telefone = bodyRequest.telefone || userRequested.telefone
      userRequested.sistemas = bodyRequest.sistemas || userRequested.sistemas
      userRequested.mestra = bodyRequest.mestra || userRequested.mestra

      const userSaved = await userRequested.save();
      return res.status(200).send(userSaved);
    }
      return res.status(400).json({
        mensagem: "Não encontramos este usuario"
  })} catch (error) {
    return res.status(500).send({
      message: error.message
    })
  }
}

const deleteUser = async (req, res) => {
  try {
    const requestedUser = await UsersSchema.findByIdAndDelete(req.params.id);
    if(requestedUser == null) {
      return res.status(404).send({message: "Não foi encontrado usuario com a Id informada"})
    }
    return res.status(200).send({message: "Usuario deletado com sucesso"});

  } catch (error) {
    return res.status(500).send({
      message: error.message
    })
  }
}

module.exports = {
  getAll,
  createUser,
  getById,
  updateUser,
  deleteUser
}