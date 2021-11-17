const express = require("express")
const cors = require("cors")

require('dotenv-safe').config()
const db = require('./database/mongoConfig')

const culturalRoutes = require("./routes/estabelecimentoRoutes")

const app = express()

app.use(cors())
app.use(express.json())
app.use("/cultural", culturalRoutes)

db.connect() 

module.exports = app
