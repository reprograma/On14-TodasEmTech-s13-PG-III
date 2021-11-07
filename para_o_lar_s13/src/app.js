const moviesRouter = require('./routes/moviesRoutes');
const seriesRouter = require('./routes/seriesRoutes');

require('dotenv-safe').config();
const db = require('./database/MongoDBconfig');

const express = require('express');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(express.json());
app.use('/movies', moviesRouter);
app.use('/series', seriesRouter);

db.connect();

module.exports = app;