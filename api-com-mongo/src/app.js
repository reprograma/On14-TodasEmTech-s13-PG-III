const express = require('express')
const cors = require('cors')

require('dotenv-safe').config()
const db = require('./database/mongoConfig')

const musicaRoutes = require('./routes/musicaRoutes')

const app = express()

app.use(cors())
app.use(express.json())
app.use("/musica", musicaRoutes)

db.connect() 

module.exports = app