const express = require("express");
const cors = require("cors");

require("dotenv-safe").config();
const db = require("./database/mongoConfig");

const router = require("./routes/filmesRoutes");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", router);

db.connect();


module.exports = app;