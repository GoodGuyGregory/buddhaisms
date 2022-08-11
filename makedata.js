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
    ]);
}

// Sutra Teachings:

function createSutraInstances(cb) {
    async.parallel([
        function (callback) {
            sutraCreate("Bend your head and listen well, oh bodhisattva. Compassion speaks: 'Can there be bliss when all that lives must suffer? Shall you be saved and hear the whole world cry?'");
        },
        function (callback) {
            sutraCreate("Just as wings allow a bird to take to the skies, so with the power of wisdom we work for the good of others.");
        },
        function (callback) {
            sutraCreate("O perfect master, who shines upon all things and all folks as gleaming moonlight plays upon a thousand waters, your great compassion does not neglect a single creature");
        },
        function (callback) {
            sutraCreate("Let us go out in a spirit of compassion, and take to others the benefits we have received. Let us teach the way, which is glorious from beginning to end. Let us urge people to live lives of perfect holiness.");
        },
        function (callback) {
            sutraCreate("May I be a lamp for those in darkness, a home for the homeless, and a servant to the world.");
        },
        function (callback) {
            sutraCreate("Those whose minds are filled with compassion will never enter a world dark with woes. No real harm will ever come to anyone who protects all living beings and shows them kindness");
        },
        function (callback) {
            sutraCreate("Loving-kindness is a freedom of the heart, a luminous, blazing radiance.");
        },
        function (callback) {
            sutraCreate("Let our love flow outward through the cosmos to its full height, its full depth, its full extent, an endless love, without hatred or enmity... And our life will bring heaven to earth");
        },
        function (callback) {
            sutraCreate("Even as a mother at the risk of her life would watch over her only child, so let us with boundless mind and goodwill survey the whole world.");
        },
        function (callback) {
            sutraCreate("May I be a protector to those without protection, a leader for those who travel, and a boat, a bridge, a passage for those who seek the farther shore.");
        },
        function (callback) {
            sutraCreate("Compassion is the wish-fulfilling jewel, the auspicious jar from which the brilliance of good fortune comes... It is like the sky, spangled with stars of spotless virtues, always bringing prosperity and bliss.");
        },
        function (callback) {
            sutraCreate("When we awake to the life-giving vow of compassion, we who are like broken tiles and scattered pebbles are transmuted into gold.");
        },
        function (callback) {
            sutraCreate("Although the scent of flowers does not travel against the wind, the scent of a person who is good pervades everywhere.");
        },
    ]);
}

// Mantra Teachings:

function createMantraInstances(cb) {
    async.parallel([
        function (callback) {
            mantraCreate("Meditation is to wisdom as the lamp is to its light.");
        },
        function (callback) {
            mantraCreate("The finest souls, like lotus petals in a pool, are spotless. Muddy water just runs off them. They are never blemished.");
        },
        function (callback) {
            mantraCreate("Within our impure mind the pure mind is to be found.");
        },
        function (callback) {
            mantraCreate("If the inner mind has been tamed, the outer enemy cannot harm me");
        },
        function (callback) {
            mantraCreate("Let a man overcome anger by love, let him overcome evil by good; Let him overcome greed by liberality, Let him overcome the liar by truth.");
        },
        function (callback) {
            mantraCreate("Although my eyes, blinded by passions, do not see the brilliant light that embraces me, the great compassion never tires, always casting its light upon me.");
        },
        function (callback) {
            mantraCreate("He who does his duty is tolerant like the earth, firm as a pillar and clear as a lake: no further births will be in store for such a one.");
        },
        function (callback) {
            mantraCreate("As the bee collects nectar and departs without injuring the flower, so should a man behave in his village.");
        },
        function (callback) {
            mantraCreate("If you stop talking and thinking, then there is nowhere you cannot go. Returning to the source, you gain the meaning; chasing forms, you lose the wholeness. A moment's true insight transcends all.");
        },
        function (callback) {
            mantraCreate("Just as a solid rock remains unshaken by the wind, in the same way neither sights, nor sounds, nor smells, nor tastes can cause a steadfast one to waver. Firm is our mind, and thus we gain salvation.");
        },
        function (callback) {
            mantraCreate("Delgiht in senuous objects is like clouds in the autumn sky: impulsive and unstable. We shall give them up and resort to quiet forest groves.");
        },
        function (callback) {
            mantraCreate("That deed is well done of which a man who does not repent, and the reward of which he receives gladly and cheerfully.");
        },
        function (callback) {
            mantraCreate("Dharma is good, but what constitues dharma? To do no evil and a great deal of good. To be kind, generous, truthful and pure.");
        },
    ])
}

//   Meditations Teachings:

function createMeditationInstances(cb) {
    async.parallel([
        function (callback) {
            meditationCreate("All the water and wine I've consumed have failed to satisfy my thirst or bring me contentment. Let me drink therefore from this stream of enlightened mind, o fortunate ones.");
        },
        function (callback) {
            meditationCreate("Enlightenment is seeing the unseen itself, and in this there is no seeing and no seer - only beginningless, endless calm.");
        },
        function (callback) {
            meditationCreate("If we speak or act with a pure thought, hapiness follows us, like a shadow that never leaves us.");
        },
        function (callback) {
            meditationCreate("Let our worries disperse like clouds in a clear blue sky. Like a thief entering an empty house, bad thoughts can do no harm to an empty mind.");
        },
        function (callback) {
            meditationCreate("The radiance of amid buddha's light of truth surpasses all... However far his light extends, love penetrates: the joy of faith is attained. Take refuge in the great one who gives comfort.");
        },
        function (callback) {
            meditationCreate("He is the bright lamp dispelling the darkness of blind ignorance. He is the wish-granting tree from which comes the happiness of everyone alive. He is the countless rays of the sun of great kindness.");
        },
        function (callback) {
            meditationCreate("If we can be wise, after listening to the laws we become serene, like a deep, smooth, still lake.");
        },
        function (callback) {
            meditationCreate("From one darkness into another darkness soon I must go. Light the long way before me, moon on the mountain rim!");
        },
        function (callback) {
            meditationCreate("Now may every living thing, young or old, weak or strong, living near or far, known or unknown, living or departed or yet unborn, may every living thing be full of bliss.");
        },
        function (callback) {
            meditationCreate("There is pleasure when an itch is scratched, but to be without any itching is more pleasureable still. Likewise, there are pleasures in worldy desires... But to be without desires is more pleasurable still.");
        },
        function (callback) {
            meditationCreate("Omniscient deities, please lend me your ear. Let your great love lead me on the path... And take me to the pure paradise realms.");
        },
        function (callback) {
            meditationCreate("Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.");
        },
        function (callback) {
            meditationCreate("Let us live happily among those who are greedy or ailining, let us live free from greed or ailment! Let us be like the bright gods, feeding on happiness.");
        },


    ])
}

createDharmaInstances();
createSutraInstances();
createMantraInstances();



