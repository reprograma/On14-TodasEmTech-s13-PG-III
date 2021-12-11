const EstabelecimentoSchema = require('../models/estabelecimentoSchema');
const mongoose = require('mongoose')


const getAll = async (req, res) => {
    try {
        const estabelecimento = await EstabelecimentoSchema.find()
        res.status(200).json(estabelecimento)

    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
}


const createEstabelecimento = async (req, res) => {
    try { 
        const newEstabelecimento = new EstabelecimentoSchema({
           
            likes: req.body.likes,
            nome: req.body.nome,
            categoria: req.body.categoria,
            endereço: req.body.endereço,
            numero: req.body.numero,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            telefone: req.body.telefone,
            pagamento: req.body.pagamento,
            delivery: req.body.delivery,
            _id: new mongoose.Types.ObjectId()         
        })

        const savedEstabelecimento = await newEstabelecimento.save()
        res.status(200).json({
            message: "estabelecimento adicionado com sucesso!",
            savedEstabelecimento
        })

    } catch(error) {
        res.status(500).json({
            mensage: error.message
        })
    }
}


const findEstabelecimentoById = async (req, res) => {
    try{
        const estabelecimento = await EstabelecimentoSchema.findById(req.params.id)
      
        if(estabelecimento) {
        res.status(200).json({
            message: "Estabelecimento encontrado!", estabelecimento
            })
        } else {
            res.status(404).json({
                message: "Estabelecimento não encontrado!"
            })
        }
            } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
}


const updateEstabelecimentoById = async (req, res) => {
    try{
        const findEstabelecimento = await EstabelecimentoSchema.findById(req.params.id)
        console.log(findEstabelecimento)
        
        if(findEstabelecimento) {
            findEstabelecimento.likes = req.body.likes || findEstabelecimento.likes
            findEstabelecimento.nome = req.body.nome || findEstabelecimento.nome
            findEstabelecimento.categoria = req.body.categoria || findEstabelecimento.categoria
            findEstabelecimento.endereço = req.body.endereço || findEstabelecimento.endereço
            findEstabelecimento.numero = req.body.numero || findEstabelecimento.numero
            findEstabelecimento.bairro = req.body.bairro || findEstabelecimento.bairro
            findEstabelecimento.cidade = req.body.cidade || findEstabelecimento.cidade
            findEstabelecimento.telefone = req.body.telefone || findEstabelecimento.telefone
            findEstabelecimento.pagamento = req.body.pagamento || findEstabelecimento.pagamento
            findEstabelecimento.delivery = req.body.delivery || findEstabelecimento.delivery
    }

        const savedEstabelecimento = await findEstabelecimento.save()
        console.log('após atualização', savedEstabelecimento)

        res.status(200).json({
            message: "Estabelecimento atualizado com sucesso",
            savedEstabelecimento

        })


    }catch(error) {
        res.status(500).json({
            message: error.message
        })
    }

}


const deleteEstabelecimentoById = async (req, res) => {
    try {
        const estabelecimentoEncontrado = await EstabelecimentoSchema.findById(req.params.id)

       await estabelecimentoEncontrado.delete()

       res.status(200).json({
           mensagem: `Estabelecimento deletado com sucesso!`
       })

    } catch (error) {
        res.status(400).json({
            mensagem: error.message
        })
    }
}


module.exports = {

    getAll,
    findEstabelecimentoById,
    createEstabelecimento,
    updateEstabelecimentoById,
    deleteEstabelecimentoById
    
}

