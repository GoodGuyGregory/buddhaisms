var mongoose = require('mongoose');

var DharmaTeachingSchema = new Schema(
    {
        teaching: { type: String, required: true}
    }
);

const DharmaTeachingSchema = mongoose.model('DharmaTeaching', DharmaTeachingSchema);

module.exports = mongoose.model('DharmaTeaching', DharmaTeachingSchema);

