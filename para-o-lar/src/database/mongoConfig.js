const mongoose = require('mongoose');


const MONGODB_URI = "mongodb+srv://apiCultural:1234@cluster0.vcdoc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const connect = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Banco conectado!")
    } catch (error) {
        console.log("Erro ao conectar com o banco.: ", error.message)
    }
}

module.exports = {
    connect
}
