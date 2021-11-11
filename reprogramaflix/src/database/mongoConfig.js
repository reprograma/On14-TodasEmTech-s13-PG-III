const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Banco conectado! (:");
  } catch (e) {
    console.log(`Erro: ${e}`);
  }
};

module.exports = {
  connect,
};
