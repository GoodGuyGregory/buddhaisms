const mongoose = require('mongoose');

const MantraSchema = mongoose.Schema({
     teaching: {
         type: String,
         require: true
     }
});

const Mantra = mongoose.model('Mantra', MantraSchema);

module.exports = Mantra;
