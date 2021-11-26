const express = require("express")
const cors = require("cors")

const dotenv = require('dotenv')

const database = require('./database/mongoConfig')

const filmesRoutes = require("./routes/filmesRoutes")

const app = express()

app.use(cors())
app.use(express.json())

// rota principal
app.use("/filmes", filmesRoutes)

dotenv.config()


database.connect()

module.exports = app