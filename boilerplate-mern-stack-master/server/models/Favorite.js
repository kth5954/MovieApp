const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = mongoose.Schema({
    userFrom: {
        type: Schema.Types.objectId,
        ref: 'User',
    },
    movieId: {
        type: String
    },
    movieTitle: {
        type: String
    },
    moviePost: {
        type: String
    },
    movieRunTime: {
        type: String
    }
}, {timeStamps: true})


const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = { Favorite }