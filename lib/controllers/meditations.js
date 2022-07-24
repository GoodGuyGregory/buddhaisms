const Meditation = require('../models/meditation');

module.exports = {
    config: (req, res) => {
        res.json('inhale to the count of six... hold for two. exhale to the count of four.');
    }
}