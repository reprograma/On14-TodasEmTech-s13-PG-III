const app = require("./src/app");
const PORT = 5050;


app.listen(PORT, () => {
    console.log(`Agora vai rodar na porta: ${PORT}`);
});