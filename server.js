const mongoose = require('mongoose');
const express = require('express');
const routes = require('../lib/routes');

let port = 6061;

mongoose.connection('mongodb://localhost:2701/buddhaisms', {useNewUrlParser: true, useUnifiedTopology: true});

let app = express();

app.use('/buddhaisms', routes);

app.listen(port, () => {
    console.log('guiding you through the way on http://%s', port);
});