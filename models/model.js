const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


module.exports  = mongoose.model('movie', movieSchema);
