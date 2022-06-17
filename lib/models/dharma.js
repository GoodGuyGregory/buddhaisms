var mongoose = require('mongoose');

var DharmaSchema = new Schema(
    {
        teaching: { type: String, required: true}
    }
);

const DharmaSchema = mongoose.model('Dharma', DharmaSchema);

module.exports = mongoose.model('Dharma', DharmaSchema);

