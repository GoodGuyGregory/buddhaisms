const DharmaTeaching = require('../models/dharma_teaching');

module.exports = {
    config: (req, res) => {
        res.json('Configured, let the enlightenment commence...');
    }
}