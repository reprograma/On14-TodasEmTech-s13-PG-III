const app = require('./src/app');
const PORT = 6065;

app.listen(PORT, () => console.log("Servidor rodando na porta " + PORT));