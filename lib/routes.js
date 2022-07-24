const express = require('express');
const dharmaTeachings = require('./controllers/dharma_teachings');
const mantras = require('./controllers/mantras');
const meditations = require('./controllers/meditations');
const sutras = require('./controllers/sutras');

let routes = express.Router();

routes.route('/dharma-teachings')
    .get(dharmaTeachings.config);

routes.route('/mantras')
    .get(mantras.config);

routes.route('/meditations')
    .get(meditations.config);

routes.route('/sutras')
    .get(sutras.config);




module.exports = routes;