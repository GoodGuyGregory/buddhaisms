const mongoose = require('mongoose');
const express = require('express');
const routes = require('./lib/routes');
const bodyParser = require('body-parser');

let port = 6061;

// TODO: Initialize Data before using mongo in the project
mongoose.connect('mongodb://127.0.0.1:27017/buddhaisms', { useNewUrlParser: true, useUnifiedTopology: true });

let app = express();

// POSTs Items to their categories
// app.use('/', bodyParser.json());

app.use('/buddhaisms/', routes);


app.listen(port, () => {
    console.log('guiding you through the way on http://localhost:%s', port);
});