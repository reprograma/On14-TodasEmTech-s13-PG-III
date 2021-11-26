const express = require('express')
const cors = require('cors')

require('dotenv-safe').config()
const db = require('./database/mongoConfig')

const noteRoutes = require('./src/routes/filmesRoutes')

const app = express()

app.use(cors())
app.use(express.json())
app.use("/filmes", filmesRoutes)

db.connect() 

module.exports = app