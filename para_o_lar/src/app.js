const express = require('express');
const cors = require('cors');

require('dotenv-safe').config();
const db = require("./database/mongoConfig")


const usersRoutes = require("./routes/usersRoutes")

const app = express()

app.use(cors())
app.use(express.json())
app.use("/users", usersRoutes);

db.connect()

module.exports = app

