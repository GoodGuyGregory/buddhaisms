const mongoose = require('mongoose');

const DharmaTeachingSchema = mongoose.Schema(
    {
        teaching: String
    }
);

DharmaTeaching = mongoose.model('DharmaTeaching', DharmaTeachingSchema);

module.exports = DharmaTeaching;

