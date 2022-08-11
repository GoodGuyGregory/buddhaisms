const DharmaTeaching = require('../models/dharma_teaching');

module.exports = {
    config: (req, res) => {
        res.json('Configured, let the enlightenment commence...');
    },
    root: (req, res) => {
        DharmaTeaching.find().exec((err, entries) => {
            if (err) {
                res.status(500)
                res.json(err);
                return;
            }
            res.json(entries);
            return;
        });
    }
}