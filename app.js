const express = require('express');

const app = express();

// JSON data
app.use(express.json());

// Routes
const artistRoute = require('./routes/artistRoute');
const songRoute = require('./routes/songRoute');
const albumRoute = require('./routes/albumRoute');

// router
app.use('/api/v1/songs', songRoute);

app.use('/api/v1/artists', artistRoute);
app.use('/api/v1/albums', albumRoute);

app.use('*', (req, res) => {
  res.end('Sorry, the endpoint is not found!');
});

module.exports = app;
