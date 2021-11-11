const express = require("express");
const cors = require("cors");

require("dotenv-safe").config();
const db = require("./database/mongoConfig");

const seriesRoutes = require("./routes/seriesRoutes");
const moviesRoutes = require("./routes/moviesRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/series", seriesRoutes);
app.use("/movies", moviesRoutes);

db.connect();

module.exports = app;
