const mongoose = require('mongoose');
var async = require('async')

// Models for DB Collections
const Mantra = require('./lib/models/mantra');
const Meditation = require('./lib/models/meditation');
const Sutra = require('./lib/models/sutra');
const DharmaTeaching = require('./lib/models/dharma_teaching');
const dharma_teachings = require('./lib/controllers/dharma_teachings');


//  DB Connection:
mongoose.connect('mongodb://localhost:27017/buddhaisms', { useNewUrlParser: true, useUnifiedTopology: true });


// Creation Helper Functions

function mantraCreate(mantraFromCard) {
    let mantra = new Mantra({ teaching: mantraFromCard });

    mantra.save(function (err) {
        if (err) {
            console.log(err);
            return
        }
        console.log('New Mantra Created...');
    })
}

function meditationCreate(meditationFromCard) {
    let meditation = new Meditation({ teaching: meditationFromCard });

    meditiation.save(function (err) {
        if (err) {
            console.log(err);
            return
        }
        console.log('New Meditation Created...');
    })
}

function sutraCreate(sutraFromCard) {
    let sutra = new Sutra({ teaching: sutraFromCard });

    sutra.save(function (err) {
        if (err) {
            console.log(err);
            return
        }
        console.log('New Sutra Created...');
    })
}

function dharmaTeachingCreate(dharmaFromCard) {
    let dharma = new DharmaTeaching({ teaching: dharmaFromCard });

    dharma.save(function (err) {
        if (err) {
            console.log(err);
            return
        }
        console.log('New Dharma Teaching Created...');
    })
}

//  Sutras:

function createSutraInstances(cb) {
    async.parallel([
        function (callback) {
            sutraCreate("")
        },
    ])
}

//   Meditations:

function createMeditationInstances(cb) {
    async.parallel([
        function (callback) {
            meditationCreate("")
        },
    ])
}

// Mantas:

function createMantraInstances(cb) {
    async.parallel([
        function (callback) {
            mantraCreate("")
        },
    ])
}

//  Dharma Teachings:

function createDharmaInstances(cb) {
    async.parallel([
        function (callback) {
            dharmaTeachingCreate("All of us who are wise and desire liberation, let us strive to live in sincerity.");
        },
        function (callback) {
            dharmaTeachingCreate("Whoever wishes to become a refuge for himself and others should undertake this sacred mystery: to take the place of others, giving them his own place.");
        },
        function (callback) {
            dharmaTeachingCreate("Wisdom shall be our light by day, right mindfulness our protection by night. If we live a pure life, nothing can destroy us; If we conquered greed, nothing can limit our freedom.");
        },
        function (callback) {
            dharmaTeachingCreate("The essence of my mind is instinctive and unique awareness. Let me look inside myself and recognize my own nature.");
        },
        function (callback) {
            dharmaTeachingCreate("There is only one moment in time when it is essential to awaken. That moment is now.");
        },
        function (callback) {
            dharmaTeachingCreate("Let the meditating mind expand, like the face of the waxing moon.");
        },
        function (callback) {
            dharmaTeachingCreate("To study the way is to study the self, to study the self is to forget the self, to forget the self is to be enlightened by the ten thousand things.");
        },
        function (callback) {
            dharmaTeachingCreate("Those whose minds are well grounded in the elements of enlightment, who rejoice in freedom from attachment, whose appetites have been conquered and who are full of light: they are truley liberated, even in this world.");
        },
        function (callback) {
            dharmaTeachingCreate("From the blossoming lotus of devotion, at the centre of my heart, rise, o compassionate master, my only refuge! Remain as the jewel on the crown of my head, the mandala of great bliss, arousing all my mindfulness and awareness!");
        },
        function (callback) {
            dharmaTeachingCreate("When the lamp of the Buddha's mind illuminates sentient beings, eons of darkness are immediately dispelled.");
        },
        function (callback) {
            dharmaTeachingCreate("Though one man may conquer in battle a thousand men a thousand times over, it is he who conqueres himself that is the greatest of conquerors.");
        },
        function (callback) {
            dharmaTeachingCreate("My actions are my only true belongings: I cannot escape their consequences. My actions are the ground on which I stand");
        },
        function (callback) {
            dharmaTeachingCreate("May righteousness come to the wise: a treasure that others cannot share, that no thief can steal - a treasure that does not pass away.");
        }

    ])
}


async.series([
    createDharmaInstances
],
    function (err, results) {
        if (err) {
            console.log('error ' + err);
        }
    });


