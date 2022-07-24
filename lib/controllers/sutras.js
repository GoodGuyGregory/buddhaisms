const Sutras = require('../models/sutra');

module.exports = {
    config: (req, res) => {
        res.json('Repeat this phrase to yourself for clarity and focus');
    }
}