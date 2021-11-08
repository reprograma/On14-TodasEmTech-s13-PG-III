const mongoose = require("mongoose");

const MONGODB_URI =
  "mongodb+srv://dbBloco:87160862@cluster0.swpfg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connect = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Banco conectado (:");
  } catch (error) {
    console.log("Erro: ", error.message);
  }
};

module.exports = {
  connect,
};
