const mongoose = require('mongoose');

const MONGODB_URI = "mongodb+srv://kamilaaliima:devkamila21@cluster0.x2hmz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
console.log(MONGODB_URI)

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