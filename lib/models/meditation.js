const mongoose = require('mongoose');

const MeditiationSchema = mongoose.Schema(
    {
        teaching: {
            type: String,
            required: true
        }
    }
);


const Meditiation = mongoose.model('Meditation', MeditiationSchema);

model.exports = Meditation;