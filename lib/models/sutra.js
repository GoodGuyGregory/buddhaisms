const mongoose = require('mongoose');

const SutraSchema = mongoose.Schema(
    {
        teaching: {
            type: String,
            required: true
        }
    }
)

const Sutra = mongoose.model('Sutra', SutraSchema);

module.exports = Sutra;