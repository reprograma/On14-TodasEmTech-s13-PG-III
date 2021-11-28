//inicialização do Banco de Dados

const mongoose = require('mongoose');

//abaixo: endereço de conexão 
const MONGODB_URI = "mongodb+srv://JeniAlves:eejer123.@cluster0.sg5sn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const connect = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Banco conectado (:")
    } catch (error) {
        console.log("Erro: ", error.message)
    }
}

module.exports = {
    connect
}
