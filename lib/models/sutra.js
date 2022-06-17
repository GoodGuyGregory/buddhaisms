const mongoose = require('mongoose');

const SutraSchema = monogoose.Schema(
    {
        teaching: {
            type: String,
            required: true
        }
    }
)

const Sutra = mongoose.model('Sutra', SutraSchema);

module.exports = Sutra;