const app = require("./src/app");
const PORT = 5050;


app.listen(PORT, () => {
    console.log(`Olá, estou na porta: ${PORT}`);
});