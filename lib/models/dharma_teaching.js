const mongoose = require('mongoose');

const DharmaTeachingSchema = mongoose.Schema(
    {
        teaching: String
    }
);

DharmaTeachingSchema.methods.getRandom = function getRandom() {
    return Math.floor(Math.random() * 10);
}

const DharmaTeaching = mongoose.model('DharmaTeaching', DharmaTeachingSchema);

module.exports = DharmaTeaching;

